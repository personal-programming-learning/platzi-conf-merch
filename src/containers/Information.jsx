import React from 'react';

import '../style/components/Information.css';

const Information = () => {
  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Información de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form action=''>
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="email" placeholder='Correo electronico' name='email' />
            <input type="text" placeholder='Dirección' name='address' />
            <input type="text" placeholder='apto / casa' name='apto' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Pais' name='country' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Codigo postal' name='cp' />
            <input type="text " placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            Regresar
          </div>
          <div className='Information-back'>
            Pagar
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedido:</h3>
        <div className='Information-element'>
          <h4>ITEM Name:</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  )
}

export default Information