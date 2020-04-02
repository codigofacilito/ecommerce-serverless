import React from 'react';
import ProductCard from './ProductCard';

export default ({ products }) => {
  return(
    <div>
      {
        products.map((product) => (
          <ProductCard product={product} key={product.id}>{product.name}</ProductCard>
        ))
      }
    </div>
  )
}