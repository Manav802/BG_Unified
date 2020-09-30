import React, {useState} from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import SwiperCore, { Controller, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonials from "../database/testimonials"
import { useEffect } from 'react';
import Row from '../pageBuilder/Row';

// install Swiper's Controller component
SwiperCore.use([Controller, Navigation]);


function main(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [active, setActive] = useState(0)
    return (
        <>
            <Head>
                <title>The team behind the web - BG Unified</title>
            </Head>
            <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
                <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">What they say!</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Customer Stories</Title>
            </Section>
            <Section py={0} mt={0} containerWidth="100%">
            <Swiper centeredSlides={true} navigation 
            breakpoints={{
            // when window width is >= 640px
            640: {
            width: 640,
            slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
            width: 768,
            slidesPerView: 2,
            },
        }}
   spaceBetween={16} onSlideChange={(swiper) => {setActive(swiper.activeIndex)}} onSwiper={setControlledSwiper} >
                {testimonials.map((info, index) => (
                    <SwiperSlide>
                        <Box p={8} my={8}>
                            <Image transition=".3s" height="120px" width="100%" opacity={active === index ? "1" : ".3"} objectFit="contain" src={info.imageUrl}></Image>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            </Section>
            <Section mt={0} pt={0}>
                <Row justify="center">
                    <Box bg="white" p={12} textAlign="justify" fontSize="xl" rounded={4} boxShadow="xl" width={12/12, 12/12, 12/12, 10/12}>
                        {testimonials[active].description}
                        <Text mt={4} fontFamily="Nexa Bold">{testimonials[active].author}</Text>
                        <Text mt={0} opacity=".7">{testimonials[active].CompanyName}</Text>
                    </Box>
                </Row>
            </Section>
        </>
    );
}

export default main;