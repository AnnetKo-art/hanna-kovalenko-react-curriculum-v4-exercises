export default function Child({ onButtonClick }) {
  return <button onClick={() => onButtonClick()}>Increment Counter</button>;
}

//Explanation
//I’ve declared an increment function in Parent that calls
//setCount(count + 1).
//I pass that function down to Child as a prop named onButtonClick.
//Inside Child I invoke it with onClick={() => onButtonClick()}, which simply calls the parent’s increment.
//That call bubbles back up and updates the Parent’s count state.
