import PesquisaLupa from '../PesquisaLupa'
import Produto from '../Produto'
import { useState } from "react";
import './styles.css'

import Produtos from '../../../Data/produtos.json'
import Modal from '../Modal'


function Listagem() {
  const [ItemOpen, setItemOpen] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (produto) => {
    setItemOpen(produto)
    setModalIsOpen(true)
  }

    const closeModal = () => {
    setItemOpen({})
    setModalIsOpen(false)
  }

  return (
    <div className="Listagem">
        <PesquisaLupa />
        <div className='Lista'>
          {Produtos.map((item) => {
            return (
            <Produto produto={item} onPress={openModal}  />
            )
          })}
        </div>
        {modalIsOpen ? (
        <Modal Produto={ItemOpen} isOpen={modalIsOpen} onClose={closeModal} />
        ): <></>}
    </div>
  )
}

export default Listagem
