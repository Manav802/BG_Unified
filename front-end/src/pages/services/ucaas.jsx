import React from 'react';
import {Button,Image, Icon, Box, Tabs, TabList, Tab, TabPanel, TabPanels} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import Head from 'next/head'
import Link from 'next/link'

function UCaaS(props) {
    return (
        <div>
            <Head>
                <title>UCaaS</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg">
            <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                    <h1 className="display3">Unified Communications as a Service (UCaaS)</h1>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                    <Tabs align="center">
                        <TabList>
                            <Tab className="p-3 px-4 display6">Private</Tab>
                            <Tab className="p-3 px-4 display6">Virtual</Tab>
                            <Tab className="p-3 px-4 display6">Other</Tab>
                        </TabList>

                        <TabPanels>
                        
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/firewall_physical.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Physical 1G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/physical_cluster.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Physical Cluster 1G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Fade>
                            </TabPanel>
                            
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                            <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/firewall_virtual.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Virtual 1G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/virtual_cluster.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Virtual Cluster 1G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/firewall_virtual.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Virtual 10G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/virtual_cluster.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Virtual Cluster 10G</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Fade>
                            </TabPanel>
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"}  bottom >
                            <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/firewall_virtual.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">MAC</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <div className="shadow-md p-4 d-flex justify-content-center align-items-center flex-column rounded-8 bg-white">
                                            <Image src="/assets/images/icons/theme/firewall_virtual.svg" height="64px"></Image>
                                            <span className="mt-3 h6 NunitoSans-Bold">Emergency Change</span>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Single Location</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                            <div className="mt-3 w-100 px-3 d-flex justify-content-between">
                                                <p>Multihomed</p>
                                                <a href="" className="">Get a quote</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                </Fade>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    </div>
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

export default UCaaS;
