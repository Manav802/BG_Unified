import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Heading
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";

function FirewallPricing(props) {
  return (
        <div className="container">
            <Heading size="xl" textAlign="center" mb={6} fontFamily="Nexa Bold">Our Pricing Plans</Heading>
          <div className="row">
          
            <div className="col-lg-10 offset-lg-1">
              <Tabs align="center">
                <TabList >
                  <Tab className="p-3 px-4 display6">Physical</Tab>
                  <Tab className="p-3 px-4 display6">Virtual</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_physical.svg"
                            title="Physical 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/physical_cluster.svg"
                            title="Physical Cluster 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical Cluster 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Physical Cluster 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>

                  <TabPanel className="py-2">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
                            title="Virtual 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
                            title="Virtual Cluster 1G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 1G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 1G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
                            title="Virtual 10G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 10G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual 10G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
                            title="Virtual Cluster 10G"
                          >
                            <PricingQuote
                              title="Single Location"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 10G, Single Location"
                            ></PricingQuote>
                            <PricingQuote
                              title="Multihomed"
                              serviceName="Firewall As A Service"
                              serviceDescription="Virtual Cluster 10G, Multihomed"
                            ></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                  
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
  )
}

export default FirewallPricing;