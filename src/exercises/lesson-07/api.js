//This is where the functions used to fetch posts will live.
/**
 * Instructions:
 * The `POSTS_ENDPOINT` url returns a list of post objects
 * from the JSONPlaceholder API.
 * Your task is to finish implementing the two functions in this file
 * so that they fetch data from the API and return the results as JSON.
 * Then, you will use that data in `<FetchOnRender>` and `<FetchOnClick>`.
 *
 * TIP: A request to `https://jsonplaceholder.typicode.com/posts/`
 * returns an array of posts.
 * A request to `https://jsonplaceholder.typicode.com/posts/1`
 * returns a single post object with an `id` of 1.
 * Try pasting those URLs into your browser to see the results!
 */

const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';
export function getPosts() {
  console.log('[getPosts]: fetching list of posts');
  //Option 1 - when I render all posts or I want to limit till ten posts using method slice in FetchOnRender.jsx
  // Or it is also to display all posts.
  //const url = POSTS_ENDPOINT;

  //Option 2 - to display only 10 posts  using query parameter STRETCH GOAL
  const url = `${POSTS_ENDPOINT}?_limit=10`;
  return fetch(url).then((response) => response.json());
}

export function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }
  console.log('[getSinglePost]: fetching post with id:', postId);
  const url = `${POSTS_ENDPOINT}${postId}`;
  return fetch(url).then((response) => response.json());
}
