import './styles.css'
import { FiSearch } from "react-icons/fi";

function PesquisaLupa({ value, onChange }) {
  return (
      <input
        type="text"
        placeholder="Pesquisar por nome ou marca..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='PesquisaLupa'
      >
      </input>

  )
}

export default PesquisaLupa