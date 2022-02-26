import { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setValidoPresupuesto }) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje('El presupuesto no es valido.');
            return;
        }
        setMensaje('');
        setValidoPresupuesto(true);
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Introducir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder='¿ De cuanto es tu presupuesto ?'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje ? <Mensaje tipo="error">{mensaje}</Mensaje> : null}
            </form>
        </div>
    )
}
export default NuevoPresupuesto