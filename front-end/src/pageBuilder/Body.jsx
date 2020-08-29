import React from 'react';
import Content from './components/Content';
import { Box } from '@chakra-ui/core';
import Video from './components/Video';
import ImageGroup from './components/ImageGroup';
import MyList from './components/MyList';

function Body({gap = 4, data, type, width, ...props}){
    function giveMeComponent(){
        switch(type){
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
                <ImageGroup data={data}></ImageGroup>
            )
            case "pricing":
            return (
                <>
                {data}
                </>
            )
        }
    }

    return (
        <Box mx={gap/2} w={width} {...props}>
            {giveMeComponent()}
        </Box>
    );
}

export default Body;