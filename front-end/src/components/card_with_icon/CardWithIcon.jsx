import React from 'react'
import { Box,Icon } from "@chakra-ui/core";

function CardWithIcon() {
    return (
        <div className="card-with-icon">
            <Box w='308px' h="314px">
                <div className="container">
                    <div className="row iconbox">
                            <Box rounded="12px" w='48px' h='48px' padding='12px' bg="Blue"> 
                                <Box h="24px" w="24px" rounded="4px" bg="White"></Box> 
                            </Box>
                    </div>

                    <div className="row display6 mx-3">
                            Title of the Card
                    </div>

                    <div className="row cardContent mx-3">
                        Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr. 
                    </div>

                    <div className="row mx-3 my-3">
                        <Icon name="arrow-forward" size="25px"/>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default CardWithIcon
