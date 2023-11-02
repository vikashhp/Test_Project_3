import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultState={
    items:[],
    totalAmount:0
}

const reducerfn=(state,action)=>{
    if(action.type === 'ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
  return defaultState
}


const CartContextProvider = (props) => {

    const [cartState,dispatchCartAction]=useReducer(reducerfn,defaultState)
 
  const addItemToCartHandler = (item) => {
   dispatchCartAction({type:'ADD',item:item})
  };

  const cart = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
