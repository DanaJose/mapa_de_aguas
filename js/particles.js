/**
 * Cartografía de las Aguas de Abya Yala
 * Simulación Ligera de Gotas de Agua en Espacio Satelital
 */

class WaterParticleSystem {
    constructor(maxParticles = 120) {
        this.maxParticles = maxParticles;
        this.particles = [];
        this.cuencas = [];
    }

    setCuencas(cuencas) {
        this.cuencas = cuencas;
        this.populateParticles();
    }

    populateParticles() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        if (!this.cuencas || this.cuencas.length === 0) return null;
        const cuenca = this.cuencas[Math.floor(Math.random() * this.cuencas.length)];
        const path = cuenca.puntosMercator || cuenca.puntosRio;
        if (!path || path.length < 2) return null;

        return {
            cuencaId: cuenca.id,
            cuenca: cuenca,
            path: path,
            t: Math.random(),
            speed: 0.0003 + Math.random() * 0.0008,
            size: 1.2 + Math.random() * 1.8,
            color: cuenca.colorAgua || "#40A4B4"
        };
    }

    update(activeCuencaId = null) {
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            if (!p) {
                this.particles[i] = this.createParticle();
                continue;
            }

            p.t += p.speed;
            if (p.t >= 1.0) {
                p.t = 0.0;
            }

            const pt = getSplinePoint(p.path, p.t);
            p.x = pt.x;
            p.y = pt.y;
        }
    }

    draw(ctx, camera, activeCuencaId = null) {
        ctx.save();

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            if (!p || typeof p.x !== 'number') continue;

            const isCurrent = (p.cuencaId === activeCuencaId);
            const screenPos = camera.worldToScreen(p.x, p.y);

            // Descartar si está fuera de la pantalla
            if (screenPos.x < -20 || screenPos.x > camera.width + 20 ||
                screenPos.y < -20 || screenPos.y > camera.height + 20) {
                continue;
            }

            // Gota sutil mineral sobre el satélite
            ctx.beginPath();
            ctx.arc(screenPos.x, screenPos.y, p.size * (isCurrent ? 1.4 : 0.9), 0, Math.PI * 2);
            ctx.fillStyle = isCurrent ? "#FFFFFF" : p.color;
            ctx.globalAlpha = isCurrent ? 0.8 : 0.45;
            ctx.fill();
        }

        ctx.restore();
    }
}
