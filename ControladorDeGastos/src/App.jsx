import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState('');
  const [validoPresupuesto, setValidoPresupuesto] = useState(false);
  const [modal, setActivarModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);


  const setModal = () => {
    setActivarModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 100);
  }


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
          <img onClick={setModal} src={IconoNuevoGasto} alt="Agregar nuevo gasto." />
        </div>
      }
      {modal && <Modal
        setActivarModal={setActivarModal}
        setAnimarModal={setAnimarModal}
        animarModal={animarModal}
      />}
    </>
  )
}

export default App
