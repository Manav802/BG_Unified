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
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";

function SDWAN(props) {
  const features = ["High-performance routes", "Fully Managed Service"];
  return (
    <div>
      <Head>
        <title>SD-WAN Optimization As A Service</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg">
        <img
          className="w-100"
          src="/assets/images/backgrounds/dots_circle.jpg"
        />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
              <Fade duration={700} delay={300} bottom>
                <h1 className="display3">SD-WAN Optimization As A Service</h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                Next-generation WAN connectivity services. We have Express
                Routes to office 365, AWS, Azure through Equinix Cloud Exchange
                and are peering with ASNs directly for providing better and
                high-performance routes to Office 365, Azure and AWS.
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Tabs align="center">
                <TabList>
                  <Tab className="p-3 px-4 display6">Physical</Tab>
                  <Tab className="p-3 px-4 display6">Virtual</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            featureList={features}
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Single"
                          >
                            <div className="d-flex btn align-items-center">
                              <PricingQuote
                                button
                                serviceName="SD-WAN Optimizations As A Service"
                                serviceDescription="Physical, Single"
                              ></PricingQuote>
                            </div>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            featureList={features}
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Cluster"
                          >
                            <div className="d-flex btn align-items-center">
                              <PricingQuote
                                button
                                serviceName="SD-WAN Optimizations As A Service"
                                serviceDescription="Physical, Cluster"
                              ></PricingQuote>
                            </div>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>

                  <TabPanel className="py-2">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            featureList={features}
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Single"
                          >
                            <div className="d-flex btn align-items-center">
                              <PricingQuote
                                button
                                serviceName="SD-WAN Optimizations As A Service"
                                serviceDescription="Virtual, Single"
                              ></PricingQuote>
                            </div>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            featureList={features}
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Cluster"
                          >
                            <div className="d-flex btn align-items-center">
                              <PricingQuote
                                button
                                serviceName="SD-WAN Optimizations As A Service"
                                serviceDescription="Virtual, Cluster"
                              ></PricingQuote>
                            </div>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">Sound Innovation</div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Software-Defined Wide Area Network or famously known as SD-WAN
                is mainly defined as “A virtual WAN architecture, allowing firms
                or companies to leverage any combination of services, including
                LTE, VoLTE, Broadband services, WiFi Services etc. to securely
                connect users to applications. The function is centralized
                control. SD-WAN transforms the way a particular network supports
                and interacts with enterprise applications.
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
                    <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                      Virtual Flexibility
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Industry’s only multi-gigabit virtual WAN optimization
                      solution and the only products that support every major
                      hypervisor. Email (MS Exchange and SMTP), file services
                      (CIFS, FTP), document management(SharePoint)
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
                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Diversifying Applications
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Silver Peak/ Riverbed’s WAN optimization solution works on
                      all applications, regardless of transport protocol or
                      version. Interactive and transactional applications such
                      as VMware VDI, and SQL.
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
                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Storage Centralization
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Fast, Reliable and Increasingly efficient centralizing
                      servers and storage offers significant cost, management,
                      security and compliance benefits. Detects, isolates
                      notifies and corrects faults encountered in the network.
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
      <section className="fbd-block section">
        <div className="container">
          <div className="row">
            <Fade duration={500} distance={"30%"} bottom>
              <div className="col text-center">
                <h1 className="display4">Why BG Unified Solutions?</h1>

                <div className="row text-left pt-4">
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      Data Center Class WAN Optimization Top IT organizations
                      around the globe choose Silver Peak WAN / Riverbed
                      optimization to overcome network performance challenges
                      and lower ongoing WAN costs. We offer the industry’s only
                      multi-gigabit virtual WAN optimization solution and the
                      only products that support every major hypervisor. All
                      products are available for immediate download and free
                      trial via our virtual marketplace. With the broadest range
                      of physical and virtual products, we deliver
                      cost-effective solutions for the smallest branch offices,
                      the largest data centres, and everything in between.
                      Silver Peak’s / Riverbed’s WAN optimization solution works
                      on all applications, regardless of transport protocol or
                      version — all without risk of corrupting data or altering
                      behaviour.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      No plug-ins are required, which expedites deployment and
                      saves both time and money. Fast, Reliable and Increasingly
                      Efficient Centralizing servers and storage offer
                      significant cost, management, security and compliance
                      benefits. The risk is when poor WAN performance makes it
                      difficult for remote users to effectively use hosted
                      applications. Silver Peak / Riverbed overcome that
                      challenge, ensuring that all centralized applications
                      perform to their fullest potential. Next-generation WAN
                      connectivity services. We have Express Routes to office
                      365, AWS, Azure through Equinix Cloud Exchange and are
                      peering with ASNs directly for providing better and
                      high-performance routes to Office 365, Azure and AWS.
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
                <Link href="/services/infra">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Infrastructure <br /> as a service{" "}
                      </div>
                    }
                    children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"
                  />
                </Link>
              </div>

              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/storage">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/cloud.svg"
                    title={
                      <div>
                        Storage <br /> as a service{" "}
                      </div>
                    }
                    iconBg="#F3A622"
                    children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage."
                  />
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/dns">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/earth_ouline.svg"
                    title={
                      <div>
                        DNS <br /> as a service{" "}
                      </div>
                    }
                    iconBg="#5F1CE6"
                    children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching."
                  />
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default SDWAN;
