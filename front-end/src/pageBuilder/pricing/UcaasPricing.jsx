import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box,
    FormLabel,
    Switch,
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
import ucaas from "../pages/solutions/ucaas";


const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            fontSize={["12px","14px","15px"]}
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
    const [addPhones, setAddPhones] = useState(0);
    const [num10, setNum10] = useState(0);
    const [num50, setNum50] = useState(0);
    const [num100, setNum100] = useState(0);
    const [extraVM, setExtraVM] = useState(0);
    const [show, setShow] = React.useState(false);
    const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);}
    const [value, setValue] = React.useState(0);
    const handleChange = (value) => {
        setValue(value);
        setExtraVM(value);
    };
    const [showSIP, setShowSIP] = useState(false);
    const [addSIP, setAddSIP] = useState(0);
    const [advancedOptions, setAdvancedOptions] = useState(false);
    

    const [dx650, setdx650] = useState(0);
    const [dx80, setdx80] = useState(0);
    const [dx70, setdx70] = useState(0);
    const [p9951, setp9951] = useState(0);
    const [p8845, setp8845] = useState(0);
    const [p7965g, setp7965g] = useState(0);
    var totalPhones = parseInt(type=="100-50 SIP"?type.slice(0, 3):type.slice(0, 2))+additionalUcaas + addPhones ; 
    const [confSwitch, setconfSwitch] = React.useState(false);
    const handleSwitch = (swi) => swi ? ",Add Conference Phone" : "";

    const [aj179, setaj179] = useState(0);
    const [a1408, seta1408] = useState(0);
    const [a9608, seta9608] = useState(0);

    const [fanvilc400, setfanvilc400] = useState(0);
    const [fanvilc600, setfanvilc600] = useState(0);
    
    const resetOnCardChange = () => {
        setNum10(0);
        setNum50(0);
        setNum100(0);
        setAddSIP(0);
        setValue(0);
        setExtraVM(0);
        setadditionalUcaas(0);
        setAddPhones(0);
        setHunts(0);
        resetPhones();
        setType("20-10 SIP");
        
    };

    const resetPhones = () => {
        setdx650(0);
        setdx80(0);
        setdx70(0);
        setp9951(0);
        setp8845(0);
        setp7965g(0);
        setaj179(0);
        seta1408(0);
        seta9608(0);
        setfanvilc400(0);
        setfanvilc600(0);
        setconfSwitch(false);
    };
    return (
       
                <div id="pricing" className="container">
                    
                        
                            <Tabs onChange={()=>{setShow(false); resetPhones();}} align="center">
                                <TabList
                                >
                                    <Tab className="py-4 px-lg-5 display6">
                                        Cisco
                                    </Tab>
                                    <Tab className="py-4 px-lg-5 display6">
                                        Avaya IP Office
                                    </Tab>
                                    <Tab className="py-4 px-lg-5 display6">
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
                                                                    "Cisco / Single Node CUCM"
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
                                                                    "Cisco / Dual Node CUCM"
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
                                                                    "Cisco / Multiple Nodes CUCM"
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
                                                        title="Single Node"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Complete Mobility",
                                                            "Cost-Effective",
                                                            "Flexibly Deployed",
                                                            "Highly Scalable",
                                                            
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
                                                                    "Avaya IP Office / Single Node"
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
                                                        title="Dual Node"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Complete Mobility",
                                                            "Cost-Effective",
                                                            "Flexibly Deployed",
                                                            "Highly Scalable",
                                                            
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
                                                                    "Avaya IP Office / Dual Node"
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
                                                        title="Multiple Nodes"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Complete Mobility",
                                                            "Cost-Effective",
                                                            "Flexibly Deployed",
                                                            "Highly Scalable",
                                                            
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
                                                                    "Avaya IP Office / Multiple Nodes"
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
                                                            "Scalable",

                                                            
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
                                                                    "3CX / Single Node CX"
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
                                                            "Scalable",
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
                                                                    "3CX / Dual Node CX"
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
                                                        title="Multiple Nodes CX"
                                                        icon="/assets/images/icons/theme/firewall_virtual.svg"
                                                        featureList={[
                                                            "Include Voicemail",
                                                            "Include Presence",
                                                            "Include Voicemail to Email*",
                                                            "Scalable",
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
                                                                    "3CX / Multiple Nodes CX"
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
                                    className="px-lg-5"
                                    mt={6}
                                    isOpen={show}
                                >
                                    <div  className="px-lg-4  py-5 border-top border-bottom ">
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
                                                        resetPhones();
                                                    }}
                                                    value={type}
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
                                            <div className="mt-2 col-lg-11">
                                                
                                                    <p className=" NunitoSans-Bold ">
                                                        {" "} 
                                                        Includes{" "}
                                                        {type=="100-50 SIP"?type.slice(0, 3):type.slice(0, 2)} UCaaS
                                                        users and{" "}
                                                        {type=="10-5 SIP"? type.slice(-5):type.slice(-6) }{" "}
                                                        channels.{" "}
                                                    </p>
                                                
                                            </div>
                                            
                                            
                                        
                                                  
                                            <div className="col-lg-11 mt-4">
                                            <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <AccordionHeader >
      <Box flex="1" fontSize="lg" className="NunitoSans-Bold" textAlign="left">
        Add-ons                                
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel  pb={4}>

    <div className="row my-1 ">
        <div className="col-lg-12">
                                    
                                                    <div className="NunitoSans-SemiBold">
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
                                                            h="12px"
                                                            borderRadius="6px"
                                                        />
                                                        <SliderFilledTrack
                                                            h="12px"
                                                            borderRadius="6px"
                                                        />
                                                        <SliderThumb
                                                            className="shadow-md"
                                                            fontSize="md"
                                                            fontWeight="800"
                                                            width="auto"
                                                            padding="6px"
                                                            height="22px"
                                                            children={addSIP}
                                                        />
                                                    </Slider>
                                                
                                            </div></div>

    <div className="row my-3 ">
        <div className="col-lg-12">
                                                <div className="NunitoSans-SemiBold">
                                                    Extra VMs
                                                </div>
                                                <Slider
                                                    color="primary"
                                                    defaultValue={30}
                                                    value={value}
                                                    onChange={handleChange}
                                                >
                                                    <SliderTrack
                                                        h="12px"
                                                        borderRadius="6px"
                                                    />
                                                    <SliderFilledTrack
                                                        h="12px"
                                                        borderRadius="6px"
                                                    />
                                                    <SliderThumb
                                                        className="shadow-md"
                                                        fontSize="md"
                                                        fontWeight="800"
                                                        width="auto"
                                                        padding="6px"
                                                        height="22px"
                                                        children={value}
                                                    />
                                                </Slider>
                                            </div>
                                            </div>

                                                <div className="row my-1 justify-content-between">
                                            <div className="col-lg-3">
                                                <div className="NunitoSans-SemiBold">
                                                    Additional UCaaS
                                                </div>
                                                <NumberInput
                                                    onChange={(value)=>{value<=20?setadditionalUcaas(value):setadditionalUcaas(20)}}
                                                    value={additionalUcaas}
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
                                            <div className="col-lg-3">
                                                <div className="NunitoSans-SemiBold">
                                                    Additional Phones
                                                </div>
                                                <NumberInput
                                                    onChange={(value)=>{value<=20?setAddPhones(value):setAddPhones(20)}}
                                                    value={addPhones}
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
                                            <div className="col-lg-3">
                                                <div className="NunitoSans-SemiBold">
                                                    Additional Hunt Groups
                                                </div>
                                                <NumberInput
                                                    onChange={(value)=>{value<=20?setHunts(value):setHunts(20)}}
                                                    value={hunts}
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
                                            </div>
                                            
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <AccordionHeader >
      <Box flex="1" fontSize="lg" className="NunitoSans-Bold" textAlign="left">
        Advanced Options
      </Box>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel pb={4}>
        <div className="row justify-content-between">
    
                                                    <div className="col-lg-3">
                                                        <div className="NunitoSans-SemiBold">
                                                            NUM-10
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=20?setNum10(value):setNum10(20)}}
                                                            value={num10}
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
                                                    <div className="col-lg-3">
                                                        <div className="NunitoSans-SemiBold">
                                                            NUM-50
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=20?setNum50(value):setNum50(20)}}
                                                            value={num50}
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
                                                    <div className="col-lg-3">
                                                        <div className="NunitoSans-SemiBold">
                                                            NUM-100
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=20?setNum100(value):setNum100(20)}}
                                                            value={num100}
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
                                                    </div>
                                              
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader>
      <Box flex="1" fontSize="lg" className="NunitoSans-Bold" textAlign="left">
        Customize Phones
      </Box>
      <AccordionIcon />
    </AccordionHeader>
                                                        {node.slice(0,5)=="Cisco" && 
    <AccordionPanel pb={4}>
    <div className="row justify-content-between">
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco DX650
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx80 + dx70+p9951 + p8845 + p7965g)?setdx650(value):setdx650(totalPhones-(dx80 + dx70+p9951 + p8845 + p7965g))}}
                                                            value={dx650}
                                                            min={0}
                                                            max={totalPhones-(dx80 + dx70+p9951 + p8845 + p7965g)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco DX80
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx650 + dx70+p9951 + p8845 + p7965g)?setdx80(value):setdx80(totalPhones-(dx650 + dx70+p9951 + p8845 + p7965g))}}
                                                            value={dx80}
                                                            min={0}
                                                            max={totalPhones-(dx650 + dx70+p9951 + p8845 + p7965g)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>

                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco DX70
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx650 + dx80+p9951 + p8845 + p7965g)?setdx70(value):setdx70(totalPhones-(dx650 + dx80+p9951 + p8845 + p7965g))}}
                                                            value={dx70}
                                                            min={0}
                                                            max={totalPhones-(dx650 + dx80+p9951 + p8845 + p7965g)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>

                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco 9951
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx650 + dx80+dx70 + p8845 + p7965g)?setp9951(value):setp9951(totalPhones-(dx650 + dx80+dx70 + p8845 + p7965g))}}
                                                            value={p9951}
                                                            min={0}
                                                            max={totalPhones-(dx650 + dx80+dx70 + p8845 + p7965g)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>

                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco 8845
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx650 + dx80+dx70 + p9951 + p7965g)?setp8845(value):setp8845(totalPhones-(dx650 + dx80+dx70 + p9951 + p7965g))}}
                                                            value={p8845}
                                                            min={0}
                                                            max={totalPhones-(dx650 + dx80+dx70 + p9951 + p7965g)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>

                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Cisco 7965G
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(dx650 + dx80+dx70 + p9951 + p8845)?setp7965g(value):setp7965g(totalPhones-(dx650 + dx80+dx70 + p9951 + p8845))}}
                                                            value={p7965g}
                                                            min={0}
                                                            max={totalPhones-(dx650 + dx80+dx70 + p9951 + p8845)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <FormLabel ml={1} htmlFor="license">
                                                                    Add Conference Phone?
                                                                </FormLabel>
                                                                <Switch color="primary"
                                                                    onChange={(e) => {
                                                                    setconfSwitch(e.target.checked);
                                                                    }}
                                                                    isChecked={confSwitch}
                                                                    id="license"
                                                                />
                                                                
                                                        </div>
                                                        </div>
                                                        
    </AccordionPanel> }

    {node.slice(0,5)=="Avaya" && 
    <AccordionPanel pb={4}>
    <div className="row justify-content-between">
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Avaya J179
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(a1408+a9608)?setaj179(value):setaj179(totalPhones-(a1408+a9608))}}
                                                            value={aj179}
                                                            min={0}
                                                            max={totalPhones-(a1408+a9608)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Avaya 1408
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(aj179+a9608)?seta1408(value):seta1408(totalPhones-(aj179+a9608))}}
                                                            value={a1408}
                                                            min={0}
                                                            max={totalPhones-(aj179+a9608)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>

                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Avaya 9608
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(aj179+a1408)?seta9608(value):seta9608(totalPhones-(aj179+a1408))}}
                                                            value={a9608}
                                                            min={0}
                                                            max={totalPhones-(aj179+a1408)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <FormLabel ml={1} htmlFor="license">
                                                                    Add Conference Phone?
                                                                </FormLabel>
                                                                <Switch color="primary"
                                                                    onChange={(e) => {
                                                                    setconfSwitch(e.target.checked);
                                                                    }}
                                                                    isChecked={confSwitch}
                                                                    id="license"
                                                                />
                                                                
                                                        </div>
                                                        </div>
                                                        
    </AccordionPanel> }

    {node.slice(0,3)=="3CX" && 
    <AccordionPanel pb={4}>
    <div className="row justify-content-between">
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Fanvil C400
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(fanvilc600)?setfanvilc400(value):setfanvilc400(totalPhones-(fanvilc600))}}
                                                            value={fanvilc400}
                                                            min={0}
                                                            max={totalPhones-(fanvilc600)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-md-5 my-1">
                                                        <div className="NunitoSans-SemiBold">
                                                        Fanvil C600
                                                        </div>
                                                        <NumberInput
                                                            onChange={(value)=>{value<=totalPhones-(fanvilc400)?setfanvilc600(value):setfanvilc600(totalPhones-(fanvilc400))}}
                                                            value={fanvilc600}
                                                            min={0}
                                                            max={totalPhones-(fanvilc400)}
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <FormLabel ml={1} htmlFor="license">
                                                                    Add Conference Phone?
                                                                </FormLabel>
                                                                <Switch color="primary"
                                                                    onChange={(e) => {
                                                                    setconfSwitch(e.target.checked);
                                                                    }}
                                                                    isChecked={confSwitch}
                                                                    id="license"
                                                                />
                                                                
                                                        </div>

                                                        </div>
                                                        
    </AccordionPanel> }

                                                        </AccordionItem>
</Accordion>
                                            </div>

                                            <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                                <PricingQuote
                                                    button
                                                    serviceName="Unified Communications As A Service"
                                                    serviceDescription={`${node},${type}
                                                    ${verifyNotEmpty(
                                                        addSIP,
                                                        "Additional SIP"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        additionalUcaas,
                                                        "Additional UCaaS"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        addPhones,
                                                        "Additonal Phones"
                                                    )}${verifyNotEmpty(
                                                        hunts,
                                                        "Additonal Hunts"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        extraVM,
                                                        "Extra VMs"
                                                    )}${verifyNotEmpty(
                                                        num10,
                                                        "NUM-10"
                                                    )}${verifyNotEmpty(
                                                        num50,
                                                        "NUM-50"
                                                    )}${verifyNotEmpty(
                                                        num100,
                                                        "NUM-100"
                                                    )}
                                                    
                                                    ${verifyNotEmpty(
                                                        dx650,
                                                        "Cisco DX650"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        dx80,
                                                        "Cisco DX80"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        dx70,
                                                        "Cisco DX70"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        p9951,
                                                        "Cisco 9951"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        p8845,
                                                        "Cisco 8845"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        p7965g,
                                                        "Cisco 7965G"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        aj179,
                                                        "Avaya AJ179"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        a1408,
                                                        "Avaya A1408"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        a9608,
                                                        "Avaya A9608"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        fanvilc400,
                                                        "3CX Fanvil C400"
                                                    )}
                                                    ${verifyNotEmpty(
                                                        fanvilc600,
                                                        "3CX Fanvil C600"
                                                    )}
                                                    ${handleSwitch(confSwitch)}
                                                    `}
                                                ></PricingQuote>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        
                    
                </div>
    )
}

export default UcaasPricing;
