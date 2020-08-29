import React from 'react';
import { Box,Text } from '@chakra-ui/core';

function Video(props) {
    //Ex - <Video type="video" width="200px" height="200px" data={{url:"/assets/images/THE OLD WAYS.EXE.mp4", description:"Lorem  awe wdaa dwdadwa dd wa " }}/>
    return (
        <>
            <video  src={props.data.url}></video>
            <Text mt={4} textAlign={"center"} opacity="0.7">
            {props.data.description}
            </Text>
        </>
    );
}

export default Video;