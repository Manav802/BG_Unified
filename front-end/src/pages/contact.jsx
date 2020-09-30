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
            <title>Contact us - BG Unified Solutions</title>
          </Head>
            <Section zIndex="3000" bgImage="url('/assets/images/backgrounds/call_us.jpg')" blend="screen" textAlign="center" bg={["gray.300"]} py={[16, 32]} my={0}>
            <Title zIndex="100" fontSize={["44px","64px"]}>Contact Us</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Have a doubt? Want to know more? Let's Connect!</Text>
        </Section>
        <Section py={0} my={0}>
        <Row mt={16} mb={4}>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image alt="" src="/assets/images/vectors/phone.svg" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Call Us
                  </Text>
                  <a href="tel::1300002487"><Text fontSize={["sm", "md","md", "lg"]}>1300 00 BGUS</Text></a>
                </Box>
              </Flex>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image alt="" src="/assets/images/vectors/mail.svg" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Email
                  </Text>
                  <a href="mailto::info@bgunifiedsolutions.net"><Text fontSize={["sm", "md","md", "lg"]}>info@bgunifiedsolutions.net</Text></a>
                </Box>
              </Flex>
              <Flex m={[4,0]} width={["100%","33.33%"]} align="center" direction={["row","column"]}>
                <Image alt="" src="/assets/images/vectors/247.svg" objectFit="contain" size="64px" />
                <Box mt={3} ml={[6,0]} textAlign={["left","center"]}>
                  <Text fontWeight="bold">
                    Have a chat!
                  </Text>
                  <Text fontSize={["sm", "md","md", "lg"]}>24/7 Chat Support</Text>
                </Box>
              </Flex>
            </Row> 
        </Section>
        <Section containerWidth={["100%", "100%", "640px", "720px"]}>
          <Box bg={["#ffffff00","#ffffff00","#ffffff00","white"]} px={8} py={16}  boxShadow={[0,0,0,"xl"]} textAlign="center" rounded={12}>
            <Title>Let's Talk!</Title>
            <Text my={4}>Reach out to us, in case anything comes up.. We'll be glad to connect with you!</Text>
            <ContactForm />
          </Box>
        </Section>  
        </div>  
      </>
    );
  }
}
export default Contact;
