const botonReintentar = document.querySelector('#boton-reintentar')
const estadoReintento = document.querySelector('#estado-reintento')

function reintentarRecorrido() {
  if (!botonReintentar || !estadoReintento) {
    return
  }

  botonReintentar.disabled = true
  botonReintentar.textContent = 'Comprobando...'

  estadoReintento.textContent =
    'Intentando conectarse nuevamente con el recorrido 360°.'

  window.setTimeout(() => {
    window.location.href = '/inmersivo/'
  }, 800)
}

if (botonReintentar) {
  botonReintentar.addEventListener(
    'click',
    reintentarRecorrido,
  )
}