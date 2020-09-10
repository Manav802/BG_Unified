import React from "react";
import {
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Collapse,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  FormLabel,
  Switch,
  Flex,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

function DNSPricing(props) {
  const [show, setShow] = React.useState(false);
  const [plan, setPlan] = React.useState("");
  const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop +850);}
  const [type, setType] = React.useState("Windows");
  const [zones,setZone] = React.useState(0);
  const [dailyBackups, setDailyBackups] = React.useState(false);
  const handledailyBackups = (dailyBackups) => (dailyBackups) ? (",Add Daily Backups") : ("")
  const [redundantDNS,setRedundantDNS] = React.useState(false);
  const handleRedundantDNS = (redundantDNS) => (redundantDNS) ? (",Include Redundant DNS") : ("")
  
  return (
  <div id="pricing" className="container">
  <div className="row">
    <div className="col-lg-10 offset-lg-1">
      <Tabs align="center">
        <TabList>
          <Tab onClick={()=>{setShow(false); setZone(0); setType("Windows")}} className="py-4 px-5 display6">Windows</Tab>
          <Tab onClick={()=>{setShow(false); setZone(0); setType("BIND")}} className="py-4 px-5 display6">BIND</Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="py-2">
            <Fade duration={500} bottom>
              <div className="row no-gutters justify-content-center">
                <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                  <PricingCard
                    icon="/assets/images/icons/theme/paper-plane.svg"
                    title="Standard DNS (BlackBox)"
                    featureList={[
                      "Includes 5 Zones",
                      "Low Latency",
                      "High Availabilty",
                      "BlackBox Service",
                      "Cost Effective",
                    ]}
                  >
                    <Button
                      className="mt-3"
                      variantColor="primary"
                      variant="outline"
                      size="lg"
                      onClick={()=>{openControls(); setPlan("Standard DNS (BlackBox)")}}
                    >
                      View Options
                    </Button>
                  </PricingCard>
                </div>
                <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                  <PricingCard
                    icon="/assets/images/icons/theme/rocket.svg"
                    title="Premium DNS (BlackBox)"
                    featureList={[
                      "Includes 5 Zones",
                      "Low Latency",
                      "High Availabilty",
                      "BlackBox Service",
                      "Cost Effective",
                    ]}
                  >
                    <Button
                      className="mt-3"
                      variantColor="primary"
                      variant="outline"
                      size="lg"
                      onClick={()=>{openControls(); setPlan("Premium DNS (BlackBox)")}}
                    >
                      View options
                    </Button>
                  </PricingCard>
                </div>
              </div>
            </Fade>
          </TabPanel>
          <TabPanel className="py-2">
            <Fade duration={500} bottom>
              <div className="row no-gutters justify-content-center">
                <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                  <PricingCard
                    icon="/assets/images/icons/theme/paper-plane.svg"
                    title="Standard DNS (BlackBox)"
                    featureList={[
                      "Includes 5 Zones",
                      "Low Latency",
                      "High Availabilty",
                      "BlackBox Service",
                      "Cost Effective",
                    ]}
                  >
                    <Button
                      className="mt-3"
                      variantColor="primary"
                      variant="outline"
                      size="lg"
                      onClick={()=>{openControls(); setPlan("Standard DNS (BlackBox)")}}
                    >
                      View Options
                    </Button>
                  </PricingCard>
                </div>
                <div className="col-lg-5 col-sm-6 col-md-6  my-3">
                  <PricingCard
                    icon="/assets/images/icons/theme/rocket.svg"
                    title="Premium DNS (BlackBox)"
                    featureList={[
                      "Includes 5 Zones",
                      "Low Latency",
                      "High Availabilty",
                      "BlackBox Service",
                      "Cost Effective",
                    ]}
                  >
                    <Button
                      className="mt-3"
                      variantColor="primary"
                      variant="outline"
                      size="lg"
                      onClick={()=>{openControls(); setPlan("Premium DNS (BlackBox)")}}
                    >
                      View Options
                    </Button>
                  </PricingCard>
                </div>
              </div>
            </Fade>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div>
      <div id="collapse-1">
        <Collapse className="px-lg-5" mt={6} isOpen={show}>
          <div className="px-4 py-5 border">
            <div className="display5 text-center">{plan}</div>
            <div className="row px-3">
              <div className="col-lg-12 mt-4">
                <div className="h6">Extra Zones</div>
                <Slider
                  color="primary"
                  my="24px"
                  max={30}
                  defaultValue={1}
                  value={zones}
                  onChange={(value)=>{setZone(value)}}
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
                    children={zones}
                  />
                </Slider>
              </div>
              <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                <Flex py="12px" justify="center" align="center">
                  <Switch
                    onChange={(e) => {
                      setRedundantDNS(e.target.checked);
                    }}
                    color="primary"
                    mb={0}
                    id="failOverNode"
                  />
                  <FormLabel mb={0} ml="12px" htmlFor="fail-over node">
                    Include Redundant DNS
                  </FormLabel>
                </Flex>
              </div>
              <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                <Flex py="12px" justify="center" align="center">
                  <Switch
                    onChange={(e) => {
                      setDailyBackups(e.target.checked);
                    }}
                    color="primary"
                    mb={0}
                    id="failOverNode"
                  />
                  <FormLabel mb={0} ml="12px" htmlFor="fail-over node">
                    Add Daily Backup
                  </FormLabel>
                </Flex>
              </div>
              <div className="col-lg-12 mt-5 d-flex justify-content-center">
                <PricingQuote
                  serviceName="DNS As A Service"
                  serviceDescription={`${type},${plan} ${verifyNotEmpty(zones,"Extra Zones")} ${handleRedundantDNS(redundantDNS)} ${handledailyBackups(dailyBackups)}`}
                  button
                ></PricingQuote>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      </div>
    </div>
  </div>
</div>)
}

export default DNSPricing