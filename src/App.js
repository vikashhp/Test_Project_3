import logo from "./logo.svg";
import "./App.css";
import AddMedicine from "./Components/AddMedicine/AddMedicine";
import { useState } from "react";
import Candy from "./Components/ShowCandy/Medicine";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Components/Store/CartContextProvider";
import { useEffect } from "react";

function App() {
  const [medicine, setMedicine] = useState([]);

  const candyDataHandler = (candyData) => {
    setMedicine((previous) => {
      return [...previous, candyData];
    });
  };

  useEffect(() => {
    fetch("https://crudcrud.com/api/2792163abc4447519a2cd870f19ee437/data");
  }, [medicine]);
  return (
    <CartContextProvider>
      <Cart />
      <AddMedicine onAdd={candyDataHandler} />
      <Candy items={medicine} />
    </CartContextProvider>
  );
}

export default App;
