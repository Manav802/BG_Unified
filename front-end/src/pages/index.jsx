import React, { Component, useEffect } from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import { Image, Button, Heading, ButtonGroup, Icon,AspectRatioBox, Box } from "@chakra-ui/core";
import CardWithIcon from "../components/cards/CardWithIcon";
import FeatureCard from "../components/cards/FeatureCard";
import CaseStudy from "../components/case_study/CaseStudy";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "../../public/assets/data/testimonials";
import { CASESTUDY } from "../../public/assets/data/casestudydata";
import Fade from "react-reveal/Fade";
import Link from "next/link";

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
    color: "green.500"
  },
  {
    title: "Design",
    color: "blue.500"
  },
  {
    title: "Build",
    color: "yellow.500"
  },
  {
    title: "Deploy",
    color: "red.500"
  },
  {
    title: "Manage",
    color: "purple.500"
  },
]

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
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
      return {count: prevState.count + 1}
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
        <Image src={sliderInfo[this.state.count % sliderInfo.length].imgSrc} opacity={.4} className="bg-image landing-image"></Image>
        {/* <video controls="" autoplay="true" loop style={{opacity:".3", mixBlendMode:"lighten"}} className="bg-image" name="media">
          <source src="/assets/videos/dots.webm" type="video/webm">
            </source>
          </video> */}
        <Box mt={80} className="section landing-section">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  
                  {/* <div className="h3 NunitoSans-Black d-flex flex-wrap mb-0">
                    {" "}
                    <Typewriter
                      options={{
                        strings: ["Deploy", "Scale", "Monitor"],
                        autoStart: true,
                        loop: true,
                      }}
                    />{" "}
                    <div>&nbsp;your</div>
                    <div>&nbsp;business</div>
                  </div> */}
                 {sliderInfo.map((info, index) => (
                   <div className={this.state.count % sliderInfo.length !== index && "d-none"}>
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
                 ))}
                       
                </div>
              </div>
            </div>
          </Box>
          </div>
          
        <div className="brands">
          <div className="container-fluid" >
            <div className="">
              <div className="justify-content-center text-center d-flex mx-xl-5 mx-0 scroll">
                <Image src="/assets/images/brands/aapt.png" />
                <Image src="/assets/images/brands/advanced_life.png" />
                <Image src="/assets/images/brands/agc_plus.png" />
                <Image src="/assets/images/brands/blueglue.png" />
                <Image src="/assets/images/brands/cumulus.png" />
                <Image src="/assets/images/brands/equinix.png" />
                <Image src="/assets/images/brands/fdba.png" />
                <Image src="/assets/images/brands/fortinet.png" />
                <Image src="/assets/images/brands/fujitsu.png" />
                <Image src="/assets/images/brands/halls.png" />
                <Image src="/assets/images/brands/huawei.png" />
                <Image src="/assets/images/brands/hutchisonports.png" />
                <Image src="/assets/images/brands/infin_it.png" />
                <Image src="/assets/images/brands/sabre_pacific.png" />
                <Image src="/assets/images/brands/straintz.png" />
                <Image src="/assets/images/brands/veeam.png" />
              </div>
            </div>
          </div>
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
          </div>
        </div>
        <div className="section pt-0">
          <div className="container pb-5">
              <Heading size="2xl" fontWeight="900" px="10%" fontFamily="Nexa Bold" textAlign="center">We have a ‘can do’ attitude with an ‘easy to work with’ culture.</Heading>
              <Heading size="md" fontWeight="500" px="10%" opacity={.8} textAlign="center">Our values
                are based around fresh thinking, delivering on our promises, showing
                customer respect and making a 100% commitment.</Heading>
                <Box className="row justify-content-center">
                {processInfo.map((step, index) => (
                    <Box className="col-lg-4" p={4} mt={12}>
                        <Heading size="xl" fontFamily="Nexa Bold" textAlign="center" color={step.color}>0{index + 1}</Heading>
                        <Heading size="lg" textAlign="center">{step.title}</Heading>
                        <Heading size="sm" fontWeight="400" px="10%" mt={4} opacity={.8} textAlign="center">Our values
                        are based around fresh thinking, delivering on our promises, showing
                        customer respect and making a 100% commitment.</Heading>
                    </Box>
                ))}
                </Box>
          </div>
        </div>
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
              
              <div className="col-lg-12 py-5 d-flex flex-column justify-content-center">
                <Heading size="sm" className="text-primary" letterSpacing={1.5} textTransform="uppercase" mb={2}>Our Reach</Heading>
                <p className="mb-2 display3 text-white">Our Data Center Locations</p>
                <h6 className="h6 NunitoSans-SemiBold text-white text-justify">
                  BG Unified Solution is a specialist in Hosted Solutions and
                  Services that helps clients plan, build, support and manage
                  their IT infrastructure. Currently, we have 6 DC locations
                  including Equinix SY3, SY4, ME1, LD3, IBM DC Auckland and
                  GOVDC and planned to increase to 10 POPs by end of the year
                  2019.
                </h6>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1360/1360975.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">Sydney</Heading>
                      </div>
                  </Box>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1360/1360902.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">Auckland</Heading>
                      </div>
                  </Box>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1361/1361003.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">New York</Heading>
                      </div>
                  </Box>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1360/1360895.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">Melbourne</Heading>
                      </div>
                  </Box>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1360/1360996.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">Singapore</Heading>
                      </div>
                  </Box>
              </div>
              <div className="col-sm-2 p-2">
                  <Box boxShadow="md" bg="white" className="hover-effect" borderRadius="sm" p={8}>
                      <div className="d-flex align-items-center flex-column">
                      <Image src="https://image.flaticon.com/icons/svg/1360/1360911.svg" size="64px"></Image>
                      <Heading size="sm" mt={3} textTransform="uppercase" letterSpacing={1} className="diplay6">London</Heading>
                      </div>
                  </Box>
              </div>
            </div>
            </div>
          </Box>
        </div>

        <div className="landing-benefits pt-5 justify-content-center">
          <div className="col-12 p-0">
            <div className="container p-0">
              <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                Features
              </div>
              <div className="col-12 my-2 text-center text-dark display4">
                Why Choose Us?
              </div>
              <div className="col-12 mb-3 ">
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
              </div>
            </div>
          </div>
        </div>
       

        <div className="section pb-0">
          <div className="container">
            <div className="my-lg-4 py-lg-3">
              <CaseStudy caseStudyDetails={CASESTUDY} link="read" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container p-0">
            
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
          </div>
        </div>
        <div className="section">
            <div className="container">
              <Box py={12} px={24} rounded={8} overflow="hidden" className="bg-dark position-relative">
                  <Heading size="xl" fontFamily="Nexa Bold" color="white">Let's get IT done.</Heading>
                  <Link href="/solutions"><Button variant="solid" variantColor="primary" mt={6} size="lg" >Explore Now</Button></Link>
                  <Image height="340px" position="absolute" right={0} top="-30%" src="/assets/images/vectors/ic_chip_neon.png"></Image>
              </Box>
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
