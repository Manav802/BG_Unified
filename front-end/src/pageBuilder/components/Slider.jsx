import React,{Suspense} from 'react'
import Slider from "react-flickity-component";
import { Box, Image, Badge, Flex } from '@chakra-ui/core';
import { Spinner } from "@chakra-ui/core";


function SliderC({ sliderInfo }) {
  return (
    <div className=" position-relative">
      <Slider options={{
        autoPlay: false,
        groupCells: true,
        adaptiveHeight:true,
        imagesLoaded: true,
        pageDots: false,
        draggable: true,
        pauseAutoPlayOnHover: true,
        prevNextButtons: true,
        wrapAround: true
      }}>
        {sliderInfo.map((info, index) => (
          <Flex justifyContent="center" w={["50%", "32%", "25%", "20%"]}>
            <Box p={"15px"} mx={"10px"} my={2} shadow="md" overflow="hidden">
                <Image src={info.imgSrc} h={"130px"} w={"200px"}/>
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
