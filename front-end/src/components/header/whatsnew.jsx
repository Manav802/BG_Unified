import React from "react";
import { Image,Heading, Flex, Icon } from "@chakra-ui/core";
import Link from "next/link";

function WhatsNew(props) {
  return (
    <Flex
      p={3}
      my={1}
      align="center"
      borderRadius="lg"
    >
      <Image alt=""        objectFit="cover"
        src={props.image}
        className="rounded-8 mt-1"
        height="56px"
        width="80px"
      ></Image>
        <Link href="/newsroom/[bid]" as={props.link}><a className="link"><Heading mx={5} fontFamily="Nexa Bold" fontSize="md">{props.heading}{" "}<Icon name="arrow-forward"></Icon></Heading></a></Link>
    </Flex>
  );
}

export default WhatsNew;
