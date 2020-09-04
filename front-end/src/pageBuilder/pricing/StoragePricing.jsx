import React from 'react';
import {PricingQuote} from "../../components/cards/PricingCard"
import { Slider, Select, SliderFilledTrack, SliderTrack, SliderThumb} from "@chakra-ui/core"
import Fade from "react-reveal/Fade"

const verifyNotEmpty = (x, text) => (x > 0 ? x + " " + text : "");

function StoragePricing(props) {
    const [tier, setTier] = React.useState(",Storage Tier One SSD Per TB");
    const [type, setType] = React.useState(",Single Copy");
    const [value, setValue] = React.useState(10);
    const handleChange = value => setValue(value);
    return (        
        <div id="StoragePricing" className="container">
            <Fade className="px-lg-5 px-3" duration={500} bottom>
                <div className="px-4 py-5 rounded-8 shadow-lg">
                    <div className="display5 text-center">Storage Options</div>
                    <div className="row px-3 justify-content-center px-lg-4">

                        <div className="col-lg-10 mt-4">
                            <Slider color="primary" defaultValue={10} min={1} max={200} value={value} onChange={handleChange}>
                                <SliderTrack h="16px" borderRadius="8px" />
                                <SliderFilledTrack h="16px" borderRadius="8px" />
                                <SliderThumb
                                            className="shadow-md" 
                                            fontSize="md"
                                            fontWeight="800"
                                            width="auto"
                                            padding="8px"
                                            height="32px"
                                            children={value + "TB"} />
                            </Slider>
                        </div>
                        <div className="col-lg-5 mt-4">
                            <div className="h6">Select Tier </div>
                            <Select onChange={(e)=>{setTier(e.target.value)}} variant="outline"  > 
                            <option value=",Storage Tier One SSD Per TB">Storage Tier One SSD Per TB</option>
                            <option value=",Storage Tier Two Per TB">Storage Tier Two Per TB</option>
                            <option value=",Storage Archive Only Per TB">Storage Archive Only Per TB</option>
                            </Select>
                        </div>
                        <div className="col-lg-5 mt-4">
                            <div className="h6">Select Type </div>
                            <Select onChange={(e)=>{setType(e.target.value)}} variant="outline"  > 
                            <option value=",Single Copy">Single Copy</option>
                            <option value=",Redundant - Two Copies - Single Geo Location">Redundant - Two Copies - Single Geo Location</option>
                            <option value=",Redundant - Three Copies - Two Geo Locations">Redundant - Three Copies - Two Geo Locations</option>
                            </Select>
                        </div>

                        <div className="col-lg-12 mt-4 d-flex justify-content-center">
                            <PricingQuote serviceName="Storage As A Service" serviceDescription={`${verifyNotEmpty(value,"TB Storage")} ${tier} ${type}`} button ></PricingQuote>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default StoragePricing;