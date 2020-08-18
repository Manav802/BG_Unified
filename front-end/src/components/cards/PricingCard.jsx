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
    <>
        <GetAQuote
          serviceName={props.serviceName}
          serviceDescription={props.serviceDescription}
        ></GetAQuote>
      {!props.button && (
        <div className="mt-3 w-100 px-3 d-flex justify-content-between">
          {props.title && <p>{props.title}</p>}
          <a className="">
            Get a quote
          </a>
        </div>
      )}
      {props.button && (
        <Button
          size="lg"
          className={props.buttonStyle}
          variant="outline"
          variantColor="primary"
        >
          Get a quote
        </Button>
      )}
    </>
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
