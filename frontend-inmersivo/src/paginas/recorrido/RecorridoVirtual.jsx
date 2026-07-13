import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import Visor360 from '../../componentes/visor/Visor360'
import { detectarCompatibilidad } from '../../utilidades/detectarCompatibilidad'
import './RecorridoVirtual.css'

const rutaBase = import.meta.env.BASE_URL

function RecorridoVirtual({ recorrido }) {
  const visorRef = useRef(null)

  const [recorridoIniciado, setRecorridoIniciado] =
    useState(false)

  const [modoVRActivo, setModoVRActivo] =
    useState(false)

  const [mostrarAyuda, setMostrarAyuda] =
    useState(false)

  const [aviso, setAviso] =
    useState('')

  const [compatibilidad, setCompatibilidad] =
    useState({
      esMovil: false,
      tienePantallaTactil: false,
      tieneOrientacion: false,
      contextoSeguro: false,
      tieneWebXR: false,
      soportaVRInmersivo: false,
    })

  const escenaActual =
    recorrido.escenas.find(
      (escena) =>
        escena.id === recorrido.escenaInicial,
    ) ?? recorrido.escenas[0]

  useEffect(() => {
    let componenteActivo = true

    detectarCompatibilidad().then(
      (resultado) => {
        if (componenteActivo) {
          setCompatibilidad(resultado)
        }
      },
    )

    return () => {
      componenteActivo = false
    }
  }, [])

  useEffect(() => {
    if (!aviso) {
      return undefined
    }

    const temporizador =
      window.setTimeout(() => {
        setAviso('')
      }, 5500)

    return () => {
      window.clearTimeout(temporizador)
    }
  }, [aviso])

  const manejarCambioVR =
    useCallback((activo) => {
      setModoVRActivo(activo)
    }, [])

  const manejarAviso =
    useCallback((mensaje) => {
      setAviso(mensaje)
    }, [])

  const ingresarVR = async () => {
    if (!compatibilidad.contextoSeguro) {
      setAviso(
        'Para utilizar VR desde un teléfono o visor debes abrir la aplicación mediante HTTPS. En localhost puedes continuar realizando pruebas desde la computadora.',
      )
    }

    await visorRef.current?.entrarEnVR()
  }

  const alternarPantallaCompleta = async () => {
    await visorRef.current
      ?.alternarPantallaCompleta()
  }

  const centrarVista = () => {
    visorRef.current?.centrarVista()
  }

  return (
    <div className="pagina-recorrido-virtual">
      <header className="barra-superior-recorrido">
        <a
          className="marca-recorrido"
          href="/"
          aria-label="Volver a la página de London Travel"
        >
          <img
            src={`${rutaBase}imagenes/logo-london-travel.png`}
            alt="Logo de London Travel"
          />

          <span>
            <strong>London Travel</strong>
            <small>Recorrido virtual 360°</small>
          </span>
        </a>

        <div className="titulo-barra-recorrido">
          <span>Ruta seleccionada</span>
          <strong>{recorrido.nombre}</strong>
        </div>

        <a
          className="boton-salir-recorrido"
          href="/"
        >
          Volver al sitio
        </a>
      </header>

      <main className="contenido-recorrido">
        <section className="area-principal-recorrido">
          <Visor360
            ref={visorRef}
            escena={escenaActual}
            onCambioModoVR={manejarCambioVR}
            onAviso={manejarAviso}
          />

          {!recorridoIniciado && (
            <div className="pantalla-bienvenida">
              <div className="tarjeta-bienvenida">
                <img
                  src={`${rutaBase}imagenes/logo-london-travel.png`}
                  alt=""
                  aria-hidden="true"
                />

                <p className="etiqueta-bienvenida">
                  Experiencia inmersiva
                </p>

                <h1>{recorrido.nombre}</h1>

                <p className="subtitulo-bienvenida">
                  {recorrido.subtitulo}
                </p>

                <p className="descripcion-bienvenida">
                  {recorrido.descripcion}
                </p>

                <div className="dispositivos-bienvenida">
                  <span>Computadora</span>
                  <span>Celular</span>
                  <span>Cardboard</span>
                  <span>Meta Quest</span>
                </div>

                <button
                  className="boton-iniciar-recorrido"
                  type="button"
                  onClick={() => {
                    setRecorridoIniciado(true)
                  }}
                >
                  Comenzar exploración
                </button>

                <small className="nota-demostracion">
                  Esta fotografía es una escena técnica
                  de demostración. Posteriormente se
                  reemplazará por material real de la ruta.
                </small>
              </div>
            </div>
          )}

          {aviso && (
            <div
              className="aviso-recorrido"
              role="status"
              aria-live="polite"
            >
              {aviso}
            </div>
          )}
        </section>

        <aside className="panel-controles-recorrido">
          <div className="informacion-escena">
            <p>Escena actual</p>

            <h2>{escenaActual.titulo}</h2>

            <span>
              {escenaActual.descripcion}
            </span>
          </div>

          <div className="estado-dispositivo">
            <p className="titulo-panel">
              Compatibilidad detectada
            </p>

            <div className="lista-compatibilidad">
              <div>
                <span className="estado-correcto">
                  ✓
                </span>

                <p>
                  <strong>Vista desde PC</strong>
                  <small>
                    Mouse y pantalla completa
                  </small>
                </p>
              </div>

              <div>
                <span
                  className={
                    compatibilidad.tieneOrientacion
                      ? 'estado-correcto'
                      : 'estado-limitado'
                  }
                >
                  {compatibilidad.tieneOrientacion
                    ? '✓'
                    : '—'}
                </span>

                <p>
                  <strong>
                    Sensores del teléfono
                  </strong>

                  <small>
                    Movimiento y orientación
                  </small>
                </p>
              </div>

              <div>
                <span
                  className={
                    compatibilidad
                      .soportaVRInmersivo
                      ? 'estado-correcto'
                      : 'estado-limitado'
                  }
                >
                  {compatibilidad
                    .soportaVRInmersivo
                    ? '✓'
                    : '—'}
                </span>

                <p>
                  <strong>WebXR inmersivo</strong>

                  <small>
                    Cardboard o Meta Quest
                  </small>
                </p>
              </div>

              <div>
                <span
                  className={
                    compatibilidad.contextoSeguro
                      ? 'estado-correcto'
                      : 'estado-limitado'
                  }
                >
                  {compatibilidad.contextoSeguro
                    ? '✓'
                    : '—'}
                </span>

                <p>
                  <strong>Conexión segura</strong>

                  <small>
                    HTTPS o localhost
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="acciones-visor">
            <button
              className="boton-control boton-control-vr"
              type="button"
              onClick={ingresarVR}
            >
              {modoVRActivo
                ? 'VR activo'
                : 'Entrar en VR / Cardboard'}
            </button>

            <button
              className="boton-control"
              type="button"
              onClick={alternarPantallaCompleta}
            >
              Pantalla completa
            </button>

            <button
              className="boton-control"
              type="button"
              onClick={centrarVista}
            >
              Centrar vista
            </button>

            <button
              className="boton-control"
              type="button"
              onClick={() => {
                setMostrarAyuda(true)
              }}
            >
              Cómo utilizar el recorrido
            </button>
          </div>

          <div className="instrucciones-rapidas">
            <p className="titulo-panel">
              Controles rápidos
            </p>

            <dl>
              <div>
                <dt>PC</dt>
                <dd>
                  Arrastra el mouse para mirar.
                </dd>
              </div>

              <div>
                <dt>Celular</dt>
                <dd>
                  Desliza o mueve el dispositivo.
                </dd>
              </div>

              <div>
                <dt>Visor</dt>
                <dd>
                  Mueve la cabeza y utiliza
                  los controles disponibles.
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </main>

      {mostrarAyuda && (
        <div
          className="fondo-modal-ayuda"
          role="presentation"
          onMouseDown={(evento) => {
            if (
              evento.target === evento.currentTarget
            ) {
              setMostrarAyuda(false)
            }
          }}
        >
          <section
            className="modal-ayuda"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-ayuda"
          >
            <button
              className="cerrar-modal-ayuda"
              type="button"
              aria-label="Cerrar ayuda"
              onClick={() => {
                setMostrarAyuda(false)
              }}
            >
              ×
            </button>

            <p className="etiqueta-ayuda">
              Guía de uso
            </p>

            <h2 id="titulo-ayuda">
              Cómo explorar el recorrido
            </h2>

            <div className="opciones-ayuda">
              <article>
                <span>01</span>
                <h3>Desde computadora</h3>
                <p>
                  Haz clic y arrastra el mouse
                  dentro de la fotografía para
                  observar el espacio completo.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Desde celular</h3>
                <p>
                  Permite el acceso a los sensores
                  y mueve físicamente el teléfono
                  para cambiar la orientación.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Desde Cardboard</h3>
                <p>
                  Abre la experiencia desde un
                  teléfono compatible, activa VR
                  y coloca el dispositivo dentro
                  del visor.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Desde Meta Quest</h3>
                <p>
                  Abre la dirección HTTPS desde
                  el navegador del visor y presiona
                  Entrar en VR.
                </p>
              </article>
            </div>

            <button
              className="boton-entendido"
              type="button"
              onClick={() => {
                setMostrarAyuda(false)
              }}
            >
              Entendido
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default RecorridoVirtual