/**
 * Cartografía de las Aguas de Abya Yala
 * Red de 94 Nodos de Fuentes Hídricas, Geotermia y Luchas Ecológicas/Territoriales
 * Transcripción exhaustiva y georreferenciación de la lámina científica continental
 */

const LUCHAS_94_DATA_RAW = [
    // =============================================================
    // MÉXICO (PUNTOS 1 AL 35)
    // =============================================================
    {
        num: 1,
        nombre: "Cerro Prieto (Área Geotérmica)",
        estado: "Baja California",
        pais: "México",
        lat: 32.42, lng: -115.24,
        cuenca: "Valle de Mexicali / Delta del Río Colorado",
        amenaza: "Extracción geotérmica intensiva, subsidencia de suelos y emisiones de salmueras",
        comunidades: "Comunidades agrícolas del Valle de Mexicali y pueblo Cucapá",
        texto: "Uno de los campos geotérmicos más grandes del mundo. La extracción de vapor profundo ha generado fracturas en el terreno, abatimiento del manto freático y conflictos con los agricultores por el uso del agua.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 2,
        nombre: "San Ignacio - Mulegé & Sierra Guadalupe",
        estado: "Baja California Sur",
        pais: "México",
        lat: 27.28, lng: -112.89,
        cuenca: "Oasis de San Ignacio / Cuencas del Desierto Central",
        amenaza: "Presión sobre oasis hídricos y amenazas de minería de oro y cobre a cielo abierto",
        comunidades: "Poblaciones de los oasis y defensores de la Reserva del Vizcaíno",
        texto: "Oasis milenario de agua dulce en medio del desierto peninsular. Comunidades locales han resistido proyectos mineros tóxicos que amenazan contaminar el acuífero que sustenta los palmares.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 3,
        nombre: "Sierra El Mechudo & Comunidades de San Juan de la Costa",
        estado: "Baja California Sur",
        pais: "México",
        lat: 24.75, lng: -110.70,
        cuenca: "Vertiente del Golfo de California",
        amenaza: "Minería de fosforita submarina y terrestre / Desalación industrial",
        comunidades: "Comunidades costeras de San Juan de la Costa y Punta Coyote",
        texto: "Histórica defensa pesquera y comunitaria frente a proyectos de dragado y minería de fosfato en aguas del Golfo de California que pondrían en riesgo los ecosistemas marinos y costeros.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 4,
        nombre: "San Antonio - El Triunfo",
        estado: "Baja California Sur",
        pais: "México",
        lat: 23.81, lng: -110.11,
        cuenca: "Sierra de la Laguna (Fábrica de agua de Los Cabos)",
        amenaza: "Megaproyectos de minería de oro a cielo abierto (Los Cardones / Paredones Amarillos)",
        comunidades: "Frente Ciudadano en Defensa del Agua de Baja California Sur",
        texto: "La Sierra de la Laguna es la única reserva de agua dulce para La Paz y Los Cabos. La ciudadanía ha frenado exitosamente intentos de minería con cianuro que contaminarían el agua subterránea.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 5,
        nombre: "Caborca & Magdalena",
        estado: "Sonora",
        pais: "México",
        lat: 30.71, lng: -112.16,
        cuenca: "Río Magdalena / Río Asunción / Desierto de Altar",
        amenaza: "Megaminería de oro (La Herradura) y sobreexplotación de acuíferos desérticos",
        comunidades: "Ejidatarios de El Bajío y pueblos del desierto sonorense",
        texto: "Zona de intensa lucha ejidal contra consorcios mineros por el despojo de tierras y la contaminación de pozos de agua en una de las regiones más secas del continente.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 6,
        nombre: "Hermosillo",
        estado: "Sonora",
        pais: "México",
        lat: 29.07, lng: -110.95,
        cuenca: "Río Sonora / Acuífero de la Costa",
        amenaza: "Crisis hídrica urbana y el derrame masivo de tóxicos en el Río Sonora de 2014",
        comunidades: "Comités de Cuenca del Río Sonora y habitantes de Hermosillo",
        texto: "El peor desastre ambiental de la minería en México: 40 millones de litros de sulfato de cobre vertidos por Grupo México dejaron a miles de familias con metales pesados en la sangre y el agua.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 7,
        nombre: "Cuenca del Río Yaqui (Guerra del Agua)",
        estado: "Sonora",
        pais: "México",
        lat: 27.60, lng: -110.30,
        cuenca: "Río Yaqui (La arteria vital del sur de Sonora)",
        amenaza: "Desvío ilegal de agua mediante el Acueducto Independencia",
        comunidades: "Nación Indígena Yaqui (Pueblos de Vícam, Pótam, Tórim, Bácum, etc.)",
        texto: "La Tribu Yaqui ha defendido su río sagrado desde tiempos coloniales. Su lucha contra el desvío de aguas hacia la industria y la capital ha sido emblema de resistencia territorial y derechos originarios.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 8,
        nombre: "Etchojoa & Valle del Mayo",
        estado: "Sonora",
        pais: "México",
        lat: 26.91, lng: -109.62,
        cuenca: "Baja cuenca del Río Mayo",
        amenaza: "Monopolio agroindustrial del agua y salinización de mantos freáticos",
        comunidades: "Pueblo Indígena Yoreme-Mayo",
        texto: "Comunidades Yoreme que defienden sus derechos al agua del río Mayo frente a la concentración hídrica de los grandes terratenientes agrícolas y el desabasto doméstico.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 9,
        nombre: "Delta del Río Colorado & Alto Golfo",
        estado: "Baja California / Sonora",
        pais: "México",
        lat: 31.85, lng: -114.90,
        cuenca: "Delta del Río Colorado",
        amenaza: "Desecación total del delta por represamiento y absorción aguas arriba en EE.UU.",
        comunidades: "Pueblo Indígena Cucapá y pescadores ribereños",
        texto: "El otrora vergel del delta del Colorado fue convertido en un desierto de salitre. Los Cucapá ('gente del río') luchan por su derecho a la pesca ancestral y a que el río vuelva a tocar el mar.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 10,
        nombre: "Distrito Minero de Santa Bárbara",
        estado: "Chihuahua",
        pais: "México",
        lat: 26.80, lng: -105.81,
        cuenca: "Cuenca alta del Río Parral / Río Conchos",
        amenaza: "Siglos de minería de plomo, zinc y plata con acumulación de presas de jales tóxicos",
        comunidades: "Habitantes ribereños y comunidades de la Sierra Tarahumara",
        texto: "Uno de los asentamientos mineros más antiguos de América. Las presas de jales colindantes con los arroyos han filtrado metales pesados en las fuentes de agua de las familias.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 11,
        nombre: "Meoqui, Delicias, Julimes, Camargo, Jiménez",
        estado: "Chihuahua",
        pais: "México",
        lat: 27.80, lng: -105.20,
        cuenca: "Río Conchos (Mayor tributario del Río Bravo)",
        amenaza: "Conflicto por el Tratado de Aguas de 1944 y extracción desmedida para nogaleras",
        comunidades: "Agricultores locales y pueblos ribereños del Conchos (La Boquilla)",
        texto: "Escenario de la 'Guerra del Agua de Chihuahua' en 2020: agricultores y defensores tomaron la presa La Boquilla para evitar el vaciado del agua en plena sequía extrema.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 12,
        nombre: "Nuevo León (Monterrey & Cuenca de San Fernando)",
        estado: "Nuevo León",
        pais: "México",
        lat: 25.68, lng: -100.31,
        cuenca: "Río San Juan / Río Santa Catarina",
        amenaza: "Acaparamiento industrial (refresqueras, cerveceras y acero) en crisis de sequía",
        comunidades: "Habitantes de colonias populares de Monterrey",
        texto: "La crisis de sed de Monterrey evidenció la desigualdad hídrica: mientras la población pasaba meses sin agua potable, las corporaciones industriales tenían concesiones de pozos profundos garantizadas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 13,
        nombre: "Zacatecas (Distrito Minero Fresnillo / Peñasquito)",
        estado: "Zacatecas",
        pais: "México",
        lat: 23.17, lng: -102.86,
        cuenca: "Cuencas endorreicas del Altiplano",
        amenaza: "Agotamiento de acuíferos por Newmont Peñasquito y Fresnillo plc",
        comunidades: "Comunidades de Mazapil, ejidatarios y campesinos zacatecanos",
        texto: "La mayor mina de oro de México consume diariamente millones de litros de agua dulce en un semidesierto donde los pozos campesinos se secan y los manantiales desaparecen.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 14,
        nombre: "Comarca Lagunera (Torreón, Gómez Palacio, Lerdo)",
        estado: "Durango / Coahuila",
        pais: "México",
        lat: 25.54, lng: -103.40,
        cuenca: "Río Nazas y Río Aguanaval",
        amenaza: "Arsenicismo endémico por sobreexplotación lechera (Grupo Lala) y agroindustrial",
        comunidades: "Población de la Comarca Lagunera y Encuentro Ciudadano Lagunero",
        texto: "El bombeo a más de 500 metros para forrajes de ganado lechero provocó que el agua fósil salga cargada de arsénico venenoso, provocando cáncer y amputaciones en la población rural.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 15,
        nombre: "Valle del Guadiana",
        estado: "Durango",
        pais: "México",
        lat: 24.02, lng: -104.65,
        cuenca: "Río Tunal",
        amenaza: "Contaminación con flúor y metales pesados en el agua potable",
        comunidades: "Habitantes del Valle de Durango",
        texto: "Sobreexplotación del acuífero que ha incrementado la presencia de flúor en el agua de consumo, afectando la salud dental y ósea de la infancia en las comunidades periféricas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 16,
        nombre: "Santa María de la Paz",
        estado: "Zacatecas",
        pais: "México",
        lat: 21.51, lng: -103.40,
        cuenca: "Cuenca del Cañón de Juchipila",
        amenaza: "Extracción minera y defensa de fuentes manantiales",
        comunidades: "Comunidades agrícolas del sur de Zacatecas",
        texto: "Defensa local del agua de riego frente al avance de concesiones extractivas en los límites entre Zacatecas y Jalisco.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 17,
        nombre: "Morales en San Luis Potosí & Cerro de San Pedro",
        estado: "San Luis Potosí",
        pais: "México",
        lat: 22.15, lng: -100.98,
        cuenca: "Acuífero de San Luis Potosí",
        amenaza: "Destrucción del cerro histórico por Minera San Xavier y contaminación química",
        comunidades: "Frente Amplio Opositor a Minera San Xavier",
        texto: "Lucha emblemática en México: la empresa canadiense dinamitó un cerro histórico para extraer oro con cianuro sobre el acuífero que abastece a la capital potosina.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 18,
        nombre: "Río Verde & Media Luna",
        estado: "San Luis Potosí",
        pais: "México",
        lat: 21.93, lng: -100.00,
        cuenca: "Río Verde / Sistema Pánuco",
        amenaza: "Presión turística y proyectos de trasvase hacia zonas industriales",
        comunidades: "Ejidatarios de El Jabalí y pueblos de la Zona Media",
        texto: "El manantial termal de la Media Luna es un ecosistema cárstico único. Las comunidades defienden el caudal frente a proyectos de trasvase hacia la zona fabril.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 19,
        nombre: "Zimapán (Valle del Mezquital)",
        estado: "Hidalgo",
        pais: "México",
        lat: 20.73, lng: -99.38,
        cuenca: "Río Moctezuma / Sistema Pánuco",
        amenaza: "Basurero tóxico de confinamiento y aguas subterráneas con arsénico natural y minero",
        comunidades: "Pobladores otomíes y campesinos de Zimapán",
        texto: "Fuerte movilización social que expulsó a la empresa española Befesa que pretendía instalar un confinamiento de residuos peligrosos sobre las cuencas que alimentan manantiales.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 20,
        nombre: "Aguascalientes",
        estado: "Aguascalientes",
        pais: "México",
        lat: 21.88, lng: -102.29,
        cuenca: "Río San Pedro",
        amenaza: "Privatización del servicio de agua por Veolia y sobreexplotación automotriz",
        comunidades: "Movimientos ciudadanos por la remunicipalización del agua",
        texto: "Durante 30 años la trasnacional Veolia lucró con tarifas impagables y cortes de servicio mientras el acuífero se hundía por el crecimiento industrial y automotriz.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 21,
        nombre: "Acoculco (Área Geotérmica)",
        estado: "Puebla",
        pais: "México",
        lat: 19.92, lng: -98.15,
        cuenca: "Sierra Norte de Puebla",
        amenaza: "Proyectos de geotermia profunda y fracturamiento hidráulico",
        comunidades: "Pueblos nahuas y totonacos de la Sierra Norte de Puebla",
        texto: "Pueblos originarios organizados en comités de defensa del territorio contra los 'proyectos de muerte' (minería a cielo abierto, hidroeléctricas y geotermia).",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 22,
        nombre: "Los Humeros (Campo Geotérmico)",
        estado: "Puebla",
        pais: "México",
        lat: 19.68, lng: -97.45,
        cuenca: "Cuenca endorreica de Libres-Oriental",
        amenaza: "Sismos inducidos, ruido ensordecedor y desecación de manantiales locales",
        comunidades: "Comunidades campesinas de Chignautla y Teziutlán",
        texto: "La planta geotérmica de la CFE ha sido denunciada por comunidades circundantes por provocar disminución de aguas manantiales y afectación a cultivos por emisiones ácidas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 23,
        nombre: "Los Azufres (Campo Geotérmico)",
        estado: "Michoacán",
        pais: "México",
        lat: 19.78, lng: -100.65,
        cuenca: "Cuenca del Lago de Cuitzeo",
        amenaza: "Deforestación de bosques de oyamel y alteración del ciclo hidrológico",
        comunidades: "Comunidades de Ciudad Hidalgo y Maravatío",
        texto: "Santuario forestal y de aguas termales donde la explotación de vapor a alta presión ha tenido impacto en los arroyos de cabecera que alimentan al agonizante Lago de Cuitzeo.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 24,
        nombre: "Altos de Jalisco & Temacapulín (Presa El Zapotillo)",
        estado: "Jalisco",
        pais: "México",
        lat: 21.18, lng: -102.73,
        cuenca: "Río Verde (Afluente del Río Santiago)",
        amenaza: "Inundación forzada de poblados históricos por la presa El Zapotillo",
        comunidades: "Comité Salvemos Temacapulín, Acasico y Palmarejo",
        texto: "Una de las victorias más inspiradoras de América Latina: 15 años de resistencia campesina y comunitaria lograron detener la elevación de la cortina de la presa y salvar a sus pueblos de ser inundados.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 25,
        nombre: "Salamanca (Refinería & Río Lerma)",
        estado: "Guanajuato",
        pais: "México",
        lat: 20.57, lng: -101.19,
        cuenca: "Río Lerma",
        amenaza: "Contaminación química por la refinería Ing. Antonio M. Amor y fertilizantes",
        comunidades: "Pobladores ribereños del Río Lerma",
        texto: "El río Lerma llega a este tramo cargado de residuos industriales de hidrocarburos, agroquímicos y azufre, convirtiendo el cauce en una cloaca a cielo abierto que enferma a las comunidades.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 26,
        nombre: "Acámbaro & Lago de Cuitzeo",
        estado: "Guanajuato / Michoacán",
        pais: "México",
        lat: 20.03, lng: -100.72,
        cuenca: "Cuenca del Río Lerma / Lago de Cuitzeo",
        amenaza: "Desecación del segundo lago más grande de México y tolvaneras tóxicas",
        comunidades: "Pescadores purépechas y comunidades ribereñas",
        texto: "El lago de Cuitzeo enfrenta una desecación catastrófica por el desvío de sus ríos alimentadores y deforestación, generando tormentas de polvo salitroso y pérdida de pesca.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 27,
        nombre: "Independencia (Guanajuato)",
        estado: "Guanajuato",
        pais: "México",
        lat: 21.20, lng: -101.00,
        cuenca: "Cuenca de la Independencia",
        amenaza: "Presencia crítica de arsénico y fluoruro en pozos de agua potable",
        comunidades: "Coalición de Comunidades de la Cuenca de la Independencia (CODECIN)",
        texto: "Más de 2.500 pozos que abastecen a la agroexportación de hortalizas han abatido el acuífero, provocando que el agua de más de 400 comunidades tenga niveles letales de arsénico.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 28,
        nombre: "Taxco & Río Chontalcoatlán",
        estado: "Guerrero",
        pais: "México",
        lat: 18.55, lng: -99.60,
        cuenca: "Río Amacuzac / Balsas",
        amenaza: "Pasivos ambientales mineros de metales pesados en las grutas y ríos",
        comunidades: "Pobladores de Taxco el Viejo y Cañón de Chontalcoatlán",
        texto: "Las presas de jales de siglos de minería de plata sin remediar lixivian plomo y cadmio a los ríos subterráneos que alimentan el Parque Nacional Grutas de Cacahuamilpa.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 29,
        nombre: "Tlamacazapa",
        estado: "Guerrero",
        pais: "México",
        lat: 18.57, lng: -99.52,
        cuenca: "Montañas del Alto Balsas",
        amenaza: "Contaminación con plomo, arsénico y manganeso en el agua de pozos y ollas",
        comunidades: "Pueblo indígena Nahua de Tlamacazapa",
        texto: "Comunidad nahua célebre por su artesanía de palma donde el agua presenta concentraciones de metales pesados causantes de retrasos en el neurodesarrollo infantil.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 30,
        nombre: "Oaxaca (Valles Centrales & San José del Progreso)",
        estado: "Oaxaca",
        pais: "México",
        lat: 16.70, lng: -96.70,
        cuenca: "Río Atoyac / Río Salado",
        amenaza: "Mina de plata y oro San José (Fortuna Silver Mines)",
        comunidades: "Frente de Pueblos Unidos del Valle de Ocotlán (Zapotecos)",
        texto: "Comunidades zapotecas organizadas en defensa de sus pozos de siembra frente a los derrames de jales tóxicos de la empresa canadiense y la represión a sus defensores comunitarios.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 31,
        nombre: "Tabasco: Cactus - Sitio Grande",
        estado: "Tabasco / Chiapas",
        pais: "México",
        lat: 17.70, lng: -93.30,
        cuenca: "Río Mezcalapa / Sistema Grijalva",
        amenaza: "Contaminación petrolera por derrames de crudo y quema de gas amargo",
        comunidades: "Comunidades chontales y campesinas de Reforma y Huimanguillo",
        texto: "El complejo procesador de gas y pozos petroleros ha provocado lluvia ácida, mortandad de peces en los ríos y salinización de humedales en la planicie tabasqueña.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 32,
        nombre: "Luna - Sen",
        estado: "Tabasco",
        pais: "México",
        lat: 18.20, lng: -93.10,
        cuenca: "Delta del Río Grijalva / Usumacinta",
        amenaza: "Ductos petroleros submarinos y costeros con fugas crónicas",
        comunidades: "Pescadores costeros de Frontera y Paraíso",
        texto: "Zonas de humedales costeros y manglares impactados por la infraestructura de extracción de hidrocarburos de PEMEX.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 33,
        nombre: "Jujo - Tecominoacán",
        estado: "Tabasco",
        pais: "México",
        lat: 17.90, lng: -93.50,
        cuenca: "Río Carrizal / Río Samaria",
        amenaza: "Instalaciones petroleras en tierras agrícolas inundables",
        comunidades: "Campesinos ejidales de Cárdenas y Comalcalco",
        texto: "Derrames continuos de hidrocarburos en zonas agrícolas que inutilizan el agua de riego y pozos artesianos de las familias campesinas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 34,
        nombre: "Pol - Chuc",
        estado: "Campeche / Tabasco",
        pais: "México",
        lat: 19.00, lng: -92.20,
        cuenca: "Sonda de Campeche / Golfo de México",
        amenaza: "Plataformas marinas de extracción y derrames en altamar",
        comunidades: "Cooperativas pesqueras del Golfo de México",
        texto: "Complejo marino de plataformas petroleras en la Sonda de Campeche que ha desplazado a las flotas de pesca tradicional y generado derrames de crudo en aguas someras.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 35,
        nombre: "Abkatún",
        estado: "Campeche",
        pais: "México",
        lat: 19.25, lng: -92.05,
        cuenca: "Golfo de México",
        amenaza: "Grandes explosiones en plataformas y fuga constante de hidrocarburos",
        comunidades: "Pueblos pesqueros de Ciudad del Carmen",
        texto: "Centro neurálgico de producción petrolera marina donde los incendios y emanaciones de crudo impactan directamente los corredores marinos y lagunas costeras protegidas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },

    // =============================================================
    // CENTROAMÉRICA & CARIBE (PUNTOS 36 AL 54)
    // =============================================================
    {
        num: 36,
        nombre: "Chinautla & Mixco",
        estado: "Departamento de Guatemala",
        pais: "Guatemala",
        lat: 14.71, lng: -90.50,
        cuenca: "Río Las Vacas / Cuenca del Río Motagua",
        amenaza: "Areneras ilegales que destruyen los cerros y desvían el río hacia cloacas industriales",
        comunidades: "Pueblo Indígena Maya Poqomam de Santa Cruz Chinautla",
        texto: "El pueblo Poqomam mantiene una resistencia histórica y pacífica en defensa del río y su barro alfarero sagrado frente a las areneras que destruyen su comunidad.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 37,
        nombre: "Lago de Coatepeque",
        estado: "Santa Ana",
        pais: "El Salvador",
        lat: 13.87, lng: -89.55,
        cuenca: "Caldera Volcánica de Coatepeque",
        amenaza: "Proliferación de cianobacterias por descarga de aguas residuales turísticas y agrícolas",
        comunidades: "Comunidades ribereñas y pescadores del lago",
        texto: "Hermoso lago de cráter volcánico sagrado que enfrenta episodios severos de contaminación por aguas residuales de mansiones y complejos turísticos en sus orillas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 38,
        nombre: "Lago de Ilopango",
        estado: "San Salvador / Cuscatlán",
        pais: "El Salvador",
        lat: 13.67, lng: -89.05,
        cuenca: "Cuenca del Río Jiboa",
        amenaza: "Sobreexplotación del acuífero para la capital y presencia natural de boro y arsénico",
        comunidades: "Comunidades de pescadores artesanales y pueblos lencas/pipiles históricos",
        texto: "Lago cratérico donde convergen desafíos de presión hídrica urbana extrema con fuentes termales hidrotermales subterráneas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 39,
        nombre: "Laguna de Olomega",
        estado: "San Miguel",
        pais: "El Salvador",
        lat: 13.31, lng: -88.04,
        cuenca: "Baja cuenca del Río Grande de San Miguel",
        amenaza: "Sedimentación, deforestación y pérdida del espejo de agua dulce",
        comunidades: "Poblaciones pesqueras y campesinas del oriente salvadoreño",
        texto: "El mayor cuerpo de agua dulce del oriente de El Salvador (sitio Ramsar). Las comunidades luchan por reforestar sus cuencas altas para evitar que se colmate por completo.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 40,
        nombre: "Valle de Siria",
        estado: "Francisco Morazán",
        pais: "Honduras",
        lat: 14.62, lng: -87.05,
        cuenca: "Río Chiquito / Cuenca del Río Ulúa",
        amenaza: "Contaminación con metales pesados por la mina San Martín (Goldcorp)",
        comunidades: "Comité Ambientalista del Valle de Siria",
        texto: "Lucha histórica y dolorosa en Centroamérica: la mina a cielo abierto secó 19 fuentes de agua y dejó a cientos de pobladores con plomo, arsénico y mercurio en la sangre, alopecia y malformaciones.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 41,
        nombre: "Cerro Mina de Agua",
        estado: "Chinandega",
        pais: "Nicaragua",
        lat: 12.90, lng: -86.95,
        cuenca: "Vertiente del Pacífico Norte",
        amenaza: "Proyectos de extracción minera en cabeceras de cuenca",
        comunidades: "Comunidades campesinas e indígenas del norte nicaragüense",
        texto: "Cerro considerado una esponja hídrica vital para decenas de comunidades que dependen de sus manantiales para beber y cultivar.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 42,
        nombre: "El Charco & Santa Rosa del Peñón",
        estado: "León",
        pais: "Nicaragua",
        lat: 12.80, lng: -86.37,
        cuenca: "Río Sinecapa",
        amenaza: "Minería metálica y secamiento de pozos artesianos",
        comunidades: "Movimiento Comunitario de Santa Rosa del Peñón",
        texto: "Resistencia popular contra el avance de concesiones mineras que amenazan el suministro hídrico en el corredor seco nicaragüense.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 43,
        nombre: "Santa Cruz de la India",
        estado: "León / Matagalpa",
        pais: "Nicaragua",
        lat: 12.74, lng: -86.30,
        cuenca: "Cuenca del Río Viejo",
        amenaza: "Mina Mina La India (Condor Gold)",
        comunidades: "Movimiento Comunal Santa Cruz de la India",
        texto: "Mujeres y familias en resistencia contra el desalojo forzado de su pueblo y la contaminación con cianuro de las escasas fuentes de agua subterránea.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 44,
        nombre: "Kinuma",
        estado: "Chontales",
        pais: "Nicaragua",
        lat: 12.10, lng: -85.20,
        cuenca: "Vertiente del Gran Lago Cocibolca",
        amenaza: "Expansión minera en la cuenca del lago de agua dulce más grande de Centroamérica",
        comunidades: "Campesinos y ganaderos de Chontales",
        texto: "Alerta ambiental por la cercanía de actividades mineras con los ríos que alimentan el Gran Lago de Nicaragua (Cocibolca).",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 45,
        nombre: "Zapote",
        estado: "Rivas / Río San Juan",
        pais: "Nicaragua",
        lat: 11.20, lng: -85.10,
        cuenca: "Río San Juan & Humedales del Sur",
        amenaza: "Riesgos del proyecto del Gran Canal Interoceánico y monocultivos",
        comunidades: "Consejo Nacional en Defensa de Nuestra Tierra, Lago y Soberanía",
        texto: "El movimiento campesino anticanal protagonizó más de 100 marchas masivas para proteger el Lago Cocibolca y los humedales del Río San Juan de ser dinamitados.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 46,
        nombre: "Llano La Tejera",
        estado: "Chontales",
        pais: "Nicaragua",
        lat: 12.18, lng: -85.35,
        cuenca: "Río Mayales",
        amenaza: "Afectación de fuentes hídricas por actividades extractivas y ganaderas",
        comunidades: "Comunidades rurales de Juigalpa",
        texto: "Defensa del río Mayales como única fuente de abastecimiento para Juigalpa y zonas rurales circunvecinas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 47,
        nombre: "Tipitapa (Área Geotérmica & Lago Xolotlán)",
        estado: "Managua",
        pais: "Nicaragua",
        lat: 12.20, lng: -86.10,
        cuenca: "Río Tipitapa (Conexión Xolotlán - Cocibolca)",
        amenaza: "Contaminación histórica del Lago de Managua y explotación geotérmica",
        comunidades: "Pobladores ribereños de Tipitapa",
        texto: "Río histórico que conecta los dos grandes lagos de Nicaragua, con fuentes termales y retos graves de saneamiento ambiental.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 48,
        nombre: "Rincón de la Vieja",
        estado: "Guanacaste",
        pais: "Costa Rica",
        lat: 10.83, lng: -85.33,
        cuenca: "Río Colorado / Río Tempisque",
        amenaza: "Proyectos de geotermia dentro de parques nacionales protegidos",
        comunidades: "Defensores ambientales y comunidades de Liberia",
        texto: "Debate nacional en Costa Rica sobre la apertura de áreas protegidas y parques nacionales a proyectos energéticos geotérmicos que podrían alterar acuíferos prístinos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 49,
        nombre: "Miravalles (Planta Geotérmica)",
        estado: "Guanacaste",
        pais: "Costa Rica",
        lat: 10.75, lng: -85.15,
        cuenca: "Cuenca del Río Tenorio",
        amenaza: "Monitoreo de descargas termales y minerales en cuencas de riego",
        comunidades: "Productores de la llanura de Guanacaste",
        texto: "El principal campo geotérmico de Costa Rica. Requiere constante vigilancia comunitaria para que las aguas de reinyección profunda no filtren boro ni arsénico a los acuíferos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 50,
        nombre: "Chocosuela - Platanar",
        estado: "Alajuela",
        pais: "Costa Rica",
        lat: 10.30, lng: -84.35,
        cuenca: "Río Platanar / Cuenca del Río San Carlos",
        amenaza: "Presión hidroeléctrica de pasada y defensa de ríos vivos",
        comunidades: "Comunidades de San Carlos y San Ramón",
        texto: "Comunidades que han defendido que sus ríos no sean entubados completamente para plantas hidroeléctricas privadas de filo de agua.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 51,
        nombre: "Isla de la Juventud (Aguas Minero-Medicinales)",
        estado: "Municipio Especial",
        pais: "Cuba",
        lat: 21.88, lng: -82.80,
        cuenca: "Cuencas de la Isla de la Juventud",
        amenaza: "Manejo de recursos hídricos insulares y salinización de mantos freáticos",
        comunidades: "Pobladores de Nueva Gerona y Santa Fe",
        texto: "Rica en manantiales minerales termales como Santa Fe, requiere una protección rigurosa para evitar que la intrusión marina arruine los acuíferos subterráneos de la isla.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 52,
        nombre: "Cienfuegos (Bahía de Jagua)",
        estado: "Cienfuegos",
        pais: "Cuba",
        lat: 22.15, lng: -80.45,
        cuenca: "Río Damují / Bahía de Jagua",
        amenaza: "Descargas industriales, térmicas y fitosanitarias en la bahía",
        comunidades: "Pescadores de Cienfuegos y comunidades ribereñas",
        texto: "Una de las bahías de bolsa más hermosas del Caribe, donde el río Damují deposita sedimentos que demandan planes de descontaminación integral.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 53,
        nombre: "Moa (Minería de Níquel y Cobalto)",
        estado: "Holguín",
        pais: "Cuba",
        lat: 20.65, lng: -74.92,
        cuenca: "Río Moa / Cuencas del Parque Nacional Alejandro de Humboldt",
        amenaza: "Erosión severa por minería a cielo abierto de lateritas rojas y acidez en aguas",
        comunidades: "Trabajadores y pobladores de Moa",
        texto: "Extensas minas de laterita de níquel a cielo abierto que tiñen los ríos y la costa de un rojo intenso debido al arrastre de lodos y metales.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 54,
        nombre: "Mina Santa Lucía",
        estado: "Pinar del Río",
        pais: "Cuba",
        lat: 22.70, lng: -83.95,
        cuenca: "Cuencas de la Sierra de los Órganos",
        amenaza: "Pasivos ambientales de minería polimetálica histórica de plomo y zinc",
        comunidades: "Comunidades rurales de Minas de Matahambre",
        texto: "Pasivos mineros históricos que demandan remediación ambiental para evitar que el drenaje ácido de mina alcance los cursos de agua subterráneos del carso pinareño.",
        imagen: "assets/red_luchas_abya_yala.png"
    },

    // =============================================================
    // SUDAMÉRICA ANDINA & SEPTENTRIONAL (PUNTOS 55 AL 73)
    // =============================================================
    {
        num: 55,
        nombre: "Bahía de Barbacoas",
        estado: "Sucre / Bolívar",
        pais: "Colombia",
        lat: 10.15, lng: -75.55,
        cuenca: "Canal del Dique / Delta del Magdalena",
        amenaza: "Hipersedimentación y contaminación por el dragado del Canal del Dique",
        comunidades: "Comunidades afrodescendientes y pescadores de Barú y Pasacaballos",
        texto: "El desvío descontrolado de sedimentos del Magdalena a través del Canal del Dique ha asfixiado los arrecifes de coral y los pastos marinos en las islas del Rosario.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 56,
        nombre: "Sur de Bolívar (Serranía de San Lucas)",
        estado: "Bolívar",
        pais: "Colombia",
        lat: 8.20, lng: -74.30,
        cuenca: "Cuenca del Río Magdalena Medio",
        amenaza: "Contaminación con mercurio por minería de oro y asedio paramilitar",
        comunidades: "Federación Agrominera del Sur de Bolívar (Fedeagromisbol)",
        texto: "Comunidades campesinas y mineras artesanales que exigen exclusión de megaminería multinacional y erradicación del mercurio para proteger las ciénagas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 57,
        nombre: "Antioquia (Río Cauca & Hidroituango)",
        estado: "Antioquia",
        pais: "Colombia",
        lat: 7.15, lng: -75.68,
        cuenca: "Cañón del Río Cauca",
        amenaza: "Megapresa Hidroituango y desastre de desecación del río",
        comunidades: "Movimiento Ríos Vivos Antioquia",
        texto: "Resistencia ejemplar contra el megaproyecto hidroeléctrico que destruyó el cañón sagrado del Cauca, inundó fosas comunes del conflicto armado y provocó la desecación temporal del río en 2019.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 58,
        nombre: "Yacopí",
        estado: "Cundinamarca",
        pais: "Colombia",
        lat: 5.45, lng: -74.35,
        cuenca: "Río Negro (Cundinamarca) / Magdalena",
        amenaza: "Presión extractiva y protección de bosques de niebla de cabecera",
        comunidades: "Campesinos del noroccidente de Cundinamarca",
        texto: "Defensa de las fuentes hídricas de alta montaña que alimentan el valle del Magdalena.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 59,
        nombre: "Caldas (Páramo de Letras / Cuenca del Chinchiná)",
        estado: "Caldas",
        pais: "Colombia",
        lat: 5.08, lng: -75.40,
        cuenca: "Río Chinchiná / Eje Cafetero",
        amenaza: "Deforestación de páramos y contaminación de cuencas abastecedoras",
        comunidades: "Pobladores de Manizales y municipios cafeteros",
        texto: "Protección ciudadana del páramo que abastece de agua a la ciudad de Manizales frente a la expansión agrícola intensiva y la minería.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 60,
        nombre: "Distrito Minero de Marmato",
        estado: "Caldas",
        pais: "Colombia",
        lat: 5.48, lng: -75.59,
        cuenca: "Quebrada Cascabel / Río Cauca",
        amenaza: "Intento de megaminería a cielo abierto por multinacionales y reubicación del pueblo",
        comunidades: "Asociación de Mineros Tradicionales de Marmato y pueblo indígena Cartama",
        texto: "'El pesebre de oro de Colombia'. El pueblo y los mineros tradicionales se organizaron para frenar a la empresa canadiense que pretendía arrasar el cerro histórico y destruir sus manantiales.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 61,
        nombre: "Valle del Cauca (Monocultivo de Caña & Ríos del Pacífico)",
        estado: "Valle del Cauca",
        pais: "Colombia",
        lat: 3.80, lng: -76.30,
        cuenca: "Valle geográfico del Río Cauca y cuencas del Dagua/Anchicayá",
        amenaza: "Sobreexplotación hídrica por monocultivo de caña de azúcar y lodos tóxicos de represas",
        comunidades: "Pueblos afrocolombianos, indígenas Nasa y comunidades campesinas",
        texto: "La agroindustria cañera concentra millones de metros cúbicos de agua mientras los poblados vecinos carecen de agua potable; en el Pacífico, el río Anchicayá sufrió un histórico vertimiento de lodos por EPSA.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 62,
        nombre: "Nariño (Río Telembí & Barbacoas)",
        estado: "Nariño",
        pais: "Colombia",
        lat: 1.68, lng: -78.14,
        cuenca: "Río Telembí / Río Patía",
        amenaza: "Dragado indiscriminado de oro con retroexcavadoras y vertimiento de cianuro",
        comunidades: "Consejos Comunitarios del Pueblo Afro de Barbacoas y Pueblo Awá",
        texto: "Territorio de asombrosa pluviosidad donde la minería con dragas y mercurio ha destruido el lecho del río Telembí, vital para la pesca y supervivencia de las familias afrodescendientes e indígenas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 63,
        nombre: "El Diamante (Mina de Oro / Caldas)",
        estado: "Caldas",
        pais: "Colombia",
        lat: 5.35, lng: -75.45,
        cuenca: "Afluentes del Río Cauca",
        amenaza: "Contaminación por vertimientos ácidos de mina",
        comunidades: "Comunidades rurales de la región cafetera",
        texto: "Zonas mineras históricas donde las comunidades exigen una reconversión hacia la agroecología y el cierre de pasivos ambientales contaminantes.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 64,
        nombre: "Río Tambo & Laguna Papallacta",
        estado: "Provincia de Napo",
        pais: "Ecuador",
        lat: -0.37, lng: -78.15,
        cuenca: "Río Papallacta / Cuenca del Río Napo (Amazonas)",
        amenaza: "Oleoducto OCP sobre zonas de páramo y derrames crónicos de petróleo",
        comunidades: "Comunidades Kichwa de Papallacta y Quijos",
        texto: "La laguna de Papallacta y sus ríos abastecen más del 60% del agua potable de Quito. Los repetidos derrames del Oleoducto de Crudos Pesados han contaminado gravemente estas fuentes puras.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 65,
        nombre: "Guayllabamba",
        estado: "Pichincha",
        pais: "Ecuador",
        lat: -0.05, lng: -78.35,
        cuenca: "Río Guayllabamba / Cuenca del Río Esmeraldas (Pacífico)",
        amenaza: "Recepción de todas las aguas servidas de la capital ecuatoriana",
        comunidades: "Comunidades agrícolas de los valles del norte de Pichincha",
        texto: "El río Guayllabamba recibe millones de metros cúbicos de aguas residuales sin tratar de Quito, afectando los cultivos frutales y la salud de las poblaciones aguas abajo.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 66,
        nombre: "Tumbaco & Valle de Los Chillos",
        estado: "Pichincha",
        pais: "Ecuador",
        lat: -0.22, lng: -78.40,
        cuenca: "Río San Pedro / Río Machángara",
        amenaza: "Urbanización descontrolada sobre quebradas y vertimientos industriales",
        comunidades: "Colectivos en defensa de las quebradas de Quito",
        texto: "Iniciativas ciudadanas para revivir y desentubar las quebradas históricas de Quito frente a la especulación inmobiliaria y los colectores de basura.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 67,
        nombre: "Aguas Geotérmicas de Carchi, Imbabura, Cotopaxi & Tungurahua",
        estado: "Sierra Central y Norte",
        pais: "Ecuador",
        lat: -0.80, lng: -78.60,
        cuenca: "Avenida de los Volcanes / Cabeceras del Pastaza y Guayas",
        amenaza: "Concesiones mineras en páramos volcánicos y proyectos geotérmicos en territorios indígenas",
        comunidades: "Pueblos Kichwa Kayambi, Otavalo, Panzaleo y Salasaka",
        texto: "La cordillera volcánica es venerada como 'Mama Cotopaxi' y 'Taita Imbabura'. Los pueblos andinos defienden que los páramos y termas no sean entregados a transnacionales mineras.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 68,
        nombre: "Morococha & Complejo Metalúrgico de La Oroya",
        estado: "Junín",
        pais: "Perú",
        lat: -11.52, lng: -75.90,
        cuenca: "Cuenca del Río Mantaro (Amazonas)",
        amenaza: "El lugar más contaminado de América: 99% de los niños con plomo en sangre",
        comunidades: "Movimiento de Salud de La Oroya (MOSAO)",
        texto: "La fundición de Doe Run y las minas de Morococha convirtieron a La Oroya en una de las 10 ciudades más contaminadas del planeta, vertiendo arsénico, plomo y dióxido de azufre al río Mantaro.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 69,
        nombre: "Cuenca del Río Rímac (Lima)",
        estado: "Lima",
        pais: "Perú",
        lat: -11.95, lng: -76.70,
        cuenca: "Río Rímac (El río 'Hablador')",
        amenaza: "Pasivos mineros en San Mateo, relaves y aguas residuales para 10 millones de personas",
        comunidades: "Comunidades altoandinas de Huarochirí y población de Lima",
        texto: "El río que da de beber al segundo desierto más poblado del mundo después de El Cairo. Sus nacientes están sitiadas por relaveras mineras inestables en zona sísmica de alto riesgo.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 70,
        nombre: "Huaytará",
        estado: "Huancavelica",
        pais: "Perú",
        lat: -13.60, lng: -75.35,
        cuenca: "Río San Juan / Vertiente del Pacífico",
        amenaza: "Pobreza hídrica en comunidades quechuas frente a desvíos mineros",
        comunidades: "Comunidades campesinas quechuas de Huaytará",
        texto: "Huancavelica es uno de los departamentos con más fuentes de agua y al mismo tiempo con mayor pobreza. Las comunidades cuidan sus lagunas altoandinas del avance minero.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 71,
        nombre: "Puno & Lago Titicaca",
        estado: "Puno",
        pais: "Perú",
        lat: -15.84, lng: -70.02,
        cuenca: "Cuenca endorreica del Lago Titicaca / Río Coata",
        amenaza: "Contaminación con metales pesados por minería en Juliaca y Coata",
        comunidades: "Pueblos Originarios Quechua y Aymara de la Cuenca del Coata",
        texto: "El lago navegable más alto del mundo, cuna sagrada de los fundadores del imperio inca. Las aguas del río Coata bajan con arsénico y mercurio, llevando a huelgas y movilizaciones aymaras.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 72,
        nombre: "Valle de Locumba (Ilo)",
        estado: "Tacna / Moquegua",
        pais: "Perú",
        lat: -17.61, lng: -70.76,
        cuenca: "Río Locumba",
        amenaza: "Efluentes de la megaminería de cobre de Southern Copper (Toquepala)",
        comunidades: "Agricultores de Locumba y población de Ilo",
        texto: "Histórica disputa por el agua en el desierto costero: durante décadas los relaves mineros de Toquepala fueron arrojados al mar y contaminaron las aguas agrícolas del valle.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 73,
        nombre: "Tacna (Sama, Quebrada de la Yarada, Amopaya, Inclán)",
        estado: "Tacna",
        pais: "Perú",
        lat: -18.01, lng: -70.25,
        cuenca: "Río Caplina / Acuífero La Yarada",
        amenaza: "Salinización crítica del acuífero e intrusión marina por sobreexplotación",
        comunidades: "Agricultores de olivos de La Yarada-Los Palos",
        texto: "La zona olivarera más grande de Perú bombea agua del acuífero más allá de su capacidad de recarga, lo que ha provocado que el mar penetre en los pozos de riego.",
        imagen: "assets/red_luchas_abya_yala.png"
    },

    // =============================================================
    // CONO SUR, CHILE, BOLIVIA, ARGENTINA & BRASIL (PUNTOS 74 AL 94)
    // =============================================================
    {
        num: 74,
        nombre: "Valles de Lluta & Azapa (Arica)",
        estado: "Región de Arica y Parinacota",
        pais: "Chile",
        lat: -18.47, lng: -70.30,
        cuenca: "Río Lluta / Río San José de Azapa",
        amenaza: "Presencia extrema de boro y arsénico natural más contaminación de agroquímicos",
        comunidades: "Pueblo tribal afrodescendiente chileno y comunidades aymaras",
        texto: "Oasis agrícolas en el desierto hiperárido de Atacama. El río Lluta nace en el volcán Tacora y transporta niveles récord de boro que solo el maíz ancestral lluteño tolera.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 75,
        nombre: "Quebrada de Camarones",
        estado: "Región de Arica y Parinacota",
        pais: "Chile",
        lat: -19.01, lng: -70.28,
        cuenca: "Río Camarones",
        amenaza: "Escasez hídrica aguda y proyectos mineros en la precordillera",
        comunidades: "Comunidades de la Cultura Chinchorro milenaria",
        texto: "Cuna de las momias más antiguas de la humanidad (Cultura Chinchorro, 7.000 años de antigüedad). Sus habitantes prehistóricos ya presentaban arsenicismo por beber de este río.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 76,
        nombre: "Cuenca del Río Loa (Desierto de Atacama)",
        estado: "Región de Antofagasta",
        pais: "Chile",
        lat: -22.45, lng: -68.92,
        cuenca: "Río Loa (El río más largo de Chile, 440 km)",
        amenaza: "Saqueo hídrico por la megaminería de cobre (Chuquicamata) y extracción de litio",
        comunidades: "Pueblos Lickanantay (Atacameños) y Quechua de Ollagüe y Chiu Chiu",
        texto: "El único río que cruza el desierto más seco de la Tierra fue secado en sus afluentes como el río San Salvador para enfriar las fundiciones de cobre de Codelco.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 77,
        nombre: "Géiseres de El Tatio",
        estado: "Región de Antofagasta",
        pais: "Chile",
        lat: -22.33, lng: -68.01,
        cuenca: "Alto Loa / Salar de Atacama",
        amenaza: "El desastre geotérmico de 2009 por perforación de Geotérmica del Norte",
        comunidades: "Pueblo Atacameño de Caspana y Toconce",
        texto: "En 2009 una perforación exploratoria descontrolada reventó una fumarola artificial de 60 metros que dañó el campo de géiseres sagrado más alto del planeta (4.300 msnm).",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 78,
        nombre: "Coquimbo & Valle del Elqui",
        estado: "Región de Coquimbo",
        pais: "Chile",
        lat: -29.95, lng: -70.58,
        cuenca: "Río Elqui / Río Claro",
        amenaza: "Megaproyecto minero Pascua Lama en glaciares de cabecera y sequía extrema",
        comunidades: "Comunidades Diaguitas del Valle del Huasco y regantes del Elqui",
        texto: "Histórica victoria socioambiental: la resistencia diaguita y campesina logró la clausura definitiva del proyecto transfronterizo de Barrick Gold por destruir los glaciares milenarios.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 79,
        nombre: "Cuenca del Río Maipo (Santiago de Chile)",
        estado: "Región Metropolitana",
        pais: "Chile",
        lat: -33.60, lng: -70.40,
        cuenca: "Río Maipo / Cajón del Maipo",
        amenaza: "Proyecto Hidroeléctrico Alto Maipo y privatización del agua bajo el Código de Aguas",
        comunidades: "Coordinadora Ciudadana No a Alto Maipo",
        texto: "El río Maipo provee el 80% del agua potable a los 7 millones de habitantes de Santiago. El proyecto entubó los ríos de cordillera dentro de 70 km de túneles en roca viva.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 80,
        nombre: "El Alto & La Paz (Guerra del Agua)",
        estado: "La Paz",
        pais: "Bolivia",
        lat: -16.50, lng: -68.16,
        cuenca: "Cuenca del Río Choqueyapu / Vertiente Altiplánica",
        amenaza: "Retroceso glaciar del Chacaltaya / Huayna Potosí y privatización (Aguas del Illimani)",
        comunidades: "Federación de Juntas Vecinales (FEJUVE) de El Alto",
        texto: "En 2005 la movilización alteña expulsó a la trasnacional francesa Suez. Hoy la ciudad enfrenta el desafío del cambio climático con la desaparición de los glaciares andinos que alimentan sus represas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 81,
        nombre: "Oruro & Cuenca Minera del Desaguadero",
        estado: "Oruro",
        pais: "Bolivia",
        lat: -17.96, lng: -67.11,
        cuenca: "Río Desaguadero (Conexión Titicaca - Poopó)",
        amenaza: "Drenaje ácido de cientos de minas activas y abandonadas sobre el río",
        comunidades: "Coordinadora en Defensa del Río Desaguadero y Lagos Uru Uru y Poopó (CORIDUP)",
        texto: "Comunidades campesinas originarias que han marchado cientos de kilómetros exigiendo que las cooperativas y multinacionales mineras no viertan arsénico y sulfatos a los humedales altiplánicos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 82,
        nombre: "Desecación del Lago Poopó",
        estado: "Oruro",
        pais: "Bolivia",
        lat: -18.70, lng: -67.05,
        cuenca: "Cuenca cerrada del Lago Poopó",
        amenaza: "Desaparición total del segundo lago más grande de Bolivia en 2015",
        comunidades: "Pueblo Indígena Uru-Chipaya ('Hombres del Agua')",
        texto: "Tragedia ecológica mundial: el lago Poopó (sitio Ramsar de 3.000 km²) se evaporó y convirtió en un desierto de salitre por el desvío del río Desaguadero para riego y minería.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 83,
        nombre: "Norte de Potosí (Amayapampa & Llallagua)",
        estado: "Potosí",
        pais: "Bolivia",
        lat: -18.42, lng: -66.58,
        cuenca: "Cuenca del Río Chayanta",
        amenaza: "Conflictos mineros históricos de estaño y oro con contaminación de bofedales",
        comunidades: "Ayllus guerreros del Norte de Potosí",
        texto: "Territorio de comunidades originarias que exigen que la extracción de estaño y oro respete los bofedales de alta montaña de donde pastan sus llamas y alpacas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 84,
        nombre: "Cuenca Alta del Río Pilcomayo",
        estado: "Potosí / Chuquisaca / Tarija",
        pais: "Bolivia",
        lat: -19.58, lng: -65.75,
        cuenca: "Río Pilcomayo (Cuenca del Plata)",
        amenaza: "Rotura de diques de colas mineras en Potosí (Agua Dulce 2022)",
        comunidades: "Pueblos Weenhayek y Guaraní de la cuenca baja",
        texto: "Las colas de sulfuros del Cerro Rico de Potosí se rompen periódicamente y bajan miles de toneladas de plomo y lodos tóxicos por todo el río hasta el Chaco argentino y paraguayo.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 85,
        nombre: "Lípez & Salar de Uyuni",
        estado: "Potosí",
        pais: "Bolivia",
        lat: -20.50, lng: -67.50,
        cuenca: "Salar de Uyuni / Lagunas Colorada y Verde",
        amenaza: "Evaporación de millones de litros de salmuera para la fiebre del litio",
        comunidades: "Comunidades campesinas quechuas y aymaras de Lípez",
        texto: "La mayor reserva de litio del mundo. La técnica de evaporación en piscinas gigantes amenaza con quebrar el equilibrio hídrico subterráneo de los humedales altoandinos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 86,
        nombre: "San Antonio de los Cobres & Salares Altoandinos",
        estado: "Salta / Jujuy / Catamarca",
        pais: "Argentina",
        lat: -24.22, lng: -66.32,
        cuenca: "Salar de Atacama / Salar de Salinas Grandes y Hombre Muerto",
        amenaza: "Minería de litio que succiona millones de litros de agua dulce fósil al día",
        comunidades: "Pueblo Kolla y Comunidades de Salinas Grandes y Laguna de Guayatayoc",
        texto: "'El agua vale más que el litio'. Más de 30 comunidades originarias han ganado fallos y cortes de ruta exigiendo que no se toquen los salares que son fuentes de vida en la Puna.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 87,
        nombre: "Llanura Chaqueña (Deforestación & Acuíferos)",
        estado: "Chaco / Santiago del Estero / Formosa",
        pais: "Argentina",
        lat: -26.80, lng: -60.80,
        cuenca: "Río Bermejo / Río Pilcomayo",
        amenaza: "Fumigaciones masivas con glifosato y desmonte para soja transgénica",
        comunidades: "Pueblos Originarios Qom, Wichí y Moqoit",
        texto: "El avance de la frontera agrícola sojera en el Gran Chaco ha arrasado millones de hectáreas de bosque nativo, secando pozos de agua y envenenando las aguadas con agrotóxicos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 88,
        nombre: "Llanura Pampeana & Cuenca del Paraná",
        estado: "Buenos Aires / Santa Fe / Córdoba",
        pais: "Argentina",
        lat: -34.00, lng: -60.50,
        cuenca: "Río Paraná / Cuenca del Plata",
        amenaza: "Contaminación por agrotóxicos y bajantes históricas del Río Paraná",
        comunidades: "Poblaciones fumigadas de la Pampa y pescadores artesanales",
        texto: "El río Paraná sufrió entre 2020 y 2022 la bajante histórica más grave en 70 años, exacerbada por los incendios intencionales en el Delta para ganadería en las islas.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 89,
        nombre: "Copahue (Área Geotérmica y Volcánica)",
        estado: "Neuquén",
        pais: "Argentina",
        lat: -37.85, lng: -71.10,
        cuenca: "Río Agrio / Cuenca del Río Negro",
        amenaza: "Proyectos geotérmicos en territorios sagrados Mapuche",
        comunidades: "Comunidad Mapuche Millaín Currical de Loncopué",
        texto: "Loncopué se convirtió en el primer municipio de Argentina en prohibir la megaminería y proyectos extractivos mediante un referéndum popular vinculante con más del 82% de los votos.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 90,
        nombre: "Garayalde & Camarones (Meseta de Chubut)",
        estado: "Chubut",
        pais: "Argentina",
        lat: -44.80, lng: -65.70,
        cuenca: "Río Chubut / Cuenca de la Meseta Central",
        amenaza: "Proyecto de megaminería de plata Navidad (Pan American Silver)",
        comunidades: "Asamblea del Pueblo de Chubut y Comunidad Mapuche-Tehuelche",
        texto: "'Chubutaguazo' histórico: en 2021 la movilización popular masiva forzó la derogación de la ley minera aprobada entre gallos y medianoche, defendiendo el Río Chubut hasta las últimas consecuencias.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 91,
        nombre: "Departamento de San José (Río Santa Lucía)",
        estado: "San José / Canelones",
        pais: "Uruguay",
        lat: -34.34, lng: -56.71,
        cuenca: "Río Santa Lucía (Fuente de agua potable de Montevideo)",
        amenaza: "Crisis del agua salada de 2023 y proyecto privatizador Neptuno en Arazatí",
        comunidades: "Comisión Nacional en Defensa del Agua y la Vida",
        texto: "En 2023 el área metropolitana de Montevideo se quedó sin agua dulce por sequía y tuvo que beber agua salada del Río de la Plata. La ciudadanía rechaza el proyecto de toma de agua de Arazatí.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 92,
        nombre: "Nova Lima (Minas Gerais)",
        estado: "Minas Gerais",
        pais: "Brasil",
        lat: -19.98, lng: -43.85,
        cuenca: "Río das Velhas / Cuenca del Río São Francisco",
        amenaza: "Presas de relaves mineros de hierro en riesgo inminente de colapso",
        comunidades: "Movimento dos Atingidos por Barragens (MAB)",
        texto: "Zona de altísima densidad de presas de relaves de hierro gigantescas propiedad de Vale S.A., que mantienen a comunidades enteras en zozobra permanente de evacuación.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 93,
        nombre: "Santa Bárbara (Serra do Caraça)",
        estado: "Minas Gerais",
        pais: "Brasil",
        lat: -19.95, lng: -43.41,
        cuenca: "Río Piracicaba / Cuenca del Río Doce",
        amenaza: "Destrucción de sierras de recarga acuífera por minería de hierro",
        comunidades: "Comunidades del Quadrilátero Ferrífero",
        texto: "El corazón del hierro en Brasil. Las montañas que actúan como castillos de agua dulce son rebanadas para exportar mineral bruto a China, dejando los valles sin manantiales.",
        imagen: "assets/red_luchas_abya_yala.png"
    },
    {
        num: 94,
        nombre: "Mariana / Bento Rodrigues (Desastre del Río Doce)",
        estado: "Minas Gerais / Espírito Santo",
        pais: "Brasil",
        lat: -20.37, lng: -43.41,
        cuenca: "Río Doce (650 km hasta el Océano Atlántico)",
        amenaza: "El mayor desastre ambiental en la historia de Brasil (Ruptura de presa de Fundão)",
        comunidades: "Pueblo Krenak y comunidades ribereñas de todo el Río Doce",
        texto: "En 2015, la presa de relaves de Samarco (Vale y BHP) colapsó arrojando 60 millones de metros cúbicos de lodo tóxico. Mató a 19 personas y aniquiló por completo el sagrado 'Watu' (Río Doce) para el pueblo Krenak.",
        imagen: "assets/red_luchas_abya_yala.png"
    }
];

// Clase gestora con persistencia en localStorage para permitir ediciones comunitarias
class Luchas94Store {
    constructor() {
        this.storageKey = "abya_yala_luchas_user_db_v1";
        this.nodes = this.loadData();
    }

    loadData() {
        let userEdits = {};
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) userEdits = JSON.parse(raw);
        } catch (e) {
            console.warn("No se pudo leer localStorage:", e);
        }

        return LUCHAS_94_DATA_RAW.map(item => {
            const override = userEdits[item.num] || {};
            const merged = { ...item, ...override };

            // Proyección Web Mercator continua
            const proj = SatelliteTileEngine.project(merged.lat, merged.lng);
            merged.x = proj.x;
            merged.y = proj.y;
            return merged;
        });
    }

    getNodeByNum(num) {
        return this.nodes.find(n => n.num === parseInt(num));
    }

    saveNodeEdit(num, updatedFields) {
        let userEdits = {};
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) userEdits = JSON.parse(raw);
        } catch (e) {}

        userEdits[num] = {
            ...(userEdits[num] || {}),
            ...updatedFields,
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(this.storageKey, JSON.stringify(userEdits));
        } catch (e) {
            console.error("Error guardando en localStorage:", e);
        }

        // Recargar nodos en memoria
        this.nodes = this.loadData();
        return this.getNodeByNum(num);
    }

    exportJSON() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.nodes, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "abya_yala_luchas_agua_94.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }
}
