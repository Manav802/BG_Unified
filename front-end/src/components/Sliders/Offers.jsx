import { Box, Button,Grid, Flex,Image, Heading,Icon, ButtonGroup, Text } from '@chakra-ui/core';
import Fade from "react-reveal/Fade"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import Container from '../../pageBuilder/Container';


SwiperCore.use([Navigation]);


// install Swiper's Controller component



function main({height = "296px", ...props}) {
    return (
        <div>
        <Swiper slidesPerView={1} loop navigation>
        <SwiperSlide>
            <Container>
                <Grid templateColumns={["100%","128px auto","192px auto","256px auto","40% 60%"]} p={[5,8,12]}>
                    <Image height={height} alt="Free Healthcare Services" justifySelf="center" src="/assets/images/vectors/covid.svg" padding={[4,0]}  width="100%"></Image>
                    <Flex direction="column" justify="center" px={[3,5,12]}>
                        <Heading fontSize={["xl","xl","2xl","3xl"]} fontFamily="Nexa Bold">Free Services* for three months to Health and Safety related Businesses.</Heading>
                        <Text mt={3} opacity={.7}>Let us help you if you have limited budgets, and because of COVID, your current infrastructure can't handle the load. Dial our direct line +61 2 9095 0000. We will get things in motion very quickly.</Text>
                    </Flex>
                </Grid>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
            <Container>
                <Grid templateColumns={["100%","128px auto","192px auto","256px auto","40% 60%"]} p={[5,8,12]}>
                    <Image height={height} alt="Free Healthcare Services" justifySelf="center" src="/assets/images/vectors/bank_secure.svg" padding={[4,0]}  width="100%"></Image>
                    <Flex direction="column" justify="center" px={[3,5,12]}>
                        <Heading fontSize={["xl","xl","2xl","3xl"]} fontFamily="Nexa Bold">BG Unified Solutions resolving security issues for an international bank.</Heading>
                        <Text mt={3} opacity={.7}>BG Unified Solutions is currently working on resolving security issues for an international bank. Working on Security Operations Center, Web Application Firewalls, and Managed Firewalls, to provide secure infrastructure and completely trusted gateways.

                        </Text>
                    </Flex>
                </Grid>
            </Container>
        </SwiperSlide>
               <SwiperSlide>
            <Container>
                <Grid templateColumns={["100%","128px auto","192px auto","256px auto","40% 60%"]} p={[5,8,12]}>
                    <Image height={height} alt="Free Healthcare Services" justifySelf="center" src="/assets/images/vectors/GPU_Offer-01.svg" padding={[4,0]}  width="100%"></Image>
                    <Flex direction="column" justify="center" px={[3,5,12]}>
                        <Heading fontSize={["xl","xl","2xl","3xl"]} fontFamily="Nexa Bold">BGUS is launching GPUaaS through multiple Geo-locations and with Bundled Solutions!!</Heading>
                        <Text mt={3} opacity={.7}>GPUaaS will be offered through multiple geo-locations and to make it more profitable and economical for your business; we are ready to bundle the offering with IaaS, Storage As A Service, UCaaS, DNSaaS, SIPaaS and more.

                        </Text>
                    </Flex>
                </Grid>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
            <Container>
                <Grid templateColumns={["100%","128px auto","192px auto","256px auto","40% 60%"]} p={[5,8,12]}>
                    <Image height={height} alt="Free Healthcare Services" justifySelf="center" src="/assets/images/vectors/SOC_Offer-01.svg" padding={[4,0]} width="100%"></Image>
                    <Flex direction="column" justify="center" px={[3,5,12]}>
                        <Heading fontSize={["xl","xl","2xl","3xl"]} fontFamily="Nexa Bold">Entirely hosted SOCaaS within BGUS DC locations, supported with different technologies!!</Heading>
                        <Text mt={3} opacity={.7}>BGUS will host SOCaaS entirely within its own DC locations, and the service will be offered with a unique combination of multiple technologies with every single event monitored by a team of highly skilled individuals.</Text>
                    </Flex>
                </Grid>
            </Container>
        </SwiperSlide>
        
        </Swiper>
        </div>
    );
}

export default main;
