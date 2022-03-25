import React from 'react'
import IconoCerrar from '../img/cerrar.svg'

const Modal = ({setActivarModal, setAnimarModal, animarModal}) => {

    const setModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setActivarModal(false);
        }, 500);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={setModal} src={IconoCerrar} alt="Cerrar Modal" />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>
            </form>
        </div>
    )
}

export default Modal