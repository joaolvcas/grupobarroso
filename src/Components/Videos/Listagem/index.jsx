import PesquisaLupa from '../PesquisaLupa'
import Produto from '../Produto'
import { useState, useMemo } from "react";
import './styles.css'

import Produtos from '../../../Data/produtos.json'
import Modal from '../Modal'

function Listagem() {
  const [ItemOpen, setItemOpen] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [search, setSearch] = useState(""); // 🔎 estado da busca

  const openModal = (produto) => {
    setItemOpen(produto)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setItemOpen({})
    setModalIsOpen(false)
  }

  // 🔎 filtro
  const produtosFiltrados = useMemo(() => {
    const termo = search.toLowerCase();

    return Produtos.filter((item) =>
      item.nome.toLowerCase().includes(termo) ||
      item.marca.nome.toLowerCase().includes(termo)
    );
  }, [search]);

  return (
    <div className="Listagem">

        {/* Passando props */}
        <PesquisaLupa 
          value={search}
          onChange={setSearch}
        />

        <div className='Lista'>
          {produtosFiltrados.map((item) => (
            <Produto 
              key={item.id}
              produto={item} 
              onPress={openModal}  
            />
          ))}
        </div>

        {modalIsOpen && (
          <Modal 
            Produto={ItemOpen} 
            isOpen={modalIsOpen} 
            onClose={closeModal} 
          />
        )}
    </div>
  )
}

export default Listagem;