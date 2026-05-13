import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilterButtons from '../../components/TaskFilterButtons';
import TaskItem from '../../components/TaskItem';
import { filterTasks } from '../../utils/filterTasks';
import useTasks from '../../hooks/useTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilterButtons filter={filter} setFilter={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
