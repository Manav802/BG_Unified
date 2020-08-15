import React from 'react';
import {Button, Collapse, Image, Select,
Slider, SliderThumb, SliderTrack, SliderFilledTrack, Flex, FormLabel, Switch} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'
import { useToast } from "@chakra-ui/core"

function main(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(1);
    const handleChange = value => setValue(value);
    const [restorePoints, setRestorePoints] = React.useState("");
    const [geoLocations, setGeoLocations] = React.useState("");
    const [hourlyBackups, setHourlyBackups] = React.useState(false);
    const handleHourlyBackups = (hourlyBackups) => (hourlyBackups) ? (",Enabled Hourly Backups") : ("")
    const toast=useToast();
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
                    <h1 className="display3">Backup As A Service(BaaS)</h1>
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
                                    <div className="h6">No. of Copies</div>
                                    <Slider color="primary" my="24px" max={4} defaultValue={1} value={value} onChange={handleChange}>
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
                                    <div className="h6">Specify your choice of no. of Restore Points?</div>
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
                                    <div className="h6">Set no. of Geo Locations for your Backups?</div>
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
                                    <PricingQuote serviceName="Backup As A Service" serviceDescription={`${value} Copy${restorePoints}${geoLocations}${handleHourlyBackups(hourlyBackups)}`} button ></PricingQuote>
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
                        <div className="h4 NunitoSans-ExtraBold">Why Do we need a Backup?
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                        In today’s dynamic and complex landscape, no one can afford to be idle. Whether we like it or not, data centre change is upon us. Migrating us to store confidential and information data somewhere else, for the worst-case scenarios. And with this change comes steep challenges—to migrate your legacy production application environments to next-general data centres and enable your journey to the cloud. 
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
                        <h4 className="display5 py-2 mb-2 text-center">Why BG Unified Solutions?</h4>
                        <p className="text-justify">
                        Through our dedicated Data Center Practice, we can help you choose the best path to embrace this transformation at all levels—from your base infrastructure to achieve your strategic vision and goals. We’ll create a realistic roadmap and provide continual service so you can capture the promise of tomorrow’s data centre, cloud and backup—today. BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data. We handle protection and management for all of your structured and unstructured data while enabling self-service restoration capability to your teams.BG Unified Solutions has the deep technology skills and proven methodologies to help you leverage leading data center solutions. From legacy production systems support to a wide technology lens and multi-vendor solutions, we can help you implement a flexible, agile architecture designed specifically to meet your unique needs. We bring a broad perspective based on demonstrated experience working with many customers in varied environments.
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
        { toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })}
        </div>
    );
}

export default main;
