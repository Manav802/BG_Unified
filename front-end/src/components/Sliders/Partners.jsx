import React from 'react';
import Slider from "react-flickity-component";
import { Image, Box } from '@chakra-ui/core';


const slides = []
for (let index = 0; index < 12; index++) {
    slides.push(<Box mx={6}>
        <Image alt={"parter-" + index} src={`/assets/images/partners/partners (${index}).png`} maxW={["180px","200px"]} objectFit="contain" height="64px"></Image>
    </Box>)
    
}

function Partners(props) {
    return (
        <div className="container-fluid brands">
            <div className="marquee">
                <div className="justify-content-center text-center d-flex  mx-xl-5 mx-0 scroll">
                    {slides}
                    {slides}
                    {slides}
                </div>
            </div>
        </div>
    );
}

export default Partners;