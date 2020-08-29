import React from 'react';
import { Image, Flex } from "@chakra-ui/core";

const ImageGroup = (props) => {
    const { images, ...other } = props;
    const allImages = props.images.map((item, index) => <Image src={item} minW={["119.5px", "135.5px", "175px", "231px", "283px"]} width="auto" key={"image" + index}  {...other}></Image>);
    return (
        < Flex justify="center" textAlign="center" mx={[0, 0, 0, 0, 5]}>
            {allImages}
        </Flex>
    );
}
export default ImageGroup;