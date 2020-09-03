import React from "react";
import {
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,Divider,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + text : "");

function CloudLoggingPricing(props) {
    const [logs1, setLogs1] = React.useState(0);
    const [logs2, setLogs2] = React.useState(0);
    const [logs3, setLogs3] = React.useState(0);
    return (
        <div id="CloudLoggingPricing" className="container">
            <Fade duration={500} bottom>
            <div className="row px-lg-5 px-3">
                <div className="col-lg-4 my-3">
                    <PricingCard
                        title={
                            <div className="text-center">
                                Single Node
                                <br />
                                Single DC
                            </div>
                        }
                        icon="/assets/images/icons/theme/stack.svg"
                        featureList={[
                            "Included 5G Logs per day",
                            "Portal access will be provided.",
                            "Fully Managed Service",
                        ]}
                    >
                        <div className="w-100 px-3 text-center my-2 NunitoSans-Bold">
                            <Divider mb="4" />
                            Extra Logs
                        </div>
                        <div className="w-100 px-3 mb-2">
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
                                    children={`${logs1}G`}
                                />
                            </Slider>
                        </div>
                        <PricingQuote
                            buttonStyle="mt-3"
                            button
                            serviceName="Cloud Logging As A Service"
                            serviceDescription={`Single Node Single DC ${verifyNotEmpty(
                                logs1,
                                "G Extra Logs"
                            )}`}
                        ></PricingQuote>
                    </PricingCard>
                </div>
                <div className="col-lg-4 my-3">
                    <PricingCard
                        title={
                            <div className="text-center">
                                Multiple Nodes
                                <br />
                                Single DC
                            </div>
                        }
                        icon="/assets/images/icons/theme/stack.svg"
                        featureList={[
                            "Included 5G Logs per day",
                            "Portal access will be provided.",
                            "Fully Managed Service",
                        ]}
                    >
                        <div className="w-100 px-3 text-center my-2 NunitoSans-Bold">
                            <Divider mb="4"/>
                            Extra Logs
                        </div>
                        <div className="w-100 px-3 mb-2">
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
                                    children={`${logs2}G`}
                                />
                            </Slider>
                        </div>
                        <PricingQuote
                            buttonStyle="mt-3"
                            button
                            serviceName="Cloud Logging As A Service"
                            serviceDescription={`Multiple Nodes Single DC ${verifyNotEmpty(
                                logs2,
                                "G Extra Logs"
                            )}`}
                        ></PricingQuote>
                    </PricingCard>
                </div>
                <div className="col-lg-4 my-3">
                    <PricingCard
                        title={
                            <div className="text-center">
                                Multiple Nodes
                                <br />
                                Multiple DC
                            </div>
                        }
                        icon="/assets/images/icons/theme/stack.svg"
                        featureList={[
                            "Included 5G Logs per day",
                            "Portal access will be provided.",
                            "Fully Managed Service",
                        ]}
                    >
                        <div className="w-100 px-3 text-center my-2 NunitoSans-Bold">
                            <Divider mb="4" />
                            Extra Logs
                        </div>
                        <div className="w-100 px-3 mb-2">
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
                                    children={`${logs3}G`}
                                />
                            </Slider>
                        </div>
                        <PricingQuote
                            buttonStyle="mt-3"
                            button
                            serviceName="Cloud Logging As A Service"
                            serviceDescription={`Multiple Nodes Multiple DC ${verifyNotEmpty(
                                logs3,
                                "G Extra Logs"
                            )}`}
                        ></PricingQuote>
                    </PricingCard>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default CloudLoggingPricing;