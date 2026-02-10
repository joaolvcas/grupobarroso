import SimulatorButton from "../SimulatorButton";
import "./modal.css";

import { FiArrowDown  } from "react-icons/fi";

function Modal({ isOpen, onClose, children, Product }) {
    console.log(Product)
  return (
    <>
      <div
        className={`modalBackdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className={`${isOpen ? "" : "isClosed"}`} onClick={onClose}>
            <FiArrowDown  size={40} color="f87000" />
        </div>
           <img
            src={Product?.src}
            alt={Product?.nome}
            className="ProductImage"
          />
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
          <SimulatorButton title={"Simular Ambientes"} />
      </div>
    </>
  );
}

export default Modal;
