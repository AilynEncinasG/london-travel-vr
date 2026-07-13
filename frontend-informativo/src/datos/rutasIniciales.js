const crearServiciosBase = () => [
  {
    id: 'transporte',
    tipo: 'transporte',
    nombre: 'Transporte turístico',
  },
  {
    id: 'almuerzo',
    tipo: 'almuerzo',
    nombre: 'Almuerzo',
  },
  {
    id: 'refrigerio',
    tipo: 'refrigerio',
    nombre: 'Refrigerio',
  },
  {
    id: 'guia',
    tipo: 'guia',
    nombre: 'Guía de turismo',
  },
  {
    id: 'botiquin',
    tipo: 'botiquin',
    nombre: 'Botiquín de primeros auxilios',
  },
]

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

    incluye: crearServiciosBase(),

    puntosRuta: [
      {
        id: 'san-benito-encuentro',
        nombre: 'Punto de encuentro',
        descripcion:
          'Lugar de salida coordinado previamente con London Travel.',
      },
      {
        id: 'san-benito-traslado',
        nombre: 'Traslado turístico',
        descripcion:
          'Viaje organizado hacia el Parque de Aventuras San Benito.',
      },
      {
        id: 'san-benito-ingreso',
        nombre: 'Ingreso al parque',
        descripcion:
          'Llegada al destino y organización del grupo con el guía de turismo.',
      },
      {
        id: 'san-benito-actividades',
        nombre: 'Actividades recreativas',
        descripcion:
          'Tiempo destinado a disfrutar de los espacios y actividades del parque.',
      },
      {
        id: 'san-benito-retorno',
        nombre: 'Retorno',
        descripcion:
          'Traslado de regreso al punto previamente coordinado.',
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

  {
    id: 'tres-aventuras-dos-dias',

    nombre: 'Tres Aventuras en Dos Días',

    categoria: 'Naturaleza, aventura y recreación',

    modalidad: '2 días / 1 noche',

    ubicacion:
      'Ruta de la Miel, Leque y San Benito, Bolivia',

    descripcion:
      'Una experiencia de dos días y una noche que reúne tres atractivos turísticos: la Ruta de la Miel, las Piscinas Naturales de Leque y el Parque de Aventuras San Benito. Es una propuesta orientada a quienes desean combinar naturaleza, descanso, aprendizaje y actividades recreativas dentro de un solo recorrido.',

    precio: 385,

    moneda: 'Bs.',

    unidadPrecio: 'por persona',

    imagenPromocional:
      '/imagenes/rutas/tres-aventuras-dos-dias.jpg',

    incluye: crearServiciosBase(),

    puntosRuta: [
      {
        id: 'tres-aventuras-encuentro',
        nombre: 'Punto de encuentro',
        descripcion:
          'Concentración del grupo en el lugar y horario coordinados por London Travel.',
      },
      {
        id: 'tres-aventuras-miel',
        nombre: 'Ruta de la Miel',
        descripcion:
          'Visita turística orientada a conocer el entorno natural y la producción de miel.',
      },
      {
        id: 'tres-aventuras-leque',
        nombre: 'Piscinas Naturales de Leque',
        descripcion:
          'Tiempo para disfrutar de las piscinas naturales y del paisaje del lugar.',
      },
      {
        id: 'tres-aventuras-san-benito',
        nombre: 'Parque de Aventuras San Benito',
        descripcion:
          'Ingreso al parque y realización de actividades recreativas y de aventura.',
      },
      {
        id: 'tres-aventuras-segundo-dia',
        nombre: 'Continuación del recorrido',
        descripcion:
          'Desarrollo de las actividades planificadas para el segundo día del viaje.',
      },
      {
        id: 'tres-aventuras-retorno',
        nombre: 'Retorno',
        descripcion:
          'Traslado de regreso al punto acordado con los pasajeros.',
      },
    ],

    mapaUrl:
      'https://www.google.com/maps?q=Parque%20de%20Aventuras%20San%20Benito%20Bolivia&output=embed',

    mapaExterno:
      'https://www.google.com/maps/search/?api=1&query=Ruta+de+la+Miel+Piscinas+Naturales+Leque+San+Benito+Bolivia',

    tieneRecorrido360: false,

    recorrido360:
      '/inmersivo/?ruta=tres-aventuras-dos-dias',
  },

  {
    id: 'canada-del-tunki',

    nombre: 'Piscinas Cañada del Tunki',

    categoria: 'Naturaleza y recreación',

    modalidad: 'Full Day',

    ubicacion: 'Coroico, Bolivia',

    descripcion:
      'Una ruta turística orientada al descanso y la recreación en un entorno natural de Coroico. La experiencia permite disfrutar de piscinas, áreas de esparcimiento, paisajes yungueños y actividades al aire libre con la organización de London Travel.',

    precio: 155,

    moneda: 'Bs.',

    unidadPrecio: 'todo incluido',

    imagenPromocional:
      '/imagenes/rutas/canada-del-tunki.jpg',

    incluye: crearServiciosBase(),

    puntosRuta: [
      {
        id: 'tunki-encuentro',
        nombre: 'Punto de encuentro',
        descripcion:
          'Reunión de los pasajeros en el lugar determinado por London Travel.',
      },
      {
        id: 'tunki-traslado',
        nombre: 'Traslado hacia Coroico',
        descripcion:
          'Viaje turístico organizado con destino a la Cañada del Tunki.',
      },
      {
        id: 'tunki-llegada',
        nombre: 'Llegada a la Cañada del Tunki',
        descripcion:
          'Ingreso al lugar y explicación de las actividades disponibles.',
      },
      {
        id: 'tunki-piscinas',
        nombre: 'Piscinas y recreación',
        descripcion:
          'Tiempo libre para disfrutar de las piscinas y de los espacios naturales.',
      },
      {
        id: 'tunki-retorno',
        nombre: 'Retorno',
        descripcion:
          'Regreso organizado al punto previamente establecido.',
      },
    ],

    mapaUrl:
      'https://www.google.com/maps?q=La%20Ca%C3%B1ada%20del%20Tunki%20Coroico%20Bolivia&output=embed',

    mapaExterno:
      'https://www.google.com/maps/search/?api=1&query=La+Cañada+del+Tunki+Coroico+Bolivia',

    tieneRecorrido360: false,

    recorrido360:
      '/inmersivo/?ruta=canada-del-tunki',
  },

  {
    id: 'parque-acuatico-paula',

    nombre: 'Parque Acuático Paula',

    categoria: 'Diversión acuática y recreación',

    modalidad: 'Full Day',

    ubicacion: 'Bolivia',

    descripcion:
      'Una experiencia recreativa para disfrutar de piscinas, toboganes, áreas acuáticas y espacios de descanso. La ruta está pensada para familias, grupos de amigos y pasajeros que buscan relajarse y divertirse durante una jornada organizada.',

    precio: 155,

    moneda: 'Bs.',

    unidadPrecio: 'por persona',

    imagenPromocional:
      '/imagenes/rutas/parque-acuatico-paula.jpg',

    incluye: [
      ...crearServiciosBase(),
      {
        id: 'ingreso-parque',
        tipo: 'ingreso',
        nombre: 'Ingreso al parque',
      },
    ],

    puntosRuta: [
      {
        id: 'paula-encuentro',
        nombre: 'Punto de encuentro',
        descripcion:
          'Concentración de los pasajeros en el punto definido por London Travel.',
      },
      {
        id: 'paula-traslado',
        nombre: 'Traslado turístico',
        descripcion:
          'Viaje organizado hacia el Parque Acuático Paula.',
      },
      {
        id: 'paula-ingreso',
        nombre: 'Ingreso al parque acuático',
        descripcion:
          'Acceso al establecimiento y orientación inicial por parte del guía.',
      },
      {
        id: 'paula-actividades',
        nombre: 'Piscinas y actividades acuáticas',
        descripcion:
          'Tiempo para disfrutar de las piscinas, toboganes y espacios recreativos.',
      },
      {
        id: 'paula-retorno',
        nombre: 'Retorno',
        descripcion:
          'Traslado de regreso al lugar coordinado con el grupo.',
      },
    ],

    mapaUrl:
      'https://www.google.com/maps?q=Parque%20Acu%C3%A1tico%20Paula%20Bolivia&output=embed',

    mapaExterno:
      'https://www.google.com/maps/search/?api=1&query=Parque+Acuático+Paula+Bolivia',

    tieneRecorrido360: false,

    recorrido360:
      '/inmersivo/?ruta=parque-acuatico-paula',
  },

  {
    id: 'piscinas-naturales-leque',

    nombre: 'Piscinas Naturales de Leque',

    categoria: 'Naturaleza y descanso',

    modalidad: 'Full Day',

    ubicacion: 'Leque, Bolivia',

    descripcion:
      'Una ruta turística para conectarse con la naturaleza y disfrutar de piscinas naturales rodeadas de paisajes montañosos. La experiencia combina recreación, descanso, convivencia grupal y acompañamiento turístico durante toda la jornada.',

    precio: 87,

    moneda: 'Bs.',

    unidadPrecio: 'por persona',

    imagenPromocional:
      '/imagenes/rutas/piscinas-naturales-leque.jpg',

    incluye: crearServiciosBase(),

    puntosRuta: [
      {
        id: 'leque-encuentro',
        nombre: 'Punto de encuentro',
        descripcion:
          'Reunión del grupo en el sitio y horario coordinados previamente.',
      },
      {
        id: 'leque-traslado',
        nombre: 'Traslado turístico',
        descripcion:
          'Viaje organizado con destino a las Piscinas Naturales de Leque.',
      },
      {
        id: 'leque-llegada',
        nombre: 'Llegada a Leque',
        descripcion:
          'Recepción del grupo y explicación de las actividades del recorrido.',
      },
      {
        id: 'leque-piscinas',
        nombre: 'Piscinas naturales',
        descripcion:
          'Tiempo para disfrutar del agua, del paisaje y de los espacios de descanso.',
      },
      {
        id: 'leque-retorno',
        nombre: 'Retorno',
        descripcion:
          'Regreso al punto establecido por London Travel.',
      },
    ],

    mapaUrl:
      'https://www.google.com/maps?q=Piscinas%20Naturales%20Leque%20Bolivia&output=embed',

    mapaExterno:
      'https://www.google.com/maps/search/?api=1&query=Piscinas+Naturales+Leque+Bolivia',

    tieneRecorrido360: false,

    recorrido360:
      '/inmersivo/?ruta=piscinas-naturales-leque',
  },
]