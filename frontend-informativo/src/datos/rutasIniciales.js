export const rutasTuristicas = [
  {
    id: 'san-benito',
    nombre: 'Parque de Aventuras San Benito',
    categoria: 'Aventura y recreación',
    modalidad: 'Full Day',
    ubicacion: 'San Benito, Bolivia',

    descripcion:
      'Una experiencia turística pensada para desconectarte, relajarte y disfrutar de actividades recreativas al aire libre. La ruta combina aventura, naturaleza, espacios de descanso y atención organizada por London Travel.',

    precio: 120,
    moneda: 'Bs.',
    unidadPrecio: 'por persona',

    imagenPromocional:
      '/imagenes/rutas/san-benito.jpg',

    incluye: [
      {
        id: 1,
        tipo: 'transporte',
        nombre: 'Transporte turístico',
      },
      {
        id: 2,
        tipo: 'almuerzo',
        nombre: 'Almuerzo',
      },
      {
        id: 3,
        tipo: 'refrigerio',
        nombre: 'Refrigerio',
      },
      {
        id: 4,
        tipo: 'guia',
        nombre: 'Guía de turismo',
      },
      {
        id: 5,
        tipo: 'botiquin',
        nombre: 'Botiquín de primeros auxilios',
      },
    ],

    puntosRuta: [
      {
        id: 1,
        nombre: 'Punto de encuentro',
        descripcion:
          'Lugar de salida coordinado previamente con London Travel.',
      },
      {
        id: 2,
        nombre: 'Traslado turístico',
        descripcion:
          'Viaje organizado hacia el Parque de Aventuras San Benito.',
      },
      {
        id: 3,
        nombre: 'Parque de Aventuras',
        descripcion:
          'Ingreso, actividades recreativas y tiempo para disfrutar del lugar.',
      },
      {
        id: 4,
        nombre: 'Retorno',
        descripcion:
          'Traslado de regreso al punto coordinado.',
      },
    ],

    mapaUrl:
      'https://www.google.com/maps?q=Parque%20de%20Aventuras%20San%20Benito%20Bolivia&output=embed',

    mapaExterno:
      'https://www.google.com/maps/search/?api=1&query=Parque+de+Aventuras+San+Benito+Bolivia',

    tieneRecorrido360: true,

    recorrido360:
      '/inmersivo/?ruta=san-benito',
  },
]