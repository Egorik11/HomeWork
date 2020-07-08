import React from "react";

export default function AddComment() {
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
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              placeholder="Email"
              required
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
              Post Comment
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
