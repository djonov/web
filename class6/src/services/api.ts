import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const updatePost = async (id: number, title: string) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, { title });
  return response.data;
};