import React, { Component } from "react";
import Slider from "react-flickity-component";
// import Slider from '../ImageSlider/Slider'
import { Box, Image, Avatar, Heading, AvatarBadge, Flex } from "@chakra-ui/core";
import Container from "../../pageBuilder/Container";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const TestimonialVariable = this.props.testimonialDetails.map(
      (testimonialDetails) => {
        return (
          <div key={testimonialDetails.id} className="w-100">
           
           <Box
              className="p-4"
            >
              <Container>
                <Flex justify="center" my={8}>
                  <Image src={testimonialDetails.imageUrl} height="64px" />
                </Flex>
                <Heading textAlign="center" mt={4} size="lg" fontWeight={600} lineHeight={1.5}>
                  {testimonialDetails.paragraph}
                </Heading>

                <Heading
                  size="md"
                  mt={8}
                  fontWeight={800}
                  color="primary.500"
                  textAlign="center"
                >
                  {testimonialDetails.author}
                </Heading>

                <Heading textAlign="center" size="sm" mt={2} color="gray.600">
                  {testimonialDetails.CompanyName}
                </Heading>
                </Container>
            </Box>
           
          </div>
        );
      }
    );

    return (
      <Slider
        className="w-100"
        options={{
          adaptiveHeight: true,
          freeScroll: false,
          draggable: false,
          autoPlay: 15000
        }}
      >
        {TestimonialVariable}
      </Slider>
    );
  }
}

export default Testimonial;
