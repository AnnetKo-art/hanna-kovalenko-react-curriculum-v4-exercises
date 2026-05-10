// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
//Imperatively re-focus the input when the button is clicked.

import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(null);

  // function focusInput() {}

  //Added by me
  const focusInput = () => {
    // Access the DOM element directly
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
