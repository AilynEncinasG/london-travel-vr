import { empresa } from '../../datos/contenidoInicial'
import './SeccionInstitucional.css'

function IconoMision() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 3a9 9 0 1 0 9 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12 7a5 5 0 1 0 5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="12"
        r="1.7"
        fill="currentColor"
      />

      <path
        d="M14.5 5.5 21 3l-2.5 6.5-2-2L12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconoVision() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="12"
        r="2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function IconoInmersion() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4 8.5h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4.2a2 2 0 0 1-1.6-.8l-.7-.9a2 2 0 0 0-3 0l-.7.9a2 2 0 0 1-1.6.8H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M7 12h2M8 11v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="17"
        cy="12"
        r=".9"
        fill="currentColor"
      />

      <circle
        cx="19"
        cy="14"
        r=".9"
        fill="currentColor"
      />
    </svg>
  )
}

function SeccionInstitucional() {
  return (
    <section
      id="nosotros"
      className="seccion seccion-institucional"
      aria-labelledby="titulo-nosotros"
    >
      <span
        className="decoracion-institucional decoracion-institucional-uno"
        aria-hidden="true"
      ></span>

      <span
        className="decoracion-institucional decoracion-institucional-dos"
        aria-hidden="true"
      ></span>

      <div className="contenedor contenido-institucional">
        <div className="cabecera-institucional">
          <div className="texto-cabecera-institucional">
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

          <aside className="resumen-institucional">
            <p className="resumen-etiqueta">
              Nuestra esencia
            </p>

            <strong>
              Turismo, confianza e innovación
            </strong>

            <div className="resumen-indicadores">
              <div>
                <span>01</span>
                <small>
                  Atención personalizada
                </small>
              </div>

              <div>
                <span>02</span>
                <small>
                  Experiencias nacionales
                </small>
              </div>

              <div>
                <span>03</span>
                <small>
                  Recorridos inmersivos
                </small>
              </div>
            </div>
          </aside>
        </div>

        <div className="cuadricula-principios">
          <article className="tarjeta-principio tarjeta-mision">
            <span
              className="numero-decorativo"
              aria-hidden="true"
            >
              01
            </span>

            <div className="icono-principio">
              <IconoMision />
            </div>

            <p className="tipo-principio">
              Nuestro propósito
            </p>

            <h3>Misión</h3>

            <p className="texto-principio">
              {empresa.mision}
            </p>

            <span className="linea-principio"></span>
          </article>

          <article className="tarjeta-principio tarjeta-vision">
            <span
              className="numero-decorativo"
              aria-hidden="true"
            >
              02
            </span>

            <div className="icono-principio">
              <IconoVision />
            </div>

            <p className="tipo-principio">
              Hacia dónde vamos
            </p>

            <h3>Visión</h3>

            <p className="texto-principio">
              {empresa.vision}
            </p>

            <span className="linea-principio"></span>
          </article>
        </div>

        <article className="tarjeta-propuesta">
          <div
            className="circulo-propuesta circulo-propuesta-uno"
            aria-hidden="true"
          ></div>

          <div
            className="circulo-propuesta circulo-propuesta-dos"
            aria-hidden="true"
          ></div>

          <div className="contenido-propuesta">
            <div className="icono-propuesta">
              <IconoInmersion />
            </div>

            <div className="texto-propuesta">
              <p className="etiqueta-propuesta">
                Innovación turística
              </p>

              <h3>
                Una experiencia que comienza antes del viaje
              </h3>

              <p>
                Combinamos información turística clara con experiencias
                visuales inmersivas para que cada cliente pueda conocer
                mejor una ruta antes de tomar una decisión.
              </p>
            </div>
          </div>

          <div className="beneficios-propuesta">
            <div>
              <span className="punto-beneficio"></span>

              <div>
                <strong>
                  Información clara
                </strong>

                <small>
                  Datos relevantes de cada ruta turística.
                </small>
              </div>
            </div>

            <div>
              <span className="punto-beneficio"></span>

              <div>
                <strong>
                  Exploración en 360°
                </strong>

                <small>
                  Visualización desde PC, celular o visor.
                </small>
              </div>
            </div>

            <div>
              <span className="punto-beneficio"></span>

              <div>
                <strong>
                  Mayor confianza
                </strong>

                <small>
                  Una decisión mejor informada antes de viajar.
                </small>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SeccionInstitucional