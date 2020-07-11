import React from 'react'
import { Box} from "@chakra-ui/core";


function CardWithIcon(props) {
    return (
        <div className="card-with-action rounded p-3">
                {props.icon && <div className="row iconbox">
                    <Box as={props.icon} size="48px" color={props.iconColor} />
                </div>}
                <div className="row display6 mt-2 mx-3">
                        {props.title}
                </div>
                <div className="row cardContent mt-2 mx-3">
                    {props.children}
                </div>
                <div className="row mx-3 my-3">
                    <a href="#" className="mx-2 text-primary">{props.action1}</a> 
                    <a href="#" className="mx-2 text-dark">{props.action2}</a>
                </div>
        </div>
    )
}

export default CardWithIcon
