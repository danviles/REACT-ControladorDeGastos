import React from 'react'

const Mensaje = ({tipo, children}) => {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default Mensaje