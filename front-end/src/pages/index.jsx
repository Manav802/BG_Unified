import React, { Component, useEffect } from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import { Image, Button, Heading, ButtonGroup, Icon, AspectRatioBox, Box, Slide } from "@chakra-ui/core";
import CardWithIcon from "../components/cards/CardWithIcon";
import FeatureCard from "../components/cards/FeatureCard";
import CaseStudy from "../components/case_study/CaseStudy";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "../../public/assets/data/testimonials";
import { CASESTUDY } from "../../public/assets/data/casestudydata";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Slider from "react-flickity-component";
import ImageGroup from "../pageBuilder/components/ImageGroup";
import Section from "../pageBuilder/Section";
import Conclusion from "../components/footer/Conclusion";

const sliderInfo = [
  {
    title: "Deploy, Scale your business with our security and reliability",
    imgSrc: "/assets/images/backgrounds/data_servers.jpg",
    subTitle: "Your go-to partner for all hosting business solutions and services that deliver value and enable solid corporate growth.",
    btnPrimaryText: "Explore Now",
    btnSecondaryText: "Get a quote",
    btnPrimaryLink: "/solutions",
    btnSecondaryLink: "/contact"
  },
  {
    title: "Best Enterprise Services around the globe",
    imgSrc: "/assets/images/backgrounds/world.webp",
    subTitle: "Your go-to partner for all hosting business solutions and services that deliver value and enable solid corporate growth.",
    btnPrimaryText: "Explore Now",
    btnSecondaryText: "Get a quote",
    btnPrimaryLink: "/solutions",
    btnSecondaryLink: "/contact"
  },
  {
    title: "Our Infrastructure on Multiple Goverment Panels",
    imgSrc: "/assets/images/backgrounds/data_center.png",
    subTitle: "Your go-to partner for all hosting business solutions and services that deliver value and enable solid corporate growth.",
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
      5000
    );
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

          <script
            type="text/javascript"
            src="http://d3js.org/d3.v3.min.js"
          ></script>
          <script
            type="text/javascript"
            src="http://d3js.org/topojson.v1.min.js"
          ></script>
          <script
            type="text/javascript"
            src="/assets/js/planetaryjs.min.js"
          ></script>
          <script type="text/javascript" src="/assets/js/globe.js"></script>
        </Head>
        <div className="bg-landing bg-dark position-relative">
          {/*  */}
          {/* <video controls="" autoplay="true" loop style={{opacity:".3", mixBlendMode:"lighten"}} className="bg-image" name="media">
          <source src="/assets/videos/dots.webm" type="video/webm">
            </source>
          </video> */}
          <Slider options={{ autoPlay: 5000, prevNextButtons: false, pageDots: false, draggable: false }}>
            {sliderInfo.map((info, index) => (
              <Box className="w-100 landing-section">
                <Image src={info.imgSrc} opacity={.4} className="bg-image"></Image>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div>
                        <div className="display3 slider-text text-center text-white mt-0">
                          {info.title}
                        </div>
                        <div className="h6 text-center slider-text NunitoSans-SemiBold mt-3">
                          {info.subTitle}
                        </div>
                        <div className="py-4 d-flex slider-text justify-content-center">
                          <Link href={info.btnPrimaryLink}>
                            <Button
                              variant="solid"
                              className="mr-3 btn btn-outline primary-btn"
                              variantColor="primary"
                              size="lg"
                            >
                              {info.btnPrimaryText}
                            </Button>
                          </Link>
                          <Link href={info.btnSecondaryLink}>
                            <Button
                              variant="outline"
                              className="mr-3 btn btn-outline secondary-btn"
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
                <div className="row">
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/infra">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/server.svg"
                          title={
                            <div>
                              Infrastructure <br /> As A service{" "}
                            </div>
                          }
                          children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/storage-unit">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/cloud.svg"
                          title={
                            <div>
                              Storage <br /> As A service{" "}
                            </div>
                          }
                          iconBg="#F3A622"
                          children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage."
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/dns">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/earth_ouline.svg"
                          title={
                            <div>
                              DNS <br /> As A service{" "}
                            </div>
                          }
                          iconBg="#5F1CE6"
                          children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching."
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/backup">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/disk.svg"
                          title={
                            <div>
                              Backup <br /> As A service{" "}
                            </div>
                          }
                          iconBg="#F33022"
                          children="Clustering of Devices, Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, Cisco Wi-Fi and Aruba Wi-Fi."
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/proxy-server">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/proxy.svg"
                          title={
                            <div>
                              Proxy <br /> As A service{" "}
                            </div>
                          }
                          iconBg="#0D5EA5"
                          children="Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Workforce Optimization and Quality Monitoring, N+N Redundant components."
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-sm-6 my-2">
                    <Link href="/services/platform">
                      <a className="no-red">
                        <CardWithIcon
                          icon="/assets/images/icons/monotone/dashboard.svg"
                          title={
                            <div>
                              Platform <br /> As A service{" "}
                            </div>
                          }
                          iconBg="#19C741"
                          children="Prototype multisite or multi-cloud DR strategies. Shortened Recovery Time.Geographically dispersed availability"
                        />
                      </a>
                    </Link>
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
        <div className="container-fluid py-5 my-5 position-relative globe-section">
          <Box top={0} className="globe-container position-absolute">
            <canvas
              className="ml-auto mr-auto d-block"
              id="globe"
              width="1200px"
              height="1200px"
            ></canvas>
          </Box>
          <Box className="section">
            <div className="container">
              <div className="row layer-1">
                <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="col-lg-12 py-5 d-flex flex-column justify-content-center">
                    <Heading size="sm" className="text-primary" letterSpacing={1.5} textTransform="uppercase" mb={2}>Our Reach</Heading>
                    <p className="mb-2 display3 text-white">Our Data Center Locations</p>
                    <h6 className="h6 NunitoSans-SemiBold text-white text-justify">
                      BG Unified Solution specializes in Hosting Solutions and Services.We help clients plan, build, support and manage their IT infrastructure. Currently, we have several DC locations including ME1, LD3, IBM. We have our Data Centre Locations spread out to locations including Auckland, Sydney and Melbourne.
                </h6>
                  </div>
                </Fade>
                <Fade duration={500} cascade distance={"50%"} left>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="https://image.flaticon.com/icons/svg/1360/1360975.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Sydney</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="https://image.flaticon.com/icons/svg/1360/1360902.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Auckland</Heading>
                      </div>
                    </Box>
                  </div>
                  <div className="col-md-3 col-sm-4 p-2">
                    <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                        <Image src="https://image.flaticon.com/icons/svg/1360/1360895.svg" size="64px"></Image>
                        <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6 px-2">Melbourne</Heading>
                      </div>
                    </Box>
                  </div>
                </Fade>
              </div>
            </div>
          </Box>
        </div>
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
                    <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
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


        <Section bg="light.400" py={24}>
          <div className="container">
            <Fade duration={500} cascade distance={"30%"} bottom>
              <div className="row">
                <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                  Testimonials
              </div>
                <div className="col-12 my-2 text-center text-dark display4">
                  What they say!
              </div>
                <div className="col-md-10 offset-md-1 position-relative">
                  <TestimonialCard testimonialDetails={TESTIMONIALS} />
                  <Image position="absolute" top="0px" left={0} opacity={.07} src="https://image.flaticon.com/icons/svg/102/102571.svg" size="96px"></Image>
                </div>
              </div>
            </Fade>
          </div>
        </Section>

        <Section>
          <CaseStudy caseStudyDetails={CASESTUDY} link="read" />
        </Section>
        <Section containerWidth={["100%", "90%"]} className="brands">
          <ImageGroup objectFit="contain" images={["/assets/images/brands/aapt.png", "/assets/images/brands/advanced_life.png", "/assets/images/brands/agc_plus.png", "/assets/images/brands/blueglue.png", "/assets/images/brands/cumulus.png", "/assets/images/brands/equinix.png", "/assets/images/brands/fdba.png", "/assets/images/brands/fortinet.png", "/assets/images/brands/fujitsu.png", "/assets/images/brands/halls.png", "/assets/images/brands/huawei.png", "/assets/images/brands/hutchisonports.png", "/assets/images/brands/infin_it.png", "/assets/images/brands/sabre_pacific.png", "/assets/images/brands/straintz.png", "/assets/images/brands/veeam.png"]} minW={["119.5px", "135.5px", "175px", "231px", "283px"]} width="auto" />
        </Section>
        <Conclusion></Conclusion>
      </div>
    );
  }
}

export default Landing;
