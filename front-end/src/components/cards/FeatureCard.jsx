import React from "react";
import { Image, Box } from "@chakra-ui/core";
import Shapes from "../Shapes/Shapes";

function FeatureCard(props) {
  return (
    <div className="card border-0 rounded bg-white p-4">
      <div className="card-body p-2">
        {props.icon && (
          <div className="row justify-content-center iconbox">
            <Image src={props.icon} size="48px" color={props.iconColor} />
          </div>
        )}
        <div className="row justify-content-center display6 mt-3">{props.title}</div>
        <div className="row text-center text-secondary cardContent">{props.children}</div>
      </div>
    </div>
  );
}

export default FeatureCard;
