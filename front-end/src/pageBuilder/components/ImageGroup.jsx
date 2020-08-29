import React from 'react';
import { Image, Flex } from "@chakra-ui/core";

const ImageGroup = ({data}) => {
    console.log(data)
    const allImages = data.images.map((item, index) => <Image src={item} mx={data.spacing} width="128px" maxW={data.maxW} key={"image-" + index}></Image>);
    return (
        <Flex justify="center" width="100%" textAlign="center">
            {allImages}
        </Flex>
    );
}
export default ImageGroup;