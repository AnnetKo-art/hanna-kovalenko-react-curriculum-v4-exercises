//Custom hook that moves reusable React logic out of the component
//This hook is responsible for storing tasks/storing loading state/fetching/simulating data/returning the data to components
import { useEffect, useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);

      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { tasks, loading };
}
