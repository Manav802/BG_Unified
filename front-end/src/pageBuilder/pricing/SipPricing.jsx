import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Select,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


const ChannelSelector = (props) => (
    <Select my={5} onChange={props.change} focusBorderColor="primary.500" value={props.channel}>
      <option value="SIP-10">SIP-10</option>
      <option value="SIP-20">SIP-20</option>
      <option value="SIP-50">SIP-50</option>
      <option value="SIP-100">SIP-100</option>
      <option value="SIP-200">SIP-200</option>
      <option value="SIP-250">SIP-250</option>
      <option value="SIP-300">SIP-300</option>
    </Select>
)

function SipPricing(props) {
  const [channel, setChannel] = React.useState("SIP-20");
  const handleChange = (e) => {
    setChannel(e.target.value)
  }
  const openControls = () => setShow(true);
  return (
        <div id="pricing" className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs align="center">
                <TabList>
                  <Tab className="py-4 px-5 display6">Single</Tab>
                  <Tab className="py-4 px-5 display6">Cluster</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row no-gutters justify-content-center">
                        <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/sip.svg"
                            title="Single Cube"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Single Cube, " + channel}></PricingQuote>
                          </PricingCard>
                        </div>
                      </div>
                    </Fade>
                  </TabPanel>
                  <TabPanel className="py-2">
                    <Fade duration={500} bottom>
                      <div className="row no-gutters justify-content-center">
                      <div className="col-lg-4 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/sip.svg"
                            title="Cluster Cube"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube, " + channel}></PricingQuote>
                          </PricingCard>
                          </div>  
                          <div className="col-lg-4 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/sip.svg"
                            title="Cluster Cube DEH"
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube DEH, " + channel}></PricingQuote>
                          </PricingCard>
                          </div>   
                          <div className="col-lg-4 col-sm-6 col-md-6 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/sip.svg"
                            title={<div className="text-center"> Cluster Cube DEH <br/> <small> (with Multiple DC) </small> </div>}
                            featureList={[
                              "AU Calling Costs Included",
                              "Fully Managed Service",
                              "Monthly Reporting",
                              "*Inbound Calling Costs to 1300/13 not Included",
                              "Inbound call rates will be provided"
                            ]}
                          >
                            <ChannelSelector change={handleChange} channel={channel}></ChannelSelector>
                            <PricingQuote button serviceName="SIP As A Service" serviceDescription={"Cluster Cube with Multiple DC, " + channel}></PricingQuote>
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

export default SipPricing;