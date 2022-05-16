import React from 'react';

import '../style/components/Success.css';

const Payment = () => {
  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        <div className='Payment-button'>
          Boton de pago con Paypal
        </div>
      </div>
    </div>
  )
}

export default Payment