//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 
  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The issue was that useEffect had no dependency array, so it ran after every render.
// Inside the effect, setCount updated the state, which caused a re-render, creating an
// infinite loop.
//To fix this, I added an empty dependency array [],
// so the effect runs only once when the component mounts.
// I also used the functional form of setCount to safely
// update the state based on the previous value.
