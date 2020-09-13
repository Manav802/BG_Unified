import React, { Component } from "react";
import ContactForm from "../components/contactForm/main";
import Head from "next/head";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { Heading, Text, Box, Icon, Image, Flex} from "@chakra-ui/core";
import Row from "../pageBuilder/Row";
import Description from "../pageBuilder/Description";
import Shapes from '../components/Shapes/Shapes'
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="contact">
          <Head>
            <title>Contact us - BG Unified</title>

            <link
              rel="shortcut icon"
              href="/assets/images/icons/favicon/bg.ico"
              type="image/x-icon"
            />
          </Head>
          <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} pb={4} pt={[16, 32]} my={0}>
            <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
            <Title zIndex="100" fontSize={["44px","64px"]}>Contact Us</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Have a question. Lets Talk!</Text>
            <Row mt={16} mb={4}>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image src="/assets/images/vectors/phone.svg" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Call Us
                  </Text>
                  <Heading size={["sm", "md","md", "lg"]}>1300 00 BGUS</Heading>
                </Box>
              </Flex>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image src="/assets/images/vectors/mail.svg" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Email
                  </Text>
                  <Heading size={["sm", "md","md", "lg"]}>info@bgunifiedsolutions.net</Heading>
                </Box>
              </Flex>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image src="/assets/images/vectors/phone.png" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Have a chat!
                  </Text>
                  <Heading size={["sm", "md","md", "lg"]}>24/7 Chat Support</Heading>
                </Box>
              </Flex>
            </Row> 
            
        </Section>
        <Section py={0} my={0}>
        <Image src="/assets/images/backgrounds/call_us.jpg" height="316px" width="100%" objectFit="cover" rounded={[0,0,0, 8]} mt={[0,0,0, 8]}></Image>
        </Section>
        <Section mb={0} mt={[0,0,0, "-128px"]} py={0} containerWidth={["100%", "100%", "640px", "720px"]}>
          <Box bg={["#ffffff00","#ffffff00","#ffffff00","white"]} px={8} py={16} mb={[0,0,0,24]} boxShadow={[0,0,0,"xl"]} textAlign="center" rounded={12}>
            <Title>Let's Talk!</Title>
            <Text my={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequatur</Text>
            <ContactForm />
          </Box>
        </Section>  
        </div>  
      </>
    );
  }
}
export default Contact;
