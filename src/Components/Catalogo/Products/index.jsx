import "./products.css";
import PlacasDoBrasil from '../../../Data/mdfs.json'

import { FiArrowUp  } from "react-icons/fi";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

function Products() {
  const { setBrand } = useContext(GlobalContext);

  return (
    <div className="products">
        {PlacasDoBrasil.map((padrao) => (
        <div key={padrao.id} className="product">
            <img
            src={padrao.src}
            alt={padrao.nome}
            className="padrao"
          />
          <div className="clickIcon">
            <FiArrowUp  size={40} />
          </div>
          <div className="productOverlay">
            <p>{padrao.nome}</p>
          </div>
        </div>
        ))}
    </div>
  );
}

export default Products;
