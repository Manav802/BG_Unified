import React from "react";
import { Image, Flex } from "@chakra-ui/core";
import Link from "next/link";

function WhatsNew(props) {
  return (
    <Link href="/blogs/[bid]" as={props.link}>
    <Flex
      className="hover-effect"
      p={3}
      mt={1}
      borderRadius="lg"
      maxWidth="400px"
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
    </Flex>
    </Link>
  );
}

export default WhatsNew;
