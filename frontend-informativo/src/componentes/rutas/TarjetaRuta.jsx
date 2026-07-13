import IconoIncluye from './IconoIncluye'
import MapaRuta from './MapaRuta'

function TarjetaRuta({ ruta }) {
  if (!ruta) {
    return null
  }

  const {
    nombre = 'Ruta turística',
    categoria = 'Turismo',
    modalidad = 'Información pendiente',
    ubicacion = 'Bolivia',
    descripcion = 'La descripción estará disponible próximamente.',
    precio,
    moneda = 'Bs.',
    unidadPrecio = 'por persona',
    imagenPromocional,
    incluye = [],
    puntosRuta = [],
    mapaUrl,
    mapaExterno,
    tieneRecorrido360 = false,
    recorrido360 = '/inmersivo/',
  } = ruta

  const serviciosIncluidos = Array.isArray(incluye)
    ? incluye.filter(Boolean)
    : []

  const precioDisponible =
    precio !== undefined &&
    precio !== null &&
    precio !== ''

  const precioFormateado =
    typeof precio === 'number'
      ? new Intl.NumberFormat('es-BO').format(precio)
      : precio

  const mensajeWhatsApp = encodeURIComponent(
    `Hola, vi la ruta ${nombre} en la página de London Travel y deseo recibir más información.`,
  )

  return (
    <article className="tarjeta-ruta-detallada">
      <header className="cabecera-ruta-detallada">
        <div className="informacion-cabecera-ruta">
          <p className="categoria-ruta">
            {categoria}
          </p>

          <h3>{nombre}</h3>

          <div className="datos-cabecera-ruta">
            <span>{modalidad}</span>
            <span>{ubicacion}</span>
          </div>
        </div>

        {precioDisponible && (
          <div
            className="precio-cabecera-ruta"
            aria-label={`${precioFormateado} ${moneda} ${unidadPrecio}`}
          >
            <img
              src="/imagenes/rutas/precio.png"
              alt=""
              aria-hidden="true"
            />

            <span className="valor-precio-cabecera">
              {precioFormateado}
            </span>
          </div>
        )}
      </header>

      <div className="cuerpo-ruta-detallada">
        <section className="informacion-ruta-detallada">
          <div className="bloque-descripcion-ruta">
            <p className="subtitulo-ruta">
              Descripción de la ruta
            </p>

            <h4>
              Una experiencia organizada para disfrutar desde el
              primer momento
            </h4>

            <p className="descripcion-ruta-completa">
              {descripcion}
            </p>
          </div>

          {imagenPromocional && (
            <figure className="afiche-ruta">
              <img
                src={imagenPromocional}
                alt={`Publicación promocional de ${nombre}`}
                loading="lazy"
                onError={(evento) => {
                  evento.currentTarget.style.display = 'none'
                }}
              />

              <figcaption>
                Publicación promocional de London Travel
              </figcaption>
            </figure>
          )}

          <div className="sector-incluye-ruta">
            <div className="cabecera-incluye">
              <div>
                <p className="subtitulo-ruta">
                  Servicios
                </p>

                <h4>¿Qué incluye la ruta?</h4>
              </div>

              <span className="cantidad-servicios">
                {serviciosIncluidos.length} incluidos
              </span>
            </div>

            <div className="cuadricula-incluye">
              {serviciosIncluidos.map((servicio) => (
                <div
                  className="elemento-incluye"
                  key={servicio.id}
                >
                  <span className="icono-incluye">
                    <IconoIncluye tipo={servicio.tipo} />
                  </span>

                  <span>{servicio.nombre}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="acciones-ruta-detallada">
            {tieneRecorrido360 && (
              <a
                className="boton boton-principal"
                href={recorrido360}
                target="_blank"
                rel="noreferrer"
              >
                Explorar recorrido 360°
              </a>
            )}

            <a
              className="boton boton-secundario"
              href={`https://wa.me/59164210077?text=${mensajeWhatsApp}`}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar información
            </a>
          </div>
        </section>

        <MapaRuta
          nombre={nombre}
          mapaUrl={mapaUrl}
          mapaExterno={mapaExterno}
          puntosRuta={puntosRuta}
        />
      </div>
    </article>
  )
}

export default TarjetaRuta