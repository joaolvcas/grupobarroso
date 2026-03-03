import Carrossel from "../../Carrosel";
import Whatssap from "../../Whatssap";
import "./modal.css";
import { useState } from "react";

import { FiArrowDown, FiCopy } from "react-icons/fi";

function Modal({ Produto, isOpen, onClose }) {
  const [loading, setLoading] = useState(true);

  const link = Produto.videos[0].src

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
            <h1 className="ProdutoNome">{Produto?.nome}</h1>
    <div className="videoContainer">
    
     { //</div></div>loading && (
     //   <div className="loadingOverlay"> 
      //    <div className="spinner"></div>
      //  </div>
    //  )}
//
   //    <iframe
     //   width="90%"
//height="280"
  //      src={link}
     //   title="YouTube video player"
    //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     //   referrerPolicy="strict-origin-when-cross-origin"
      //  allowFullScreen
      //  style={{
       //   border: "none"
      //  }}
     //   onLoad={() => setLoading(false)}
     //</div> ></iframe> 
     }

    </div>
            
            <p className="Description">{Produto?.description}</p>
            <Carrossel imagens={Produto.images} />

            <Whatssap mdf={Produto?.nome}/>        
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
