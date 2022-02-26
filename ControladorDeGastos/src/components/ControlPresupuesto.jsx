import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatearPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p><span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}</p>
                <p><span>Disponible:</span> {formatearPresupuesto(presupuesto)}</p>
                <p><span>Gastado:</span> {formatearPresupuesto(presupuesto)}</p>
            </div>
        </div>
    )
}

export default ControlPresupuesto