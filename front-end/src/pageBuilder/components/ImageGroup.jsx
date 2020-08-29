import React from 'react';
import { Image, Flex } from "@chakra-ui/core";

const ImageGroup = ({data}) => {
    // data = {spacing = "16px", minW = ["119.5px", "135.5px", "175px", "231px", "283px"], styles, images}
    const allImages = data.images.map((item, index) => <Image src={item} width="128px" key={"image-" + index} ></Image>);
    return (
        <Flex justify="center" textAlign="center" mx={data.spacing}>
            {allImages}
        </Flex>
    );
}
export default ImageGroup;