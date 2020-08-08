import React from 'react'
import image23 from './Image 23.png'
import sdwan_s from './sdwan_s-1.png';
import repeat_grid from './Repeat Grid 12.png'
import {Icon,Button, Box} from '@chakra-ui/core';
import Slider from 'react-flickity-component'


import Link from 'next/link';

function CaseStudy(props) {
    const CasestudyVariable = this.props.CasestudyVariable.map((casestudyDetails)=>
    {
        return(
            <div key={casestudyDetails.id} className="col-lg-7 p-2 my-3">
                 <Box className="px-4 py-2 testimonialSlider"  rounded="lg" bg="white" boxShadow="md" overflow="hidden">   
                    <div className='ml-3 mt-4'>
                        <img src={casestudyDetails.imageUrl} style={{height:'64px'}} alt=""/>
                    </div>

                    <div className='mt-1 mr-3 ml-3'>
                    <Box mt="3" className="text-justify">
                        {casestudyDetails.paragraph}
                        <Box as="span" color="gray.600" fontSize="sm">
                        </Box>
                    </Box>
                    </div>

                    <div className='mt-3 ml-3'>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {casestudyDetails.author}
                    </Box>
                    </div>
                    
                    <div className="mb-auto ml-3 ">
                    <Box as="span" color="gray.600" fontSize="sm">
                        {casestudyDetails.CompanyName}
                    </Box>
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

        <Slider
                options={{
                adaptiveHeight: false,
                freeScroll: true,
                pageDots: false,
                contain: true,
                draggable: true
                }}>
                <div className="slider-offset"></div>
                {CasestudyVariable}
            </Slider>
    )
}

export default CaseStudy;


