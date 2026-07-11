import { empresa } from '../../datos/contenidoInicial'
import './SeccionInstitucional.css'

function SeccionInstitucional() {
  return (
    <section
      id="nosotros"
      className="seccion seccion-institucional"
      aria-labelledby="titulo-nosotros"
    >
      <div className="contenedor">
        <div className="encabezado-seccion">
          <p className="etiqueta-seccion">
            Sobre nosotros
          </p>

          <h2
            id="titulo-nosotros"
            className="titulo-seccion"
          >
            Conoce London Travel
          </h2>

          <p className="descripcion-seccion">
            {empresa.descripcion}
          </p>
        </div>

        <div className="cuadricula-institucional">
          <article className="tarjeta-institucional">
            <span className="numero-tarjeta">01</span>

            <h3>Misión</h3>

            <p>{empresa.mision}</p>
          </article>

          <article className="tarjeta-institucional">
            <span className="numero-tarjeta">02</span>

            <h3>Visión</h3>

            <p>{empresa.vision}</p>
          </article>

          <article className="tarjeta-institucional tarjeta-destacada">
            <span className="numero-tarjeta">03</span>

            <h3>Nuestra propuesta</h3>

            <p>
              Combinar información turística clara con experiencias
              visuales inmersivas para fortalecer la confianza del
              cliente antes de seleccionar una ruta.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SeccionInstitucional