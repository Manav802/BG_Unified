import React from 'react';
import { Box } from '@chakra-ui/core';

function Container({ width = ["100%", "100%", "720px", "960px", "1140px"], children, ...props }) {
    return (
        <Box mx="auto" width={width} {...props}>
            {children}
        </Box>
    );
}

export default Container;