import React, { useState } from "react";
import {
    Button,
    Image,
    Icon,
    Box,
    Collapse,
    RadioButtonGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    ListIcon,
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
                    Driving the Communication Revolution - Unified
                    Communications As A Service (UCaaS) - BG Unified Solutions
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
                                    Unified Communications As A Service (UCaaS)
                                </h1>
                            </Fade>
                            <Fade duration={700} delay={500} bottom>
                                <p
                                    className="h6 mt-3 text-white"
                                    style={{ opacity: ".7" }}
                                >
                                    Cisco and Avaya Unified Collaboration,
                                    Messaging, Telepresence, Contact Center,
                                    Workforce Optimization and Quality
                                    Monitoring.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Tabs align="center">
                                <TabList
                                    style={{ borderBottomColor: "#ffffff22" }}
                                >
                                    <Tab className="py-4 px-5 display6 text-white">
                                        Cisco
                                    </Tab>
                                    <Tab className="py-4 px-5 display6 text-white">
                                        Avaya
                                    </Tab>
                                    <Tab className="py-4 px-5 display6 text-white">
                                        3CX
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel className="py-2">
                                        <Fade
                                            duration={500}
                                            distance={"30%"}
                                            bottom
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Single Node CUCM"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                        <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Single Node CUCM"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Dual Node CUCM"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                      <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Dual Node CUCM"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        className="hover-effect"
                                                        title="Multiple Nodes CUCM"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Multiple Nodes CUCM"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel className="py-2">
                                        <Fade
                                            duration={500}
                                            distance={"30%"}
                                            bottom
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Single Node IP Office"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Single Node IP Office"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Dual Node IP Office"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Dual Node IP Office"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        className="hover-effect"
                                                        title="Multiple Nodes IP Office"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Multiple Nodes IP Office"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel className="py-2">
                                        <Fade
                                            duration={500}
                                            distance={"30%"}
                                            bottom
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Single Node CX"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Single Node CX"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Dual Node CX"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Dual Node CX"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        /</a>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        className="hover-effect"
                                                        title="Multiple Nodes CX"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Include Cisco Jabber",
                                                        ]}
                                                    >
                                                    <a href="#collapse-1" className="no-red">
                                                        <Button
                                                            className="mt-3"
                                                            variantColor="primary"
                                                            variant="outline"
                                                            size="lg"
                                                            onClick={() => {
                                                                openControls();
                                                                setNode(
                                                                    "Multiple Nodes CX"
                                                                );
                                                                resetOnCardChange();
                                                            }}
                                                        >
                                                            View More
                                                        </Button>
                                                        </a>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <div id="collapse-1" className="collapse-target">
                                <Collapse
                                    className="px-lg-5 px-3"
                                    mt={6}
                                    isOpen={show}
                                >
                                    <div className="px-4 py-5 border">
                                        <div className="display5 text-center">
                                            {node}
                                        </div>
                                        <div className="row justify-content-center px-3">
                                            <div className="mt-4 col-12"></div>

                                            <div className="col-lg-11 mt-2">
                                                <div className="h6">
                                                    Choose a type
                                                </div>
                                                <RadioButtonGroup
                                                    onChange={(value) => {
                                                        setType(value);
                                                        setAddSIP(0);
                                                        setShowSIP(false);
                                                    }}
                                                    defaultValue="20-10 SIP"
                                                    mt={4}
                                                    isInline
                                                >
                                                    <CustomRadio value="10-5 SIP">
                                                        UCAAS-10-5SIP
                                                    </CustomRadio>
                                                    <CustomRadio value="20-10 SIP">
                                                        UCAAS-20-10SIP
                                                    </CustomRadio>
                                                    <CustomRadio value="30-20 SIP">
                                                        UCAAS-30-20SIP
                                                    </CustomRadio>
                                                    <CustomRadio value="50-30 SIP">
                                                        UCAAS-50-30SIP
                                                    </CustomRadio>
                                                    <CustomRadio value="100-50 SIP">
                                                        UCAAS-100-50SIP
                                                    </CustomRadio>
                                                </RadioButtonGroup>
                                            </div>
                                            <div className="mt-4 col-lg-11">
                                                <div className="row">
                                                    <p className=" NunitoSans-Bold ">
                                                        {" "}
                                                        - This type includes{" "}
                                                        {type.slice(0, 2)} UCaaS
                                                        users and{" "}
                                                        {type.slice(3)}{" "}
                                                        channels.{" "}
                                                        <a
                                                            onClick={() => {
                                                                setShowSIP(
                                                                    !showSIP
                                                                );
                                                            }}
                                                        >
                                                            {" "}
                                                            Add Additional SIP?{" "}
                                                        </a>{" "}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-11">
                                                <Collapse
                                                    className="mt-4"
                                                    isOpen={showSIP}
                                                >
                                                    <div className="h6">
                                                        Additional SIP
                                                    </div>
                                                    <Slider
                                                        color="primary"
                                                        defaultValue={30}
                                                        value={addSIP}
                                                        onChange={(value) => {
                                                            setAddSIP(value);
                                                        }}
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
                                                            children={addSIP}
                                                        />
                                                    </Slider>
                                                </Collapse>
                                            </div>
                                            <div className="col-lg-11 mt-4">
                                                <div className="h6">
                                                    Extra VMs
                                                </div>
                                                <Slider
                                                    color="primary"
                                                    defaultValue={30}
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
                                            <div className="col-lg-5 mt-4">
                                                <div className="h6">
                                                    Additional UCaaS
                                                </div>
                                                <NumberInput
                                                    onChange={(value) =>
                                                        setadditionalUcaas(
                                                            value
                                                        )
                                                    }
                                                    defaultValue={0}
                                                    min={0}
                                                    max={20}
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1 mt-4">
                                                <div className="h6">
                                                    Additional Hunt Groups
                                                </div>
                                                <NumberInput
                                                    onChange={(value) =>
                                                        setHunts(value)
                                                    }
                                                    defaultValue={0}
                                                    min={0}
                                                    max={20}
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </div>
                                            <div className="col-lg-11 mt-4">
                                                <a
                                                    onClick={() => {
                                                        setAdvancedOptions(
                                                            !advancedOptions
                                                        );
                                                    }}
                                                >
                                                    {" "}
                                                    Advanced Options{" "}
                                                </a>
                                            </div>

                                            <div className="col-lg-11">
                                                <Collapse
                                                    className="row"
                                                    isOpen={advancedOptions}
                                                >
                                                    <div className="col-lg-3 mt-4">
                                                        <div className="h6">
                                                            NUM-10
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value) =>
                                                                setNum10(value)
                                                            }
                                                            defaultValue={0}
                                                            min={0}
                                                            max={20}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                    </div>
                                                    <div className="col-lg-3 offset-lg-1 mt-4">
                                                        <div className="h6">
                                                            NUM-50
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value) =>
                                                                setNum50(value)
                                                            }
                                                            defaultValue={0}
                                                            min={0}
                                                            max={20}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                    </div>
                                                    <div className="col-lg-3 offset-lg-1 mt-4">
                                                        <div className="h6">
                                                            NUM-100
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value) =>
                                                                setNum100(value)
                                                            }
                                                            defaultValue={0}
                                                            min={0}
                                                            max={20}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                    </div>
                                                </Collapse>
                                            </div>

                                            <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                                <PricingQuote
                                                    button
                                                    serviceName="Unified Communications As A Service"
                                                    serviceDescription={`${node},${type}${verifyNotEmpty(
                                                        additionalUcaas,
                                                        "Additional UCaaS"
                                                    )}${verifyNotEmpty(
                                                        addSIP,
                                                        "Additional SIP"
                                                    )}${verifyNotEmpty(
                                                        extraVM,
                                                        "Extra VMs"
                                                    )}${verifyNotEmpty(
                                                        hunts,
                                                        "Additonal Hunts"
                                                    )}${verifyNotEmpty(
                                                        num10,
                                                        "NUM-10"
                                                    )}${verifyNotEmpty(
                                                        num50,
                                                        "NUM-50"
                                                    )}${verifyNotEmpty(
                                                        num100,
                                                        "NUM-100"
                                                    )}`}
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
                                Driving the Communication Revolution
                            </div>
                            <div className="h6 mt-4 text-secondary text-justify text-dark">
                                In today’s world, collaboration involves so much
                                more than voice. With a full range of video and
                                web conferencing solutions, unified
                                communications, and workspace applications, the
                                adoption of collaboration technology is
                                widespread across organizations and affects
                                multiple lines of business. Putting video in
                                action, from the desktop to the conference rooms
                                and to the largest applicable venues—including
                                audio/video and rich media content that can be
                                captured, streamed live, archived, or repurposed
                                for the required collaboration tools{" "}
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
                                            Flexibility / Scalability
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            For any of your organization
                                            departments, our UCaaS offering
                                            provides a simplified IT management
                                            and a highly scalable platform.
                                            Irrespective of the end-user,
                                            everyone gets access to the latest
                                            and the greatest collaboration
                                            tools.{" "}
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
                                            Cost-Effectiveness
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            For your business, we are offering
                                            and providing a flat billing
                                            structure. It's designed for pay as
                                            you go model that shifts your costs
                                            from capex to opex. You will have
                                            very simplified and predictable
                                            expenses and have the option of
                                            rolling any upfront or one-off
                                            expenses into your monthly payment.{" "}
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
                                            Wide range of services
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            Employees get access to voice and
                                            video, voicemail and integrated
                                            messaging, instant messaging and
                                            presence, web conferencing and
                                            desktop collaboration, mobility
                                            service.{" "}
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
                                <h1 className="display4">
                                    Why BG Unified Solutions?
                                </h1>

                                <div className="row text-left pt-4">
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">
                                            {" "}
                                            Cisco and Avaya Unified
                                            Collaboration, Messaging,
                                            Telepresence, Contact Center,
                                            Workforce Optimization and Quality
                                            Monitoring. N+N Redundant components
                                            fulfilling all Unified Collaboration
                                            requirements of your business. We
                                            have the expertise to address these
                                            challenges by designing and
                                            delivering complete collaboration
                                            solutions that maximize your
                                            capabilities and investments while
                                            minimizing your technology
                                            footprint. We bring our team of
                                            experienced collaboration experts to
                                            every engagement, and we offer
                                            business and technology assessments
                                            to help identify any barriers in
                                            order for your collaborative Goals
                                            to succeed. We structure our
                                            discovery process to consider your
                                            entire telecommunications
                                            environment, including network
                                            infrastructure, data centres, and
                                            more.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">
                                            Once we determine your key business
                                            drivers and needs, we tailor a
                                            solution with best-in-class products
                                            and technologies from top
                                            manufacturers with expert service
                                            and support. We have the expertise
                                            to address these challenges by
                                            designing and delivering complete
                                            collaboration solutions that
                                            maximize your capabilities and
                                            investments while minimizing your
                                            technology footprint. We structure
                                            our discovery process to consider
                                            your entire telecommunications
                                            environment, including network
                                            infrastructure, data centres, and
                                            more. Once we determine your key
                                            business drivers and needs, we
                                            tailor a solution with best-in-class
                                            products and technologies from top
                                            manufacturers with expert service
                                            and support.
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
                                <h4 className="display5 py-3 text-center">
                                    Related Services
                                </h4>
                            </div>
                            <div className="col-xl-4 col-sm-6 my-2">
                                <Link href="/services/infra">
                                    <a className="no-red">
                                        <CardWithIcon
                                            icon="/assets/images/icons/monotone/server.svg"
                                            title={
                                                <div>
                                                    Infrastructure <br /> As A
                                                    service{" "}
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
                                            icon="/assets/images/icons/monotone/cloud.svg"
                                            title={
                                                <div>
                                                    Contact Center <br /> As A
                                                    service{" "}
                                                </div>
                                            }
                                            iconBg="#F3A622"
                                            children=" Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring."
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
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default UCaaS;
