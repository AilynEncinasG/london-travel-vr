import { rutasTuristicas } from '../../datos/rutasIniciales'
import TarjetaRuta from './TarjetaRuta'
import './SeccionRutas.css'

function SeccionRutas() {
  const rutasValidas = Array.isArray(rutasTuristicas)
    ? rutasTuristicas.filter(Boolean)
    : []

  return (
    <section
      id="rutas"
      className="seccion seccion-rutas"
      aria-labelledby="titulo-rutas"
    >
      <div className="contenedor">
        <div className="encabezado-rutas">
          <div className="encabezado-seccion">
            <p className="etiqueta-seccion">
              Destinos turísticos
            </p>

            <h2
              id="titulo-rutas"
              className="titulo-seccion"
            >
              Conoce nuestras rutas
            </h2>

            <p className="descripcion-seccion">
              Revisa la descripción, los servicios incluidos,
              el mapa del recorrido y la experiencia inmersiva
              disponible para cada destino.
            </p>
          </div>

          <div className="mensaje-rutas">
            <span>London Travel</span>

            <strong>
              Tu experiencia comienza antes del viaje
            </strong>
          </div>
        </div>

        {rutasValidas.length > 0 ? (
          <div className="lista-rutas-detalladas">
            {rutasValidas.map((ruta) => (
              <TarjetaRuta
                key={ruta.id}
                ruta={ruta}
              />
            ))}
          </div>
        ) : (
          <div className="estado-rutas-vacio">
            <div className="icono-rutas-vacias">
              LT
            </div>

            <h3>
              Próximamente publicaremos nuevas rutas
            </h3>

            <p>
              La información institucional y los medios de
              contacto continúan disponibles.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SeccionRutas