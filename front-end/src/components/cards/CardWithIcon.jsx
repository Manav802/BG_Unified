import React from 'react'
import { Box,Icon } from "@chakra-ui/core";


function CardWithIcon(props) {
    return (
        <div className="card-with-icon rounded p-3">
                <div className="row iconbox">
                        <Box className="text-white" rounded="12px" w='48px' h='48px' padding='12px' bg={props.iconBg|| "Blue"}> 
                            <Box as={props.icon} size="24px" color="white" />
                        </Box>
                </div>
                <div className="row display6 mx-3">
                        {props.title}
                </div>
                <div className="row cardContent mx-3">
                    {props.children}
                </div>
                <div className="row mx-3 my-3">
                    <Icon name="arrow-forward" size="24px"/>
                </div>
        </div>
    )
}

export default CardWithIcon
