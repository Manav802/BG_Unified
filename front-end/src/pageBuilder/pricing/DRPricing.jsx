import React from 'react';
import {
  Button, Collapse, Image,
  Slider, SliderThumb, SliderTrack, SliderFilledTrack,NumberInput,NumberInputField,
  NumberInputStepper,NumberDecrementStepper,NumberIncrementStepper
} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import { PricingCard, PricingQuote } from '../../components/cards/PricingCard'

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

function DRPricing(props) {
  const [show, setShow] = React.useState(false);
  const [plan, setPlan] = React.useState("");
  const openControls = (name) => {setShow(true); setPlan(name); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);};
  const [value, setValue] = React.useState(1);
  const handleChange = value => setValue(value);
  const [veeam, setVeeam] = React.useState(0);
  const [IP,setIP] = React.useState(0);
  return (
        <div id="pricing" className="container">
            <div className="row justify-content-center px-lg-5 px-3">
            <Fade duration={500} bottom>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Two <br/> Geo Locations </div>} icon="/assets/images/icons/theme/property-2.svg" featureList={["Includes One Yearly Drill"]}>
                  <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls("Two Geo Locations")}}>View Options</Button>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Three <br/> Geo Locations </div>} icon="/assets/images/icons/theme/property-3.svg" featureList={["Includes One Yearly Drill"]}>
                  <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls("Three Geo Locations")}}>View Options</Button>
                </PricingCard>
              </div>
            </Fade>
            </div>
          <div id="collapse-1">
          <Collapse className="px-lg-5" mt={6} isOpen={show}>
              <div className="px-4 py-5 border">
                <div className="display5 text-center">{plan}</div>
                <div className="row justify-content-center px-3">
                  <div className="col-lg-10 mt-4">
                    <div className="h6">No. of VMs</div>
                    <Slider color="primary" my="24px" max={20} defaultValue={1} value={value} onChange={handleChange}>
                      <SliderTrack h="16px" borderRadius="8px" />
                      <SliderFilledTrack h="16px" borderRadius="8px" />
                      <SliderThumb
                        className="shadow-md"
                        fontSize="md"
                        fontWeight="800"
                        width="auto"
                        padding="8px"
                        height="32px"
                        children={value} />
                    </Slider>
                  </div>
                  <div className="col-lg-5 mt-2 mb-4">
                      <div className="h6">VEEAMs</div>
                      <NumberInput
                      onChange={(value) => setVeeam(value)}
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
                  <div className="col-lg-5 mt-2 mb-4">
                      <div className="h6">Public IPs</div>
                      <NumberInput
                      onChange={(value) => setIP(value)}
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
                  <div className="col-lg-12 d-flex justify-content-center mt-3">
                    <PricingQuote serviceName="DR As A Service" serviceDescription={`${plan} ${verifyNotEmpty(value,"VMs")} ${verifyNotEmpty(veeam,"VEEAM")} ${verifyNotEmpty(IP,"Public IPs")} `} button ></PricingQuote>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
  )
}

export default DRPricing;