function IconoTransporte() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 4h14a2 2 0 0 1 2 2v10H3V6a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M6 16v2M18 16v2M3 11h18M7 7h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle cx="7" cy="16" r="1.4" fill="currentColor" />
      <circle cx="17" cy="16" r="1.4" fill="currentColor" />
    </svg>
  )
}

function IconoAlmuerzo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10M16 3v18M16 3c3 2 3 7 0 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconoRefrigerio() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M16 11h2a2.5 2.5 0 0 1 0 5h-2M8 5c0-1 1-1.5 1-2M12 5c0-1 1-1.5 1-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconoGuia() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="7"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M6 21v-4a6 6 0 0 1 12 0v4M18 8.5 21 11l-3 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconoBotiquin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M9 6V4h6v2M12 10v6M9 13h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconoGenerico() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m8 12 2.5 2.5L16 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconoIncluye({ tipo }) {
  const iconos = {
    transporte: <IconoTransporte />,
    almuerzo: <IconoAlmuerzo />,
    refrigerio: <IconoRefrigerio />,
    guia: <IconoGuia />,
    botiquin: <IconoBotiquin />,
  }

  return iconos[tipo] ?? <IconoGenerico />
}

export default IconoIncluye