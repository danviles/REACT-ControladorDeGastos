import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ presupuesto, setPresupuesto, gastos, setGastos, setValidoPresupuesto}) => {

    const formatearPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })
    }

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000);
    }, [gastos]);

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if(resultado) {
            setGastos([])
            setPresupuesto(0)
            setValidoPresupuesto(false)
        } 
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#cecece',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p><span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}</p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}><span>Disponible:</span> {formatearPresupuesto(disponible)}</p>
                <p><span>Gastado:</span> {formatearPresupuesto(gastado)}</p>
            </div>
        </div>
    )
}

export default ControlPresupuesto