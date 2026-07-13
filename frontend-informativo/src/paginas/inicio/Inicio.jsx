import Encabezado from '../../componentes/encabezado/Encabezado'
import Portada from '../../componentes/portada/Portada'
import SeccionInstitucional from '../../componentes/institucional/SeccionInstitucional'
import SeccionInmersiva from '../../componentes/inmersivo/SeccionInmersiva'
import SeccionRutas from '../../componentes/rutas/SeccionRutas'
import SeccionGuias from '../../componentes/guias/SeccionGuias'
import SeccionContacto from '../../componentes/contacto/SeccionContacto'
import PiePagina from '../../componentes/pie-pagina/PiePagina'
import BotonWhatsApp from '../../componentes/whatsapp/BotonWhatsApp'
import './Inicio.css'

function Inicio() {
  return (
    <>
      <Encabezado />

      <main>
        <Portada />
        <SeccionInstitucional />
        <SeccionInmersiva />
        <SeccionRutas />
        <SeccionGuias />
        <SeccionContacto />
      </main>

      <PiePagina />
      <BotonWhatsApp />
    </>
  )
}

export default Inicio