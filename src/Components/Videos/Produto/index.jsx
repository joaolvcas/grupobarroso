import './styles.css'


function Produto({ produto }) {

  console.log("produto")

  return (
    <div className="Produto">
      <img src={produto?.src} alt={produto?.name} />
    </div>
  )
}

export default Produto
