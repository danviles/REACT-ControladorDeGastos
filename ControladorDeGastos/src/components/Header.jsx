import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto, validoPresupuesto, setValidoPresupuesto }) => {
    return (
        <header>\
            {validoPresupuesto
                ?
                <ControlPresupuesto
                    presupuesto={presupuesto}
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