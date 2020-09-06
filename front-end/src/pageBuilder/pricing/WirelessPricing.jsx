import React from "react";
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Checkbox
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";



const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + text : "");

function WirelessPricing(props) {
  const [logs1, setLogs1] = React.useState(0);
  const [logs2, setLogs2] = React.useState(0);
  const [logs3, setLogs3] = React.useState(0);
  const [guest1, setGuest1] = React.useState(false);
  const [guest2, setGuest2] = React.useState(false);
  const [guest3, setGuest3] = React.useState(false);
  const handleGuestSwitch = (bool) => (bool) ? (",Guest-10M Included") : ("")
  return (
    
                <div id="pricing" className="container">
                    <Fade duration={500} bottom>
                    <div className="row no-gutters">
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-5"
                                }
                                icon="/assets/images/icons/theme/wifi.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs1}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs1(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs1}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest1} onChange={e => setGuest1(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-5 ${verifyNotEmpty(
                                        logs1,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest1)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-10"
                                }
                                icon="/assets/images/icons/theme/wifi.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs2}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs2(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs2}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest2} onChange={e => setGuest2(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-10 ${verifyNotEmpty(
                                        logs2,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest2)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title={
                                    "LAP-20"
                                }
                                icon="/assets/images/icons/theme/wifi.svg"
                                featureList={[
                                    "Included 1 Corporate SSID",
                                    "Cisco Wi-Fi and Aruba Wi-Fi",
                                    "Fully Managed Service",
                                ]}
                            >
                                <div className=" my-2 NunitoSans-Bold">
                                    Extra SSID
                                </div>
                                <div className="w-100 px-3">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs3}
                                        max={20}
                                        onChange={(value) => {
                                            setLogs3(value);
                                        }}
                                    >
                                        <SliderTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderFilledTrack
                                            h="10px"
                                            borderRadius="5px"
                                        />
                                        <SliderThumb
                                            className="shadow"
                                            fontSize="sm"
                                            fontWeight="500"
                                            width="auto"
                                            padding="7px"
                                            height="28px"
                                            children={logs3}
                                        />
                                    </Slider>
                                </div>
                                <Checkbox className="my-2" value={guest3} onChange={e => setGuest3(e.target.checked)} >
                                  Guest-10M
                                  </Checkbox> <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Wireless As A Service"
                                    serviceDescription={`LAP-20 ${verifyNotEmpty(
                                        logs3,
                                        " Extra SSID"
                                    )} ${handleGuestSwitch(guest3)}`}
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                    </div>
                    </Fade>
                </div>)
}

export default WirelessPricing