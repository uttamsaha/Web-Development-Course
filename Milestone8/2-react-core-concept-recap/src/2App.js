import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0) //array destructuring useStates function return the value inside it is 0 and a function whihc is setCount function 
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  //decresae count
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}

export default App;
