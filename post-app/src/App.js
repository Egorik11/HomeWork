import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import PostTitle from "./components/Post Title/PostTitle";
import Comments from "./components/Comments/Comments";
import AddComment from "./components/AddComment/AddComment";

function App() {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setComments(data.comments)
      });
  }, {});


  return (
    <>
      <main className="uk-main">
        <Header />
        <div className="uk-section">
          <div className="uk-container">
            <PostTitle posts={posts} />
            <Comments comments={comments}/>
            <AddComment />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
