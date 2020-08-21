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
  Checkbox,
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


const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + text : "");

function WIRELESS(props) {
  const [logs1, setLogs1] = React.useState(0);
  const [logs2, setLogs2] = React.useState(0);
  const [logs3, setLogs3] = React.useState(0);
  const [guest1, setGuest1] = React.useState(false);
  const [guest2, setGuest2] = React.useState(false);
  const [guest3, setGuest3] = React.useState(false);
  const handleGuestSwitch = (bool) => (bool) ? (",Guest-10M Included") : ("")
  return (
    <div>
      <Head>
        <title>
          Wireless Made Simple - Wireless As A Service(WaaS) - BG Uniified
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
                <h1 className="display3 text-white">
                  Wireless As A Service (WaaS)
                </h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  The hosted wireless solution
                  includes multiple clusters as well as isolated Data centres of
                  Cisco WLC 5508, 2504 and Aruba controllers.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
                <div className="container">
                    <Fade duration={500} bottom>
                    <div className="row px-lg-5 px-3">
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-5"
                                }
                                icon="/assets/images/icons/theme/stack.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs1}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs1(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs1}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest1} onChange={e => setGuest1(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-5 ${verifyNotEmpty(
                                        logs1,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest1)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-10"
                                }
                                icon="/assets/images/icons/theme/stack.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs2}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs2(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs2}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest2} onChange={e => setGuest2(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-10 ${verifyNotEmpty(
                                        logs2,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest2)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-20"
                                }
                                icon="/assets/images/icons/theme/stack.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs3}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs3(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs3}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest3} onChange={e => setGuest3(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-20 ${verifyNotEmpty(
                                        logs3,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest3)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                    </div>
                    </Fade>
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
                Wireless Made Simple
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Wireless As A Service is actually a combination of
                infrastructural units (like access points) and managed services
                along with real-time monitoring. Identifying or diagnosing,
                optimizing infrastructural resources, user and network issues is
                an essential part of the service. The key service for supporting
                mobile communications, wireless connections in your offices and
                organizations. Wireless plays an integral part in collaborating
                and streamlining resources of an organisation and increases
                productivity at a tremendous rate.{" "}
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
                      Clustering of Devices
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Wireless Solution with Cisco 5508 WLC in Cluster and 4404
                      WLC in Cluster, so as to support Wireless Phones in any
                      environment. Traffic and congestion problems reduced
                      significantly.{" "}
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
                      Unified and Efficient
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Improved operational efficiencies, Reduced
                      communication-related delays and enhanced collaboration.
                      Completely redundant and efficient transmission.{" "}
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
                      Network Security
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Ensuring a completely secure network by technologies such
                      as NAC(Network Access Control) using ISE, SourceFire,
                      Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS
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
                      With BG Unified Solutions Wireless as a Service, you get
                      Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution
                      includes multiple clusters as well as isolated Data
                      centres of Cisco WLC 5508, 2504 and Aruba controllers.
                      Wireless Solution with Cisco 5508 WLC in Cluster and 4404
                      WLC in Cluster, so as to support Wireless Phones in any
                      environment. Traffic and congestion problems reduced
                      significantly. Unified and Efficient service, i.e.
                      Improved operational efficiencies, Reduced
                      communication-related delays and enhanced collaboration.
                      Completely redundant process and efficient transmission.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      BG Unified Solutions ensures a completely secure network
                      by technologies such as NAC(Network Access Control) using
                      ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet
                      Firewall, DDOS Protection. Boost up your operational
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

export default WIRELESS;
