// Sample card from Airbnb
import React from 'react';
import { Box, Image, Avatar, AvatarBadge } from "@chakra-ui/core";


function Testimonial() {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Company Logo",
      author: "Gared Hudson",
      paragraph: "Dolor id culpa eu nostrud id reprehenderit laboris ex dolor enim aliquip mollit. Magna excepteur culpa sint nostrud reprehenderit consequat. Quis magna dolore quis qui duis fugiat ea excepteur. Ut duis dolore velit irure. Enim do voluptate laborum nostrud laborum culpa officia aliquip sint ea.",
      CompanyName: "Alejandro",
    };
  
    return (
    <div className="container">
        <div className="row justify-content-center ">
        <div className="col-md-6 col-10 mt-5">
        <h4>Testimonial Card</h4>
            <Box maxW="lg" borderWidth="1px"  rounded="lg" bg="" boxShadow="md" overflow="hidden">   
                <div className='ml-3 mt-4'>
                    {/* <Box maxW="sm" boxShadow="md" bg='gray.200'/> */}
                    {/* <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
                    <Box bg="gray.400" w="20" rounded="lg" p={5} >

                    </Box>
                </div>

                <div className=' mt-1 mr-3 ml-3'>
                <Box mt="3">
                    {property.paragraph}
                    <Box as="span" color="gray.600" fontSize="sm">
                    </Box>
                </Box>
                </div>

                <div className='mt-1 ml-3'>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {property.author}
                </Box>
                </div>
                
                <div className="mb-4 ml-3">
                <Box as="span" color="gray.600" fontSize="sm">
                    {property.CompanyName}
                </Box>
                </div>
            
            </Box>
            </div>
        </div>
        </div>
      
    );
  }

  export default Testimonial;