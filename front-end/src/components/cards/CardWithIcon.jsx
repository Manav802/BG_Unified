import React from "react";
import { Box, Icon, Image, Button } from "@chakra-ui/core";
import Link from "next/link"
//props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
  var iconbox = (
    <Box
      className="text-white d-flex justify-content-center shadow-lg align-items-center"
      rounded="12px"
      w="128px"
      h="128px"
      bg={props.iconBg || "Blue"}
    >
      <Image src={props.icon} size="40px"></Image>
    </Box>
  );
  if (props.fullIcon) {
    iconbox = (
      <Box className="text-white" rounded="12px" w="48px" h="48px">
        {props.fullIcon}
      </Box>
    );
  }
  return (
    <Box pt="64px" h="100%">
      <Box className="card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3">
        <div className="row iconbox mb-3">{iconbox}</div>
        <div className="row display6 py-3 text-center mx-2">{props.title}</div>
        <div className="row cardContent py-2 mx-3 text-center">
          {props.children}
        </div>
        <div className="row mx-3 my-3">
          <Link href={`${props.link}`}>
            <Button py={8} px={12} bg="dark.500" color="white" _hover={{color:"white", bg:"dark.400"}} borderRadius="0px 12px" rightIcon="arrow-forward">
              Learn More
            </Button>
          </Link>
        </div>
      </Box>
    </Box>
  );
}

export default CardWithIcon;
