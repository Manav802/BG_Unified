import React from 'react';
import { Box,Text } from '@chakra-ui/core';

function Video(props) {
    //Ex - <Video type="video" width="200px" height="200px" data={{url:"/assets/images/THE OLD WAYS.EXE.mp4", description:"Lorem  awe wdaa dwdadwa dd wa " }}/>
    switch(props.type){
        case "video":
            return (
                <Box my={1} mx={1} width={props.width || "auto"} height={props.height || "auto"}>
                    <video  src={props.data.url}></video>
                    <Text textAlign={"center"} opacity="0.7">
                    {props.data.description}
                    </Text>
                </Box>
            );
        
        }
}

export default Video;