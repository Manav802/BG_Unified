import React from 'react';
import {PricingQuote} from "../../components/cards/PricingCard"
import { Slider, Select, SliderFilledTrack, SliderTrack, SliderThumb,RadioButtonGroup,Button,NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,FormLabel,Switch,Image} from "@chakra-ui/core"
import Fade from "react-reveal/Fade"

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            fontSize={["12px","14px","15px"]}
            ref={ref}
            variant={isChecked ? "solid" : "outline"}
            variantColor={isChecked ? "primary" : "gray.300"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});

function LoadBalancerPricing(props) {
    const [type, setType] = React.useState("Single");
    const [applications, setApplications] = React.useState(1);
    const [connections, setConnections] = React.useState(1);
    const [IP, setIP] = React.useState(1);
    const [value, setValue] = React.useState(10);
    const handleChange = value => setValue(value);
    const [bot, setBot] = React.useState(false);
    const [redundancy, setRedundancy] = React.useState(false);
    
    const handleBot = (swi) => swi ? ",Enable GTM" : "";
    const handleRedundancy = (swi) => swi ? ",Enable WAF" : "";
    return (        
        <div id="pricing">
            <Fade className="px-lg-5 " duration={500} bottom>
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    
                    <div className="row px-3  px-lg-4">
                    <div className="col-lg-10 offset-lg-1 d-flex mt-4">
                    <Image h="40px" mr={4} src="/assets/images/brands/Icons/F5_Networks.png"/>
                    <div className="display5">F5 Load Balancing</div>
                    </div>
                        <div className="col-lg-10 offset-lg-1 mt-4">
                        
                                                <div className="h6">
                                                    Choose a type
                                                </div>
                                                <RadioButtonGroup
                                                    onChange={(value) => {
                                                        setType(value);
                                                    }}
                                                    value={type}
                                                    mt={4}
                                                    isInline
                                                >
                                                    <CustomRadio value="Single">
                                                        Single
                                                    </CustomRadio>
                                                    <CustomRadio value="Cluster">
                                                        Cluster
                                                    </CustomRadio>
                                                </RadioButtonGroup>
                                            </div>
                        
                        <div className="col-lg-4 offset-lg-1 mt-4">
                            <div className="h6">Applications</div>
                        
                            <NumberInput
                                                    onChange={(value)=>{value<=20?setApplications(value):setApplications(20)}}
                                                    value={applications}
                                                    min={1}
                                                    max={20}
                                                    
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                        </div>
                        <div className="col-lg-4 offset-lg-2 mt-4">
                            <div className="h6">Connections / Application</div>
                        
                            <NumberInput
                                                    onChange={(value)=>{value<=20?setConnections(value):setConnections(20)}}
                                                    value={connections}
                                                    min={1}
                                                    max={20}
                                                    
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                        </div>
                        <div className="col-lg-10 offset-lg-1 mt-4">
                                <div className="h6">
                                                    Bandwidth per Application (in Mbps)
                                                </div>
                            <Slider color="primary" my={2}  min={1} max={80} value={value} onChange={handleChange}>
                                <SliderTrack h="16px" borderRadius="8px" />
                                <SliderFilledTrack h="16px" borderRadius="8px" />
                                <SliderThumb
                                            className="shadow-md" 
                                            fontSize="md"
                                            fontWeight="800"
                                            width="auto"
                                            padding="8px"
                                            height="32px"
                                            children={value*5} />
                            </Slider>
                        </div>
                        <div className="col-lg-10 offset-lg-1 mt-4 d-flex justify-content-between">
                            <div>
                            
                                <Switch color="primary"
                                    onChange={(e) => {
                                    setBot(e.target.checked);
                                    }}
                                    isChecked={bot}
                                    id="license"
                                />
                                <FormLabel ml={[0,3]} htmlFor="license">
                                    GTM Enabled
                                </FormLabel>
                                </div>
                                
                        <div>
                            
                                <Switch color="primary"
                                    onChange={(e) => {
                                    setRedundancy(e.target.checked);
                                    }}
                                    isChecked={redundancy}
                                    id="license"
                                />
                                <FormLabel ml={[0,3]} htmlFor="license">
                                    WAF Enabled
                                </FormLabel>
                                </div>
                                
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-4">
                            <div className="h6">How many Public IP's?</div></div>
                        <div className="offset-lg-1 col-lg-4 mt-3">
                            <NumberInput
                                                    onChange={(value)=>{value<=20?setIP(value):setIP(20)}}
                                                    value={IP}
                                                    min={1}
                                                    max={20}
                                                    
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                        </div>

                        <div className="col-lg-12 mt-4 d-flex justify-content-center">
                            <PricingQuote serviceName="Load Balancer As A Service" serviceDescription={` F5, ${type} ${verifyNotEmpty(applications, "Application")} ${verifyNotEmpty(connections,"Connections/App")} ${verifyNotEmpty(value*5,"Mbps Bandwidth/App")} ${handleBot(bot)} ${handleRedundancy(redundancy)} ${verifyNotEmpty(IP, "Public IP's")}`} button ></PricingQuote>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default LoadBalancerPricing;