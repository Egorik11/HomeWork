import React, { useState, useEffect } from "react";

export default function PostTitle({ posts }) {
  return (
    <div>
      <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span>{posts.title}</span>
        <a className="uk-text-small" href="#">
          Author{posts.id}
        </a>
      </h1>
      <div className="uk-article uk-dropcap uk-margin-large-bottom">
        <p>{posts.body}</p>
      </div>
      <hr />
    </div>
  );
}
