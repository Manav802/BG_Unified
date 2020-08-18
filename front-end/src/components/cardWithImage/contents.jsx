import React from "react";

function Content(props) {
  return (
    <div className="contents">
      <span className="title">{props.title}</span>
      <p className="text">{props.text}</p>
    </div>
  );
}

export default Content;
