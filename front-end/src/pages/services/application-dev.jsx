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

function APPDEV(props) {
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
                  Mobile and Enterprise Application Development.
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
                      className="mt-auto"
                      height="250px"
                      src="/assets/images/illustrations/PlatformIndependence_AppDev.svg"
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
                      Client-specific
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Highly talented team of professionals and technology
                      experts, to build customized solutions as per the client’s
                      needs. Customer satisfaction is the prime motto, and we
                      ensure to deliver every requirement expected.
                    </div>
                    <Image
                      className="mt-auto"
                      height="250px"
                      src="/assets/images/illustrations/ClientSpecific_AppDev.svg"
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
                      Flexibility and Scalability
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Digital transformation, App modernization and
                      up-gradation, and Application Integration Services. Agile
                      software development model followed to provide better
                      results.
                    </div>
                    <Image
                      src="/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg"
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

export default APPDEV;
