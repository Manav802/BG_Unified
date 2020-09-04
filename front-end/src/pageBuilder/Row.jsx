import React from 'react';
import { Flex } from '@chakra-ui/core';

function Row({ justify, flexWrap = "wrap", rowDistance, ...props }) {
    return (
        <Flex mt={rowDistance} flexWrap={flexWrap} direction={props.direction} justify={justify || "center"} {...props}>

        </Flex>
    );
}

export default Row;