import React from "react";
import {
  Modal,
  Image,
  Button,
  ModalOverlay,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  Spinner,
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
    <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
      <Image src={props.icon} padding="8px" height="64px"></Image>
      <span className="mt-3 h6 NunitoSans-Bold">{props.title}</span>
      {props.featureList && (
        <div>
          <List className="my-3 px-3" spacing={3}>
            {props.featureList.map((feature, index) => {
              return (
                <ListItem className="text-center">
                  <ListIcon icon="check" color="green.500" />
                  {feature}
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      {props.children}
    </div>
  );
}

export { PricingCard, PricingQuote };
