/* =========================================================
   BASE DE DATOS
   Un solo array con TODOS los proyectos. Cada objeto tiene
   siempre la misma forma:

     video   -> ruta del .mp4, o null si todavía no tiene.
                Es el campo que marca al proyecto como "selected":
                si tiene video va al bento, si no, solo al archivo.
     poster  -> el frame que se ve mientras el video carga.
     tamano  -> cómo ocupa el bento: "feature" (2x2), "wide" (2x1)
                o "" (1x1). Solo importa si tiene video.

   OJO con el orden: define a la vez el orden del archivo Y cómo
   se acomodan los tiles en el bento (ver nota en renderBento).
   ========================================================= */

const proyectos = [

    /* ---------- Con video (van al bento y al archivo) ---------- */

    {
        anio: "2026",
        titulo: "Nescafé — World Cups",
        tipo: "Advertisement",
        rol: "2nd Prod. Assist",
        productora: "Argentina Cine",
        video: "resources/media/nescafe.mp4",
        poster: "resources/media/nescafe_img.jpg",
        tamano: ""
    },
    {
        anio: "2024",
        titulo: "WOS — Melancolía",
        tipo: "Music Video",
        rol: "1st Prod. Assist",
        productora: "Poster Films",
        video: "resources/media/wos.mp4",
        poster: "resources/media/wos_img.jpg",
        tamano: "feature"
    },
    {
        anio: "2024",
        titulo: "AXE x Bizarrap",
        tipo: "Advertisement",
        rol: "2nd Prod. Assist",
        productora: "Labhouse",
        video: "resources/media/axebiza.mp4",
        poster: "resources/media/axebiza_img.jpg",
        tamano: ""
    },
    {
        anio: "2024",
        titulo: "Julieta Venegas & Marca Registrada — Andar Conmigo",
        tipo: "Music Video",
        rol: "1st Prod. Assist",
        productora: "Poster Films",
        video: "resources/media/julietavenegas.mp4",
        poster: "resources/media/julietavenegas_img.jpg",
        tamano: ""
    },
    {
        anio: "2023",
        titulo: "El Encargado (Temp. 3)",
        tipo: "TV Series",
        rol: "2nd Prod. Assist",
        productora: "Pampa Films",
        video: "resources/media/elencargado3.mp4",
        poster: "resources/media/elencargado3_img.jpg",
        tamano: ""
    },
    {
        anio: "2023",
        titulo: "Amazon — Springtime Yeti",
        tipo: "Global Commercial",
        rol: "2nd Prod. Assist",
        productora: "Argentina Cine",
        video: "resources/media/yeti.mp4",
        poster: "resources/media/yeti_img.jpg",
        tamano: "wide"
    },
    {
        anio: "2023",
        titulo: "Snapchat",
        tipo: "Global Commercial",
        rol: "2nd Prod. Assist",
        productora: "Primo Content",
        video: "resources/media/snapchat.mp4",
        poster: "resources/media/snapchat_img.jpg",
        tamano: ""
    },
    {
        anio: "2022",
        titulo: "McDonald's x Ángel Di María",
        tipo: "Advertisement",
        rol: "2nd Prod. Assist",
        productora: "Argentina Cine",
        video: "resources/media/mcdonalds.mp4",
        poster: "resources/media/mcdonalds_img.jpg",
        tamano: ""
    },
    {
        anio: "2022",
        titulo: "Quilmes — Coincidencias (Mundial)",
        tipo: "Advertisement",
        rol: "2nd Prod. Assist",
        productora: "Argentina Cine",
        video: "resources/media/quilmes.mp4",
        poster: "resources/media/quilmes_img.jpg",
        tamano: ""

    },
    {
        // el único que no es 16:9 (1540x720), por eso va en un tile ancho
        anio: "2022",
        titulo: "Peroni Capri",
        tipo: "Global Commercial",
        rol: "2nd Prod. Assist",
        productora: "Argentina Cine",
        video: "resources/media/peroni.mp4",
        poster: "resources/media/peroni_img.jpg",
        tamano: "wide"
    },
    {
        anio: "2021",
        titulo: "Night Sky",
        tipo: "Amazon Prime Series",
        rol: "Prod. Runner",
        productora: "100 Bares",
        video: "resources/media/nightsky.mp4",
        poster: "resources/media/nightsky_img.jpg",
        tamano: ""
    },

    /* ---------- Solo créditos (van solo al archivo) ---------- */
    { anio: "2026", titulo: "La Morenita", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Parda Filma", video: null, poster: null, tamano: "" },
    { anio: "2026", titulo: "Opill", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2026", titulo: "Cologuard (Brutally Honest / Novela)", tipo: "Advertisement", rol: "Asistente de Producción", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2026", titulo: "NOBLEX", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2026", titulo: "KOTEX — Own Your Flow", tipo: "Advertisement", rol: "1st Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },


    { anio: "2025", titulo: "Volkswagen Taos", tipo: "Advertisement", rol: "Asistente de Producción", productora: "Landia", video: null, poster: null, tamano: "" },
    { anio: "2025", titulo: "Converse x Khea — Love, Chuck", tipo: "Advertisement", rol: "Asistente de Producción", productora: "Not Normal", video: null, poster: null, tamano: "" },
    { anio: "2025", titulo: "Naldo", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "CQN", video: null, poster: null, tamano: "" },
    { anio: "2025", titulo: "Magistral", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Not Normal", video: null, poster: null, tamano: "" },
    { anio: "2025", titulo: "Coca Cola", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },



    { anio: "2024", titulo: "Lenny Kravitz — Global Documentary", tipo: "Documentary", rol: "2nd Prod. Assist", productora: "Labhouse", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Ecolab", tipo: "Advertisement", rol: "Asistente de Producción", productora: "TRONCO", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "KFC", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Not Normal", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Unipox", tipo: "Advertisement", rol: "1st Prod. Assist", productora: "Not Normal", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "MACMA", tipo: "Advertisement", rol: "1st Prod. Assist", productora: "Poster Films", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Ca7riel & Paco Amoroso — Baño María Visualizers", tipo: "Music Video", rol: "Production Assist", productora: "Poster Films", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Personal", tipo: "Advertisement", rol: "1st Prod. Assist", productora: "Poster Films", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Ritz", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "DoorDash", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2024", titulo: "Michelob Ultra", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },



    { anio: "2023", titulo: "YPF Libertador", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "La casa de al lado", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "HP", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "Stella Artois", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "Bizarrap Spot Velez", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "The Movement", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "COX", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "The Force ", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "La Doble", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "Branca", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "2020Films", video: null, poster: null, tamano: "" },
    { anio: "2023", titulo: "YPF INFINIA ", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Virgen Films", video: null, poster: null, tamano: "" },


    { anio: "2022", titulo: "Burger King", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Adidas", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "New Cycle", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "HBO", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Krafton", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Visa", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Oruga Films", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Unicenter", tipo: "Advertisement", rol: "2nd Prod. Assist", productora: "Oruga Films", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Novavax", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Argentina Cine", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Lemon Card", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "Castadiva", video: null, poster: null, tamano: "" },
    { anio: "2022", titulo: "Sernova", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "Castadiva", video: null, poster: null, tamano: "" },


    { anio: "2021", titulo: "Actron", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Oruga Films", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "Matarazzo", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Oruga Films", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "ATMA", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "Landia", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "Clorox", tipo: "Advertisement", rol: "Ayudante de Producción", productora: "Landia", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "McDonald's x Sebastian Yatra", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "Landia", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "ANK", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "Rebolucion", video: null, poster: null, tamano: "" },
    { anio: "2021", titulo: "Yogurisimo", tipo: "Advertisement", rol: "Aprendiz de Producción", productora: "La Doble", video: null, poster: null, tamano: "" },

];


/* =========================================================
   ORDEN POR AÑO
   Los dos renders leen de acá, no del array de arriba.

   [...proyectos] hace una COPIA. sort() reordena el array que toca,
   y no queremos desordenar el que escribiste a mano.

   Number(b.anio) - Number(a.anio) da un número: negativo, cero o
   positivo. Eso es lo único que sort() mira para decidir quién va
   antes. Con la b primero, ordena de mayor a menor (2026 arriba).

   Y como sort() es estable, los que empatan en el año quedan en el
   mismo orden en que los escribiste: de principio a fin de año.
   ========================================================= */

const proyectosOrdenados = [...proyectos].sort((a, b) => Number(b.anio) - Number(a.anio));


/* =========================================================
   RENDER 1 · EL BENTO (selected works)
   Solo los proyectos que tienen video.

   Cómo se acomodan: la grilla es de 4 columnas y CSS va ubicando
   cada tile en el primer hueco libre, en el orden del array.
   Con los tamaños de arriba el resultado es:

     fila 1-2 | nescafe | WOS (2x2)      | axebiza      |
              | julieta |                | encargado    |
     fila 3   | yeti (2x1)               | snap | mcdon |
     fila 4   | quilmes | peroni (2x1)          | night |

   Si cambiás un tamaño o el orden, los span tienen que seguir
   cerrando de a 4 por fila o el bento queda con huecos.
   ========================================================= */

/* bentoSlots guarda la GEOMETRÍA (el tamano de cada posición del grid):
   eso es lo que hace que los spans sigan cerrando de a 4 por fila, y no
   se toca nunca. bentoAsignacion guarda qué proyecto vive hoy en cada
   posición: eso es lo único que se intercambia al hacer click. */
let bentoSlots = [];
let bentoAsignacion = [];
let bentoIndiceReproductora = -1;   // el slot "feature" original de WOS: no se mueve

function intercambiarProyectosBento(a, b) {
    const tmp = bentoAsignacion[a];
    bentoAsignacion[a] = bentoAsignacion[b];
    bentoAsignacion[b] = tmp;
}

// muted es obligatorio: ningún navegador deja arrancar solo un video con sonido.
// playsinline evita que iOS lo abra en pantalla completa.
function pintarTileBento(indice) {
    const p = bentoAsignacion[indice];
    const tile = document.querySelector(`#bento .tile[data-indice="${indice}"]`);

    tile.innerHTML = `
        <video autoplay muted loop playsinline preload="metadata" poster="${p.poster}">
            <source src="${p.video}" type="video/mp4">
        </video>

        <div class="tile_base">
            <div class="tile_titulo">${p.titulo}</div>
            <div class="tile_tipo" data-tipo="${p.tipo}">${p.tipo}</div>
        </div>

        <div class="tile_reveal">
            <div class="reveal_titulo">${p.titulo}</div>
            <div class="reveal_meta">
                <div><b data-i18n="campo_anio">Year</b>${p.anio}</div>
                <div><b data-i18n="campo_rol">Role</b><span data-rol="${p.rol}">${p.rol}</span></div>
                <div><b data-i18n="campo_productora">Company</b>${p.productora}</div>
            </div>
        </div>
    `;
}

function renderBento() {
    const contenedor = document.getElementById('bento');

    // filter() devuelve un array nuevo con los que cumplen la condición.
    const conVideo = proyectosOrdenados.filter(p => p.video !== null);

    // la geometría queda fija en el orden original del array (así el bento
    // nunca deja huecos); la asignación es la copia que se va a mezclar.
    bentoSlots = conVideo.map(p => p.tamano);
    bentoAsignacion = [...conVideo];
    bentoIndiceReproductora = bentoSlots.findIndex(t => t === 'feature');

    // Arranque al azar: cada carga de página intercambia la reproductora
    // con un slot cualquiera, para que no sea siempre el mismo proyecto el
    // que abre arriba. Es el mismo mecanismo que un click, solo que el
    // "click" lo dispara la carga de la página en vez del visitante.
    const indiceAzar = Math.floor(Math.random() * bentoAsignacion.length);
    intercambiarProyectosBento(bentoIndiceReproductora, indiceAzar);

    bentoSlots.forEach((tamano, indice) => {
        const tile = document.createElement('div');
        // tamano puede ser "", y ahí la clase queda solo "tile" (1x1)
        tile.className = 'tile ' + tamano;
        tile.dataset.indice = indice;
        contenedor.appendChild(tile);
        pintarTileBento(indice);
    });

    // Delegado en el contenedor y no por tile: los tiles nunca se destruyen
    // (solo se les repinta el innerHTML), así que un solo listener alcanza
    // para toda la vida de la página.
    contenedor.addEventListener('click', (evento) => {
        const tile = evento.target.closest('.tile');
        if (!tile) return;

        const indice = Number(tile.dataset.indice);
        // clickear la reproductora misma no tiene nada para intercambiar
        if (indice === bentoIndiceReproductora) return;

        intercambiarProyectosBento(bentoIndiceReproductora, indice);
        pintarTileBento(bentoIndiceReproductora);
        pintarTileBento(indice);

        // los tiles recién pintados traen data-tipo/data-rol/data-i18n sin
        // traducir: reaplico el idioma activo, igual que hace activarVerMas().
        traducir(idiomaActual);
    });
}


/* =========================================================
   RENDER 2 · EL ARCHIVO (acordeón)
   Todos los proyectos, con o sin video.
   ========================================================= */

function renderArchivo() {
    const contenedor = document.getElementById('archivo_lista');

    // El año más nuevo que exista en la base. Lo saco del primer elemento
    // porque el array ya viene ordenado de mayor a menor, así no hay que
    // venir a cambiar un "2026" escrito a mano cada enero.
    const anioTope = proyectosOrdenados[0].anio;

    proyectosOrdenados.forEach((p, i) => {
        const fila = document.createElement('div');
        // los años más viejos arrancan con la clase 'oculta', que el CSS esconde
        fila.className = p.anio === anioTope ? 'row' : 'row oculta';

        // padStart(2,'0') convierte 1 en "01", 2 en "02", etc.
        const numero = String(i + 1).padStart(2, '0');
        // el año "—" no aporta nada al lado del título, así que no lo mostramos ahí
        const anioVisible = p.anio !== "—" ? p.anio : "";

        fila.innerHTML = `
            <div class="row_head">
                <div class="row_num">${numero}</div>
                <div class="row_titulo">${p.titulo}<span class="row_anio">${anioVisible}</span></div>
                <div class="row_tags"><span data-tipo="${p.tipo}">${p.tipo}</span><span class="row_plus">+</span></div>
            </div>

            <div class="row_body">
                <div class="row_inner">
                    <div class="row_grid">
                        <div class="cell"><div class="cell_label" data-i18n="campo_anio">Year</div><div class="cell_valor">${p.anio}</div></div>
                        <div class="cell"><div class="cell_label" data-i18n="campo_tipo">Type</div><div class="cell_valor" data-tipo="${p.tipo}">${p.tipo}</div></div>
                        <div class="cell"><div class="cell_label" data-i18n="campo_rol">Role</div><div class="cell_valor" data-rol="${p.rol}">${p.rol}</div></div>
                        <div class="cell"><div class="cell_label" data-i18n="campo_productora">Company</div><div class="cell_valor">${p.productora}</div></div>
                    </div>
                </div>
            </div>
        `;

        // Mismo addEventListener de siempre, solo que el elemento lo acaba
        // de crear JS en vez de estar escrito en el HTML.
        fila.querySelector('.row_head').addEventListener('click', () => {
            // ¿esta fila ya estaba abierta? lo pregunto ANTES de cerrar todas
            const estabaAbierta = fila.classList.contains('open');

            // cierro todas: así solo puede haber una abierta a la vez
            document.querySelectorAll('.row.open').forEach(otra => otra.classList.remove('open'));

            // y la abro solo si estaba cerrada (si estaba abierta, el click la cierra)
            if (!estabaAbierta) {
                fila.classList.add('open');
            }
        });

        contenedor.appendChild(fila);
    });
}


/* =========================================================
   VER MÁS · despliega el archivo entero

   Las filas viejas ya están creadas en el DOM, solo con la clase
   'oculta' puesta. El botón no crea ni borra nada: prende y apaga
   una clase en el contenedor, y el CSS decide qué se ve.
   ========================================================= */

function activarVerMas() {
    const contenedor = document.getElementById('archivo_lista');
    const boton = document.getElementById('ver_mas');
    const cuantasFaltan = contenedor.querySelectorAll('.row.oculta').length;

    // si no hay nada escondido el botón no tiene sentido
    if (cuantasFaltan === 0) {
        boton.style.display = 'none';
        return;
    }

    // El texto lleva un número adentro, así que no puede salir tal cual del
    // diccionario. Guardo el conteo en el elemento y traducir() lo mete en
    // el lugar del {n} que trae la frase.
    boton.dataset.cuantas = cuantasFaltan;

    boton.addEventListener('click', () => {
        // toggle() agrega la clase si no está y la saca si está.
        // Devuelve true cuando quedó puesta.
        const desplegado = contenedor.classList.toggle('expandido');

        // no escribo el texto a mano: cambio qué frase le toca y retraduzco,
        // así el botón habla el idioma que esté activo en ese momento
        boton.dataset.i18n = desplegado ? 'ver_menos' : 'ver_mas';
        traducir(idiomaActual);

        // con las 55 filas desplegadas el scroll no termina más: los atajos
        // solo tienen sentido mientras esa lista larga está a la vista.
        document.getElementById('scroll_atajos').classList.toggle('visible', desplegado);
    });

    document.getElementById('scroll_arriba').addEventListener('click', () => {
        document.getElementById('selected_works').scrollIntoView({behavior: 'smooth'});
    });

    document.getElementById('scroll_abajo').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    });
}


/* =========================================================
   SOBRE · ÚLTIMA ACTUALIZACIÓN

   Esta es LA línea a tocar cuando actualices el sitio. Es la única
   fecha escrita a mano en todo el proyecto.
   ========================================================= */

const ULTIMA_ACTUALIZACION = '2026-07-23';   // AAAA-MM-DD

/* La escribo con toLocaleDateString en vez de guardar la frase en los dos
   diccionarios: así "Thursday, 23 July 2026" y "jueves, 23 de julio de 2026"
   salen de la misma constante y no se pueden desincronizar.

   El 'T00:00:00' no es decorativo: sin él, new Date() interpreta la fecha
   como UTC, y en Buenos Aires (UTC-3) eso cae a las 21:00 del día ANTERIOR.
   Mostraría un día menos. */
function completarFecha() {
    const salida = document.getElementById('dato_actualizado');
    if (!salida) return;

    const fecha = new Date(ULTIMA_ACTUALIZACION + 'T00:00:00');

    // en-GB y no en-US: da "Thursday, 23 July 2026" en vez de "Thursday, July 23, 2026"
    salida.textContent = fecha.toLocaleDateString(
        idiomaActual === 'es' ? 'es-AR' : 'en-GB',
        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    );
}


/* Reloj de Buenos Aires. timeZone lo resuelve el navegador, así que
   marca la hora correcta aunque quien mire esté en otro país. */
function arrancarReloj() {
    const salida = document.getElementById('dato_hora');

    function actualizar() {
        salida.textContent = new Date().toLocaleTimeString('es-AR', {
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false        // sin esto sale "09:31 p. m."
        });
    }

    actualizar();
    setInterval(actualizar, 30000);
}


/* =========================================================
   IDIOMA

   Cómo funciona, en una frase: cada texto traducible lleva un
   atributo en el HTML que dice QUÉ frase es, y traducir() recorre
   el documento reemplazando cada uno por la versión del idioma
   elegido. No se vuelve a renderizar nada.

   Eso importa: si en vez de esto volviéramos a llamar a
   renderArchivo(), al cambiar de idioma se cerraría la fila que
   tuvieras abierta y se volvería a dibujar el retrato.

   Hay tres atributos, porque hay tres clases de texto:

     data-i18n  -> texto de la interfaz. La clave la elegimos nosotros.
     data-tipo  -> el campo "tipo" de un proyecto (Commercial, Music Video…)
     data-rol   -> el campo "rol" de un proyecto (2nd Prod. Assist…)

   Los dos últimos van con la clave = el valor exacto que está escrito
   en el array de arriba, así se ve de dónde sale cada uno.
   ========================================================= */

const TEXTOS = {
    en: {
        titulo_pagina: 'Tomas Zamorano — Audiovisual Producer',
        name_nav: 'tomas zamorano',
        nav_link_home: 'Home',
        nav_link_work: 'Work',
        nav_link_about: 'About',
        theme_btn_a_claro: 'not enough light?',
        theme_btn_a_oscuro: 'too much light?',
        open_to_line: 'open to freelance and full time work',

        hero_title: 'audiovisual<br>producer',
        hero_text: 'Resource management, crew coordination and problem-solving on set.<br>For 6 years I have made sure shoots happen on time and on spec, with every department having what it needs.<br>This portfolio is the direct record of the projects I helped bring in.',

        pasarela_publicidad: 'Commercials',
        pasarela_videoclip: 'Music Videos',
        pasarela_largo: 'Features',
        pasarela_tv: 'TV',
        pasarela_eventos: 'Events',
        pasarela_radio: 'Radio',

        selected_label: 'Selected works',
        archive_label: 'Full archive',
        archive_hint: 'Year / Project / Type / Role / Company',
        ver_mas: 'see full archive (+{n})',
        ver_menos: 'see less',

        campo_anio: 'Year',
        campo_tipo: 'Type',
        campo_rol: 'Role',
        campo_productora: 'Company',

        about_titulo: 'About',
        about_p1: 'This archive exists because I made a habit out of taking notes and tracking processes. Over time, I got used to keeping all my records centralized in one place. Having my own database made putting this portfolio together a straightforward process — all the material was already there. That same proactive, organized approach is exactly what I bring to every set.',
        about_p2: 'What you see here isn\'t 100% of my career. Keeping an absolute record of every single project since day one is impossible, and sometimes certain roles just don\'t call for that level of archiving.',
        about_pitch: 'My job is to bring ideas down to earth and make them happen. If you need to structure, budget, or execute your next project, let\'s talk.',

        contacto_titulo: 'Contact',
        contacto_label: 'Contact',
        accion_label: 'Download CV',
        webdev_pregunta: 'Looking for a website like this?',
        webdev_link: 'Web dev portfolio',
        dato_base: 'Base',
        dato_base_v: 'Buenos Aires, Argentina',
        dato_hora: 'Local time',
        dato_actualizado: 'Last update',

        foot_hecho: 'Hand-written site, no frameworks'
    },

    es: {
        titulo_pagina: 'Tomas Zamorano — Productor Audiovisual',
        name_nav: 'tomas zamorano',
        nav_link_home: 'Inicio',
        nav_link_work: 'Trabajos',
        nav_link_about: 'Sobre mí',
        theme_btn_a_claro: '¿poca luz?',
        theme_btn_a_oscuro: '¿demasiada luz?',
        open_to_line: 'disponible para freelance y full time',

        hero_title: 'productor<br>audiovisual',
        hero_text: 'Gestión de recursos, coordinación de equipos y resolución en el set.<br>Hace 6 años me dedico a que los rodajes sucedan en tiempo y forma, asegurando que cada área tenga lo que necesita.<br>Este portfolio es el registro directo de los proyectos que ayudé a concretar.',

        pasarela_publicidad: 'Publicidades',
        pasarela_videoclip: 'Videoclips',
        pasarela_largo: 'Largometrajes',
        pasarela_tv: 'TV',
        pasarela_eventos: 'Eventos',
        pasarela_radio: 'Radio',

        selected_label: 'Trabajos seleccionados',
        archive_label: 'Archivo completo',
        archive_hint: 'Año / Proyecto / Tipo / Rol / Productora',
        ver_mas: 'ver archivo completo (+{n})',
        ver_menos: 'ver menos',

        campo_anio: 'Año',
        campo_tipo: 'Tipo',
        campo_rol: 'Rol',
        campo_productora: 'Productora',

        about_titulo: 'Sobre mí',
        about_p1: 'Este archivo existe porque hice el hábito de tomar notas y registrar procesos. Con el tiempo me acostumbré a tener todos mis registros centralizados en un solo lugar. Tener mi propia base de datos hizo que armar este portfolio fuera un trámite directo: el material ya estaba. Esa misma forma de trabajar, proactiva y ordenada, es la que llevo a cada set.',
        about_p2: 'Lo que ves acá no es el 100% de mi carrera. Llevar un registro absoluto de cada proyecto desde el primer día es imposible, y hay roles que directamente no piden ese nivel de archivo.',
        about_pitch: 'Mi trabajo es bajar las ideas a la tierra y hacer que pasen. Si necesitás estructurar, presupuestar o ejecutar tu próximo proyecto, hablemos.',

        contacto_titulo: 'Contacto',
        contacto_label: 'Contacto',
        accion_label: 'Descargar CV',
        webdev_pregunta: '¿Buscás un sitio como este?',
        webdev_link: 'Mi portfolio de desarrollo',
        dato_base: 'Base',
        dato_base_v: 'Buenos Aires, Argentina',
        dato_hora: 'Hora local',
        dato_actualizado: 'Última actualización',

        foot_hecho: 'Sitio escrito a mano, sin frameworks'
    }
};


/* Los tipos de proyecto. La clave es el texto exacto que está escrito
   en el campo "tipo" del array de arriba. */
const TIPOS = {
    'Advertisement':       { en: 'Advertisement',        es: 'Publicidad' },
    'Global Commercial':   { en: 'Global Commercial',    es: 'Publicidad Global' },
    'Music Video':         { en: 'Music Video',          es: 'Videoclip' },
    'TV Series':           { en: 'TV Series',            es: 'Serie de TV' },
    'Amazon Prime Series': { en: 'Amazon Prime Series',  es: 'Serie de Amazon Prime' },
    'Documentary':         { en: 'Documentary',          es: 'Documental' }
};

/* Los roles.

   Acá pasan DOS cosas a la vez, y conviene tenerlas separadas:

   1) En el array de arriba el mismo puesto está escrito de varias
      formas distintas, en los dos idiomas. "Ayudante de Producción" y
      "2nd Prod. Assist" NO son dos puestos: son el mismo, nombrado en
      castellano y en inglés. Lo mismo "Asistente de Producción" y
      "1st Prod. Assist".

   2) Por eso varias claves apuntan al MISMO par de traducciones. Eso
      es a propósito: la clave es lo que vos escribiste en el proyecto,
      el par es lo que se muestra. Así podés seguir cargando proyectos
      con la palabra que te salga, y el sitio igual habla un solo idioma.

   La escalera tiene tres escalones, y a cada uno le llegan varias
   formas de escribirlo:

      Runner  ->  Ayudante (PA)  ->  Asistente (Key PA)

   En inglés los puestos se nombran como se los nombra en el rubro
   ("PA", "Key PA"), no con la traducción literal del castellano.     */
const ROLES = {

    'Aprendiz de Producción':        { en: 'Production Runner',  es: 'Runner de Producción' },
    'Prod. Runner':                  { en: 'Production Runner',  es: 'Runner de Producción' },

    'Ayudante de Producción':        { en: 'PA',                 es: 'Ayudante de Producción' },
    '2nd Prod. Assist':              { en: 'PA',                 es: 'Ayudante de Producción' },

    // primer asistente. El "(PA)" de KOTEX es la misma tarea, así que
    // la aclaración no se muestra
    'Asistente de Producción':       { en: 'Key PA',             es: 'Asistente de Producción' },
    '1st Prod. Assist':              { en: 'Key PA',             es: 'Asistente de Producción' },
    'Production Assist':             { en: 'Key PA',             es: 'Asistente de Producción' },
    'Asistente de Producción (PA)':  { en: 'Key PA',             es: 'Asistente de Producción' },

    // genérico, sin proyectos hoy. Queda por si algún día cargás uno
    // con el puesto todavía sin precisar, para que no salga sin traducir
    'Producción':                    { en: 'Production',         es: 'Producción' }
};


let idiomaActual = 'en';   // el default es inglés


function traducir(idioma) {
    const diccionario = TEXTOS[idioma];
    if (!diccionario) return;

    idiomaActual = idioma;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        let texto = diccionario[el.dataset.i18n];
        if (texto === undefined) return;

        // las frases con número traen {n} y {p} como huecos a rellenar
        if (el.dataset.cuantas !== undefined) texto = texto.replace('{n}', el.dataset.cuantas);

        // Uso innerHTML porque algunas frases traen un <br> o un &amp;.
        // Es seguro acá porque estos textos los escribimos nosotros en este
        // archivo; si vinieran de un usuario habría que usar textContent.
        el.innerHTML = texto;
    });

    document.querySelectorAll('[data-tipo]').forEach(el => {
        const par = TIPOS[el.dataset.tipo];
        if (par) el.textContent = par[idioma];
    });

    document.querySelectorAll('[data-rol]').forEach(el => {
        const par = ROLES[el.dataset.rol];
        if (par) el.textContent = par[idioma];
    });

    // la fecha se arma aparte: no es una frase del diccionario, es una
    // constante formateada según el idioma que acaba de quedar activo
    completarFecha();

    // que el atributo lang diga la verdad: de eso dependen el corrector
    // ortográfico, los lectores de pantalla y el partido de sílabas
    document.documentElement.lang = idioma;

    // el link activo del switch [en] | [es]
    document.getElementById('btn_en').className = idioma === 'en' ? 'nav_link_active' : 'nav_link';
    document.getElementById('btn_es').className = idioma === 'es' ? 'nav_link_active' : 'nav_link';

    localStorage.setItem('idioma', idioma);
}


function arrancarIdioma() {
    // si ya eligió antes, respeto esa elección; si no, inglés
    const guardado = localStorage.getItem('idioma');
    traducir(guardado === 'es' || guardado === 'en' ? guardado : 'en');

    document.getElementById('btn_en').addEventListener('click', () => traducir('en'));
    document.getElementById('btn_es').addEventListener('click', () => traducir('es'));
}


/* ---------- tema claro / oscuro ---------- */

// Pinta la página entera de un tema. Todo el trabajo de color lo hace el CSS:
// acá lo único que pasa es que el <html> gana o pierde data-tema="claro", y
// styles.css tiene un bloque :root[data-tema="claro"] que le da otros valores
// a las mismas variables. Sin atributo = tema oscuro, que es el de :root a secas.
function aplicarTema(tema) {
    const esClaro = tema === 'claro';

    if (esClaro) {
        document.documentElement.setAttribute('data-tema', 'claro');
    } else {
        document.documentElement.removeAttribute('data-tema');
    }

    // El botón ofrece siempre el tema CONTRARIO al que se está viendo.
    // No le escribo el texto a mano: le cambio la clave de traducción y
    // dejo que traducir() la escriba en el idioma que esté activo. Si acá
    // pusiera textContent, el texto quedaría clavado al apretar [en]/[es].
    const boton = document.getElementById('theme_btn');
    boton.dataset.i18n = esClaro ? 'theme_btn_a_oscuro' : 'theme_btn_a_claro';
    traducir(idiomaActual);

    localStorage.setItem('tema', tema);
}


function arrancarTema() {
    // si ya eligió antes, respeto esa elección; si no, oscuro (como estaba)
    aplicarTema(localStorage.getItem('tema') === 'claro' ? 'claro' : 'oscuro');

    document.getElementById('theme_btn').addEventListener('click', () => {
        // leo el estado del DOM en vez de guardar una variable aparte:
        // así no hay dos verdades que puedan quedar desincronizadas
        const estabaClaro = document.documentElement.getAttribute('data-tema') === 'claro';
        aplicarTema(estabaClaro ? 'oscuro' : 'claro');
    });
}


/* =========================================================
   PASARELA · animación de entrada
   El HTML arranca con la clase 'cargando' puesta a mano: las dos barras
   (arriba/abajo, ver 04 · PASARELA en styles.css) barren desde los bordes
   hacia adentro. Cuando terminan, esta función cambia a 'cargado', que en
   CSS dispara tres cosas a la vez: el texto aparece, los puntos destellan
   y el carrusel infinito arranca.
   ========================================================= */
function arrancarPasarela() {
    const pasarela = document.querySelector('.pasarela');
    if (!pasarela) return;

    // quien pidió menos movimiento no necesita ver la barrida: salta
    // directo al estado final (CSS ya se encarga de no fundir ni destellar)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pasarela.classList.remove('cargando');
        pasarela.classList.add('cargado');
        return;
    }

    // las dos barras duran lo mismo (ver @keyframes barrer): con que
    // termine una alcanza para saber que la otra también terminó
    const barra = pasarela.querySelector('.pasarela_carga');
    barra.addEventListener('animationend', () => {
        pasarela.classList.remove('cargando');
        pasarela.classList.add('cargado');
    }, { once: true });
}


/* ---------- arranque ---------- */
renderBento();
renderArchivo();
activarVerMas();   // va después de renderArchivo: necesita las filas ya creadas
arrancarPasarela();
arrancarReloj();
// último de todos: traduce el HTML escrito a mano Y lo que acaban de crear
// los renders. Si corriera antes, las filas del archivo todavía no existirían.
arrancarIdioma();
// después de arrancarIdioma: la etiqueta del botón la escribe traducir(),
// que necesita que idiomaActual ya esté decidido
arrancarTema();
