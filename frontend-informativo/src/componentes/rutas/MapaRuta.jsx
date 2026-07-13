function MapaRuta({
  nombre,
  mapaUrl,
  mapaExterno,
  puntosRuta = [],
}) {
  const puntosValidos = Array.isArray(puntosRuta)
    ? puntosRuta.filter(Boolean)
    : []

  return (
    <aside className="sector-mapa-ruta">
      <div className="cabecera-mapa-ruta">
        <div>
          <p className="etiqueta-mapa">
            Ubicación y recorrido
          </p>

          <h4>Mapa de la ruta</h4>
        </div>

        {mapaExterno && (
          <a
            className="enlace-mapa-externo"
            href={mapaExterno}
            target="_blank"
            rel="noreferrer"
          >
            Abrir mapa
          </a>
        )}
      </div>

      <div className="contenedor-mapa">
        {mapaUrl ? (
          <iframe
            src={mapaUrl}
            title={`Mapa de la ruta ${nombre}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className="mapa-no-disponible">
            <strong>Mapa temporalmente no disponible</strong>

            <p>
              La descripción de la ruta continúa disponible.
            </p>
          </div>
        )}
      </div>

      {puntosValidos.length > 0 && (
        <div className="trayecto-ruta">
          <p className="titulo-trayecto">
            Puntos principales
          </p>

          <ol>
            {puntosValidos.map((punto, indice) => (
              <li key={punto.id ?? indice}>
                <span className="numero-punto">
                  {String(indice + 1).padStart(2, '0')}
                </span>

                <div>
                  <strong>{punto.nombre}</strong>

                  <p>{punto.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </aside>
  )
}

export default MapaRuta