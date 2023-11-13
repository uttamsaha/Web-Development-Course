import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0,20)));
  }, []);
  return (
    <div>
      <h2>Every posts: {posts.length}</h2>
      {posts.map((post) => (
        <Link className="post-id" to={`/posts/${post.id}`} key={post.id}>
          {post.id}
        </Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};
export default Posts;
