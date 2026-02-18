import './simulator.css'

import { FiExternalLink } from "react-icons/fi";

function SimulatorButton({ title, href }) {

  const link = 
  href === 'Placas do Brasil' 
  ? "https://placasdobrasil.com.br/simuladores/simulador-sala/#" 
  : href === 'Arauco'
  ? "https://lojaonline.arauco.com/produtos/simulador-ambientes"
  : href === 'Eucatex'
  ? null
  : href === "Duratex"
  ? "https://www.duratexmadeira.com.br/inspira/simulador/lavanderia/lavanderia-02/selecione-um-padrao"
  : href === "Fibraplac"
  ? "https://www.fibraplac.com.br/simulador/home-office"
  : null

  console.log(link)

return (
  link === null ? (
          <div className="ButtonInavalible">
      <FiExternalLink size={24} />
      <p className="NameButton">
        Simulador Indisponível
      </p>
    </div>
  ) :
   (

        <div className="Button" onClick={() => window.open(link)}>
      <FiExternalLink size={24} />
      <p className="NameButton">
        {title}
      </p>
    </div>
  )
);

}

export default SimulatorButton
