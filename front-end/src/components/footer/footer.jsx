import React from "react";
import { Image, Box, Flex, Heading,Button, Text } from "@chakra-ui/core";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import Link from "next/link";
import FeedbackForm from "../Feedback/main";
import ErrorForm from "../ReportanError/main";
import Container from "../../pageBuilder/Container";
import Section from "../../pageBuilder/Section";
import SVG from "../svg/svg";

function footer(props) {
  return (
    <>
   <Section my={0} py={16} bg="gray.900" color="white">
     <Container>
        <Flex justify="space-between">
            <Box width={["100%","100%", "auto"]}>
              <Image src="/assets/logo_white.png" style={{filter:"brightness(.95)"}}  h="64px"></Image>
              <Flex mt={5} align="center">
                    <SVG src="/assets/images/icons/library/communication/call.svg" color="light.500" size="28px"></SVG>
                    <Heading px={2} mb={1} size="md">1300 00 BGUS</Heading>
                </Flex>
            </Box>
            <Box width={["100%","100%", 1/3]}>
              <Heading px={2} mb={3} size="sm" textTransform="uppercase" letterSpacing={1.2}>About the company</Heading>
              <Text px={2}>BG Unified Solutions is a specialist IT services and solutions provider that helps clients plan, build, support and manage their IT infrastructures</Text>
              <Button mt={3} variant="unstyled" variantColor="white" p={1}><SVG src="/assets/images/icons/library/social/linkedin.svg" color="light.500" size="24px"></SVG></Button>
            </Box>
            <Flex flexDirection="column" width={["100%","100%", 1/4]} px={4}>
                <Link href="/"><Button variant="unstyled" variantColor="white">Home</Button></Link>
                <Link href="/"><Button variant="unstyled" variantColor="white">Solutions</Button></Link>
                <Link href="/"><Button variant="unstyled" variantColor="white">Our Features</Button></Link>
                <Link href="/"><Button variant="unstyled" variantColor="white">Newsroom</Button></Link>
                <Link href="/"><Button variant="unstyled" variantColor="white">About Us</Button></Link>
                
            </Flex>
        </Flex>
      </Container>
   </Section>
   <Box bg="black" color="white" py={3}>
     <Container>
       <Flex justify="space-between">
       <Text>© Copyright 2019 BG Unified Solutions</Text>
       <Box>
          <ErrorForm/><FeedbackForm/>
       </Box>
       </Flex>
     </Container>
   </Box>
   </>
  );
}

export default footer;
