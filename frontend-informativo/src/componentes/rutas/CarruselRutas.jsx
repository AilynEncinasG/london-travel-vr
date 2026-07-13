import {
  useEffect,
  useRef,
  useState,
} from 'react'

import TarjetaRuta from './TarjetaRuta'
import './CarruselRutas.css'

function IconoFlecha({ direccion }) {
  const esAnterior = direccion === 'anterior'

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d={
          esAnterior
            ? 'm15 5-7 7 7 7'
            : 'm9 5 7 7-7 7'
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CarruselRutas({ rutas = [] }) {
  const rutasValidas = Array.isArray(rutas)
    ? rutas.filter(Boolean)
    : []

  const [indiceActivo, setIndiceActivo] = useState(0)
  const [carruselPausado, setCarruselPausado] =
    useState(false)

  const posicionInicialTactil = useRef(null)

  const totalRutas = rutasValidas.length
  const tieneVariasRutas = totalRutas > 1

  useEffect(() => {
    if (indiceActivo >= totalRutas) {
      setIndiceActivo(0)
    }
  }, [indiceActivo, totalRutas])

  useEffect(() => {
    if (
      !tieneVariasRutas ||
      carruselPausado
    ) {
      return undefined
    }

    const temporizador = window.setInterval(() => {
      setIndiceActivo((indiceActual) => (
        (indiceActual + 1) % totalRutas
      ))
    }, 9000)

    return () => {
      window.clearInterval(temporizador)
    }
  }, [
    carruselPausado,
    tieneVariasRutas,
    totalRutas,
  ])

  const irAAnterior = () => {
    if (!tieneVariasRutas) {
      return
    }

    setIndiceActivo((indiceActual) => (
      (
        indiceActual -
        1 +
        totalRutas
      ) % totalRutas
    ))
  }

  const irASiguiente = () => {
    if (!tieneVariasRutas) {
      return
    }

    setIndiceActivo((indiceActual) => (
      (indiceActual + 1) % totalRutas
    ))
  }

  const irARuta = (indice) => {
    setIndiceActivo(indice)
  }

  const obtenerPosicion = (indice) => {
    if (indice === indiceActivo) {
      return 'activa'
    }

    if (!tieneVariasRutas) {
      return 'oculta'
    }

    const diferencia = (
      indice -
      indiceActivo +
      totalRutas
    ) % totalRutas

    if (diferencia === 1) {
      return 'siguiente'
    }

    if (diferencia === totalRutas - 1) {
      return 'anterior'
    }

    return 'oculta'
  }

  const manejarTeclado = (evento) => {
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      irAAnterior()
    }

    if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      irASiguiente()
    }
  }

  const iniciarDeslizamiento = (evento) => {
    posicionInicialTactil.current =
      evento.touches[0]?.clientX ?? null
  }

  const finalizarDeslizamiento = (evento) => {
    if (
      posicionInicialTactil.current === null
    ) {
      return
    }

    const posicionFinal =
      evento.changedTouches[0]?.clientX

    if (posicionFinal === undefined) {
      posicionInicialTactil.current = null
      return
    }

    const diferencia =
      posicionInicialTactil.current -
      posicionFinal

    const distanciaMinima = 55

    if (diferencia > distanciaMinima) {
      irASiguiente()
    }

    if (diferencia < -distanciaMinima) {
      irAAnterior()
    }

    posicionInicialTactil.current = null
  }

  if (totalRutas === 0) {
    return null
  }

  return (
    <div
      className="carrusel-rutas"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Rutas turísticas de London Travel"
      tabIndex="0"
      onKeyDown={manejarTeclado}
      onMouseEnter={() => setCarruselPausado(true)}
      onMouseLeave={() => setCarruselPausado(false)}
      onFocus={() => setCarruselPausado(true)}
      onBlur={() => setCarruselPausado(false)}
      onTouchStart={iniciarDeslizamiento}
      onTouchEnd={finalizarDeslizamiento}
    >
      <div className="cabecera-control-carrusel">
        <div className="estado-carrusel">
          <span className="numero-ruta-activa">
            {String(indiceActivo + 1).padStart(2, '0')}
          </span>

          <span className="separador-contador">
            /
          </span>

          <span className="total-rutas">
            {String(totalRutas).padStart(2, '0')}
          </span>
        </div>

        <p>
          Usa las flechas o desliza para descubrir
          las rutas disponibles.
        </p>
      </div>

      <div className="ventana-carrusel">
        {tieneVariasRutas && (
          <button
            className="
              control-carrusel
              control-carrusel-anterior
            "
            type="button"
            aria-label="Mostrar ruta anterior"
            onClick={irAAnterior}
          >
            <IconoFlecha direccion="anterior" />
          </button>
        )}

        <div className="escenario-carrusel">
          {rutasValidas.map((ruta, indice) => {
            const posicion =
              obtenerPosicion(indice)

            const esActiva =
              posicion === 'activa'

            return (
              <div
                className={`
                  diapositiva-ruta
                  diapositiva-${posicion}
                `}
                key={ruta.id ?? indice}
                aria-hidden={!esActiva}
                inert={!esActiva ? true : undefined}
              >
                <TarjetaRuta ruta={ruta} />
              </div>
            )
          })}
        </div>

        {tieneVariasRutas && (
          <button
            className="
              control-carrusel
              control-carrusel-siguiente
            "
            type="button"
            aria-label="Mostrar siguiente ruta"
            onClick={irASiguiente}
          >
            <IconoFlecha direccion="siguiente" />
          </button>
        )}
      </div>

      {tieneVariasRutas && (
        <div
          className="indicadores-carrusel"
          aria-label="Seleccionar ruta"
        >
          {rutasValidas.map((ruta, indice) => (
            <button
              className={
                indice === indiceActivo
                  ? 'indicador-ruta indicador-activo'
                  : 'indicador-ruta'
              }
              type="button"
              key={`indicador-${ruta.id ?? indice}`}
              aria-label={
                `Mostrar ruta ${indice + 1}: ` +
                `${ruta.nombre ?? 'Ruta turística'}`
              }
              aria-current={
                indice === indiceActivo
                  ? 'true'
                  : undefined
              }
              onClick={() => irARuta(indice)}
            >
              <span></span>
            </button>
          ))}
        </div>
      )}

      <p
        className="nombre-ruta-carrusel"
        aria-live="polite"
      >
        {rutasValidas[indiceActivo]?.nombre}
      </p>
    </div>
  )
}

export default CarruselRutas