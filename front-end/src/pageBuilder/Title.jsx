import React from 'react';
import { Heading } from '@chakra-ui/core';

function Title({fontSize = "36px", children = "Lorem Ipsum", ...props}) {
    return (
    
    <Heading 
        textAlign="center"
        fontFamily="Nexa Bold" 
        fontSize={fontSize} {...props}>
            {children}
            
        </Heading>
    );
}

export default Title;