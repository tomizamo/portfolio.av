# Backlog

Cosas pendientes, en orden de importancia.

## Performance — reproducir solo los videos visibles

**Problema:** todos los tiles del bento arrancan a la vez. Son ~42MB y un decodificador de video por tile corriendo en paralelo. En local no se nota; desde un celular con datos, sí.

**Solución:** un `IntersectionObserver` que reproduzca solo los tiles que están en pantalla y pause el resto. Son ~10 líneas en `main.js`, después de `renderBento()`. El concepto: "avisame cuando este elemento entre o salga de la pantalla".

**Cambio de apoyo:** los `<video>` pasan de `preload="metadata"` a `preload="none"`, así el navegador no descarga nada hasta que hace falta. El `poster` cubre el hueco mientras tanto.

## Loops que faltan

Proyectos que están en la base como solo-créditos, pero que podrían ir al bento cuando tengan el `.mp4`:

- **KOTEX — Own Your Flow** (2026) — el loop estaba anunciado pero todavía no está armado.
- Ca7riel & Paco Amoroso — Baño María
- Lenny Kravitz — Global Documentary
- DoorDash

Para sumarlos: poner el `.mp4` y el `_img.jpg` en `resources/media/`, y en `main.js` completar `video` y `poster`. Ojo con el `tamano`: si se agrega un tile hay que revisar que los span sigan cerrando de a 4 por fila.

## Idioma — lo que quedó sin traducir

El switch `[en] | [es]` ya funciona (default inglés, elección guardada en `localStorage`). Lo que **no** se traduce, a propósito:

- **Títulos de proyecto.** Son nombres propios: `WOS — Melancolía`, `AXE x Bizarrap`. Van igual en los dos idiomas.
- **Productoras.** Ídem: `Argentina Cine (Stink)`, `Poster Films`.

Si algún día agregás un proyecto con un `tipo` o un `rol` que no esté en los diccionarios `TIPOS` / `ROLES` de `main.js`, ese valor va a quedar sin traducir en pantalla, en silencio. Vale la pena revisarlo al cargar proyectos nuevos.

**Los roles quedaron normalizados en 3 escalones:** Runner → Ayudante → Asistente, que en inglés se muestran como el rubro los nombra: Production Runner → PA → Key PA. En el array podés seguir escribiendo el rol como te salga: `ROLES` mapea las 8 formas distintas que ya hay a esos 3. No hace falta que emparejes los datos a mano.

## Bento — título sobre video claro

El título del tile cerrado (`.tile_base`) va directo sobre el video, sin degradado detrás. Con un fotograma muy claro puede costar leerlo. **No es un problema del modo claro** — pasa igual en oscuro, el color del texto es el mismo en los dos temas — pero ahora que existen dos temas conviene tenerlo anotado. Se arregla con un degradado suave abajo del tile, como el que ya tiene el estado hover.

## Datos

- Verificar créditos de **Nescafé — World Cups** (año y productora). El rol ya está: Ayudante de Producción / PA.
- Hay títulos con espacios o paréntesis sueltos al final: `"The Force "`, `"YPF INFINIA "`, `"McDonald's x Sebastian Yatra)"`.

## Sobre / Contacto

- **Link al portfolio tech (easter egg).** Quedó fuera hasta que el sitio de UX/UI exista: un link muerto resta más de lo que suma. Cuando esté publicado, va como una fila más de la hoja de datos.
- **Teléfono.** Decidido no publicarlo; solo mail. Si cambia, entra como fila de la hoja de datos.
- ~~**La tipografía es Space Grotesk**~~ — hecho. Ahora es PP Neue Gstaad en tres cortes (Light / Regular / Bold), servida desde `resources/fonts/`. No queda ninguna fuente de Google.
- **Los `.otf` pesan ~85kB cada uno** y se bajan sin comprimir. Convertirlos a `woff2` los deja en menos de la mitad, pero hoy no hay build que lo haga. Si algún día entra uno, es lo primero para pasar.
