import React from "react";
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Divider,
    Switch,
    FormLabel
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


function SdwanPricing(props) {
    const features = ["High-performance routes", "Fully Managed Service"];
    const [switch1, setSwitch1] = React.useState(false);
    const [switch2, setSwitch2] = React.useState(false);
    const handleSwitch = (swi) => swi ? ",Virtual" : ",Physical";
    const fortnietFeatures = ["One WAN Link", "3G/4G Failover Configuration", "Multi-Path Controller & Link Health Monitoring","Dual WAN","Load-balancing & Bandwidth Sharing", "Preferential Policy Routes","QoS Provisioning","Application Prioritization","VPN Failover to data center","Performance SLA","Traffic Shaping"]
    
    return (
                <div id="pricing" className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            {/* <Tabs onChange={()=>{setSwitch1(false); setSwitch2(false);}} align="center"> */}
                            <Tabs onChange={()=>{setSwitch1(false); setSwitch2(false);}} align="center">
                                <TabList
                                >
                                    <Tab pointerEvents="none" style={{cursor:"default"}} className="py-4 px-5 display6">
                                        Fortinet
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
                                                        featureList={fortnietFeatures.slice(0,3)}
                                                        excludingList={fortnietFeatures.slice(3,11)}
                                                        icon="/assets/images/icons/theme/origami.svg"
                                                        title="Standard"
                                                    >
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN As A Service"
                                                                serviceDescription={"Fortinet, Standard"}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        featureList={fortnietFeatures.slice(0,6)}
                                                        excludingList={fortnietFeatures.slice(6,11)}
                                                        icon="/assets/images/icons/theme/paper-plane.svg"
                                                        title="Professional"
                                                    >
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN As A Service"
                                                                serviceDescription={"Fortinet, Professional"}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-4 my-3">
                                                    <PricingCard
                                                        featureList={fortnietFeatures.slice(0,11)}
                                                        icon="/assets/images/icons/theme/airplane.svg"
                                                        title="Business"
                                                    >
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN As A Service"
                                                                serviceDescription={"Fortinet, Business"}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    {/* <TabPanel className="py-2">
                                        <Fade
                                            duration={500}
                                            distance={"30%"}
                                            bottom
                                        >
                                            <div className="row no-gutters justify-content-center">
                                                <div className="col-lg-5 my-3">
                                                    <PricingCard
                                                        featureList={features}
                                                        icon="/assets/images/icons/theme/globe.svg"
                                                        title="Single"
                                                    >
                                                        
                                                        <div className="w-100 px-3 text-center mb-2 NunitoSans-Bold">
                                                            <Divider mb="4" />
                                                        </div>
                                                        <div className="d-flex mb-3 mt-1 text-center justify-content-center">
                                                                <FormLabel ml="12px" htmlFor="license">
                                                                    Physical
                                                                </FormLabel>
                                                                <Switch color="primary"
                                                                    onChange={(e) => {
                                                                    setSwitch1(e.target.checked);
                                                                    }}
                                                                    isChecked={switch1}
                                                                    id="license"
                                                                />
                                                                <FormLabel ml="12px" htmlFor="license">
                                                                    Virtual
                                                                </FormLabel>
                                                        </div>
                                                        
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN As A Service"
                                                                serviceDescription={"Silver Peak, Single"+handleSwitch(switch1)}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                                <div className="col-lg-5 my-3">
                                                    <PricingCard
                                                        featureList={features}
                                                        icon="/assets/images/icons/theme/globe.svg"
                                                        title="Cluster"
                                                    >
                                                        <div className="w-100 px-3 text-center mb-2 NunitoSans-Bold">
                                                            <Divider mb="4" />
                                                        </div>
                                                        <div className="d-flex mb-3 mt-1 text-center justify-content-center">
                                                                <FormLabel ml="12px" htmlFor="license">
                                                                    Physical
                                                                </FormLabel>
                                                                <Switch color="primary"
                                                                    onChange={(e) => {
                                                                    setSwitch2(e.target.checked);
                                                                    }}
                                                                    isChecked={switch2}
                                                                    id="license"
                                                                />
                                                                <FormLabel ml="12px" htmlFor="license">
                                                                    Virtual
                                                                </FormLabel>
                                                        </div>
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN As A Service"
                                                                serviceDescription={"Silver Peak, Cluster"+handleSwitch(switch2)}
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel> */}
                                </TabPanels>
                            </Tabs>
                            <div></div>
                        </div>
                    </div>
                </div>
            )
}

export default SdwanPricing;