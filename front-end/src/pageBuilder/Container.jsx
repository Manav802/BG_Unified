import React from 'react';
import { Box } from '@chakra-ui/core';

function Container({width, children}) {
    return (
        <Box mx="auto" width={width}>
            {children}
        </Box>
    );
}

export default Container;