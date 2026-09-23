/**
 * Cartografía de las Aguas de Abya Yala
 * Red Hidrográfica Continental Completa (Más de 25 Grandes Cuencas y Ríos)
 * Coordenadas reales georreferenciadas (Latitud / Longitud) proyectadas a Web Mercator
 * Incluye la rica red del Centro de Abya Yala (Río Plátano, Río Gualcarque, Río Cangrejal, Río Coco)
 */

const CUENCAS_GEO_DATA = [
    // =============================================================
    // I. GRAN NORTE & ÁRTICO
    // =============================================================
    {
        id: "mackenzie",
        nombre: "Río Mackenzie (Dehcho)",
        region: "Gran Norte Boreal & Ártico (Canadá)",
        categoria: "Norteamérica",
        subtitulo: "El gran río ártico que esculpe meandros en la taiga",
        colorAgua: "#48B5C4",
        colorTerracota: "#A84A15",
        caudalMedio: "9.910 m³/s",
        longitudPrincipal: "4.241 km",
        superficie: "1.805.200 km²",
        descripcion: "Conocido por el pueblo originario Dene como 'Dehcho' (el Gran Río). Drena una inmensa red de taiga, turberas boreales, meandros serpenteantes y lagos colosales (Gran Lago del Oso y Gran Lago del Esclavo). Regula el clima global vertiendo agua dulce al Océano Glacial Ártico.",
        imagenes: [
            { url: "assets/mackenzie_meandros.jpg", titulo: "Meandros Boreales y Lagos de la Tundra", descripcion: "Laberinto de antiguos meandros, lagos en herradura y bosques boreales." },
            { url: "assets/mackenzie_mapa.jpg", titulo: "Cartografía de la Cuenca del Mackenzie", descripcion: "La inmensa cuenca ártica que conecta el río Peace, Athabasca y Liard hasta el Mar de Beaufort." }
        ],
        puntosGeo: [
            { lat: 56.1, lng: -120.0, nombre: "Río Peace (Montañas Rocosas)" },
            { lat: 59.2, lng: -111.5, nombre: "Río Slave / Delta de Athabasca" },
            { lat: 61.5, lng: -115.5, nombre: "Gran Lago del Esclavo (Great Slave Lake)" },
            { lat: 61.85, lng: -121.35, nombre: "Fort Simpson (Confluencia Río Liard)" },
            { lat: 64.9, lng: -125.6, nombre: "Confluencia Gran Lago del Oso" },
            { lat: 65.28, lng: -126.83, nombre: "Norman Wells (Mackenzie Medio)" },
            { lat: 67.45, lng: -133.74, nombre: "Tsiigehtchic" },
            { lat: 69.4, lng: -134.0, nombre: "Delta del Mackenzie / Mar de Beaufort (Ártico)" }
        ],
        nodos: [
            { id: "dehcho_slave_lake", nombre: "Gran Lago del Esclavo (Tłı̨chǫ)", tipo: "lago_origen", lat: 61.5, lng: -115.5, elevacion: "156 msnm", importancia: "El lago más profundo de Norteamérica (614 m)", texto: "Hogar milenario de los pueblos Dene.", imagen: "assets/mackenzie_meandros.jpg", icono: "❄️" },
            { id: "mackenzie_delta", nombre: "Delta del Mackenzie (Tuktoyaktuk)", tipo: "delta_artico", lat: 69.4, lng: -134.0, elevacion: "0 msnm", importancia: "Segundo delta ártico más grande del planeta", texto: "Miles de lagos termokársticos y pingos subterráneos.", imagen: "assets/mackenzie_mapa.jpg", icono: "🐋" }
        ]
    },
    {
        id: "yukon",
        nombre: "Río Yukón",
        region: "Alaska & Territorio del Yukón (EE.UU. / Canadá)",
        categoria: "Norteamérica",
        subtitulo: "La arteria subártica que desemboca en el Mar de Bering",
        colorAgua: "#50B8CA",
        colorTerracota: "#A84A15",
        caudalMedio: "6.430 m³/s",
        longitudPrincipal: "3.190 km",
        superficie: "850.000 km²",
        descripcion: "Río glaciar sagrado para las naciones Gwich'in y Yup'ik. Nace en la Columbia Británica y cruza Alaska antes de bifurcarse en el delta del mar de Bering.",
        puntosGeo: [
            { lat: 59.8, lng: -134.5, nombre: "Lakes Atlin / Tagish (Naciente)" },
            { lat: 60.7, lng: -135.0, nombre: "Whitehorse" },
            { lat: 64.0, lng: -139.4, nombre: "Dawson City (Confluencia Klondike)" },
            { lat: 65.5, lng: -144.5, nombre: "Yukon Flats" },
            { lat: 62.5, lng: -164.5, nombre: "Delta del Yukón (Mar de Bering)" }
        ],
        nodos: []
    },

    // =============================================================
    // II. NORTEAMÉRICA TEMPLADA & ÁRIDA
    // =============================================================
    {
        id: "mississippi",
        nombre: "Río Mississippi - Missouri",
        region: "Llanuras Centrales de Norteamérica (EE.UU.)",
        categoria: "Norteamérica",
        subtitulo: "El coloso aluvial que drena el corazón de América del Norte",
        colorAgua: "#3690A0",
        colorTerracota: "#A84A15",
        caudalMedio: "16.800 m³/s",
        longitudPrincipal: "6.275 km (con el Missouri)",
        superficie: "3.220.000 km²",
        descripcion: "La mayor cuenca hidrográfica de Norteamérica. Recoge las aguas de los Apalaches y las Rocosas, nutriendo tierras agrícolas históricas antes de desembocar en el Golfo de México.",
        puntosGeo: [
            { lat: 47.2, lng: -95.2, nombre: "Lago Itasca (Minnesota - Naciente)" },
            { lat: 44.9, lng: -93.1, nombre: "Minneapolis / St. Paul" },
            { lat: 38.8, lng: -90.1, nombre: "Confluencia Río Missouri (St. Louis)" },
            { lat: 37.0, lng: -89.1, nombre: "Confluencia Río Ohio (Cairo)" },
            { lat: 35.1, lng: -90.0, nombre: "Memphis" },
            { lat: 29.9, lng: -90.0, nombre: "Nueva Orleans" },
            { lat: 29.1, lng: -89.2, nombre: "Delta 'Pie de Pájaro' (Golfo de México)" }
        ],
        nodos: []
    },
    {
        id: "rio_colorado",
        nombre: "Río Colorado (Gran Cañón)",
        region: "Suroeste de Norteamérica (EE.UU. / México)",
        categoria: "Norteamérica",
        subtitulo: "El escultor de las profundidades de roca roja y el Gran Cañón",
        colorAgua: "#38A2B2",
        colorTerracota: "#A84A15",
        caudalMedio: "640 m³/s (absorbido intensamente)",
        longitudPrincipal: "2.330 km",
        superficie: "640.000 km²",
        descripcion: "Nace en las Montañas Rocosas de Colorado y corta miles de millones de años de historia geológica en el Gran Cañón, sagrado para los pueblos Hopi, Navajo, Havasupai y Cucapá.",
        puntosGeo: [
            { lat: 40.4, lng: -105.8, nombre: "Parque Nacional Rocky Mountain" },
            { lat: 37.0, lng: -111.5, nombre: "Glen Canyon / Lago Powell" },
            { lat: 36.1, lng: -112.1, nombre: "El Gran Cañón (Bright Angel)" },
            { lat: 36.0, lng: -114.7, nombre: "Presa Hoover" },
            { lat: 32.7, lng: -114.6, nombre: "Yuma (Frontera México/EE.UU.)" },
            { lat: 31.8, lng: -114.9, nombre: "Delta del Río Colorado / Alto Golfo de California" }
        ],
        nodos: []
    },
    {
        id: "rio_bravo",
        nombre: "Río Bravo / Río Grande",
        region: "Norteamérica Árida (EE.UU. / México)",
        categoria: "Norteamérica",
        subtitulo: "La fractura tectónica que esculpe cañones en el desierto",
        colorAgua: "#499AA8",
        colorTerracota: "#A84A15",
        caudalMedio: "70 m³/s",
        longitudPrincipal: "3.051 km",
        superficie: "472.000 km²",
        descripcion: "Nace en las montañas de San Juan en Colorado y desciende esculpiendo profundas fallas tectónicas como la garganta de Taos. Fluye a través de Nuevo México y se convierte en la frontera entre México y Texas, sustentando oasis, pueblos originarios Pueblo y ecosistemas del desierto.",
        imagenes: [
            { url: "assets/rio_bravo_canon.jpg", titulo: "Garganta del Río Grande / Puente de Taos", descripcion: "Impresionante cañón de basalto de más de 200 metros de profundidad." }
        ],
        puntosGeo: [
            { lat: 37.8, lng: -107.5, nombre: "Montañas San Juan (Colorado - Naciente)" },
            { lat: 36.476, lng: -105.733, nombre: "Garganta de Taos (Taos Gorge)" },
            { lat: 35.08, lng: -106.65, nombre: "Albuquerque / Valle Central" },
            { lat: 31.76, lng: -106.48, nombre: "Paso del Norte (Ciudad Juárez / El Paso)" },
            { lat: 29.56, lng: -104.41, nombre: "Ojinaga / Confluencia Río Conchos" },
            { lat: 29.16, lng: -103.61, nombre: "Cañón de Santa Elena (Big Bend)" },
            { lat: 27.5, lng: -99.5, nombre: "Laredo / Nuevo Laredo" },
            { lat: 25.95, lng: -97.15, nombre: "Desembocadura en el Golfo de México" }
        ],
        nodos: [
            { id: "taos_gorge", nombre: "Garganta de Taos (Taos Gorge)", tipo: "canon_geologico", lat: 36.476, lng: -105.733, elevacion: "2.050 msnm", importancia: "Falla tectónica del Rift de Río Grande", texto: "Hendidura basáltica sagrada para Taos Pueblo.", imagen: "assets/rio_bravo_canon.jpg", icono: "🌉" },
            { id: "santa_elena", nombre: "Cañón de Santa Elena (Big Bend)", tipo: "desfiladero_calizo", lat: 29.16, lng: -103.61, elevacion: "650 msnm", importancia: "Paredes verticales de caliza de 450 metros", texto: "El río se abre paso entre macizos rocosos imponentes.", imagen: "assets/rio_bravo_canon.jpg", icono: "🏜️" }
        ]
    },

    // =============================================================
    // III. CENTRO DE ABYA YALA & MESOAMÉRICA (HONDURAS, NICARAGUA, GUATEMALA, MÉXICO)
    // =============================================================
    {
        id: "rio_platano",
        nombre: "Biósfera de Río Plátano & La Mosquitia",
        region: "Centro de Abya Yala (Honduras / Nicaragua)",
        categoria: "Centroamérica",
        subtitulo: "El gran santuario selvático de biodiversidad y pueblos Pech, Tawahka y Miskitu",
        colorAgua: "#2EB6A8",
        colorTerracota: "#A84A15",
        caudalMedio: "1.250 m³/s",
        longitudPrincipal: "100 km (cauce central) / 250 km de cuenca",
        superficie: "525.000 hectáreas protegidas",
        descripcion: "Declarada Patrimonio de la Humanidad por la UNESCO. Protege uno de los escasos remanentes de selva tropical virgen de Centroamérica. Fluye desde las montañas de Punta Piedra a través de petroglifos ancestrales y cañones selváticos hasta las lagunas costeras de Ibans y Brus en el Caribe.",
        puntosGeo: [
            { lat: 15.15, lng: -85.1, nombre: "Montañas de Punta Piedra (Naciente Selva Virgen)" },
            { lat: 15.45, lng: -84.9, nombre: "Valle Central de Río Plátano (Petroglifos)" },
            { lat: 15.72, lng: -84.78, nombre: "Raudales de Baltimore / Bosque Húmedo" },
            { lat: 15.88, lng: -84.68, nombre: "Laguna de Ibans & Brus (Mar Caribe)" }
        ],
        nodos: [
            { id: "platano_biosfera", nombre: "Reserva del Hombre y la Biósfera de Río Plátano", tipo: "patrimonio_selva", lat: 15.45, lng: -84.9, elevacion: "350 msnm", importancia: "Pulmón biológico de Centroamérica (UNESCO)", texto: "Hogar milenario de los pueblos Pech, Tawahka, Garífuna y Miskito, rodeado de jaguares, guacamayas y tapires.", icono: "🦜" }
        ]
    },
    {
        id: "rio_gualcarque",
        nombre: "Río Gualcarque (Río Sagrado Lenca)",
        region: "Centro de Abya Yala (Honduras - Intibucá / Santa Bárbara)",
        categoria: "Centroamérica",
        subtitulo: "Espíritu sagrado del pueblo Lenca y emblema continental de resistencia",
        colorAgua: "#36C2B4",
        colorTerracota: "#A84A15",
        caudalMedio: "45 m³/s (alta energía de montaña)",
        longitudPrincipal: "120 km (hasta tributar al Río Otoro / Ulúa)",
        superficie: "Cuenca del Río Ulúa",
        descripcion: "Para la cosmovisión del pueblo indígena Lenca, los ríos son seres vivos habitados por espíritus femeninos protectores. El Gualcarque fue defendido con la vida por la lideresa Berta Cáceres contra proyectos extractivistas, convirtiéndose en símbolo global de la dignidad territorial.",
        puntosGeo: [
            { lat: 14.35, lng: -88.15, nombre: "Sierra de Opalaca / Montañas de Intibucá" },
            { lat: 14.50, lng: -88.22, nombre: "Río Blanco (Territorio Ancestral Lenca)" },
            { lat: 14.65, lng: -88.28, nombre: "Cañón del Gualcarque (Aguas cristalinas)" },
            { lat: 14.85, lng: -88.20, nombre: "Confluencia con Río Otoro / Sistema Ulúa" }
        ],
        nodos: [
            { id: "gualcarque_sagrado", nombre: "Río Blanco & Gualcarque Sagrado", tipo: "rio_sagrado_ancestral", lat: 14.50, lng: -88.22, elevacion: "1.100 msnm", importancia: "Espíritu de las aguas del pueblo Lenca", texto: "'Nosotros aprendemos del río: el río da de comer, da medicina, nos da vida' — Berta Cáceres.", icono: "🌱" }
        ]
    },
    {
        id: "rio_cangrejal",
        nombre: "Río Cangrejal (Pico Bonito)",
        region: "Costa Caribeña de Honduras (Atlántida)",
        categoria: "Centroamérica",
        subtitulo: "Torrente turquesa entre bloques de granito y el bosque nuboso",
        colorAgua: "#42D0C5",
        colorTerracota: "#A84A15",
        caudalMedio: "85 m³/s (de montaña torrencial)",
        longitudPrincipal: "35 km",
        superficie: "Parque Nacional Pico Bonito / Nombre de Dios",
        descripcion: "Uno de los ríos de aguas bravas y pureza mineral más espectaculares de América Latina. Nace en la cordillera Nombre de Dios, bordeando la pirámide boscosa de Pico Bonito antes de vaciarse en el Mar Caribe cerca de La Ceiba.",
        puntosGeo: [
            { lat: 15.65, lng: -86.78, nombre: "Naciente en Pico Bonito (Cordillera Nombre de Dios)" },
            { lat: 15.72, lng: -86.75, nombre: "Cañón de Las Mangas (Rocas de granito gigante)" },
            { lat: 15.76, lng: -86.76, nombre: "El Naranjo / Rápidos Turquesas" },
            { lat: 15.79, lng: -86.78, nombre: "Desembocadura en La Ceiba (Mar Caribe)" }
        ],
        nodos: [
            { id: "pico_bonito_cangrejal", nombre: "Cañón de Granito del Cangrejal", tipo: "torrente_esmeralda", lat: 15.72, lng: -86.75, elevacion: "180 msnm", importancia: "Corredor biológico entre la montaña y el arrecife coralino", texto: "Aguas cristalinas que fluyen entre monolitos de roca granítica del tamaño de casas.", icono: "⛰️" }
        ]
    },
    {
        id: "rio_coco",
        nombre: "Río Coco / Wangki & Río San Juan",
        region: "Centro de Abya Yala (Honduras / Nicaragua / Costa Rica)",
        categoria: "Centroamérica",
        subtitulo: "El gran río fronterizo Wangki y la salida del Gran Lago Cocibolca al Caribe",
        colorAgua: "#30A8B8",
        colorTerracota: "#A84A15",
        caudalMedio: "1.300 m³/s",
        longitudPrincipal: "750 km",
        superficie: "41.870 km²",
        descripcion: "El Río Coco (Wangki en idioma miskito) es el más largo de Centroamérica. Nace en los cañones de Somoto y marca la frontera viva entre Honduras y Nicaragua, corazón del territorio ancestral Miskitu.",
        puntosGeo: [
            { lat: 13.48, lng: -86.60, nombre: "Cañón de Somoto (Madriz - Naciente)" },
            { lat: 13.90, lng: -85.90, nombre: "Wiwillí de Jinotega" },
            { lat: 14.40, lng: -84.80, nombre: "Waspam (Territorio Miskitu)" },
            { lat: 15.00, lng: -83.15, nombre: "Cabo Gracias a Dios (Mar Caribe)" }
        ],
        nodos: []
    },
    {
        id: "mesoamerica",
        nombre: "Río Usumacinta - Grijalva",
        region: "Mesoamérica (Guatemala / México)",
        categoria: "Centroamérica",
        subtitulo: "La calzada fluvial sagrada de la civilización Maya",
        colorAgua: "#389CAE",
        colorTerracota: "#A84A15",
        caudalMedio: "2.700 m³/s",
        longitudPrincipal: "1.100 km",
        superficie: "106.000 km²",
        descripcion: "El Usumacinta ('lugar de monos') es el río más caudaloso de Mesoamérica. Nace en las sierras guatemaltecas del Chixoy y serpentea a través de la densa Selva Lacandona, abrazando templos mayas milenarios antes de abrirse en los Pantanos de Centla.",
        imagenes: [
            { url: "assets/abya_yala_red_hidrica.png", titulo: "Red de Fuentes Hídricas de Mesoamérica", descripcion: "Rutas fluviales y manantiales ancestrales entre Guatemala, Chiapas y Tabasco." }
        ],
        puntosGeo: [
            { lat: 15.3, lng: -91.1, nombre: "Altos de Guatemala (Río Chixoy)" },
            { lat: 16.3, lng: -90.9, nombre: "Río Lacantún / Selva Lacandona" },
            { lat: 16.897, lng: -90.965, nombre: "Curva Sagrada de Yaxchilán" },
            { lat: 17.47, lng: -91.49, nombre: "Cañón del Usumacinta (Boca del Cerro)" },
            { lat: 18.3, lng: -92.7, nombre: "Tres Brazos (Confluencia con Grijalva)" },
            { lat: 18.5, lng: -92.65, nombre: "Reserva Pantanos de Centla (Golfo de México)" }
        ],
        nodos: [
            { id: "yaxchilan_maya", nombre: "Yaxchilán (La Ciudad en el Meandro)", tipo: "arqueologia_fluvial", lat: 16.897, lng: -90.965, elevacion: "110 msnm", importancia: "Acrópolis maya levantada en la curva del río", texto: "El río fue muralla y vía sagrada de los mayas.", imagen: "assets/abya_yala_red_hidrica.png", icono: "🏛️" }
        ]
    },

    // =============================================================
    // IV. SUDAMÉRICA SEPTENTRIONAL & ANDINA
    // =============================================================
    {
        id: "magdalena",
        nombre: "Río Magdalena & Río Cauca",
        region: "Andes Colombianos (Colombia)",
        categoria: "Sudamérica",
        subtitulo: "El eje fluvial interandino de la historia, la cumbia y la orfebrería",
        colorAgua: "#3498A6",
        colorTerracota: "#A84A15",
        caudalMedio: "7.200 m³/s",
        longitudPrincipal: "1.528 km",
        superficie: "257.438 km²",
        descripcion: "Fluye entre las cordilleras Central y Oriental de los Andes. Nace en la 'Estrella Fluvial' del Macizo Colombiano y atraviesa valles y cañones hasta la depresión aluvial de Mompox y las Bocas de Ceniza en el Caribe.",
        puntosGeo: [
            { lat: 1.91, lng: -76.58, nombre: "Páramo de las Papas (Macizo Colombiano)" },
            { lat: 1.88, lng: -76.28, nombre: "Estrecho del Magdalena (San Agustín)" },
            { lat: 5.2, lng: -74.74, nombre: "Honda / Puerto Salgar" },
            { lat: 7.06, lng: -73.85, nombre: "Barrancabermeja" },
            { lat: 9.24, lng: -74.42, nombre: "Depresión Momposina / Ciénagas" },
            { lat: 11.1, lng: -74.85, nombre: "Bocas de Ceniza (Barranquilla / Mar Caribe)" }
        ],
        nodos: [
            { id: "macizo_colombiano_cuna", nombre: "Estrella Fluvial del Macizo Colombiano", tipo: "fabrica_agua", lat: 1.91, lng: -76.58, elevacion: "3.685 msnm", importancia: "Cuna de cuatro grandes ríos andinos", texto: "Territorio sagrado de los pueblos Yanacona y Misak.", icono: "🏔️" }
        ]
    },
    {
        id: "orinoco",
        nombre: "Río Orinoco",
        region: "Escudo Guayanés y Llanos (Venezuela / Colombia)",
        categoria: "Sudamérica",
        subtitulo: "El gigante de las aguas que conecta con el Amazonas vía Casiquiare",
        colorAgua: "#3690A0",
        colorTerracota: "#A84A15",
        caudalMedio: "36.000 m³/s",
        longitudPrincipal: "2.140 km",
        superficie: "989.000 km²",
        descripcion: "Tercer río del mundo en caudal. Brota en la mística Sierra Parima y presenta una singularidad geográfica mundial: el brazo Casiquiare, que une dos cuencas oceánicas vertiendo aguas al Río Negro (Amazonas).",
        puntosGeo: [
            { lat: 2.3, lng: -63.3, nombre: "Sierra Parima (Naciente)" },
            { lat: 3.14, lng: -65.9, nombre: "Bifurcación del Casiquiare" },
            { lat: 5.66, lng: -67.62, nombre: "Raudales de Atures (Puerto Ayacucho)" },
            { lat: 6.2, lng: -67.4, nombre: "Confluencia Río Meta" },
            { lat: 7.6, lng: -66.5, nombre: "Confluencia Río Apure" },
            { lat: 8.36, lng: -62.65, nombre: "Confluencia Río Caroní (Ciudad Guayana)" },
            { lat: 8.6, lng: -60.5, nombre: "Delta Amacuro (Océano Atlántico)" }
        ],
        nodos: [
            { id: "salto_angel_auyantepuy", nombre: "Salto Ángel (Kerepakupai Merú)", tipo: "cascada_record", lat: 5.967, lng: -62.535, elevacion: "979 m de caída libre", importancia: "La catarata ininterrumpida más alta del planeta", texto: "Nace en la cumbre del tepuy Auyantepuy en Canaima.", imagen: "assets/abya_yala_red_hidrica.png", icono: "✨" },
            { id: "casiquiare_canal", nombre: "Canal Natural del Casiquiare", tipo: "bifurcacion_fluvial", lat: 3.14, lng: -65.9, elevacion: "120 msnm", importancia: "Puente fluvial natural entre dos cuencas oceánicas", texto: "Fenómeno hidrográfico que une físicamente el Orinoco con el Río Negro y el Amazonas.", icono: "🔀" }
        ]
    },

    // =============================================================
    // V. AMAZONÍA CONTINENTAL & PLANALTO
    // =============================================================
    {
        id: "amazonas",
        nombre: "Río Amazonas",
        region: "Amazonía Continental (Perú, Colombia, Brasil)",
        categoria: "Sudamérica",
        subtitulo: "El sistema fluvial más caudaloso y extenso del planeta",
        colorAgua: "#2B8C9E",
        colorTerracota: "#A84A15",
        caudalMedio: "209.000 m³/s",
        longitudPrincipal: "6.992 km",
        superficie: "7.050.000 km²",
        descripcion: "Nace en los glaciares andinos del Nevado Mismi a más de 5.500 msnm y recorre la selva tropical vertiendo al Atlántico una quinta parte de toda el agua dulce superficial de los océanos. Sus 'ríos voladores' riegan la agricultura de todo el Cono Sur.",
        imagenes: [
            { url: "assets/america_continente.jpg", titulo: "La Gran Amazonía en Abya Yala", descripcion: "El corazón biogeográfico de América del Sur." }
        ],
        puntosGeo: [
            { lat: -15.52, lng: -71.68, nombre: "Nevado Mismi (Arequipa - Naciente Glaciar)" },
            { lat: -9.0, lng: -74.0, nombre: "Río Ucayali" },
            { lat: -3.75, lng: -73.25, nombre: "Iquitos (Confluencia Marañón - Ucayali)" },
            { lat: -4.21, lng: -69.94, nombre: "Río Solimões (Triple Frontera Tabatinga/Leticia)" },
            { lat: -3.13, lng: -60.02, nombre: "Encuentro de las Aguas (Manaus / Río Negro)" },
            { lat: -3.37, lng: -58.75, nombre: "Confluencia Río Madeira" },
            { lat: -2.44, lng: -54.71, nombre: "Santarém (Confluencia Río Tapajós)" },
            { lat: -1.9, lng: -55.5, nombre: "Estrecho de Óbidos" },
            { lat: -1.45, lng: -48.5, nombre: "Delta de Marajó / Océano Atlántico (Belém)" }
        ],
        nodos: [
            { id: "mismi_nevado", nombre: "Nevado Mismi (Cuna del Amazonas)", tipo: "glaciar_origen", lat: -15.52, lng: -71.68, elevacion: "5.597 msnm", importancia: "El origen glaciar documentado del Amazonas", texto: "Hendidura de deshielo en los Andes peruanos.", imagen: "assets/america_continente.jpg", icono: "🏔️" },
            { id: "manaus_encuentro", nombre: "Encuentro de las Aguas (Manaus)", tipo: "fenomeno_hidrico", lat: -3.13, lng: -60.02, elevacion: "21 msnm", caudal: "120.000 m³/s", importancia: "Confluencia del Río Negro y el Solimões", texto: "Aguas negras y ocres corren sin mezclarse durante 6 km.", imagen: "assets/america_continente.jpg", icono: "🌊" }
        ]
    },
    {
        id: "tocantins",
        nombre: "Río Tocantins - Araguaia",
        region: "Planalto Central de Brasil (Cerrado a la Amazonía)",
        categoria: "Sudamérica",
        subtitulo: "La gran arteria fluvial central que desagua junto al delta del Amazonas",
        colorAgua: "#369CA8",
        colorTerracota: "#A84A15",
        caudalMedio: "13.600 m³/s",
        longitudPrincipal: "2.450 km",
        superficie: "800.000 km²",
        descripcion: "No es técnicamente un afluente del Amazonas, sino una cuenca vecina colosal que desemboca en la misma bahía de Marajó cerca de Belém.",
        puntosGeo: [
            { lat: -14.5, lng: -49.0, nombre: "Planalto de Goiás (Naciente)" },
            { lat: -10.0, lng: -48.3, nombre: "Palmas (Tocantins Medio)" },
            { lat: -5.3, lng: -48.5, nombre: "Confluencia con Río Araguaia (Marabá)" },
            { lat: -1.7, lng: -49.2, nombre: "Bahía de Marajó / Belém (Atlántico)" }
        ],
        nodos: []
    },
    {
        id: "san_francisco",
        nombre: "Río São Francisco",
        region: "Sertão y Caatinga Brasileña (Minas Gerais a Alagoas)",
        categoria: "Sudamérica",
        subtitulo: "El 'Río de la Integración Nacional' de Brasil",
        colorAgua: "#3294A0",
        colorTerracota: "#A84A15",
        caudalMedio: "2.850 m³/s",
        longitudPrincipal: "2.914 km",
        superficie: "641.000 km²",
        descripcion: "Cruza el semiárido sertão nordestino y se abre paso en los cañones monumentales de Paulo Afonso antes de desembocar en el Atlántico.",
        puntosGeo: [
            { lat: -20.0, lng: -46.5, nombre: "Serra da Canastra (Minas Gerais)" },
            { lat: -17.2, lng: -44.8, nombre: "Pirapora" },
            { lat: -13.2, lng: -43.4, nombre: "Bom Jesus da Lapa" },
            { lat: -9.4, lng: -40.5, nombre: "Petrolina / Juazeiro" },
            { lat: -9.4, lng: -38.2, nombre: "Cañón de Paulo Afonso" },
            { lat: -10.5, lng: -36.4, nombre: "Desembocadura en el Océano Atlántico" }
        ],
        nodos: []
    },

    // =============================================================
    // VI. CONO SUR & PATAGONIA
    // =============================================================
    {
        id: "plata",
        nombre: "Río Paraná & Cuenca del Plata",
        region: "Cono Sur de Sudamérica (Argentina, Brasil, Paraguay, Uruguay, Bolivia)",
        categoria: "Cono Sur",
        subtitulo: "Del Gran Pantanal y las Cataratas del Iguazú al estuario más ancho",
        colorAgua: "#3198A6",
        colorTerracota: "#A84A15",
        caudalMedio: "23.000 m³/s",
        longitudPrincipal: "4.880 km",
        superficie: "3.170.000 km²",
        descripcion: "Conecta el Gran Pantanal en Mato Grosso con el estuario del Río de la Plata. Alberga la represa hidroeléctrica de Itaipú, las colosales Cataratas del Iguazú y el delta vivo del Paraná.",
        imagenes: [
            { url: "assets/abya_yala_red_hidrica.png", titulo: "Humedales y Fuentes del Cono Sur", descripcion: "Registros en el Gran Pantanal, Chaco y cuencas del Pilcomayo." }
        ],
        puntosGeo: [
            { lat: -17.8, lng: -57.4, nombre: "El Gran Pantanal (Río Paraguay)" },
            { lat: -21.0, lng: -57.8, nombre: "Paraguay Medio" },
            { lat: -25.4, lng: -54.58, nombre: "Alto Paraná (Itaipú)" },
            { lat: -25.69, lng: -54.44, nombre: "Cataratas del Iguazú (Confluencia)" },
            { lat: -27.46, lng: -58.83, nombre: "Confluencia Paraná - Paraguay (Corrientes)" },
            { lat: -32.95, lng: -60.65, nombre: "Paraná Medio (Rosario / Santa Fe)" },
            { lat: -34.2, lng: -58.5, nombre: "Delta del Paraná (Tigre)" },
            { lat: -34.6, lng: -58.38, nombre: "Estuario del Río de la Plata (Buenos Aires - Montevideo)" }
        ],
        nodos: [
            { id: "iguazu_cataratas", nombre: "Cataratas del Iguazú (Garganta del Diablo)", tipo: "catarata_monumental", lat: -25.69, lng: -54.44, elevacion: "195 msnm", caudal: "1.750 m³/s", importancia: "Maravilla Natural del Mundo", texto: "275 saltos de agua con caída de más de 80 metros en herradura.", imagen: "assets/abya_yala_red_hidrica.png", icono: "💦" },
            { id: "pantanal_humedal", nombre: "El Gran Pantanal (Río Paraguay)", tipo: "humedal_mayor", lat: -17.8, lng: -57.4, elevacion: "120 msnm", importancia: "El mayor humedal de agua dulce del mundo", texto: "Planicie inundable que actúa como una esponja gigantesca.", imagen: "assets/abya_yala_red_hidrica.png", icono: "🌿" }
        ]
    },
    {
        id: "patagonia",
        nombre: "Río Santa Cruz & Glaciares del Sur",
        region: "Patagonia Austral (Argentina / Chile)",
        categoria: "Patagonia",
        subtitulo: "Torrentes de hielo milenario cruzando la meseta esteparia",
        colorAgua: "#45A7B5",
        colorTerracota: "#A84A15",
        caudalMedio: "1.800 m³/s",
        longitudPrincipal: "1.000 km",
        superficie: "400.000 km²",
        descripcion: "Alimentados por el Campo de Hielo Patagónico Sur (la mayor masa de hielo continental fuera de los polos). Ríos de aguas turquesas lechosas como el Santa Cruz y el Baker riegan la estepa y los fiordos australes.",
        imagenes: [
            { url: "assets/abya_yala_red_hidrica.png", titulo: "Campos de Hielo y Fuentes Australes", descripcion: "Los ríos glaciares de la Patagonia." }
        ],
        puntosGeo: [
            { lat: -50.47, lng: -73.04, nombre: "Glaciar Perito Moreno (Lago Argentino)" },
            { lat: -50.33, lng: -72.26, nombre: "Naciente Río Santa Cruz (El Calafate)" },
            { lat: -50.15, lng: -70.5, nombre: "Río Santa Cruz Medio (Estepa)" },
            { lat: -50.02, lng: -68.52, nombre: "Puerto Santa Cruz (Océano Atlántico Sur)" }
        ],
        nodos: [
            { id: "perito_moreno_glaciar", nombre: "Campo de Hielo Sur (Perito Moreno)", tipo: "glaciar_fresca", lat: -50.47, lng: -73.04, elevacion: "180 msnm", importancia: "Tercera masa de hielo continental del planeta", texto: "Hielo milenario que alimenta los ríos patagónicos.", imagen: "assets/abya_yala_red_hidrica.png", icono: "❄️" }
        ]
    }
];

// Conexiones Intercuencas y Corredores Sagrados de Abya Yala
const CONEXIONES_INTERCUENCAS = [
    {
        id: "casiquiare_link",
        nombre: "Canal del Casiquiare (Orinoco ➔ Amazonas)",
        tipo: "bifurcacion_natural",
        descripcion: "El milagro hidrológico más grande del planeta: el Orinoco se divide espontáneamente y alimenta al Río Negro hacia el Amazonas.",
        puntos: [
            { lat: 3.14, lng: -65.9 },   // Orinoco
            { lat: 2.00, lng: -66.5 },
            { lat: 0.90, lng: -67.1 }    // Río Negro
        ]
    },
    {
        id: "pantanal_guapore",
        nombre: "Corredor Pantanal ➔ Guaporé (Plata ➔ Amazonas)",
        tipo: "corredor_humedal",
        descripcion: "Durante las grandes inundaciones, las aguas del Pantanal (Cuenca del Plata) y las cabeceras del Guaporé (Amazonas) casi se tocan en el planalto de Mato Grosso.",
        puntos: [
            { lat: -16.0, lng: -57.7 },
            { lat: -14.5, lng: -59.5 },
            { lat: -12.5, lng: -63.0 }
        ]
    },
    {
        id: "divisoria_continental_rocosas_andes",
        nombre: "La Gran Espina Divisoria Continental de Abya Yala",
        tipo: "cordillera_madre",
        descripcion: "La columna vertebral de montañas (Rocosas, Sierra Madre, Eje Volcánico, Cordillera de los Andes) que decide si una gota de lluvia viajará al Océano Pacífico, al Atlántico o al Ártico.",
        puntos: [
            { lat: 68.0, lng: -141.0 },
            { lat: 53.0, lng: -118.0 },
            { lat: 39.0, lng: -106.0 },
            { lat: 25.0, lng: -103.0 },
            { lat: 14.5, lng: -88.2 },  // Centroamérica (Gualcarque / Opalaca)
            { lat: 5.0, lng: -76.0 },   // Andes colombianos
            { lat: -15.5, lng: -71.7 }, // Andes peruanos
            { lat: -33.0, lng: -70.0 }, // Andes centrales
            { lat: -51.0, lng: -73.0 }  // Patagonia Austral
        ]
    }
];

// Pre-proyectar todos los puntos a coordenadas Web Mercator [0, 1]
CUENCAS_GEO_DATA.forEach(cuenca => {
    cuenca.puntosMercator = cuenca.puntosGeo.map(pt => {
        const proj = SatelliteTileEngine.project(pt.lat, pt.lng);
        return {
            x: proj.x,
            y: proj.y,
            lat: pt.lat,
            lng: pt.lng,
            nombre: pt.nombre
        };
    });

    if (cuenca.nodos) {
        cuenca.nodos.forEach(node => {
            const proj = SatelliteTileEngine.project(node.lat, node.lng);
            node.x = proj.x;
            node.y = proj.y;
        });
    }

    cuenca.puntosRio = cuenca.puntosMercator;
    cuenca.discoveredMaxT = 0.0;
});

// Pre-proyectar las conexiones
CONEXIONES_INTERCUENCAS.forEach(con => {
    con.puntosMercator = con.puntos.map(pt => {
        const proj = SatelliteTileEngine.project(pt.lat, pt.lng);
        return { x: proj.x, y: proj.y, lat: pt.lat, lng: pt.lng };
    });
});

// Interpolación Catmull-Rom
function getSplinePoint(points, t) {
    if (!points || points.length === 0) return { x: 0, y: 0, angle: 0 };
    if (points.length === 1) return { x: points[0].x, y: points[0].y, angle: 0 };
    if (t <= 0) return { x: points[0].x, y: points[0].y, angle: 0 };
    if (t >= 1) return { x: points[points.length - 1].x, y: points[points.length - 1].y, angle: 0 };

    const pCount = points.length - 1;
    const scaledT = t * pCount;
    const index = Math.floor(scaledT);
    const localT = scaledT - index;

    const p0 = points[Math.max(0, index - 1)];
    const p1 = points[index];
    const p2 = points[Math.min(points.length - 1, index + 1)];
    const p3 = points[Math.min(points.length - 1, index + 2)];

    const t2 = localT * localT;
    const t3 = t2 * localT;

    const x = 0.5 * (
        (2 * p1.x) +
        (-p0.x + p2.x) * localT +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
    );

    const y = 0.5 * (
        (2 * p1.y) +
        (-p0.y + p2.y) * localT +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
    );

    const dx = 0.5 * (
        (-p0.x + p2.x) +
        2 * (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * localT +
        3 * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t2
    );

    const dy = 0.5 * (
        (-p0.y + p2.y) +
        2 * (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * localT +
        3 * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t2
    );

    const angle = Math.atan2(dy, dx);
    return { x, y, angle, dx, dy };
}
