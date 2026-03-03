import { useState } from "react";
import "./styles.css"

function Carrossel({ imagens }) {
  const [indexAtual, setIndexAtual] = useState(0);

  function proximaImagem() {
    setIndexAtual((prev) =>
      prev === imagens.length - 1 ? 0 : prev + 1
    );
  }

  function imagemAnterior() {
    setIndexAtual((prev) =>
      prev === 0 ? imagens.length - 1 : prev - 1
    );
  }

  return (
    <>
    <div className="carrossel">
      <button className="ButtonChangeImage" onClick={imagemAnterior}>◀</button>

      <img
        src={imagens[indexAtual].src}
        alt="Produto"
        className="imagem-carrossel"
      />

      <button className="ButtonChangeImage" onClick={proximaImagem}>▶</button>
    </div>
   <div className="indicadores">
  {imagens.map((_, i) => (
    <span
      key={i}
      className={`bolinha ${i === indexAtual ? "ativa" : ""}`}
      onClick={() => setIndexAtual(i)}
    >
    </span>
  ))}
</div>
</>
  );
}

export default Carrossel;