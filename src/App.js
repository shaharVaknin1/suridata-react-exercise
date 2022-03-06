import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, selectPosts } from "../src/store/posts";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            console.log(posts);
            dispatch(getAllPosts());
          }}
        >
          load all posts
        </button>
        <p>
          {posts.map((post) => (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </>
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
