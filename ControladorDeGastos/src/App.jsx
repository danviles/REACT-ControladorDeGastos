import { useState } from 'react'
import Header from './components/Header'
import ListaGastos from './components/ListaGastos';
import Modal from './components/Modal';
import { generarID, formatearFecha } from './Helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState('');
  const [validoPresupuesto, setValidoPresupuesto] = useState(false);
  const [modal, setActivarModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);


  const setModal = () => {
    setActivarModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 100);
  }

  const guardarGastos = ((gasto) => {
    gasto.id = generarID();
    gasto.fecha = formatearFecha(Date.now());
    setGastos([...gastos, gasto]);
    setAnimarModal(false)
    setTimeout(() => {
      setActivarModal(false)
    }, 500);
  });


  return (
    <div className={modal ? 'fijar' : '' }>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validoPresupuesto={validoPresupuesto}
        setValidoPresupuesto={setValidoPresupuesto}
      />
      {validoPresupuesto && (
        <>
          <main>
            <ListaGastos gastos={gastos}/>
          </main>
          <div className="nuevo-gasto">
            <img onClick={setModal} src={IconoNuevoGasto} alt="Agregar nuevo gasto." />
          </div>
        </>
      )}
      {modal && <Modal
        setActivarModal={setActivarModal}
        setAnimarModal={setAnimarModal}
        animarModal={animarModal}
        guardarGastos={guardarGastos}
      />}
    </div>
  )
}

export default App
