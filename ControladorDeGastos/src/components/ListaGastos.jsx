import React from 'react'
import Gasto from './Gasto'

const ListaGastos = ({ gastos, setGastoEditar, setGastoEliminar }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length > 0 ? 'Gastos' : 'No Hay Gastos'}</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar} 
                    setGastoEliminar={setGastoEliminar}
                />
            ))}
        </div>
    )
}

export default ListaGastos