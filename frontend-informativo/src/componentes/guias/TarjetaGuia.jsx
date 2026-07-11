function TarjetaGuia({ guia }) {
  if (!guia) {
    return null
  }

  const {
    nombre = 'Guía turístico',
    especialidad = 'Información pendiente',
    experiencia = 'Experiencia pendiente',
    certificado = false,
  } = guia

  const inicial = nombre.charAt(0).toUpperCase()

  return (
    <article className="tarjeta-guia">
      <div
        className="avatar-guia"
        aria-hidden="true"
      >
        {inicial}
      </div>

      <h3>{nombre}</h3>

      <p className="especialidad-guia">
        {especialidad}
      </p>

      <p className="experiencia-guia">
        {experiencia}
      </p>

      <span
        className={`estado-certificacion ${
          certificado
            ? 'certificacion-verificada'
            : 'certificacion-pendiente'
        }`}
      >
        {certificado
          ? 'Certificación verificada'
          : 'Certificación pendiente'}
      </span>
    </article>
  )
}

export default TarjetaGuia