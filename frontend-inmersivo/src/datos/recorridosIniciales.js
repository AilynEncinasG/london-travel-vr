const rutaBase = import.meta.env.BASE_URL

export const recorridosIniciales = {
  'san-benito': {
    id: 'san-benito',

    nombre: 'Parque de Aventuras San Benito',

    subtitulo:
      'Prototipo técnico de recorrido virtual',

    descripcion:
      'Primera etapa del módulo inmersivo de London Travel. Esta escena permite comprobar la visualización panorámica, los controles desde computadora, la orientación móvil y el acceso mediante dispositivos compatibles con WebXR.',

    escenaInicial: 'entrada-demostracion',

    escenas: [
      {
        id: 'entrada-demostracion',

        titulo:
          'Escena panorámica de demostración',

        descripcion:
          'Panorama de prueba utilizado para validar el funcionamiento técnico del visor antes de incorporar las fotografías reales de las rutas turísticas.',

        panorama:
          `${rutaBase}panoramas/san-benito/entrada-360.jpg`,

        rotacionInicial:
          '0 -90 0',

        esDemostracion: true,
      },
    ],
  },
}

export function obtenerRecorridoPorId(idRecorrido) {
  return (
    recorridosIniciales[idRecorrido] ??
    recorridosIniciales['san-benito']
  )
}