import CartContext from "../Store/CartContext";
import { useContext } from "react";

const ShowCandy = (props) => {
  const cartCtx = useContext(CartContext);

  const price = localStorage.getItem("price");

  const addOneCandy = () => {
    cartCtx.addItem({
      amount: 1,
      price: +price,
    });
  };

  const addTwoCandy=()=>{
    cartCtx.addItem({
      amount:2,
      price:+price
    })
  }
  const addThreeCandy=()=>{
    cartCtx.addItem({
      amount:3,
      price:+price
    })
  }

  return (
    <div>
      <li>
        <h2>CandyName-{props.candyName}' '</h2>
        <h2>CandyDescription-{props.candyDescription}' '</h2>
        <h2>CandyPrice-{props.candyPrice}</h2>
        <button onClick={addOneCandy}>Buy One</button>
        <button onClick={addTwoCandy}>Buy Two</button>
        <button onClick={addThreeCandy}>Buy Three</button>
      </li>
    </div>
  );
};

export default ShowCandy;
