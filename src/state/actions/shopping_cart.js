import { ADD_ITEM, CLEAR_SHOPPING_CART } from "../actionTypes"

//Action creators for shopping_cart
// Funciones que retornan acciones

/**
 * { type: '', payload: {} }
 * 
 */

export const addItem = (product)=>{
  return {
    type: ADD_ITEM,
    payload: product
  }
}

export const clearShoppingCart = ()=> ({
  type: CLEAR_SHOPPING_CART
})