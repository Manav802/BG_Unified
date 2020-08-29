
import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import Container from './Container';

function Section({my=8, py=20, children="Section", ...props}) {
    return (
        <Flex
            my={my} 
            py={py} 
            width="100%"
            align="center"
            direction="column"
            justify="center"
            {...props}>
            <Container>
                {children}
            </Container>
        </Flex>
    );
}

export default Section;