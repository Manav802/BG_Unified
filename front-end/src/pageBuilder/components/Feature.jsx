import React from 'react';
import { Flex, Icon,Image, Heading, Text, Box } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg'
import SVG from '../../components/svg/svg';

function Feature({image, icon, size = "48px", title,color="dark.500", box, titleSize = "lg", description, align="center",textOpacity,titleFont,titleColor, ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            {box && <SVG src={box} color="blue.500"></SVG>}
            {image && <Image src={image} objectFit="cover" size={"48px" || size}></Image>}
            {icon && <Box as={icon} size={size}></Box>}
            <Heading fontFamily={titleFont} my={4} size={titleSize} textAlign ={align}>{title}</Heading>
            <Text opacity={textOpacity} textAlign="justify" style={{textAlignLast: align}}>{description}</Text>
        </Flex>
    );
}

export default Feature;