import React from 'react';
import {Button, Collapse, Image, Select,
Slider, SliderThumb, SliderTrack, SliderFilledTrack, Flex,RadioButtonGroup,NumberInput,
NumberInputField,
NumberInputStepper,
NumberIncrementStepper,
NumberDecrementStepper, FormLabel, Switch} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
      <Button
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

function main(props) {
    const features = ["Includes 5 CSQ","Connectivity to end customer is not included in the costs","All Call Recording", "On Demand Call Recording","Fully Managed Service"]
    const verifyNotEmpty = (x, text) => x > 0 ? (", " + x + " " + text) : ""; 

    const [planIndex, setPlanIndex] = React.useState(1);
    const [planName, setPlanName] = React.useState("");
    const [RDSType, setRDSType] = React.useState("");
    const [wfm, setWfm] = React.useState(0);
    const [complianceQM, setComplianceQM] = React.useState(0);
    const [advancedQM, setAdvancedQM] = React.useState(0);
    const [failOverNode, setFailOverNode] = React.useState(false);
    const handleFailOverNode = (failOverNode) => (failOverNode) ? (",Add Fail-Over Node") : ("")
    const [value, setValue] = React.useState(1);
    const handleChange = value => setValue(value);
    const [tbSpace, setTbSpace] = React.useState(1);
    const handleTbSpace = tbSpace => setTbSpace(tbSpace);

    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    
    return (
        <div>
            <Head>
                <title>Contact Center as Service</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg">
            <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                    <h1 className="display3">Contact Center As A Service (CCaaS)</h1>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row px-lg-5 px-3">
                    <div className="col-lg-4 my-3">
                        <PricingCard  title="BASE COST PER MONTH" icon="/assets/images/icons/theme/stack.svg" featureList={features}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlanName("BASE"); setPlanIndex(1); setWfm(0); setAdvancedQM(0); setComplianceQM(0);}}>View Options</Button>
                       </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard title="CAGENT-STD" icon="/assets/images/icons/theme/work.svg" featureList={features}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlanName("CAGENT-STD"); setPlanIndex(2); setRDSType(""); setValue(0); setTbSpace(0); setFailOverNode(false);}}>View Options</Button>
                        </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard title="CAGENT-PRM" icon="/assets/images/icons/theme/town.svg" featureList={features}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlanName("CAGENT-PRM"); setPlanIndex(3); setRDSType(""); setValue(0); setTbSpace(0); setFailOverNode(false);}}>View Options</Button>
                        </PricingCard>
                    </div>
                </div>
                <div>
                    <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">{planName}</div>
                            <div className="row px-3">
                                
                                { planIndex === 1 && <>
                                <div className="col-lg-12 mt-4">
                                    <div className="h6">Additional CSQ</div>
                                    <Slider color="primary" my="24px" max={30} defaultValue={1} value={value} onChange={handleChange}>
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
                                <div className="col-lg-12 mt-2">
                                    <div className="h6">Choose a type</div>
                                    <RadioButtonGroup onChange={value => setRDSType(value)} mt={4} isInline>
                                        <CustomRadio value=",RDS SERVER WITH CAD">RDS SERVER WITH CAD</CustomRadio>
                                        <CustomRadio value=",RDS SERVER WITH TOOLS">RDS SERVER WITH TOOLS</CustomRadio>
                                        <CustomRadio value=",RDS SERVER CALL RECORDING">RDS SERVER CALL RECORDING</CustomRadio>
                                    </RadioButtonGroup>
                                </div>
                                <div className="col-lg-12 mt-4">
                                <div className="h6">TB Space</div>
                                <Slider color="primary" my="24px" max={30} defaultValue={1} value={tbSpace} onChange={handleTbSpace}>
                                    <SliderTrack h="16px" borderRadius="8px" />
                                    <SliderFilledTrack h="16px" borderRadius="8px" />
                                    <SliderThumb
                                                className="shadow-md" 
                                                fontSize="md"
                                                fontWeight="800"
                                                width="auto"
                                                padding="8px"
                                                height="32px"
                                                children={tbSpace} />
                                </Slider>
                                </div>
                                <div className="my-1 col-lg-12 mt-3 d-flex justify-content-between">
                                    <Flex py="12px" justify="center" align="center">
                                        <Switch onChange={(e)=>{setFailOverNode(e.target.checked)}} color="primary" mb={0} id="failOverNode" />
                                        <FormLabel mb={0} ml="12px" htmlFor="fail-over node">Add Fail-Over Node</FormLabel>
                                    </Flex>
                                </div>
                                </>
                                }

                                { (planIndex === 2 || planIndex===3 ) && <>
                                <div className="my-1 col-lg-12 mt-4">
                                    <div className="h6">WFM</div>
                                    <Slider color="primary" my="24px" defaultValue={0} max="64" value={wfm} onChange={setWfm}>
                                        <SliderTrack h="16px" borderRadius="8px" />
                                        <SliderFilledTrack h="16px" borderRadius="8px" />
                                        <SliderThumb
                                                    className="shadow-md" 
                                                    fontSize="md"
                                                    fontWeight="800"
                                                    width="auto"
                                                    padding="8px"
                                                    height="32px"
                                                    children={wfm} />
                                    </Slider>
                                </div>
                                <div className="my-1 col-lg-6 mt-4">
                                    <div className="h6">ADVANCED QM</div>
                                    <NumberInput maxWidth="200px" min={0} max={20} value={advancedQM} onChange={setAdvancedQM}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="my-1 col-lg-12 mt-4">
                                    <div className="h6">Number of Agents</div>
                                    <NumberInput maxWidth="200px" min={0} max={20} value={wfm<=complianceQM+advancedQM ? wfm:complianceQM+advancedQM} onChange={setWfm}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                </>
                                }
                                
                                <div className="col-lg-12 mt-3 d-flex justify-content-center">
                                <PricingQuote serviceDescription={`${planName}${verifyNotEmpty(value,"Additional CSQ")}${RDSType}${verifyNotEmpty(tbSpace,"TB Space")}${verifyNotEmpty(wfm,"WFM")}${verifyNotEmpty(complianceQM,"Compliance QM")}${verifyNotEmpty(advancedQM,"Advanced QM")}${handleFailOverNode(failOverNode)}`} button ></PricingQuote>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>

        <div className="section py-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 text-center offset-lg-1">
                        <div className="h4 NunitoSans-ExtraBold">Service Truly Different
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                        In today’s world, collaboration or customer service involves so much more than voice. With a full range of video and web conferencing solutions, unified communications, and workspace applications, the adoption of customer service technology is widespread across organizations and affects multiple lines of business. Positive customer experience through a suite of advanced contact centre tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus.We help organizations who are looking for an IT Partner who is known for speed, quality and consistency of service for distributed and complex environments.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section py-5">
            <div className="container">
                <div className="row service-benefits">
                    <div className="col-lg-4 px-1">
                    <Fade duration={500} distance={"30%"} bottom >
                        <div className="card h-100 rounded-8">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                                Profitable Customer Experience
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                We help organisations to develop and improve communication channels and deliver lasting customer relationships at a lower cost. Our objective is to maximize the value of information within an organization whilst minimizing the cost.
                                </div>
                                <Image  height="300px" src="/assets/images/illustrations/diversity.svg"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 px-1">
                    <Fade duration={500} distance={"30%"} bottom >
                        <div className="card h-100 rounded-8">
                            <div className="card-body d-flex flex-column align-items-center">
                                
                                <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                                Employee Productivity
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                We assist organisations in improving employee and partner collaboration to deliver greater employee productivity, improved information sharing and knowledge management
                                </div>
                                <Image  height="300px" src="/assets/images/illustrations/data_center.svg"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 px-1">
                    <Fade duration={500} distance={"30%"} bottom >
                        <div className="card h-100 rounded-8">
                            <div className="card-body d-flex flex-column align-items-center">
                                
                                <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                                Securing Data 
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                We help organisations reduce their risks by offering solutions that of creating, sharing and storing the information,  protect, detect and respond to external and internal incidents and threats. 
                                </div>
                                <Image src="/assets/images/illustrations/assets.svg" className="mt-auto" height="250px"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <div className="section py-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-5 rounded-8 bg-light">
                        <h4 className="display5 py-2 mb-2 text-center">Why BG Unified Solutions?</h4>
                        <p className="text-justify">
                        BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact centre tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus. We help organisations reduce their risks by offering solutions that of creating, sharing and storing the information,  protect, detect and respond to external and internal incidents and threats. We help organisations to develop and improve communication channels and deliver lasting customer relationships at a lower cost. Our objective is to maximize the value of information within an organization whilst minimizing the cost. We assist organisations in improving employee and partner collaboration to deliver greater employee productivity, improved information sharing and knowledge management. We help organizations who are looking for an IT Partner who is known for speed, quality and consistency of service for distributed and complex environments. As experts in a wide range of technologies, our focus is to provide competitive and affordable end-to-end solutions to our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-4 mb-4">
                        <h4 className="display5 py-3 text-center">Related Services</h4>
                    </div>
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/infra">
                            <CardWithIcon icon="/assets/images/icons/monotone/server.svg" title={<div>Infrastructure <br /> as a service </div>} children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM" />
                        </Link>
                    </div>
                    
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/storage">
                            <CardWithIcon icon="/assets/images/icons/monotone/cloud.svg" title={<div>Storage <br /> as a service </div>} iconBg="#F3A622" children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage." />
                        </Link>
                    </div>
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/dns">
                            <CardWithIcon icon="/assets/images/icons/monotone/earth_ouline.svg" title={<div>DNS <br /> as a service </div>} iconBg="#5F1CE6" children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching." />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default main;
