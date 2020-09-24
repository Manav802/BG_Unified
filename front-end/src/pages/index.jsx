import React, { Component } from "react";
import Head from "next/head";
import { FaArrowRight} from "react-icons/fa";
import { Image, Button, Heading,  Box,  Flex, Icon, Text, Grid  } from "@chakra-ui/core";
import FeatureCard from "../components/cards/FeatureCard";
import CaseStudy from "../components/case_study/CaseStudy";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "../database/testimonials";
import newsroom from "../database/newsroom"
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Slider from "react-flickity-component";
import Section from "../pageBuilder/Section";
import Conclusion from "../components/footer/conclusion";
import SVG from "../components/svg/SVG";
import Service from "../components/cards/Service";
import Offer from "../components/cards/Offer";
import Swiper from "../components/Sliders/HomeSlider";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import Feature3 from "../pageBuilder/components/Feature3";
import Body from "../pageBuilder/Body";
import Partners from "../components/Sliders/Partners";

const sliderInfo = [
  {
    title: <span>Welcome to BG Unified Solutions</span>,
    imgSrc: "/assets/images/backgrounds/globe.webp",
    subTitle: "Your go-to partner for all IT solutions and services that deliver value and enable solid corporate growth.",
    btnPrimaryText: "Explore Now",
    btnSecondaryText: "Get a quote",
    btnPrimaryLink: "/solutions",
    btnSecondaryLink: "/contact"
  },
  {
    title: "Protecting Online Presence of your Business",
    imgSrc: "/assets/images/backgrounds/cyber_security.webp",
    subTitle: "Fast, friendly and delivery oriented web services, driven by our commitment of customer satisfaction.",
    btnPrimaryText: "Explore Now",
    btnSecondaryText: "Get a quote",
    btnPrimaryLink: "/solutions",
    btnSecondaryLink: "/contact"
  },
  {
    title: "Geographical Redundant Infrastructre",
    imgSrc: "/assets/images/backgrounds/map.webp",
    subTitle: "Highly Redundant Solutions. Connectivity with highly secured infrastructure with multiple telco vendors.",
    btnPrimaryText: "Explore Now",
    btnSecondaryText: "Get a quote",
    btnPrimaryLink: "/solutions",
    btnSecondaryLink: "/contact"
  },
]

const processInfo = [
  {
    title: "Consult",
    color: "green.500",
    content: "From concept through business case then on to high level design"
  },
  {
    title: "Design",
    color: "blue.500",
    content: "From high level design to detailed design ready to build"
  },
  {
    title: "Build",
    color: "yellow.500",
    content: "After design sign off we procure and build your tailored solution"
  },
  {
    title: "Deploy",
    color: "red.500",
    content: "Implentation services from specification time to final signoff"
  },
  {
    title: "Manage",
    color: "purple.500",
    content: "Ongoing consulting support & operational services tailored to your needs"
  },
]

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
    // document.getElementById('globe-box').innerHTML = `<canvas className="ml-auto mr-auto d-block" id="globe" width="1200px" height="1200px"></canvas>`
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    });
  }
  render() {
    return (

      <div className="landing overflow-hidden">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <title>BG Unified Solutions</title>
          <meta name ="description" content = "IT solutions and services. Australia's No. 1 IT service provider. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Affordable and secure. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF">
          </meta>
          <meta property="og:title" content="BG Unified Solutions" key="title" />
          <meta property="og:description" content="IT solutions and services. Australia's No. 1 IT service provider. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Affordable and secure. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF"/>
        </Head>
        <Swiper></Swiper>
          <Section my={0} py={0}>

            <div className="row my-5">
              <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                Solutions
              </div>
              <div className="col-12 mt-2 mb-5 text-center text-dark display4">
                What We Deliver?
              </div>
              <Fade duration={800} cascade distance={"8%"} bottom>
                <div className="row mx-2">
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="Infrastructure As A Service"></Service>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="Storage As A Service"></Service>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="Wireless As A Service"></Service>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="DNS As A Service"></Service>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="Unified Communications As A Service"></Service>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Service className="col-xl-4 col-sm-6 my-2" service="Firewall As A Service"></Service>
                  </div>
                  </div>
                </Fade>
            </div>
            </Section>
            <Section mt="192px" mb={0} bg="#060529">
                <Grid mt="-160px" templateColumns="256px auto" p={12} rounded={12} bg="white" boxShadow="xl">
                    <Image alt="" src="/assets/images/vectors/covid.svg" width={["100%","40%","256px"]}></Image>
                    <Flex direction="column" justify="center" px={12}>
                        <a className="link"><Heading size="lg" fontFamily="Nexa Bold">Free Services* for 3 months for Healthy and Safety related Businesses. <Icon name="chevron-right"></Icon></Heading></a>
                        <Text mt={3} opacity={.7}>Let us help you if you have limited budgets and because of COVID your current infrastructure can't handle the load. Dial our direct line +61 2 9095 0000. We will get things in motion very quickly.</Text>
                    </Flex>
                </Grid>
            </Section>
            <Section bg="#060529" my={0} py={24} color="white">
            <Row>
                <Flex direction="column" justify="center" width={["100%","100%",1/2]}>
                    <Title textAlign="left" fontSize="56px">Highly <span className="text-primary">Redundant Solutions</span>. 
                    Highly expert team
                    </Title>
                    <Text mt={4} fontSize="20px" opacity={.7}>
                        Our values are based around fresh ideas, delivering as promised, shoeing our customer’s respect, and being 100% committed.
                    </Text>
                    <Link href="/features">
                        <a className="link">
                        <Heading color="white" py={3} size="md">
                        Learn More{" "}
                        <Icon name="arrow-forward"></Icon>
                        </Heading>
                        </a>
                    </Link>
                </Flex>
                <Flex px={"3%"} wrap="wrap" width={["100%","100%",1/2]}>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Feature3 bg="red.500" icon="/assets/images/icons/color/transaction.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold">Guaranteed Transactional Security</Heading>
                        </Feature3>
                        <Feature3 bg="purple.600" icon="/assets/images/icons/color/graph.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold"><Title textAlign="left" fontSize="40px">100%</Title>Success<br/>Ratio</Heading>
                        </Feature3>
                    </Box>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Feature3 mt={24} bg="light.500" color="dark.500" icon="/assets/images/icons/color/team.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold"><Title textAlign="left" fontSize="40px" color="yellow.400">40+</Title>Trusted<br/>Partners</Heading>
                        </Feature3>
                        <Feature3 bg="blue.800" icon="/assets/images/icons/color/rocket.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold">Completely Scalable Solutions</Heading>
                        </Feature3>
                    </Box>
                </Flex>
            </Row>       
        </Section>
        {/* <Section bg="dark.500" bgImage="url('/assets/images/vectors/map.webp')" blend="multiply" py={20}>
      
              <div className="row layer-1">
                <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="col-lg-12 py-5 d-flex flex-column justify-content-center">
                    <Heading size="sm" className="text-primary" letterSpacing={1.5} textTransform="uppercase" mb={2}>Our Reach</Heading>
                    <Box fontSize={["4xl","4xl","5xl"]} className="mb-2 display3 text-white">Our Data Center Locations</Box>
                    <Box fontSize={["16px","18px","20px"]} lineHeight={1.5} className="h6 NunitoSans-SemiBold text-white text-justify">
                      BG Unified Solution specializes in Hosting Solutions and Services. We help clients plan, build, support and manage their IT infrastructure. Currently, we have several DC locations including IBM. We have our Data center Locations spread out to locations including Auckland, Sydney and Melbourne.
                </Box>
                  </div>
                </Fade>
                <Fade duration={500} cascade distance={"50%"} left>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image alt="" src="/assets/images/icons/cities/sydney.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Sydney</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white"  borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image alt="" src="/assets/images/icons/cities/auckland.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Auckland</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image alt="" src="/assets/images/icons/cities/melbourne.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Melbourne</Heading>
                      </div>
                    </Box>
                  </div>
                </Fade>
              </div>
        </Section> */}
        <Section overflow="hidden">
        <div className="row p-3 p-md-0">
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mt={6} mb={4}>
              Multiple Data Center Locations
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
              Specialists in Hosting Solutions and Services, we have our Data Center Locations spread out to 
              locations like Auckland, Sydney and Melbourne. Thus, proving BGUS to be a leader in Backup and 
              Disaster Recovery for your Enterprise.</Text>
              <Row rowDistance={8}>
                  <Body  width={1/3} type="numberCount" data={{
                    count: 40,
                    align:"left",
                    suffix: "+",
                    title: "Trusted Partners",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
                    <Body width={1/3} type="numberCount" data={{
                    count: 900,
                    align:"left",
                    suffix: "TB+",
                    title: "Storage Capacity",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
                    <Body width={1/3} type="numberCount" data={{
                    count: 1600,
                    align:"left",
                    suffix: "+",
                    title: "SIP Channels",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
              </Row>
         
          </div>
          <div className="col-md-7 pl-0 position-relative d-none d-md-block">
            <Image alt=""            
              px={8}
              minWidth="900px"
              transform="translateX()"
              src="/assets/images/features/vectors/map.svg"
            />
          </div>
        </div>
        </Section>
        <Section my={16} containerWidth="100%">
            <Partners>
            </Partners>
        </Section>
    
        <Section position="relative" overflow="hidden" containerWidth="100%" bg="light.400" py={24}>
            <Fade duration={500} cascade distance={"30%"} bottom>
                <div className="text-center NunitoSans-ExtraBold text-primary text-uppercase">
                  Testimonials
                </div>
                  <div className="my-2 text-center text-dark display4">
                    What they say!
                </div>
                <TestimonialCard testimonialDetails={TESTIMONIALS} />
                <Box mt="-3%"width="100%" position="absolute" top="0px">
                    <SVG size="16%" src="https://image.flaticon.com/icons/svg/102/102571.svg" color="gray.200" ></SVG> 
                </Box>
            </Fade>
        </Section>

        <Section>
            <Row>
                <Box px={2} width={["100%","100%",1/2]}>
                    <Title mt={4} textAlign="left" fontSize="40px">Our Goals + Our Approach + Our Results  = Our Success Story</Title>
                    <Text mt={4} fontSize="20px" opacity={.7}>
                        Our values are based around fresh ideas, delivering as promised, showing our customer’s respect, and being 100% committed.
                    </Text>
                    <Link href="/features">
                        <a className="link">
                        <Heading color="primary.500" py={3} size="md">
                        Learn More{" "}
                        <Icon name="arrow-forward"></Icon>
                        </Heading>
                        </a>
                    </Link>
                </Box>
                <Flex px={8} wrap="wrap" width={["100%","100%",1/2]}>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Box bgImage="url('/assets/images/newsroom/infra.webp')" mb={6} height="220px" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" rounded={8}>
                        <Heading px={8} pt={8} size="lg" color="white" fontFamily="Nexa Bold">Network Infrastructure Redesign</Heading>
                        </Box>
                        <Box bgImage="url('/assets/images/newsroom/f5_redesign.webp')" mt={6} height="220px" backgroundSize="cover" backgroundRepeat="no-repeat" rounded={8}>
                            <Heading px={8} pt={8} size="lg" color="white" fontFamily="Nexa Bold">F5 Topology Redesign</Heading>
                        </Box>
                    </Box>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Flex align="flex-end" bgImage="url('/assets/images/newsroom/complete_vdi.webp')" height="100%" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" rounded={8}>
                            <Heading p={8} size="lg" color="white" fontFamily="Nexa Bold">BG Unified Solutions hosted UC Solutions</Heading>
                        </Flex>
                    </Box>
                </Flex>
            </Row>       
        </Section>
        
        <Conclusion></Conclusion>
      </div>
    );
  }
}

export default Landing;
