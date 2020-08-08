import React from 'react';
import {Modal,Image, Button, ModalOverlay, useDisclosure} from "@chakra-ui/core"
import GetAQuote from "../../components/GetaQuote/main"


function PricingQuote(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <GetAQuote serviceName={props.serviceName} serviceDescription={props.serviceDescription}></GetAQuote>
        </Modal>
        {!props.button && <div className="mt-3 w-100 px-3 d-flex justify-content-between">
            {props.title && <p>{props.title}</p>}
            <a onClick={onOpen} className="">Get a quote</a>
        </div>}
        {props.button && <Button size="lg" className={props.buttonStyle} onClick={onOpen} variant="outline" variantColor="primary">Get a quote</Button>}
        </>
    );
}

function PricingCard(props) {
    return (
        <div>
            <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                <Image src={props.icon} height="64px"></Image>
                <span className="mt-3 h6 NunitoSans-Bold">{props.title}</span>
                {props.children}
            </div>
        </div>
    );
}

export{
    PricingCard,
    PricingQuote
};