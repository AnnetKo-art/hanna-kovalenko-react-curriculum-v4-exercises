//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Hanna';
  const age = 45;
  const hobbies = [
    'Playing music instruments',
    'Singing',
    'Zumba dancing',
    'Coding',
    'AI Marketing',
    'Developing Social media content',
    'Travelling',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        {' '}
        My name is {name} and I am {age} years old. These are my hobbies:
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
