import React from 'react';
import Fade from "react-reveal/Fade"
import Section from '../../pageBuilder/Section';
import Container from '../../pageBuilder/Container';
import {Image, Button, Heading, Box, Flex, Text} from "@chakra-ui/core";
import Link from "next/link"

function Conclusion({align="left", title="Let's get IT done.", description, explore=true, contact=false, ...props}) {
    return (
        <Fade duration={300} cascade distance={"5%"} left>
          {/* hek */}
          <Section {...props}>
              <Flex direction="column" align={align} py={12} px={[6,16,24]} rounded={8} overflow="hidden" bg="dark.500" pos="relative">
                <Image height="340px" zIndex="0" position="absolute" right={0} top="-10%" src="/assets/images/vectors/ic_chip_neon.png"></Image>
                <Heading zIndex="100" mx={2} size="xl" textAlign={align} fontFamily="Nexa Bold" color="white">{title}</Heading>
                {description && <Text textAlign="center" zIndex="100" color="white" mt={3} fontSize={["lg","xl"]}>{description}</Text>}
                <Flex>
                {explore && <Link href="/solutions"><Button className="primary-btn" variant="solid" variantColor="primary" mx={2} mt={6} size="lg" >Explore Now</Button></Link>}
                {contact && <Link href="/contact"><Button mx={2} mt={6} size="lg" bg={explore ? "#fff0" : "primary.500"} color="white" borderWidth={explore ? 1 : 0} _hover={{bg:"white", color:"dark.500"}} >Contact Sales</Button></Link>}
                
                </Flex>
                
              </Flex>
            </Section>
        </Fade>
    );
}

export default Conclusion;