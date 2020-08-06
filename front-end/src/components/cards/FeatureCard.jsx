import React from 'react'
import {Image, Box} from "@chakra-ui/core";
import Shapes from '../Shapes/Shapes'

function FeatureCard(props) {
    return (
        <div className="card rounded bg-white p-4">
               <div className="card-body p-4">
               {props.icon && <div className="row iconbox">
                    <Image src={props.icon} size="48px" color={props.iconColor} />
                </div>}
                <div className="row display6 my-3">
                        {props.title}
                </div>
                <div className="row cardContent">
                    {props.children}
                </div>
               </div>
        </div>
    )
}

export default FeatureCard
