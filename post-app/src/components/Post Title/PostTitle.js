import React from "react";

export default function PostTitle({ dataOfUser }) {

  return (
    <div>
      <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span>{dataOfUser.title}</span>
        <a className="uk-text-small" href="#">
          {dataOfUser.user.name}
        </a>
      </h1>
      <div className="uk-article uk-dropcap uk-margin-large-bottom">
        <p>{dataOfUser.body}</p>
      </div>
      <hr />
    </div>
  );
}
