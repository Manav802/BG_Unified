import React from "react";
import { Box, Image, Heading, Text, Button, ButtonGroup, Grid, Link } from "@chakra-ui/core";

function CardWithIcon({columns="auto", height="216px", ...props}) {
  return (
    
    <Grid templateColumns={columns}>
      <Box p={3}>
      <Image objectFit="cover" rounded={8} src={props.src} height={height} width="100%"></Image>
      </Box>
      <Box  py={2} px={5}>
        <Heading size="lg" lineHeight={1.5} mb={2} letterSpacing={1} fontFamily="Nexa Bold">{props.title}</Heading>
        {props.description && <Text textAlign="justify" fontSize="lg" mt={2}>{props.description}</Text>}
        {props.children}
        <ButtonGroup spacing={4}>
            {props.actions}
        </ButtonGroup>
      </Box>
    </Grid>
  );
}

export default CardWithIcon;
