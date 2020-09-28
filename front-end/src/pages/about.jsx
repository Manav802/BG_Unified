import React, { Component } from "react";
import Slider from "react-flickity-component";
import CardWithAction from "../components/cards/CardWithAction";
import Team from "../components/cards/team";
import { FaArrowRight } from "react-icons/fa";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import MyCount from "../components/Countup/main";
import Link from "next/link";

const timeline = {
  2013: "Founded BG Unified Solutions Pty Ltd, a team providing IT solutions to the clients focusing on customer satisfaction and deliverability.",
  2014: "F5 Authorized Partners, CISCO Premier Partner, CISCO Advanced Collaboration, Architecture Specialized Partner, Palo Alto Authorized Partners.",
  2015: "Nimble Storage Partners, NetAPP Partner, GENESYS Collaboration",
  2016: "Technology migration to Next-Generation Firewalls, UCaaS, Wireless, Telepresence and Storage.",
  2017: "Presence in London, offering all the services in our portfolio including, UCaaS, SaaS, IaaS, WiaaS and FaaS",
  2018: "Received BTS Excellence Award in recognition of Excellent Service by the NSW Government.",
  2019: "Built our Logging Cloud Connect Product, Newly deployed RDS/VDIaaS Solution into its portfolio as Workstation Service.",
  2020: "DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers",
}

class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeYearCard: 1,
    };
  }
  goToIndex = (index) => {
    //using Flickity API
    this.flkty.select(index);
    this.setState({ activeYearCard: index });
  };
  render() {
    return (
      <>
        <div className="about">
          <Head>
            <title>More About Us - BG Unified</title>
          </Head>
          <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
            <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.webp"></Image>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Know More</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>About Us</Title>
        </Section>
            <div className="container-fluid p-0 pt-5 pb-2 pt-lg-5 pb-lg-5">
              <Slider
                className="timeline"
                flickityRef={(c) => (this.flkty = c)}
                options={{
                  freeScroll: true,
                  pageDots: false,
                  prevNextButtons: false,
                  contain: true,
                  draggable: true,
                }}
              >
                <div className="slider-offset">
                  <Flex justify="center" align="center" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                </div>
                {Object.entries(timeline).reverse().map(notes => (<Box pos="relative">
                  <Flex h="300px">
                    <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                    <Flex justify="center" align="center" rounded="50%" borderWidth={5} borderWidthColor="gray.200" size="96px" color="white" bg="primary.500">
                      <Heading size="md" fontFamily="Nexa Bold">{notes[0]}</Heading>
                    </Flex>
                    <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                  </Flex>
                  <Box pos="absolute" top="96px" width="100%" px={6} mt={8}>
                      <Text fontSize="lg" textAlign="center">
                      {notes[1]}
                      </Text>
                  </Box>
                </Box>))}
                <div className="slider-offset">
                  <Flex justify="center" align="center" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                </div>
              </Slider>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-1">
                  <div className="row my-4">
                    <div className="col-sm-3 col-4">
                      <span className="display4 mb-0 text-primary">
                        <MyCount endPoint={40} suffix="+"/>
                      </span>
                      <h5>Clients</h5>
                    </div>
                    <div className="col-sm-3 col-4">
                      <span className="display4 mb-0 text-primary">
                        <MyCount endPoint={5} suffix="+"/>
                      </span>
                      <h5>Locations</h5>
                    </div>
                    <div className="col-sm-3 col-4">
                      <span className="display4 mb-0 text-primary">
                        <MyCount endPoint={20} suffix="+"/>
                      </span>
                      <h5>Projects</h5>
                    </div>
                  </div>
                  <div className="display6 py-3">Our Mission</div>
                  <Text fontSize="xl">
                    BG Unified Solutions Pty Ltd Team consists of experts in
                    different technologies like Security, Voice and a broad
                    range of additional skills including F5 Load Balancers, WAN
                    Optimization, WAN, Cloud Technologies and Cisco
                    Technologies. As experts in different technologies, our
                    focus is to provide competitive and affordable Unified
                    Solutions to our clients.
                    </Text>
                    <Text fontSize="xl" mt={3}>
                    We majorly deal with Cisco Voice / Video Projects, WAN
                    Implementations, DC Design and Implementation. Our goal is
                    to make our customers more competitive and achieve higher
                    business efficiency through increased agility, effective
                    cost containment and lower risk. BG Unified Solutions,
                    founded in 2013, provides national and international IT
                    Services to some of Australia's leading companies, who use
                    information technology to improve their business results.
                    </Text>
                </div>
              </div>
            </div>
          <div id="team" className="section">
            <div className="container">
              <div className="p-3 text-center d-flex flex-column">
                <span className="h6 text-primary">TEAM</span>
                <span className="display5">Meet the Visionary People</span>
              </div>
              <div className="row py-2">
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Founder & Owner"
                    name="Jingyi Li"
                    img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png"
                  >
                   CPA and Master of Accounting.
                   the financial specialist started up this company back in 2014. Responsible personality,
                   an expert when it comes to finance and accounts.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Co-Founder and Managing Director"
                    name="Saurabh Sareen"
                    img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg"
                  >
                    Managing Director / Owner at BG Unified Solutions Limited, AU and NZ. 
                    Hardworking, Cloud Services and Hosting Solutions Specialist,
                    completely driven by customers satisfaction and deliverability.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                  <Link href="/webteam"><a className="text-primary  Nexa-Bold d-flex my-2" href="">Meet the Website IT Team<Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a></Link>
                </div>
                <div className="py-5" style={{ paddingTop: "100px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default about;
