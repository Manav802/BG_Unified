import React from 'react';
import { Box } from '@chakra-ui/core';

function Container({ width, children }) {
    return (
        <Box mx="auto" width={width || ["100%", "540px", "720px", "960px", "1140px"]}>
            {children}
        </Box>
    );
}

export default Container;