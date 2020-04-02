import React from 'react';
import Price from './Price';
import AddToCartConnected from './AddToCartConnected';

export default ({ product, skus }) => {
  const sku = skus[0];
  return(
    <article className="card">
      <header className="bg-blue-800 p-6 text-center">
        <div className="flex text-left">
          <div className="flex-1">
            {
              (sku && sku.image) && 
              <img src={skus[0].image} alt="Imagen del producto" />
            }
          </div>
          <div className="flex-1 px-6">
            <p className="text-blue-300">Precio</p>
            <Price {...sku} className="text-2xl" />
          </div>
        </div>
      </header>
      <div className="text-center p-6">
        <h1 className="text-3xl uppercase mb-4">{product.name}</h1>
        <AddToCartConnected sku={sku} />
      </div>
    </article>
  )
}