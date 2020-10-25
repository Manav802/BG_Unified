import React, { Component } from "react";
import Slider from "react-flickity-component";
import Team from "../components/cards/team";
import { FaArrowRight } from "react-icons/fa";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import MyCount from "../components/Countup/main";
import Link from "next/link";
import skills from "../database/skills";
import timeline from "../database/timeline";

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
            <title>More About Us | BG Unified Solutions</title>
          </Head>
          <Box pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} opacity=".3" objectFit="cover" width="100%" src="/assets/images/backgrounds/aboutus.jpg"></Image>
            <Fade distance="5%" duration={500} top>
              <Section zIndex="100" textAlign="center" color="white" py={[16, 40]} my={0}>
                <Heading size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Know More</Heading>
                <Title zIndex="100" fontSize={["44px", "64px"]}>About Us</Title>
              </Section>
            </Fade>
          </Box>
          <Box mt="-48px">
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
              {timeline.reverse().map((notes)=>{
              return <Box pos="relative">
                <Flex h="300px">
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                  <Flex justify="center" align="center" rounded="50%" borderWidth={5} borderWidthColor="gray.200" size="96px" color="white" bg="primary.500">
                    <Heading size="md" fontFamily="Nexa Bold">{notes.year}</Heading>
                  </Flex>
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                </Flex>
                <Box pos="absolute" top="96px" width="100%" px={6} mt={8}>
                  <Text fontSize="lg" textAlign="center">
                    {notes.text}
                  </Text>
                </Box>
              </Box>
              })}
              <div className="slider-offset">
                <Flex justify="center" align="center" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
              </div>
            </Slider>
          </Box>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-1">
                <div className="row my-4">
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={40} suffix="+" />
                    </span>
                    <h5>Clients</h5>
                  </div>
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={5} suffix="+" />
                    </span>
                    <h5>Locations</h5>
                  </div>
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={20} suffix="+" />
                    </span>
                    <h5>Projects</h5>
                  </div>
                </div>
                <div className="display6 py-3">Who are WE?</div>
                <Text fontSize="xl">
                BG Unified Solutions Pty. Ltd. Team consists of experts in 
                different technologies like Security, Voice, and a broad range of 
                additional skills, including F5 Load Balancers, WAN Optimization, WAN, 
                Cloud Technologies, and Cisco Technologies. As experts in different 
                technologies, our focus is to provide competitive and affordable 
                Unified Solutions to our clients.

                    </Text>
                <Text fontSize="xl" mt={3}>
                We majorly deal with Cisco Voice / Video Projects, WAN Implementations, 
                DC Design, and Implementation. Our goal is to make our customers more 
                competitive and achieve higher business efficiency through increased 
                agility, significant cost containment, and lower risk. BG Unified Solutions, 
                founded in 2013, provides national and international IT Services to some 
                of Australia's leading companies, who use information technology to 
                improve their business results.

                    </Text> 
              </div>
            </div>
          </div>
          <div id="team" className="section">
            <div className="container">
              <div className="p-3 text-center d-flex flex-column">
                <span className="h6 text-primary">TEAM</span>
                <span className="display5">Meet, the Visionary People</span>
              </div>
              <div className="row py-2">
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Founder & Owner"
                    name="Jingyi Li"
                    img="/assets/images/team/jenny.jpg"
                  >
                    CPA and Master of Accounting.
                    The financial specialist started up this company back in 2014. Responsible personality,
                    an expert when it comes to finance and accounts.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Co-Founder and Managing Director"
                    name="Saurabh Sareen"
                    img="/assets/images/team/saurabh.jpg"
                  >
                    Managing Director / Owner at BG Unified Solutions Limited, AU, and NZ. 
                    Hardworking, Cloud Services, and Hosting Solutions Specialist, entirely 
                    driven by customer satisfaction and deliverability.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                  <Link href="/webteam"><a className="text-primary  Nexa-Bold d-flex my-2" href="">Meet the Development Team<Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a></Link>
                </div>
                {/* <Section>
                  <Box textAlign="center" className="display5" fontSize={[32, 36, 40, 48]} fontWeight="bold">Our Expertise</Box>
                  <Box textAlign="center" pt={2} fontSize={["lg", "xl"]}>The BG Unified Solutions Team is specializes in</Box>
                  <Row justify="space-between">
                    {skills.map((a) => <Box borderRadius="10px" textAlign="justify" align="center" boxShadow={"xl"} my={3} mx={2} p={4} width={["100%","100%", "46%", "31%"]}>
                      <Box>{a.title}</Box>
                      <Flex align="center">{a.subtitles && a.subtitles.map(b => <Box m={2} fontSize={"xs"}>{b}</Box>)}</Flex>
                    </Box>)}
                  </Row>
                </Section> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default about;
