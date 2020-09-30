import { Box, Button, Flex,Image, Heading, ButtonGroup, Text } from '@chakra-ui/core';
import Fade from "react-reveal/Fade"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Controller, Navigation} from 'swiper';
import Section from '../../pageBuilder/Section';
import Link from 'next/link';

const sliderInfo = [
    {
      title: <span><Heading textTransform="uppercase" letterSpacing={1.5} size="sm" mb={4} color="primary.500">Welcome to</Heading> BG Unified Solutions</span>,
      imgSrc: "/assets/images/backgrounds/landing-1.png",
      subTitle: "Your go-to partner for all IT solutions and services that deliver value and enable substantial corporate growth.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
    {
      title: "Protecting Online Presence of your Business",
      imgSrc: "/assets/images/backgrounds/landing-2.png",
      subTitle: "Fast, friendly and delivery oriented web services, driven by our commitment of customer satisfaction.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
    {
      title: "Geographical Redundant Infrastructure",
      imgSrc: "/assets/images/backgrounds/landing-3.png",
      subTitle: "Highly Redundant Solutions. Connectivity with highly secured infrastructure with multiple telco vendors.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
  ]

SwiperCore.use([Controller]);
SwiperCore.use([Navigation]);


// install Swiper's Controller component



function main(props) {
    const [animate, setAnimation] = useState(0);
    return (
        <div>
        <Swiper slidesPerView={1} loop onSlideChange={() => {setAnimation(0); setAnimation(1)}} navigation>
        {sliderInfo.map(slide => <SwiperSlide>
            <Box pos="relative">
                <Image src={require(`../../../public${slide.imgSrc}`)} height={["440px","520px","720px", "auto"]} minH="448px" objectFit="cover" width="100%"></Image>
                {/* <Box top={0} left={0} opacity={.7} pos="absolute" width="100%" height="100%" bg="black"></Box> */}
                <Flex alignItems="center" pos="absolute" top={0} left={0} width="100%" height="100%" color="white" my={0}>
                    
                    <Section px={8} py={0} mb={0} mt={[0,"-64px"]}>
                        <Fade duration={700} delay={500} when={animate == 1} bottom>
                            <Heading textShadow="xl" fontSize={["3xl","4xl","56px"]} width={["100%","100%","80%","67%"]} fontFamily="Nexa Bold">
                                {slide.title}
                            </Heading>
                                
                        </Fade>
                        <Fade duration={700} delay={1200}  when={animate == 1} bottom>
                            <Text textShadow="xl" width={["100%","100%","72%","56%"]} mt={4} fontSize={["md","lg","xl"]}>
                                {slide.subTitle}
                            </Text>
                        </Fade>
                        <Fade duration={500} delay={1700}  when={animate == 1} bottom>
                            <ButtonGroup mt={6}>
                                    <Link href="/solutions"><a><Button fontSize={["14px","18px"]} mr={2} padding={["20px","24px"]} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Explore Now</Button></a></Link>
                                    <Link href="/contact"><a><Button padding={["20px","24px"]} ml={2} fontSize={["14px","18px"]} variant="outline" color="white" _hover={{ color: "black", bg: "white" }} size="lg">Contact Sales</Button></a></Link>
                            </ButtonGroup>
                        </Fade>
                    </Section>
                </Flex>
                
            </Box>
        </SwiperSlide>)}
        </Swiper>
        </div>
    );
}

export default main;
