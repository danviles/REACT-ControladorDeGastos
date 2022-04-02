import React, { useState, useEffect } from 'react'

const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const formatearPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})
    }

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos])
    

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p><span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}</p>
                <p><span>Disponible:</span> {formatearPresupuesto(disponible)}</p>
                <p><span>Gastado:</span> {formatearPresupuesto(gastado)}</p>
            </div>
        </div>
    )
}

export default ControlPresupuesto