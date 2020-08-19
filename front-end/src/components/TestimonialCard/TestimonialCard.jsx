import React, { Component } from "react";
import Slider from "react-flickity-component";
// import Slider from '../ImageSlider/Slider'
import { Box, Image, Avatar, Heading, AvatarBadge } from "@chakra-ui/core";

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
                <Heading mt={4} size="lg" fontWeight={600} lineHeight={1.5} className="text-justify">
                  {testimonialDetails.paragraph}
                </Heading>

                <Heading
                  size="md"
                  mt={4}
                  fontWeight={800}
                  className="text-primary"
                >
                  {testimonialDetails.author}
                </Heading>

                <Heading size="sm" mt={2} color="gray.600">
                  {testimonialDetails.CompanyName}
                </Heading>
            </Box>
          </div>
        );
      }
    );

    return (
      <Slider
        options={{
          adaptiveHeight: true,
          freeScroll: false,
          prevNextButtons: false,
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
