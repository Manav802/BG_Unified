import React from 'react';
import { Flex, Image, Box, Heading, Text } from '@chakra-ui/core';

function ImageAndText({image, maxH = "350px",spacing="32px", description, title, titleStyle, descriptionStyle, imageProps, ...props}) {
    return (
        <Flex my={spacing} width="100%" align="center" {...props}>
            <Image width={["100%", "100%", 1/2]} maxH={maxH} src={image} {...imageProps}></Image>
            <Box width={["100%", "100%", 1/2]}>
                <Heading mb="16px" fontFamily="Nexa Bold" {...titleStyle}>{title}</Heading>
                <Text textAlign="justify" fontSize="lg" {...descriptionStyle}>{description}</Text>
            </Box>
        </Flex>
    );
}

export default ImageAndText;