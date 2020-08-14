import React from 'react';
import {Button, Collapse, Image, Radio, RadioButtonGroup, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
Slider, SliderThumb, SliderTrack, SliderFilledTrack} from '@chakra-ui/core'
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
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(0);
    const handleChange = value => setValue(value);
    return (
        <div>
            <Head>
                <title>DNS Services</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg">
            <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                    <h1 className="display3">DNS Services</h1>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row px-lg-5 px-3">
                    <div className="col-lg-4 my-3">
                        <PricingCard  title="Single Node CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email", "Include Cisco Jabber"]}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>View More</Button>
                       </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard title="Single Node CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email", "Include Cisco Jabber"]}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>View More</Button>
                        </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard className="hover-effect" title="Single Node CUCM" icon="/assets/images/icons/theme/firewall_virtual.svg" featureList={["Include Voicemail", "Include Presence", "Include Voicemail to Email", "Include Cisco Jabber"]}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>View More</Button>
                        </PricingCard>
                    </div>
                </div>
                <div>
                    <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">Single Node CUCM</div>
                            <div className="row px-3">
                                <div className="col-lg-12 mt-2">
                                    <div className="h6">Choose a type</div>
                                    <RadioButtonGroup defaultValue="rad2" mt={4} isInline>
                                        <CustomRadio value="rad1">CustomRadio 1</CustomRadio>
                                        <CustomRadio value="rad2">CustomRadio 2</CustomRadio>
                                        <CustomRadio value="rad3">CustomRadio 3</CustomRadio>
                                    </RadioButtonGroup>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Total UCaaS</div>
                                    <NumberInput defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-5 offset-lg-1 mt-4">
                                    <div className="h6">Additional Hunt Groups</div>
                                    <NumberInput defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-3 mt-4">
                                    <div className="h6">NUM-10</div>
                                    <NumberInput defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-3 offset-lg-1 mt-4">
                                    <div className="h6">NUM-50</div>
                                    <NumberInput defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
                                </div>
                                <div className="col-lg-3 offset-lg-1 mt-4">
                                    <div className="h6">NUM-100</div>
                                    <NumberInput defaultValue={0} min={0} max={20}>
                                    <NumberInputField className="bg-light" />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                    </NumberInput>
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
                                <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                    <PricingQuote button ></PricingQuote>
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
                        <div className="h4 NunitoSans-ExtraBold">For a stronger web identity
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                            Domain Name System as a Service is a functionality of deploying, maintaining managing and securing your website over the world wide web with a unique domain name for a particular website. The main functionality of DNS is to convert domain names into IP addresses, for the web browsers to identify a website, for them to load the required resources. Domain Name System Service allows you to host the website over the web, and maintain and monitor in real-time.                        </div>
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
                                <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark ">
                                    Scalability 
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Hierarchical nature of  DNS, making it scalable. Allows every organization to manage its authoritative and operational data effectively, even with increased resources. Maintaining compatibility as DNS servers clients run on different hardware, different operating systems.                                </div>
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
                                    Reliability 
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    The user or the end host need not dive into the technicality about root or TLD servers. Only need to know the basics of the functioning. Eliminating vulnerabilities like cache poisoning, to reach a satisfactory level of security, making our DNS service extremely reliable.                                </div>
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
                                    Concurrency 
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Allows and handles multiple requests simultaneously and manages data by distributing over a large number of hosts. Detects, isolates notifies and corrects faults encountered in the network.                                </div>
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
                        <h4 className="display5 py-2 mb-2 text-center">Why Us?</h4>
                        <p className="text-justify">
                        Delivering a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users.

We have a ‘can-do’ attitude with an ‘easy to work with’ culture. Our values are based around fresh thinking, delivering on our promises, showing customer respect and making a 100% commitment.
We design a Load Balancing topology for web servers running multiple instances of TOMCAT. A couple of applications are SSL based and others are Non-SSL based. Implementation of advanced features of F5 including Application Monitoring, Intrusion Prevention, Application Inspection and dynamically powering on the VMs based on the load or other criteria’s. Involvement in the integration of Big IPs to the newly implemented DC.
BG Solutions has gained an excellent reputation in design and implementation of IP technology and significant experience in Web Hosting services design and implementation for a number of clients and in distributed environments and locations.
BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.
We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches.

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
