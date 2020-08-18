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
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { FaWindows, FaServer, FaDatabase } from "react-icons/fa";
import { MdBuild, MdSettings } from "react-icons/md";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";

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
    icon: "/assets/images/icons/theme/firewall_physical.svg",
    feature: [
      "2vCPU",
      "80GB SSD Storage",
      "4GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    cpu: 2,
    storage: 80,
    ram: 4,
  },
  {
    index: 1,
    name: "Premium",
    icon: "/assets/images/icons/theme/firewall_physical.svg",
    feature: [
      "4vCPU",
      "80GB SSD Storage",
      "6GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    cpu: 4,
    storage: 80,
    ram: 6,
  },
  {
    index: 2,
    name: "Gold",
    icon: "/assets/images/icons/theme/firewall_physical.svg",
    feature: [
      "6vCPU",
      "80GB SSD Storage",
      "8GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
    cpu: 6,
    storage: 80,
    ram: 8,
  },
  {
    index: 3,
    name: "Platinum",
    icon: "/assets/images/icons/theme/firewall_physical.svg",
    feature: [
      "8vCPU",
      "80GB SSD Storage",
      "16GB RAM",
      "Desktop Virtualization",
      "High Availabilty",
      "High Clustering",
    ],
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
  };

  const [dailybackup, setDailyBackup] = React.useState(false);
  const handleDailyBackup = (dailybackup) =>
    dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = React.useState(false);
  const handleWindowLicense = (windowLicense) =>
    windowLicense ? ",I have a Windows License" : "";

  //Panels
  const tabPanel = (
    <TabPanel className="py-2">
      <div className="row justify-content-center">
        {plans.map((plan) => {
          return (
            <div key={plan.index} className="col-lg-3 col-md-6 px-1 my-3">
              <Fade duration={500} distance={"30%"} bottom>
                <PricingCard
                  icon={plan.icon}
                  title={plan.name}
                  featureList={plan.feature}
                >
                  <Button
                    className="mt-3"
                    variant="solid"
                    variantColor="primary"
                    onClick={() => {
                      handlePlan(plan.name);
                      openControls();
                    }}
                  >
                    Customize
                  </Button>
                </PricingCard>
              </Fade>
            </div>
          );
        })}
      </div>
    </TabPanel>
  );

  return (
    <div>
      <Head>
        <title>Infrastructure As A Service(IaaS)</title>
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
            <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
              <h1 className="display3">Infrastructure As A Service(IaaS)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
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
                  Choose a opearing system
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
          <div className="container">
            <TabPanels>
              <TabPanel className="py-2">
                <div className="row justify-content-center">
                  <div className="col-lg-4 my-3">
                    <Fade duration={500} distance={"30%"} bottom>
                      <PricingCard
                        icon="/assets/images/icons/theme/firewall_physical.svg"
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
                          onClick={openControls}
                        >
                          Get a quote
                        </Button>
                      </PricingCard>
                    </Fade>
                  </div>
                  <div className="col-lg-4 my-3">
                    <Fade duration={500} distance={"30%"} bottom>
                      <PricingCard
                        icon="/assets/images/icons/theme/firewall_physical.svg"
                        title="Premium"
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
                          onClick={openControls}
                        >
                          Get a quote
                        </Button>
                      </PricingCard>
                    </Fade>
                  </div>
                </div>
              </TabPanel>
              {tabPanel}
              {tabPanel}
              {tabPanel}
              {tabPanel}
            </TabPanels>
          </div>
        </Tabs>
        <div>
          <div className="container">
            <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
              <div className="px-4 py-5 border">
                <div className="display5 text-center">
                  {tabs[tabIndex].title} ({planName})
                </div>
                <div className="row px-3">
                  {tabIndex === 4 && (
                    <div className="col-lg-12 mt-2">
                      <div className="h6">Choose a type</div>
                      <RadioButtonGroup
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
                    <div className="h6">Extend Storage</div>
                    <Slider
                      color="primary"
                      my="24px"
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
                        children={80 + storage * 8 + " GB"}
                      />
                    </Slider>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <div className="h6">Additional Memory</div>
                    <Slider
                      color="primary"
                      my="24px"
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
                        children={ram + " GB"}
                      />
                    </Slider>
                  </div>
                  {tabIndex < 4 && (
                    <div className="col-lg-6 mt-4">
                      <div className="d-flex">
                        <Switch
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
                        <Switch
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
                      onChange={setCPU}
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
        </div>
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">
                Empowering the Internet generation
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Optimizing infrastructural resources is essential to controlling
                the cost of data growth. The Enterprise Infrastructure
                Assessment provides in-depth reports and recommendations for
                improving storage efficiency, performance, and availability.
                Findings are linked to your specific risks and benefits—so you
                can scale your infra systems to successfully serve the growing
                needs of your business. We can address your heterogeneous data
                centre environment and provide data and recommendations across
                all assets.
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
                      environment quickly. The mainstay of Enterprise Security.
                      Blocks malicious traffic and allows legitimate traffic to
                      flow without any hindrance.
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
                      Fast and easy Deployment
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Rapid evolvement, easily deployable with tremendous speed.
                      Proven deployment methodology that integrates and extends
                      your existing security infrastructure without capex.
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
      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5 rounded-8 bg-light">
              <h4 className="display5 py-2 mb-2 text-center">Why Us?</h4>
              <p className="text-justify">
                With BG Unified Solutions Infrastructure as a Service, not only
                do you pay only for the data storage you use when you use it but
                we provide you with a geographical redundant storage
                infrastructure and ready access to experts in Infrastructure
                Technologies who will be eager to understand your storage
                requirements. Initial setup is very quick, adding or removing
                capacity is even faster and without any downtime. Backups are
                geographical redundant, efficient and quick. Stop tying up
                capital in the depreciating asset that is infrastructure — pay
                only for the infrastructure you actually need and use, with over
                50 geographically dispersed sites hosting 250+ separate pieces
                of infrastructure. Server consolidation and virtualization, high
                availability & clustering, desktop virtualization, and server
                management. Infrastructure includes more than 10000 Cores CPU,
                10TB RAM. Initial setup of your infrastructural requirements
                should happen in weeks — not months — with ongoing incremental
                needs occurring overnight. A little buffer would also help with
                urgent requirements. Boost up your operational efficiency.
                Improve your organization’s agility. Guaranteed access to a team
                of experts in different technologies. Modern SAN infrastructure
                can be expensive to procure and deploy and often requires
                specialist skills to maintain and manage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section pt-0">
        <div className="container">
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
        </div>
      </div>
    </div>
  );
}

export default main;
