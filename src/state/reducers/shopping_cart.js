import { ADD_ITEM, CLEAR_SHOPPING_CART } from "../actionTypes";

// Son funciones puras
export default function(state = [], action){
  console.log(state);
  const shopping_cart = state;

  if(action.type === ADD_ITEM){
    // Buscamos si el SKU a agregar ya está en el carrito
    const skuIfAny = shopping_cart.find(sku => sku.id === action.payload.id);

    if(skuIfAny){
      return shopping_cart.map( sku => {
        if(sku.id === skuIfAny.id) return { ...sku, quantity: sku.quantity + 1 };
        return sku;
      });
    }
    // Agregar el SKU e iniciar cantidad 1
    return shopping_cart.concat([
      {
        ...action.payload,
        quantity: 1
      }
    ]);
  }

  if(action.type === CLEAR_SHOPPING_CART){
    return []
  }

  return shopping_cart;
}