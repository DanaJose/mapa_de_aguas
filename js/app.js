/**
 * Cartografía de las Aguas de Abya Yala
 * Controlador Principal, Inmersión Fotorrealista y Mapeo Continental Extendido
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Elementos del DOM
    const portalScreen = document.getElementById("portal-screen");
    const btnPortalDrag = document.getElementById("btn-portal-drag");
    const btnPortalDraw = document.getElementById("btn-portal-draw");
    const btnPortalFree = document.getElementById("btn-portal-free");
    const btnPortalHome = document.getElementById("btn-portal-home");
    const btnFullscreen = document.getElementById("btn-fullscreen");

    const mapCanvas = document.getElementById("map-canvas");
    const drawCanvas = document.getElementById("draw-canvas");
    const ctx = mapCanvas.getContext("2d");
    const drawCtx = drawCanvas.getContext("2d");

    const hudLayer = document.getElementById("hud-layer");
    const btnRiverDropdown = document.getElementById("btn-river-dropdown");
    const currentRiverName = document.getElementById("current-river-name");
    const riverMenu = document.getElementById("river-menu");
    const btnToggleConnections = document.getElementById("btn-toggle-connections");

    const btnModeFlow = document.getElementById("btn-mode-flow");
    const btnModeDraw = document.getElementById("btn-mode-draw");
    const btnModeFree = document.getElementById("btn-mode-free");
    const btnModeTour = document.getElementById("btn-mode-tour");
    const tourIcon = document.getElementById("tour-icon");

    const btnAudio = document.getElementById("btn-audio");
    const audioIcon = document.getElementById("audio-icon");

    // Tarjeta Flotante
    const floatingCard = document.getElementById("floating-card");
    const floatingImg = document.getElementById("floating-img");
    const floatingTag = document.getElementById("floating-tag");
    const floatingTitle = document.getElementById("floating-title");
    const floatingText = document.getElementById("floating-text");
    const btnOpenPhotoModal = document.getElementById("btn-open-photo-modal");
    const btnCloseFloating = document.getElementById("btn-close-floating");

    // Scrubber
    const scrubberOrigin = document.getElementById("scrubber-origin");
    const scrubberPercent = document.getElementById("scrubber-percent");
    const scrubberDest = document.getElementById("scrubber-dest");
    const scrubberTrack = document.getElementById("scrubber-track");
    const scrubberFill = document.getElementById("scrubber-fill");
    const scrubberHandle = document.getElementById("scrubber-handle");
    const hintPill = document.getElementById("hint-pill");

    // Modal Fotográfico
    const photoModal = document.getElementById("photo-modal");
    const photoModalImg = document.getElementById("photo-modal-img");
    const photoModalTitle = document.getElementById("photo-modal-title");
    const photoModalDesc = document.getElementById("photo-modal-desc");
    const photoModalClose = document.getElementById("photo-modal-close");

    // 2. Módulos y Estado
    const satelliteEngine = new SatelliteTileEngine();
    const camera = new DynamicCamera(window.innerWidth, window.innerHeight);
    const particleSystem = new WaterParticleSystem(140);
    const audioSystem = new WaterAmbientAudio();
    const matcher = new LandLinesMatcher(CUENCAS_GEO_DATA);

    particleSystem.setCuencas(CUENCAS_GEO_DATA);

    let currentMode = "flow";
    let activeCuencaIndex = 0;
    let activeCuenca = CUENCAS_GEO_DATA[activeCuencaIndex];
    let activeNearbyNode = null;
    let floatingDismissed = false;
    let showConnections = false;

    // Estado del ratón y desvanecimiento
    let isMouseDown = false;
    let isScrubbing = false;
    let mouseStart = { x: 0, y: 0 };
    let cameraStart = { x: 0, y: 0 };
    let userDrawnStroke = [];
    let dragDimTimeout = null;

    // 3. Ajuste de Lienzo
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
    updateRiverLabels();

    // ==========================================
    // 4. MODO PANTALLA COMPLETA VIDEOJUEGO
    // ==========================================

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            btnFullscreen.innerHTML = `<span>⛶</span> Salir de Pantalla Completa`;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
            }
            btnFullscreen.innerHTML = `<span>⛶</span> Pantalla Completa`;
        }
    }

    btnFullscreen.addEventListener("click", toggleFullscreen);

    // ==========================================
    // 5. PORTAL DE ENTRADA (LAND LINES)
    // ==========================================

    function enterExperience(mode) {
        portalScreen.classList.add("dissolved");
        setMode(mode);

        // Intentar pantalla completa inmersiva tipo videojuego al entrar
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }

        if (mode === "flow") {
            selectCuenca(0, 0.0);
        } else if (mode === "free") {
            camera.focusOverview();
        }
    }

    btnPortalDrag.addEventListener("click", () => enterExperience("flow"));
    btnPortalDraw.addEventListener("click", () => enterExperience("draw"));
    btnPortalFree.addEventListener("click", () => enterExperience("free"));

    btnPortalHome.addEventListener("click", () => {
        portalScreen.classList.remove("dissolved");
    });

    // ==========================================
    // 6. MENÚ CATEGORIZADO DE CUENCAS DE ABYA YALA
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
                    <small>${cuenca.subtitulo.substring(0, 38)}...</small>
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
        floatingDismissed = false;
        hideFloatingCard();

        const items = riverMenu.querySelectorAll(".river-menu-item");
        items.forEach(it => it.classList.remove("active"));

        camera.setCuenca(activeCuenca, startT);
        updateRiverLabels();

        if (currentMode === "draw") {
            setMode("flow");
        }
    }

    function updateRiverLabels() {
        if (!activeCuenca || !activeCuenca.puntosGeo) return;
        const pts = activeCuenca.puntosGeo;
        scrubberOrigin.textContent = `🏔️ ${pts[0].nombre.split('(')[0]}`;
        scrubberDest.textContent = `🌊 ${pts[pts.length - 1].nombre.split('(')[0]}`;
    }

    // Alternar visualización de conexiones hídricas intercuencas
    btnToggleConnections.addEventListener("click", () => {
        showConnections = !showConnections;
        btnToggleConnections.classList.toggle("active", showConnections);
        if (showConnections) {
            hintPill.innerHTML = `🔗 <span>Tejido de Conexiones:</span> Se iluminan el Canal del Casiquiare y la Divisoria Continental de Abya Yala.`;
        }
    });

    // ==========================================
    // 7. CAMBIO DE MODOS
    // ==========================================

    function setMode(mode) {
        currentMode = mode;
        [btnModeFlow, btnModeDraw, btnModeFree, btnModeTour].forEach(b => b.classList.remove("active"));
        mapCanvas.classList.remove("drawing");
        drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        userDrawnStroke = [];

        if (mode === "flow") {
            btnModeFlow.classList.add("active");
            camera.isFollowingRiver = true;
            camera.autoPlayTour = false;
            tourIcon.textContent = "▶";
            hintPill.innerHTML = `Arrastra para fluir &bull; <span>El sonido del agua acompaña tu viaje</span>`;
        } else if (mode === "draw") {
            btnModeDraw.classList.add("active");
            mapCanvas.classList.add("drawing");
            camera.isFollowingRiver = false;
            camera.autoPlayTour = false;
            tourIcon.textContent = "▶";
            hintPill.innerHTML = `✏️ <span>Land Lines:</span> Dibuja un trazo en la pantalla para buscar un río`;
        } else if (mode === "free") {
            btnModeFree.classList.add("active");
            camera.isFollowingRiver = false;
            camera.autoPlayTour = false;
            tourIcon.textContent = "▶";
            hintPill.innerHTML = `Desliza libremente para explorar el satélite continental de Abya Yala`;
        } else if (mode === "tour") {
            btnModeTour.classList.add("active");
            camera.isFollowingRiver = true;
            camera.autoPlayTour = true;
            tourIcon.textContent = "⏸";
            hintPill.innerHTML = `Vuelo cinemático satelital automático`;
        }
    }

    btnModeFlow.addEventListener("click", () => setMode("flow"));
    btnModeDraw.addEventListener("click", () => setMode("draw"));
    btnModeFree.addEventListener("click", () => {
        setMode("free");
        camera.focusOverview();
    });
    btnModeTour.addEventListener("click", () => {
        setMode(currentMode === "tour" ? "flow" : "tour");
    });

    btnAudio.addEventListener("click", () => {
        const isAudible = audioSystem.toggleMute();
        btnAudio.classList.toggle("active", isAudible);
        audioIcon.textContent = isAudible ? "🔊" : "🔇";
    });

    // ==========================================
    // 8. TARJETA FLOTANTE CONTEXTUAL
    // ==========================================

    function showFloatingCard(node) {
        if (floatingDismissed && activeNearbyNode === node) return;
        activeNearbyNode = node;

        floatingTag.textContent = node.tipo.toUpperCase().replace(/_/g, " ");
        floatingTitle.textContent = `${node.icono || '📍'} ${node.nombre}`;
        floatingText.textContent = node.texto || "";

        const imgUrl = node.imagen || (activeCuenca.imagenes && activeCuenca.imagenes[0] ? activeCuenca.imagenes[0].url : "");
        if (imgUrl) {
            floatingImg.src = imgUrl;
            floatingImg.style.display = "block";
        } else {
            floatingImg.style.display = "none";
        }

        floatingCard.classList.add("visible");
    }

    function hideFloatingCard() {
        floatingCard.classList.remove("visible");
    }

    btnCloseFloating.addEventListener("click", (e) => {
        e.stopPropagation();
        hideFloatingCard();
        floatingDismissed = true;
    });

    btnOpenPhotoModal.addEventListener("click", () => {
        if (!activeNearbyNode) return;
        const imgUrl = activeNearbyNode.imagen || (activeCuenca.imagenes && activeCuenca.imagenes[0] ? activeCuenca.imagenes[0].url : "");
        photoModalImg.src = imgUrl;
        photoModalTitle.textContent = activeNearbyNode.nombre;
        photoModalDesc.textContent = `${activeNearbyNode.importancia || ''} — ${activeNearbyNode.texto || ''}`;
        photoModal.classList.add("open");
    });

    floatingImg.addEventListener("click", () => {
        btnOpenPhotoModal.click();
    });

    photoModalClose.addEventListener("click", () => {
        photoModal.classList.remove("open");
    });

    photoModal.addEventListener("click", (e) => {
        if (e.target === photoModal) photoModal.classList.remove("open");
    });

    // ==========================================
    // 9. INTERACCIÓN DE RATÓN Y TACTO
    // ==========================================

    function triggerHudDim() {
        hudLayer.classList.add("dimmed");
        clearTimeout(dragDimTimeout);
        dragDimTimeout = setTimeout(() => {
            hudLayer.classList.remove("dimmed");
        }, 1200);
    }

    mapCanvas.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        mapCanvas.classList.add("grabbing");
        mouseStart = { x: e.clientX, y: e.clientY };
        cameraStart = { x: camera.x, y: camera.y };
        triggerHudDim();

        if (currentMode === "draw") {
            userDrawnStroke = [{ x: e.clientX, y: e.clientY }];
            drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        }
    });

    window.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        triggerHudDim();

        const dx = e.clientX - mouseStart.x;
        const dy = e.clientY - mouseStart.y;

        if (currentMode === "flow" || currentMode === "tour") {
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

    window.addEventListener("mouseup", () => {
        if (!isMouseDown) return;
        isMouseDown = false;
        mapCanvas.classList.remove("grabbing");

        if (currentMode === "draw" && userDrawnStroke.length > 5) {
            processDrawMatching();
        }
    });

    mapCanvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        triggerHudDim();

        if (currentMode === "flow") {
            camera.nudgeRiver(e.deltaY * 0.00032);
        } else {
            const zoomDelta = -e.deltaY * 0.0015;
            camera.targetZoom = Math.max(camera.minZoom, Math.min(camera.maxZoom, camera.targetZoom + zoomDelta));
        }
    }, { passive: false });

    // Scrubber
    function handleScrubber(e) {
        const rect = scrubberTrack.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        camera.targetRiverT = percent;
        camera.isFollowingRiver = true;
    }

    scrubberTrack.addEventListener("mousedown", (e) => {
        isScrubbing = true;
        handleScrubber(e);
    });

    window.addEventListener("mousemove", (e) => {
        if (isScrubbing) handleScrubber(e);
    });

    window.addEventListener("mouseup", () => {
        isScrubbing = false;
    });

    // Touch
    mapCanvas.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            const t = e.touches[0];
            isMouseDown = true;
            mouseStart = { x: t.clientX, y: t.clientY };
            cameraStart = { x: camera.x, y: camera.y };
            triggerHudDim();

            if (currentMode === "draw") {
                userDrawnStroke = [{ x: t.clientX, y: t.clientY }];
                drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
            }
        }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
        if (!isMouseDown || e.touches.length !== 1) return;
        triggerHudDim();
        const t = e.touches[0];
        const dx = t.clientX - mouseStart.x;
        const dy = t.clientY - mouseStart.y;

        if (currentMode === "flow" || currentMode === "tour") {
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

    window.addEventListener("touchend", () => {
        if (!isMouseDown) return;
        isMouseDown = false;
        if (currentMode === "draw" && userDrawnStroke.length > 5) {
            processDrawMatching();
        }
    });

    // ==========================================
    // 10. DIBUJO LAND LINES
    // ==========================================

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
            }, 600);
        } else {
            hintPill.innerHTML = `Traza una curva más amplia en la pantalla`;
        }
    }

    function checkNodeProximity() {
        if (!activeCuenca || !activeCuenca.nodos || activeCuenca.nodos.length === 0) return;

        let closestNode = null;
        let minScreenDist = 90;

        activeCuenca.nodos.forEach(node => {
            const screenPos = camera.worldToScreen(node.x, node.y);
            const dist = Math.hypot(screenPos.x - camera.width / 2, screenPos.y - camera.height / 2);
            if (dist < minScreenDist) {
                closestNode = node;
                minScreenDist = dist;
            }
        });

        if (closestNode) {
            showFloatingCard(closestNode);
        } else {
            if (activeNearbyNode) {
                const screenPos = camera.worldToScreen(activeNearbyNode.x, activeNearbyNode.y);
                const dist = Math.hypot(screenPos.x - camera.width / 2, screenPos.y - camera.height / 2);
                if (dist > 180) {
                    hideFloatingCard();
                    activeNearbyNode = null;
                    floatingDismissed = false;
                }
            }
        }
    }

    // ==========================================
    // 11. BUCLE DE RENDERIZADO SATELITAL (60 FPS)
    // ==========================================

    function render() {
        camera.update();
        audioSystem.updateMotion(camera.currentSpeed);
        checkNodeProximity();

        if (camera.isFollowingRiver && activeCuenca) {
            const t = Math.max(0, Math.min(1, camera.riverT));
            scrubberFill.style.width = `${t * 100}%`;
            scrubberHandle.style.left = `${t * 100}%`;
            scrubberPercent.textContent = `Curso: ${Math.round(t * 100)}%`;
        }

        // 1. Fondo Satelital Real (Esri World Imagery)
        satelliteEngine.render(ctx, camera, window.innerWidth, window.innerHeight);

        // 2. Conexiones Intercuencas y Divisoria Continental (si está activado)
        if (showConnections) {
            drawInterbasinConnections(ctx);
        }

        // 3. Sistema Vascular de Ríos sobre el Satélite (Con Escala Adaptativa)
        drawVascularRivers(ctx);

        // 4. Partículas de corriente
        particleSystem.update(activeCuenca.id);
        particleSystem.draw(ctx, camera, activeCuenca.id);

        // 5. Nodos de fuentes hídricas
        drawSatelliteNodes(ctx);

        requestAnimationFrame(render);
    }

    // Renderizado vascular adaptativo: al alejar el zoom continental, los ríos se notan con fuerza
    function drawVascularRivers(c) {
        // Factor de amplificación visual cuando la cámara está lejos
        const zoomOutFactor = Math.max(1.0, (5.2 - camera.zoom) * 1.35);

        CUENCAS_GEO_DATA.forEach(cuenca => {
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

            // Halo luminoso exterior (para que se note a escala de todo el continente)
            c.strokeStyle = isActive ? "rgba(212, 136, 49, 0.55)" : "rgba(72, 181, 196, 0.45)";
            c.lineWidth = (isActive ? 7.5 : 4.0) * zoomOutFactor;
            c.lineCap = "round";
            c.lineJoin = "round";
            c.stroke();

            // Canal de agua mineral viva
            c.strokeStyle = cuenca.colorAgua || "#48B5C4";
            c.lineWidth = (isActive ? 3.0 : 1.8) * zoomOutFactor;
            c.stroke();

            // Núcleo blanco de corriente
            c.strokeStyle = "rgba(255, 255, 255, 0.85)";
            c.lineWidth = (isActive ? 1.2 : 0.8) * zoomOutFactor;
            c.stroke();

            // Indicador del viajero
            if (isActive && camera.isFollowingRiver) {
                const curPos = getSplinePoint(river, camera.riverT);
                const curScreen = camera.worldToScreen(curPos.x, curPos.y);

                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 4.5 * Math.min(1.5, zoomOutFactor), 0, Math.PI * 2);
                c.fillStyle = "#FFFFFF";
                c.fill();

                c.beginPath();
                c.arc(curScreen.x, curScreen.y, 11 * Math.min(1.5, zoomOutFactor), 0, Math.PI * 2);
                c.strokeStyle = "rgba(212, 136, 49, 0.85)";
                c.lineWidth = 1.8;
                c.stroke();
            }

            c.restore();
        });
    }

    // Dibujo del tejido de conexiones intercuencas
    function drawInterbasinConnections(c) {
        c.save();
        const time = Date.now() * 0.002;

        CONEXIONES_INTERCUENCAS.forEach(con => {
            const pts = con.puntosMercator;
            if (!pts || pts.length < 2) return;

            c.beginPath();
            const first = camera.worldToScreen(pts[0].x, pts[0].y);
            c.moveTo(first.x, first.y);

            const steps = pts.length * 6;
            for (let i = 1; i <= steps; i++) {
                const t = i / steps;
                const pt = getSplinePoint(pts, t);
                const sp = camera.worldToScreen(pt.x, pt.y);
                c.lineTo(sp.x, sp.y);
            }

            if (con.tipo === "bifurcacion_natural") {
                // Casiquiare: Resplandor dorado intercuencas
                c.strokeStyle = "rgba(212, 136, 49, 0.85)";
                c.lineWidth = 4;
                c.setLineDash([6, 6]);
                c.lineDashOffset = -time * 12;
                c.stroke();
            } else if (con.tipo === "corredor_humedal") {
                // Pantanal-Guaporé
                c.strokeStyle = "rgba(72, 181, 196, 0.75)";
                c.lineWidth = 3;
                c.setLineDash([4, 6]);
                c.lineDashOffset = -time * 8;
                c.stroke();
            } else {
                // Divisoria Continental de Aguas
                c.strokeStyle = "rgba(168, 74, 21, 0.6)";
                c.lineWidth = 2.5;
                c.setLineDash([8, 8]);
                c.stroke();
            }
        });

        c.restore();
    }

    function drawSatelliteNodes(c) {
        if (!activeCuenca || !activeCuenca.nodos) return;

        activeCuenca.nodos.forEach(node => {
            const screenPos = camera.worldToScreen(node.x, node.y);
            if (screenPos.x < -40 || screenPos.x > camera.width + 40 ||
                screenPos.y < -40 || screenPos.y > camera.height + 40) return;

            c.save();
            c.beginPath();
            c.arc(screenPos.x, screenPos.y, 4.5, 0, Math.PI * 2);
            c.fillStyle = "#D48831";
            c.fill();

            c.beginPath();
            c.arc(screenPos.x, screenPos.y, 9, 0, Math.PI * 2);
            c.strokeStyle = "rgba(212, 136, 49, 0.65)";
            c.lineWidth = 1.4;
            c.stroke();

            c.font = `600 11px Inter, sans-serif`;
            c.fillStyle = "#FFFFFF";
            c.shadowColor = "rgba(0, 0, 0, 0.9)";
            c.shadowBlur = 4;
            c.fillText(node.nombre, screenPos.x + 12, screenPos.y + 4);
            c.restore();
        });
    }

    requestAnimationFrame(render);
});
