import { obtenerRecorridoPorId } from './datos/recorridosIniciales'
import RecorridoVirtual from './paginas/recorrido/RecorridoVirtual'

function App() {
  const parametros =
    new URLSearchParams(
      window.location.search,
    )

  const idRecorrido =
    parametros.get('ruta') ??
    'san-benito'

  const recorrido =
    obtenerRecorridoPorId(idRecorrido)

  return (
    <RecorridoVirtual
      recorrido={recorrido}
    />
  )
}

export default App