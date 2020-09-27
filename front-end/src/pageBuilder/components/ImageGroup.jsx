import React from 'react';
import { Box,Image, Flex ,Text} from "@chakra-ui/core";

function ImageGroup({ images,captionStyles, spacing, maxW, width = "100%", ...data }) {
    var allImages = <div></div>
    if (images.length === 1) {
        allImages = images.map((url, index) =><Image alt="" src={require(`../../../public${url}`)} width={width} key={"image-" + index} {...data}></Image>);
    }
    else {
        allImages = images.map((url, index) =><Image alt="" src={require(`../../../public${url}`)} mx={spacing || "16px"} width={width} maxW={maxW || [ "80px", "135.5px", "175px", "231px", "283px"]} key={"image-" + index} {...data}></Image>);
    }

    return (
        <Flex justify="center" wrap="wrap" flexGrow={1} textAlign="center">
            {allImages}
        </Flex>
    );
}
export default ImageGroup;