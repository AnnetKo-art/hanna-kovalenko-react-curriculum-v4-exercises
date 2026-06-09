import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate(); // Initialize the hook

  function handleGoHome() {
    navigate('/');
  }

  function handleBack() {
    // Go back one step in browser history
    navigate(-1);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>This page exists to practice useNavigate().</p>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleGoHome}>Go Home (navigate)</button>
        <button onClick={handleBack}>Back (navigate -1)</button>
      </div>
    </section>
  );
}
