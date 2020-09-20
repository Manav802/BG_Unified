import React from "react";
import {
  Modal,
  Image,
  Button,
  ModalOverlay,
  Divider,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  Spinner,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/core";
import GetAQuote from "../../components/GetaQuote/main";

function PricingQuote(props) {
  return (
        <GetAQuote
          serviceName={props.serviceName}
          serviceDescription={props.serviceDescription}
          button={props.button}
          buttonStyle={props.buttonStyle}
          title={props.title}
        ></GetAQuote>
  );
}

function PricingCard(props) {
  return (
    <Box pt="32px">
      <Box bg="white" h="100%" mx={1} borderColor={props.popular ? "red.500" : "black.200"} boxShadow={props.popular && "xl"} borderWidth={1}>
      <Flex align="center" direction="column" justify="center" bg={props.popular ? "primary.500" : "white"} p={8} mt="-32px" mx="32px" boxShadow="lg">
        <Image alt="" style={{filter: props.popular && "brightness(8) saturate(0)"}} src={props.icon} padding="8px" height="64px"></Image>
        <Heading color={props.popular && "white"} size="md" mt={4}>{props.title}</Heading>
      </Flex>
      {props.featureList && (
        <div>
          <List p={8} spacing={3}>
            {props.featureList.map((feature, index) => {
              return (
                <ListItem>
                  <ListIcon icon="check" color="green.500" />
                  {feature}
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      <Box px={8} pb={8} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        {props.children}
      </Box>
    </Box>
    </Box>
  );
}

export { PricingCard, PricingQuote };
