import PesquisaLupa from '../PesquisaLupa'
import Produto from '../Produto'
import './styles.css'

import Produtos from '../../../Data/produtos.json'


function Listagem() {

  console.log(Produtos)

  return (
    <div className="Listagem">
        <PesquisaLupa />
        <div className='Lista'>
          {Produtos.map((item) => {
            return (
            <Produto produto={item} />
            )
          })}
        </div>
    </div>
  )
}

export default Listagem
