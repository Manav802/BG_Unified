import React from 'react';
import {Button, Collapse, Image, Select,
Slider, SliderThumb, SliderTrack, SliderFilledTrack, Flex, FormLabel, Switch} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'

function main(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(1);
    const handleChange = value => setValue(value);
    const [restorePoints, setRestorePoints] = React.useState("");
    const [geoLocations, setGeoLocations] = React.useState("");
    const [hourlyBackups, setHourlyBackups] = React.useState(false);
    const handleHourlyBackups = (hourlyBackups) => (hourlyBackups) ? (",Enabled Hourly Backups") : ("")
    return (
        <div>
            <Head>
                <title>Backup for your Digital system | Backup As A Service - BG Unified Solutions</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg">
            <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                    <h1 className="display3">Backup As A Service</h1>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row px-lg-5 px-3">
                    <div className="col-lg-4 my-3">
                        <PricingCard  title="Standard" icon="/assets/images/icons/theme/stack.svg" featureList={["Single Copy", "Single Location", "Reliable & Secure", "Cost Effective"]}>
                            <PricingQuote buttonStyle="mt-3" button serviceName="Backup As A Service" serviceDescription="Standard, Single Copy, Single Location" ></PricingQuote>
                       </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard title="Corporate" icon="/assets/images/icons/theme/work.svg" featureList={["Multiple Copies", "Single Location", "Reliable & Secure", "Cost Effective"]}>
                            <PricingQuote buttonStyle="mt-3" button serviceName="Backup As A Service" serviceDescription="Corporate, Multiple Copies, Single Location" ></PricingQuote>
                        </PricingCard>
                    </div>
                    <div className="col-lg-4 my-3">
                        <PricingCard title="Enterprise" icon="/assets/images/icons/theme/town.svg" featureList={["Multiple Copies", "Multiple Location", "Reliable & Secure", "Cost Effective"]}>
                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>View Options</Button>
                        </PricingCard>
                    </div>
                </div>
                <div>
                    <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">Customize your plan</div>
                            <div className="row px-3">
                                <div className="col-lg-12 mt-4">
                                    <div className="h6">How many copies you want?</div>
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
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">How many Restore Points you want?</div>
                                    <Select onChange={e => setRestorePoints(e.target.value)} my="24px" placeholder="Select option" size="lg">
                                        <option value=",5 Restore Points">5</option>
                                        <option value=",10 Restore Points">10</option>
                                        <option value=",15 Restore Points">15</option>
                                        <option value=",20 Restore Points">20</option>
                                        <option value=",25 Restore Points">25</option>
                                        <option value=",30 Restore Points">30</option>
                                    </Select>
                                </div>
                                <div className="col-lg-5 offset-lg-1 mt-4">
                                    <div className="h6">How many Geo Locations you want?</div>
                                    <Select onChange={e => setGeoLocations(e.target.value)} my="24px" placeholder="Select option" size="lg">
                                        <option value=",1 Geo Location">1</option>
                                        <option value=",2 Geo Location">2</option>
                                    </Select>
                                </div>
                                <div className="col-lg-12 mt-3 d-flex justify-content-between">
                                    <Flex py="12px" justify="center" align="center">
                                        <Switch onChange={(e)=>{setHourlyBackups(e.target.checked)}} color="primary" mb={0} id="hourly-backup" />
                                        <FormLabel mb={0} ml="12px" htmlFor="hourly-backup">Hourly Backups</FormLabel>
                                    </Flex>
                                    <PricingQuote serviceDescription={`${value} Copy${restorePoints}${geoLocations}${handleHourlyBackups(hourlyBackups)}`} button ></PricingQuote>
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
                        <div className="h4 NunitoSans-ExtraBold">Professional communication at your fingertips.
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                        In today’s world, collaboration involves so much more than voice. With a full range of video and web conferencing solutions, unified communications, and workspace applications, the adoption of collaboration technology is widespread across organizations and affects multiple lines of business. Putting video in action, from the desktop to the conference rooms and to the largest applicable venues—including audio/video and rich media content that can be captured, streamed live, archived, or repurposed for the required collaboration toolset
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
                                Platform Diversity
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    On-premise or cloud-based, that helps secure your IT environment quickly.
                                    The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.
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
                                Fast and easy Deployment
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                Rapid evolvement, easily deployable with tremendous speed. 
                                Proven deployment methodology that integrates and extends your existing security infrastructure without capex.
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
                                Advance Technology Stack
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, 
                                    User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network’s included
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
                        <h4 className="display5 py-2 mb-2 text-center">Why Us?</h4>
                        <p className="text-justify">Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business.
We have the expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint. We bring our team of experienced collaboration experts to every engagement, and we offer business and technology assessments to help identify any barriers in order for your collaborative Goals to succeed. We structure our discovery process to consider your entire telecommunications environment, including network infrastructure, data centres, and more. Once we determine your key business drivers and needs, we tailor a solution with best-in-class products and technologies from top manufacturers with expert service and support. We have the expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint. We structure our discovery process to consider your entire telecommunications environment, including network infrastructure, data centres, and more. Once we determine your key business drivers and needs, we tailor a solution with best-in-class products and technologies from top manufacturers with expert service and support.
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
