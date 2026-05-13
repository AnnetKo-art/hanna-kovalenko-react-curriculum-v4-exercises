// Reusable component that displays a single task item
// Receives task data through props and shows task status

export default function TaskItem({ task }) {
  return (
    <li>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
