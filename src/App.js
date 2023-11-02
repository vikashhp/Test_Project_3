import logo from "./logo.svg";
import "./App.css";
import AddCandy from "./Components/AddCandy/AddCandy";
import { useState } from "react";
import Candy from "./Components/ShowCandy/Candy";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Components/Store/CartContextProvider";
import { useEffect } from "react";

function App() {
  const [candy, setCandy] = useState([]);

  const candyDataHandler = (candyData) => {
    setCandy((previous) => {
      return [...previous, candyData];
    });
  };

  useEffect(() => {
    fetch("https://crudcrud.com/api/2792163abc4447519a2cd870f19ee437/data");
  }, [candy]);
  return (
    <CartContextProvider>
      <Cart />
      <AddCandy onAdd={candyDataHandler} />
      <Candy items={candy} />
    </CartContextProvider>
  );
}

export default App;
