import React from 'react';
import { Image, Flex } from "@chakra-ui/core";

function ImageGroup({images, spacing, maxW, width, ...data}){
    var allImages = <div></div>
    if(images.length === 1){
        allImages = images.map((item, index) => <Image src={item} width={"100%" || width} key={"image-" + index} {...data}></Image>);
    }
    else{
        allImages = images.map((item, index) => <Image src={item} mx={"16px" || spacing} width={"100%" || width} maxW={["119.5px", "135.5px", "175px", "231px", "283px"] || maxW} key={"image-" + index} {...data}></Image>);
    }
    
    return (
        <Flex justify="center" flexGrow={1} textAlign="center">
            {allImages}
        </Flex>
    );
}
export default ImageGroup;