import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto, validoPresupuesto, setValidoPresupuesto, gastos, setGastos }) => {
    return (
        <header>
            {validoPresupuesto
                ?
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setPresupuesto={setPresupuesto}
                    setGastos={setGastos}
                    setValidoPresupuesto={setValidoPresupuesto}
                />
                :
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setValidoPresupuesto={setValidoPresupuesto}
                />
            }
        </header>
    )
}

export default Header       