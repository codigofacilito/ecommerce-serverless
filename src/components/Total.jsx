import React from 'react';
import Price from './Price';

export default ({shoppingCart}) => {
  const total = shoppingCart.reduce(
    (total, product)=> (product.price * product.quantity) + total
  , 0)
  return(
    <div>
      <p className="uppercase text-blue-200">Total</p>
      <Price price={total} currency={"MXN"} className="text-2xl" />
    </div>
  )
}