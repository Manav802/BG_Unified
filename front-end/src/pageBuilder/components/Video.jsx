import React from 'react';
import { Box,Text } from '@chakra-ui/core';

function Video({data}) {
    return (
        <>
            <iframe src={data.url} width="100%" height={data.height} frameBorder="0" allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius:"3px",border:"none"}}></iframe>
            <Text mt={3} textAlign={"center"} opacity="0.7">
            {data.description}
            </Text>
        </>
    );
}

export default Video;