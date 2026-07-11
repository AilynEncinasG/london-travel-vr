import { rutasTuristicas } from '../../datos/contenidoInicial'
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
        <div className="encabezado-seccion">
          <p className="etiqueta-seccion">
            Destinos turísticos
          </p>

          <h2
            id="titulo-rutas"
            className="titulo-seccion"
          >
            Explora nuestras rutas
          </h2>

          <p className="descripcion-seccion">
            Conoce algunas de las experiencias turísticas disponibles
            en London Travel.
          </p>
        </div>

        {rutasValidas.length > 0 ? (
          <div className="cuadricula-rutas">
            {rutasValidas.map((ruta) => (
              <TarjetaRuta
                key={ruta.id}
                ruta={ruta}
              />
            ))}
          </div>
        ) : (
          <div className="estado-rutas-vacio">
            <h3>Rutas temporalmente no disponibles</h3>

            <p>
              La información turística continúa funcionando.
              Próximamente se publicarán nuevas rutas.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SeccionRutas