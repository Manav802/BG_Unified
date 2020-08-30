
import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import Container from './Container';

function Section({my=8, py=8, blend, containerWidth, children="Section", ...props}) {
    return (
        <Flex
            my={my} 
            py={py} 
            width="100%"
            align="center"
            direction="column"
            justify="center"
            backgroundPosition="center"
            backgroundAttachment="fixed"
            style={{backgroundBlendMode: blend}}
            {...props}>
            <Container width={containerWidth}>
                {children}
            </Container>
        </Flex>
    );
}

export default Section;