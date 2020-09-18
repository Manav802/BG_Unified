import React from 'react'
import Slider from "react-flickity-component";
import {Box, Image} from '@chakra-ui/core';

function SliderC({sliderInfo}) {
    return (
        <div className="bg-landing bg-dark position-relative">
            <Slider options={{ autoPlay: 6000, adaptiveHeight:true,imagesLoaded: true, pageDots: false, draggable: true,pauseAutoPlayOnHover: false,wrapAround: true }}>
            {sliderInfo.map((info, index) => (
              <Box maxHeight={["562px","562px","600px","528px"]} className="w-100 landing-section">
                <Image src={info.imgSrc} opacity={.4} width="100%"  className="bg-image"></Image>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div>
                        <Box fontSize={["3xl","4xl","5xl"]} className="Nexa-Bold text-center text-white mt-0">
                          {info.title}
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            ))}
          </Slider>
        </div>
    )
}

export default SliderC
