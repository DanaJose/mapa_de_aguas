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
    const btnAddNewStruggle = document.getElementById("btn-add-new-struggle");
    const btnOpenCatalogFromDossier = document.getElementById("btn-open-catalog-from-dossier");

    // Timeline Inferior
    const timelineOrigin = document.getElementById("timeline-origin");
    const timelineProgressPct = document.getElementById("timeline-progress-pct");
    const timelineDest = document.getElementById("timeline-dest");
    const timelineTrackWrapper = document.getElementById("timeline-track-wrapper");
    const timelineTrack = document.getElementById("timeline-track");
    const timelineProgressFill = document.getElementById("timeline-progress-fill");
    const timelineHandle = document.getElementById("timeline-handle");
    const timelineWaypointsLayer = document.getElementById("timeline-waypoints-layer");
    const hintPill = document.getElementById("hint-pill");
    const timelineRiverCanvas = document.getElementById("timeline-river-canvas");
    const timelineRiverCtx = timelineRiverCanvas ? timelineRiverCanvas.getContext("2d") : null;
    const timelineScrubTooltip = document.getElementById("timeline-scrub-tooltip");
    const tooltipImg = document.getElementById("tooltip-img");
    const tooltipTitle = document.getElementById("tooltip-title");
    const tooltipSub = document.getElementById("tooltip-sub");
    const portalCollageBackdrop = document.getElementById("portal-collage-backdrop");

    // Modal Catálogo de Luchas
    const strugglesModal = document.getElementById("struggles-index-modal");
    const btnCloseStrugglesModal = document.getElementById("btn-close-struggles-modal");
    const strugglesSearchInput = document.getElementById("struggles-search-input");
    const btnAddNodeCatalog = document.getElementById("btn-add-node-catalog");
    const strugglesGridContainer = document.getElementById("struggles-grid-container");
    const filterPills = document.querySelectorAll(".filter-pill");

    // Modal Editor de Memoria & Creación de Nodos
    const editorModal = document.getElementById("editor-modal");
    const editorDialogTitle = document.getElementById("editor-dialog-title");
    const btnCloseEditorModal = document.getElementById("btn-close-editor-modal");
    const btnCancelEditor = document.getElementById("btn-cancel-editor");
    const btnSaveMemory = document.getElementById("btn-save-memory");
    const btnExportJson = document.getElementById("btn-export-json");
    const editNodeNum = document.getElementById("edit-node-num");
    const editNodeName = document.getElementById("edit-node-name");
    const editNodeCuenca = document.getElementById("edit-node-cuenca");
    const editNodeCountry = document.getElementById("edit-node-country");
    const editNodeThreat = document.getElementById("edit-node-threat");
    const editNodeLat = document.getElementById("edit-node-lat");
    const editNodeLng = document.getElementById("edit-node-lng");
    const btnCaptureCameraCoords = document.getElementById("btn-capture-camera-coords");
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

    // Mosaico Dinámico de Portada
    let portalCollageTimer = null;
    let portalImagePool = [];

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

        if (timelineRiverCanvas && timelineRiverCtx) {
            const trw = timelineRiverCanvas.clientWidth;
            const trh = timelineRiverCanvas.clientHeight;
            if (trw > 0 && trh > 0) {
                timelineRiverCanvas.width = trw * dpr;
                timelineRiverCanvas.height = trh * dpr;
                timelineRiverCtx.scale(dpr, dpr);
                renderTimelineRiverCanvas(activeCuenca, camera.riverT);
            }
        }
    }

    window.addEventListener("resize", resizeCanvases);
    resizeCanvases();

    buildCategorizedRiverMenu();
    updateDossierHydro(activeCuenca);
    updateDossierStruggle(activeStruggleNode);
    buildTimelineWaypoints(activeCuenca);
    buildStrugglesGrid();
    buildMusicPresetsUI();

    // Precargar imágenes clave y mosaico dinámico
    preloadNodeImages();
    initDynamicPortalCollage();

    // Inicializar reproductor de YouTube / Audio
    musicManager.initPlayer("youtube-audio-container");

    // ==========================================
    // 3.1. MOSAICO DINÁMICO DE PORTADA (OPTIMIZADO EN TIEMPO REAL)
    // ==========================================

    function buildPortalImagePool() {
        portalImagePool = [];

        // 1. Fotos de cuencas
        CUENCAS_GEO_DATA.forEach(c => {
            if (c.imagenes) {
                c.imagenes.forEach(img => {
                    portalImagePool.push({
                        url: img.url,
                        caption: `${img.titulo || c.nombre} • ${c.categoria}`
                    });
                });
            }
        });

        // 2. Fotos de nodos de lucha (incluidos los comunitarios)
        luchasStore.nodes.forEach(n => {
            if (n.imagen && n.imagen.trim() !== "") {
                portalImagePool.push({
                    url: n.imagen,
                    caption: `${n.nombre} • ${n.pais}`
                });
            }
        });

        // 3. Imágenes locales de reserva
        const localAssets = [
            { url: "assets/rio_bravo_canon.jpg", caption: "Cañón del Río Bravo • Altiplano" },
            { url: "assets/mackenzie_meandros.jpg", caption: "Meandros del Dehcho • Ártico" },
            { url: "assets/pantanos_de_centla.jpg", caption: "Pantanos de Centla • Usumacinta" },
            { url: "assets/rio_platano_biosfera.jpg", caption: "Biósfera de Río Plátano • Selva" },
            { url: "assets/rio_coco_canon_somoto.jpg", caption: "Cañón de Somoto • Río Coco Wangki" },
            { url: "assets/rio_gualcarque_sagrado.jpg", caption: "Río Blanco & Gualcarque Sagrado" },
            { url: "assets/usumacinta_yaxchilan.jpg", caption: "Yaxchilán en el Usumacinta" },
            { url: "assets/abya_yala_red_hidrica.png", caption: "Sistema Vascular • Abya Yala" },
            { url: "assets/red_luchas_abya_yala.png", caption: "Red de Defensas del Agua" }
        ];

        localAssets.forEach(a => {
            if (!portalImagePool.some(p => p.url === a.url)) {
                portalImagePool.push(a);
            }
        });
    }

    function initDynamicPortalCollage() {
        if (!portalCollageBackdrop) return;
        buildPortalImagePool();

        const tiles = portalCollageBackdrop.querySelectorAll(".collage-tile");
        if (!tiles || tiles.length === 0) return;

        // Asignar imágenes variadas a los azulejos
        const shuffled = [...portalImagePool].sort(() => 0.5 - Math.random());
        tiles.forEach((tile, idx) => {
            const item = shuffled[idx % shuffled.length];
            if (item) {
                tile.style.setProperty("--tile-img", `url('${item.url}')`);
                const cap = tile.querySelector(".collage-caption");
                if (cap) cap.textContent = item.caption;
            }
        });

        // Rotación suave cíclica cada 6.5 segundos (1 azulejo a la vez para cuidar GPU/ecología)
        clearInterval(portalCollageTimer);
        portalCollageTimer = setInterval(() => {
            if (portalScreen.classList.contains("dissolved")) return; // Pausado si el usuario está en el mapa
            const randomTileIdx = Math.floor(Math.random() * tiles.length);
            const targetTile = tiles[randomTileIdx];
            const randomImg = portalImagePool[Math.floor(Math.random() * portalImagePool.length)];
            if (targetTile && randomImg) {
                targetTile.classList.add("fading");
                setTimeout(() => {
                    targetTile.style.setProperty("--tile-img", `url('${randomImg.url}')`);
                    const cap = targetTile.querySelector(".collage-caption");
                    if (cap) cap.textContent = randomImg.caption;
                    targetTile.classList.remove("fading");
                }, 750);
            }
        }, 6500);
    }

    function addNodeToCollagePool(node) {
        if (node && node.imagen) {
            portalImagePool.unshift({
                url: node.imagen,
                caption: `🌱 ${node.nombre} • ${node.pais}`
            });
        }
    }

    // ==========================================
    // 4. PORTAL DE ENTRADA (LAND LINES)
    // ==========================================
    function enterExperience(mode, openStruggles = false) {
        portalScreen.classList.add("dissolved");
        clearInterval(portalCollageTimer);
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
        initDynamicPortalCollage();
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
            "assets/io_bravo_santa_elena.jpg",
            "assets/mackenzie_meandros.jpg",
            "assets/mackenzie_mapa.jpg",
            "assets/yukon_cause.jpg",
            "assets/ukon_delta_bering.jpg",
            "assets/mississippi_naciente_itasca.jpg",
            "assets/mississippi_delta_pie_pajaro.jpg",
            "assets/rio_colorado_gran_canon.jpg",
            "assets/rio_colorado_horseshoe_bend.jpg",
            "assets/rio_platano_biosfera.jpg",
            "assets/rio_platano_meandros_selva.jpg",
            "assets/rio_gualcarque_sagrado.jpg",
            "assets/rio_gualcarque_canon.jpg",
            "assets/rio_cangrejal_pico_bonito.jpg",
            "assets/rio_cangrejal_rapidos.jpg",
            "assets/rio_coco_canon_somoto.jpg",
            "assets/rio_coco_wangki_miskitu.jpg",
            "assets/usumacinta_yaxchilan.jpg",
            "assets/pantanos_de_centla.jpg",
            "assets/magdalena_macizo_colombiano.jpg",
            "assets/magdalena_estrecho_san_agustin.jpg",
            "assets/magdalena_bocas_ceniza.jpg",
            "assets/orinoco_salto_angel.jpg",
            "assets/orinoco_casiquiare_bifurcacion.jpg",
            "assets/orinoco_delta_amacuro.jpg",
            "assets/amazonas_nevado_mismi.jpg",
            "assets/amazonas_encuentro_aguas_manaus.jpg",
            "assets/amazonas_delta_marajo.jpg",
            "assets/ocantins_araguaia_cerrado.jpg",
            "assets/san_francisco_serra_canastra.jpg",
            "assets/san_francisco_canon_paulo_afonso.jpg",
            "assets/ataratas_del_iguazu.jpg",
            "assets/gran_pantanal_humedal.jpg",
            "assets/delta_del_parana_tigre.jpg",
            "assets/stuario_rio_de_la_plata.jpg",
            "assets/patagonia_glaciar_perito_moreno.jpg",
            "assets/patagonia_rio_santa_cruz.jpg",
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
    // 11. TIMELINE FLUVIAL (CANVAS DE MEANDROS & TOOLTIP INTERACTIVO)
    // ==========================================
    function renderTimelineRiverCanvas(cuenca, progressT = 0) {
        if (!timelineRiverCanvas || !timelineRiverCtx || !cuenca || !cuenca.puntosGeo) return;

        const w = timelineRiverCanvas.clientWidth;
        const h = timelineRiverCanvas.clientHeight;
        if (w === 0 || h === 0) return;

        const dpr = window.devicePixelRatio || 1;
        if (timelineRiverCanvas.width !== w * dpr || timelineRiverCanvas.height !== h * dpr) {
            timelineRiverCanvas.width = w * dpr;
            timelineRiverCanvas.height = h * dpr;
            timelineRiverCtx.scale(dpr, dpr);
        }

        timelineRiverCtx.clearRect(0, 0, w, h);

        const pts = cuenca.puntosGeo;
        if (pts.length < 2) return;

        // Calcular los meandros del río a lo largo del eje horizontal
        const trackPts = [];
        const padX = 14;
        const availW = w - padX * 2;
        const midY = h / 2;
        const ampY = (h - 12) / 2;

        pts.forEach((pt, idx) => {
            const t = idx / (pts.length - 1);
            const x = padX + t * availW;
            // Ondulación orgánica y meandro basado en sus coordenadas y ritmo fluvial
            const meanderOffset = Math.sin(t * Math.PI * 3.4 + (pt.lat || 0)) * 0.65 + Math.cos(t * Math.PI * 5.2 + (pt.lng || 0)) * 0.35;
            const y = Math.max(6, Math.min(h - 6, midY + meanderOffset * ampY * 0.75));
            trackPts.push({ x, y, t, pt });
        });

        // 1. Trazado del lecho base completo del río en mineral suave
        timelineRiverCtx.save();
        timelineRiverCtx.beginPath();
        timelineRiverCtx.moveTo(trackPts[0].x, trackPts[0].y);
        for (let i = 1; i < trackPts.length; i++) {
            const xc = (trackPts[i - 1].x + trackPts[i].x) / 2;
            const yc = (trackPts[i - 1].y + trackPts[i].y) / 2;
            timelineRiverCtx.quadraticCurveTo(trackPts[i - 1].x, trackPts[i - 1].y, xc, yc);
        }
        timelineRiverCtx.lineTo(trackPts[trackPts.length - 1].x, trackPts[trackPts.length - 1].y);

        timelineRiverCtx.strokeStyle = "rgba(74, 145, 158, 0.38)";
        timelineRiverCtx.lineWidth = 4.2;
        timelineRiverCtx.lineCap = "round";
        timelineRiverCtx.lineJoin = "round";
        timelineRiverCtx.stroke();

        timelineRiverCtx.strokeStyle = "rgba(246, 238, 228, 0.25)";
        timelineRiverCtx.lineWidth = 1.0;
        timelineRiverCtx.stroke();
        timelineRiverCtx.restore();

        // 2. Trazo vivo del agua recorrida hasta progressT
        const clampedT = Math.max(0, Math.min(1, progressT));
        if (clampedT > 0.002) {
            timelineRiverCtx.save();
            timelineRiverCtx.beginPath();
            timelineRiverCtx.moveTo(trackPts[0].x, trackPts[0].y);

            const activeTargetX = padX + clampedT * availW;
            let currentHandleY = midY;

            for (let i = 1; i < trackPts.length; i++) {
                const prev = trackPts[i - 1];
                const curr = trackPts[i];
                if (curr.x <= activeTargetX) {
                    const xc = (prev.x + curr.x) / 2;
                    const yc = (prev.y + curr.y) / 2;
                    timelineRiverCtx.quadraticCurveTo(prev.x, prev.y, xc, yc);
                    currentHandleY = curr.y;
                } else if (prev.x < activeTargetX) {
                    const localRatio = (activeTargetX - prev.x) / (curr.x - prev.x);
                    const interpY = prev.y + (curr.y - prev.y) * localRatio;
                    timelineRiverCtx.lineTo(activeTargetX, interpY);
                    currentHandleY = interpY;
                    break;
                }
            }

            timelineRiverCtx.strokeStyle = "rgba(184, 102, 65, 0.95)";
            timelineRiverCtx.lineWidth = 5.0;
            timelineRiverCtx.lineCap = "round";
            timelineRiverCtx.lineJoin = "round";
            timelineRiverCtx.stroke();

            timelineRiverCtx.strokeStyle = "rgba(246, 238, 228, 0.85)";
            timelineRiverCtx.lineWidth = 1.6;
            timelineRiverCtx.stroke();

            // Partícula orbe que acompaña la punta del flujo
            timelineRiverCtx.beginPath();
            timelineRiverCtx.arc(activeTargetX, currentHandleY, 3.8, 0, Math.PI * 2);
            timelineRiverCtx.fillStyle = "#FAF6F0";
            timelineRiverCtx.fill();

            timelineRiverCtx.restore();

            timelineHandle.style.top = `${currentHandleY}px`;
        } else {
            timelineHandle.style.top = `${midY}px`;
        }

        // Posicionar las balizas de los hitos exactamente sobre la curva del meandro
        const waypointDots = timelineWaypointsLayer.children;
        for (let i = 0; i < waypointDots.length; i++) {
            const dotIdx = i + 1; // saltando origen
            if (dotIdx < trackPts.length) {
                waypointDots[i].style.left = `${trackPts[dotIdx].x}px`;
                waypointDots[i].style.top = `${trackPts[dotIdx].y}px`;
            }
        }
    }

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

        renderTimelineRiverCanvas(cuenca, camera.riverT || 0);
    }

    function updateTimelineTooltip(e) {
        if (!activeCuenca || !activeCuenca.puntosGeo) return;
        const rect = timelineTrackWrapper.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

        const pts = activeCuenca.puntosGeo;
        const nearestIdx = Math.round(percent * (pts.length - 1));
        const pt = pts[nearestIdx];

        tooltipTitle.textContent = pt.nombre.split('(')[0].trim();
        tooltipSub.textContent = `Hito fluvial (${Math.round(percent * 100)}% del cauce)`;
        const imgUrl = pt.imagen || (activeCuenca.imagenes && activeCuenca.imagenes[0] ? activeCuenca.imagenes[0].url : "assets/abya_yala_red_hidrica.png");
        tooltipImg.src = imgUrl;

        timelineScrubTooltip.style.left = `${percent * 100}%`;
        timelineScrubTooltip.classList.add("visible");
    }

    function handleTimelineScrub(e) {
        const rect = timelineTrackWrapper.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        camera.targetRiverT = percent;
        camera.isFollowingRiver = true;
        renderTimelineRiverCanvas(activeCuenca, percent);
    }

    timelineTrackWrapper.addEventListener("mousedown", (e) => {
        isScrubbing = true;
        handleTimelineScrub(e);
        updateTimelineTooltip(e);
    });

    timelineTrackWrapper.addEventListener("mousemove", (e) => {
        updateTimelineTooltip(e);
        if (isScrubbing) handleTimelineScrub(e);
    });

    timelineTrackWrapper.addEventListener("mouseleave", () => {
        timelineScrubTooltip.classList.remove("visible");
    });

    window.addEventListener("mousemove", (e) => {
        if (isScrubbing) {
            handleTimelineScrub(e);
            updateTimelineTooltip(e);
        }
    });

    window.addEventListener("mouseup", () => {
        if (isScrubbing) {
            isScrubbing = false;
            timelineScrubTooltip.classList.remove("visible");
        }
    });

    // Soporte táctil móvil en el timeline
    timelineTrackWrapper.addEventListener("touchstart", (e) => {
        isScrubbing = true;
        handleTimelineScrub(e);
        updateTimelineTooltip(e);
    }, { passive: true });

    timelineTrackWrapper.addEventListener("touchmove", (e) => {
        if (isScrubbing) {
            handleTimelineScrub(e);
            updateTimelineTooltip(e);
        }
    }, { passive: true });

    timelineTrackWrapper.addEventListener("touchend", () => {
        isScrubbing = false;
        timelineScrubTooltip.classList.remove("visible");
    });

    // ==========================================
    // 12. CATÁLOGO DE LAS 94 LUCHAS
    // ==========================================
    function buildStrugglesGrid(filterText = "", filterRegion = "all") {
        strugglesGridContainer.innerHTML = "";

        const allNodes = luchasStore.nodes;

        // Actualizar contadores en los filtros
        const allPill = document.querySelector('.filter-pill[data-filter="all"]');
        if (allPill) allPill.textContent = `Todos (${allNodes.length})`;
        const customPill = document.querySelector('.filter-pill[data-filter="Comunitarios"]');
        const customCount = allNodes.filter(n => n.isCustom).length;
        if (customPill) customPill.textContent = `Añadidos Comunitarios (${customCount})`;

        const filtered = allNodes.filter(node => {
            if (filterRegion === "México" && node.pais !== "México") return false;
            if (filterRegion === "Centroamérica" && !["Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Cuba"].includes(node.pais)) return false;
            if (filterRegion === "Andes" && !["Colombia", "Ecuador", "Perú", "Chile"].includes(node.pais)) return false;
            if (filterRegion === "Cono Sur" && !["Bolivia", "Argentina", "Uruguay", "Brasil"].includes(node.pais)) return false;
            if (filterRegion === "Comunitarios" && !node.isCustom) return false;

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
            card.className = "struggles-item-card" + (node.isCustom ? " community-item-card" : "");
            card.innerHTML = `
                <div class="struggles-num-badge-card">${node.num}</div>
                <div class="struggles-item-meta">
                    <h4 class="struggles-item-title">${node.nombre} ${node.isCustom ? '<span class="community-pill-tag">🌱 Comunitario</span>' : ''}</h4>
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
    // 13. EDITOR DE MEMORIA TERRITORIAL & CREACIÓN DE NODOS
    // ==========================================
    function openEditorForNode(node) {
        if (!node) return;
        editNodeNum.value = node.num;
        editorDialogTitle.textContent = `Editar / Aportar Memoria (Nodo #${node.num})`;
        editNodeName.value = node.nombre || "";
        editNodeCuenca.value = node.cuenca || "";
        editNodeCountry.value = `${node.estado ? node.estado + ', ' : ''}${node.pais || ''}`;
        editNodeThreat.value = node.amenaza || "";
        editNodeLat.value = (node.lat !== undefined && node.lat !== null) ? Number(node.lat).toFixed(4) : "";
        editNodeLng.value = (node.lng !== undefined && node.lng !== null) ? Number(node.lng).toFixed(4) : "";
        editNodeCommunities.value = node.comunidades || "";
        editNodeText.value = node.texto || "";
        editNodeImage.value = node.imagen || "";

        editorModal.classList.add("open");
    }

    function openEditorForNewNode() {
        // Centro actual de la vista en lat/lng
        const centerLatLng = SatelliteTileEngine.unproject(camera.x, camera.y);

        editNodeNum.value = "new";
        editorDialogTitle.textContent = "Registrar Nueva Lucha Territorial / Nudo del Agua";
        editNodeName.value = "";
        editNodeCuenca.value = activeCuenca ? activeCuenca.nombre : "";
        editNodeCountry.value = "";
        editNodeThreat.value = "";
        editNodeLat.value = centerLatLng.lat.toFixed(4);
        editNodeLng.value = centerLatLng.lng.toFixed(4);
        editNodeCommunities.value = "";
        editNodeText.value = "";
        editNodeImage.value = "";

        editorModal.classList.add("open");
    }

    btnEditCurrentStruggle.addEventListener("click", () => {
        openEditorForNode(activeStruggleNode);
    });

    if (btnAddNewStruggle) {
        btnAddNewStruggle.addEventListener("click", () => {
            openEditorForNewNode();
        });
    }

    if (btnAddNodeCatalog) {
        btnAddNodeCatalog.addEventListener("click", () => {
            strugglesModal.classList.remove("open");
            openEditorForNewNode();
        });
    }

    if (btnCaptureCameraCoords) {
        btnCaptureCameraCoords.addEventListener("click", () => {
            const centerLatLng = SatelliteTileEngine.unproject(camera.x, camera.y);
            editNodeLat.value = centerLatLng.lat.toFixed(4);
            editNodeLng.value = centerLatLng.lng.toFixed(4);
            hintPill.innerHTML = `📍 <span>Coordenadas capturadas:</span> ${centerLatLng.lat.toFixed(4)}, ${centerLatLng.lng.toFixed(4)}`;
        });
    }

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
        const isNew = editNodeNum.value === "new";
        const latVal = parseFloat(editNodeLat.value);
        const lngVal = parseFloat(editNodeLng.value);

        const nodeData = {
            nombre: editNodeName.value.trim() || (isNew ? "Nuevo Nudo Territorial" : "Nodo"),
            cuenca: editNodeCuenca.value.trim() || "Cuencas de Abya Yala",
            pais: editNodeCountry.value.trim() || "Abya Yala",
            amenaza: editNodeThreat.value.trim() || "Defensa ambiental del agua y territorio",
            comunidades: editNodeCommunities.value.trim() || "Asamblea / Comunidad Local",
            texto: editNodeText.value.trim() || "Territorio en custodia del agua.",
            imagen: editNodeImage.value.trim(),
            lat: isNaN(latVal) ? 0 : latVal,
            lng: isNaN(lngVal) ? 0 : lngVal
        };

        let savedNode;
        if (isNew) {
            savedNode = luchasStore.addNewNode(nodeData);
            hintPill.innerHTML = `✨ <span>Nuevo nodo registrado:</span> #${savedNode.num} ${savedNode.nombre}`;
            addNodeToCollagePool(savedNode);
        } else {
            const num = parseInt(editNodeNum.value);
            if (!num) return;
            savedNode = luchasStore.saveNodeEdit(num, nodeData);
            hintPill.innerHTML = `💾 <span>Memoria guardada:</span> Nodo #${num} actualizado en el almacenamiento local.`;
            addNodeToCollagePool(savedNode);
        }

        activeStruggleNode = savedNode;
        updateDossierStruggle(savedNode);
        showArrivalBanner(savedNode);
        buildStrugglesGrid(strugglesSearchInput.value, currentCatalogFilter);
        editorModal.classList.remove("open");
        jumpToStruggleNode(savedNode);
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
            return;
        }

        // Si no se hizo clic en una lucha, verificar confluencias hidrológicas mayores
        if (typeof CONFLUENCIAS_HIDROLOGICAS_REALES !== "undefined") {
            let closestConf = null;
            let minConfDist = 28;
            CONFLUENCIAS_HIDROLOGICAS_REALES.forEach(conf => {
                const sp = camera.worldToScreen(conf.x, conf.y);
                const dist = Math.hypot(sp.x - screenX, sp.y - screenY);
                if (dist < minConfDist) {
                    closestConf = conf;
                    minConfDist = dist;
                }
            });

            if (closestConf) {
                camera.flyTo(closestConf.x, closestConf.y, 7.8);
                showArrivalBanner({
                    nombre: closestConf.nombre,
                    pais: closestConf.cuenca,
                    imagen: closestConf.imagen || "assets/abya_yala_red_hidrica.png",
                    importancia: closestConf.subtitulo || "Confluencia Hidrológica Continental",
                    texto: closestConf.descripcion || "Punto de convergencia fluvial natural de Abya Yala."
                });
            }
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

            // Actualizar en tiempo real los meandros recorridos en la barra inferior
            renderTimelineRiverCanvas(activeCuenca, t);

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

        // 2. Trazado Fluvial Cartográfico Sereno y Orgánico
        drawVascularRivers(ctx);

        // 3. Partículas minerales de corriente
        if (!isEcoMode || camera.currentSpeed > 0.005) {
            particleSystem.update(activeCuenca.id);
            particleSystem.draw(ctx, camera, activeCuenca.id);
        }

        // 4. Nodos de Luchas Territoriales & Comunitarias
        if (showStrugglesLayer) {
            drawStrugglesNodes(ctx);
        }

        requestAnimationFrame(render);
    }

    function drawVascularRivers(c) {
        const zoomOutFactor = Math.max(1.0, (5.2 - camera.zoom) * 1.35);

        // 1. Cuencas Principales
        CUENCAS_GEO_DATA.forEach((cuenca) => {
            const isActive = (cuenca.id === activeCuenca.id);
            const river = cuenca.puntosMercator;
            if (!river || river.length < 2) return;

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

            if (isActive) {
                // Río activo: Paleta suave terracota / ocre cálido sereno y orgánico
                // 1. Velo de lecho ribereño suave y translúcido
                c.strokeStyle = "rgba(143, 76, 48, 0.22)";
                c.lineWidth = 5.0 * zoomOutFactor;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.stroke();

                // 2. Trazo principal del cauce: terracota mate elegante
                c.strokeStyle = "rgba(184, 102, 65, 0.88)";
                c.lineWidth = 2.4 * zoomOutFactor;
                c.stroke();

                // 3. Hilo interior de brillo mineral sutil
                c.strokeStyle = "rgba(246, 238, 228, 0.75)";
                c.lineWidth = 0.9 * zoomOutFactor;
                c.stroke();
            } else {
                // Ríos inactivos: Hilos translúcidos cian pizarra / glaciar mineral
                c.strokeStyle = "rgba(74, 145, 158, 0.42)";
                c.lineWidth = 1.3 * zoomOutFactor;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.stroke();
            }

            // Marcador de posición del navegante fluvial
            if (isActive && camera.isFollowingRiver) {
                const curPos = getSplinePoint(river, camera.riverT);
                const curScreen = camera.worldToScreen(curPos.x, curPos.y);

                // Anillo exterior terracota
                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 9.0 * Math.min(1.4, zoomOutFactor), 0, Math.PI * 2);
                c.strokeStyle = "rgba(184, 102, 65, 0.85)";
                c.lineWidth = 1.5;
                c.stroke();

                // Núcleo perlado cálido
                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 3.8 * Math.min(1.4, zoomOutFactor), 0, Math.PI * 2);
                c.fillStyle = "#FAF6F0";
                c.fill();
            }

            c.restore();
        });

        // 2. Tributarios Reales y Capilares Fluviales Dendríticos (Interconexión Genuina)
        if (typeof TRIBUTARIOS_CONTINENTALES !== "undefined") {
            const now = Date.now();
            TRIBUTARIOS_CONTINENTALES.forEach((trib, tIdx) => {
                const pts = trib.puntosMercator;
                if (!pts || pts.length < 2) return;

                const isAffiliated = (trib.cuencaMadre === activeCuenca.id || trib.cuencaDestino === activeCuenca.id);

                c.save();
                c.beginPath();
                const steps = pts.length * 6;
                for (let i = 0; i <= steps; i++) {
                    const t = i / steps;
                    const pt = getSplinePoint(pts, t);
                    const sp = camera.worldToScreen(pt.x, pt.y);
                    if (i === 0) c.moveTo(sp.x, sp.y);
                    else c.lineTo(sp.x, sp.y);
                }

                if (isAffiliated) {
                    c.strokeStyle = "rgba(184, 102, 65, 0.70)";
                    c.lineWidth = 2.0 * zoomOutFactor;
                } else {
                    c.strokeStyle = "rgba(74, 145, 158, 0.38)";
                    c.lineWidth = 1.2 * zoomOutFactor;
                }
                c.lineCap = "round";
                c.lineJoin = "round";
                c.stroke();

                // Fina pulsación mineral viajera que fluye hacia la confluencia
                const pulseT = ((now * 0.00018 + tIdx * 0.22) % 1.0);
                const pulsePt = getSplinePoint(pts, pulseT);
                const psp = camera.worldToScreen(pulsePt.x, pulsePt.y);
                if (psp.x >= -20 && psp.x <= camera.width + 20 && psp.y >= -20 && psp.y <= camera.height + 20) {
                    c.beginPath();
                    c.arc(psp.x, psp.y, Math.max(1.5, 2.5 * Math.min(1.3, zoomOutFactor)), 0, Math.PI * 2);
                    c.fillStyle = isAffiliated ? "rgba(246, 238, 228, 0.85)" : "rgba(180, 225, 235, 0.75)";
                    c.fill();
                }

                c.restore();
            });
        }

        // 3. Confluencias Hidrológicas Mayores Reales (Sinapsis de Aguas Vivas)
        if (typeof CONFLUENCIAS_HIDROLOGICAS_REALES !== "undefined") {
            const now = Date.now();
            CONFLUENCIAS_HIDROLOGICAS_REALES.forEach((conf, cIdx) => {
                const sp = camera.worldToScreen(conf.x, conf.y);
                if (sp.x < -40 || sp.x > camera.width + 40 || sp.y < -40 || sp.y > camera.height + 40) return;

                const wave = ((now * 0.012 + cIdx * 7) % 20);
                const waveAlpha = Math.max(0, 0.85 - wave / 20);

                c.save();
                // Ondas concéntricas suaves de la confluencia (simula encuentro de aguas)
                c.beginPath();
                c.arc(sp.x, sp.y, Math.max(3, wave * (zoomOutFactor * 0.7)), 0, Math.PI * 2);
                c.strokeStyle = `rgba(184, 102, 65, ${waveAlpha * 0.75})`;
                c.lineWidth = 1.3;
                c.stroke();

                // Núcleo de la confluencia
                c.beginPath();
                c.arc(sp.x, sp.y, Math.max(3.5, 4.8 * (zoomOutFactor * 0.6)), 0, Math.PI * 2);
                c.fillStyle = "#B88544";
                c.fill();

                c.beginPath();
                c.arc(sp.x, sp.y, Math.max(1.8, 2.2 * (zoomOutFactor * 0.6)), 0, Math.PI * 2);
                c.fillStyle = "#FAF6F0";
                c.fill();

                // Etiqueta al acercarse
                if (camera.zoom > 4.6) {
                    const labelText = `${conf.icono || '🌊'} ${conf.nombre}`;
                    c.font = "600 10px Inter, sans-serif";
                    const tw = c.measureText(labelText).width;

                    c.fillStyle = "rgba(10, 22, 28, 0.88)";
                    c.beginPath();
                    c.roundRect(sp.x + 8, sp.y - 8, tw + 10, 16, 4);
                    c.fill();
                    c.strokeStyle = "rgba(184, 133, 68, 0.4)";
                    c.lineWidth = 1;
                    c.stroke();

                    c.fillStyle = "#FAF6F0";
                    c.textAlign = "left";
                    c.textBaseline = "middle";
                    c.fillText(labelText, sp.x + 13, sp.y);
                }

                c.restore();
            });
        }
    }

    // RENDERIZADO DE LOS NODOS DE LUCHA CON SUAVE ESTÉTICA CARTOGRÁFICA
    function drawStrugglesNodes(c) {
        luchasStore.nodes.forEach(node => {
            const sp = camera.worldToScreen(node.x, node.y);
            if (sp.x < -40 || sp.x > camera.width + 40 || sp.y < -40 || sp.y > camera.height + 40) return;

            const isSelected = activeStruggleNode && activeStruggleNode.num === node.num;
            const distToCenter = Math.hypot(sp.x - camera.width / 2, sp.y - camera.height / 2);
            const isNearFocus = distToCenter < 180 && camera.zoom > 6.2;

            c.save();

            if (isSelected || isNearFocus) {
                const bubbleRadius = isSelected ? 16 : 13;

                // Anillo sutil sin resplandor estridente
                c.beginPath();
                c.arc(sp.x, sp.y, bubbleRadius + 3, 0, Math.PI * 2);
                c.fillStyle = isSelected ? "rgba(184, 102, 65, 0.25)" : "rgba(74, 145, 158, 0.20)";
                c.fill();
                c.strokeStyle = isSelected ? "#8F4C30" : "#4A919E";
                c.lineWidth = 1.5;
                c.stroke();

                // Fotografía en miniatura si está disponible
                const photoUrl = getNodePhotoUrl(node);
                let cachedImg = nodeImageCache.get(photoUrl);
                if (!cachedImg && photoUrl) {
                    cachedImg = new Image();
                    cachedImg.src = photoUrl;
                    nodeImageCache.set(photoUrl, cachedImg);
                }

                if (cachedImg && cachedImg.complete && cachedImg.naturalWidth > 0) {
                    c.save();
                    c.beginPath();
                    c.arc(sp.x, sp.y, bubbleRadius, 0, Math.PI * 2);
                    c.clip();
                    c.drawImage(cachedImg, sp.x - bubbleRadius, sp.y - bubbleRadius, bubbleRadius * 2, bubbleRadius * 2);
                    c.restore();
                } else {
                    c.beginPath();
                    c.arc(sp.x, sp.y, bubbleRadius, 0, Math.PI * 2);
                    c.fillStyle = node.isCustom ? "#A87435" : (isSelected ? "#8F4C30" : "#5C3120");
                    c.fill();
                }

                // Insignia con el número
                c.beginPath();
                c.arc(sp.x + bubbleRadius * 0.7, sp.y - bubbleRadius * 0.7, 6.5, 0, Math.PI * 2);
                c.fillStyle = node.isCustom ? "#B88544" : "#8F4C30";
                c.fill();
                c.strokeStyle = "#FAF6F0";
                c.lineWidth = 1.0;
                c.stroke();

                c.font = "700 8px Inter, sans-serif";
                c.fillStyle = "#FAF6F0";
                c.textAlign = "center";
                c.textBaseline = "middle";
                c.fillText(node.num, sp.x + bubbleRadius * 0.7, sp.y - bubbleRadius * 0.7);

                // Nombre con cápsula de lectura para contraste cartográfico limpio
                const labelText = node.isCustom ? `🌱 ${node.nombre}` : node.nombre;
                c.font = "600 11px Inter, sans-serif";
                const tw = c.measureText(labelText).width;
                const lx = sp.x + bubbleRadius + 8;
                const ly = sp.y - 8;

                c.fillStyle = "rgba(15, 23, 26, 0.85)";
                c.beginPath();
                c.roundRect(lx, ly, tw + 10, 18, 4);
                c.fill();
                c.strokeStyle = "rgba(246, 238, 228, 0.25)";
                c.lineWidth = 1;
                c.stroke();

                c.fillStyle = "#FAF6F0";
                c.textAlign = "left";
                c.textBaseline = "middle";
                c.fillText(labelText, lx + 5, ly + 9);
            } else {
                // Modo estándar: nodo circular numerado con suave terracota u ocre terroso
                c.beginPath();
                c.arc(sp.x, sp.y, 4.8, 0, Math.PI * 2);
                c.fillStyle = node.isCustom ? "#B88544" : "#8F4C30";
                c.fill();
                c.strokeStyle = "rgba(246, 238, 228, 0.85)";
                c.lineWidth = 1.2;
                c.stroke();

                if (camera.zoom > 5.8) {
                    c.font = "700 7.5px Inter, sans-serif";
                    c.fillStyle = "#FAF6F0";
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
