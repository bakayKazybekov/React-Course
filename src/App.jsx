import { useState } from "react";
import "./App.css"
import AddTask from "./componets/AddTask/AddTask";
import List from "./componets/List/List";

function App() {
  const [count, setCount] = useState(1);
  console.log(count)


  const str = 'str';
  const arr = ['item 1', 'item 2', 'item 3'];
  const num = 123;

  const handleCount = () => {
    setCount(2)
  }

  return (
    <>
      <h1 className={"list"}>Todo List</h1>
      <button onClick={handleCount}>CLICK</button>
      <AddTask/>
      <List 
        count={count} 
        str={str} 
        arr={arr}
        num={num}
      />
    </>
  );
}

export default App;
