import React from 'react';
import Content from './components/Content';
import { Box, Flex } from '@chakra-ui/core';
import Video from './components/Video';
import ImageGroup from './components/ImageGroup';
import MyList from './components/MyList';
import Feature from './components/Feature';
import Feature2 from './components/Feature2';
import NumberCount from './components/NumberCount';
import AccordionWithImage from './components/AccordionWithImage';
import Service from '../components/cards/Service';
import AlternateRow from './components/AlternateRow';
import Container from './Container';
import Row from './Row';
import { SimpleGrid } from '@chakra-ui/core'
import ImageAndText from './components/ImageAndText';
function Body({ gap = 4, type, data, width="100%", ...props }) {
    function giveMeComponent(type, data) {
        switch (type) {
            case "content":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <Content data={data}></Content>
                    </Box>
                );
            case "video":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <Video data={data}></Video>
                    </Box>
                )
            case "list":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <MyList data={data}></MyList>
                    </Box>
                )
            case "imageGroup":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <ImageGroup {...data}></ImageGroup>
                    </Box>
                )
            case "feature":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <Feature {...data}></Feature>
                    </Box>
                )
            case "feature2":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <Feature2 {...data}></Feature2>
                    </Box>
                )
            case "numberCount":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <NumberCount {...data}></NumberCount>
                    </Box>
                )
            case "accordion":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <AccordionWithImage {...data}></AccordionWithImage>
                    </Box>
                )
            case "service":
                return (
                    <Box px={[3, 3, gap / 2]} my={4} w={width} {...props}>
                    <Service service={data}></Service>
                    </Box>
                )
            case "pricing":
                return (
                    <Box px={0} my={4} w={width} {...props}>
                        {data}
                    </Box>
                )
            case "altrow":
                return (
                    <AlternateRow {...data}></AlternateRow>
                )
            case "image&text":
                return (
                    <Box px={0} w={width} {...props}>
                    <ImageAndText {...data}></ImageAndText>
                    </Box>
                )
            case "container":
                return (
                    <Box px={0} my={4} w={width} {...props}>
                    <Row>
                        {props.containerData.map((dat) => (<Box px={[6, 6, gap / 2]} my={4} w={dat.width}>{giveMeComponent(dat.type, dat.data)} </Box>))}
                    </Row>
                    </Box>
                )
        }
    }

    return (
        <>
            {giveMeComponent(type, data)}
        </>
    );
}

export default Body;