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
  Select,
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

const ChannelSelector = (props) => (
    <Select my={5} onChange={props.change} focusBorderColor="primary.500" value={props.channel}>
      <option value="SIP-10">SIP-10</option>
      <option value="SIP-20">SIP-20</option>
      <option value="SIP-50">SIP-50</option>
      <option value="SIP-100">SIP-100</option>
      <option value="SIP-200">SIP-200</option>
      <option value="SIP-250">SIP-250</option>
      <option value="SIP-300">SIP-300</option>
    </Select>
)

function SIP(props) {
  const [channel, setChannel] = React.useState("SIP-20");
  const handleChange = (e) => {
    setChannel(e.target.value)
  }
  const openControls = () => setShow(true);
  return (
    <div>
      <Head>
        <title>
          Innovation and Excellence - SIP As A Service(SIPaaS) | BG Unified
          Solutions
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
                <h1 className="display3 text-white">SIP As A Service (SIPaaS)</h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  SIP as a Service Infrastructure includes more than 15 Cisco
                  Unified border Elements with 1600 SIP channels spanned across
                  multiple DC locations.
                </p>
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
                <TabList style={{ borderBottomColor: "#ffffff22" }}>
                  <Tab className="py-4 px-5 display6 text-white">Single</Tab>
                  <Tab className="py-4 px-5 display6 text-white">Cluster</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Single Cube"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Single Cube, " + channel}></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row justify-content-center">
                      <div className="col-lg-4 col-sm-6 col-md-6 p-1 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Cluster Cube"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube, " + channel}></PricingQuote>
                          </PricingCard>
                          </div>  
                          <div className="col-lg-4 col-sm-6 col-md-6 p-1 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Cluster Cube DEH"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube DEH, " + channel}></PricingQuote>
                          </PricingCard>
                          </div>   
                          <div className="col-lg-4 col-sm-6 col-md-6 p-1 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title={<div className="text-center"> Cluster Cube DEH <br/> <small> (with Multiple DC) </small> </div>}
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube with Multiple DC, " + channel}></PricingQuote>
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
      {/* <section className="fdb-block section">
            <div className="container">
                <div className="row text-center">
                <div className="col-12">
                    <h1 className="display4">Technologies</h1>
                </div>
                </div>
                <div className="row text-center justify-content-center mt-5">
                <div className="col-12 col-sm-6 col-lg-3">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/analytics.svg" />
                    <h3><strong>Feature One</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/price_tag.svg" />
                    <h3><strong>Feature Two</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/secure.svg" />
                    <h3><strong>Feature Three</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/stack.svg" />
                    <h3><strong>Feature Four</strong></h3>
                    <p>Duden flows by their place far far away, behind the word mountains.</p>
                </div>
                </div>
            </div>
            </section> */}

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">
                Innovation and Excellence
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                In today’s world, collaboration involves so much more than
                voice. COnnectivity plays the most important part of this
                scenario. With the advent of SIP as a Service, we have finally
                solved this problem as well. With a full range of video and web
                conferencing solutions, unified communications, and workspace
                applications, the adoption of collaboration technology is
                widespread across organizations and affects multiple lines of
                business. SIP channels provide you with a number of access
                points for the same. Putting video in action, from the desktop
                to the conference rooms and to the largest applicable
                venues—including audio/video and rich media content that can be
                captured, streamed live, archived, or repurposed for the
                required collaboration tools{" "}
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
                      Mobile access
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Multiple data centre locations, allows access to your
                      website anytime, anywhere. Improved operational
                      efficiencies, Reduced communication-related delays and
                      enhanced collaboration.{" "}
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
                      Other collaborative tools
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Email (MS Exchange and SMTP), file services (CIFS, FTP),
                      document management(SharePoint), Interactive and
                      transactional applications such as VMware VDI, and SQL.{" "}
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
                      Secure Channels
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Ensuring completely secure network by technologies such as
                      NAC(Network Access Control) using ISE, SourceFire, Cisco /
                      Palo Alto / Checkpoint / Fortinet Firewall, DDOS
                      Protection.{" "}
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
                      With BG Unified Solutions SIP as a Service, you get
                      infrastructure including more than 15 Cisco Unified border
                      Elements with 1600 SIP channels spanned across multiple DC
                      locations with DUAL Exchange Homing. The hosted wireless
                      solution includes multiple clusters as well as isolated
                      Data centres of Cisco WLC 5508, 2504 and Aruba
                      controllers. We have the expertise to address these
                      challenges by designing and delivering complete
                      collaboration solutions that maximize your capabilities
                      and investments while minimizing your technology
                      footprint. We bring our team of experienced collaboration
                      experts to every engagement, and we offer business and
                      technology assessments to help identify any barriers in
                      order for your collaborative Goals to succeed.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      BG Unified Solutions ensures a completely secure network
                      by technologies such as NAC(Network Access Control) using
                      ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet
                      Firewall, DDOS Protection. Stop tying up capital in the
                      depreciating asset that is infrastructure — pay only for
                      the infrastructure you actually need and use, with over 50
                      geographically dispersed sites hosting 250+ separate
                      pieces of infrastructure. Boost up your operational
                      efficiency. Improve your organization’s agility.
                      Guaranteed access to a team of experts in different
                      technologies.The key service for supporting mobile
                      communications, wireless connections in your offices and
                      organizations. Wireless plays an integral part in
                      collaborating and streamlining resources of an
                      organisation and increases productivity at a tremendous
                      rate.
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
                <Link href="/services/storage">
                  <a className="no-red">
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
  );
}

export default SIP;
