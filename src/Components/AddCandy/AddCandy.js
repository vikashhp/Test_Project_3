import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const AddCandy =  (props) => {
  const cartCtx = useContext(CartContext);
  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const candyData = {
      candyName: inputName.current.value,
      candyDescription: inputDescription.current.value,
      candyPrice: inputPrice.current.value,
      id: Math.random(),
    };
    localStorage.setItem('price',inputPrice.current.value)

    cartCtx.addItem({
      price: +inputPrice.current.value,
      amount: 1,
    });

    const arr=[];
    arr.push(candyData)
    //  console.log(candyData)
    props.onAdd(candyData);

   fetch('https://crudcrud.com/api/2792163abc4447519a2cd870f19ee437/data',{
      method:'POST',
      body:JSON.stringify(candyData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res =>{
      console.log(res)
    })




  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Candy Name</label>
        <input type="text" ref={inputName} />
      </div>
      <div>
        <label>Candy Description</label>
        <input type="text" ref={inputDescription} />
      </div>
      <div>
        <label>Candy Price</label>
        <input type="number" ref={inputPrice} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddCandy;
