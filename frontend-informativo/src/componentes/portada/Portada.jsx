import { empresa } from '../../datos/contenidoInicial'
import './Portada.css'

function Portada() {
  return (
    <section
      id="inicio"
      className="portada-principal"
      aria-labelledby="titulo-portada"
    >
      <div className="decoracion-portada decoracion-uno"></div>
      <div className="decoracion-portada decoracion-dos"></div>

      <div className="contenedor contenido-portada">
        <div className="texto-portada">
          <p className="etiqueta-portada">
            Turismo inmersivo en Bolivia
          </p>

          <h1 id="titulo-portada">
            Conoce el destino
            <span> antes de viajar</span>
          </h1>

          <p className="descripcion-portada">
            {empresa.descripcion} Explora nuestras rutas mediante
            experiencias visuales en 360 grados desde tu computadora,
            teléfono o visor de realidad virtual.
          </p>

          <div className="acciones-portada">
            <a
              className="boton boton-principal"
              href="#experiencia-360"
            >
              Explorar experiencia 360°
            </a>

            <a
              className="boton boton-secundario"
              href="#rutas"
            >
              Ver rutas turísticas
            </a>
          </div>

          <div className="compatibilidad-portada">
            <span>Computadora</span>
            <span>Celular</span>
            <span>Google Cardboard</span>
            <span>Visores compatibles</span>
          </div>
        </div>

        <div
          className="vista-previa-portada"
          aria-label="Vista previa de una experiencia turística"
        >
          <div className="marco-vista-previa">
            <div className="paisaje-simulado">
              <span className="sol-paisaje"></span>
              <span className="montana montana-uno"></span>
              <span className="montana montana-dos"></span>
              <span className="montana montana-tres"></span>
            </div>

            <div className="insignia-360">
              <strong>360°</strong>
              <span>Experiencia inmersiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portada