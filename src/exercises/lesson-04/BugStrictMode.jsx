// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId); //cleaning part was added here
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

//React StrictMode intentionally runs useEffect twice in development
// to help detect side effects. In the original code,
// this caused multiple setInterval timers to be created,
//  making the counter increment faster than expected.
//  By adding a cleanup function that clears the interval,
//  we ensure that the previous interval is removed before a new one is created.
// This guarantees that only one interval runs at a time and prevents the bug.
//In addition, this bug would also appear in production without StrictMode
// if the component unmounts and remounts for any reason (e.g. routing).
// StrictMode just surfaces it early, in development.
