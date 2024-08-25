import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Home");
  const [posts, setPosts] = useState([]);

  console.log(posts);
  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleClick = (event) => {
    const tab = event.target.textContent;
    if (tab === selected) return;
    setSelected(tab);
  };

  return (
    <div className="App-container">
      <Sidebar selected={selected} setSelected={handleClick} />
      <div className="content">
        <Header />
        {selected === "Home" ? (
          <CreatePost addPost={addPost} />
        ) : (
          <PostList posts={posts} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
