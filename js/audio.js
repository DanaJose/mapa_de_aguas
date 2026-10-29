/**
 * Cartografía de las Aguas de Abya Yala
 * Sistema de Paisaje Sonoro & Música Territorial
 * 1. Síntesis Reactiva de Corriente de Agua (Web Audio API)
 * 2. Reproductor de Música Territorial con Soporte de YouTube y Enlaces Externos
 */

// 1. SÍNTESIS REACTIVA DE AGUA (WEB AUDIO API)
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

        // Buffer de ruido orgánico continuo
        const bufferSize = this.ctx.sampleRate * 4;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        // Generar ruido rosa/marrón orgánico cálido
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99765 * b0 + white * 0.0990460;
            b1 = 0.96300 * b1 + white * 0.161616;
            b2 = 0.57000 * b2 + white * 0.462659;
            output[i] = (b0 + b1 + b2 + white * 0.08) * 0.22;
        }

        this.noiseSource = this.ctx.createBufferSource();
        this.noiseSource.buffer = noiseBuffer;
        this.noiseSource.loop = true;

        // Filtro 1: Caudal profundo (cañones y lechos de roca)
        this.deepFilter = this.ctx.createBiquadFilter();
        this.deepFilter.type = 'lowpass';
        this.deepFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
        this.deepFilter.Q.setValueAtTime(2.4, this.ctx.currentTime);

        // Filtro 2: Murmullo de meandros y corriente superficial
        this.rippleFilter = this.ctx.createBiquadFilter();
        this.rippleFilter.type = 'bandpass';
        this.rippleFilter.frequency.setValueAtTime(800, this.ctx.currentTime);
        this.rippleFilter.Q.setValueAtTime(2.0, this.ctx.currentTime);

        // Ganancia reactiva
        this.flowGain = this.ctx.createGain();
        this.flowGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

        // Ganancia Maestra nítida
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

        // Conectar grafo
        this.noiseSource.connect(this.deepFilter);
        this.noiseSource.connect(this.rippleFilter);
        this.deepFilter.connect(this.flowGain);
        this.rippleFilter.connect(this.flowGain);
        this.flowGain.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);

        this.noiseSource.start(0);
        this.isInitialized = true;
    }

    updateMotion(speed = 0) {
        if (!this.isInitialized || this.isMuted || !this.ctx) return;

        const intensity = Math.min(1.0, speed * 0.45);
        const targetGain = 0.08 + intensity * 0.35;
        const targetFreq = 260 + intensity * 540;
        const targetRipple = 700 + intensity * 800;

        const now = this.ctx.currentTime;
        this.flowGain.gain.setTargetAtTime(targetGain, now, 0.12);
        this.deepFilter.frequency.setTargetAtTime(targetFreq, now, 0.15);
        this.rippleFilter.frequency.setTargetAtTime(targetRipple, now, 0.15);
    }

    toggleMute() {
        if (!this.isInitialized) this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();

        this.isMuted = !this.isMuted;
        if (this.masterGain) {
            const now = this.ctx.currentTime;
            this.masterGain.gain.setTargetAtTime(this.isMuted ? 0.0001 : 0.35, now, 0.15);
        }
        return !this.isMuted;
    }
}

// 2. REPRODUCTOR DE MÚSICA TERRITORIAL (YOUTUBE & ENLACES EXTERNOS)
class AbyaYalaMusicManager {
    constructor() {
        this.storageKey = "abya_yala_custom_music_url";
        this.isPlaying = false;
        this.isMuted = false;
        this.volume = 0.7;

        // Pistas curadas predeterminadas (música sagrada del agua y flautas ancestrales)
        this.presets = [
            {
                id: "preset_1",
                nombre: "Flautas Andinas & Río Sagrado de las Alturas",
                url: "https://www.youtube.com/watch?v=1ZyH_jSgM_0"
            },
            {
                id: "preset_2",
                nombre: "Cantos de la Selva & Lluvia Sagrada de la Amazonía",
                url: "https://www.youtube.com/watch?v=4xDzrJKXOOY"
            },
            {
                id: "preset_3",
                nombre: "Aguas Cristalinas & Viento de la Sierra Madre",
                url: "https://www.youtube.com/watch?v=rW2Y5m_5D-w"
            }
        ];

        this.activeUrl = this.getSavedUrl() || this.presets[0].url;
        this.audioElement = null;
        this.iframeElement = null;
    }

    getSavedUrl() {
        try {
            return localStorage.getItem(this.storageKey);
        } catch (e) {
            return null;
        }
    }

    saveUrl(url) {
        this.activeUrl = url;
        try {
            localStorage.setItem(this.storageKey, url);
        } catch (e) {}
    }

    // Extraer ID de YouTube
    extractYouTubeId(url) {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    // Inicializar reproductor en el DOM
    initPlayer(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        this.container = container;
        // No auto-reproducir antes de que el usuario interactúe
        this.isPlaying = false;
    }

    loadTrack(url) {
        this.activeUrl = url;
        const ytId = this.extractYouTubeId(url);

        if (ytId) {
            if (this.audioElement) {
                this.audioElement.pause();
                this.audioElement.src = "";
            }

            this.savedIframeSrc = `https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1&loop=1&playlist=${ytId}&controls=0&mute=${this.isMuted ? 1 : 0}`;
            this.container.innerHTML = `
                <iframe id="yt-player-frame" 
                    width="200" height="200" 
                    src="${this.savedIframeSrc}" 
                    title="Música de Abya Yala" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    style="position: absolute; width: 1px; height: 1px; opacity: 0.01; pointer-events: none;">
                </iframe>
            `;
            this.iframeElement = document.getElementById("yt-player-frame");
            this.isPlaying = true;
        } else {
            if (this.container) this.container.innerHTML = "";
            this.iframeElement = null;
            if (!this.audioElement) {
                this.audioElement = new Audio();
                this.audioElement.loop = true;
            }
            this.audioElement.src = url;
            this.audioElement.volume = this.volume;
            this.audioElement.muted = this.isMuted;
            this.audioElement.play().catch(() => {});
            this.isPlaying = true;
        }
    }

    toggle() {
        if (this.isPlaying) {
            // Pausar: apagar iframe por completo para detener audio de inmediato sin depender de postMessage
            this.isPlaying = false;
            if (this.container) {
                this.container.innerHTML = "";
            }
            this.iframeElement = null;
            if (this.audioElement) {
                this.audioElement.pause();
            }
        } else {
            // Reanudar: reinstanciar iframe con autoplay garantizado tras el clic
            this.isPlaying = true;
            this.loadTrack(this.activeUrl);
        }
        return this.isPlaying;
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const ytId = this.extractYouTubeId(this.activeUrl);

        if (ytId && this.iframeElement) {
            const command = this.isMuted ? '{"event":"command","func":"mute","args":""}' : '{"event":"command","func":"unMute","args":""}';
            this.iframeElement.contentWindow.postMessage(command, '*');
        } else if (this.audioElement) {
            this.audioElement.muted = this.isMuted;
        }
        return !this.isMuted;
    }
}
