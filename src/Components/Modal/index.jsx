import BrilhoTag from "../LaccAd";
import SimulatorButton from "../SimulatorButton";
import Whatssap from "../Whatssap";
import "./modal.css";

import { FiArrowDown, FiAlertCircle  } from "react-icons/fi";

function Modal({ isOpen, onClose, children, Product }) {

  const marca = Product?.marca?.nome

  const laccad =
   marca == 'Eucatex'
    ? true
    : marca == 'Duratex'
    ? true
    : false

  return (
    <>
      <div
        className={`modalBackdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <div className={`modal ${isOpen ? "active" : ""}`}>

        <div className="modalContent">
          <div className="modalInner">
          <div className={`${isOpen ? "" : "isClosed"}`} onClick={onClose}>
            <FiArrowDown  size={40} color="f87000" />
          </div>
          {laccad ? (
          <div className="imageWrapper">
            <img
              src={Product?.src}
              alt={Product?.nome}
              className="ProductImage"
            />

          <div className="brilhoOverlay">
          <BrilhoTag />
           </div>
          </div>
          ):(
            <img
              src={Product?.src}
              alt={Product?.nome}
              className="ProductImage2"
            />
          )}

          <div className="ProductName">
             <h1>{Product?.nome}</h1>
             <p className="textura" >{`/${Product?.textura}`}</p>
          </div>
          <div className="ProductBrand"> 
            <img
              src={Product?.marca?.src}
              className="BrandImage"
            />
          </div>
          {Product?.descontinuado ? 
                  <div className="attention">
          <p className="attentionText">
           <FiAlertCircle size={25} color="#fd0000" style={{ marginRight: "8px" }} />
             <strong>Recado:</strong> Esse padrão foi descontinuado do nosso catálogo de MDFs decorativos. 
              Para verificar a disponibilidade em estoque, consulte um de nossos vendedores.
          </p>
          </div> : <></>
          }
          <SimulatorButton title={"Simular Ambientes"} href={Product?.marca?.nome} />
          <Whatssap mdf={Product?.nome}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
