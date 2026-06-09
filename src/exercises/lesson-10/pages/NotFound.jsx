import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation(); // Initialize the hook
  const pathname = location.pathname; // Extract the path

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>The path you tried to visit ({pathname}) does not exist.</p>
      <Link to="..">Return to Home</Link>
    </section>
  );
}
