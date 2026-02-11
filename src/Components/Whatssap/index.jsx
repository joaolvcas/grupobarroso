import { useState } from "react";
import "./whatssap.css";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

function Whatssap({mdf}) {
  const [open, setOpen] = useState(false);

  const mensagem = encodeURIComponent(
  `Olá, gostaria de solicitar um orçamento do mdf ${mdf ?? ""}`
);

  return (
    <div className={`section ${open ? "open" : ""}`}>
      
      <div className="button" onClick={() => setOpen(!open)}>
        <p className="NameButton">
          Solicitar Orçamento
        </p>
      </div>

      <div className="contacts">
        <div className="contactItem"  onClick={() => window.open(`https://wa.me/558999300880?text=${mensagem}`, "_blank")}>
          <div className="Bag">
              <FiMessageSquare />
              <p className="Phone">(89) 9930-0880</p>

          </div>
            <FiArrowRight />
        </div>

        <div className="contactItem" onClick={() => window.open(`https://wa.me/558999850049?text=${mensagem}`, "_blank")}>
          <div className="Bag">
              <FiMessageSquare />
              <p className="Phone">(89) 9985-0049</p>

          </div>
            <FiArrowRight />
        </div>
           <div className="contactItem" onClick={() => window.open(`https://wa.me/558999300399?text=${mensagem}`, "_blank")}>
          <div className="Bag">
              <FiMessageSquare />
              <p className="Phone">(89) 9930-0399</p>

          </div>
            <FiArrowRight />
        </div>
      </div>

    </div>
  );
}

export default Whatssap;
