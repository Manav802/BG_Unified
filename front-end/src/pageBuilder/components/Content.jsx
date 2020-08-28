import React from 'react';
import { Text } from '@chakra-ui/core';

function Content(props) {
    return (
        <>
            {props.data.map(({fontSize="md", opacity=.7, spacingY=2, text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione expedita tenetur nobis provident quas deleniti soluta maiores quos dolorum velit, possimus incidunt iste doloremque fuga laborum eaque ad iusto.", ...props}) => (
                <Text 
                fontSize={fontSize} 
                opacity={opacity}
                my={spacingY}
                {...props}
                >
                {text}
            </Text>
            ))}
        </>
    );
}

export default Content;