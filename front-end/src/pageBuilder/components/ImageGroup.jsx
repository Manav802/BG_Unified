import React from 'react';
import { Box,Image, Flex ,Text} from "@chakra-ui/core";

function ImageGroup({ images,captionStyles, spacing, maxW, width = "100%", ...data }) {
    var allImages = <div></div>
    if (images.length === 1) {
        allImages = images.map(({url,caption}, index) => <Box><Image src={url} width={width} key={"image-" + index} {...data}></Image><Text {...captionStyles}>{caption||""}</Text></Box>);
    }
    else {
        allImages = images.map(({url,caption}, index) => <Box mx={spacing || "16px"}><Image src={url} width={width} maxW={[maxW || "80px", "135.5px", "175px", "231px", "283px"]} key={"image-" + index} {...data}></Image><Text {...captionStyles}>{caption||""}</Text> </Box>);
    }

    return (
        <Flex justify="center" flexGrow={1} textAlign="center">
            {allImages}
        </Flex>
    );
}
export default ImageGroup;