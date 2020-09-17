import React, { Component } from "react";
import Head from "next/head";
import { FaArrowRight} from "react-icons/fa";
import { Image, Button, Heading,  Box,  Flex,  } from "@chakra-ui/core";
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
          <title>BG Unified Solutions</title>
        </Head>
        <div className="bg-landing bg-dark position-relative">
          {/*  */}
          {/* <video controls="" autoplay="true" loop style={{opacity:".3", mixBlendMode:"lighten"}} className="bg-image" name="media">
          <source src="/assets/videos/dots.webm" type="video/webm">
            </source>
          </video> */}
          <Slider options={{ autoPlay: 10000, adaptiveHeight:true,imagesLoaded: true, pageDots: false, draggable: true,pauseAutoPlayOnHover: false,wrapAround: true }}>
            {sliderInfo.map((info, index) => (
              <Box maxHeight={["562px","562px","600px","528px"]} className="w-100 landing-section">
                <Image src={info.imgSrc} opacity={.4} height="100%"  className="bg-image"></Image>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div>
                        <Box fontSize={["3xl","4xl","5xl"]} className="Nexa-Bold text-center text-white mt-0">
                          {info.title}
                        </Box>
                        <Box fontSize={["lg","xl"]} className="h6 text-center NunitoSans-SemiBold mt-3">
                          {info.subTitle}
                        </Box>
                        <div className="py-4 d-flex text-center justify-content-center">
                          <Link href={info.btnPrimaryLink}>
                            <Button
                              variant="solid"
                              className="mx-1 mx-lg-2 btn btn-outline primary-btn"
                              variantColor="primary"
                              size="lg"
                            >
                              {info.btnPrimaryText}
                            </Button>
                          </Link>
                          <Link href={info.btnSecondaryLink}>
                            <Button
                              variant="outline"
                              className="mx-1 mx-lg-2 btn btn-outline secondary-btn"
                              size="lg"
                            >
                              {info.btnSecondaryText}
                            </Button>
                          </Link>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </Box>
            ))}
          </Slider>
        </div>
        <Offer></Offer>
        <div className="section py-3">
          <div className="container">

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
          </div>
        </div>
        <Fade duration={500} cascade distance={"30%"} bottom>
          <div className="section py-0 py-md-4">
            <div className="container pb-2">
              <Heading size="2xl" fontWeight="900" px="10%" fontFamily="Nexa Bold" textAlign="center">We have a ‘can do’ attitude with an ‘easy to work with’ culture.</Heading>
              <Heading size="md" fontWeight="500" px="10%" opacity={.8} textAlign="center">Our values
              are based around fresh thinking, delivering on our promises, showing
                customer respect and making a 100% commitment.</Heading>
              <Fade duration={500} cascade distance={"30%"} bottom>
                <Box className="row justify-content-center">
                  {processInfo.map((step, index) => (
                    <Box className="col-lg-4" p={4} mt={12}>
                      <Heading size="xl" fontFamily="Nexa Bold" textAlign="center" color={step.color}>0{index + 1}</Heading>
                      <Heading size="lg" textAlign="center">{step.title}</Heading>
                      <Heading size="sm" fontWeight="400" px="10%" mt={4} opacity={.8} textAlign="center">{step.content}</Heading>
                    </Box>
                  ))}
                </Box>
              </Fade>
            </div>
          </div>
        </Fade>
        <Section bg="dark.500" bgImage="url('/assets/images/vectors/map.webp')" blend="multiply" py={20}>
          {/* <Box id="globe-box" top={0} className="globe-container position-absolute">
            <DynamicComponent></DynamicComponent>
          </Box> */}
     
              <div className="row layer-1">
                <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="col-lg-12 py-5 d-flex flex-column justify-content-center">
                    <Heading size="sm" className="text-primary" letterSpacing={1.5} textTransform="uppercase" mb={2}>Our Reach</Heading>
                    <Box fontSize={["4xl","4xl","5xl"]} className="mb-2 display3 text-white">Our Data Center Locations</Box>
                    <Box fontSize={["16px","18px","20px"]} lineHeight={1.5} className="h6 NunitoSans-SemiBold text-white text-justify">
                      BG Unified Solution specializes in Hosting Solutions and Services. We help clients plan, build, support and manage their IT infrastructure. Currently, we have several DC locations including IBM. We have our Data Centre Locations spread out to locations including Auckland, Sydney and Melbourne.
                </Box>
                  </div>
                </Fade>
                <Fade duration={500} cascade distance={"50%"} left>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="/assets/images/icons/cities/sydney.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Sydney</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white"  borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="/assets/images/icons/cities/auckland.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Auckland</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="/assets/images/icons/cities/melbourne.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Melbourne</Heading>
                      </div>
                    </Box>
                  </div>
                </Fade>
              </div>
        </Section>
        <div className="landing-benefits pt-5 justify-content-center">
          <div className="col-12 p-0">
            <div className="container p-0">
              <Fade duration={500} cascade distance={"30%"} bottom>
                <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                  Features
              </div>
                <div className="col-12 my-2 text-center text-dark display4">
                  Why Choose Us?
              </div>
              </Fade>
              <div className="col-12 mb-3 ">
                <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="row">
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="24/7 Active Support"
                        icon="/assets/images/icons/color/headphones.svg"
                      >
                        24X7X365 support service, ensures you to provide a
                        positive customer experience. Consulting, support and
                        operational services tailored to your needs.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="Diversified Services"
                        icon="/assets/images/icons/color/stack.svg"
                      >
                        Organisation’s core business systems infrastructure;
                        reaching from desktop to the data centre, hosted data
                        centres, carriage services.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="Value for money"
                        icon="/assets/images/icons/color/secure.svg"
                      >
                        Transparent methodology, no hidden costs, Pricing
                        negotiations at the beginning of the project only. Low and
                        affordable prices.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="Transaction Security"
                        icon="/assets/images/icons/color/price_tag.svg"
                      >
                        Information kept completely confidential, under a
                        Non-Disclosure Agreement. Ensures secure monetary
                        transactions by our trusted payment gateways.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="Monitoring Freedom"
                        icon="/assets/images/icons/color/analytics.svg"
                      >
                        Monitor the progress, data servers, data centres, network
                        connectivity, security, cloud logging, storage and even
                        backup or faults, in real-time
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard
                        title="Enhanced Performance"
                        icon="/assets/images/icons/color/speedometer.svg"
                      >
                        We focus on providing the best a client can get, under the
                        same cost, with maximum efficiency, maintenance and
                        Disaster Management.
                    </FeatureCard>
                    </div>
                    <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-center align-items-lg-end py-3">
                      <span className="display6 text-dark">Not Convinced?</span>
                      <Link href="/features">
                        <a className="text-primary d-flex my-2" href="">
                          Learn More{" "}
                          <Box
                            as={FaArrowRight}
                            h="16px"
                            ml="12px"
                            my="4px"
                          ></Box>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>


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
          <CaseStudy caseStudyDetails={newsroom.filter(news => news.category === "Case Study")} link="read" />
        </Section>
        <Section containerWidth={["100%", "90%"]} className="brands">
          <Flex wrap="wrap" justify="center">
          {["/assets/images/brands/aapt.png", "/assets/images/brands/advanced_life.png", "/assets/images/brands/agc_plus.webp", "/assets/images/brands/blueglue.png", "/assets/images/brands/cumulus.png", "/assets/images/brands/fdba.png", "/assets/images/brands/fortinet.png",  "/assets/images/brands/huawei.webp", "/assets/images/brands/infin_it.png", "/assets/images/brands/datacom.png", "/assets/images/brands/airtrunk.png", "/assets/images/brands/microfocus.svg", "/assets/images/brands/nsw_gov.webp", "/assets/images/brands/victoria.webp", ].map(image => (
            <>
              <Image src={image} width="192px" height="96px" mx={12} my={6} objectFit="contain"></Image>
            </>
          ))}
          </Flex>
        </Section>
        <Conclusion></Conclusion>
      </div>
    );
  }
}

export default Landing;
