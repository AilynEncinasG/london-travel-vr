import { empresa } from '../../datos/contenidoInicial'
import './BotonWhatsApp.css'

function BotonWhatsApp() {
  const mensaje = encodeURIComponent(
    'Hola, deseo recibir información sobre las rutas turísticas de London Travel.',
  )

  return (
    <a
      className="boton-whatsapp"
      href={`https://wa.me/${empresa.whatsapp}?text=${mensaje}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar con London Travel mediante WhatsApp"
      title="Contactar por WhatsApp"
    >
      <span aria-hidden="true">WA</span>
    </a>
  )
}

export default BotonWhatsApp