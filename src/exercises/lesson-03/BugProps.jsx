// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating - ALREADY FIXED 

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name); //mine

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// In this version of the code, I imported the useState hook because the message
// is dynamic and needs to be managed as state in order to trigger re-renders.
// I also used array destructuring to extract the state variable (message)
// and its setter function (setMessage) from useState.
// The setter function is used to update state in an immutable way,
// which tells React that the component state has changed and triggers a re-render.
// In the handleChange function, I call setMessage to update the state with a new string.
// When the state updates, React re-executes the component function and updates
// the UI to reflect the new message.
