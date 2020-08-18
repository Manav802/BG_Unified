import React from "react";
import { Image } from "@chakra-ui/core";

function WhatsNew(props) {
  return (
    <div
      className="d-flex hover-effect rounded-8 mt-3 p-2"
      style={{ maxWidth: "400px" }}
    >
      <Image
        objectFit="cover"
        src={props.image}
        className="rounded-8 mt-1"
        height="56px"
        width="80px"
      ></Image>
      <div className="col">
        <div className="NunitoSans-Bold py-2">{props.heading}</div>
      </div>
    </div>
  );
}

export default WhatsNew;
