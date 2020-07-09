import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import PostTitle from "./components/Post Title/PostTitle";
import Comments from "./components/Comments/Comments";
import AddComment from "./components/AddComment/AddComment";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setPosts(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loader-wrapper">
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    return (
      <main className="uk-main">
        <Header />
        <div className="uk-section">
          <div className="uk-container">
            <PostTitle dataOfUser={posts} />
            <Comments comments={posts.comments} />
            <AddComment />
          </div>
        </div>
      </main>
    );
  }
}
export default App;
