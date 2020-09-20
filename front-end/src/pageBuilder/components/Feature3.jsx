import React, { Children } from 'react';
import {Image, Box, Heading} from "@chakra-ui/core"

function Feature3({children, icon, color="white", bg="dark.500", ...rest }) {
    return (
        
            <Box my={6} rounded={8} bg={bg} overflow="hidden" color={color} {...rest}>
                {children}
                <Image alt="" ml="auto" mb="-12px" mt={4} src={icon}></Image>
            </Box>
        
    );
}

export default Feature3;