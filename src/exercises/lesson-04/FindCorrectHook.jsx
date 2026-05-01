// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useRef } from 'react';
//OPTION 1
// In this solution, we use 2 useRef variables:
// 1. clickCount — to store the click count without triggering re-renders
// 2. buttonRef — to manually update the button's text in the DOM,
//    since without useState, React won't re-render to reflect the change.
//    This second ref is needed *because* we're avoiding re-renders entirely.

export default function FindCorrectHook() {
  const clickCount = useRef(0);
  const buttonRef = useRef(null);

  const handleClick = () => {
    //Increment the .current property directly
    clickCount.current += 1;

    // Directly updates the DOM element’s text without triggering a React re-render.
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
    //Log to see it updating (it won't update the UI automatically)
    console.log(`Button clicked ${clickCount.current} times`);
  };

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        {clickCount.current} Clicks
      </button>
    </div>
  );
}

//EXPLANATIONS
// useRef was chosen instead of useState because useRef allows us to store a mutable value
// that persists across renders without triggering a re-render of the component.
// In this solution, clickCount is stored in a useRef so that its value updates on each click,
// but React does not re-render the component when it changes.
//
// Additionally, a second useRef (buttonRef) was added to directly access the DOM button element.
// This was necessary because, since useRef does not trigger re-rendering, the UI will not update automatically.
// Therefore, the button text is manually updated using buttonRef.current.textContent,
// which reflects the updated click count immediately in the UI.
//
// The console.log statement was also added to track the updated click count during each interaction,
// allowing us to verify that the value is correctly increasing even without React re-renders.

//OPTION 2 -
// This Option updates information in Console using useRef hook BUT it doesn't update
// clicks in button in UI.
/*
export default function FindCorrectHook() {
  //let clickCount = 0; // ← incorrect implementation

  const clickCount = useRef(0);

  const handleClick = ()=>{
    //Increment the .current property directly
    clickCount.current += 1;
    
    //Log to see it updating (it won't update the UI automatically)
    console.log(`Button clicked ${clickCount.current} times`);
  };

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount.current} Clicks</button>
    </div>
  );
}
*/

//THIS OPTION MAKES A RE-RENDER!using useState
/*
import { useState} from "react";

export default function FindCorrectHook() {
  //let clickCount = 0; // ← incorrect implementation

  const[clickCount, setclickCount]=useState(0);

  function handleClick() {
    //clickCount++;
    setclickCount((previousCount) => previousCount + 1); //this is option 2
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

*/

//THIS IS INITIAL PIECE OF CODE
// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
/*export default function FindCorrectHook() {
  let clickCount = 0; // ← incorrect implementation

  function handleClick() {
    clickCount++;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}*/
