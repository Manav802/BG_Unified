import React from 'react'
import Slider from "react-flickity-component";
import { Box, Image, Badge, Flex } from '@chakra-ui/core';
import { Spinner } from "@chakra-ui/core";


function SliderC({ sliderInfo }) {
  return (
    <div className=" position-relative">
      <Slider options={{
        autoPlay: false,
        groupCells: true,
        adaptiveHeight: true,
        imagesLoaded: true,
        pageDots: false,
        draggable: true,
        pauseAutoPlayOnHover: true,
        prevNextButtons: true,
        wrapAround: true
      }}>
        {sliderInfo.map((info, index) => (
          <Flex justifyContent="center" w={["50%", "32%", "25%", "20%"]}>
            <Box mb={"10px"} p={"15px"} mx={"10px"} shadow="md" overflow="hidden">
              <ImageLoader
                src={info.imgSrc}
              >
                <img style={{width:"200px",height:"130px"}}/>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue"
                  size="sm"
                />
                <div>Error! image is not loading</div>
              </ImageLoader>
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
