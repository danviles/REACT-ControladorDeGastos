import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState('');
  const [validoPresupuesto, setValidoPresupuesto] = useState(false);

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validoPresupuesto={validoPresupuesto}
        setValidoPresupuesto={setValidoPresupuesto}
      />
      {validoPresupuesto &&
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="Agregar nuevo gasto." />
        </div>
      }
    </>
  )
}

export default App
