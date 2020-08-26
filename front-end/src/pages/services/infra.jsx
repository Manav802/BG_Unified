import React, { useState, useEffect } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import {
  Button,
  Box,
  Collapse,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  RadioButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Drawer,
  Switch,
  FormLabel,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Icon,
  ButtonGroup,
  Heading,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { FaWindows, FaServer, FaDatabase, FaArrowRight } from "react-icons/fa";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import FeatureCard from "../../components/cards/FeatureCard"
import Head from "next/head";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const tabs = [
  {
    index: 0,
    title: "Base Server",
    icon: FaServer,
  },
  {
    index: 1,
    title: "Windows 10",
    icon: FaWindows,
  },
  {
    index: 2,
    title: "Windows 2016 Standard",
    icon: FaWindows,
  },
  {
    index: 3,
    title: "Windows 2016 DC",
    icon: FaWindows,
  },
  {
    index: 4,
    title: "Dedicated DB Server",
    icon: FaDatabase,
  },
];

const plans = [
  {
    index: 0,
    name: "Standard",
    icon: "/assets/images/icons/theme/origami.svg",
    feature: [
      "2vCPU",
      "80GB SSD Storage",
      "4GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    cpu: 2,
    popular: false,
    storage: 80,
    ram: 4,
  },
  {
    index: 1,
    name: "Professional",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    feature: [
      "4vCPU",
      "80GB SSD Storage",
      "6GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    popular: false,
    cpu: 4,
    storage: 80,
    ram: 6,
  },
  {
    index: 2,
    name: "Business",
    icon: "/assets/images/icons/theme/airplane.svg",
    feature: [
      "6vCPU",
      "80GB SSD Storage",
      "8GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    popular: true,
    cpu: 6,
    storage: 80,
    ram: 8,
  },
  {
    index: 3,
    name: "Enterprise",
    icon: "/assets/images/icons/theme/rocket.svg",
    feature: [
      "8vCPU",
      "80GB SSD Storage",
      "16GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    popular: false,
    cpu: 8,
    storage: 80,
    ram: 16,
  },
];

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

function main(props) {
  useEffect(() => {}, []);

  const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

  const [type, setType] = React.useState("");

  const [feature, setFeature] = React.useState(1);
  //Hooks
  const [planName, setPlan] = React.useState("Standard");
  const handlePlan = (name) => setPlan(name);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const openControls = () => setShow(true);

  const [storage, setStorage] = React.useState(0);
  const handleStorage = (storage) => setStorage(storage);

  const [ram, setRam] = React.useState(0);
  const handleRam = (ram) => setRam(ram);

  const [cpu, setCPU] = React.useState(0);

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
    setShow(false);
  };

  const [dailybackup, setDailyBackup] = React.useState(false);
  const handleDailyBackup = (dailybackup) =>
    dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = React.useState(false);
  const handleWindowLicense = (windowLicense) =>
    windowLicense ? ",I have a Windows License" : "";

  const resetOnCardChange = () =>{
    setWindowLicense(false);
    setDailyBackup(false);
    setType("");
    setCPU(0);
    setRam(0);
  setStorage(0);
}

  //Panels
  const tabPanel = (
    <TabPanel mx="auto" width={["100%", "100%", "100%", "90%", "76%" ]} className="py-2">
      <Fade cascade duration={500} distance={"30%"} bottom>
      <div className="row no-gutters justify-content-center">
        {plans.map((plan) => {
          return (
            <div key={plan.index} className="col-xl-3 col-lg-4 col-sm-6 my-3">
              
                <PricingCard
                  icon={plan.icon}
                  title={plan.name}
                  popular={plan.popular}
                  featureList={plan.feature}
                >
                  <Button
                    className="mt-3 btn-block primary-btn"
                    variant="solid"
                    size="lg"
                    variantColor="primary"
                    onClick={() => {
                      handlePlan(plan.name);
                      openControls();
                      resetOnCardChange();
                    }}
                  >
                    Get Started
                  </Button>
                </PricingCard>
              
            </div>
          );
        })}
        
      </div>
      </Fade>
    </TabPanel>
  );

  return (
    <div>
      <Head>
        <title>Infrastructure As A Service(IaaS)</title>
      </Head>
      
      <Box py="5rem" className="bg-dark page-header position-relative">
            <Image
              opacity=".3"
              className="bg-image"
              src="/assets/images/backgrounds/domainhosting.jpg"
            />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center justify-content-center">
            <Fade duration={700} delay={100} bottom>
              <Box fontSize={["40px", "48px", "64px"]} className="display2 text-white">Infrastructure As A Service (IaaS)</Box>
            </Fade>

            <Fade duration={700} delay={300} bottom>
                <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management.
                </p>
            </Fade>
            <Fade duration={700} delay={500} bottom>
                <ButtonGroup className="mt-3" spacing="16px">
                  <Button onClick={() => {
                    window.scrollTo(0, document.getElementById("pricing").offsetTop - 80)
                  }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Explore Now</Button>
                  <Link href="/contact"><Button variant="outline" _hover={{color:"black", bg:"white"}} size="lg">Contact Sales</Button></Link>
                </ButtonGroup>
            </Fade>
            </div>
          </div>
        </div>
      </Box>
      

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <Box fontSize={["34px","38px"]} justifyContent="center" className="d-flex flex-lg-row flex-column text-center h5 NunitoSans-ExtraBold">
                <Typewriter
                  options={{
                    strings: ['Deploy', 'Store', 'Maintain'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                 your data with our security and reliability
              </Box>
              
              <Text textAlign={[ 'left','left', 'center' ]} fontSize="xl" className="mb-4">
              Optimizing infrastructural resources is essential to controlling the cost of data growth. The Enterprise Infrastructure Assessment provides in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings are linked to your specific risks and benefits—so you can scale your infra systems to successfully serve the growing needs of your business. We can address your heterogeneous data centre environment and provide data and recommendations across all assets.
              </Text>

              <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="row">
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Scale Up on Demand"
                        icon="/assets/images/icons/color/ui.svg"
                      >
                        With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements.
                        Enjoy the freedom to scale up your infrastructure as and when required.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Stay Agile"
                        icon="/assets/images/icons/color/agile.svg"
                      >
                        Resources are not bundled together and there is surely no standard server size.
                        Combine long-term subscriptions for predictible workloads and on-time delivery with regular updates.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Select from Global Locations"
                        icon="/assets/images/icons/color/globe.svg"
                      >
                        Choose the most appropriate and most suitable framework to run your cloud infrastructure. Give your customers the pleasure to enjoy low latency and faster loading speeds.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Rely on Excellent Support"
                        icon="/assets/images/icons/color/headphones.svg"
                      >
                        BGUS's friendly and skilled customer support service is available24X7X365
                      with very less response time. Our policies ensure rapid and satisfactory resolution of issues.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Run Your Apps Unmodified"
                        icon="/assets/images/icons/color/api.svg"
                      >
                        Use our seamless live migration tool to get you up and running in the cloud without any modifications to your existing infrastructure.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Experience No Vendor Lock-In"
                        icon="/assets/images/icons/color/fix.svg"
                      >
                        At BGUS you are able to develop or deploy your application in the cloud without being forced to use any vendor-specific tools.
                    </FeatureCard>
                    </div>
                  </div>
                </Fade>
            </div>
          </div>
      </div>
      </div>

      <Box id="pricing" className="bg-light" py="3rem">
          <Heading size="xl" textAlign="center" mb={6} fontFamily="Nexa Bold">Our Pricing Plans</Heading>
          <div className="row justify-content-center">
            <Button
              onClick={onOpen}
              className="tab-dropdown"
              size="lg"
              py="32px"
              mb="12px"
              px="48px"
              rightIcon="chevron-down"
            >
              <Box as={tabs[tabIndex].icon} size="32px" mr="12px"></Box>
              {tabs[tabIndex].title}
            </Button>
            <Drawer
              placement="bottom"
              size="lg"
              onClose={onClose}
              isOpen={isOpen}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  Choose an Operating System
                </DrawerHeader>
                <DrawerBody>
                  {tabs.map((tab) => {
                    return (
                      <>
                        <Button
                          key={tab.index}
                          onClick={() => {
                            setTabIndex(tab.index);
                            onClose();
                          }}
                          variantColor="white"
                          py="32px"
                          className="box-none text-dark justify-content-start hover-effect w-100 display6"
                        >
                          <Box as={tab.icon} size="32px" mr="12px"></Box>{" "}
                          {tab.title}
                        </Button>
                      </>
                    );
                  })}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
          <Tabs align="center" index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            {tabs.map((tab) => {
              return (
                <>
                  <Tab
                    key={tab.index}
                    onClick={() => {
                      setTabIndex(tab.index);
                      setWindowLicense(false);
                      setDailyBackup(false);
                      setType("");
                      setShow(false);
                    }}
                    className={
                      "box-none tab display6 " +
                      (tabIndex === tab.index && "tab-selected")
                    }
                  >
                    <Box as={tab.icon} size="32px" mr="12px"></Box> {tab.title}
                  </Tab>
                </>
              );
            })}
          </TabList>
            <TabPanels>
              <TabPanel className="py-2">
              <Fade duration={500} cascade distance={"30%"} bottom>
                <div className="row no-gutters justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-sm-6 my-3">
                    
                      <PricingCard
                        icon="/assets/images/icons/theme/origami.svg"
                        title="Standard"
                        featureList={[
                          "2vCPU",
                          "80GB SSD Storage",
                          "4GB RAM",
                          "Desktop Virtualization",
                          "High Availabilty",
                          "High Clustering",
                        ]}
                      >
                        <Button
                          className="mt-3"
                          variantColor="primary"
                          variant="outline"
                          size="lg"
                          onClick={()=>{openControls(); handlePlan("Standard"); resetOnCardChange();}}
                        >
                          Get a Quote
                        </Button>
                      </PricingCard>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 my-3">
                      <PricingCard
                        icon="/assets/images/icons/theme/paper-plane.svg"
                        title="Business"
                        popular
                        featureList={[
                          "4vCPU",
                          "80GB SSD Storage",
                          "6GB RAM",
                          "Desktop Virtualization",
                          "High Availabilty",
                          "High Clustering",
                        ]}
                      >
                        <Button
                          className="mt-3"
                          variantColor="primary"
                          variant="outline"
                          size="lg"
                          onClick={()=>{openControls(); handlePlan("Business"); resetOnCardChange();}}
                        >
                          Get a Quote
                        </Button>
                      </PricingCard>
                    
                  </div>
                </div>
                </Fade>
              </TabPanel>
              {tabPanel}
              {tabPanel}
              {tabPanel}
              {tabPanel}
            </TabPanels>
        </Tabs>
          <div className="container">
            <Collapse id="quoteForm" className="px-lg-5 px-3" mt={6} isOpen={show}>
              <div className="px-4 py-5 border">
                <div className="display5 text-center">
                  {tabs[tabIndex].title} ({planName})
                </div>
                <div className="row px-3">
                  {tabIndex === 4 && (
                    <div className="col-lg-12 mt-2">
                      <div className="h6">Choose a Type</div>
                      <RadioButtonGroup
                        value={type}
                        onChange={(value) => setType(value)}
                        mt={4}
                        isInline
                      >
                        <CustomRadio value=",Daily Backups">
                          Daily Backups
                        </CustomRadio>
                        <CustomRadio value=",Hourly Snapshots">
                          Hourly Snapshots
                        </CustomRadio>
                      </RadioButtonGroup>
                    </div>
                  )}
                  <div className="col-lg-12 mt-4">
                    <div className="h6">Extend Storage (in GB)</div>
                    <Slider
                      color="primary"
                      my="18px"
                      defaultValue={0}
                      min={0}
                      max={22}
                      value={storage}
                      onChange={handleStorage}
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
                        children={80 + storage * 8 }
                      />
                    </Slider>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <div className="h6">Additional Memory (in GB)</div>
                    <Slider
                      color="primary"
                      my="18px"
                      defaultValue={0}
                      max="64"
                      value={ram}
                      onChange={handleRam}
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
                        children={ram}
                      />
                    </Slider>
                  </div>
                  {tabIndex < 4 && (
                    <div className="col-lg-6 mt-4">
                      <div className="d-flex">
                        <Switch color="primary"
                          onChange={(e) => {
                            setDailyBackup(e.target.checked);
                          }}
                          isChecked={dailybackup}
                          id="daily-backups"
                        />
                        <FormLabel ml="12px" htmlFor="daily-bakups">
                          Enable Daily Backups
                        </FormLabel>
                      </div>
                    </div>
                  )}
                  {tabIndex < 4 && (
                    <div className="col-lg-6 mt-4">
                      <div className="d-flex">
                        <Switch color="primary"
                          onChange={(e) => {
                            setWindowLicense(e.target.checked);
                          }}
                          isChecked={windowLicense}
                          id="license"
                        />
                        <FormLabel ml="12px" htmlFor="license">
                          I have a Windows license
                        </FormLabel>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-6 mt-4">
                    <div className="h6">Additional vCPUs</div>
                    <NumberInput
                      maxWidth="160px"
                      min={0}
                      max={20}
                      value={cpu}
                      onChange={(value)=>{value<=20?setCPU(value):setCPU(20)}}
                    >
                      <NumberInputField className="bg-light" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </div>

                  <div className="col-lg-6 mt-4 py-3 d-flex justify-content-end align-items-center">
                    <PricingQuote
                    serviceName="Infrastructure As A Service"
                      serviceDescription={`${
                        tabs[tabIndex].title
                      } (${planName})${verifyNotEmpty(
                        storage * 8,
                        "GB Additional Storage"
                      )} ${verifyNotEmpty(ram, "GB Memory")}${handleDailyBackup(
                        dailybackup
                      )}${handleWindowLicense(windowLicense)} ${verifyNotEmpty(
                        cpu,
                        "Additional vCPUs"
                      )}${type}`}
                      button
                    ></PricingQuote>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <Heading textAlign="center" size="md" mt="64px" mb="2rem" opacity={.5}>Supported Operating Systems</Heading>
          <Flex wrap className="flex-wrap" justify="center">
              <Image src="/assets/images/os/redhat.png" mx={12} height="80px" my={6}></Image>
              <Image src="/assets/images/os/windows10.png" mx={12} height="80px" my={6}></Image>
              <Image src="/assets/images/os/windowsServer.png" mx={12} height="80px" my={6}></Image>
          </Flex>
      </Box>

      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">10,000+</Heading>
                <Heading size="md">Core CPUs</Heading>
            </div>
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">9+</Heading>
                <Heading size="md">TBs of Memory</Heading>
            </div>
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">250+</Heading>
                <Heading size="md">Running Websites</Heading>
            </div>
            <div className="col-12 my-3">
              <Text fontSize="xl" className="text-justify">
                With BG Unified Solutions Infrastructure as a Service, not only
                do you pay only for the data storage you use when you use it but
                we provide you with a geographical redundant storage
                infrastructure and ready access to experts in Infrastructure
                Technologies who will be eager to understand your storage
                requirements. Initial setup is very quick, adding or removing
                capacity is even faster and without any downtime.
              </Text>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center my-4">
                <Flex justify="space-between" onClick={()=> {setFeature(1)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Choice between On-Premises & Cloud</Heading>
                    {feature !==1 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                    
                </Flex>
                <Collapse p={2} isOpen={feature === 1}>
                  On-premise or cloud-based, that helps secure your IT
                  environment quickly. The mainstay of Enterprise Security.
                  Blocks malicious traffic and allows legitimate traffic to
                  flow without any hindrance.
                </Collapse>
                <Flex justify="space-between" onClick={()=> {setFeature(2)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Fast and easy Deployment</Heading>
                    {feature !==2 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                </Flex>
                <Collapse p={2} isOpen={feature === 2}>
                  Rapid evolvement, easily deployable with tremendous speed.
                  Proven deployment methodology that integrates and extends
                  your existing security infrastructure without capex.  
                </Collapse>
                <Flex justify="space-between" onClick={()=> {setFeature(3)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Advanced Technology Stack</Heading>
                    {feature !==3 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                </Flex>
                <Collapse p={2} isOpen={feature === 3}>
                    Advanced Malware Protection, Anti-Virus Detection, Uniform
                    resource Locator Filtering, User-Based Policy and Advanced
                    Logging facilities, SSL Virtual Private Network’s included. 
                </Collapse>
                
            </div>
            <div className="col-lg-6 my-4 d-none d-lg-block">
                {feature === 1 && <Image src="/assets/images/illustrations/Varied_Web_Hosting_Solutions.svg" className="m-auto" height="350px"></Image>} 
                {feature === 2 && <Image src="/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg" className="m-auto" height="350px"></Image>} 
                {feature === 3 && <Image src="/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg" className="m-auto" height="350px"></Image>} 
            </div>
          </div>
        </div>
      </div>
      <div className="section pt-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 p-3">
              <h4 className="display5 py-3 text-center">Related Services</h4>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
              <Link href="/services/storage">
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
              </Link>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
              <Link href="/services/dns">
                <CardWithIcon
                  icon="/assets/images/icons/monotone/earth_ouline.svg"
                  title={
                    <div>
                      DNS <br /> As A service{" "}
                    </div>
                  }
                  iconBg="#5F1CE6"
                  children="Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability."
                />
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
                    children="End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions."
                  />
                </a>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
