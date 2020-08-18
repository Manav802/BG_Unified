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
  RadioButtonGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";

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

function CONTACT(props) {
  const features = [
    "Includes 5 CSQ",
    "Connectivity to end customer is not included in the costs",
    "All Call Recording",
    "On Demand Call Recording",
    "Fully Managed Service",
];
const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

const [planIndex, setPlanIndex] = React.useState(1);
const [planName, setPlanName] = React.useState("");
const [RDSType, setRDSType] = React.useState("");
const [wfm, setWfm] = React.useState(0);
const [complianceQM, setComplianceQM] = React.useState(0);
const [advancedQM, setAdvancedQM] = React.useState(0);
const [failOverNode, setFailOverNode] = React.useState(false);
const handleFailOverNode = (failOverNode) =>
    failOverNode ? ",Add Fail-Over Node" : "";
const [value, setValue] = React.useState(1);
const handleChange = (value) => setValue(value);
const [tbSpace, setTbSpace] = React.useState(1);
const handleTbSpace = (tbSpace) => setTbSpace(tbSpace);
  const [show, setShow] = React.useState(false);
  const openControls = () => setShow(true);
  return (
    <div>
      <Head>
        <title>
          Innovation and Excellence - Customer Center As A Service (CCaaS) - BG
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
                  Customer Center As A Service (CSaaS)
                </h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  BG Unified Solution’s CCaaS helps you provide a positive
                  customer experience through a suite of advanced contact center
                  tools.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
                <div className="container">
                    <div className="row px-lg-5 px-3">
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="BASE COST PER MONTH"
                                icon="/assets/images/icons/theme/stack.svg"
                                featureList={features}
                            >
                            <a href="#collapse-1" className="no-red">
                                <Button
                                    className="mt-3"
                                    variantColor="primary"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        openControls();
                                        setPlanName("BASE");
                                        setPlanIndex(1);
                                        setWfm(0);
                                        setAdvancedQM(0);
                                        setComplianceQM(0);
                                    }}
                                >
                                    View Options
                                </Button>
                                </a>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="CAGENT-STD"
                                icon="/assets/images/icons/theme/work.svg"
                                featureList={features}
                            >
                            <a href="#collapse-1" className="no-red">
                                <Button
                                    className="mt-3"
                                    variantColor="primary"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        openControls();
                                        setPlanName("CAGENT-STD");
                                        setPlanIndex(2);
                                        setRDSType("");
                                        setValue(0);
                                        setTbSpace(0);
                                        setFailOverNode(false);
                                    }}
                                >
                                    View Options
                                </Button>
                                </a>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="CAGENT-PRM"
                                icon="/assets/images/icons/theme/town.svg"
                                featureList={features}
                            >
                            <a href="#collapse-1" className="no-red">
                                <Button
                                    className="mt-3"
                                    variantColor="primary"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        openControls();
                                        setPlanName("CAGENT-PRM");
                                        setPlanIndex(3);
                                        setRDSType("");
                                        setValue(0);
                                        setTbSpace(0);
                                        setFailOverNode(false);
                                    }}
                                >
                                    View Options
                                </Button>
                                </a>
                            </PricingCard>
                        </div>
                    </div>
                    <div  id="collapse-1" className="collapse-target">
                        <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                            <div className="px-4 py-5 border">
                                <div className="display5 text-center">
                                    {planName}
                                </div>
                                <div className="row px-3">
                                    {planIndex === 1 && (
                                        <>
                                            <div className="col-lg-12 mt-4">
                                                <div className="h6">
                                                    Additional CSQ
                                                </div>
                                                <Slider
                                                    color="primary"
                                                    my="24px"
                                                    max={30}
                                                    defaultValue={1}
                                                    value={value}
                                                    onChange={handleChange}
                                                >
                                                    <SliderTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderFilledTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderThumb
                                                        className="shadow-md"
                                                        fontSize="md"
                                                        fontWeight="800"
                                                        width="auto"
                                                        padding="8px"
                                                        height="32px"
                                                        children={value}
                                                    />
                                                </Slider>
                                            </div>
                                            <div className="col-lg-12 mt-2">
                                                <div className="h6">
                                                    Choose a type
                                                </div>
                                                <RadioButtonGroup
                                                    onChange={(value) =>
                                                        setRDSType(value)
                                                    }
                                                    mt={4}
                                                    isInline
                                                >
                                                    <CustomRadio value=",RDS SERVER WITH CAD">
                                                        RDS SERVER WITH CAD
                                                    </CustomRadio>
                                                    <CustomRadio value=",RDS SERVER WITH TOOLS">
                                                        RDS SERVER WITH TOOLS
                                                    </CustomRadio>
                                                    <CustomRadio value=",RDS SERVER CALL RECORDING">
                                                        RDS SERVER CALL
                                                        RECORDING
                                                    </CustomRadio>
                                                </RadioButtonGroup>
                                            </div>
                                            <div className="col-lg-12 mt-4">
                                                <div className="h6">
                                                    TB Space
                                                </div>
                                                <Slider
                                                    color="primary"
                                                    my="24px"
                                                    max={30}
                                                    defaultValue={1}
                                                    value={tbSpace}
                                                    onChange={handleTbSpace}
                                                >
                                                    <SliderTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderFilledTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderThumb
                                                        className="shadow-md"
                                                        fontSize="md"
                                                        fontWeight="800"
                                                        width="auto"
                                                        padding="8px"
                                                        height="32px"
                                                        children={tbSpace}
                                                    />
                                                </Slider>
                                            </div>
                                            <div className="my-1 col-lg-12 mt-3 d-flex justify-content-between">
                                                <Flex
                                                    py="12px"
                                                    justify="center"
                                                    align="center"
                                                >
                                                    <Switch
                                                        onChange={(e) => {
                                                            setFailOverNode(
                                                                e.target.checked
                                                            );
                                                        }}
                                                        color="primary"
                                                        mb={0}
                                                        id="failOverNode"
                                                    />
                                                    <FormLabel
                                                        mb={0}
                                                        ml="12px"
                                                        htmlFor="fail-over node"
                                                    >
                                                        Add Fail-Over Node
                                                    </FormLabel>
                                                </Flex>
                                            </div>
                                        </>
                                    )}

                                    {(planIndex === 2 || planIndex === 3) && (
                                        <>
                                            <div className="my-1 col-lg-12 mt-4">
                                                <div className="h6">WFM</div>
                                                <Slider
                                                    color="primary"
                                                    my="24px"
                                                    defaultValue={0}
                                                    max="64"
                                                    value={wfm}
                                                    onChange={setWfm}
                                                >
                                                    <SliderTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderFilledTrack
                                                        h="16px"
                                                        borderRadius="8px"
                                                    />
                                                    <SliderThumb
                                                        className="shadow-md"
                                                        fontSize="md"
                                                        fontWeight="800"
                                                        width="auto"
                                                        padding="8px"
                                                        height="32px"
                                                        children={wfm}
                                                    />
                                                </Slider>
                                            </div>
                                            <div className="my-1 col-lg-6 mt-4">
                                                <div className="h6">
                                                    ADVANCED QM
                                                </div>
                                                <NumberInput
                                                    maxWidth="200px"
                                                    min={0}
                                                    max={20}
                                                    value={advancedQM}
                                                    onChange={setAdvancedQM}
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </div>
                                            <div className="my-1 col-lg-6 mt-4">
                                                <div className="h6">
                                                    Number of Agents
                                                </div>
                                                <NumberInput
                                                    maxWidth="200px"
                                                    min={0}
                                                    max={20}
                                                    value={
                                                        wfm <=
                                                        complianceQM +
                                                            advancedQM
                                                            ? wfm
                                                            : complianceQM +
                                                              advancedQM
                                                    }
                                                    onChange={setWfm}
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </div>
                                        </>
                                    )}

                                    <div className="col-lg-12 mt-3 d-flex justify-content-center">
                                        <PricingQuote
                                            serviceDescription={`${planName}${verifyNotEmpty(
                                                value,
                                                "Additional CSQ"
                                            )}${RDSType}${verifyNotEmpty(
                                                tbSpace,
                                                "TB Space"
                                            )}${verifyNotEmpty(
                                                wfm,
                                                "WFM"
                                            )}${verifyNotEmpty(
                                                complianceQM,
                                                "Compliance QM"
                                            )}${verifyNotEmpty(
                                                advancedQM,
                                                "Advanced QM"
                                            )}${handleFailOverNode(
                                                failOverNode
                                            )}`}
                                            button
                                        ></PricingQuote>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
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
                Service Truly Different
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                In today’s world, collaboration or customer service involves so
                much more than voice. With a full range of video and web
                conferencing solutions, unified communications, and workspace
                applications, the adoption of customer service technology is
                widespread across organizations and affects multiple lines of
                business. Positive customer experience through a suite of
                advanced contact centre tools and we have deep contracts with
                all major Telcos including AAPT, Telstra and Optus. We help
                organizations who are looking for an IT Partner who is known for
                speed, quality and consistency of service for distributed and
                complex environments.{" "}
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
                      Profitable Customer Experience
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      We help organisations to develop and improve communication
                      channels and deliver lasting customer relationships at a
                      lower cost. Our objective is to maximize the value of
                      information within an organization whilst minimizing the
                      cost.{" "}
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
                      Employee Productivity
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      We assist organisations in improving employee and partner
                      collaboration to deliver greater employee productivity,
                      improved information sharing and knowledge management{" "}
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
                      Securing Data
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      We help organisations reduce their risks by offering
                      solutions that for creating, sharing and storing the
                      information, to protect, detect and respond to external
                      and internal incidents and threats.{" "}
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
                      BG Unified Solution’s CCaaS helps you provide a positive
                      customer experience through a suite of advanced contact
                      centre tools and we have deep contracts with all major
                      Telcos including AAPT, Telstra and Optus. We help
                      organisations reduce their risks by offering solutions for
                      creating, sharing and storing the information, to protect,
                      detect and respond to external and internal incidents and
                      threats. We help organisations to develop and improve
                      communication channels and deliver lasting customer
                      relationships at a lower cost.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="lead text-justify">
                      Our objective is to maximize the value of information
                      within an organization whilst minimizing the cost. We
                      assist organisations in improving employee and partner
                      collaboration to deliver greater employee productivity,
                      improved information sharing and knowledge management. We
                      help organizations who are looking for an IT Partner who
                      is known for speed, quality and consistency of service for
                      distributed and complex environments. As experts in a wide
                      range of technologies, our focus is to provide competitive
                      and affordable end-to-end solutions to our clients
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
                <Link href="/services/ucaas">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/cloud.svg"
                      title={
                        <div>
                          Unified Communication <br /> As A service{" "}
                        </div>
                      }
                      iconBg="#F3A622"
                      children="Cisco and Avaya Unified Collaboration, Messaging,
                  Telepresence, Contact Center, Workforce Optimization and
                  Quality Monitoring."
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
                          DNS <br /> as a service{" "}
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

export default CONTACT;
