import React from 'react';
import { Box } from '@chakra-ui/core';

function Container({ width = ["100%", "540px", "720px", "960px", "1140px"], children }) {
    return (
        <Box mx="auto" width={width}>
            {children}
        </Box>
    );
}

export default Container;