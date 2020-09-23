import React from 'react';
import Slider from "react-flickity-component";
import { Image, Box } from '@chakra-ui/core';


const slides = []
for (let index = 0; index < 12; index++) {
    slides.push(<Box mx={12}>
        <Image alt={"parter-" + index} src={`/assets/images/partners/partners (${index}).png`} maxW="256px" objectFit="contain" height="64px"></Image>
    </Box>)
    
}

function Partners(props) {
    return (
        <Box {...props}>
            <Slider
            options={{
                pageDots: false,
                prevNextButtons: false,
                cellAlign: "left",
                autoPlay: 2000,
            }}
            >
            {slides}
            </Slider>
        </Box>
    );
}

export default Partners;