import { useEffect } from "react";
import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, fetchData } = usePostContext();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Постови</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;