import React from 'react'
import image23 from './Image 23.png'
import sdwan_s from './sdwan_s-1.png';
import repeat_grid from './Repeat Grid 12.png'
import {Icon} from '@chakra-ui/core';

import Link from 'next/link';

function CaseStudy(props) {
    var content = props.content || "Software-defined wide-area networking (SD-WAN) is rapidly replacing the traditional WAN for remote office and branch deployments. SD-WAN was designed to provide a wide range of benefits to support digital innovation. However, far too many SD-WAN solutions lack critical networking and security features, requiring organizations to add complex and costly overlay solutions to manage and protect their SD-WAN deployments.";
    var feature = props.feature || "Featured CASE STUDY"
    var title = props.title || "Simplifying SD-WAN with Centralized Management and Orchestration";
    var iconImg = props.iconImg||image23;
    var imglg = props.imglg || sdwan_s;
    return (
        <div className="container py-2 my-5 case-study">
           
            <div className="row mt-2 m-0">
                <div className="col-xl-5 col-lg-6 d-flex pt-md-5 pl-lg-4 pt-lg-0 fluid-container align-items-stetch">
                    <div className="fluid-1 mb-4">
                        <div className="img-container">
                            <img src={iconImg} className="" alt=""/>
                        </div>
                        <img src={repeat_grid} className="repeatgrid d-none d-lg-block" alt=""/>
                    </div>
                    <img className="flex-fill img-lg rounded shadow-lg" src={imglg} alt="sdwan_s"/>
                </div>
                <div className="col-xl-6 col-lg-5 offset-lg-1">
                    <div className='row mx-1 mx-md-0 feature my-3'>{feature}</div>
                    <div className="row mx-1 mx-md-0 display5 my-1">{title}</div>
                    <div className="row mx-1 mx-md-0 ">
                        <p className="content py-2"> {content}
                        </p>
                    </div>
                    <Link href={props.link || "/"}>
                        <button className="btn btn-light rounded readmore mt-2" style={{border: '2px solid #051133',borderRadius:'4px'}}>Read More <Icon name="arrow-forward" size="22px"/></button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default CaseStudy;


