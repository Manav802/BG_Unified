import React from "react";
import { Box, Image, Heading, Text, Divider, Grid } from "@chakra-ui/core";
import Container from "../../pageBuilder/Container";

const Testimonial = (testimonialDetails, imageW = "160px") => {
  return (
    <Box px={5} my={5}>
      <Box p={6} height="100%" borderWidth={1} rounded={4} minHeight="460px" >
        <Box h="80%">
          <Image src={testimonialDetails.imageUrl} height="80px" maxW={imageW} objectFit="contain"></Image>
          <Text my={8} textAlign="justify" fontWeight={600} lineHeight={1.5}>
            {testimonialDetails.paragraph}
          </Text>
        </Box>
        <Divider mt="auto" borderWidth={1} borderColor="gray.300"></Divider>
        <Heading
          size="md"
          mt={4}
          fontWeight={500}
        >
          {testimonialDetails.author}
        </Heading>

        <Heading size="sm" mt={2} color="gray.600">
          {testimonialDetails.CompanyName}
        </Heading>
      </Box>
    </Box>
  )
}

function main({ testimonials }) {
  return (
    <Grid templateColumns={"repeat(2,auto)"}>
      <Box>
        {Testimonial(testimonials[0], "112px")}
        {Testimonial(testimonials[2], "224px")}
        {Testimonial(testimonials[4])}
      </Box>
      <Box>
        {Testimonial(testimonials[1])}
        {Testimonial(testimonials[3])}
        {Testimonial(testimonials[5])}
      </Box>
    </Grid>
  );
}

export default main;