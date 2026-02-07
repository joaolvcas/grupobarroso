import "./products.css";
import PlacasDoBrasil from '../../../Data/mdfs.json'

import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

function Products() {
  const { setBrand } = useContext(GlobalContext);

  return (
    <div className="products">
        {PlacasDoBrasil.map((padrao) => (
        <div className="product">
            <img
            src={padrao.src}
            alt={padrao.nome}
            className="padrao"
          />
        </div>
        ))}
    </div>
  );
}

export default Products;
