import React from 'react';

export default ({ price, currency, className }) => {
  return(
    <span className={`inline-block uppercase ${className} `}>
      ${price / 100}<span className="text-sm">{currency}</span>
    </span>
  )
}