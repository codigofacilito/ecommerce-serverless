import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart, addItem } from '../state/actions/shopping_cart';
import AddToCart from './AddToCart';

const AddToCartBtn = ({ sku }) => {
  const dispatch = useDispatch();

  const addProductToCart = (ev)=>{
    dispatch(addItem(sku));
  }

  return (
    <AddToCart addProduct={addProductToCart} />
  )
}


export default connect(null, { addToCart })(AddToCartBtn);