import React from 'react'
import { Box,Icon } from "@chakra-ui/core";

//props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
    return (
        <div className="card-with-icon rounded p-3">
                <div className="row iconbox">
                        <Box className="text-white" rounded="12px" w='48px' h='48px' padding='12px' bg={props.iconBg|| "Blue"}> 
                            <Box size="24px" color="white" >
                                {props.icon}
                            </Box>
                        </Box>
                </div>
                <div className="row display6 mx-3">
                        {props.title}
                </div>
                <div className="row cardContent mx-3 text-justify">
                    {props.children}
                </div>
                <div className="row mx-3 my-3">
                    <Icon name="arrow-forward" size="24px"/>
                </div>
        </div>
    )
}

export default CardWithIcon
