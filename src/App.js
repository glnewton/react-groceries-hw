import React, { useState } from "react";
import "./App.css";
import groceries from "./data.js";
import Item from "./components/Item";

const list = groceries.map((element, index) => {
  return !element.isPurchased && <Item element={element} key={index} />;
});

function App() {
  const [groceryList, setGroceryList] = useState(groceries);
  
  const addItem = (event) => {
    event.preventDefault();
    setGroceryList(groceryList.concat([{
      item: document.querySelector("input[name='item']").value,
      brand: document.querySelector("input[name='brand']").value,
      units: document.querySelector("input[name='units']").value,
      quantity: document.querySelector("input[name='quantity']").value,
      isPurchased: false
    }]))}
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addItem();
  // };

  return (
    <div className="App">
      <h1>My Grocery List</h1>
      {/* {list} */}
      { groceryList.map((element, index) => { 
          return (!element.isPurchased && <Item element={element} key={index} />)
        })
      }
      
      <form onSubmit={addItem}>
        <h3>Add an item to your list</h3>
        <p>Item: <input type="text" name="item"></input></p>
        <p>Brand: <input type="text" name="brand"></input></p>
        <p>Units: <input type="text" name="units"></input></p>
        <p>Quantity: <input type="number" name="quantity"></input></p>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;


// setItem((prev) => prev.map((item) => (item.id === itemId ? newValue : item)));
