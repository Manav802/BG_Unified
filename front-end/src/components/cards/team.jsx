import { Heading } from "@chakra-ui/core";
import React from "react";

function team(props) {
  return (
    <div>
      <div className="team-card">
        <img src={props.img} alt="" />
        <div className="col d-flex p-4 flex-column">
          <span className="display5 mt-4 text-dark">{props.name}</span>
          <Heading size="sm" fontWeight="500" color="primary.500">{props.title}</Heading>
          <p className="mt-3">{props.children}</p>
        </div>
      </div>
    </div>
  );
}
export default team;
