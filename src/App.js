import React, {useState} from 'react';


import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

  }

  const decerment = () => {
    setCount(count - 1);
    
  }

  return (
   <>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decerment}>decerment</button>
   </>
  );
}

export default App;
