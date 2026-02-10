import './simulator.css'

import { FiExternalLink } from "react-icons/fi";

function SimulatorButton({ title }) {

  return (
<div className="Button" onClick={() => window.open("https://placasdobrasil.com.br/simuladores/simulador-sala/#")}>
    <FiExternalLink  size={24} />
    <p className='NameButton'>{title}</p>
</div>
  )
}

export default SimulatorButton
