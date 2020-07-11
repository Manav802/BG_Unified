// Sample card from Airbnb
import React from 'react';
import { Box, Image, Badge } from "@chakra-ui/core";


function AirbnbExample() {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Company Logo",
      author: "Gared Hudson",
      paragraph: "Dolor id culpa eu nostrud id reprehenderit laboris ex dolor enim aliquip mollit. Magna excepteur culpa sint nostrud reprehenderit consequat. Quis magna dolore quis qui duis fugiat ea excepteur. Ut duis dolore velit irure. Enim do voluptate laborum nostrud laborum culpa officia aliquip sint ea.",
      CompanyName: "Alejandro",
    };
  
    return (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box mt="3">
                {property.paragraph}
                <Box as="span" color="gray.600" fontSize="sm">
                </Box>
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {property.author}
            </Box>

            <Box as="span" color="gray.600" fontSize="sm">
                {property.CompanyName}
            </Box>
        
        </Box>
    );
  }

  export default AirbnbExample;