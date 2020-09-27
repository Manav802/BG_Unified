import React from "react";
import { Box, Image, Heading, Text, Button, ButtonGroup, Flex, Link } from "@chakra-ui/core";

function CardWithImage({columns="auto", height="216px", ...props}) {
  return (
    
    <Flex direction="column" bg="white" rounded={8} overflow="hidden" boxShadow="xl" height="100%">
      <Image alt="" objectFit="cover" src={props.src} height={height} width="100%"></Image>
      <Box  py={[3,6]} px={[3,6]}>
        <Heading fontSize={["md","2xl"]} lineHeight={1.5} mt={[2,1]} mb={[1, 2]} letterSpacing={1} fontFamily="Nexa Bold">{props.title}</Heading>
        {props.description && <Text textAlign="justify" fontSize="lg" mt={2}>{props.description}</Text>}
        {props.children}
        <ButtonGroup spacing={4}>
            {props.actions}
        </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default CardWithImage;
