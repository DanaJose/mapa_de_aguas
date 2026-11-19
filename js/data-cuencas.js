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
            { lat: 61.85, lng: -121.35, nombre: "Fort Simpson (Confluencia Río Liard)", imagen: "assets/mackenzie_mapa.jpg" },
            { lat: 64.9, lng: -125.6, nombre: "Confluencia Gran Lago del Oso" },
            { lat: 65.28, lng: -126.83, nombre: "Norman Wells (Mackenzie Medio)" },
            { lat: 67.45, lng: -133.74, nombre: "Tsiigehtchic" },
            { lat: 69.4, lng: -134.0, nombre: "Delta del Mackenzie / Mar de Beaufort (Ártico)", imagen: "assets/mackenzie_meandros.jpg" }
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
        imagenes: [
            { url: "assets/yukon_cause.jpg", titulo: "El Gran Río Yukón y los Bosques Subárticos", descripcion: "Arteria sagrada de los pueblos originarios que fluye entre taigas hacia el Mar de Bering." },
            { url: "assets/ukon_delta_bering.jpg", titulo: "Delta del Yukón en el Mar de Bering", descripcion: "Inmensa planicie aluvial y humedal costero en Alaska." }
        ],
        puntosGeo: [
            { lat: 59.8, lng: -134.5, nombre: "Lakes Atlin / Tagish (Naciente)" },
            { lat: 60.7, lng: -135.0, nombre: "Whitehorse" },
            { lat: 64.0, lng: -139.4, nombre: "Dawson City (Confluencia Klondike)" },
            { lat: 65.5, lng: -144.5, nombre: "Yukon Flats", imagen: "assets/yukon_cause.jpg" },
            { lat: 62.5, lng: -164.5, nombre: "Delta del Yukón (Mar de Bering)", imagen: "assets/ukon_delta_bering.jpg" }
        ],
        nodos: [
            { id: "yukon_flats", nombre: "Yukon Flats & Tundra Ártica", tipo: "humedal_artico", lat: 65.5, lng: -144.5, elevacion: "120 msnm", importancia: "Vasto laberinto de meandros y turberas subárticas", texto: "Territorio de cría de millones de aves migratorias y salmones.", imagen: "assets/yukon_cause.jpg", icono: "❄️" }
        ]
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
        imagenes: [
            { url: "assets/mississippi_naciente_itasca.jpg", titulo: "Naciente en el Lago Itasca (Minnesota)", descripcion: "Aguas prístinas donde nace el río más largo de Norteamérica entre bosques de coníferas." },
            { url: "assets/mississippi_delta_pie_pajaro.jpg", titulo: "Delta 'Pie de Pájaro' (Golfo de México)", descripcion: "Laberinto de canales, bayous y marismas aluviales en Luisiana." }
        ],
        puntosGeo: [
            { lat: 47.2, lng: -95.2, nombre: "Lago Itasca (Minnesota - Naciente)", imagen: "assets/mississippi_naciente_itasca.jpg" },
            { lat: 44.9, lng: -93.1, nombre: "Minneapolis / St. Paul" },
            { lat: 38.8, lng: -90.1, nombre: "Confluencia Río Missouri (St. Louis)" },
            { lat: 37.0, lng: -89.1, nombre: "Confluencia Río Ohio (Cairo)" },
            { lat: 35.1, lng: -90.0, nombre: "Memphis" },
            { lat: 29.9, lng: -90.0, nombre: "Nueva Orleans" },
            { lat: 29.1, lng: -89.2, nombre: "Delta 'Pie de Pájaro' (Golfo de México)", imagen: "assets/mississippi_delta_pie_pajaro.jpg" }
        ],
        nodos: [
            { id: "itasca_naciente", nombre: "Lago Itasca (Cuna del Mississippi)", tipo: "lago_origen", lat: 47.2, lng: -95.2, elevacion: "450 msnm", importancia: "Naciente glacial del sistema Mississippi-Missouri", texto: "Manantiales rodeados de bosques mixtos y coníferas.", imagen: "assets/mississippi_naciente_itasca.jpg", icono: "🌲" },
            { id: "mississippi_delta", nombre: "Delta 'Pie de Pájaro'", tipo: "delta_marisma", lat: 29.1, lng: -89.2, elevacion: "0 msnm", importancia: "Mayor delta aluvial de Norteamérica", texto: "Marismas que vierten 16.800 m³/s al Golfo de México.", imagen: "assets/mississippi_delta_pie_pajaro.jpg", icono: "🌊" }
        ]
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
        imagenes: [
            { url: "assets/rio_colorado_gran_canon.jpg", titulo: "El Gran Cañón del Colorado", descripcion: "Paredes colosales de estratos rojizos talladas por millones de años de erosión fluvial." },
            { url: "assets/rio_colorado_horseshoe_bend.jpg", titulo: "Horseshoe Bend & Cañón de Glen", descripcion: "Meandro sagrado esculpido en la arenisca dorada de Arizona." }
        ],
        puntosGeo: [
            { lat: 40.4, lng: -105.8, nombre: "Parque Nacional Rocky Mountain" },
            { lat: 37.0, lng: -111.5, nombre: "Glen Canyon / Lago Powell", imagen: "assets/rio_colorado_horseshoe_bend.jpg" },
            { lat: 36.1, lng: -112.1, nombre: "El Gran Cañón (Bright Angel)", imagen: "assets/rio_colorado_gran_canon.jpg" },
            { lat: 36.0, lng: -114.7, nombre: "Presa Hoover" },
            { lat: 32.7, lng: -114.6, nombre: "Yuma (Frontera México/EE.UU.)" },
            { lat: 31.8, lng: -114.9, nombre: "Delta del Río Colorado / Alto Golfo de California" }
        ],
        nodos: [
            { id: "gran_canon_colorado", nombre: "El Gran Cañón (Bright Angel)", tipo: "canon_geologico", lat: 36.1, lng: -112.1, elevacion: "750 msnm", importancia: "Monumento geológico y sitio sagrado indígena", texto: "Corte estratigráfico de más de 1.800 millones de años de historia terrestre.", imagen: "assets/rio_colorado_gran_canon.jpg", icono: "🏜️" }
        ]
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
            { url: "assets/rio_bravo_canon.jpg", titulo: "Garganta del Río Grande / Puente de Taos", descripcion: "Impresionante cañón de basalto de más de 200 metros de profundidad." },
            { url: "assets/io_bravo_santa_elena.jpg", titulo: "Cañón de Santa Elena (Big Bend)", descripcion: "Desfiladero monumental de caliza en la frontera desértica." }
        ],
        puntosGeo: [
            { lat: 37.8, lng: -107.5, nombre: "Montañas San Juan (Colorado - Naciente)" },
            { lat: 36.476, lng: -105.733, nombre: "Garganta de Taos (Taos Gorge)", imagen: "assets/rio_bravo_canon.jpg" },
            { lat: 35.08, lng: -106.65, nombre: "Albuquerque / Valle Central" },
            { lat: 31.76, lng: -106.48, nombre: "Paso del Norte (Ciudad Juárez / El Paso)" },
            { lat: 29.56, lng: -104.41, nombre: "Ojinaga / Confluencia Río Conchos" },
            { lat: 29.16, lng: -103.61, nombre: "Cañón de Santa Elena (Big Bend)", imagen: "assets/io_bravo_santa_elena.jpg" },
            { lat: 27.5, lng: -99.5, nombre: "Laredo / Nuevo Laredo" },
            { lat: 25.95, lng: -97.15, nombre: "Desembocadura en el Golfo de México" }
        ],
        nodos: [
            { id: "taos_gorge", nombre: "Garganta de Taos (Taos Gorge)", tipo: "canon_geologico", lat: 36.476, lng: -105.733, elevacion: "2.050 msnm", importancia: "Falla tectónica del Rift de Río Grande", texto: "Hendidura basáltica sagrada para Taos Pueblo.", imagen: "assets/rio_bravo_canon.jpg", icono: "🌉" },
            { id: "santa_elena", nombre: "Cañón de Santa Elena (Big Bend)", tipo: "desfiladero_calizo", lat: 29.16, lng: -103.61, elevacion: "650 msnm", importancia: "Paredes verticales de caliza de 450 metros", texto: "El río se abre paso entre macizos rocosos imponentes.", imagen: "assets/io_bravo_santa_elena.jpg", icono: "🏜️" }
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
        imagenes: [
            { url: "assets/rio_platano_biosfera.jpg", titulo: "Biósfera del Río Plátano & La Mosquitia", descripcion: "Santuario de selva tropical virgen, hogar de jaguares, guacamayas y pueblos originarios (UNESCO)." },
            { url: "assets/rio_platano_meandros_selva.jpg", titulo: "Raudales y Meandros en Selva Virgen", descripcion: "Aguas cristalinas que serpentean entre densos bosques lluviosos hacia el Caribe." }
        ],
        puntosGeo: [
            { lat: 15.15, lng: -85.1, nombre: "Montañas de Punta Piedra (Naciente Selva Virgen)" },
            { lat: 15.45, lng: -84.9, nombre: "Valle Central de Río Plátano (Petroglifos)", imagen: "assets/rio_platano_biosfera.jpg" },
            { lat: 15.72, lng: -84.78, nombre: "Raudales de Baltimore / Bosque Húmedo", imagen: "assets/rio_platano_meandros_selva.jpg" },
            { lat: 15.88, lng: -84.68, nombre: "Laguna de Ibans & Brus (Mar Caribe)" }
        ],
        nodos: [
            { id: "platano_biosfera", nombre: "Reserva del Hombre y la Biósfera de Río Plátano", tipo: "patrimonio_selva", lat: 15.45, lng: -84.9, elevacion: "350 msnm", importancia: "Pulmón biológico de Centroamérica (UNESCO)", texto: "Hogar milenario de los pueblos Pech, Tawahka, Garífuna y Miskito, rodeado de jaguares, guacamayas y tapires.", imagen: "assets/rio_platano_biosfera.jpg", icono: "🦜" }
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
        imagenes: [
            { url: "assets/rio_gualcarque_sagrado.jpg", titulo: "Río Gualcarque (Espíritu Sagrado Lenca)", descripcion: "Río vivo defendido por Berta Cáceres y las comunidades indígenas de Río Blanco." },
            { url: "assets/rio_gualcarque_canon.jpg", titulo: "Cañón y Pozas Cristalinas del Gualcarque", descripcion: "Aguas vivas de montaña que nutren el ecosistema de Intibucá." }
        ],
        puntosGeo: [
            { lat: 14.35, lng: -88.15, nombre: "Sierra de Opalaca / Montañas de Intibucá" },
            { lat: 14.50, lng: -88.22, nombre: "Río Blanco (Territorio Ancestral Lenca)", imagen: "assets/rio_gualcarque_sagrado.jpg" },
            { lat: 14.65, lng: -88.28, nombre: "Cañón del Gualcarque (Aguas cristalinas)", imagen: "assets/rio_gualcarque_canon.jpg" },
            { lat: 14.85, lng: -88.20, nombre: "Confluencia con Río Otoro / Sistema Ulúa" }
        ],
        nodos: [
            { id: "gualcarque_sagrado", nombre: "Río Blanco & Gualcarque Sagrado", tipo: "rio_sagrado_ancestral", lat: 14.50, lng: -88.22, elevacion: "1.100 msnm", importancia: "Espíritu de las aguas del pueblo Lenca", texto: "'Nosotros aprendemos del río: el río da de comer, da medicina, nos da vida' — Berta Cáceres.", imagen: "assets/rio_gualcarque_sagrado.jpg", icono: "🌱" }
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
        imagenes: [
            { url: "assets/rio_cangrejal_pico_bonito.jpg", titulo: "Pico Bonito & Torrente del Cangrejal", descripcion: "Torrente turquesa entre colosales monolitos de granito en la falda de Pico Bonito." },
            { url: "assets/rio_cangrejal_rapidos.jpg", titulo: "Rápidos Esmeraldas del Cangrejal", descripcion: "Corredor biológico entre la selva nubosa y el arrecife coralino del Caribe." }
        ],
        puntosGeo: [
            { lat: 15.65, lng: -86.78, nombre: "Naciente en Pico Bonito (Cordillera Nombre de Dios)", imagen: "assets/rio_cangrejal_pico_bonito.jpg" },
            { lat: 15.72, lng: -86.75, nombre: "Cañón de Las Mangas (Rocas de granito gigante)", imagen: "assets/rio_cangrejal_rapidos.jpg" },
            { lat: 15.76, lng: -86.76, nombre: "El Naranjo / Rápidos Turquesas" },
            { lat: 15.79, lng: -86.78, nombre: "Desembocadura en La Ceiba (Mar Caribe)" }
        ],
        nodos: [
            { id: "pico_bonito_cangrejal", nombre: "Cañón de Granito del Cangrejal", tipo: "torrente_esmeralda", lat: 15.72, lng: -86.75, elevacion: "180 msnm", importancia: "Corredor biológico entre la montaña y el arrecife coralino", texto: "Aguas cristalinas que fluyen entre monolitos de roca granítica del tamaño de casas.", imagen: "assets/rio_cangrejal_pico_bonito.jpg", icono: "⛰️" }
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
        imagenes: [
            { url: "assets/rio_coco_canon_somoto.jpg", titulo: "Cañón de Somoto (Madriz)", descripcion: "Monumento geológico donde nace el Río Coco entre farallones rocosos verticales." },
            { url: "assets/rio_coco_wangki_miskitu.jpg", titulo: "Río Wangki en Territorio Miskitu", descripcion: "Arteria fluvial milenaria navegada por pueblos originarios en la frontera de Honduras y Nicaragua." }
        ],
        puntosGeo: [
            { lat: 13.48, lng: -86.60, nombre: "Cañón de Somoto (Madriz - Naciente)", imagen: "assets/rio_coco_canon_somoto.jpg" },
            { lat: 13.90, lng: -85.90, nombre: "Wiwillí de Jinotega" },
            { lat: 14.40, lng: -84.80, nombre: "Waspam (Territorio Miskitu)", imagen: "assets/rio_coco_wangki_miskitu.jpg" },
            { lat: 15.00, lng: -83.15, nombre: "Cabo Gracias a Dios (Mar Caribe)" }
        ],
        nodos: [
            { id: "canon_somoto_wangki", nombre: "Monumento Nacional Cañón de Somoto", tipo: "canon_geologico", lat: 13.48, lng: -86.60, elevacion: "680 msnm", importancia: "Garganta de roca volcánica de más de 120 metros de altura", texto: "Cuna geológica del Wangki protegida como área protegida.", imagen: "assets/rio_coco_canon_somoto.jpg", icono: "🏞️" }
        ]
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
            { url: "assets/usumacinta_yaxchilan.jpg", titulo: "Meandro Sagrado de Yaxchilán", descripcion: "Acrópolis maya levantada en la curva sagrada del Usumacinta en la Selva Lacandona." },
            { url: "assets/pantanos_de_centla.jpg", titulo: "Reserva de la Biósfera Pantanos de Centla", descripcion: "El humedal deltaico más extenso de Mesoamérica en la confluencia Usumacinta-Grijalva." }
        ],
        puntosGeo: [
            { lat: 15.3, lng: -91.1, nombre: "Altos de Guatemala (Río Chixoy)" },
            { lat: 16.3, lng: -90.9, nombre: "Río Lacantún / Selva Lacandona" },
            { lat: 16.897, lng: -90.965, nombre: "Curva Sagrada de Yaxchilán", imagen: "assets/usumacinta_yaxchilan.jpg" },
            { lat: 17.47, lng: -91.49, nombre: "Cañón del Usumacinta (Boca del Cerro)" },
            { lat: 18.3, lng: -92.7, nombre: "Tres Brazos (Confluencia con Grijalva)" },
            { lat: 18.5, lng: -92.65, nombre: "Reserva Pantanos de Centla (Golfo de México)", imagen: "assets/pantanos_de_centla.jpg" }
        ],
        nodos: [
            { id: "yaxchilan_maya", nombre: "Yaxchilán (La Ciudad en el Meandro)", tipo: "arqueologia_fluvial", lat: 16.897, lng: -90.965, elevacion: "110 msnm", importancia: "Acrópolis maya levantada en la curva del río", texto: "El río fue muralla y vía sagrada de los mayas.", imagen: "assets/usumacinta_yaxchilan.jpg", icono: "🏛️" }
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
        imagenes: [
            { url: "assets/magdalena_estrecho_san_agustin.jpg", titulo: "El Estrecho del Magdalena (San Agustín)", descripcion: "El coloso fluvial de Colombia encañonado a solo 2.2 metros de anchura en roca volcánica milenaria." },
            { url: "assets/magdalena_macizo_colombiano.jpg", titulo: "Estrella Fluvial del Macizo Colombiano", descripcion: "Páramo de las Papas, cuna sagrada donde nacen el Magdalena, Cauca, Patía y Caquetá." }
        ],
        puntosGeo: [
            { lat: 1.91, lng: -76.58, nombre: "Páramo de las Papas (Macizo Colombiano)", imagen: "assets/magdalena_macizo_colombiano.jpg" },
            { lat: 1.88, lng: -76.28, nombre: "Estrecho del Magdalena (San Agustín)", imagen: "assets/magdalena_estrecho_san_agustin.jpg" },
            { lat: 5.2, lng: -74.74, nombre: "Honda / Puerto Salgar" },
            { lat: 7.06, lng: -73.85, nombre: "Barrancabermeja" },
            { lat: 9.24, lng: -74.42, nombre: "Depresión Momposina / Ciénagas" },
            { lat: 11.1, lng: -74.85, nombre: "Bocas de Ceniza (Barranquilla / Mar Caribe)", imagen: "assets/magdalena_bocas_ceniza.jpg" }
        ],
        nodos: [
            { id: "macizo_colombiano_cuna", nombre: "Estrella Fluvial del Macizo Colombiano", tipo: "fabrica_agua", lat: 1.91, lng: -76.58, elevacion: "3.685 msnm", importancia: "Cuna de cuatro grandes ríos andinos", texto: "Territorio sagrado de los pueblos Yanacona y Misak.", imagen: "assets/magdalena_macizo_colombiano.jpg", icono: "🏔️" }
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
        imagenes: [
            { url: "assets/orinoco_salto_angel.jpg", titulo: "Salto Ángel (Kerepakupai Merú)", descripcion: "La caída de agua ininterrumpida más alta del planeta (979 m) en el Auyantepuy (Canaima)." },
            { url: "assets/orinoco_casiquiare_bifurcacion.jpg", titulo: "Canal Natural del Casiquiare", descripcion: "El insólito puente de agua dulce que une físicamente las cuencas del Orinoco y el Amazonas." }
        ],
        puntosGeo: [
            { lat: 2.3, lng: -63.3, nombre: "Sierra Parima (Naciente)" },
            { lat: 3.14, lng: -65.9, nombre: "Bifurcación del Casiquiare", imagen: "assets/orinoco_casiquiare_bifurcacion.jpg" },
            { lat: 5.66, lng: -67.62, nombre: "Raudales de Atures (Puerto Ayacucho)" },
            { lat: 6.2, lng: -67.4, nombre: "Confluencia Río Meta" },
            { lat: 7.6, lng: -66.5, nombre: "Confluencia Río Apure" },
            { lat: 8.36, lng: -62.65, nombre: "Confluencia Río Caroní (Ciudad Guayana)" },
            { lat: 8.6, lng: -60.5, nombre: "Delta Amacuro (Océano Atlántico)", imagen: "assets/orinoco_delta_amacuro.jpg" }
        ],
        nodos: [
            { id: "salto_angel_auyantepuy", nombre: "Salto Ángel (Kerepakupai Merú)", tipo: "cascada_record", lat: 5.967, lng: -62.535, elevacion: "979 m de caída libre", importancia: "La catarata ininterrumpida más alta del planeta", texto: "Nace en la cumbre del tepuy Auyantepuy en Canaima.", imagen: "assets/orinoco_salto_angel.jpg", icono: "✨" },
            { id: "casiquiare_canal", nombre: "Canal Natural del Casiquiare", tipo: "bifurcacion_fluvial", lat: 3.14, lng: -65.9, elevacion: "120 msnm", importancia: "Puente fluvial natural entre dos cuencas oceánicas", texto: "Fenómeno hidrográfico que une físicamente el Orinoco con el Río Negro y el Amazonas.", imagen: "assets/orinoco_casiquiare_bifurcacion.jpg", icono: "🔀" }
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
            { url: "assets/amazonas_encuentro_aguas_manaus.jpg", titulo: "Encuentro de las Aguas (Manaus)", descripcion: "Fusión colosal donde el Río Negro y el Solimões fluyen lado a lado sin mezclarse por kilómetros." },
            { url: "assets/amazonas_nevado_mismi.jpg", titulo: "Nevado Mismi (Cuna Glaciar del Amazonas)", descripcion: "Deshielos andinos a 5.597 msnm en Arequipa, Perú, el origen más remoto documentado." }
        ],
        puntosGeo: [
            { lat: -15.52, lng: -71.68, nombre: "Nevado Mismi (Arequipa - Naciente Glaciar)", imagen: "assets/amazonas_nevado_mismi.jpg" },
            { lat: -9.0, lng: -74.0, nombre: "Río Ucayali" },
            { lat: -3.75, lng: -73.25, nombre: "Iquitos (Confluencia Marañón - Ucayali)" },
            { lat: -4.21, lng: -69.94, nombre: "Río Solimões (Triple Frontera Tabatinga/Leticia)" },
            { lat: -3.13, lng: -60.02, nombre: "Encuentro de las Aguas (Manaus / Río Negro)", imagen: "assets/amazonas_encuentro_aguas_manaus.jpg" },
            { lat: -3.37, lng: -58.75, nombre: "Confluencia Río Madeira" },
            { lat: -2.44, lng: -54.71, nombre: "Santarém (Confluencia Río Tapajós)" },
            { lat: -1.9, lng: -55.5, nombre: "Estrecho de Óbidos" },
            { lat: -1.45, lng: -48.5, nombre: "Delta de Marajó / Océano Atlántico (Belém)", imagen: "assets/amazonas_delta_marajo.jpg" }
        ],
        nodos: [
            { id: "mismi_nevado", nombre: "Nevado Mismi (Cuna del Amazonas)", tipo: "glaciar_origen", lat: -15.52, lng: -71.68, elevacion: "5.597 msnm", importancia: "El origen glaciar documentado del Amazonas", texto: "Hendidura de deshielo en los Andes peruanos.", imagen: "assets/amazonas_nevado_mismi.jpg", icono: "🏔️" },
            { id: "manaus_encuentro", nombre: "Encuentro de las Aguas (Manaus)", tipo: "fenomeno_hidrico", lat: -3.13, lng: -60.02, elevacion: "21 msnm", caudal: "120.000 m³/s", importancia: "Confluencia del Río Negro y el Solimões", texto: "Aguas negras y ocres corren sin mezclarse durante 6 km.", imagen: "assets/amazonas_encuentro_aguas_manaus.jpg", icono: "🌊" }
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
        imagenes: [
            { url: "assets/ocantins_araguaia_cerrado.jpg", titulo: "Río Tocantins y el Bioma Cerrado", descripcion: "Gran río central brasileño que drena las mesetas del Cerrado hacia la desembocadura de Marajó." }
        ],
        puntosGeo: [
            { lat: -14.5, lng: -49.0, nombre: "Planalto de Goiás (Naciente)" },
            { lat: -10.0, lng: -48.3, nombre: "Palmas (Tocantins Medio)" },
            { lat: -5.3, lng: -48.5, nombre: "Confluencia con Río Araguaia (Marabá)", imagen: "assets/ocantins_araguaia_cerrado.jpg" },
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
        imagenes: [
            { url: "assets/san_francisco_serra_canastra.jpg", titulo: "Naciente en la Serra da Canastra (Minas Gerais)", descripcion: "Nacimiento en las mesetas altas del Cerrado del legendario 'Velho Chico'." },
            { url: "assets/san_francisco_canon_paulo_afonso.jpg", titulo: "Cañón Monumental de Paulo Afonso", descripcion: "Impresionante garganta rocosa y saltos de agua en el semiárido nordestino." }
        ],
        puntosGeo: [
            { lat: -20.0, lng: -46.5, nombre: "Serra da Canastra (Minas Gerais)", imagen: "assets/san_francisco_serra_canastra.jpg" },
            { lat: -17.2, lng: -44.8, nombre: "Pirapora" },
            { lat: -13.2, lng: -43.4, nombre: "Bom Jesus da Lapa" },
            { lat: -9.4, lng: -40.5, nombre: "Petrolina / Juazeiro" },
            { lat: -9.4, lng: -38.2, nombre: "Cañón de Paulo Afonso", imagen: "assets/san_francisco_canon_paulo_afonso.jpg" },
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
            { url: "assets/ataratas_del_iguazu.jpg", titulo: "Cataratas del Iguazú (Garganta del Diablo)", descripcion: "Maravilla Natural del Mundo: 275 saltos de agua con caída de más de 80 metros en herradura." },
            { url: "assets/gran_pantanal_humedal.jpg", titulo: "El Gran Pantanal (Río Paraguay)", descripcion: "El mayor humedal de agua dulce del planeta, refugio vital de jaguares y aves acuáticas." }
        ],
        puntosGeo: [
            { lat: -17.8, lng: -57.4, nombre: "El Gran Pantanal (Río Paraguay)", imagen: "assets/gran_pantanal_humedal.jpg" },
            { lat: -21.0, lng: -57.8, nombre: "Paraguay Medio" },
            { lat: -25.4, lng: -54.58, nombre: "Alto Paraná (Itaipú)" },
            { lat: -25.69, lng: -54.44, nombre: "Cataratas del Iguazú (Confluencia)", imagen: "assets/ataratas_del_iguazu.jpg" },
            { lat: -27.46, lng: -58.83, nombre: "Confluencia Paraná - Paraguay (Corrientes)" },
            { lat: -32.95, lng: -60.65, nombre: "Paraná Medio (Rosario / Santa Fe)" },
            { lat: -34.2, lng: -58.5, nombre: "Delta del Paraná (Tigre)", imagen: "assets/delta_del_parana_tigre.jpg" },
            { lat: -34.6, lng: -58.38, nombre: "Estuario del Río de la Plata (Buenos Aires - Montevideo)", imagen: "assets/stuario_rio_de_la_plata.jpg" }
        ],
        nodos: [
            { id: "iguazu_cataratas", nombre: "Cataratas del Iguazú (Garganta del Diablo)", tipo: "catarata_monumental", lat: -25.69, lng: -54.44, elevacion: "195 msnm", caudal: "1.750 m³/s", importancia: "Maravilla Natural del Mundo", texto: "275 saltos de agua con caída de más de 80 metros en herradura.", imagen: "assets/ataratas_del_iguazu.jpg", icono: "💦" },
            { id: "pantanal_humedal", nombre: "El Gran Pantanal (Río Paraguay)", tipo: "humedal_mayor", lat: -17.8, lng: -57.4, elevacion: "120 msnm", importancia: "El mayor humedal de agua dulce del mundo", texto: "Planicie inundable que actúa como una esponja gigantesca.", imagen: "assets/gran_pantanal_humedal.jpg", icono: "🌿" }
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
            { url: "assets/patagonia_glaciar_perito_moreno.jpg", titulo: "Glaciar Perito Moreno & Campo de Hielo Sur", descripcion: "Tercera masa de hielo continental del planeta que alimenta los ríos y lagos glaciares patagónicos." },
            { url: "assets/patagonia_rio_santa_cruz.jpg", titulo: "Río Santa Cruz cruzando la Estepa Austral", descripcion: "Torrente de aguas turquesas glaciares fluyendo hacia el Océano Atlántico Sur." }
        ],
        puntosGeo: [
            { lat: -50.47, lng: -73.04, nombre: "Glaciar Perito Moreno (Lago Argentino)", imagen: "assets/patagonia_glaciar_perito_moreno.jpg" },
            { lat: -50.33, lng: -72.26, nombre: "Naciente Río Santa Cruz (El Calafate)" },
            { lat: -50.15, lng: -70.5, nombre: "Río Santa Cruz Medio (Estepa)", imagen: "assets/patagonia_rio_santa_cruz.jpg" },
            { lat: -50.02, lng: -68.52, nombre: "Puerto Santa Cruz (Océano Atlántico Sur)" }
        ],
        nodos: [
            { id: "perito_moreno_glaciar", nombre: "Campo de Hielo Sur (Perito Moreno)", tipo: "glaciar_fresca", lat: -50.47, lng: -73.04, elevacion: "180 msnm", importancia: "Tercera masa de hielo continental del planeta", texto: "Hielo milenario que alimenta los ríos patagónicos.", imagen: "assets/patagonia_glaciar_perito_moreno.jpg", icono: "❄️" }
        ]
    }
];

// =============================================================
// RED HIDROGRÁFICA CONTINENTAL: TRIBUTARIOS REALES Y CONFLUENCIAS MAYORES
// (Interconexión vascular biológica real basada en hidrografía genuina de Abya Yala)
// =============================================================

// Tributarios y bifurcaciones hidrológicas reales verificables
const TRIBUTARIOS_CONTINENTALES = [
    // 1. Canal Natural del Casiquiare (El puente fluvial vivo que une Orinoco y Amazonas)
    {
        
        subtitulo: "Bifurcación natural transcontinental entre el Orinoco y el Amazonas",
        descripcion: "El único canal natural transcontinental del planeta. Conecta la cuenca del Orinoco con el Río Negro (Amazonas), permitiendo el flujo continuo de aguas y especies entre dos gigantes fluviales.",
        imagen: "assets/orinoco_casiquiare_bifurcacion.jpg",
        cuencaMadre: "orinoco",
        cuencaDestino: "amazonas",
        tipo: "bifurcacion_transcuenca",
        puntosGeo: [
            { lat: 3.14, lng: -65.90, nombre: "Bifurcación del Orinoco" },
            { lat: 2.75, lng: -66.25, nombre: "Curso Medio del Casiquiare" },
            { lat: 2.10, lng: -66.80, nombre: "Río Pasimoni" },
            { lat: 1.98, lng: -67.08, nombre: "Desembocadura en el Río Negro (Amazonas)" }
        ]
    },
    // 2. Río Marañón (Cuna Andina del Amazonas)
    {
        
        subtitulo: "Arteria madre andina nacida en los glaciares de Huayhuash",
        descripcion: "Desciende impetuoso desde la cordillera andina oriental peruana, tallando cañones profundos antes de unirse al Ucayali en Nauta para formar el cauce principal del Amazonas.",
        imagen: "assets/amazonas_nevado_mismi.jpg",
        cuencaMadre: "amazonas",
        tipo: "afluente_origen",
        puntosGeo: [
            { lat: -10.30, lng: -76.80, nombre: "Glaciares de Huayhuash / Raura" },
            { lat: -6.50, lng: -77.90, nombre: "Cañón del Marañón" },
            { lat: -4.60, lng: -75.50, nombre: "Entrada a la Llanura Amazónica" },
            { lat: -4.51, lng: -73.58, nombre: "Confluencia de Nauta (Nacimiento del Amazonas)" }
        ]
    },
    // 3. Río Ucayali (Cuna del Amazonas)
    {
        
        subtitulo: "El cauce serpenteante del sur andino nacido en el Nevado Mismi",
        descripcion: "Formado por la unión del Tambo y el Urubamba, recorre miles de meandros a través de la selva baja peruana y la Reserva Nacional Pacaya Samiria.",
        imagen: "assets/amazonas_nevado_mismi.jpg",
        cuencaMadre: "amazonas",
        tipo: "afluente_origen",
        puntosGeo: [
            { lat: -12.50, lng: -73.00, nombre: "Unión Tambo - Urubamba" },
            { lat: -8.38, lng: -74.53, nombre: "Pucallpa (Meandros Serpenteantes)" },
            { lat: -5.00, lng: -73.80, nombre: "Reserva Pacaya Samiria" },
            { lat: -4.51, lng: -73.58, nombre: "Confluencia de Nauta (Nacimiento del Amazonas)" }
        ]
    },
    // 4. Río Negro (El Coloso de Aguas Negras)
    {
        
        subtitulo: "El río de aguas negras más caudaloso del mundo",
        descripcion: "Nace como Guainía en Colombia y drena selvas de arenas blancas ricas en ácidos húmicos. Alberga los archipiélagos fluviales de Mariuá y Anavilhanas antes de encontrarse con el Solimões en Manaus.",
        imagen: "assets/amazonas_encuentro_aguas_manaus.jpg",
        cuencaMadre: "amazonas",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: 2.00, lng: -67.10, nombre: "Frontera Colombia - Venezuela" },
            { lat: -0.97, lng: -62.92, nombre: "Barcelos / Archipiélago de Mariuá" },
            { lat: -3.00, lng: -60.50, nombre: "Archipiélago de Anavilhanas" },
            { lat: -3.13, lng: -60.02, nombre: "Encuentro de las Aguas (Manaus)" }
        ]
    },
    // 5. Río Madeira (Mayor Afluente de Sedimentos)
    {
        
        subtitulo: "El colosal gigante de sedimentos andinos de Bolivia y Brasil",
        descripcion: "Aporta más del 50% de los sedimentos que fertilizan la llanura amazónica. Formado por la confluencia del Mamoré y el Beni en la frontera boliviana-brasileña.",
        imagen: "assets/amazonas_delta_marajo.jpg",
        cuencaMadre: "amazonas",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: -10.80, lng: -65.35, nombre: "Confluencia Mamoré - Beni (Guajará-Mirim)" },
            { lat: -8.76, lng: -63.90, nombre: "Porto Velho" },
            { lat: -5.30, lng: -60.80, nombre: "Humaitá" },
            { lat: -3.37, lng: -58.74, nombre: "Confluencia en el Río Amazonas" }
        ]
    },
    // 6. Río Missouri ➔ Mississippi
    {
        
        subtitulo: "La gran rama occidental de las Montañas Rocosas",
        descripcion: "El río más largo de América del Norte (3.767 km). Nace en Montana y cruza las Grandes Llanuras hasta verter sus aguas cargadas de arcilla en el Mississippi al norte de St. Louis.",
        imagen: "assets/mississippi_naciente_itasca.jpg",
        cuencaMadre: "mississippi",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: 45.92, lng: -111.50, nombre: "Three Forks (Montañas Rocosas)" },
            { lat: 44.36, lng: -100.35, nombre: "Grandes Llanuras (Pierre)" },
            { lat: 39.11, lng: -94.58, nombre: "Kansas City" },
            { lat: 38.81, lng: -90.11, nombre: "Confluencia con el Mississippi (St. Louis)" }
        ]
    },
    // 7. Río Ohio ➔ Mississippi
    {
        
        subtitulo: "El mayor afluente oriental desde los Montes Apalaches",
        descripcion: "Aporta el mayor volumen de agua dulce al sistema Mississippi. Nace en Pittsburgh por la unión del Allegheny y el Monongahela, fluyendo hacia el suroeste hasta Cairo.",
        imagen: "assets/mississippi_delta_pie_pajaro.jpg",
        cuencaMadre: "mississippi",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: 40.44, lng: -80.00, nombre: "Pittsburgh (Naciente Allegheny & Monongahela)" },
            { lat: 38.25, lng: -85.75, nombre: "Louisville (Kentucky)" },
            { lat: 36.99, lng: -89.14, nombre: "Confluencia con el Mississippi (Cairo)" }
        ]
    },
    // 8. Río Paraguay ➔ Paraná (Conexión Pantanal)
    {
        
        subtitulo: "La arteria fluvial que purifica y alimenta el Gran Pantanal",
        descripcion: "Eje vertebrador de la Cuenca del Plata que atraviesa el humedal tropical más grande del mundo. Desciende suavemente hacia el sur hasta unirse al Paraná en Paso de la Patria.",
        imagen: "assets/gran_pantanal_humedal.jpg",
        cuencaMadre: "plata",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: -16.00, lng: -57.65, nombre: "Cáceres (Cabecera del Pantanal)" },
            { lat: -19.00, lng: -57.65, nombre: "Corumbá (Humedal Gigante)" },
            { lat: -25.28, lng: -57.64, nombre: "Asunción" },
            { lat: -27.35, lng: -58.62, nombre: "Confluencia Paso de la Patria (Río Paraná)" }
        ]
    },
    // 9. Río Iguazú ➔ Paraná
    {
        
        subtitulo: "Arteria de la selva paranaense y cuna de las Cataratas",
        descripcion: "Nace en la Serra do Mar cerca de Curitiba, serpentea por la meseta basáltica y se precipita en 275 cascadas antes de unirse al Paraná en el Hito de las Tres Fronteras.",
        imagen: "assets/ataratas_del_iguazu.jpg",
        cuencaMadre: "plata",
        tipo: "afluente_cataratas",
        puntosGeo: [
            { lat: -25.40, lng: -49.20, nombre: "Serra do Mar (Curitiba)" },
            { lat: -25.69, lng: -54.44, nombre: "Cataratas del Iguazú (Garganta del Diablo)" },
            { lat: -25.59, lng: -54.59, nombre: "Tres Fronteras (Confluencia Río Paraná)" }
        ]
    },
    // 10. Río Grijalva ➔ Pantanos de Centla (Usumacinta)
    {
        
        subtitulo: "El cañón milenario del Sumidero y la selva chiapaneca",
        descripcion: "Desciende desde las cumbres de Guatemala, cruza las imponentes paredes de 1.000 metros del Cañón del Sumidero y confluye con el Usumacinta en los Pantanos de Centla.",
        imagen: "assets/pantanos_de_centla.jpg",
        cuencaMadre: "mesoamerica",
        tipo: "afluente_mayor",
        puntosGeo: [
            { lat: 15.50, lng: -92.20, nombre: "Sierra de los Cuchumatanes (Guatemala)" },
            { lat: 16.83, lng: -93.09, nombre: "Cañón del Sumidero (Chiapas)" },
            { lat: 17.98, lng: -92.93, nombre: "Villahermosa (Tabasco)" },
            { lat: 18.42, lng: -92.65, nombre: "Confluencia de Pantanos de Centla" }
        ]
    },
    // 11. Río Liard ➔ Mackenzie
    {
        
        subtitulo: "Torrente subártico de aguas glaciares de la taiga boreal",
        descripcion: "Drena las montañas de Yukón y Columbia Británica. Aporta aguas frías y sedimentos minerales al curso medio del gran río Mackenzie (Dehcho) en Fort Simpson.",
        imagen: "assets/mackenzie_mapa.jpg",
        cuencaMadre: "mackenzie",
        tipo: "afluente_boreal",
        puntosGeo: [
            { lat: 60.00, lng: -128.50, nombre: "Yukón / Liard Hot Springs" },
            { lat: 60.50, lng: -123.50, nombre: "Fort Liard" },
            { lat: 61.85, lng: -121.35, nombre: "Confluencia de Fort Simpson (Río Mackenzie)" }
        ]
    }
];

// Confluencias mayores naturales y georreferenciadas
const CONFLUENCIAS_HIDROLOGICAS_REALES = [
    {
        id: "conf_casiquiare",
        nombre: "Bifurcación Orinoco - Casiquiare",
        cuenca: "Orinoco & Amazonas",
        lat: 3.14, lng: -65.90,
        subtitulo: "El único canal natural transcontinental del planeta",
        descripcion: "Fenómeno biogeográfico sin parangón en el planeta donde el río Orinoco divide su caudal en una bifurcación natural permanente hacia la Amazonía.",
        imagen: "assets/orinoco_casiquiare_bifurcacion.jpg",
        icono: "🔀"
    },
    {
        id: "conf_manaus",
        nombre: "Encuentro de las Aguas (Manaus)",
        cuenca: "Río Negro & Solimões",
        lat: -3.13, lng: -60.02,
        subtitulo: "Confluencia donde aguas negras y ocres corren juntas sin mezclarse",
        descripcion: "Fenómeno hidrodinámico donde las aguas oscuras del Río Negro (28 °C, 2 km/h) y las aguas claras y densas del Solimões (22 °C, 5 km/h) corren paralelas sin fundirse por más de 6 km.",
        imagen: "assets/amazonas_encuentro_aguas_manaus.jpg",
        icono: "🌊"
    },
    {
        id: "conf_nauta",
        nombre: "Confluencia de Nauta (Cuna del Amazonas)",
        cuenca: "Río Marañón & Río Ucayali",
        lat: -4.51, lng: -73.58,
        subtitulo: "Encuentro de las dos arterias andinas que forman el Gran Amazonas",
        descripcion: "Cuna fundacional del Gran Río Amazonas donde las aguas bravas del Marañón se funden con los meandros del Ucayali en Loreto, Perú.",
        imagen: "assets/amazonas_nevado_mismi.jpg",
        icono: "✨"
    },
    {
        id: "conf_corrientes",
        nombre: "Confluencia Paraná - Paraguay (Paso de la Patria)",
        cuenca: "Cuenca del Plata",
        lat: -27.35, lng: -58.62,
        subtitulo: "Unión de las aguas del Pantanal y las mesetas del sur",
        descripcion: "Vértice fluvial donde las aguas claras y purificadas del Pantanal (Río Paraguay) se integran al caudaloso Paraná en Paso de la Patria.",
        imagen: "assets/gran_pantanal_humedal.jpg",
        icono: "🌊"
    },
    {
        id: "conf_centla",
        nombre: "Confluencia de Pantanos de Centla",
        cuenca: "Usumacinta & Grijalva",
        lat: 18.42, lng: -92.65,
        subtitulo: "El mayor delta y humedal de Mesoamérica hacia el Golfo",
        descripcion: "La mayor desembocadura deltaica y humedal de Mesoamérica donde confluyen el Usumacinta y el Grijalva antes de entrar al Golfo de México.",
        imagen: "assets/pantanos_de_centla.jpg",
        icono: "🌿"
    },
    {
        id: "conf_st_louis",
        nombre: "Confluencia Missouri & Mississippi (St. Louis)",
        cuenca: "Llanuras de Norteamérica",
        lat: 38.81, lng: -90.11,
        subtitulo: "Unión del río de las Rocosas con la arteria del Norte",
        descripcion: "Punto de encuentro donde el lodoso río Missouri vierte sus sedimentos de las Rocosas en la ancha corriente del Mississippi superior.",
        imagen: "assets/mississippi_naciente_itasca.jpg",
        icono: "💧"
    },
    {
        id: "conf_cairo",
        nombre: "Confluencia Ohio & Mississippi (Cairo)",
        cuenca: "Mississippi / Apalaches",
        lat: 36.99, lng: -89.14,
        subtitulo: "Aporte colosal de caudal desde la cordillera este",
        descripcion: "Confluencia colosal en Illinois donde el río Ohio duplica el caudal del Mississippi, impulsando la navegación hacia el Golfo de México.",
        imagen: "assets/mississippi_delta_pie_pajaro.jpg",
        icono: "💧"
    },
    {
        id: "conf_tres_fronteras",
        nombre: "Tres Fronteras (Iguazú & Paraná)",
        cuenca: "Cuenca del Plata",
        lat: -25.59, lng: -54.59,
        subtitulo: "Cataratas del Iguazú tributando al Paraná en la frontera tripartita",
        descripcion: "Unión del río Iguazú en el río Paraná en el punto tripartito entre Puerto Iguazú (Argentina), Foz do Iguaçu (Brasil) y Ciudad del Este (Paraguay).",
        imagen: "assets/ataratas_del_iguazu.jpg",
        icono: "💦"
    },
    {
        id: "conf_fort_simpson",
        nombre: "Confluencia Liard & Dehcho (Fort Simpson)",
        cuenca: "Gran Norte / Ártico",
        lat: 61.85, lng: -121.35,
        subtitulo: "Unión de aguas glaciares en el Gran Río Boreal",
        descripcion: "Unión histórica del río Liard con el Mackenzie, enclave milenario de los pueblos Dene de las Naciones Originarias.",
        imagen: "assets/mackenzie_mapa.jpg",
        icono: "❄️"
    }
];

// Pre-proyección Web Mercator de tributarios y confluencias
TRIBUTARIOS_CONTINENTALES.forEach(trib => {
    trib.puntosMercator = trib.puntosGeo.map(pt => {
        const proj = SatelliteTileEngine.project(pt.lat, pt.lng);
        return {
            x: proj.x,
            y: proj.y,
            lat: pt.lat,
            lng: pt.lng,
            nombre: pt.nombre
        };
    });
});

CONFLUENCIAS_HIDROLOGICAS_REALES.forEach(conf => {
    const proj = SatelliteTileEngine.project(conf.lat, conf.lng);
    conf.x = proj.x;
    conf.y = proj.y;
});

// Pre-proyectar todos los puntos de las cuencas a coordenadas Web Mercator [0, 1]
CUENCAS_GEO_DATA.forEach(cuenca => {
    cuenca.puntosMercator = cuenca.puntosGeo.map(pt => {
        const proj = SatelliteTileEngine.project(pt.lat, pt.lng);
        return {
            x: proj.x,
            y: proj.y,
            lat: pt.lat,
            lng: pt.lng,
            nombre: pt.nombre,
            imagen: pt.imagen || null
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
