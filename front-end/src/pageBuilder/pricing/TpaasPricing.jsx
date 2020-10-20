import React from "react";
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Divider,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Switch,
    FormLabel,
    Flex,
    Box
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

function TpaasPricing(props) {
    const [units1, setUnits1] = React.useState(0);
    const [units2, setUnits2] = React.useState(0);
    const [units3, setUnits3] = React.useState(0);
    const features = ["High-performance routes", "Fully Managed Service"];
    const [switch1, setSwitch1] = React.useState(false);
    const [switch2, setSwitch2] = React.useState(false);
    const handleSwitch = (swi) => swi ? ",Virtual" : ",Physical";
    const fortnietFeatures = ["One WAN Link", "3G/4G Failover Configuration", "Multi-Path Controller & Link Health Monitoring","Dual WAN","Load-balancing & Bandwidth Sharing", "Preferential Policy Routes","QoS Provisioning","Application Prioritization","VPN Failover to data center","Performance SLA","Traffic Shaping"]
    return (
                <div id="pricing" className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                        
                                        <Fade
                                            duration={500}
                                            distance={"30%"}
                                            bottom
                                        >
                                            <div className="row no-gutters justify-content-center">
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        featureList={["DX 70",
                                                        "DX 80",
                                                        "5 B2B Calls",
                                                        "5 units "]}
                                                        
                                                        icon="/assets/images/icons/theme/origami.svg"
                                                        title="Standard"
                                                    >
                                                        <div className="w-100 px-3 text-center mb-2 NunitoSans-Bold">
                                                            <Divider mt={0} mb={4} />
                                                        </div>
                                                        <Flex mb={6} direction="column" alignItems="center">
                                                        
                                                        <Box className="h6">Additional Units</Box>
                                                        <NumberInput
                                                           
                                                            min={0}
                                                            max={50}
                                                            value={units1}
                                                            onChange={(value)=>{value<=50?setUnits1(value):setUnits1(50)}}
        
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </Flex>
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="Telepresence As A Service"
                                                                serviceDescription={`Standard ${verifyNotEmpty(units1,"Additional Units")}`}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        featureList={["MX 200",
                                                        "MX 300",
                                                        "10 B2B calls",
                                                        "5 units +"]}
                                                        icon="/assets/images/icons/theme/paper-plane.svg"
                                                        title="Professional"
                                                    >
                                                        <div className="w-100 px-3 text-center mb-2 NunitoSans-Bold">
                                                            <Divider mt={0} mb={4} />
                                                        </div>
                                                        <Flex mb={6} direction="column" alignItems="center">
                                                        
                                                        <Box className="h6">Additional Units</Box>
                                                        <NumberInput
                                                           
                                                            min={0}
                                                            max={50}
                                                            value={units2}
                                                            onChange={(value)=>{value<=50?setUnits2(value):setUnits2(50)}}
        
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </Flex>
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="Telepresence As A Service"
                                                                serviceDescription={`Professional ${verifyNotEmpty(units2,"Additional Units")}`}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        featureList={["SX",
                                                        "SX Codec",
                                                        "20 B2B Calls",
                                                        "5 units +"]}
                                                        icon="/assets/images/icons/theme/airplane.svg"
                                                        title="Business"
                                                    >
                                                        <div className="w-100 px-3 text-center mb-2 NunitoSans-Bold">
                                                            <Divider mt={0} mb={4} />
                                                        </div>
                                                        <Flex mb={6} direction="column" alignItems="center">
                                                        
                                                        <Box className="h6">Additional Units</Box>
                                                        <NumberInput
                                                           
                                                            min={0}
                                                            max={50}
                                                            value={units3}
                                                            onChange={(value)=>{value<=50?setUnits3(value):setUnits3(50)}}
        
                                                        >
                                                            <NumberInputField className="bg-light" />
                                                            <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                        </Flex>
                                                    
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="Telepresence As A Service"
                                                                serviceDescription={`Business ${verifyNotEmpty(units3,"Additional Units")}`}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    
                            
                        </div>
                    </div>
                </div>
            )
}

export default TpaasPricing;