import React from "react";
import { Image, Box } from "@chakra-ui/core";

function CardWithIcon(props) {
  return (
    <div
      className="card-with-action rounded bg-white p-3"
      style={{ minHeight: "180px" }}
    >
      {props.icon && (
        <div className="row iconbox">
          <Image src={props.icon} size="48px" color={props.iconColor} />
        </div>
      )}
      <div className="row display6 mt-2 mx-3">{props.title}</div>
      <div className="row cardContent mt-2 mx-3">{props.children}</div>
      <div className="row mx-3 my-3">
        <a href="#" className="mx-2 text-primary">
          {props.action1}
        </a>
        <a href="#" className="mx-2 text-dark">
          {props.action2}
        </a>
      </div>
    </div>
  );
}

export default CardWithIcon;
