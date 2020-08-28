import React from 'react';
import { Image, Flex } from "@chakra-ui/core";

const ImageGroup = (props) => {
    const { images, ...other } = props;
    const allImages = props.images.map((item, index) => <Image src={item} {...other} key={"image" + index}></Image>);
    return (
        < Flex justify="center" textAlign="center" mx={[0, 0, 0, 0, 5]}>
            {allImages}
        </Flex>
    );
}
export default ImageGroup;