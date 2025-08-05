import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?user.Id=${id}`)
      setPosts(data)
    }
    fetchPosts();
  }, []);
  return <div>
    {posts.map(post => <div>{post.title}</div>)}
    </div>;
}
