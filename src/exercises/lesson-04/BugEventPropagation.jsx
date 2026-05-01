// TOPIC: Event Bubbling & Stopping Propagation
//Prevent clicks in button from bubbling up to the
//  event listener on the box with the red border.
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  const handleInnerClick = (e) => {
    e.stopPropagation();
    alert('Button Clicked ✅');
  };

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

//Explanation
//In this code I added: e.stopPropagation();
//To prevent an event from bubbling up to parent elements in React,
// I called e.stopPropagation() inside the button's click handler.
//With this line I am telling the browser:
// "Stop this event right here—don’t pass it to parent elements.”
//As the result, when I click the button - only "Button Clicked ✅" shows
//The outer red box click handler is never triggered
