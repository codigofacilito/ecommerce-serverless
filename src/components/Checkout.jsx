import React from 'react';

export default ({ redirectToCheckout }) => {
  return(
    <button onClick={redirectToCheckout} className="w-full app-btn text-xl">Checkout</button>
  )
}