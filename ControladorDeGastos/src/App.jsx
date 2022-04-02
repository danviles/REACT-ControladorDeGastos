import { useState, useEffect } from 'react'
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
  const [gastoEditar, setGastoEditar] = useState({});
  const [gastoEliminar, setGastoEliminar] = useState({});

  useEffect(() => {

    if (Object.keys(gastoEditar).length > 0) {
      setActivarModal(true);
      setTimeout(() => {
        setAnimarModal(true)
      }, 100);
    } else if (Object.keys(gastoEliminar).length > 0) {
      const listaEditada = gastos.filter(gasto => gasto.id !== gastoEliminar.id)
      setGastos(listaEditada);
    }

  }, [gastoEditar, gastoEliminar])


  const setModal = () => {
    setGastoEditar({});
    setActivarModal(true);
    setTimeout(() => {
      setAnimarModal(true)
    }, 100);
  }

  const guardarGastos = ((gasto) => {
    if (gasto.id) {
      setGastos(gastos.map(g => g.id == gasto.id ? gasto : g));
    } else {
      gasto.id = generarID();
      gasto.fecha = formatearFecha(Date.now());
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setActivarModal(false)
    }, 500);
    setGastoEditar({});
  });


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validoPresupuesto={validoPresupuesto}
        setValidoPresupuesto={setValidoPresupuesto}
        gastos={gastos}
      />
      {validoPresupuesto && (
        <>
          <main>
            <ListaGastos gastos={gastos} setGastoEditar={setGastoEditar} setGastoEliminar={setGastoEliminar} />
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
        gastoEditar={gastoEditar}
      />}
    </div>
  )
}

export default App
