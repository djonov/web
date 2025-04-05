import { useState } from "react";
import { usePostContext } from "../context/PostContext";

const UpdatePost = () => {
  const { updateData } = usePostContext();
  const [postId, setPostId] = useState<number>(1);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleSubmit = () => {
    updateData(postId, newTitle);
    setNewTitle("");
  };

  return (
    <div>
      <h2>Ажурирај пост</h2>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(Number(e.target.value))}
      />
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Ажурирај</button>
    </div>
  );
};

export default UpdatePost;