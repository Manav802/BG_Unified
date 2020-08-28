import React from 'react';
import Content from './components/Content';
import { Box } from '@chakra-ui/core';

function Body(props) {
    function giveMeComponent(){
        switch(props.type){
            case "content":
                return (
                    <Content data={props.data}></Content>
                );
        }
    }

    return (
        <Box width={props.width}>
            {console.log("We are here")}
            {giveMeComponent()}
        </Box>
    );
}

export default Body;