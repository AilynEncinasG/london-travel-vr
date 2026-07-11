import { empresa } from '../../datos/contenidoInicial'
import './PiePagina.css'

function PiePagina() {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="pie-pagina">
      <div className="contenedor contenido-pie">
        <div>
          <strong>{empresa.nombre}</strong>

          <p>
            Plataforma web informativa e inmersiva para la promoción
            de rutas turísticas.
          </p>
        </div>

        <p className="derechos-pie">
          © {anioActual} London Travel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default PiePagina