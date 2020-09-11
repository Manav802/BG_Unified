import React from 'react';
import { Flex, Icon,Image, Heading, Text, Box } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg'
import SVG from '../../components/svg/svg';

function Feature({image, icon, size = "48px", title,iconColor = "dark.500" ,color="dark.500", svg, titleSize = "lg", description, align="center",textOpacity,titleFont,titleColor, ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            {svg && <SVG src={svg} color={iconColor} size={size}></SVG>}
            {image && <Image src={image} objectFit="cover" size={size}></Image>}
            {icon && <Box as={icon} size={size}></Box>}
            <Heading fontFamily={titleFont} fontWeight="600" mt={4} size={titleSize} textAlign ={align}>{title}</Heading>
            {description && <Text opacity={textOpacity} mt={4} textAlign="justify" style={{textAlignLast: align}}>{description}</Text>}
        </Flex>
    );
}

export default Feature;