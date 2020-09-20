import React from "react";
import { Image, Box } from "@chakra-ui/core";
import Shapes from "../Shapes/Shapes";

function FeatureCard(props) {
  return (
    <div className="card border-0 rounded bg-white p-4">
      <div className="card-body p-2">
        {props.icon && (
          <div className={"row iconbox " + (props.left ? "justify-content-start" : "justify-content-center")}>
            <Image alt="" src={props.icon} size="48px" color={props.iconColor} />
          </div>
        )}
        <div className={"row display6 mt-3 " + (props.left ? "justify-content-start" : "justify-content-center")}>{props.title}</div>
        <div className={"row text-secondary cardContent " + (props.left ? "text-justify" : "text-center") }>{props.children}</div>
      </div>
    </div>
  );
}

export default FeatureCard;
