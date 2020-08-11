import React from 'react'
import image23 from './Image 23.png'
import sdwan_s from './sdwan_s-1.png';
import repeat_grid from './Repeat Grid 12.png'
import {Icon,Button, Box} from '@chakra-ui/core';
import Slider from 'react-flickity-component'

import Link from 'next/link';

function CaseStudySingle(props) {
        return(
            <div className="col-lg-8 offset-lg-2 p-2 my-3">
                 <Box bg="#2280BF" className="px-4 py-2 case-study-single"  rounded="lg" boxShadow="md" overflow="hidden" >   
                    <div>
                        <h6 className="h6 NunitoSans-Bold pt-4 pb-2 text-white">FEATURED CASE STUDY</h6>
                    </div>

                    <div className='display4 text-white'>
                        <h6>{props.title}</h6>
                    </div>

                    <div>
                        <p>{props.content}</p>
                    </div>
                    
                    <div>
                        <Button variant="outline" rightIcon="arrow-forward" size="lg" className="btn btn-outline-light mt-4">Read More</Button>
                    </div>
                
                </Box>
            </div>
        );
    }

function CaseStudy(props) {
    const CasestudyVariable = props.casestudyDetails.map((casestudyDetails)=>
    {
        return(
            <div key={casestudyDetails.id} className="col-lg-8 p-2 my-3">
                 <Box className="case-study"  rounded="lg" boxShadow="md" overflow="hidden" >   
                    <div>
                        <h6 className="h6 NunitoSans-Bold pt-4 pb-2 text-white">FEATURED CASE STUDY</h6>
                    </div>

                    <div className='display4 text-white'>
                        <h6>{casestudyDetails.title}</h6>
                    </div>

                    <div>
                        <p>{casestudyDetails.content}</p>
                    </div>
                    
                    <div>
                        <Button variant="outline" rightIcon="arrow-forward" size="lg" className="btn btn-outline-light mt-4">Read More</Button>
                    </div>
                
                </Box>
            </div>
        );
    })

    // var content = props.content || "Software-defined wide-area networking (SD-WAN) is rapidly replacing the traditional WAN for remote office and branch deployments. SD-WAN was designed to provide a wide range of benefits to support digital innovation. However, far too many SD-WAN solutions lack critical networking and security features, requiring organizations to add complex and costly overlay solutions to manage and protect their SD-WAN deployments.";
    // var feature = props.feature || "Featured CASE STUDY"
    // var title = props.title || "Simplifying SD-WAN with Centralized Management and Orchestration";
    // var iconImg = props.iconImg||image23;
    // var imglg = props.imglg || sdwan_s;

    return (
        // <Box bg="#2280BF" className="case-study">
            
        //     <div className="box">
        //         <h6 className="h6 NunitoSans-Bold pt-4 pb-2 text-white-50">FEATURED CASE STUDY</h6>
        //         <h3 className="display4 text-white">Simplifying SD-WAN with Centralized 
        //                 Management and Orchestration</h3>
        //         <p className="mt-2">Software-defined wide-area networking (SD-WAN) is rapidly replacing the traditional WAN for remote office and branch deployments. SD-WAN was designed to provide a wide range of benefits to support digital innovation. However, far too many SD-WAN solutions lack critical networking and security features, requiring organizations to add complex and costly overlay solutions to manage and protect their SD-WAN deployments.</p>
        //         <Button variant="outline" rightIcon="arrow-forward" size="lg" className="btn btn-outline-light mt-4">Read More</Button>
        //     </div>
        // </Box>

        <Slider className="case-study-container"
                options={{
                adaptiveHeight: false,
                freeScroll: true,
                pageDots: false,
                contain: true,
                draggable: true,
                initialIndex: 1
                // fadeEffect: {crossFade: true}
                }}>
                <div className="slider-offset"></div>
                {CasestudyVariable}
                <div className="slider-offset"></div>
            </Slider>
    )
}

export {
    CaseStudy,
    CaseStudySingle
};


