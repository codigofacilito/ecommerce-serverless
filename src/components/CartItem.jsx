import React from 'react';
import Price from './Price';
export default ({sku}) => {
  return(
    <div className="p-6 border-b flex">
      <div className="flex-1">
        <p className="font-bold uppercase"> {sku.attributes.name} </p>
        <Price {...sku} className="text-blue-300 mt-1" />
      </div>
      <div>
        <p className="px-4">{ sku.quantity }</p>
      </div>
    </div>
  )
}