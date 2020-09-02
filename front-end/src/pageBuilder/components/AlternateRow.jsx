import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/core';


function AlternateRow({ align, justify, wrap, rowDistance, direction, content, imageStyles, descriptionStyles, textWidth, titleStyles, ...props }) {
    return (
        <Flex align={align || "flex-end"} direction={direction || "row"} mt={rowDistance} wrap={wrap || "wrap"} justify={justify || "space-around"} {...props}>
            <Box maxWidth={textWidth}><Box {...titleStyles}>{content.title}</Box>
                <Box {...descriptionStyles}>{content.description}</Box>
            </Box>
            <Image {...imageStyles} src={content.image}></Image>
        </Flex>
    );
}
export default AlternateRow;