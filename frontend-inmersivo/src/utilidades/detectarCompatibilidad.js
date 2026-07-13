export async function detectarCompatibilidad() {
  const agenteUsuario =
    navigator.userAgent.toLowerCase()

  const esMovil =
    /android|iphone|ipad|ipod|mobile/.test(
      agenteUsuario,
    ) ||
    navigator.maxTouchPoints > 1

  const tienePantallaTactil =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0

  const tieneOrientacion =
    'DeviceOrientationEvent' in window

  const contextoSeguro =
    window.isSecureContext

  const tieneWebXR =
    Boolean(navigator.xr)

  let soportaVRInmersivo = false

  if (
    contextoSeguro &&
    navigator.xr?.isSessionSupported
  ) {
    try {
      soportaVRInmersivo =
        await navigator.xr.isSessionSupported(
          'immersive-vr',
        )
    } catch (error) {
      console.warn(
        'No fue posible comprobar WebXR:',
        error,
      )

      soportaVRInmersivo = false
    }
  }

  return {
    esMovil,
    tienePantallaTactil,
    tieneOrientacion,
    contextoSeguro,
    tieneWebXR,
    soportaVRInmersivo,
  }
}