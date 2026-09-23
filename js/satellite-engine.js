/**
 * Cartografía de las Aguas de Abya Yala
 * Motor de Teselas Satelitales Fotorrealistas (Esri World Imagery)
 * Proyección Web Mercator sobre Canvas 2D
 */

class SatelliteTileEngine {
    constructor() {
        // Servidor de satélite de alta resolución global (Esri World Imagery - Acceso abierto CORS)
        this.tileUrlTemplate = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
        this.fallbackUrlTemplate = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}";
        
        this.tileCache = new Map();
        this.tileSize = 256;
        this.maxZoom = 14;
        this.minZoom = 1;
        this.activeRequests = 0;
        this.maxConcurrent = 8;
        this.queue = [];
    }

    // Conversión de Latitud/Longitud a Coordenadas Web Mercator continuas [0, 1]
    static project(lat, lng) {
        const sinLat = Math.sin(lat * Math.PI / 180);
        // Clamp para evitar infinitos en los polos
        const clampedSin = Math.max(-0.9999, Math.min(0.9999, sinLat));
        const x = (lng + 180) / 360;
        const y = 0.5 - Math.log((1 + clampedSin) / (1 - clampedSin)) / (4 * Math.PI);
        return { x, y };
    }

    // Conversión de Mercator [0, 1] a Latitud/Longitud
    static unproject(x, y) {
        const lng = x * 360 - 180;
        const n = Math.PI - 2 * Math.PI * y;
        const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
        return { lat, lng };
    }

    // Obtiene o solicita una tesela satelital
    getTile(z, x, y) {
        const key = `${z}/${y}/${x}`;
        if (this.tileCache.has(key)) {
            return this.tileCache.get(key);
        }

        const tile = {
            image: new Image(),
            loaded: false,
            error: false
        };

        tile.image.crossOrigin = "anonymous";
        tile.image.onload = () => {
            tile.loaded = true;
            this.activeRequests = Math.max(0, this.activeRequests - 1);
            this.processQueue();
        };
        tile.image.onerror = () => {
            // Reintentar con mapa de relieve físico si la imagen satelital falla
            tile.image.src = this.fallbackUrlTemplate
                .replace("{z}", z)
                .replace("{y}", y)
                .replace("{x}", x);
            tile.error = true;
            this.activeRequests = Math.max(0, this.activeRequests - 1);
            this.processQueue();
        };

        this.tileCache.set(key, tile);
        this.queueTileLoad(tile, z, y, x);

        return tile;
    }

    queueTileLoad(tile, z, y, x) {
        if (this.activeRequests < this.maxConcurrent) {
            this.activeRequests++;
            tile.image.src = this.tileUrlTemplate
                .replace("{z}", z)
                .replace("{y}", y)
                .replace("{x}", x);
        } else {
            this.queue.push({ tile, z, y, x });
        }
    }

    processQueue() {
        while (this.activeRequests < this.maxConcurrent && this.queue.length > 0) {
            const item = this.queue.shift();
            this.activeRequests++;
            item.tile.image.src = this.tileUrlTemplate
                .replace("{z}", item.z)
                .replace("{y}", item.y)
                .replace("{x}", item.x);
        }
    }

    /**
     * Renderiza el mosaico satelital cubriendo la vista de la cámara
     * @param {CanvasRenderingContext2D} ctx - Contexto 2D del canvas
     * @param {Object} camera - Cámara con posición (mercatorX, mercatorY) y zoom continuo
     * @param {number} viewWidth - Ancho en píxeles del viewport
     * @param {number} viewHeight - Alto en píxeles del viewport
     */
    render(ctx, camera, viewWidth, viewHeight) {
        // Nivel de zoom de teselas entero más cercano
        const continuousZoom = camera.zoom;
        const tileZoom = Math.max(this.minZoom, Math.min(this.maxZoom, Math.floor(continuousZoom)));
        const numTiles = Math.pow(2, tileZoom);
        const scaleAtTileZoom = Math.pow(2, continuousZoom - tileZoom);

        // Centro en coordenadas de píxeles del nivel tileZoom
        const centerX = camera.x * numTiles * this.tileSize;
        const centerY = camera.y * numTiles * this.tileSize;

        // Rango de píxeles visibles en el espacio del nivel tileZoom
        const halfW = (viewWidth / 2) / scaleAtTileZoom;
        const halfH = (viewHeight / 2) / scaleAtTileZoom;

        const minPixelX = centerX - halfW;
        const maxPixelX = centerX + halfW;
        const minPixelY = centerY - halfH;
        const maxPixelY = centerY + halfH;

        // Rango de teselas visibles
        const minTileX = Math.floor(minPixelX / this.tileSize);
        const maxTileX = Math.floor(maxPixelX / this.tileSize);
        const minTileY = Math.max(0, Math.floor(minPixelY / this.tileSize));
        const maxTileY = Math.min(numTiles - 1, Math.floor(maxPixelY / this.tileSize));

        ctx.save();
        // Transformar espacio de pantalla con centro en la cámara
        ctx.translate(viewWidth / 2, viewHeight / 2);
        ctx.rotate(camera.rotation || 0);
        ctx.scale(scaleAtTileZoom, scaleAtTileZoom);

        for (let ty = minTileY; ty <= maxTileY; ty++) {
            for (let tx = minTileX; tx <= maxTileX; tx++) {
                // Manejar envoltura horizontal del planeta
                const wrappedTx = ((tx % numTiles) + numTiles) % numTiles;

                const tile = this.getTile(tileZoom, wrappedTx, ty);

                // Posición relativa al centro de la cámara en píxeles de tileZoom
                const destX = tx * this.tileSize - centerX;
                const destY = ty * this.tileSize - centerY;

                if (tile.loaded) {
                    ctx.drawImage(tile.image, destX, destY, this.tileSize, this.tileSize);
                } else {
                    // Si aún está descargando, intentar dibujar la tesela padre de menor zoom
                    this.drawFallbackParentTile(ctx, tileZoom, wrappedTx, ty, destX, destY);
                }
            }
        }

        // Tinte sutil terracota/orgánico para calidez fotorrealista y armonía con el Figma
        ctx.fillStyle = "rgba(168, 74, 21, 0.04)";
        ctx.fillRect(-halfW, -halfH, halfW * 2, halfH * 2);

        // Viñeteado suave en los bordes
        ctx.restore();
    }

    // Dibuja la tesela de nivel inferior (padre) para evitar pantallas negras durante la carga
    drawFallbackParentTile(ctx, z, x, y, destX, destY) {
        if (z <= 1) {
            ctx.fillStyle = "#0c232d";
            ctx.fillRect(destX, destY, this.tileSize, this.tileSize);
            return;
        }

        const parentZ = z - 1;
        const parentX = Math.floor(x / 2);
        const parentY = Math.floor(y / 2);
        const key = `${parentZ}/${parentY}/${parentX}`;

        const parentTile = this.tileCache.get(key);
        if (parentTile && parentTile.loaded) {
            // Recorte del cuadrante correspondiente
            const subX = (x % 2) * (this.tileSize / 2);
            const subY = (y % 2) * (this.tileSize / 2);
            ctx.drawImage(
                parentTile.image,
                subX, subY, this.tileSize / 2, this.tileSize / 2,
                destX, destY, this.tileSize, this.tileSize
            );
        } else {
            ctx.fillStyle = "#0c232d";
            ctx.fillRect(destX, destY, this.tileSize, this.tileSize);
        }
    }
}
