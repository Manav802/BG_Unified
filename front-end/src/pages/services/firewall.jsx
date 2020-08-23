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

function Firewall(props) {
  return (
    <>
      <Head>
        <title>To prevent a drastic fall, Install a Firewall | Firewalls As A Service - BG Unified Solutions</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg-dns">
        <div className="w-100 image">
          <img
            className="w-100 dns"
            src="/assets/images/backgrounds/domainhosting.jpg"
            alt="A firewall in the background"
          />
        </div>
        <div className="w-100 divider" />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
              <Fade duration={700} delay={300} bottom>
                <h1 className="display3 text-white">Firewall As A Service</h1>
                <h1 className="display3 text-white">(FwaaS)</h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA.</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Tabs align="center">
                <TabList style={{ borderBottomColor: "#ffffff22" }}>
                  <Tab className="p-3 px-4 text-white display6">Physical</Tab>
                  <Tab className="p-3 px-4 text-white display6">Virtual</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Physical 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/physical_cluster.svg"
                            title="Physical Cluster 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical Cluster 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical Cluster 1G, Multihomed"
                            ></PricingQuote>
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
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
                            title="Virtual 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
                            title="Virtual Cluster 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
                            title="Virtual 10G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 10G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 10G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
                            title="Virtual Cluster 10G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 10G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 10G, Multihomed"
                            ></PricingQuote>
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
              <div className="h4 NunitoSans-ExtraBold">
                To prevent a drastic fall, install a Firewall
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                In this digital era, when technology has proved to be a boon,
                small, medium and large-sized businesses are majorly dependent
                upon networking,connections and interactions. To help these
                operations get performed smoothly and efficiently, with full
                security, to eradicate security breach in your network.
                Firewalls block malicious connections being established inside a
                network and keeps data and information safe within a network.
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
                      Platform Diversity
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      On-premise or cloud-based, that helps secure your IT
                      environment quickly.The mainstay of Enterprise Security.
                      Blocks malicious traffic and allows legitimate traffic to
                      flow without any hindrance.
                    </div>
                    <Image
                      className="mt-auto"
                      height="250px"
                      src="/assets/images/illustrations/PlatformDiversity_Firewall.svg"
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
                      Fast and easy Deployment
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Rapid evolvement, easily deployable with tremendous speed.
                      Proven deployment methodology that integrates and extends
                      your existing security infrastructure without capex.
                    </div>
                    <Image
                      className="mt-auto"
                      height="250px"
                      src="/assets/images/illustrations/FastAndEasyDevelopment_Firewall.svg"
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
                      Advance Technology Stack
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Advanced Malware Protection, Anti-Virus Detection, Uniform
                      resource Locator Filtering, User-Based Policy and Advanced
                      Logging facilities, SSL Virtual Private Network’s included
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
      <Fade duration={500} distance={"30%"} bottom>
        <div className="section py-0">
          <div className="container">
            <div className="row">
              <div className="col-12 p-5 rounded-8 bg-light">
                <h4 className="display5 py-2 mb-2 text-center">
                  Why BG-Unified Solutions?
              </h4>
                <p className="lead text-justify">
                  We, at BG Unified Solutions, tend to offer the best in class
                  Security for your business around the globe. With our team of
                  experts, the experience we’ve gained, ensures you to provide
                  customizable security to your network, prevent any security
                  breach, secure data flowing through your network. We offer you
                  solutions that especially suit your business model, whether
                  small, medium or large, we’ve got it covered. We provide Rapid
                  evolvement, easily deployable with tremendous speed. Proven
                  deployment methodology that integrates and extends your existing
                  security infrastructure. BG Unified solutions provide you
                  firewalls for a single location system, or a multi-homed
                  network, as per your needs and requirements. We have On-premise
                  or cloud-based, that helps secure your IT environment quickly.
                  The mainstay of Enterprise Security. Blocks malicious traffic
                  and allows legitimate traffic to flow without any hindrance.
                  Customer satisfaction and quality is our motto. Maintaining our
                  service is our duty. Any customer support, regarding
                  installation, usage or fault management, consultancy services
                  for your business, we provide extremely satisfying service, and
                  that’s the word for us. We promise you to provide affordable,
                  transparent and cost-efficient service fulfilling your needs.
                  Multi-Layered Hosted Firewall Solution with Dedicated / Shared
                  Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized
                  Policy Management using Panorama, Sourcefire DC. Cloud-Based or
                  on-premise, URL filtering, SSL VPN’s inclusion.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={500} distance={"30%"} bottom>
        <div className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 p-4 mb-4">
                <h4 className="display5 py-3 text-center">Related Services</h4>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/infra">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Infrastructure <br /> as a service{" "}
                        </div>
                      }
                      children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/contact-center">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Contact Center <br /> as a service{" "}
                        </div>
                      }
                      iconBg="#0D5EA5"
                      children="BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus."
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
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Firewall;
