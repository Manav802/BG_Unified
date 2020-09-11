import React, { Component } from "react";
import ContactForm from "../components/contactForm/main";
import Head from "next/head";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { Heading, Text, Box, InputGroup, InputLeftElement, Button, Icon, Input, Image, Avatar, Badge, Flex, Grid, MenuList, Menu, MenuButton } from "@chakra-ui/core";
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
          <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
            <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
            <Title zIndex="100" fontSize={["44px","64px"]}>Contact Us</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Have a question. Lets Talk!</Text>
        </Section>
          <div className="section">
            <div className="container">
              <div className="row centered-content">
                <div className="col-lg-5 mb-5 contact-info">
                  <div className="row p-3">
                    <div className="col-2 p-0 phone-em">
                      <img src="/assets/images/vectors/phone.png" alt="phone" />
                    </div>
                    <div className="col-10">
                      <div>Phone no.</div>
                      <div className="display6">1300 00 BGUS</div>
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-2 p-0 mail-em">
                      <img src="/assets/images/vectors/mail.png" alt="mail" />
                    </div>
                    <div className="col-10">
                      <div>Email us</div>
                      <div className="display6">
                        info@bgunifiedsolutions.net
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
