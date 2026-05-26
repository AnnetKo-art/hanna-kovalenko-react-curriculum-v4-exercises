//This component fetches _a list of posts_ as soon as it renders, then displays them.
import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(''); //error handling Stretch Goal

  useEffect(() => {
    //setError("");
    getPosts()
      .then((data) => {
        setPosts(data); //renders all the posts or limited amount, depending on what we choose in api.jsx file
        //setPosts(data.slice(0, 10)); //renders only 10 posts Using Option 1  const url = POSTS_ENDPOINT;  in FetchOnRender.jsx
      })
      .catch(() => {
        setError('Failed to load posts. Please, try again later.');
      });
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
