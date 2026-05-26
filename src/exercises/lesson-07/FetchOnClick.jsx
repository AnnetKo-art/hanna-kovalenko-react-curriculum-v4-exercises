//This component fetches _a single post_ when a button is clicked, then displays that post.
import { getSinglePost } from './api';
import { useState } from 'react';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); //Error Handling Stretch Goal

  const handleClick = () => {
    const randomId = Math.floor(Math.random() * 100) + 1; //Random function to display one rendom post.
    setLoading(true);
    setPost(null); // optional: clears previous post
    setError(''); // reset error

    // getSinglePost(1)//renders only first post - one of the options
    getSinglePost(randomId)
      .then((data) => {
        setPost(data);
      })
      .catch(() => {
        setError('Failed to load post. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get post'}
      </button>

      <div className="content">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/*// Stretch goal*/}
        {loading && <p>Loading post...</p>}
        {!loading && post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
        {!loading && !post && (
          <p>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </p>
        )}
      </div>
    </div>
  );
}
