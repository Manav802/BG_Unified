import React,{useState} from 'react';
import {Button, Collapse, Image, Radio, RadioButtonGroup, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
Slider, SliderThumb, SliderTrack, SliderFilledTrack, Tabs, TabList, Tab, TabPanel, TabPanels, ListIcon} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'
import { set } from 'nprogress';

const verifyNotEmpty = (x, text) => x > 0 ? (", " + x + " " + text) : ""; 

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

function UCaaS(props) {
    const [node, setNode] = useState("");
    const [type, setType] = useState("20-10 SIP");
    const [additionalUcaas, setadditionalUcaas] = useState(0);
    const [hunts, setHunts] = useState(0);
    const [num10, setNum10] = useState(0);
    const [num50, setNum50] = useState(0);
    const [num100, setNum100] = useState(0);
    const [extraVM, setExtraVM] = useState(0);
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(0);
    const handleChange = value => {setValue(value); setExtraVM(value);} 
    const [showSIP, setShowSIP] = useState(false);
    const [addSIP, setAddSIP] = useState(0);
    const [advancedOptions, setAdvancedOptions] = useState(false);
    const resetOnCardChange = () => {setAddSIP(0); setShowSIP(false);};
    return (
        <div>
            <Head>
                <title>Application Development As A Service</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg">
            <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
                <Fade duration={700} delay={300} bottom ><h1 className="display3">Application Development As A Service</h1></Fade>
                <Fade duration={700} delay={500} bottom >BG Unified Solutions provides services in the area of Web, Mobile and Enterprise Application Development. Our team of technical and functional experts can help you in new Application Development, Modernizing and Supporting existing applications.</Fade>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-12">
                    <Tabs align="center">
                        <TabList>
                            <Tab onClick={()=>{setShow(false);}} className="p-3 px-4 display6">Cisco</Tab>
                            <Tab onClick={()=>{setShow(false);}} className="p-3 px-4 display6">Avaya</Tab>
                            <Tab onClick={()=>{setShow(false);}} className="p-3 px-4 display6">3CX</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                                <div className="row justify-content-center">
                                <div className="col-lg-4 my-3">
                                    <PricingCard  title="Single Node CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Single Node CUCM"); resetOnCardChange();  }}>View More</Button>
                                </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">
                                    <PricingCard title="Dual Node CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Dual Node CUCM"); resetOnCardChange();}}>View More</Button>
                                    </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">
                                    <PricingCard className="hover-effect" title="Multiple Nodes CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Multiple Nodes CUCM"); resetOnCardChange();}}>View More</Button>
                                    </PricingCard>
                                </div>
                                </div>
                                </Fade>
                            </TabPanel>
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                                <div className="row justify-content-center">
                                <div className="col-lg-4 my-3">
                                    <PricingCard  title="Single Node IP Office" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Single Node IP Office"); resetOnCardChange();}}>View More</Button>
                                </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">  
                                    <PricingCard title="Dual Node IP Office" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Dual Node IP Office"); resetOnCardChange();}}>View More</Button>
                                    </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">
                                    <PricingCard className="hover-effect" title="Multiple Nodes IP Office" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Multiple Nodes IP Office"); resetOnCardChange();}}>View More</Button>
                                    </PricingCard>
                                </div>
                                </div>
                            </Fade>
                            </TabPanel>
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                                <div className="row justify-content-center">
                                <div className="col-lg-4 my-3">
                                    <PricingCard  title="Single Node CX" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Single Node CX"); resetOnCardChange();}}>View More</Button>
                                </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">
                                    <PricingCard title="Dual Node CX" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Dual Node CX"); resetOnCardChange();}}>View More</Button>
                                    </PricingCard>
                                </div>
                                <div className="col-lg-4 my-3">
                                    <PricingCard className="hover-effect" title="Multiple Nodes CX" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]}>
                                        <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setNode("Multiple Nodes CX"); resetOnCardChange(); }}>View More</Button>
                                    </PricingCard>
                                </div>
                                </div>
                            </Fade>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    </div>
                </div>
                <div>
                    <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">{node}</div>
                            <div className="row justify-content-center px-3">
                            <div className="mt-4 col-12"></div>
                                    
                                <div className="col-lg-11 mt-2">
                                    <div className="h6">Choose a type</div>
                                    <RadioButtonGroup onChange={value => {setType(value); setAddSIP(0); setShowSIP(false);}} defaultValue="20-10 SIP" mt={4} isInline>
                                        <CustomRadio value="10-5 SIP">UCAAS-10-5SIP</CustomRadio>
                                        <CustomRadio value="20-10 SIP">UCAAS-20-10SIP</CustomRadio>
                                        <CustomRadio value="30-20 SIP">UCAAS-30-20SIP</CustomRadio>
                                        <CustomRadio value="50-30 SIP">UCAAS-50-30SIP</CustomRadio>
                                        <CustomRadio value="100-50 SIP">UCAAS-100-50SIP</CustomRadio>
                                    </RadioButtonGroup>
                                </div>
                                <div className="mt-4 col-lg-11">
                                    <div className="row">
                                    <p className=" NunitoSans-Bold "> - This type includes {type.slice(0,2)} UCaaS users and {type.slice(3,)} channels. <a onClick={()=>{setShowSIP(!showSIP);}}> Add Additional SIP? </a> </p> 
                                    </div>
                                </div>
                                <div className="col-lg-11">
                                <Collapse className="mt-4" isOpen={showSIP}> 
                                    <div className="h6">Additional SIP</div>
                                    <Slider color="primary" defaultValue={30} value={addSIP} onChange={(value)=>{setAddSIP(value)}}>
                                        <SliderTrack h="16px" borderRadius="8px" />
                                        <SliderFilledTrack h="16px" borderRadius="8px" />
                                        <SliderThumb
                                                    className="shadow-md" 
                                                    fontSize="md"
                                                    fontWeight="800"
                                                    width="auto"
                                                    padding="8px"
                                                    height="32px"
                                                    children={addSIP} />
                                    </Slider>
                                 </Collapse>
                                </div>
                                <div className="col-lg-11 mt-4">
                                    <div className="h6">Extra VMs</div>
                                    <Slider color="primary" defaultValue={30} value={value} onChange={handleChange}>
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
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Additional UCaaS</div>
                                    <NumberInput onChange={value => setadditionalUcaas(value)} defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-5 offset-lg-1 mt-4">
                                    <div className="h6">Additional Hunt Groups</div>
                                    <NumberInput onChange={value => setHunts(value)} defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-11 mt-4">
                                    <a onClick={()=>{setAdvancedOptions(!advancedOptions);}}> Advanced Options </a> 
                                </div>
                                
                                <div className="col-lg-11">
                                <Collapse className="row" isOpen={advancedOptions}>
                                <div className="col-lg-3 mt-4">
                                    <div className="h6">NUM-10</div>
                                    <NumberInput onChange={value => setNum10(value)} defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-3 offset-lg-1 mt-4">
                                    <div className="h6">NUM-50</div>
                                    <NumberInput onChange={value => setNum50(value)} defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-3 offset-lg-1 mt-4">
                                    <div className="h6">NUM-100</div>
                                    <NumberInput onChange={value => setNum100(value)} defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                </Collapse>
                                </div>
                                
                                <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                    <PricingQuote button serviceName="Unified Communications As A Service" serviceDescription=
                                        {`${node},${type}${verifyNotEmpty(additionalUcaas, "Additional UCaaS")}${verifyNotEmpty(addSIP, "Additional SIP")}${verifyNotEmpty(extraVM, "Extra VMs")}${verifyNotEmpty(hunts, "Additonal Hunts")}${verifyNotEmpty(num10, "NUM-10")}${verifyNotEmpty(num50, "NUM-50")}${verifyNotEmpty(num100, "NUM-100")}`}></PricingQuote>
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
                        <div className="h4 NunitoSans-ExtraBold">Developing your needs
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                            Application Development as a Service includes building, deploying, maintaining, managing and securing your application over a particular platform. There are diversified platforms on which the applications are built, which include Web, Android, iOS etc. Application Development as a Service allows you to get your application build on the platform of your choice, and maintain and monitor in real-time. The current age is what you witness over the multiple devices, because of which Application Development Services have grown so much over the past few years.                        </div>
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
                                Platform Independence
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Build applications for a range of digital platforms like mobile, desktop, smartwatch, AR etc. User-interactivity, responsiveness, user-friendly interfaces kept into consideration.    
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
                                Client-specific
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Highly talented team of professionals and technology experts, to build customized solutions as per the client’s needs. Customer satisfaction is the prime motto, and we ensure to deliver every requirement expected.
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
                                Flexibility and Scalability
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Digital transformation, App modernization and up-gradation, and Application Integration Services. Agile software development model followed to provide better results.
                                </div>
                                <Image src="/assets/images/illustrations/assets.svg" className="mt-auto" height="250px"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <section className="fbd-block section">
            <div className="container">
                <div className="row">
                <Fade duration={500} distance={"30%"} bottom>
                    <div className="col text-center">
                        <h1 className="display4">
                            Why BG Unified Solutions?
                        </h1>
                        
                        <div className="row text-left pt-4">
                            <div className="col-12 col-md-6">
                                <p className="lead text-justify"> 
                                There are diversified platforms on which the applications are built, which include Web, Android, iOS etc. Application Development as a Service allows you to get your application build on the platform of your choice, and maintain and monitor in real-time. We offer varied App Development Services that are platform-independent which includes mobile, desktop, smartwatch, AR etc. User-interactivity, responsiveness, user-friendly interfaces kept into consideration.
                                Reduced costs, pay for what you want, no hidden costs and completely transparent process. Costing and pricing discussed and negotiated at the starting of the job only.
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="lead text-justify">
                                    BG Solutions has gained an excellent reputation in design and implementation of technology and significant experience in Application Development services design and implementation for a number of clients and in distributed environments and locations.
                                    BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.
                                    We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches.
                                </p>
                            </div>
                        </div>

                    </div>
                    </Fade>
                </div>
            </div>
        </section>
        <div className="section pt-0">
            <div className="container">
            <Fade duration={400} distance={"30%"} bottom>
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
                </Fade>
            </div>
        </div>
        </div>
    );
}

export default UCaaS;
