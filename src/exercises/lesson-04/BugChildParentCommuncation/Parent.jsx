import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  // This function handles the "action"
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onButtonClick={increment} />
    </div>
  );
}

//Explanation
//In this Child-Parent communication I modified increment function properly according to
//standards of usage of useState.
//From a parent component i am passing the increment function as a prop named onButtonClick.
//In Child.jsx I receive that prop
//onButtonClick is simply a reference to the increment function defined in the parent.
//When I do onClick={() => onButtonClick()} in Child.jsx, I am calling that function.
