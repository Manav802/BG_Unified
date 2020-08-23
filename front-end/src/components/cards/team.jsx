import React from "react";

function team(props) {
  return (
    <div>
      <div className="team-card">
        <img src={props.img} alt="" />
        <div className="col d-flex p-4 flex-column">
          <span className="display5 mt-4 text-dark">{props.name}</span>
          <span className="h6 text-primary text-secondary">{props.title}</span>
          <p className="mt-3">{props.children}</p>
        </div>
      </div>
    </div>
  );
}
export default team;
