import { useState } from 'react';
import Modal from 'react-modal'
import Navigator from './Navigator';
import Form from './Form';
import './ModalNome.css'

const ModalNome = () => {

    const [modalNome, setmodaNome] = useState('')
    const [modalSalario, setModalSalario] = useState('');
    const [modalIsOpen, setIsOpen] = useState(true)

    const nome = (e) => {
        setmodaNome(e.target.value)
    }

    const salario = (e) => {
        setModalSalario(e.target.value)
    }

    const closeModal = (e) => {
        e.preventDefault()
        if (modalNome == '') {
            alert('Por favor, insira um nome.')
            return
        } if (modalSalario == '') {
            alert('Por favor, insira uma renda.')
        } else
            setIsOpen(false)
        console.log(modalNome)
    }

    const customStyles = {
        content: {
            top: '25%',
            left: '50%',
            rigth: 'auto',
            bottom: 'auto',
            marginRigth: '-50%',
            transform: 'translate(-50%, -50%)',
            MaxWidth: '490px',
            minWidth: '400px',
            backgroundColor: '#014023',
            borderRadius: '10px'
        }
    }

    return (<>
        <Form modalNome={modalNome} modalSalario={modalSalario} />
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
        >
            <div className="allmodal">
            <div className='modal'>
                <h2 className='apresentation'>Olá, tudo bem?</h2>

                <form className='form-modal' action="">
                    <label className='nomePreference' htmlFor="">Como gostaria de ser chamado?</label>

                    <input type="text" placeholder="Seu nome..." onChange={nome} value={modalNome} className='input-name' />

                    <label className='rendaPreference' htmlFor="">Informe sua renda mensal</label>
                    <input className='input-renda' type="number" placeholder='Renda mensal' onChange={salario} />

                    <button className='Modal-btn' onClick={closeModal} nome={modalNome}>Enviar</button>
                </form>

            </div></div>
        </Modal>

    </>
    )
}


export default ModalNome;