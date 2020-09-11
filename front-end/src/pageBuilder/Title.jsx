import React from 'react';
import { Heading } from '@chakra-ui/core';

function Title({fontSize = ["3xl","32px","34px","4xl"],px="5px", children = "Lorem Ipsum", ...props}) {
    return (
    
    <Heading 
        textAlign="center"
        fontFamily="Nexa Bold" 
        fontSize={fontSize}
        px={px}
        {...props}>
            {children}
            
        </Heading>
    );
}

export default Title;