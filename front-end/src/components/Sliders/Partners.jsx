import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Autoplay} from 'swiper';
import { Image, Box } from '@chakra-ui/core';
import Section from '../../pageBuilder/Section';

SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);

const slides = []
for (let index = 0; index < 12; index++) {
    slides.push(<SwiperSlide>
        <Image alt={"parter-" + index} src={`/assets/images/partners/partners (${index}).png`} width={["180px","200px"]} px={3} objectFit="contain" height="64px"></Image>
    </SwiperSlide>)
    
}

function Partners(props) {
    return (
        <Section>
            <Swiper centeredSlides={true} autoplay={1000} loop 
            breakpoints={{
            // when window width is >= 640px
            640: {
            slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
            slidesPerView: 3,
            },
            1200: {
            slidesPerView: 5,
            },
            }}>
            {slides}
            </Swiper>
        </Section>
    );
}

export default Partners;