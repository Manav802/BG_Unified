import React from "react";
import { Image } from "@chakra-ui/core";
import Link from "next/link";

function WhatsNew(props) {
  return (
    <Link href="/blogs/[bid]" as={props.link}><a className="link">
    <div
      className="d-flex hover-effect rounded-8 mt-2 p-2"
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
    </a></Link>
  );
}

export default WhatsNew;
