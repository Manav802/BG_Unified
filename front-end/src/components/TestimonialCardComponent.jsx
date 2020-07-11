import React, { Component } from 'react';
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
                <div key={testimonialDetails.id} className="col-12 mt-5">
                    <Box maxW="lg" borderWidth="1px"  rounded="lg" bg="" boxShadow="md" overflow="hidden">   
                    <div className='ml-3 mt-4'>
                        {/* <Box maxW="sm" boxShadow="md" bg='gray.200'/> */}
                        <Avatar name="Dan Abrahmov" src={testimonialDetails.imageUrl} /> 
                        {/* <Box bg="gray.400" w="20" rounded="lg" p={5} /> */}
                    </div>

                    <div className=' mt-1 mr-3 ml-3'>
                    <Box mt="3">
                        {testimonialDetails.paragraph}
                        <Box as="span" color="gray.600" fontSize="sm">
                        </Box>
                    </Box>
                    </div>

                    <div className='mt-1 ml-3'>
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
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-6 col-10 mt-5">
                        <h4>Testimonial Card</h4>
                        {TestimonialVariable}
                    </div>
                </div>
            </div>
        
        );
    }
    }
 
export default Testimonial;

// function Testimonial() {
//     const testimonialDetails = {
//       imageUrl: "https://bit.ly/dan-abramov",
//       imageAlt: "Company Logo",
//       author: "Gared Hudson",
//       paragraph: "Dolor id culpa eu nostrud id reprehenderit laboris ex dolor enim aliquip mollit. Magna excepteur culpa sint nostrud reprehenderit consequat. Quis magna dolore quis qui duis fugiat ea excepteur. Ut duis dolore velit irure. Enim do voluptate laborum nostrud laborum culpa officia aliquip sint ea.",
//       CompanyName: "Alejandro",
//     };
  
//     return (
    

//   export default Testimonial;