/**
 * Cartografía de las Aguas de Abya Yala
 * Algoritmo de Coincidencia de Curvas Estilo Land Lines
 */

class LandLinesMatcher {
    constructor(cuencasData) {
        this.cuencasData = cuencasData;
        this.sampleSize = 16;
        this.precomputeRiverSegments();
    }

    precomputeRiverSegments() {
        this.riverSegments = [];

        this.cuencasData.forEach(cuenca => {
            const river = cuenca.puntosMercator || cuenca.puntosRio;
            if (!river || river.length < 3) return;

            const densePoints = [];
            const steps = 40;
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                densePoints.push(getSplinePoint(river, t));
            }

            const windowSize = 10;
            for (let start = 0; start <= steps - windowSize; start += 4) {
                const subPoints = densePoints.slice(start, start + windowSize);
                const normalized = this.normalizeCurve(subPoints);
                const midT = (start + windowSize / 2) / steps;

                this.riverSegments.push({
                    cuenca: cuenca,
                    t: midT,
                    featureVector: this.calculateTurningAngles(normalized)
                });
            }
        });
    }

    resamplePoints(points, targetCount) {
        if (!points || points.length < 2) return [];

        let totalLength = 0;
        const distances = [0];
        for (let i = 1; i < points.length; i++) {
            const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
            totalLength += d;
            distances.push(totalLength);
        }

        if (totalLength === 0) return [];

        const interval = totalLength / (targetCount - 1);
        const resampled = [{ x: points[0].x, y: points[0].y }];
        let curDist = interval;
        let lastIdx = 0;

        for (let i = 1; i < targetCount - 1; i++) {
            while (lastIdx < distances.length - 1 && distances[lastIdx + 1] < curDist) {
                lastIdx++;
            }
            const segDist = distances[lastIdx + 1] - distances[lastIdx];
            const ratio = segDist === 0 ? 0 : (curDist - distances[lastIdx]) / segDist;

            const p0 = points[lastIdx];
            const p1 = points[lastIdx + 1];

            resampled.push({
                x: p0.x + (p1.x - p0.x) * ratio,
                y: p0.y + (p1.y - p0.y) * ratio
            });

            curDist += interval;
        }

        resampled.push({ x: points[points.length - 1].x, y: points[points.length - 1].y });
        return resampled;
    }

    normalizeCurve(points) {
        const resampled = this.resamplePoints(points, this.sampleSize);
        if (resampled.length < this.sampleSize) return resampled;

        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        resampled.forEach(p => {
            if (p.x < minX) minX = p.x;
            if (p.x > maxX) maxX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.y > maxY) maxY = p.y;
        });

        const span = Math.max(maxX - minX, maxY - minY) || 1;
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        return resampled.map(p => ({
            x: (p.x - cx) / span,
            y: (p.y - cy) / span
        }));
    }

    calculateTurningAngles(normalizedPoints) {
        if (!normalizedPoints || normalizedPoints.length < 3) return [];
        const angles = [];
        for (let i = 1; i < normalizedPoints.length; i++) {
            const dx = normalizedPoints[i].x - normalizedPoints[i - 1].x;
            const dy = normalizedPoints[i].y - normalizedPoints[i - 1].y;
            angles.push(Math.atan2(dy, dx));
        }
        return angles;
    }

    findBestMatch(drawnPoints) {
        if (!drawnPoints || drawnPoints.length < 5) return null;

        const normalizedUser = this.normalizeCurve(drawnPoints);
        const userAngles = this.calculateTurningAngles(normalizedUser);
        if (userAngles.length === 0) return null;

        let bestScore = Infinity;
        let bestMatch = null;

        for (const seg of this.riverSegments) {
            const score = this.compareAngleVectors(userAngles, seg.featureVector);
            if (score < bestScore) {
                bestScore = score;
                bestMatch = seg;
            }
        }

        return {
            match: bestMatch,
            confidence: Math.max(0, 100 - bestScore * 18)
        };
    }

    compareAngleVectors(v1, v2) {
        const len = Math.min(v1.length, v2.length);
        if (len === 0) return Infinity;

        let diffSum = 0;
        for (let i = 0; i < len; i++) {
            let diff = Math.abs(v1[i] - v2[i]);
            if (diff > Math.PI) diff = 2 * Math.PI - diff;
            diffSum += diff * diff;
        }

        return Math.sqrt(diffSum / len);
    }
}
