import React, { Component } from "react";
// import Slider from '../ImageSlider/Slider'
import { Box, Image, Avatar, Heading, Text, AvatarBadge, Flex, Divider, Grid } from "@chakra-ui/core";
import Container from "../../pageBuilder/Container";
import Row from "../../pageBuilder/Row";

const Testimonial = (testimonialDetails, imageW = "160px") => {
  return (
    <Box px={1} my={1}>
      <Box p={6} height="100%" borderWidth={1} rounded={4} >
        <Image src={testimonialDetails.imageUrl} height="80px" maxW={imageW} objectFit="contain"></Image>
        <Text my={8} textAlign="justify" fontWeight={600} lineHeight={1.5}>
          {testimonialDetails.paragraph}
        </Text>
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
    <Container mt={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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

    </Container>
  );
}

export default main;