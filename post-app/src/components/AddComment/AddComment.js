import React, { useState, useEffect } from "react";
import App from "../../App";

export default function AddComment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const ulr = "https://jsonplaceholder.typicode.com/posts/1/comments";
  const data = { name: "Egor" };

  fetch(ulr, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status < 400) {
        console.log("статус норм");
      }
    })

  function changeName(e) {
    setName(e.target.value);
    console.log(name);
    
  }
  function changeEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  return (
    <>
      <form action="#" className="uk-comment-form uk-margin-medium-top">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Add Comment</legend>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={changeName}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="uk-margin">
            <textarea
              className="uk-textarea"
              rows={5}
              placeholder="Comment"
              required
              defaultValue={""}
            />
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary" type="submit">
              fdfdfdf
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
