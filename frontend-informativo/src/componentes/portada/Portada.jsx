import { empresa } from '../../datos/contenidoInicial'
import './Portada.css'

function Portada() {
  return (
    <section
      id="inicio"
      className="portada-principal"
      aria-labelledby="titulo-portada"
    >
      <div className="contenedor contenido-portada">
        <div className="texto-portada">
          <p className="etiqueta-portada">
            Operadora turística · La Paz, Bolivia
          </p>

          <h1 id="titulo-portada">
            Descubre Bolivia de una forma
            <span> más cercana</span>
          </h1>

          <p className="descripcion-portada">
            {empresa.descripcion} Conoce nuestros destinos,
            guías e itinerarios y explora las rutas mediante
            fotografías panorámicas en 360 grados.
          </p>

          <div className="acciones-portada">
            <a
              className="boton boton-principal"
              href="#experiencia-360"
            >
              Explorar recorridos 360°
            </a>

            <a
              className="boton boton-secundario"
              href="#rutas"
            >
              Conocer las rutas
            </a>
          </div>

          <div className="caracteristicas-portada">
            <div>
              <strong>360°</strong>
              <span>Recorridos virtuales</span>
            </div>

            <div>
              <strong>WebXR</strong>
              <span>Compatible con visores</span>
            </div>

            <div>
              <strong>Bolivia</strong>
              <span>Experiencias nacionales</span>
            </div>
          </div>
        </div>

        <div className="visual-portada">
          <div
            className="fotografia-portada"
            role="img"
            aria-label="Paisaje turístico de Bolivia"
          >
            <div className="sello-portada">
              <span className="sello-icono">360°</span>

              <span>
                <strong>Explora antes de viajar</strong>
                <small>PC, celular y visor VR</small>
              </span>
            </div>
          </div>

          <div className="tarjeta-logo-portada">
            <img
              src="/imagenes/logo-london-travel.png"
              alt="London Travel, operadora de turismo"
            />

            <div>
              <strong>London Travel</strong>
              <span>Experiencias que comienzan antes del viaje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portada