import React from 'react';
import {Image} from '@chakra-ui/core'

function WhatsNew(props) {
    return (
        <div className="row rounded-8 hover-effect p-2 mt-2">
            <Image src={props.image} borderRadius="8px" h="48px" w="48px"></Image>
            <div className="col">
    <span className="h6">{props.heading}</span>
    <p>{props.text}</p>
            </div>
        </div>
    );
}

export default WhatsNew;