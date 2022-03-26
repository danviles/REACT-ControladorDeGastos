import React, { useState } from 'react'
import IconoCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({ setActivarModal, setAnimarModal, animarModal, guardarGastos }) => {


    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [mensaje, setMensaje] = useState('');


    const setModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setActivarModal(false);
        }, 500);
    }

    const handleSubmit = ((e) => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje("Todos los campos son obligatorios.")
            setTimeout(() => {
                setMensaje("");
            }, 3000);
            return
        } 
            
        guardarGastos({nombre, cantidad, categoria})
        

    })

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={setModal} src={IconoCerrar} alt="Cerrar Modal" />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>Nuevo gasto</legend>
                {mensaje ? <Mensaje tipo="error">{mensaje}</Mensaje> : null}
                <div className="campo">
                    <label htmlFor="nombre">Nombre del gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Nombre que describa el gasto.'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    >
                    </input>
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        min='0'
                        placeholder='Ingrese el monto del gasto.'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    >
                    </input>
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="">--Seleccionar--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal