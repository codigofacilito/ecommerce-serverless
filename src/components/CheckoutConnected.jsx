import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';

export default ({ shoppingCart }) => {
  const [stripe,setStripe] = useState({});
  useEffect(()=>{
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, []); //componentDidMount

  const redirectToCheckout = async (ev) =>{
    const response = await stripe.redirectToCheckout({
      items: shoppingCart.map(sku => ({sku: sku.id, quantity: sku.quantity}) ),
      successUrl: `http://localhost:8000/completado`,
      cancelUrl: `http://localhost:8000`,
    });

    if(response.error){
      console.log(response.error);
    }
  }

  return(
    <Checkout redirectToCheckout={redirectToCheckout} />
  )
}