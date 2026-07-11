function TarjetaRuta({ ruta }) {
  if (!ruta) {
    return (
      <article className="tarjeta-ruta tarjeta-ruta-error">
        <div className="contenido-tarjeta-ruta">
          <h3>Ruta no disponible</h3>

          <p>
            No fue posible cargar la información de esta ruta.
          </p>
        </div>
      </article>
    )
  }

  const {
    nombre = 'Ruta turística',
    tipo = 'Información pendiente',
    duracion = 'Duración pendiente',
    descripcion = 'La descripción de esta ruta estará disponible próximamente.',
    etiqueta = 'Turismo',
    tieneRecorrido360 = false,
  } = ruta

  return (
    <article className="tarjeta-ruta">
      <div className="imagen-ruta-simulada">
        <span>{etiqueta}</span>
      </div>

      <div className="contenido-tarjeta-ruta">
        <div className="datos-rapidos-ruta">
          <span>{tipo}</span>
          <span>{duracion}</span>
        </div>

        <h3>{nombre}</h3>

        <p>{descripcion}</p>

        <div className="acciones-ruta">
          <a
            className="boton boton-secundario"
            href="#contacto"
          >
            Solicitar información
          </a>

          {tieneRecorrido360 && (
            <a
              className="enlace-recorrido"
              href="/inmersivo/"
              target="_blank"
              rel="noreferrer"
            >
              Ver 360°
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default TarjetaRuta