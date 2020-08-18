import React, { useState } from "react";
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
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";
import { set } from "nprogress";

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      variant={isChecked ? "solid" : "outline"}
      variantColor={isChecked ? "primary" : "gray.300"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

function UCaaS(props) {
  const [node, setNode] = useState("");
  const [type, setType] = useState("20-10 SIP");
  const [additionalUcaas, setadditionalUcaas] = useState(0);
  const [hunts, setHunts] = useState(0);
  const [num10, setNum10] = useState(0);
  const [num50, setNum50] = useState(0);
  const [num100, setNum100] = useState(0);
  const [extraVM, setExtraVM] = useState(0);
  const [show, setShow] = React.useState(false);
  const openControls = () => setShow(true);
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => {
    setValue(value);
    setExtraVM(value);
  };
  const [showSIP, setShowSIP] = useState(false);
  const [addSIP, setAddSIP] = useState(0);
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const resetOnCardChange = () => {
    setAddSIP(0);
    setShowSIP(false);
  };
  return (
    <div>
      <Head>
        <title>
          Developing your needs - Application Development As A Service - BG
          Unified Solutions
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
                  Application Development As A Service
                </h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  BG Unified Solutions provides services in the area of Web,
                  Mobile and Enterprise Application Development. Our team of
                  technical and functional experts can help you in new
                  Application Development, Modernizing and Supporting existing
                  applications.
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
                  <Tab className="py-4 px-5 display6 text-white">Windows</Tab>
                  <Tab className="py-4 px-5 display6 text-white">BIND</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Standard DNS (BlackBox)"
                            featureList={[
                              "Includes 5 Zones",
                              "Low Latency",
                              "High Availabilty",
                              "BlackBox Service",
                              "Cost Effective",
                            ]}
                          >
                            <Button
                              className="mt-3"
                              variantColor="primary"
                              variant="outline"
                              size="lg"
                              onClick={openControls}
                            >
                              Get a quote
                            </Button>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Premium DNS (BlackBox)"
                            featureList={[
                              "Includes 5 Zones",
                              "Low Latency",
                              "High Availabilty",
                              "BlackBox Service",
                              "Cost Effective",
                            ]}
                          >
                            <Button
                              className="mt-3"
                              variantColor="primary"
                              variant="outline"
                              size="lg"
                              onClick={openControls}
                            >
                              Get a quote
                            </Button>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Standard DNS (BlackBox)"
                            featureList={[
                              "Includes 5 Zones",
                              "Low Latency",
                              "High Availabilty",
                              "BlackBox Service",
                              "Cost Effective",
                            ]}
                          >
                            <Button
                              className="mt-3"
                              variantColor="primary"
                              variant="outline"
                              size="lg"
                              onClick={openControls}
                            >
                              Get a quote
                            </Button>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 col-sm-6 col-md-6  my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/stack.svg"
                            title="Premium DNS (BlackBox)"
                            featureList={[
                              "Includes 5 Zones",
                              "Low Latency",
                              "High Availabilty",
                              "BlackBox Service",
                              "Cost Effective",
                            ]}
                          >
                            <Button
                              className="mt-3"
                              variantColor="primary"
                              variant="outline"
                              size="lg"
                              onClick={openControls}
                            >
                              Get a quote
                            </Button>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <div>
                <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                  <div className="px-4 py-5 border">
                    <div className="display5 text-center">Standard DNS</div>
                    <div className="row px-3">
                      <div className="col-lg-12 mt-4">
                        <div className="h6">Extra Zones</div>
                        <Slider
                          color="primary"
                          my="24px"
                          max={30}
                          defaultValue={1}
                          value={0}
                        >
                          <SliderTrack h="16px" borderRadius="8px" />
                          <SliderFilledTrack h="16px" borderRadius="8px" />
                          <SliderThumb
                            className="shadow-md"
                            fontSize="md"
                            fontWeight="800"
                            width="auto"
                            padding="8px"
                            height="32px"
                            children={23}
                          />
                        </Slider>
                      </div>
                      <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                        <Flex py="12px" justify="center" align="center">
                          <Switch
                            onChange={(e) => {
                              setFailOverNode(e.target.checked);
                            }}
                            color="primary"
                            mb={0}
                            id="failOverNode"
                          />
                          <FormLabel mb={0} ml="12px" htmlFor="fail-over node">
                            Include Redundant DNS
                          </FormLabel>
                        </Flex>
                      </div>
                      <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                        <Flex py="12px" justify="center" align="center">
                          <Switch
                            onChange={(e) => {
                              setFailOverNode(e.target.checked);
                            }}
                            color="primary"
                            mb={0}
                            id="failOverNode"
                          />
                          <FormLabel mb={0} ml="12px" htmlFor="fail-over node">
                            Add Daily Backup
                          </FormLabel>
                        </Flex>
                      </div>
                      <div className="col-lg-12 mt-5 d-flex justify-content-center">
                        <PricingQuote
                          serviceName="DNS As A Service"
                          serviceDescription="Hello"
                          button
                        ></PricingQuote>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">
                Developing your needs
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Application Development as a Service includes building,
                deploying, maintaining, managing and securing your application
                over a particular platform. There are diversified platforms on
                which the applications are built, which include Web, Android,
                iOS etc. Application Development as a Service allows you to get
                your application build on the platform of your choice, and
                maintain and monitor in real-time. The current age is what you
                witness over the multiple devices, because of which Application
                Development Services have grown so much over the past few years.{" "}
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
                      Platform Independence
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Build applications for a range of digital platforms like
                      mobile, desktop, smartwatch, AR etc. User-interactivity,
                      responsiveness, user-friendly interfaces kept into
                      consideration.
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
                      Client-specific
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Highly talented team of professionals and technology
                      experts, to build customized solutions as per the client’s
                      needs. Customer satisfaction is the prime motto, and we
                      ensure to deliver every requirement expected.
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
                      Flexibility and Scalability
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Digital transformation, App modernization and
                      up-gradation, and Application Integration Services. Agile
                      software development model followed to provide better
                      results.
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
                      There are diversified platforms on which the applications
                      are built, which include Web, Android, iOS etc.
                      Application Development as a Service allows you to get
                      your application build on the platform of your choice, and
                      maintain and monitor in real-time. We offer varied App
                      Development Services that are platform-independent which
                      includes mobile, desktop, smartwatch, AR etc.
                      User-interactivity, responsiveness, user-friendly
                      interfaces kept into consideration. Reduced costs, pay for
                      what you want, no hidden costs and completely transparent
                      process. Costing and pricing discussed and negotiated at
                      the starting of the job only.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      BG Solutions has gained an excellent reputation in design
                      and implementation of technology and significant
                      experience in Application Development services design and
                      implementation for a number of clients and in distributed
                      environments and locations. BG Unified Solutions provides
                      national and international IT Services to some of
                      Australia's leading companies, who use information
                      technology to improve their business results. We give you
                      the power to easily deploy, efficiently monitor, and
                      transparently scale the applications that your business
                      requires to run and to interact with customers and
                      partners—while also mitigating the risk of security
                      breaches.
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
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default UCaaS;
