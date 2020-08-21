import React from "react";
import {
  Button,
  Image,
  Icon,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Collapse,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  FormLabel,
  Switch,
  Flex,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";

function DNS(props) {
  const [show, setShow] = React.useState(false);
  const openControls = () => setShow(true);
  return (
    <div>
      <Head>
        <title>
          Spirit of Expertise - Architectural Consultancy As A Service (ACaaS) -
          BG Unified Solutions
        </title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg-dns">
        <div className="w-100 image">
          <img
            className="w-100 dns"
            src="/assets/images/backgrounds/domainhosting.jpg"
          />
        </div>
        <div className="w-100 divider" />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
              <Fade duration={700} delay={300} bottom>
                <h1 className="display3 text-white">
                  Architectural Consultancy As A Service (ACaaS)
                </h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  BG Unified Solution has a team of practising
                  multi-disciplinary architects to baseline current architecture
                  and its shortcomings.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="section top-margin py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">Spirit of Expertise</div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                In today’s world, knowing what’s best for you is the primary
                criteria for you to optimize your resources and use them to the
                fullest. Architectural Consultancy Services, as the name
                suggests, is accessing the needs of the users, about their
                organization, and providing them with the best solutions
                tailored according to their requirements. Monitoring and
                measuring various aspects of the network environment so that
                overall performance can be maintained and optimised.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section py-5">
        <div className="container">
          <div className="row service-benefits">
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark ">
                      Performance Optimized
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Monitors and measures various aspects of the network
                      environment so that overall performance can be maintained
                      and optimised.{" "}
                    </div>
                    <Image
                      height="300px"
                      src="/assets/images/illustrations/diversity.svg"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                      Configuration Management
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Configures network devices, performs inventory management
                      and software management. Local end-market support services
                      and Local language capabilities.{" "}
                    </div>
                    <Image
                      height="300px"
                      src="/assets/images/illustrations/data_center.svg"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                      Wide Expert Range
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Weather System Architecture, Technology Roadmap, or
                      optimization solutions for your business, we’ve got it all
                      covered. Customized and tailor solutions to meet client
                      needs{" "}
                    </div>
                    <Image
                      src="/assets/images/illustrations/assets.svg"
                      className="mt-auto"
                      height="250px"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <section className="fdb-block section">
        <div className="container">
          <div className="row">
            <Fade duration={500} distance={"30%"} bottom>
              <div className="col text-center">
                <h1 className="display4">Why BG Unified Solutions?</h1>

                <div className="row text-left pt-4">
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      {" "}
                      The team we’ve built at BG Unified Solutions Pty Ltd has
                      been carefully selected from subject matter experts in
                      multiple technology domains such as Infrastructure,
                      Security, Networking, and Voice. Augmenting these domains,
                      our staff are specialised in infrastructure architecture,
                      network optimisation, high availability implementation,
                      disaster recovery planning, and unified communications,
                      Our team has accumulated over 10 years in high profile,
                      high impact, enterprise-level projects, including VOIP
                      deployments, Video Conferencing, WAN Implementation, and
                      Data Centre (on-premises and cloud) design and
                      implementations. As experts in a wide range of
                      technologies, our focus is to provide competitive and
                      affordable end-to-end solutions to our clients. Our goal
                      is to make our customers more competitive and achieve
                      higher business efficiency through increased agility, cost
                      containment and lower risk.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      BG Unified Solutions, founded in 2013, provides national
                      and international IT Services to some of Australia's
                      leading companies, who use information technology to
                      improve their business results. BG Unified Solution has a
                      team of practising multi-disciplinary architects to
                      baseline current architecture and its shortcomings, define
                      future state architecture. Whatever be the technology
                      stack(s) that your enterprise has adopted, we can help you
                      future-proof it. We understand that every business is
                      different. Our flexible IT services portfolio can easily
                      be aligned with your specific requirements, situation and
                      objectives. Our clients trust BG Unified Solutions as a
                      long-term IT partner to provide a one-stop-shop for all
                      their core infrastructure needs across data, voice and
                      carrier services.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <div className="section pt-0">
        <div className="container">
          <Fade duration={400} distance={"30%"} bottom>
            <div className="row">
              <div className="col-12 p-4 mb-4">
                <h4 className="display5 py-3 text-center">Related Services</h4>
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
                <Link href="/services/contact-center">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/cloud.svg"
                      title={
                        <div>
                          Contact Center <br /> As A service{" "}
                        </div>
                      }
                      iconBg="#F3A622"
                      children="BG Unified Solution’s CCaaS helps you provide a positive
                  customer experience through a suite of advanced contact center
                  tools."
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
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default DNS;
