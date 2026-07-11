export const empresa = {
  nombre: 'London Travel',
  lema: '𝑫𝒆𝒔𝒄𝒖𝒃𝒓𝒆 𝒍𝒂 𝑴𝒂𝒈𝒊𝒂 𝒅𝒆 𝒕𝒖𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔 𝒗𝒊𝒂𝒋𝒂𝒏𝒅𝒐 𝒄𝒐𝒏 " 𝑳𝑶𝑵𝑫𝑶𝑵 𝑻𝑹𝑨𝑽𝑬𝑳 𝑩𝑶𝑳𝑰𝑽𝑰𝑨"',
  descripcion:
    'Operadora turística dedicada a la organización y promoción de experiencias de viaje dentro de Bolivia.',
  mision:
    'En London Travel Bolivia diseñamos y organizamos experiencias de viaje accesibles, seguras y bien planificadas para el público boliviano, promoviendo el turismo nacional y dando a conocer los destinos más representativos de nuestro país. Asimismo, ofrecemos paquetes internacionales estratégicos, como Machu Picchu, brindando asesoramiento personalizado, acompañamiento permanente y un servicio responsable que garantice satisfacción y confianza en cada viaje.',
  vision:
    'Ser una operadora de turismo líder en el mercado nacional, reconocida por la calidad de nuestros servicios, el compromiso con nuestros clientes y la promoción del turismo interno en Bolivia, ampliando progresivamente nuestra oferta hacia destinos internacionales de alto interés.',
  telefono: '+591 64210077',
  whatsapp: '64210077',
  correo: 'skytravelturismo034@gmail.com',
  direccion: 'Av.Illampu, Galería Sajama Local 2',
  horario: 'Lunes a sábado, de 08:30 a 18:30',
}

export const rutasTuristicas = [
  {
    id: 1,
    nombre: 'Coroico y los Yungas',
    tipo: 'Full Day',
    duracion: '1 día',
    descripcion:
      'Una experiencia rodeada de naturaleza, clima cálido, paisajes y cultura yungueña.',
    etiqueta: 'Naturaleza',
    tieneRecorrido360: true,
  },
  {
    id: 2,
    nombre: 'Copacabana y Lago Titicaca',
    tipo: 'Viaje turístico',
    duracion: '2 días y 1 noche',
    descripcion:
      'Recorrido por uno de los destinos naturales y culturales más representativos de Bolivia.',
    etiqueta: 'Cultura',
    tieneRecorrido360: false,
  },
  {
    id: 3,
    nombre: 'Chacaltaya y Valle de la Luna',
    tipo: 'Full Day',
    duracion: '1 día',
    descripcion:
      'Una combinación de paisajes de montaña y formaciones naturales cercanas a la ciudad de La Paz.',
    etiqueta: 'Aventura',
    tieneRecorrido360: false,
  },
]

export const guiasTuristicos = [
  {
    id: 1,
    nombre: 'Guía turístico 1',
    especialidad: 'Turismo de naturaleza',
    experiencia: 'Experiencia en rutas de los Yungas',
    certificado: true,
  },
  {
    id: 2,
    nombre: 'Guía turístico 2',
    especialidad: 'Turismo cultural',
    experiencia: 'Experiencia en rutas nacionales',
    certificado: true,
  },
  {
    id: 3,
    nombre: 'Guía turístico 3',
    especialidad: 'Turismo de aventura',
    experiencia: 'Experiencia en viajes grupales',
    certificado: false,
  },
]