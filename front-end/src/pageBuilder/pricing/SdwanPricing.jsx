import React from "react";
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


function SdwanPricing(props) {
    const features = ["High-performance routes", "Fully Managed Service"];
    return (
                <div id="SdwanPricing" className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Tabs align="center">
                                <TabList
                                >
                                    <Tab className="py-4 px-5 display6 ">
                                        Physical
                                    </Tab>
                                    <Tab className="py-4 px-5 display6">
                                        Virtual
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
                                                <div className="col-lg-5 my-3">
                                                    <PricingCard
                                                        featureList={features}
                                                        icon="/assets/images/icons/theme/globe.svg"
                                                        title="Single"
                                                    >
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN Optimizations As A Service"
                                                                serviceDescription="Physical, Single"
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
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN Optimizations As A Service"
                                                                serviceDescription="Physical, Cluster"
                                                            ></PricingQuote>
                                                        </div>
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
                                                <div className="col-lg-5 my-3">
                                                    <PricingCard
                                                        featureList={features}
                                                        icon="/assets/images/icons/theme/globe.svg"
                                                        title="Single"
                                                    >
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN Optimizations As A Service"
                                                                serviceDescription="Virtual, Single"
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
                                                        <div className="d-flex btn align-items-center">
                                                            <PricingQuote
                                                                button
                                                                serviceName="SD-WAN Optimizations As A Service"
                                                                serviceDescription="Virtual, Cluster"
                                                            ></PricingQuote>
                                                        </div>
                                                    </PricingCard>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <div></div>
                        </div>
                    </div>
                </div>
            )
}

export default SdwanPricing;