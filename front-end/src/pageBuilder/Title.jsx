import React from 'react';
import { Heading } from '@chakra-ui/core';

function Title({fontSize = ["30px","36px"],px="5px", children = "Lorem Ipsum", ...props}) {
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