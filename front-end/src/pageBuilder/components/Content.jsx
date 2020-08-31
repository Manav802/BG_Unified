import React from 'react';
import { Text, List,Heading } from '@chakra-ui/core';

function Content(props) {
    return (
        <>
            {props.data.map(({fontSize="lg",title,titleSize="lg",titleFont, styleType="disc", opacity=1, spacingY=2, list, text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione expedita tenetur nobis provident quas deleniti soluta maiores quos dolorum velit, possimus incidunt iste doloremque fuga laborum eaque ad iusto.", ...props}) => (
                <>
                <Heading fontFamily={titleFont} my={4} size={titleSize}>{title}</Heading>
                {text && <Text 
                    fontSize={fontSize} 
                    opacity={opacity}
                    my={spacingY}
                    {...props}
                    >
                    {text}
                </Text>}
                {list && <List 
                    fontSize={fontSize} 
                    opacity={opacity}
                    my={spacingY}
                    styleType={styleType} {...props}
                    >
                    {list.map((item, index) => (
                          <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>}
                </>
            ))}
        </>
    );
}

export default Content;