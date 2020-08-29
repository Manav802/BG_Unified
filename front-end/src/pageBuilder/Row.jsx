import React from 'react';
import { Flex } from '@chakra-ui/core';

function Row({justify = "center", flexWrap = "wrap", mt= 8, ...props}) {
    return (
        <Flex mt={mt} flexWrap={flexWrap} justify={justify} {...props}>

        </Flex>
    );
}

export default Row;