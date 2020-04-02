import React from 'react';
import cardSuccess from '../images/card-success.png';

export default (props) => {
  return(
    <div className="card p-12 text-center">
      <img className="h-48 inline-block" src={cardSuccess} alt="Tarjeta de crédito con un icono de aprobación" />
      <p className="text-4xl mt-12 font-semibold">Tu pago fue procesado</p>
      <p>Recibirás en tu correo electrónico un comprobante de pago e instrucciones adicionales</p>
    </div>
  )
}