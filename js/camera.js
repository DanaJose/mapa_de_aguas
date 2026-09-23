/**
 * Cartografía de las Aguas de Abya Yala
 * Cámara Geográfica y Encuadre Dinámico Satelital
 */

class DynamicCamera {
    constructor(viewWidth, viewHeight) {
        this.width = viewWidth;
        this.height = viewHeight;

        // Centro geográfico de Abya Yala (Lat: 10° N, Lng: -80° W)
        const initialCenter = SatelliteTileEngine.project(8.0, -82.0);
        this.x = initialCenter.x;
        this.y = initialCenter.y;
        this.zoom = 3.3; // Nivel de zoom continuo para abarcar todo el continente
        this.rotation = 0;

        // Objetivos para interpolación suave
        this.targetX = this.x;
        this.targetY = this.y;
        this.targetZoom = this.zoom;
        this.targetRotation = 0;

        // Factores de amortiguación LERP
        this.lerpFactor = 0.055;
        this.zoomLerpFactor = 0.065;
        this.rotationLerpFactor = 0.045;

        // Estado fluvial
        this.activeCuenca = null;
        this.riverT = 0.0;
        this.targetRiverT = 0.0;
        this.isFollowingRiver = false;
        this.autoPlayTour = false;
        this.autoPlaySpeed = 0.0006;

        // Velocidad física para alimentar el sonido del río
        this.currentSpeed = 0;
        this.lastX = this.x;
        this.lastY = this.y;

        // Límites de zoom
        this.minZoom = 2.4;
        this.maxZoom = 12.0;
    }

    resize(w, h) {
        this.width = w;
        this.height = h;
    }

    focusOverview() {
        this.isFollowingRiver = false;
        this.autoPlayTour = false;
        const center = SatelliteTileEngine.project(8.0, -82.0);
        this.targetX = center.x;
        this.targetY = center.y;
        this.targetZoom = (this.width < 768) ? 2.6 : 3.3;
        this.targetRotation = 0;
    }

    setCuenca(cuenca, startT = 0.0) {
        this.activeCuenca = cuenca;
        this.targetRiverT = startT;
        this.riverT = startT;
        this.isFollowingRiver = true;
        cuenca.discoveredMaxT = Math.max(cuenca.discoveredMaxT || 0, startT + 0.15);
        this.updateTargetFromRiverT();
    }

    focusNode(node) {
        this.isFollowingRiver = false;
        this.autoPlayTour = false;
        this.targetX = node.x;
        this.targetY = node.y;
        this.targetZoom = 8.5; // Zoom detallado de satélite
        this.targetRotation = 0;
    }

    nudgeRiver(deltaT) {
        if (!this.activeCuenca) return;
        this.isFollowingRiver = true;
        this.targetRiverT = Math.max(0, Math.min(1, this.targetRiverT + deltaT));
        this.activeCuenca.discoveredMaxT = Math.max(this.activeCuenca.discoveredMaxT || 0, this.targetRiverT);
    }

    updateTargetFromRiverT() {
        if (!this.activeCuenca || !this.activeCuenca.puntosMercator) return;

        const info = getSplinePoint(this.activeCuenca.puntosMercator, this.riverT);
        this.targetX = info.x;
        this.targetY = info.y;

        // Zoom dinámico:
        // Más cercano en nacientes/cañones (zoom 8.2), más amplio en desembocaduras (zoom 6.8)
        const baseZoom = 7.4;
        const zoomModifier = (1.0 - this.riverT) * 0.9;
        this.targetZoom = baseZoom + zoomModifier;

        // Rotación sutil que acompaña la dirección del río
        if (typeof info.angle === 'number') {
            this.targetRotation = Math.sin(info.angle) * 0.14;
        }
    }

    update() {
        if (this.autoPlayTour && this.activeCuenca) {
            this.targetRiverT += this.autoPlaySpeed;
            if (this.targetRiverT > 1.0) this.targetRiverT = 0.0;
            this.activeCuenca.discoveredMaxT = Math.max(this.activeCuenca.discoveredMaxT || 0, this.targetRiverT);
        }

        if (this.isFollowingRiver && this.activeCuenca) {
            this.riverT += (this.targetRiverT - this.riverT) * 0.08;
            this.activeCuenca.discoveredMaxT = Math.max(this.activeCuenca.discoveredMaxT || 0, this.riverT);
            this.updateTargetFromRiverT();
        }

        const prevX = this.x;
        const prevY = this.y;

        this.x += (this.targetX - this.x) * this.lerpFactor;
        this.y += (this.targetY - this.y) * this.lerpFactor;
        this.zoom += (this.targetZoom - this.zoom) * this.zoomLerpFactor;
        this.rotation += (this.targetRotation - this.rotation) * this.rotationLerpFactor;

        // Cálculo de velocidad instantánea escalada para modular audio
        const frameDist = Math.hypot(this.x - prevX, this.y - prevY) * Math.pow(2, this.zoom);
        this.currentSpeed = this.currentSpeed * 0.82 + frameDist * 0.18;
    }

    // Conversión de coordenadas de Mundo Mercator [0, 1] a Pantalla
    worldToScreen(worldX, worldY) {
        const scale = Math.pow(2, this.zoom) * 256;
        let dx = (worldX - this.x) * scale;
        let dy = (worldY - this.y) * scale;

        // Aplicar rotación
        const cos = Math.cos(this.rotation);
        const sin = Math.sin(this.rotation);
        const rx = dx * cos - dy * sin;
        const ry = dx * sin + dy * cos;

        return {
            x: this.width / 2 + rx,
            y: this.height / 2 + ry
        };
    }

    // Conversión de Pantalla a Mundo Mercator [0, 1]
    screenToWorld(screenX, screenY) {
        let dx = screenX - this.width / 2;
        let dy = screenY - this.height / 2;

        const cos = Math.cos(-this.rotation);
        const sin = Math.sin(-this.rotation);
        const rx = dx * cos - dy * sin;
        const ry = dx * sin + dy * cos;

        const scale = Math.pow(2, this.zoom) * 256;
        return {
            x: this.x + rx / scale,
            y: this.y + ry / scale
        };
    }
}
