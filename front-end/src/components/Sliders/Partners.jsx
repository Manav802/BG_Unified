import React from 'react';
import Slider from "react-flickity-component";
import { Image, Box } from '@chakra-ui/core';


const slides = []
for (let index = 0; index < 10; index++) {
    slides.push(<Box mx={6}>
        <Image alt={"parter-" + index} src={`/assets/images/partners/partners (${index}).png`} maxW={["180px","256px"]} px={3} objectFit="contain" height="64px"></Image>
    </Box>)
    
}

function Partners(props) {
    return (
        <Slider options={{wrapAround:true, freeScroll:true, pageDots:false, autoPlay:2000}}>
            {slides}
        </Slider>
    );
}

export default Partners;