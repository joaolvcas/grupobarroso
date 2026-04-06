import Locations from '../Locations'
import BrandOptions from './BrandsOptions'
import './catalogo.css'
import Products from './Products'


function Catalogo() {

  return (
<div className="Catalogo">
<h1 className='titulo'>CATÁLOGO</h1>
<BrandOptions />
<Products />
<Locations />
</div>
  )
}

export default Catalogo
