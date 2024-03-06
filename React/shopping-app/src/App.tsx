import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("Made to the app component");
    setItems([...items, {id: uuid(), product, quantity}])
  }
//   const items = [
//     {id: 1, product: "Lemon", quantity:3 },
//     {id: 2, product: "Milk", quantity:1},
// ];

  return (
    <div className="App">
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
