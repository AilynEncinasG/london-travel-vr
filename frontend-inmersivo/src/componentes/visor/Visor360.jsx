import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import './Visor360.css'

const limitarValor = (valor, minimo, maximo) => (
  Math.min(Math.max(valor, minimo), maximo)
)

const convertirGradosARadianes = (grados) => (
  grados * (Math.PI / 180)
)

const Visor360 = forwardRef(function Visor360(
  {
    escena,
    onCambioModoVR,
    onAviso,
  },
  referenciaExterna,
) {
  const contenedorRef = useRef(null)
  const escenaAFrameRef = useRef(null)
  const camaraRef = useRef(null)

  const fovActualRef = useRef(
    escena.vistaInicial?.fov ?? 65,
  )

  const [escenaCargada, setEscenaCargada] =
    useState(false)

  const [imagenCargada, setImagenCargada] =
    useState(false)

  const [errorImagen, setErrorImagen] =
    useState(false)

  const recorridoListo =
    escenaCargada &&
    imagenCargada &&
    !errorImagen

  const esDispositivoMovil = useMemo(() => {
    const agenteUsuario =
      navigator.userAgent.toLowerCase()

    return (
      /android|iphone|ipad|ipod|mobile/.test(
        agenteUsuario,
      ) ||
      navigator.maxTouchPoints > 1
    )
  }, [])

  const configuracionControles = useMemo(
    () => [
      'enabled: true',
      'mouseEnabled: true',
      'touchEnabled: true',
      'reverseMouseDrag: false',
      'reverseTouchDrag: false',
      'pointerLockEnabled: false',
      `magicWindowTrackingEnabled: ${esDispositivoMovil}`,
    ].join('; '),
    [esDispositivoMovil],
  )

  const aplicarCampoVision = useCallback(
    (nuevoFov) => {
      const camara = camaraRef.current

      if (!camara) {
        return
      }

      const fovLimitado = limitarValor(
        nuevoFov,
        45,
        85,
      )

      fovActualRef.current = fovLimitado

      camara.setAttribute(
        'camera',
        'fov',
        fovLimitado,
      )

      const camaraThree =
        camara.components?.camera?.camera

      if (camaraThree) {
        camaraThree.fov = fovLimitado
        camaraThree.updateProjectionMatrix()
      }
    },
    [],
  )

  const aplicarVistaInicial = useCallback(() => {
    const camara = camaraRef.current

    if (!camara) {
      return
    }

    const controles =
      camara.components?.['look-controls']

    const vistaInicial = {
      yaw: escena.vistaInicial?.yaw ?? 0,
      pitch: escena.vistaInicial?.pitch ?? 0,
      fov: escena.vistaInicial?.fov ?? 65,
    }

    /*
     * look-controls controla la orientación mediante dos
     * objetos internos. Es necesario modificar ambos para
     * evitar que el panorama comience mirando al suelo.
     */
    if (controles?.yawObject) {
      controles.yawObject.rotation.y =
        convertirGradosARadianes(
          vistaInicial.yaw,
        )
    }

    if (controles?.pitchObject) {
      controles.pitchObject.rotation.x =
        convertirGradosARadianes(
          vistaInicial.pitch,
        )
    }

    camara.object3D.rotation.set(0, 0, 0)

    camara.setAttribute(
      'rotation',
      '0 0 0',
    )

    aplicarCampoVision(vistaInicial.fov)
  }, [
    aplicarCampoVision,
    escena.vistaInicial,
  ])

  useEffect(() => {
    setEscenaCargada(false)
    setImagenCargada(false)
    setErrorImagen(false)

    fovActualRef.current =
      escena.vistaInicial?.fov ?? 65
  }, [
    escena.id,
    escena.panorama,
    escena.vistaInicial,
  ])

  useEffect(() => {
    const escenaAFrame =
      escenaAFrameRef.current

    if (!escenaAFrame) {
      return undefined
    }

    const manejarCarga = () => {
      setEscenaCargada(true)

      /*
       * Se espera a que A-Frame termine de crear
       * look-controls antes de orientar la cámara.
       */
      window.setTimeout(
        aplicarVistaInicial,
        120,
      )
    }

    const manejarInicioRender = () => {
      aplicarVistaInicial()
    }

    const manejarEntradaVR = () => {
      onCambioModoVR?.(true)
    }

    const manejarSalidaVR = () => {
      onCambioModoVR?.(false)

      window.setTimeout(
        aplicarVistaInicial,
        100,
      )
    }

    if (escenaAFrame.hasLoaded) {
      manejarCarga()
    } else {
      escenaAFrame.addEventListener(
        'loaded',
        manejarCarga,
      )
    }

    escenaAFrame.addEventListener(
      'renderstart',
      manejarInicioRender,
    )

    escenaAFrame.addEventListener(
      'enter-vr',
      manejarEntradaVR,
    )

    escenaAFrame.addEventListener(
      'exit-vr',
      manejarSalidaVR,
    )

    return () => {
      escenaAFrame.removeEventListener(
        'loaded',
        manejarCarga,
      )

      escenaAFrame.removeEventListener(
        'renderstart',
        manejarInicioRender,
      )

      escenaAFrame.removeEventListener(
        'enter-vr',
        manejarEntradaVR,
      )

      escenaAFrame.removeEventListener(
        'exit-vr',
        manejarSalidaVR,
      )
    }
  }, [
    aplicarVistaInicial,
    onCambioModoVR,
  ])

  /*
   * Zoom desde computadora mediante la rueda.
   * Se modifica el campo de visión, no la posición
   * de la cámara dentro de la esfera.
   */
  useEffect(() => {
    const contenedor = contenedorRef.current

    if (!contenedor) {
      return undefined
    }

    const manejarRueda = (evento) => {
      const escenaAFrame =
        escenaAFrameRef.current

      if (escenaAFrame?.is?.('vr-mode')) {
        return
      }

      evento.preventDefault()

      const direccion =
        evento.deltaY > 0 ? 1 : -1

      const nuevoFov =
        fovActualRef.current +
        direccion * 4

      aplicarCampoVision(nuevoFov)
    }

    contenedor.addEventListener(
      'wheel',
      manejarRueda,
      {
        passive: false,
      },
    )

    return () => {
      contenedor.removeEventListener(
        'wheel',
        manejarRueda,
      )
    }
  }, [aplicarCampoVision])

  const esperarCargaEscena = async () => {
    const escenaAFrame =
      escenaAFrameRef.current

    if (!escenaAFrame) {
      throw new Error(
        'La escena inmersiva no está disponible.',
      )
    }

    if (escenaAFrame.hasLoaded) {
      return
    }

    await new Promise((resolve) => {
      escenaAFrame.addEventListener(
        'loaded',
        resolve,
        {
          once: true,
        },
      )
    })
  }

  const entrarEnVR = async () => {
    try {
      await esperarCargaEscena()

      const escenaAFrame =
        escenaAFrameRef.current

      await escenaAFrame.enterVR()

      return true
    } catch (error) {
      console.error(
        'No fue posible iniciar VR:',
        error,
      )

      onAviso?.(
        'El navegador o dispositivo no permitió iniciar el modo VR. Puedes continuar explorando con el mouse o la pantalla táctil.',
      )

      return false
    }
  }

  const alternarPantallaCompleta = async () => {
    try {
      if (!document.fullscreenElement) {
        await contenedorRef.current
          ?.requestFullscreen()

        return true
      }

      await document.exitFullscreen()

      return false
    } catch (error) {
      console.error(
        'No se pudo activar la pantalla completa:',
        error,
      )

      onAviso?.(
        'El navegador no permitió activar la pantalla completa.',
      )

      return false
    }
  }

  const centrarVista = () => {
    aplicarVistaInicial()

    onAviso?.(
      'La orientación y el acercamiento fueron restablecidos.',
    )
  }

  const acercarVista = () => {
    aplicarCampoVision(
      fovActualRef.current - 5,
    )
  }

  const alejarVista = () => {
    aplicarCampoVision(
      fovActualRef.current + 5,
    )
  }

  useImperativeHandle(
    referenciaExterna,
    () => ({
      entrarEnVR,
      alternarPantallaCompleta,
      centrarVista,
      acercarVista,
      alejarVista,
    }),
  )

  return (
    <div
      ref={contenedorRef}
      className="contenedor-visor-360"
    >
      <a-scene
        ref={escenaAFrameRef}
        className="escena-aframe"
        embedded="true"
        renderer="
          antialias: true;
          colorManagement: true;
          precision: high;
          alpha: false;
          stencil: false;
          sortTransparentObjects: false;
          logarithmicDepthBuffer: false;
          maxCanvasWidth: 4096;
          maxCanvasHeight: 4096;
          anisotropy: 16;
          highRefreshRate: true;
          foveationLevel: 0.25;
          toneMapping: neutral;
          exposure: 1;
        "
        loading-screen="enabled: false"
        xr-mode-ui="enabled: false; XRMode: vr"
        webxr="
          referenceSpaceType: local-floor;
          optionalFeatures:
            local-floor,
            bounded-floor,
            hand-tracking;
        "
        device-orientation-permission-ui="
          enabled: true;
          deviceMotionMessage:
            London Travel necesita acceder a los sensores para mover la vista con el teléfono.;
          allowButtonText: Permitir;
          denyButtonText: No permitir;
          cancelButtonText: Cancelar;
          httpsMessage:
            Para utilizar los sensores debes abrir la experiencia mediante HTTPS.;
        "
        background="color: #120a16"
      >
        <a-assets timeout="20000">
          <img
            id="panorama-principal"
            src={escena.panorama}
            alt=""
            crossOrigin="anonymous"
            onLoad={() => {
              setImagenCargada(true)
              setErrorImagen(false)

              window.setTimeout(
                aplicarVistaInicial,
                100,
              )
            }}
            onError={() => {
              setImagenCargada(false)
              setErrorImagen(true)

              onAviso?.(
                'No fue posible cargar la fotografía panorámica.',
              )
            }}
          />
        </a-assets>

        <a-sky
          src="#panorama-principal"
          rotation={
            escena.rotacionPanorama ??
            '0 0 0'
          }
          radius="1000"
          segments-width="128"
          segments-height="64"
          material="
            shader: flat;
            side: back;
            transparent: false;
            fog: false;
          "
        ></a-sky>

        {/*
          La cámara debe permanecer en el centro exacto de
          la esfera panorámica. No usamos una altura de 1.6
          porque una fotografía 360° no tiene profundidad real.
        */}
        <a-entity
          id="rig-usuario"
          position="0 0 0"
        >
          <a-camera
            ref={camaraRef}
            id="camara-principal"
            position="0 0 0"
            rotation="0 0 0"
            camera={`
              fov: ${
                escena.vistaInicial?.fov ?? 65
              };
              near: 0.05;
              far: 2000;
              zoom: 1;
            `}
            look-controls={
              configuracionControles
            }
            wasd-controls="enabled: false"
          >
            <a-cursor
              id="cursor-mirada"
              fuse="true"
              fuse-timeout="1500"
              raycaster="
                objects: .interactivo;
                far: 40;
              "
              geometry="
                primitive: ring;
                radiusInner: 0.007;
                radiusOuter: 0.012;
              "
              material="
                color: #ffffff;
                shader: flat;
                opacity: 0.9;
              "
              animation__fuse="
                property: geometry.radiusInner;
                startEvents: fusing;
                from: 0.007;
                to: 0.001;
                dur: 1500;
              "
            ></a-cursor>
          </a-camera>
        </a-entity>

        <a-entity
          laser-controls="hand: left"
          raycaster="
            objects: .interactivo;
            far: 40;
          "
        ></a-entity>

        <a-entity
          laser-controls="hand: right"
          raycaster="
            objects: .interactivo;
            far: 40;
          "
        ></a-entity>
      </a-scene>

      {!recorridoListo && !errorImagen && (
        <div
          className="estado-carga-visor"
          role="status"
          aria-live="polite"
        >
          <span className="indicador-carga"></span>

          <strong>
            Preparando experiencia 360°
          </strong>

          <p>
            Cargando la fotografía panorámica
            en alta calidad.
          </p>
        </div>
      )}

      {errorImagen && (
        <div
          className="
            estado-carga-visor
            estado-error-visor
          "
          role="alert"
        >
          <span className="simbolo-error">
            !
          </span>

          <strong>
            No se pudo cargar el panorama
          </strong>

          <p>
            Verifica que el archivo se encuentre
            en la carpeta correcta.
          </p>

          <code>
            public/panoramas/san-benito/
            entrada-360.jpg
          </code>
        </div>
      )}

      <div
        className="etiqueta-escena-visor"
        aria-hidden={!recorridoListo}
      >
        <span>Escena actual</span>
        <strong>{escena.titulo}</strong>
      </div>

      <div
        className="controles-zoom-visor"
        aria-label="Controles de acercamiento"
      >
        <button
          type="button"
          title="Acercar"
          aria-label="Acercar la vista"
          onClick={acercarVista}
        >
          +
        </button>

        <button
          type="button"
          title="Alejar"
          aria-label="Alejar la vista"
          onClick={alejarVista}
        >
          −
        </button>
      </div>
    </div>
  )
})

export default Visor360