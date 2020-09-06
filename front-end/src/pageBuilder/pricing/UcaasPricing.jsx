import React, { useState } from "react";
import {
    Button,
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
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


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

function UcaasPricing(props) {
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
       
                <div id="pricing" className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Tabs align="center">
                                <TabList
                                >
                                    <Tab className="py-4 px-5 display6">
                                        Cisco
                                    </Tab>
                                    <Tab className="py-4 px-5 display6">
                                        Avaya
                                    </Tab>
                                    <Tab className="py-4 px-5 display6">
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
                                            <div className="row no-gutters justify-content-center">
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        title="Single Node CUCM"
                                                        icon="/assets/images/icons/theme/fax.svg"
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
                                                        icon="/assets/images/icons/theme/fax.svg"
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
                                                        icon="/assets/images/icons/theme/fax.svg"
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
                                            <div className="row no-gutters justify-content-center">
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
                                            <div className="row no-gutters justify-content-center">
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
    )
}

export default UcaasPricing;
