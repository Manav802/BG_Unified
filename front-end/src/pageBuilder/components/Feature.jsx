import React from 'react';
import { Flex, Icon,Image, Heading, Text } from '@chakra-ui/core';

function Feature({image, icon, size, title, titleSize = "lg", description, align="center", ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            {image && <Image src={image} objectFit="cover" size={"48px" || size}></Image>}
            {icon && <Icon src={icon} size={size}></Icon>}
            <Heading my={4} size={titleSize} textAlign ={align}>{title}</Heading>
            <Text textAlign="justify" style={{textAlignLast: align}}>{description}</Text>
        </Flex>
    );
}

export default Feature;