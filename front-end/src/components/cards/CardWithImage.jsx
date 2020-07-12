import React from 'react'
import { Box} from "@chakra-ui/core";


function CardWithIcon(props) {
    return (
        <div className="card-with-action rounded">
                <div className="slant-image">
                    <img src={props.src} alt=""/>
                </div>
                <div className="row mt-2 mx-3 p-3">
                        <div className="display6 col-12">
                                {props.title}
                        </div>
                        <div className="cardContent col-12">{props.children}</div>
                        <div className="col d-flex">
                            <div className="py-3 mr-3">
                                <a href="#" className="py-3 text-primary">{props.action1}</a> 
                            </div>
                            <div className="py-3 mr-3">
                                <a href="#" className="py-3 text-dark">{props.action2}</a> 
                            </div>
                        </div>
                </div>
                
        </div>
    )
}

export default CardWithIcon
