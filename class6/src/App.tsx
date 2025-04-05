import { PostProvider } from "./context/PostContext";
import PostList from "./components/PostList";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <PostProvider>
      <h1>React HTTP и Context Demo</h1>
      <PostList />
      <UpdatePost />
    </PostProvider>
  );
}

export default App;