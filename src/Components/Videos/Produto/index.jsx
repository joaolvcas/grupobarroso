import './styles.css'
import { FiArrowRight  } from "react-icons/fi";


function Produto({ produto, onPress }) {

  return (
    <div className="Produto" onClick={() => onPress(produto)}>
      <img src={produto?.src} alt={produto?.name} className='Image' />
      <div className='Content'>
        <p className='Name'>{produto?.nome}</p>
        <p className='Brand'>{produto?.marca?.nome}</p>
      </div>
      <div  className='ClickOpen'>
        <FiArrowRight  size={20} className="Arrow" />
      </div>
    </div>
  )
}

export default Produto
