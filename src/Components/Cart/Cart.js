import { useContext } from "react";

import CartContext from "../Store/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <div>
      <span>
        <p>Cart</p>
        <h2>{numberOfCartItems}</h2>
      </span>
      <span>
        <p>TotalAmount</p>
        <h2>{cartCtx.totalAmount}</h2>
      </span>
    </div>
  );
};

export default Cart;
