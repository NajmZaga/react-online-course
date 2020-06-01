import React, { useEffect } from 'react';

export const FuncCompo = ({ text, count }) => {
    // Hooks => Component's lifecycle
  // ComponentDid / Will

  // - 1: UseEffect()
  // Lifecycles that can be replaced by useEffect:
  /*
    1 - Component Did Mount
    2 - Component Did Update
    3 - Component Will Unmount
  */

  const sayYees = (counter) => {
    if (counter === 10) console.log('Yeeees');
  }

  // Replaces Component Did Mount
  useEffect(() => {
    // console.log("I'm a Hook");
  }, []);

  // Component Did Update
  // Watch 
  useEffect(() => {
    sayYees(count);
    console.log('----> Text in here: ', text);
  }, [count, text]);

  // Component Will Unmount
  useEffect(() => {
    return () => {
      console.log("Getting out");
    }
  });


  return (
    <div>
      hello from function component
    </div>
  )
}
