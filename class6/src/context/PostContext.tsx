import { createContext, useContext, useState, ReactNode } from "react";
import { fetchPosts, updatePost } from "../services/api";

interface Post {
  id: number;
  title: string;
}

interface PostContextType {
  posts: Post[];
  fetchData: () => void;
  updateData: (id: number, title: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  const updateData = async (id: number, title: string) => {
    const updatedPost = await updatePost(id, title);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, title: updatedPost.title } : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, fetchData, updateData }}>
      {children}
    </PostContext.Provider>
  );
};