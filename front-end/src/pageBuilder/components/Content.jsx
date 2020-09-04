import React from 'react';
import { Text, List,Heading, ListItem } from '@chakra-ui/core';

function Content(props) {
    return (
        <>
            {props.data.map(({fontSize="lg",title,titleSize="lg",titleFont, styleType="disc", stylePos="outside", opacity=1, spacingY=2, list, text, ...props}) => (
                <>
                {title && <Heading fontFamily={titleFont} my={4} fontSize={titleSize}>{title}</Heading>}
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
                    px={4}
                    my={spacingY}
                    styleType={styleType}
                    stylePos={stylePos} {...props}
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