# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences read the same page, in this order of commercial weight:

1. **Productoras y jefes de producción** contratando para un rodaje concreto. Llegan con una fecha y un presupuesto, escanean en menos de un minuto buscando: ¿trabajó en producciones de esta escala? ¿con estas marcas? ¿está libre? Deciden por track record verificable, no por narrativa.
2. **Marcas y agencias** evaluando production services en Argentina para una campaña internacional. Buscan señales de que el operador entiende estándares globales.

Ambos suelen llegar desde un contacto o un mensaje, no desde una búsqueda. La página confirma una decisión ya medio tomada más de lo que la origina.

## Product Purpose

Portfolio de una sola página de Tomás Zamorano, productor audiovisual con base en Buenos Aires. Existe para convertir una recomendación o un contacto frío en una conversación de trabajo.

El éxito es un mail o una descarga de CV. No hay métrica de tiempo en página: si alguien decide en 40 segundos, el sitio funcionó.

## Positioning

**Base formativa en electromecánica y desarrollo de software aplicada a la producción audiovisual.** Un set no se trata como un evento creativo impredecible sino como un sistema con dependencias, cuellos de botella y puntos de falla anticipables.

Esto es lo que un productor vecino no puede copiar honestamente, y es también lo que explica por qué el sitio está escrito a mano y parece la interfaz de una herramienta técnica: la forma del portfolio *es* el argumento.

## Operating Context

- 7 años en producción, desde aprendiz hasta Production Manager.
- 55 proyectos registrados entre 2021 y 2026: publicidad (mayoría), videoclips, series de TV/streaming, documental.
- Productoras: Argentina Cine (Stink), Poster Films, Landia, Labhouse, Not Normal, Oruga Films, Castadiva, Pampa Films, 100 Bares, entre otras.
- Roles reales, en escalera: Runner de Producción → Ayudante de Producción → Asistente de Producción. En inglés, como se los nombra en el rubro: Production Runner → PA → Key PA.

## Capabilities and Constraints

- Vanilla HTML/CSS/JS, sin build, sin framework, sin dependencias. Es una restricción deliberada, no una etapa previa a "profesionalizarlo".
- Se sirve por HTTP (`file://` no funciona).
- Disponible para freelance y full time; trabaja desde Buenos Aires para clientes de cualquier lugar.
- El sitio tiene los `data-i18n` puestos en todo el copy pero **no hay lógica de traducción todavía**. El idioma de trabajo es español.

## Brand Commitments

- Nombre en minúscula: `tomas zamorano`.
- Estética declarada: **estilo suizo internacional / Bauhaus** — grilla estricta, jerarquía tipográfica, cero decoración. El propio usuario nombró como anti-referencia el registro "tech bro".
- Regla editorial que él mismo fijó: **"Menos ruido, más sentido"**. Nada de frases vendedoras tipo "making things happen".
- El CSS del navbar está escrito a mano por él y es intocable, incluidos los nombres de variables en español.

## Evidence on Hand

- **11 loops de video** en `resources/media/`, 1280×720 (peroni.mp4 es 1540×720), con poster JPG cada uno.
- **Retrato**: `C:\Users\tomiz\Desktop\PORTFOLIO AUDIOVISUAL\foto perfil.jpg` — fondo gris claro liso, remera negra. El fondo claro choca con el fondo casi-negro del sitio; resolverlo es un requisito explícito.
- **CV en PDF**: el usuario lo tiene y lo va a poner en el proyecto. Es el CTA principal.
- **Marcas verificables**: Amazon, Snapchat, HBO, McDonald's, Adidas, Visa, Coca Cola, Burger King, KFC, Volkswagen, Converse, Quilmes, Stella Artois, Peroni, KOTEX, Nescafé.
- **Nombres verificables**: Bizarrap, WOS, Ca7riel & Paco Amoroso, Julieta Venegas, Lenny Kravitz, Ángel Di María, Khea, Sebastián Yatra.
- **Títulos verificables**: El Encargado T3 (Pampa Films), Night Sky (Amazon Prime, 100 Bares).
- **No existe todavía**: portfolio tech/UX publicado. El "easter egg" que linkea a él queda fuera hasta que exista — no inventar la URL.
- **Decidido no publicar**: el teléfono. Solo mail (`tomizamorano@gmail.com`).

## Product Principles

1. **La evidencia antes que el adjetivo.** Los nombres de las marcas y los roles reales convencen; los calificativos sobre uno mismo, no.
2. **La forma es el argumento.** Que el sitio esté escrito a mano y funcione con precisión es la demostración de la tesis técnica, no un detalle de implementación.
3. **Escanear, no leer.** El lector decide en menos de un minuto. Todo bloque tiene que rendir en una pasada rápida.
4. **Menos ruido, más sentido.** Ante la duda entre agregar un elemento y sacarlo, se saca.
5. **Nada inventado.** Ni un crédito, ni una marca, ni un link que no exista.

## Accessibility & Inclusion

Sin requisito formal establecido. El sitio es de fondo oscuro y depende fuerte de video en autoplay: respetar `prefers-reduced-motion` es la necesidad concreta conocida.
