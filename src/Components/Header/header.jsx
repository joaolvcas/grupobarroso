import './header.css'
import AniversarioBarroso from '../../../src/assets/aniversario.jpg'
import LogoBranca from '../../../src/assets/logobarrosobranca.jpg'

function Header() {

  return (
<div className="header">
    <img src={LogoBranca} alt="Logo Aniversario 45 anos da Barroso" className='Logo' />
    <img src={AniversarioBarroso} alt="Logo Aniversario 45 anos da Barroso" className='LogoAniversario' />
</div>
  )
}

export default Header
