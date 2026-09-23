/**
 * Cartografía de las Aguas de Abya Yala
 * Paisaje Sonoro Orgánico del Río Reactivo al Movimiento (Web Audio API)
 */

class WaterAmbientAudio {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.isInitialized = false;

        // Nodos de Audio
        this.masterGain = null;
        this.flowGain = null;
        this.deepFilter = null;
        this.rippleFilter = null;
        this.noiseSource = null;

        // Escucha de interacción para desbloqueo automático en navegadores modernos
        this.setupAutoUnlock();
    }

    setupAutoUnlock() {
        const unlock = () => {
            if (!this.isInitialized) {
                this.init();
            } else if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('keydown', unlock);
            window.removeEventListener('wheel', unlock);
        };

        window.addEventListener('pointerdown', unlock, { once: true });
        window.addEventListener('keydown', unlock, { once: true });
        window.addEventListener('wheel', unlock, { once: true });
    }

    init() {
        if (this.isInitialized) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        this.ctx = new AudioContext();

        // 1. Buffer de ruido orgánico continuo (3 segundos de loop suave)
        const bufferSize = this.ctx.sampleRate * 3;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        // Generar ruido rosa/marrón suave (más cálido y natural que el ruido blanco puro)
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99765 * b0 + white * 0.0990460;
            b1 = 0.96300 * b1 + white * 0.161616;
            b2 = 0.57000 * b2 + white * 0.462659;
            output[i] = (b0 + b1 + b2 + white * 0.05) * 0.15;
        }

        this.noiseSource = this.ctx.createBufferSource();
        this.noiseSource.buffer = noiseBuffer;
        this.noiseSource.loop = true;

        // 2. Filtro 1: Caudal profundo (resonancia de aguas bajas y cañones rocosos)
        this.deepFilter = this.ctx.createBiquadFilter();
        this.deepFilter.type = 'lowpass';
        this.deepFilter.frequency.setValueAtTime(280, this.ctx.currentTime);
        this.deepFilter.Q.setValueAtTime(2.2, this.ctx.currentTime);

        // 3. Filtro 2: Murmullo de meandros y corriente superficial (pasa-banda)
        this.rippleFilter = this.ctx.createBiquadFilter();
        this.rippleFilter.type = 'bandpass';
        this.rippleFilter.frequency.setValueAtTime(750, this.ctx.currentTime);
        this.rippleFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

        // 4. Ganancia reactiva al flujo y movimiento
        this.flowGain = this.ctx.createGain();
        this.flowGain.gain.setValueAtTime(0.015, this.ctx.currentTime); // Murmullo base suave

        // 5. Ganancia Maestra
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.09, this.ctx.currentTime);

        // Conectar grafo de audio
        this.noiseSource.connect(this.deepFilter);
        this.noiseSource.connect(this.rippleFilter);

        this.deepFilter.connect(this.flowGain);
        this.rippleFilter.connect(this.flowGain);

        this.flowGain.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);

        this.noiseSource.start(0);
        this.isInitialized = true;
    }

    // Modula el sonido del agua en función del movimiento del usuario en tiempo real
    updateMotion(speed = 0) {
        if (!this.isInitialized || this.isMuted || !this.ctx) return;

        // Normalizar velocidad
        const intensity = Math.min(1.0, speed * 0.4);

        // Al moverte, el caudal y la corriente se escuchan vivos
        const targetGain = 0.015 + intensity * 0.12;
        const targetFreq = 220 + intensity * 480;
        const targetRipple = 650 + intensity * 700;

        const now = this.ctx.currentTime;
        this.flowGain.gain.setTargetAtTime(targetGain, now, 0.12);
        this.deepFilter.frequency.setTargetAtTime(targetFreq, now, 0.15);
        this.rippleFilter.frequency.setTargetAtTime(targetRipple, now, 0.15);
    }

    toggleMute() {
        if (!this.isInitialized) {
            this.init();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        this.isMuted = !this.isMuted;
        if (this.masterGain) {
            const now = this.ctx.currentTime;
            this.masterGain.gain.setTargetAtTime(this.isMuted ? 0.0001 : 0.09, now, 0.2);
        }
        return !this.isMuted;
    }
}
