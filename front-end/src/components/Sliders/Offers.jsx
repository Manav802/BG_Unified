import { Box, Button,Grid, Flex,Image, Heading,Icon, ButtonGroup, Text } from '@chakra-ui/core';
import Fade from "react-reveal/Fade"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import Container from '../../pageBuilder/Container';


SwiperCore.use([Navigation]);


// install Swiper's Controller component



function main(props) {
    return (
        <div>
        <Swiper slidesPerView={1} loop navigation>
        <SwiperSlide>
            <Container>
                <Grid templateColumns={["100%","128px auto","192px auto","256px auto","40% 60%"]} p={[8,8,12]}>
                    <Image alt="" justifySelf="center" src="/assets/images/vectors/covid.svg" padding={[4,0]}  width={["60%","100%"]}></Image>
                    <Flex direction="column" justify="center" px={[3,5,12]}>
                        <a className="link"><Heading fontSize={["xl","xl","2xl","3xl"]} fontFamily="Nexa Bold">Free Services* for 3 months for Healthy and Safety related Businesses. <Icon name="chevron-right"></Icon></Heading></a>
                        <Text mt={3} opacity={.7}>Let us help you if you have limited budgets and because of COVID your current infrastructure can't handle the load. Dial our direct line +61 2 9095 0000. We will get things in motion very quickly.</Text>
                    </Flex>
                </Grid>
            </Container>
        </SwiperSlide>)
        </Swiper>
        </div>
    );
}

export default main;
