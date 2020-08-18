import React from "react";

function Links(props) {
  return (
    <div className="links">
      <a href={props.blackLink} className="display6">
        Action
      </a>
      <a href={props.redLink} className="display6 red">
        Action
      </a>
    </div>
  );
}

export default Links;
