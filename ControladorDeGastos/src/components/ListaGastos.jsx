import React from 'react'
import Gasto from './Gasto'

const ListaGastos = ({ gastos,
    setGastoEditar,
    setGastoEliminar,
    filtro,
    gastosFiltrados
}) => {
    return (
        <div className="listado-gastos contenedor">
            { filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                setGastoEliminar={setGastoEliminar}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                setGastoEliminar={setGastoEliminar}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListaGastos