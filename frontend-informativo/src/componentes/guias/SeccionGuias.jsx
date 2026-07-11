import { guiasTuristicos } from '../../datos/contenidoInicial'
import TarjetaGuia from './TarjetaGuia'
import './SeccionGuias.css'

function SeccionGuias() {
  const guiasValidos = Array.isArray(guiasTuristicos)
    ? guiasTuristicos.filter(Boolean)
    : []

  return (
    <section
      id="guias"
      className="seccion seccion-guias"
      aria-labelledby="titulo-guias"
    >
      <div className="contenedor">
        <div className="encabezado-seccion">
          <p className="etiqueta-seccion">
            Equipo turístico
          </p>

          <h2
            id="titulo-guias"
            className="titulo-seccion"
          >
            Conoce a nuestros guías
          </h2>

          <p className="descripcion-seccion">
            La experiencia y certificación de nuestros guías permite
            fortalecer la confianza del cliente antes de realizar una
            ruta turística.
          </p>
        </div>

        {guiasValidos.length > 0 ? (
          <div className="cuadricula-guias">
            {guiasValidos.map((guia) => (
              <TarjetaGuia
                key={guia.id}
                guia={guia}
              />
            ))}
          </div>
        ) : (
          <div className="estado-guias-vacio">
            <h3>Información temporalmente no disponible</h3>

            <p>
              Próximamente se publicará la información de los guías
              turísticos de London Travel.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SeccionGuias