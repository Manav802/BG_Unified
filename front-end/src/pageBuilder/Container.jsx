import React from 'react';
import { Box } from '@chakra-ui/core';

function Container(props) {
    return (
        <Box mx="auto" width={["100%", "540px", "720px", "960px", "1140px"]}>
            {props.children}
        </Box>
    );
}

export default Container;