import React from 'react'
import { Box,Icon, Image, Button } from "@chakra-ui/core";


//props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
    var iconbox= <Box className="text-white d-flex justify-content-center shadow-lg align-items-center" rounded="12px" w='128px' h='128px' bg={props.iconBg|| "Blue"}> 
                        <Image src={props.icon} size="40px"></Image>
                    </Box>
    if(props.fullIcon){
        iconbox=<Box className="text-white" rounded="12px" w='48px' h='48px' > 
                    {props.fullIcon}
                </Box>
    }
    return (
        <div className="card-with-icon shadow-lg mb-5 mt-4 align-items-center d-flex flex-column bg-white rounded p-3">
                <div className="row iconbox mb-3">
                    {iconbox}
                </div>
                <div className="row display6 py-3 text-center mx-2">
                        {props.title}
                </div>
                <div className="row flex-fill cardContent py-3 mx-3 text-center">
                    {props.children}
                </div>
                <div className="row mx-3 my-3">
                    <Button className="p-4 action-btn" rightIcon="arrow-forward">Learn More</Button>
                </div>
        </div>
    )
}

export default CardWithIcon
