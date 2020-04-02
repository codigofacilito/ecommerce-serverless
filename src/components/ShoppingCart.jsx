import React from 'react';
import CartItem from './CartItem';
import Total from './Total';
import ClearShoppingCartConnected from './ClearShoppingCartConnected';
import CheckoutConnected from './CheckoutConnected';

export default ({ shoppingCart }) => {
  console.log(shoppingCart);
  return(
    <div className="card">
      <div className="flex items-end bg-blue-700">
        <div className="flex-1">
          <header className="flex p-6 items-center">
            <h2 className="text-3xl flex-1 font-semibold">Mi carrito de compras</h2>
            <div>
              <ClearShoppingCartConnected />
            </div>
          </header>
          <ul>
            {
              shoppingCart.map(sku => <CartItem sku={sku} key={sku.id}></CartItem>)
            }
          </ul>
        </div>
        <div className="w-1/3 text-right p-6 font-semibold">
          <Total shoppingCart={shoppingCart} />
        </div>
      </div>

      <div className="p-6">
        <CheckoutConnected shoppingCart={shoppingCart} />
      </div>
      
    </div>
  )
}