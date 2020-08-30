import React from 'react';
import { Flex } from '@chakra-ui/core';

function Row({justify = "center", flexWrap = "wrap", rowDistance, ...props}) {
    return (
        <Flex mt={rowDistance} flexWrap={flexWrap} justify={justify} {...props}>

        </Flex>
    );
}

export default Row;