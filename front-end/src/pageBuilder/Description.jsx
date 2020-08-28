import React from 'react';
import { Text } from '@chakra-ui/core';

function Description({mt = 4, textAlign="center", children="", ...props}) {
    return (
        <Text mt={mt} textAlign={textAlign} {...props}>
            {children}
        </Text>
    );
}

export default Description;