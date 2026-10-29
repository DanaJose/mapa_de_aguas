/**
 * Cartografía de las Aguas de Abya Yala
 * Controlador Principal, Inmersión Fotorrealista y Red de 94 Defensas Territoriales
 * 1. Sistema Vascular de Venas de Agua (Conexiones Orgánicas)
 * 2. Reproductor de Música Territorial (YouTube & Enlaces Externos)
 * 3. Fotografías de Alto Impacto en Llegada a Nodos & Eco-Mode
 */

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. ELEMENTOS DEL DOM
    // ==========================================
    
    // Portal de Entrada (Collage Estilo Land Lines)
    const portalScreen = document.getElementById("portal-screen");
    const btnPortalDrag = document.getElementById("btn-portal-drag");
    const btnPortalDraw = document.getElementById("btn-portal-draw");
    const btnPortalStruggles = document.getElementById("btn-portal-struggles");
    const btnPortalFree = document.getElementById("btn-portal-free");
    const btnPortalHome = document.getElementById("btn-portal-home");

    // Lienzos
    const mapCanvas = document.getElementById("map-canvas");
    const drawCanvas = document.getElementById("draw-canvas");
    const ctx = mapCanvas.getContext("2d");
    const drawCtx = drawCanvas.getContext("2d");

    // Barra Superior Flotante
    const btnRiverDropdown = document.getElementById("btn-river-dropdown");
    const currentRiverName = document.getElementById("current-river-name");
    const riverMenu = document.getElementById("river-menu");

    const btnModeFlow = document.getElementById("btn-mode-flow");
    const btnModeDraw = document.getElementById("btn-mode-draw");
    const btnModeFree = document.getElementById("btn-mode-free");

    const btnToggleStruggles = document.getElementById("btn-toggle-struggles");
    const btnToggleConnections = document.getElementById("btn-toggle-connections");
    const btnToggleDossier = document.getElementById("btn-toggle-dossier");

    // Música, Eco, Audio y Pantalla Completa
    const btnToggleMusic = document.getElementById("btn-toggle-music");
    const musicBtnLabel = document.getElementById("music-btn-label");
    const btnConfigMusic = document.getElementById("btn-config-music");
    const btnEcoMode = document.getElementById("btn-eco-mode");
    const ecoIcon = document.getElementById("eco-icon");
    const btnAudio = document.getElementById("btn-audio");
    const audioIcon = document.getElementById("audio-icon");
    const btnFullscreen = document.getElementById("btn-fullscreen");
    const fullscreenIcon = document.getElementById("fullscreen-icon");

    // Banner de Llegada Cinemática a Nodos
    const nodeArrivalBanner = document.getElementById("node-arrival-banner");
    const arrivalBannerImg = document.getElementById("arrival-banner-img");
    const arrivalNumPill = document.getElementById("arrival-num-pill");
    const arrivalCountryTag = document.getElementById("arrival-country-tag");
    const arrivalTitle = document.getElementById("arrival-title");
    const arrivalThreat = document.getElementById("arrival-threat");
    const btnArrivalOpenDossier = document.getElementById("btn-arrival-open-dossier");
    const btnArrivalClose = document.getElementById("btn-arrival-close");

    // Dossier Lateral (Ficha Territorial e Hidrológica)
    const territoryDossier = document.getElementById("territory-dossier");
    const btnCloseDossier = document.getElementById("btn-close-dossier");
    const tabBtnHydro = document.getElementById("tab-btn-hydro");
    const tabBtnStruggles = document.getElementById("tab-btn-struggles");
    const paneHydro = document.getElementById("pane-hydro");
    const paneStruggles = document.getElementById("pane-struggles");

    // Elementos Dossier - Hidrología
    const hydroRiverImg = document.getElementById("hydro-river-img");
    const btnZoomPhoto = document.getElementById("btn-zoom-photo");
    const hydroRegionPill = document.getElementById("hydro-region-pill");
    const hydroRiverTitle = document.getElementById("hydro-river-title");
    const hydroRiverSub = document.getElementById("hydro-river-sub");
    const metricLength = document.getElementById("metric-length");
    const metricArea = document.getElementById("metric-area");
    const metricFlow = document.getElementById("metric-flow");
    const hydroRiverDesc = document.getElementById("hydro-river-desc");
    const hydroWaypointsList = document.getElementById("hydro-waypoints-list");

    // Elementos Dossier - Luchas
    const struggleBadgeNum = document.getElementById("struggle-badge-num");
    const struggleBadgeCountry = document.getElementById("struggle-badge-country");
    const struggleNodeTitle = document.getElementById("struggle-node-title");
    const struggleNodeCuenca = document.getElementById("struggle-node-cuenca");
    const struggleNodeThreat = document.getElementById("struggle-node-threat");
    const struggleNodeCommunities = document.getElementById("struggle-node-communities");
    const struggleNodeDesc = document.getElementById("struggle-node-desc");
    const btnEditCurrentStruggle = document.getElementById("btn-edit-current-struggle");
    const btnOpenCatalogFromDossier = document.getElementById("btn-open-catalog-from-dossier");

    // Timeline Inferior
    const timelineOrigin = document.getElementById("timeline-origin");
    const timelineProgressPct = document.getElementById("timeline-progress-pct");
    const timelineDest = document.getElementById("timeline-dest");
    const timelineTrackWrapper = document.getElementById("timeline-track-wrapper");
    const timelineProgressFill = document.getElementById("timeline-progress-fill");
    const timelineHandle = document.getElementById("timeline-handle");
    const timelineWaypointsLayer = document.getElementById("timeline-waypoints-layer");
    const hintPill = document.getElementById("hint-pill");

    // Modal Catálogo 94 Luchas
    const strugglesModal = document.getElementById("struggles-index-modal");
    const btnCloseStrugglesModal = document.getElementById("btn-close-struggles-modal");
    const strugglesSearchInput = document.getElementById("struggles-search-input");
    const strugglesGridContainer = document.getElementById("struggles-grid-container");
    const filterPills = document.querySelectorAll(".filter-pill");

    // Modal Editor de Memoria
    const editorModal = document.getElementById("editor-modal");
    const btnCloseEditorModal = document.getElementById("btn-close-editor-modal");
    const btnCancelEditor = document.getElementById("btn-cancel-editor");
    const btnSaveMemory = document.getElementById("btn-save-memory");
    const btnExportJson = document.getElementById("btn-export-json");
    const editNodeNum = document.getElementById("edit-node-num");
    const editNodeName = document.getElementById("edit-node-name");
    const editNodeCuenca = document.getElementById("edit-node-cuenca");
    const editNodeCountry = document.getElementById("edit-node-country");
    const editNodeThreat = document.getElementById("edit-node-threat");
    const editNodeCommunities = document.getElementById("edit-node-communities");
    const editNodeText = document.getElementById("edit-node-text");
    const editNodeImage = document.getElementById("edit-node-image");

    // Modal Fotográfico
    const photoModal = document.getElementById("photo-modal");
    const photoModalImg = document.getElementById("photo-modal-img");
    const photoModalTitle = document.getElementById("photo-modal-title");
    const photoModalDesc = document.getElementById("photo-modal-desc");
    const photoModalClose = document.getElementById("photo-modal-close");

    // Modal de Música & YouTube
    const musicModal = document.getElementById("music-modal");
    const btnCloseMusicModal = document.getElementById("btn-close-music-modal");
    const btnCancelMusic = document.getElementById("btn-cancel-music");
    const btnSaveMusic = document.getElementById("btn-save-music");
    const musicUrlInput = document.getElementById("music-url-input");
    const musicPresetsList = document.getElementById("music-presets-list");

    // ==========================================
    // 2. MÓDULOS Y ESTADO DEL SISTEMA
    // ==========================================
    const satelliteEngine = new SatelliteTileEngine();
    const camera = new DynamicCamera(window.innerWidth, window.innerHeight);
    const particleSystem = new WaterParticleSystem(120);
    const audioSystem = new WaterAmbientAudio();
    const matcher = new LandLinesMatcher(CUENCAS_GEO_DATA);
    const luchasStore = new Luchas94Store();
    const musicManager = new AbyaYalaMusicManager();

    // Caché de imágenes precargadas para nodos
    const nodeImageCache = new Map();

    particleSystem.setCuencas(CUENCAS_GEO_DATA);

    let currentMode = "flow";
    let activeCuencaIndex = 0;
    let activeCuenca = CUENCAS_GEO_DATA[activeCuencaIndex];
    let activeStruggleNode = luchasStore.getNodeByNum(1);
    let showStrugglesLayer = true;
    let showConnections = true; // Activo por defecto para que las venas sean visibles
    let currentCatalogFilter = "all";
    let isEcoMode = false;
    let arrivalBannerTimer = null;
    let lastVisitedWaypointIdx = -1;

    // Estado del ratón y trazo
    let isMouseDown = false;
    let isScrubbing = false;
    let mouseStart = { x: 0, y: 0 };
    let cameraStart = { x: 0, y: 0 };
    let userDrawnStroke = [];

    // ==========================================
    // 3. INICIALIZACIÓN Y TAMAÑO DE LIENZO
    // ==========================================
    function resizeCanvases() {
        const dpr = window.devicePixelRatio || 1;
        const w = window.innerWidth;
        const h = window.innerHeight;

        mapCanvas.width = w * dpr;
        mapCanvas.height = h * dpr;
        mapCanvas.style.width = w + "px";
        mapCanvas.style.height = h + "px";
        ctx.scale(dpr, dpr);

        drawCanvas.width = w * dpr;
        drawCanvas.height = h * dpr;
        drawCanvas.style.width = w + "px";
        drawCanvas.style.height = h + "px";
        drawCtx.scale(dpr, dpr);

        camera.resize(w, h);
    }

    window.addEventListener("resize", resizeCanvases);
    resizeCanvases();

    buildCategorizedRiverMenu();
    updateDossierHydro(activeCuenca);
    updateDossierStruggle(activeStruggleNode);
    buildTimelineWaypoints(activeCuenca);
    buildStrugglesGrid();
    buildMusicPresetsUI();

    // Precargar imágenes clave
    preloadNodeImages();

    // Inicializar reproductor de YouTube / Audio
    musicManager.initPlayer("youtube-audio-container");

    // ==========================================
    // 4. PORTAL DE ENTRADA (LAND LINES)
    // ==========================================
    function enterExperience(mode, openStruggles = false) {
        portalScreen.classList.add("dissolved");
        setMode(mode);

        // Iniciar audio reactivo y música territorial
        audioSystem.init();
        if (!musicManager.isPlaying) {
            musicManager.loadTrack(musicManager.activeUrl);
            updateMusicButtonUI();
        }

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }

        if (openStruggles) {
            showStrugglesLayer = true;
            btnToggleStruggles.classList.add("active");
            openDossierTab("struggles");
            openStrugglesCatalog();
        } else if (mode === "flow") {
            selectCuenca(0, 0.0);
        } else if (mode === "free") {
            camera.focusOverview();
        }
    }

    btnPortalDrag.addEventListener("click", () => enterExperience("flow"));
    btnPortalDraw.addEventListener("click", () => enterExperience("draw"));
    btnPortalStruggles.addEventListener("click", () => enterExperience("flow", true));
    btnPortalFree.addEventListener("click", () => enterExperience("free"));

    btnPortalHome.addEventListener("click", () => {
        portalScreen.classList.remove("dissolved");
    });

    // ==========================================
    // 5. BANNER CINEMÁTICO DE LLEGADA A NODOS
    // ==========================================
    function showArrivalBanner(node) {
        if (!node) return;
        clearTimeout(arrivalBannerTimer);

        const imgUrl = getNodePhotoUrl(node);
        arrivalBannerImg.onerror = () => {
            arrivalBannerImg.src = "assets/abya_yala_red_hidrica.png";
        };
        arrivalBannerImg.src = imgUrl;
        arrivalNumPill.textContent = `# ${node.num || '📍'}`;
        arrivalCountryTag.textContent = node.pais || activeCuenca.categoria;
        arrivalTitle.textContent = node.nombre;
        arrivalThreat.textContent = node.amenaza || node.importancia || (node.texto || "").substring(0, 95) + "...";

        nodeArrivalBanner.classList.add("visible");

        // Ocultar suavemente después de 9 segundos
        arrivalBannerTimer = setTimeout(() => {
            nodeArrivalBanner.classList.remove("visible");
        }, 9000);
    }

    btnArrivalClose.addEventListener("click", () => {
        nodeArrivalBanner.classList.remove("visible");
        clearTimeout(arrivalBannerTimer);
    });

    btnArrivalOpenDossier.addEventListener("click", () => {
        nodeArrivalBanner.classList.remove("visible");
        openDossierTab("struggles");
    });

    function getNodePhotoUrl(node) {
        if (node.imagen && node.imagen.trim() !== "") return node.imagen;
        if (activeCuenca.imagenes && activeCuenca.imagenes[0]) return activeCuenca.imagenes[0].url;

        // Fallbacks curados por temática territorial
        const fallbacks = [
            "assets/rio_bravo_canon.jpg",
            "assets/mackenzie_meandros.jpg",
            "assets/abya_yala_red_hidrica.png",
            "assets/red_luchas_abya_yala.png",
            "assets/america_continente.jpg"
        ];
        return fallbacks[(node.num || 0) % fallbacks.length];
    }

    function preloadNodeImages() {
        const keyImages = [
            "assets/rio_bravo_canon.jpg",
            "assets/mackenzie_meandros.jpg",
            "assets/mackenzie_mapa.jpg",
            "assets/abya_yala_red_hidrica.png",
            "assets/red_luchas_abya_yala.png",
            "assets/america_continente.jpg"
        ];
        keyImages.forEach(src => {
            const img = new Image();
            img.src = src;
            nodeImageCache.set(src, img);
        });
    }

    // ==========================================
    // 6. MÚSICA & CONFIGURACIÓN EXTERNA (YOUTUBE)
    // ==========================================
    function updateMusicButtonUI() {
        if (musicManager.isPlaying && !musicManager.isMuted) {
            btnToggleMusic.classList.add("active");
            musicBtnLabel.textContent = "Pausar Música";
            btnToggleMusic.title = "Clic para pausar la música territorial";
        } else {
            btnToggleMusic.classList.remove("active");
            musicBtnLabel.textContent = "Reproducir Música";
            btnToggleMusic.title = "Clic para activar la música territorial";
        }
    }

    btnToggleMusic.addEventListener("click", () => {
        musicManager.toggle();
        updateMusicButtonUI();
    });

    btnConfigMusic.addEventListener("click", () => {
        musicUrlInput.value = musicManager.activeUrl;
        musicModal.classList.add("open");
    });

    btnCloseMusicModal.addEventListener("click", () => {
        musicModal.classList.remove("open");
    });

    btnCancelMusic.addEventListener("click", () => {
        musicModal.classList.remove("open");
    });

    musicModal.addEventListener("click", (e) => {
        if (e.target === musicModal) musicModal.classList.remove("open");
    });

    btnSaveMusic.addEventListener("click", () => {
        const url = musicUrlInput.value.trim();
        if (url) {
            musicManager.saveUrl(url);
            musicManager.loadTrack(url);
            updateMusicButtonUI();
            musicModal.classList.remove("open");
            hintPill.innerHTML = `🎵 <span>Música vinculada:</span> Se ha actualizado el paisaje sonoro territorial.`;
        }
    });

    function buildMusicPresetsUI() {
        musicPresetsList.innerHTML = "";
        musicManager.presets.forEach(preset => {
            const btn = document.createElement("button");
            btn.className = "music-preset-btn" + (musicManager.activeUrl === preset.url ? " active" : "");
            btn.innerHTML = `<span>🪈 ${preset.nombre}</span> <small>YouTube</small>`;
            btn.addEventListener("click", () => {
                musicUrlInput.value = preset.url;
                musicManager.saveUrl(preset.url);
                musicManager.loadTrack(preset.url);
                updateMusicButtonUI();
                musicModal.classList.remove("open");
                hintPill.innerHTML = `🎵 <span>Pista activa:</span> ${preset.nombre}`;
            });
            musicPresetsList.appendChild(btn);
        });
    }

    // ==========================================
    // 7. MODO ECOLÓGICO (GREEN WEB / BAJO CONSUMO)
    // ==========================================
    btnEcoMode.addEventListener("click", () => {
        isEcoMode = !isEcoMode;
        btnEcoMode.classList.toggle("eco-active", isEcoMode);
        ecoIcon.textContent = isEcoMode ? "🍃" : "🌱";
        if (isEcoMode) {
            hintPill.innerHTML = `🌱 <span>Modo Eco Activado:</span> Ahorro del 70% de GPU al reposar y renderizado optimizado de bajo impacto.`;
        } else {
            hintPill.innerHTML = `Modo Alto Rendimiento Cinemático`;
        }
    });

    // Pausar en pestaña oculta (Page Visibility API)
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (musicManager.isPlaying) musicManager.toggle();
        }
    });

    // Pantalla completa y audio reactivo
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            fullscreenIcon.textContent = "✕";
            btnFullscreen.title = "Salir de Pantalla Completa";
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
            }
            fullscreenIcon.textContent = "⛶";
            btnFullscreen.title = "Pantalla Completa";
        }
    }

    btnFullscreen.addEventListener("click", toggleFullscreen);

    btnAudio.addEventListener("click", () => {
        const isAudible = audioSystem.toggleMute();
        btnAudio.classList.toggle("active", isAudible);
        audioIcon.textContent = isAudible ? "🔊" : "🔇";
    });

    // ==========================================
    // 8. SELECTOR CATEGORIZADO DE CUENCAS
    // ==========================================
    function buildCategorizedRiverMenu() {
        riverMenu.innerHTML = "";

        const categorias = [
            { nombre: "Norteamérica & Ártico", items: [] },
            { nombre: "Centro de Abya Yala & Mesoamérica", items: [] },
            { nombre: "Sudamérica & Andes", items: [] },
            { nombre: "Cono Sur & Patagonia", items: [] }
        ];

        CUENCAS_GEO_DATA.forEach((cuenca, idx) => {
            cuenca._index = idx;
            if (cuenca.categoria === "Norteamérica") categorias[0].items.push(cuenca);
            else if (cuenca.categoria === "Centroamérica") categorias[1].items.push(cuenca);
            else if (cuenca.categoria === "Sudamérica") categorias[2].items.push(cuenca);
            else categorias[3].items.push(cuenca);
        });

        categorias.forEach(cat => {
            const col = document.createElement("div");
            col.className = "river-menu-column";

            const header = document.createElement("div");
            header.className = "river-menu-header";
            header.textContent = cat.nombre;
            col.appendChild(header);

            cat.items.forEach(cuenca => {
                const item = document.createElement("button");
                item.className = "river-menu-item" + (cuenca._index === activeCuencaIndex ? " active" : "");
                item.innerHTML = `
                    <span>${cuenca.nombre}</span>
                    <small>${cuenca.subtitulo.substring(0, 36)}...</small>
                `;
                item.addEventListener("click", () => {
                    selectCuenca(cuenca._index, 0.0);
                    riverMenu.classList.remove("open");
                });
                col.appendChild(item);
            });

            riverMenu.appendChild(col);
        });
    }

    btnRiverDropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        riverMenu.classList.toggle("open");
    });

    window.addEventListener("click", () => {
        riverMenu.classList.remove("open");
    });

    function selectCuenca(idx, startT = 0.0) {
        activeCuencaIndex = idx;
        activeCuenca = CUENCAS_GEO_DATA[idx];
        currentRiverName.textContent = activeCuenca.nombre;
        lastVisitedWaypointIdx = -1;

        const items = riverMenu.querySelectorAll(".river-menu-item");
        items.forEach(it => it.classList.remove("active"));

        camera.setCuenca(activeCuenca, startT);
        updateDossierHydro(activeCuenca);
        buildTimelineWaypoints(activeCuenca);

        if (currentMode === "draw") {
            setMode("flow");
        }
    }

    // ==========================================
    // 9. GESTIÓN DE MODOS Y CAPAS
    // ==========================================
    function setMode(mode) {
        currentMode = mode;
        [btnModeFlow, btnModeDraw, btnModeFree].forEach(b => b.classList.remove("active"));
        mapCanvas.classList.remove("drawing");
        drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        userDrawnStroke = [];

        if (mode === "flow") {
            btnModeFlow.classList.add("active");
            camera.isFollowingRiver = true;
            camera.autoPlayTour = false;
            hintPill.innerHTML = `Arrastra para fluir &bull; <span>El sonido del río vive en tu movimiento</span>`;
        } else if (mode === "draw") {
            btnModeDraw.classList.add("active");
            mapCanvas.classList.add("drawing");
            camera.isFollowingRiver = false;
            camera.autoPlayTour = false;
            hintPill.innerHTML = `✏️ <span>Land Lines:</span> Dibuja un meandro o trazo en la pantalla para buscar un río`;
        } else if (mode === "free") {
            btnModeFree.classList.add("active");
            camera.isFollowingRiver = false;
            camera.autoPlayTour = false;
            hintPill.innerHTML = `Exploración libre con dimensiones oficiales UN-GGIM de toda Abya Yala`;
        }
    }

    btnModeFlow.addEventListener("click", () => setMode("flow"));
    btnModeDraw.addEventListener("click", () => setMode("draw"));
    btnModeFree.addEventListener("click", () => {
        setMode("free");
        camera.focusOverview();
    });

    btnToggleStruggles.addEventListener("click", () => {
        showStrugglesLayer = !showStrugglesLayer;
        btnToggleStruggles.classList.toggle("active", showStrugglesLayer);
    });
    btnToggleStruggles.classList.add("active");

    btnToggleConnections.addEventListener("click", () => {
        showConnections = !showConnections;
        btnToggleConnections.classList.toggle("active", showConnections);
        if (showConnections) {
            hintPill.innerHTML = `🔗 <span>Sistema Vascular Vivo:</span> 12 arterias continentales, sinapsis de confluencia y acuíferos activos.`;
        } else {
            hintPill.innerHTML = `Venas intercuencas y sinapsis desactivadas`;
        }
    });
    btnToggleConnections.classList.add("active");

    // ==========================================
    // 10. DOSSIER LATERAL (FICHA TERRITORIAL)
    // ==========================================
    btnToggleDossier.addEventListener("click", () => {
        territoryDossier.classList.toggle("collapsed");
        btnToggleDossier.classList.toggle("active", !territoryDossier.classList.contains("collapsed"));
    });

    btnCloseDossier.addEventListener("click", () => {
        territoryDossier.classList.add("collapsed");
        btnToggleDossier.classList.remove("active");
    });

    function openDossierTab(tab) {
        territoryDossier.classList.remove("collapsed");
        btnToggleDossier.classList.add("active");

        if (tab === "hydro") {
            tabBtnHydro.classList.add("active");
            tabBtnStruggles.classList.remove("active");
            paneHydro.classList.add("active");
            paneStruggles.classList.remove("active");
        } else {
            tabBtnStruggles.classList.add("active");
            tabBtnHydro.classList.remove("active");
            paneStruggles.classList.add("active");
            paneHydro.classList.remove("active");
        }
    }

    tabBtnHydro.addEventListener("click", () => openDossierTab("hydro"));
    tabBtnStruggles.addEventListener("click", () => openDossierTab("struggles"));

    function updateDossierHydro(cuenca) {
        if (!cuenca) return;
        hydroRiverTitle.textContent = cuenca.nombre;
        hydroRiverSub.textContent = cuenca.subtitulo;
        hydroRegionPill.textContent = `${cuenca.categoria} • ${cuenca.region}`;
        metricLength.textContent = cuenca.longitudPrincipal || "N/A";
        metricArea.textContent = cuenca.superficie || "N/A";
        metricFlow.textContent = cuenca.caudalMedio || "N/A";
        hydroRiverDesc.textContent = cuenca.descripcion;

        const imgUrl = (cuenca.imagenes && cuenca.imagenes[0]) ? cuenca.imagenes[0].url : "assets/abya_yala_red_hidrica.png";
        hydroRiverImg.src = imgUrl;

        // Waypoints de la cuenca
        hydroWaypointsList.innerHTML = "";
        if (cuenca.puntosGeo && cuenca.puntosGeo.length > 0) {
            cuenca.puntosGeo.forEach((pt, i) => {
                const chip = document.createElement("button");
                chip.className = "waypoint-chip";
                chip.textContent = pt.nombre.split("(")[0].trim();
                chip.addEventListener("click", () => {
                    const t = i / (cuenca.puntosGeo.length - 1);
                    camera.targetRiverT = t;
                    camera.isFollowingRiver = true;
                    showArrivalBanner({
                        nombre: pt.nombre,
                        pais: cuenca.categoria,
                        imagen: imgUrl,
                        importancia: `Hito del curso fluvial (${Math.round(t * 100)}% de trayecto)`
                    });
                });
                hydroWaypointsList.appendChild(chip);
            });
        }
    }

    function updateDossierStruggle(node) {
        if (!node) return;
        activeStruggleNode = node;
        struggleBadgeNum.textContent = `# ${node.num}`;
        struggleBadgeCountry.textContent = node.pais;
        struggleNodeTitle.textContent = node.nombre;
        struggleNodeCuenca.textContent = `Cuenca: ${node.cuenca || 'Cuencas de Abya Yala'}`;
        struggleNodeThreat.textContent = node.amenaza || "Presión sobre fuentes hídricas y ecosistemas";
        struggleNodeCommunities.textContent = node.comunidades || "Pueblos originarios y asambleas por el agua";
        struggleNodeDesc.textContent = node.texto || "Territorio en defensa activa del agua y la vida.";
    }

    btnZoomPhoto.addEventListener("click", () => {
        photoModalImg.src = hydroRiverImg.src;
        photoModalTitle.textContent = hydroRiverTitle.textContent;
        photoModalDesc.textContent = hydroRiverDesc.textContent;
        photoModal.classList.add("open");
    });

    photoModalClose.addEventListener("click", () => {
        photoModal.classList.remove("open");
    });

    photoModal.addEventListener("click", (e) => {
        if (e.target === photoModal) photoModal.classList.remove("open");
    });

    // ==========================================
    // 11. TIMELINE FLUVIAL (SCRUBBER Y WAYPOINTS)
    // ==========================================
    function buildTimelineWaypoints(cuenca) {
        timelineWaypointsLayer.innerHTML = "";
        if (!cuenca || !cuenca.puntosGeo) return;

        const pts = cuenca.puntosGeo;
        timelineOrigin.textContent = `🏔️ ${pts[0].nombre.split('(')[0]}`;
        timelineDest.textContent = `🌊 ${pts[pts.length - 1].nombre.split('(')[0]}`;

        pts.forEach((pt, idx) => {
            if (idx === 0 || idx === pts.length - 1) return;
            const pct = (idx / (pts.length - 1)) * 100;
            const dot = document.createElement("div");
            dot.className = "timeline-waypoint-dot";
            dot.style.left = `${pct}%`;
            dot.title = pt.nombre;
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                camera.targetRiverT = idx / (pts.length - 1);
                camera.isFollowingRiver = true;
                showArrivalBanner({
                    nombre: pt.nombre,
                    pais: cuenca.categoria,
                    imagen: pt.imagen || ((cuenca.imagenes && cuenca.imagenes[0]) ? cuenca.imagenes[0].url : "assets/abya_yala_red_hidrica.png"),
                    importancia: `Hito fluvial (${Math.round(pct)}% del curso)`
                });
            });
            timelineWaypointsLayer.appendChild(dot);
        });
    }

    function handleTimelineScrub(e) {
        const rect = timelineTrackWrapper.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        camera.targetRiverT = percent;
        camera.isFollowingRiver = true;
    }

    timelineTrackWrapper.addEventListener("mousedown", (e) => {
        isScrubbing = true;
        handleTimelineScrub(e);
    });

    window.addEventListener("mousemove", (e) => {
        if (isScrubbing) handleTimelineScrub(e);
    });

    window.addEventListener("mouseup", () => {
        isScrubbing = false;
    });

    // ==========================================
    // 12. CATÁLOGO DE LAS 94 LUCHAS
    // ==========================================
    function buildStrugglesGrid(filterText = "", filterRegion = "all") {
        strugglesGridContainer.innerHTML = "";

        const allNodes = luchasStore.nodes;
        const filtered = allNodes.filter(node => {
            if (filterRegion === "México" && node.pais !== "México") return false;
            if (filterRegion === "Centroamérica" && !["Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Cuba"].includes(node.pais)) return false;
            if (filterRegion === "Andes" && !["Colombia", "Ecuador", "Perú", "Chile"].includes(node.pais)) return false;
            if (filterRegion === "Cono Sur" && !["Bolivia", "Argentina", "Uruguay", "Brasil"].includes(node.pais)) return false;

            if (filterText) {
                const query = filterText.toLowerCase().trim();
                const numMatch = node.num.toString() === query;
                const nameMatch = node.nombre.toLowerCase().includes(query);
                const threatMatch = (node.amenaza || "").toLowerCase().includes(query);
                const comMatch = (node.comunidades || "").toLowerCase().includes(query);
                const paisMatch = (node.pais || "").toLowerCase().includes(query);
                return numMatch || nameMatch || threatMatch || comMatch || paisMatch;
            }

            return true;
        });

        filtered.forEach(node => {
            const card = document.createElement("div");
            card.className = "struggles-item-card";
            card.innerHTML = `
                <div class="struggles-num-badge-card">${node.num}</div>
                <div class="struggles-item-meta">
                    <h4 class="struggles-item-title">${node.nombre}</h4>
                    <span class="struggles-item-sub">${node.pais} &bull; ${node.cuenca || 'Cuenca'}</span>
                    <p class="struggles-item-threat">${(node.amenaza || '').substring(0, 75)}...</p>
                </div>
            `;
            card.addEventListener("click", () => {
                jumpToStruggleNode(node);
                strugglesModal.classList.remove("open");
            });
            strugglesGridContainer.appendChild(card);
        });
    }

    function openStrugglesCatalog() {
        strugglesModal.classList.add("open");
        strugglesSearchInput.value = "";
        strugglesSearchInput.focus();
        buildStrugglesGrid();
    }

    btnOpenCatalogFromDossier.addEventListener("click", openStrugglesCatalog);
    btnCloseStrugglesModal.addEventListener("click", () => {
        strugglesModal.classList.remove("open");
    });

    strugglesModal.addEventListener("click", (e) => {
        if (e.target === strugglesModal) strugglesModal.classList.remove("open");
    });

    strugglesSearchInput.addEventListener("input", (e) => {
        buildStrugglesGrid(e.target.value, currentCatalogFilter);
    });

    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentCatalogFilter = pill.getAttribute("data-filter");
            buildStrugglesGrid(strugglesSearchInput.value, currentCatalogFilter);
        });
    });

    function jumpToStruggleNode(node) {
        activeStruggleNode = node;
        updateDossierStruggle(node);
        showArrivalBanner(node);

        camera.isFollowingRiver = false;
        camera.flyTo(node.x, node.y, 7.8);
    }

    // ==========================================
    // 13. EDITOR DE MEMORIA TERRITORIAL
    // ==========================================
    function openEditorForNode(node) {
        if (!node) return;
        editNodeNum.value = node.num;
        editNodeName.value = node.nombre || "";
        editNodeCuenca.value = node.cuenca || "";
        editNodeCountry.value = `${node.estado ? node.estado + ', ' : ''}${node.pais || ''}`;
        editNodeThreat.value = node.amenaza || "";
        editNodeCommunities.value = node.comunidades || "";
        editNodeText.value = node.texto || "";
        editNodeImage.value = node.imagen || "";

        editorModal.classList.add("open");
    }

    btnEditCurrentStruggle.addEventListener("click", () => {
        openEditorForNode(activeStruggleNode);
    });

    btnCloseEditorModal.addEventListener("click", () => {
        editorModal.classList.remove("open");
    });

    btnCancelEditor.addEventListener("click", () => {
        editorModal.classList.remove("open");
    });

    editorModal.addEventListener("click", (e) => {
        if (e.target === editorModal) editorModal.classList.remove("open");
    });

    btnSaveMemory.addEventListener("click", () => {
        const num = parseInt(editNodeNum.value);
        if (!num) return;

        const updatedData = {
            nombre: editNodeName.value.trim(),
            cuenca: editNodeCuenca.value.trim(),
            amenaza: editNodeThreat.value.trim(),
            comunidades: editNodeCommunities.value.trim(),
            texto: editNodeText.value.trim(),
            imagen: editNodeImage.value.trim()
        };

        const updatedNode = luchasStore.saveNodeEdit(num, updatedData);
        updateDossierStruggle(updatedNode);
        showArrivalBanner(updatedNode);
        buildStrugglesGrid(strugglesSearchInput.value, currentCatalogFilter);
        editorModal.classList.remove("open");
        hintPill.innerHTML = `💾 <span>Memoria guardada:</span> Se ha actualizado el nodo #${num} en el almacenamiento local.`;
    });

    btnExportJson.addEventListener("click", () => {
        luchasStore.exportJSON();
    });

    // ==========================================
    // 14. GESTIÓN DE RATÓN Y TACTO SOBRE EL MAPA
    // ==========================================
    mapCanvas.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        mapCanvas.classList.add("grabbing");
        mouseStart = { x: e.clientX, y: e.clientY };
        cameraStart = { x: camera.x, y: camera.y };

        if (currentMode === "draw") {
            userDrawnStroke = [{ x: e.clientX, y: e.clientY }];
            drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        }
    });

    window.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;

        const dx = e.clientX - mouseStart.x;
        const dy = e.clientY - mouseStart.y;

        if (currentMode === "flow") {
            const dragDist = (dx - dy) * 0.0012;
            camera.nudgeRiver(dragDist);
            mouseStart = { x: e.clientX, y: e.clientY };
        } else if (currentMode === "free") {
            const scale = Math.pow(2, camera.zoom) * 256;
            const cos = Math.cos(camera.rotation);
            const sin = Math.sin(camera.rotation);
            camera.targetX = cameraStart.x + (-dx * cos - -dy * sin) / scale;
            camera.targetY = cameraStart.y + (-dx * sin + -dy * cos) / scale;
        } else if (currentMode === "draw") {
            userDrawnStroke.push({ x: e.clientX, y: e.clientY });
            renderDrawStroke();
        }
    });

    window.addEventListener("mouseup", (e) => {
        if (!isMouseDown) return;
        isMouseDown = false;
        mapCanvas.classList.remove("grabbing");

        if (currentMode === "draw" && userDrawnStroke.length > 5) {
            processDrawMatching();
        } else if (Math.hypot(e.clientX - mouseStart.x, e.clientY - mouseStart.y) < 6) {
            handleMapClick(e.clientX, e.clientY);
        }
    });

    mapCanvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (currentMode === "flow") {
            camera.nudgeRiver(e.deltaY * 0.00032);
        } else {
            const zoomDelta = -e.deltaY * 0.0015;
            camera.targetZoom = Math.max(camera.minZoom, Math.min(camera.maxZoom, camera.targetZoom + zoomDelta));
        }
    }, { passive: false });

    // Soporte Táctil Móvil
    mapCanvas.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            const t = e.touches[0];
            isMouseDown = true;
            mouseStart = { x: t.clientX, y: t.clientY };
            cameraStart = { x: camera.x, y: camera.y };

            if (currentMode === "draw") {
                userDrawnStroke = [{ x: t.clientX, y: t.clientY }];
                drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
            }
        }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
        if (!isMouseDown || e.touches.length !== 1) return;
        const t = e.touches[0];
        const dx = t.clientX - mouseStart.x;
        const dy = t.clientY - mouseStart.y;

        if (currentMode === "flow") {
            const dragDist = (dx - dy) * 0.0016;
            camera.nudgeRiver(dragDist);
            mouseStart = { x: t.clientX, y: t.clientY };
        } else if (currentMode === "free") {
            const scale = Math.pow(2, camera.zoom) * 256;
            const cos = Math.cos(camera.rotation);
            const sin = Math.sin(camera.rotation);
            camera.targetX = cameraStart.x + (-dx * cos - -dy * sin) / scale;
            camera.targetY = cameraStart.y + (-dx * sin + -dy * cos) / scale;
        } else if (currentMode === "draw") {
            userDrawnStroke.push({ x: t.clientX, y: t.clientY });
            renderDrawStroke();
        }
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
        if (!isMouseDown) return;
        isMouseDown = false;

        if (currentMode === "draw" && userDrawnStroke.length > 5) {
            processDrawMatching();
        } else if (e.changedTouches && e.changedTouches.length === 1) {
            const t = e.changedTouches[0];
            if (Math.hypot(t.clientX - mouseStart.x, t.clientY - mouseStart.y) < 10) {
                handleMapClick(t.clientX, t.clientY);
            }
        }
    });

    // Detección de clic en nodos de lucha o sinapsis
    function handleMapClick(screenX, screenY) {
        if (!showStrugglesLayer) return;

        let closest = null;
        let minDist = 26; // Radio generoso de clic

        luchasStore.nodes.forEach(node => {
            const sp = camera.worldToScreen(node.x, node.y);
            const dist = Math.hypot(sp.x - screenX, sp.y - screenY);
            if (dist < minDist) {
                closest = node;
                minDist = dist;
            }
        });

        if (closest) {
            jumpToStruggleNode(closest);
        }
    }

    // Dibujo Land Lines
    function renderDrawStroke() {
        drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        if (userDrawnStroke.length < 2) return;

        drawCtx.save();
        drawCtx.beginPath();
        drawCtx.moveTo(userDrawnStroke[0].x, userDrawnStroke[0].y);
        for (let i = 1; i < userDrawnStroke.length; i++) {
            drawCtx.lineTo(userDrawnStroke[i].x, userDrawnStroke[i].y);
        }
        drawCtx.strokeStyle = "#D48831";
        drawCtx.lineWidth = 4;
        drawCtx.lineCap = "round";
        drawCtx.lineJoin = "round";
        drawCtx.shadowColor = "#A84A15";
        drawCtx.shadowBlur = 10;
        drawCtx.stroke();
        drawCtx.restore();
    }

    function processDrawMatching() {
        const result = matcher.findBestMatch(userDrawnStroke);
        if (result && result.match) {
            const matchedCuenca = result.match.cuenca;
            const idx = CUENCAS_GEO_DATA.findIndex(c => c.id === matchedCuenca.id);

            hintPill.innerHTML = `🌊 <strong>${matchedCuenca.nombre}</strong> (Afinidad ${Math.round(result.confidence)}%)`;
            setTimeout(() => {
                selectCuenca(idx, result.match.t);
                setMode("flow");
            }, 500);
        } else {
            hintPill.innerHTML = `Traza una curva más amplia en la pantalla para buscar un río`;
        }
    }

    // ==========================================
    // 15. BUCLE DE RENDERIZADO & SISTEMA VASCULAR
    // ==========================================
    let lastRenderTime = 0;

    function render(timestamp) {
        // Optimización Ecológica: Si estamos en modo eco y la cámara no se mueve, limitar a 30 FPS
        if (isEcoMode && camera.currentSpeed < 0.005 && !isMouseDown && !isScrubbing) {
            if (timestamp - lastRenderTime < 33) {
                requestAnimationFrame(render);
                return;
            }
        }
        lastRenderTime = timestamp;

        camera.update();
        audioSystem.updateMotion(camera.currentSpeed);

        if (camera.isFollowingRiver && activeCuenca) {
            const t = Math.max(0, Math.min(1, camera.riverT));
            timelineProgressFill.style.width = `${t * 100}%`;
            timelineHandle.style.left = `${t * 100}%`;
            timelineProgressPct.textContent = `Curso Fluvial: ${Math.round(t * 100)}%`;

            // Detección automática al navegar el río para desplegar foto del hito
            if (activeCuenca.puntosGeo && activeCuenca.puntosGeo.length > 1) {
                const totalHitos = activeCuenca.puntosGeo.length;
                activeCuenca.puntosGeo.forEach((pt, idx) => {
                    const hitoT = idx / (totalHitos - 1);
                    if (Math.abs(t - hitoT) < 0.035 && lastVisitedWaypointIdx !== idx) {
                        lastVisitedWaypointIdx = idx;
                        showArrivalBanner({
                            nombre: pt.nombre,
                            pais: activeCuenca.categoria,
                            imagen: pt.imagen || (activeCuenca.imagenes && activeCuenca.imagenes[0] ? activeCuenca.imagenes[0].url : "assets/abya_yala_red_hidrica.png"),
                            importancia: `Hito fluvial (${Math.round(hitoT * 100)}% del cauce)`
                        });
                    }
                });
            }
        }

        // 1. Teselas Satelitales (Esri World Imagery + UN-GGIM standard bounds)
        satelliteEngine.render(ctx, camera, window.innerWidth, window.innerHeight);

        // 2. Sistema Vascular de Ríos (Arterias Fluviales Vivas Pulsantes)
        drawVascularRivers(ctx);

        // 3. Sistema Vascular de Venas de Agua & Conexiones Orgánicas (Pulsantes sobre el mapa)
        if (showConnections) {
            drawVascularVeins(ctx);
        }

        // 4. Partículas minerales de corriente
        if (!isEcoMode || camera.currentSpeed > 0.005) {
            particleSystem.update(activeCuenca.id);
            particleSystem.draw(ctx, camera, activeCuenca.id);
        }

        // 5. Nodos de las 94 Luchas con Miniaturas Fotográficas
        if (showStrugglesLayer) {
            drawStrugglesNodes(ctx);
        }

        requestAnimationFrame(render);
    }

    function drawVascularRivers(c) {
        const zoomOutFactor = Math.max(1.0, (5.2 - camera.zoom) * 1.45);
        const now = Date.now();
        const timePulse = now * 0.0028;

        CUENCAS_GEO_DATA.forEach((cuenca, cIdx) => {
            const isActive = (cuenca.id === activeCuenca.id);
            const river = cuenca.puntosMercator;
            if (!river || river.length < 2) return;

            // Pulso vascular rítmico para todas las arterias fluviales
            const pulse = 1.0 + Math.sin(timePulse + cIdx * 0.65) * 0.25;

            c.save();
            c.beginPath();

            const steps = river.length * 8;
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const pt = getSplinePoint(river, t);
                const screenPt = camera.worldToScreen(pt.x, pt.y);
                if (i === 0) c.moveTo(screenPt.x, screenPt.y);
                else c.lineTo(screenPt.x, screenPt.y);
            }

            // Capa 1: Halo exterior vascular bioluminiscente con resplandor
            c.strokeStyle = isActive ? "rgba(212, 136, 49, 0.75)" : "rgba(72, 181, 196, 0.60)";
            c.shadowColor = isActive ? "#D48831" : "#48B5C4";
            c.shadowBlur = (isActive ? 14 : 8) * pulse;
            c.lineWidth = (isActive ? 8.5 : 4.5) * pulse * zoomOutFactor;
            c.lineCap = "round";
            c.lineJoin = "round";
            c.stroke();

            // Capa 2: Vaso de agua mineral viva
            c.strokeStyle = cuenca.colorAgua || "#48B5C4";
            c.lineWidth = (isActive ? 3.8 : 2.2) * zoomOutFactor;
            c.shadowBlur = 0;
            c.stroke();

            // Capa 3: Corriente arterial central blanca
            c.strokeStyle = "rgba(255, 255, 255, 0.95)";
            c.lineWidth = (isActive ? 1.6 : 0.9) * zoomOutFactor;
            c.stroke();

            // Capa 4: Fotones luminosos fluyendo en tiempo real a lo largo de cada río
            const pulseCount = isActive ? 3 : 2;
            for (let p = 0; p < pulseCount; p++) {
                const travelT = ((now * 0.00032 + cIdx * 0.18 + p * (1 / pulseCount)) % 1.0);
                const pt = getSplinePoint(river, travelT);
                const sp = camera.worldToScreen(pt.x, pt.y);
                if (sp.x >= -30 && sp.x <= camera.width + 30 && sp.y >= -30 && sp.y <= camera.height + 30) {
                    c.beginPath();
                    c.arc(sp.x, sp.y, Math.max(2.5, 4.0 * pulse * Math.min(1.4, zoomOutFactor)), 0, Math.PI * 2);
                    c.fillStyle = "#FFFFFF";
                    c.shadowColor = cuenca.colorAgua || "#48B5C4";
                    c.shadowBlur = 8;
                    c.fill();
                }
            }

            // Marcador del flujo del viajero
            if (isActive && camera.isFollowingRiver) {
                const curPos = getSplinePoint(river, camera.riverT);
                const curScreen = camera.worldToScreen(curPos.x, curPos.y);

                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 5.0 * Math.min(1.5, zoomOutFactor), 0, Math.PI * 2);
                c.fillStyle = "#FFFFFF";
                c.fill();

                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 12 * Math.min(1.5, zoomOutFactor), 0, Math.PI * 2);
                c.strokeStyle = "rgba(212, 136, 49, 0.9)";
                c.lineWidth = 2.0;
                c.stroke();
            }

            c.restore();
        });
    }

    // RENDERIZADO DEL SISTEMA VASCULAR: VENAS VIVAS Y CONEXIONES BIOLÓGICAS
    function drawVascularVeins(c) {
        c.save();
        const now = Date.now();
        const timePulse = now * 0.003;
        const zoomOutFactor = Math.max(1.2, (5.2 - camera.zoom) * 1.55);

        // 1. Trazado de venas de agua
        CONEXIONES_INTERCUENCAS.forEach((con, idx) => {
            const pts = con.puntosMercator;
            if (!pts || pts.length < 2) return;

            // Pulso biológico orgánico (simula latido vascular)
            const pulse = 1.0 + Math.sin(timePulse + idx * 0.75) * 0.35;
            const baseWidth = (con.grosor || 4.5) * pulse * zoomOutFactor;

            // Función interna para trazar el camino spline
            const tracePath = () => {
                c.beginPath();
                const first = camera.worldToScreen(pts[0].x, pts[0].y);
                c.moveTo(first.x, first.y);
                const steps = pts.length * 8;
                for (let i = 1; i <= steps; i++) {
                    const t = i / steps;
                    const pt = getSplinePoint(pts, t);
                    const sp = camera.worldToScreen(pt.x, pt.y);
                    c.lineTo(sp.x, sp.y);
                }
            };

            // Capa 1: Halo exterior biológico difuso
            tracePath();
            c.strokeStyle = con.colorVena || "rgba(212, 136, 49, 0.65)";
            c.lineWidth = baseWidth * 2.8;
            c.lineCap = "round";
            c.lineJoin = "round";
            c.shadowColor = con.colorVena || "#D48831";
            c.shadowBlur = 14 * pulse;
            c.globalAlpha = 0.45;
            c.stroke();

            // Capa 2: Conducto arterial vivo
            tracePath();
            c.strokeStyle = con.colorVena || "#48B5C4";
            c.lineWidth = baseWidth * 1.3;
            c.shadowBlur = 6;
            c.globalAlpha = 0.9;
            c.stroke();

            // Capa 3: Núcleo luminoso blanco de la corriente
            tracePath();
            c.strokeStyle = "#FFFFFF";
            c.lineWidth = Math.max(1.5, baseWidth * 0.4);
            c.shadowBlur = 0;
            c.globalAlpha = 0.95;
            c.stroke();

            // Capa 4: Pulsos viajeros múltiples fluyendo a lo largo de la vena
            c.globalAlpha = 1.0;
            const numPulses = 2;
            for (let p = 0; p < numPulses; p++) {
                const travelT = ((now * 0.00035 + idx * 0.25 + p * (1 / numPulses)) % 1.0);
                const pulsePt = getSplinePoint(pts, travelT);
                const pulseScreen = camera.worldToScreen(pulsePt.x, pulsePt.y);

                c.beginPath();
                c.arc(pulseScreen.x, pulseScreen.y, Math.max(3, 4.5 * pulse * (zoomOutFactor * 0.7)), 0, Math.PI * 2);
                c.fillStyle = "#FFFFFF";
                c.shadowColor = "#FFFFFF";
                c.shadowBlur = 8;
                c.fill();

                c.beginPath();
                c.arc(pulseScreen.x, pulseScreen.y, Math.max(6, 9.5 * pulse * (zoomOutFactor * 0.7)), 0, Math.PI * 2);
                c.strokeStyle = con.colorVena || "rgba(212, 136, 49, 0.9)";
                c.lineWidth = 2.0;
                c.stroke();
            }
        });

        // 2. Sinapsis y Puntos de Confluencia Mayor
        SINAPSIS_CONFLUENCIAS.forEach((sin, idx) => {
            const sp = camera.worldToScreen(sin.x, sin.y);
            if (sp.x < -40 || sp.x > camera.width + 40 || sp.y < -40 || sp.y > camera.height + 40) return;

            const wave = ((now * 0.016 + idx * 5) % 26);
            const wave2 = (((now * 0.016 + idx * 5) + 13) % 26);

            // Anillos de expansión concéntricos (onda sonar / latido vascular)
            [wave, wave2].forEach(w => {
                c.beginPath();
                c.arc(sp.x, sp.y, Math.max(3, w * (zoomOutFactor * 0.8)), 0, Math.PI * 2);
                c.strokeStyle = `rgba(212, 136, 49, ${Math.max(0, 0.95 - w / 26)})`;
                c.lineWidth = 1.8;
                c.stroke();
            });

            // Núcleo de la confluencia (orb brillante)
            c.beginPath();
            c.arc(sp.x, sp.y, Math.max(4.5, 6.5 * (zoomOutFactor * 0.6)), 0, Math.PI * 2);
            c.fillStyle = "#D48831";
            c.shadowColor = "#F0A045";
            c.shadowBlur = 10;
            c.fill();

            c.beginPath();
            c.arc(sp.x, sp.y, Math.max(2, 3.0 * (zoomOutFactor * 0.6)), 0, Math.PI * 2);
            c.fillStyle = "#FFFFFF";
            c.shadowBlur = 0;
            c.fill();

            // Etiqueta legible de confluencia
            if (camera.zoom > 4.2) {
                const labelText = `⚡ ${sin.nombre}`;
                c.font = "800 10.5px Inter, sans-serif";
                const textWidth = c.measureText(labelText).width;

                // Fondo de píldora para legibilidad
                c.fillStyle = "rgba(7, 18, 23, 0.85)";
                c.beginPath();
                c.roundRect(sp.x + 10, sp.y - 8, textWidth + 10, 16, 4);
                c.fill();
                c.strokeStyle = "rgba(212, 136, 49, 0.6)";
                c.lineWidth = 1.0;
                c.stroke();

                c.fillStyle = "#FAF4EB";
                c.textAlign = "left";
                c.textBaseline = "middle";
                c.fillText(labelText, sp.x + 15, sp.y);
            }
        });

        c.restore();
    }

    // RENDERIZADO DE LAS 94 LUCHAS CON FOTOGRAFÍAS Y BURBUJAS
    function drawStrugglesNodes(c) {
        luchasStore.nodes.forEach(node => {
            const sp = camera.worldToScreen(node.x, node.y);
            if (sp.x < -40 || sp.x > camera.width + 40 || sp.y < -40 || sp.y > camera.height + 40) return;

            const isSelected = activeStruggleNode && activeStruggleNode.num === node.num;
            const distToCenter = Math.hypot(sp.x - camera.width / 2, sp.y - camera.height / 2);
            const isNearFocus = distToCenter < 180 && camera.zoom > 6.2;

            c.save();

            // Burbuja fotográfica de alto impacto cuando está seleccionado o enfocado de cerca
            if (isSelected || isNearFocus) {
                const bubbleRadius = isSelected ? 18 : 14;

                // Anillo exterior de resplandor dorado
                c.beginPath();
                c.arc(sp.x, sp.y, bubbleRadius + 4, 0, Math.PI * 2);
                c.fillStyle = isSelected ? "rgba(212, 136, 49, 0.45)" : "rgba(72, 181, 196, 0.3)";
                c.fill();
                c.strokeStyle = "#FFFFFF";
                c.lineWidth = 2.0;
                c.stroke();

                // Recorte de imagen (clipping path)
                const photoUrl = getNodePhotoUrl(node);
                const cachedImg = nodeImageCache.get(photoUrl);

                if (cachedImg && cachedImg.complete && cachedImg.naturalWidth > 0) {
                    c.save();
                    c.beginPath();
                    c.arc(sp.x, sp.y, bubbleRadius, 0, Math.PI * 2);
                    c.clip();
                    c.drawImage(cachedImg, sp.x - bubbleRadius, sp.y - bubbleRadius, bubbleRadius * 2, bubbleRadius * 2);
                    c.restore();
                } else {
                    // Círculo base terracota con número
                    c.beginPath();
                    c.arc(sp.x, sp.y, bubbleRadius, 0, Math.PI * 2);
                    c.fillStyle = isSelected ? "#F0A045" : "#A84A15";
                    c.fill();
                }

                // Insignia con el número
                c.beginPath();
                c.arc(sp.x + bubbleRadius * 0.7, sp.y - bubbleRadius * 0.7, 7, 0, Math.PI * 2);
                c.fillStyle = "#D48831";
                c.fill();
                c.strokeStyle = "#FFFFFF";
                c.lineWidth = 1.2;
                c.stroke();

                c.font = "800 8.5px Inter, sans-serif";
                c.fillStyle = "#071217";
                c.textAlign = "center";
                c.textBaseline = "middle";
                c.fillText(node.num, sp.x + bubbleRadius * 0.7, sp.y - bubbleRadius * 0.7);

                // Nombre completo
                c.font = "700 11.5px Inter, sans-serif";
                c.fillStyle = "#FFFFFF";
                c.textAlign = "left";
                c.shadowColor = "rgba(0, 0, 0, 0.95)";
                c.shadowBlur = 6;
                c.fillText(`${node.nombre}`, sp.x + bubbleRadius + 8, sp.y + 4);
            } else {
                // Modo estándar: nodo circular numerado con halo
                c.beginPath();
                c.arc(sp.x, sp.y, 6.5, 0, Math.PI * 2);
                c.fillStyle = "#A84A15";
                c.fill();
                c.strokeStyle = "rgba(212, 136, 49, 0.9)";
                c.lineWidth = 1.5;
                c.stroke();

                if (camera.zoom > 5.5) {
                    c.font = "800 8.5px Inter, sans-serif";
                    c.fillStyle = "#FFFFFF";
                    c.textAlign = "center";
                    c.textBaseline = "middle";
                    c.fillText(node.num, sp.x, sp.y);
                }
            }

            c.restore();
        });
    }

    requestAnimationFrame(render);
});
