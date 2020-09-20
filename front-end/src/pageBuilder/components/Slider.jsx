import React from 'react'
import Slider from "react-flickity-component";
import {Box, Image, Badge, Flex} from '@chakra-ui/core';



function SliderC({sliderInfo}) {
    return (
        <div className=" position-relative">
            <Slider options={{ 
            autoPlay: 3000,
            adaptiveHeight:true,
            imagesLoaded: true, 
            pageDots: false, 
            draggable: true,
            pauseAutoPlayOnHover: false,
            wrapAround: true 
            }}>
            {sliderInfo.map((info, index) => (
              <Flex justifyContent="center" w="100%">
              <Box shadow="md" overflow="hidden">
                <Image h="250px"   src={info.imgSrc} alt={info.sliderInfo} />
                
                  <Box
                    textAlign="center"
                    mt="3"
                    fontWeight="semibold"
                    as="h4"
                  >
                  {info.title}
                  </Box>
                
              </Box>
              </Flex>
            ))}
          </Slider>
        </div>
    )
}

export default SliderC
