import React from 'react';
import { Grid, Icon, Image, Heading, Text, Box } from '@chakra-ui/core';
import { ReactSVG } from 'react-svg'
import SVG from '../../components/svg/svg';

function Feature2({ image, icon, size = "48px", title, iconColor = "dark.500", color = "dark.500", svg, titleSize = "lg", description, align = "center", textOpacity, titleFont, titleColor, ...props }) {
    return (
        <Grid align={align} templateColumns={["96px auto"]} {...props}>
            {svg && <SVG src={svg} color={iconColor} size={size}></SVG>}
            {image && <Image src={image} objectFit="cover" size={size}></Image>}
            {icon && <Box as={icon} size={size}></Box>}
            <Box>
                <Heading fontFamily={titleFont} size={titleSize} textAlign={align}>{title}</Heading>
                <Text opacity={textOpacity} textAlign="justify" style={{ textAlignLast: align }}>{description}</Text>
            </Box>
        </Grid>
    );
}
export default Feature2;