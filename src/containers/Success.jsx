import React from 'react';

import '../style/components/Success.css';

const Success = () => {
  return (
    <div className='Success'>
      <h2>Ludwing, Gracias por tu compra</h2>
      <span>Tu pedido llegara en 3 días a tu rirección:</span>
      <div className='Success-map'>
        Google Maps
      </div>
    </div>
  )
}

export default Success