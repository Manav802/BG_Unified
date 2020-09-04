import React from 'react';
import Fade from "react-reveal/Fade"
import Section from '../../pageBuilder/Section';
import Container from '../../pageBuilder/Container';
import {Image, Button, Heading, Box, Flex} from "@chakra-ui/core";
import Link from "next/link"

function Conclusion(props) {
    return (
        <Fade duration={300} cascade distance={"50%"} left>
          <Section>
            <Container>
              <Box py={12} px={24} rounded={8} overflow="hidden" className="bg-dark position-relative">
                <Heading size="xl" fontFamily="Nexa Bold" color="white">Let's get IT done.</Heading>
                <Flex>
                <Link href="/solutions"><Button className="primary-btn" variant="solid" variantColor="primary" mt={6} size="lg" >Explore Now</Button></Link>
                <Link href="/contact"><Button variant="outline" variantColor="white" mt={6} size="lg" >Contact Sales</Button></Link>
                
                </Flex>
                <Image height="340px" position="absolute" right={0} top="-30%" src="/assets/images/vectors/ic_chip_neon.png"></Image>
              </Box>
              </Container>
            </Section>
        </Fade>
    );
}

export default Conclusion;