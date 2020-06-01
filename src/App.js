import React, { useState, useEffect } from 'react';
import './App.css';
import { FuncCompo } from './components/FuncCompo';

export const App = (props) => {

  //    count    - seCount
  //    variable - function (setState)
  //    [variable, setVariable]
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log(props);

  useEffect(() => {
    increment();
  }, [toggle]);

  const increment = () => {
    setCount(count + 1);
  };

  const toggler = () => {
    setToggle(!toggle);
  };
  
  return (
    <div>
      <h1>count: { count }</h1>
      <button onClick={ increment }>Increment</button>
      <button onClick={ toggler }>Toggle</button>
    </div>
  )
}
