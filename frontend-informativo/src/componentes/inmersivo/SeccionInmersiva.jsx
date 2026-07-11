import { useState } from 'react'
import './SeccionInmersiva.css'

function SeccionInmersiva() {
  const [mostrarRecorrido, setMostrarRecorrido] = useState(false)

  return (
    <section
      id="experiencia-360"
      className="seccion seccion-inmersiva"
      aria-labelledby="titulo-inmersivo"
    >
      <div className="contenedor">
        <div className="contenido-inmersivo">
          <div className="informacion-inmersiva">
            <p className="etiqueta-seccion">
              Experiencia inmersiva
            </p>

            <h2
              id="titulo-inmersivo"
              className="titulo-seccion"
            >
              Vive el destino antes de viajar
            </h2>

            <p className="descripcion-seccion">
              Explora fotografías panorámicas en 360 grados mediante
              una experiencia compatible con computadora, celular,
              Google Cardboard y navegadores con soporte WebXR.
            </p>

            <ul className="lista-beneficios-inmersivos">
              <li>Observa el destino desde diferentes ángulos.</li>
              <li>Navega utilizando mouse, pantalla táctil o visor.</li>
              <li>Conoce lugares importantes antes del viaje.</li>
              <li>Accede sin instalar una aplicación móvil.</li>
            </ul>

            <button
              className="boton boton-principal"
              type="button"
              onClick={() => setMostrarRecorrido(true)}
            >
              Cargar experiencia 360°
            </button>
          </div>

          <div className="contenedor-visor">
            {mostrarRecorrido ? (
              <>
                <iframe
                  className="visor-inmersivo"
                  src="/inmersivo/"
                  title="Experiencia inmersiva 360 grados de London Travel"
                  allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
                ></iframe>

                <a
                  className="enlace-pantalla-completa"
                  href="/inmersivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir recorrido en pantalla completa
                </a>
              </>
            ) : (
              <div className="visor-espera">
                <div className="simbolo-visor">360°</div>

                <h3>Recorrido virtual</h3>

                <p>
                  El contenido se cargará únicamente cuando presiones
                  el botón, evitando que la página principal se vuelva
                  lenta.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionInmersiva