import React, { Component } from 'react';
import Slider from '../ImageSlider/Slider'
import { Box, Image, Avatar, AvatarBadge } from "@chakra-ui/core";

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const TestimonialVariable = this.props.testimonialDetails.map((testimonialDetails)=>
        {
            return(
                <div key={testimonialDetails.id} className="col-lg-4 p-2 my-3">
                    <Box className="px-4 py-2"  rounded="lg" bg="white" boxShadow="md" overflow="hidden">   
                    <div className='ml-3 mt-4'>
                        <img src={testimonialDetails.imageUrl} style={{height:'64px'}} alt=""/>
                    </div>

                    <div className='mt-1 mr-3 ml-3'>
                    <Box mt="3" className="text-justify">
                        {testimonialDetails.paragraph}
                        <Box as="span" color="gray.600" fontSize="sm">
                        </Box>
                    </Box>
                    </div>

                    <div className='mt-3 ml-3'>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {testimonialDetails.author}
                    </Box>
                    </div>
                    
                    <div className="mb-4 ml-3">
                    <Box as="span" color="gray.600" fontSize="sm">
                        {testimonialDetails.CompanyName}
                    </Box>
                    </div>
                
                </Box>
                </div>
            )
        })


        return ( 
            <Slider
                options={{
                freeScroll: true,
                pageDots: false,
                contain: true,
                draggable: true,
                }}>
                <div className="slider-offset"></div>
                {TestimonialVariable}
            </Slider>
        );
    }
    }
 
export default Testimonial;