// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    //setCount(count+1);  - this is option 1
    setCount((previousCount) => previousCount + 1); //this is option 2
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The state variable `count` was mutated directly using `count++`.
// In React, state should be treated as immutable and never modified directly.
// Instead, we should use the state setter function `setCount` to update the value.
// The correct approach is to use `setCount(count + 1)` or
// the functional update form `setCount(previousCount => previousCount + 1)`,
// that ensures we  work with the latest state value.
