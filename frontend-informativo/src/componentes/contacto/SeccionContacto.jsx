import { empresa } from '../../datos/contenidoInicial'
import './SeccionContacto.css'

function SeccionContacto() {
  const mensajeWhatsApp = encodeURIComponent(
    'Hola, vi las rutas turísticas en la página de London Travel y deseo recibir más información.',
  )

  const enlaceWhatsApp =
    `https://wa.me/${empresa.whatsapp}?text=${mensajeWhatsApp}`

  return (
    <section
      id="contacto"
      className="seccion seccion-contacto"
      aria-labelledby="titulo-contacto"
    >
      <div className="contenedor contenido-contacto">
        <div>
          <p className="etiqueta-seccion">
            Contacto
          </p>

          <h2
            id="titulo-contacto"
            className="titulo-seccion"
          >
            Planifica tu próxima experiencia
          </h2>

          <p className="descripcion-seccion">
            Solicita información sobre precios, fechas, itinerarios y
            disponibilidad directamente con London Travel.
          </p>

          <a
            className="boton boton-principal"
            href={enlaceWhatsApp}
            target="_blank"
            rel="noreferrer"
          >
            Contactar mediante WhatsApp
          </a>
        </div>

        <div className="tarjeta-contacto">
          <dl>
            <div>
              <dt>Dirección</dt>
              <dd>{empresa.direccion}</dd>
            </div>

            <div>
              <dt>Teléfono</dt>
              <dd>{empresa.telefono}</dd>
            </div>

            <div>
              <dt>Correo</dt>
              <dd>{empresa.correo}</dd>
            </div>

            <div>
              <dt>Horario</dt>
              <dd>{empresa.horario}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default SeccionContacto