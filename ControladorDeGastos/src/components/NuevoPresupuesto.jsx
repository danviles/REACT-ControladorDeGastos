import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form action="" className="formulario">
            <div className="campo">
                <label>Introducir Presupuesto</label>
                <input 
                className="nuevo-presupuesto" 
                type="text"
                placeholder='¿ De cuanto es tu presupuesto ?' 
                />
            </div>
            <input type="submit" value="Añadir" />
        </form>
    </div>
  )
}

export default NuevoPresupuesto