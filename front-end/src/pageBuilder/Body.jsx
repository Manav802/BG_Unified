import React from 'react';
import Content from './components/Content';
import { Box, Flex } from '@chakra-ui/core';
import Video from './components/Video';
import ImageGroup from './components/ImageGroup';
import MyList from './components/MyList';
import Feature from './components/Feature';
import NumberCount from './components/NumberCount';
import AccordionWithImage from './components/AccordionWithImage';
import Service from '../components/cards/Service';
import AlternateRow from './components/AlternateRow';
import Container from './Container';
import Row from './Row';
import {SimpleGrid} from '@chakra-ui/core'
function Body({ gap = 4, data, width, ...props }) {
    function giveMeComponent(type,data) {
        switch (type) {
            case "content":
                return (
                    <Content data={data}></Content>
                );
            case "video":
                return (
                    <Video data={data}></Video>
                )
            case "list":
                return (
                    <MyList data={data}></MyList>
                )
            case "imageGroup":
                return (
                    <ImageGroup {...data}></ImageGroup>
                )
            case "feature":
                return (
                    <Feature {...data}></Feature>
                )
            case "numberCount":
                return (
                    <NumberCount {...data}></NumberCount>
                )
            case "accordion":
                return (
                    <AccordionWithImage {...data}></AccordionWithImage>
                )
            case "service":
                return (
                    <Service service={data}></Service>
                )
            case "pricing":
                return (
                    <>
                        {data}
                    </>
                )
            case "altrow":
                return (
                    <AlternateRow {...data}></AlternateRow>
                )
            case "container":
                return (
                    <Row direction={["column","row"]}>
                        {props.containerData.map((dat)=>(<Box px={[6, 6, gap / 2]} my={4} w={dat.width}>{giveMeComponent(dat.type,dat.data)} </Box>))}
                    </Row>
                )
        }
    }

    return (
        <Box px={[6, 6, gap / 2]} my={4} w={width} {...props}>
            {giveMeComponent(props.type,data)}
        </Box>
    );
}

export default Body;