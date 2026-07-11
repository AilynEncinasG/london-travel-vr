import { useState } from 'react'
import './Encabezado.css'

function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <header className="encabezado-principal">
      <div className="contenedor contenido-encabezado">
        <a
          className="marca"
          href="#inicio"
          aria-label="Ir al inicio de London Travel"
          onClick={cerrarMenu}
        >
          <span className="marca-simbolo">LT</span>

          <span className="marca-texto">
            <strong>London Travel</strong>
            <small>Operadora turística</small>
          </span>
        </a>

        <button
          className="boton-menu"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navegacion-principal ${
            menuAbierto ? 'navegacion-visible' : ''
          }`}
          aria-label="Navegación principal"
        >
          <a href="#nosotros" onClick={cerrarMenu}>
            Nosotros
          </a>

          <a href="#experiencia-360" onClick={cerrarMenu}>
            Experiencia 360°
          </a>

          <a href="#rutas" onClick={cerrarMenu}>
            Rutas
          </a>

          <a href="#guias" onClick={cerrarMenu}>
            Guías
          </a>

          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>

          <a
            className="boton boton-principal boton-contacto-menu"
            href="#contacto"
            onClick={cerrarMenu}
          >
            Solicitar información
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado