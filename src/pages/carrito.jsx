import React from 'react';
import Layout from '../components/Layout';
import { useSelector, shallowEqual } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
export default (props) => {
  const shoppingCart = useSelector(state => state.shopping_cart,shallowEqual);

  return(
    <Layout>
      <ShoppingCart shoppingCart={shoppingCart}/>
    </Layout>
  )
}