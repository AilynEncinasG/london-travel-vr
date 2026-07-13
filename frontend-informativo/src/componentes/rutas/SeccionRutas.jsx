import { rutasTuristicas } from '../../datos/rutasIniciales'
import CarruselRutas from './CarruselRutas'
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
              Explora cada experiencia mediante una ficha
              interactiva con información, servicios, precio,
              ubicación, mapa y recorrido inmersivo en 360 grados.
            </p>
          </div>

          <div className="mensaje-rutas">
            <span>London Travel</span>

            <strong>
              Tu experiencia comienza antes del viaje
            </strong>
          </div>
        </div>
      </div>

      {rutasValidas.length > 0 ? (
        <CarruselRutas rutas={rutasValidas} />
      ) : (
        <div className="contenedor">
          <div className="estado-rutas-vacio">
            <div className="icono-rutas-vacias">
              LT
            </div>

            <h3>
              Próximamente publicaremos nuevas rutas
            </h3>

            <p>
              La información institucional, los guías y
              los medios de contacto continúan disponibles.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default SeccionRutas