import React, { Component } from 'react'
import Head from 'next/head'
import {FaArrowRight} from 'react-icons/fa'
import { Image, Button, ButtonGroup, Icon, Box } from "@chakra-ui/core";
import CardWithIcon from '../components/cards/CardWithIcon'
import CardWithAction from '../components/cards/CardWithAction'
import FeatureCard from '../components/cards/FeatureCard'
import {CaseStudySingle, CaseStudy} from '../components/case_study/CaseStudy'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ContactForm from '../components/contactForm/main'
import {TESTIMONIALS} from '../../public/assets/data/testimonials';
import {CASESTUDY} from '../../public/assets/data/casestudydata'
import Typewriter from 'typewriter-effect';

import Link from 'next/link';

class Landing extends Component {
    componentDidMount(){
        
    }

    onHover(e){
        
    }

    render() {
        return (
            
            <div className="landing overflow-hidden">
                <Head>
                    <title>BG Unified Solutions</title>
                    <script type='text/javascript' src='http://d3js.org/d3.v3.min.js'></script>
                    <script type='text/javascript' src='http://d3js.org/topojson.v1.min.js'></script>
                    <script type='text/javascript' src='/assets/js/planetaryjs.min.js'></script>
                    <script type='text/javascript' src='/assets/js/globe.js'></script>

                </Head>
                <div className="bg-landing">
                    <div className="container py-5">
                       <div className="section mt-lg-5 pb-0">
                       <div className="row">
                            <div className="col-lg-12 mt-5 mb-5 mb-lg-0">
                                <div className="h2 NunitoSans-Black text-center d-flex flex-wrap justify-content-center mb-0"> <Typewriter options={{strings: ['Deploy', 'Scale', 'Monitor'], autoStart: true, loop: true}}/> <div>&nbsp;your</div><div> &nbsp;business </div></div> 
                                <div className="h2 NunitoSans-Black text-center mt-0">with our security and reliability.</div>
                                <div className="h6 NunitoSans-SemiBold px-5 text-center text-secondary mt-3">Computing Infrastructure, Proxy Servers, Firewalls, Web Hosting, Cloud Logging, UCaaS and much more….</div>
                                <div className="p-4 justify-content-center d-flex">
                                        <Link href="/solutions"> 
                                            <Button variant="solid" className="mx-2 btn btn-outline hoverable" variantColor="primary" size="lg">Explore Now</Button>
                                        </Link>
                                        <Link href="/contact">
                                            <Button variant="outline" className="mx-2 btn btn-outline" size="lg">Get a quote</Button>
                                        </Link>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="container">
                    <div className="row my-5">
                        
                        
                                
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/infra">
                                    <a className="no-red">
                                        <CardWithIcon icon="/assets/images/icons/monotone/server.svg" title={<div>Infrastructure <br /> As A service </div>} children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM" />
                                    </a>
                                    </Link>
                                </div>
                                
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/storage-unit">
                                    <a className="no-red">              
                                    <CardWithIcon icon="/assets/images/icons/monotone/cloud.svg" title={<div>Storage <br /> As A service </div>} iconBg="#F3A622" children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage." /></a>
                                    </Link>
                                </div>
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/dns">
                                        <a className="no-red">
                                        <CardWithIcon icon="/assets/images/icons/monotone/earth_ouline.svg" title={<div>DNS <br /> As A service </div>} iconBg="#5F1CE6" children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching." /></a>
                                    </Link>
                                </div>
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/backup">
                                        <a className="no-red">
                                        <CardWithIcon icon="/assets/images/icons/monotone/disk.svg" title={<div>Backup <br /> As A service </div>} iconBg="#F33022" children="Clustering of Devices, Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, Cisco Wi-Fi and Aruba Wi-Fi." /></a>
                                    </Link>
                                </div>
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/proxy-server">
                                        <a className="no-red">
                                        <CardWithIcon icon="/assets/images/icons/monotone/proxy.svg" title={<div>Proxy <br /> As A service </div>} iconBg="#0D5EA5" children="Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Workforce Optimization and Quality Monitoring, N+N Redundant components." /></a>
                                    </Link>
                                </div>
                                <div className="col-xl-4 col-sm-6 my-2">
                                    <Link href="/services/platform">
                                        <a className="no-red">
                                        <CardWithIcon icon="/assets/images/icons/monotone/dashboard.svg" title={<div>Cloud Platform <br /> As A service </div>} iconBg="#19C741" children="Prototype multisite or multi-cloud DR strategies. Shortened Recovery Time.Geographically dispersed availability" /></a>
                                    </Link>
                                </div>
                            </div>
                    
                </div>
                </div>
                
            <div className="mt-4">
                    <div className="container-fluid brands py-2">
                            <div className="marquee">
                                <div className="justify-content-center text-center d-flex abc  mx-xl-5 mx-0 scroll">
                                    <Image src="/assets/images/brands/aapt.png" />
                                    <Image src="/assets/images/brands/advanced_life.png" />
                                    <Image src="/assets/images/brands/agc_plus.png" />
                                    <Image src="/assets/images/brands/blueglue.png" />
                                    <Image src="/assets/images/brands/cumulus.png" />
                                    <Image src="/assets/images/brands/equinix.png" />
                                    <Image src="/assets/images/brands/fdba.png" />
                                    <Image src="/assets/images/brands/fortinet.png" />
                                    <Image src="/assets/images/brands/fujitsu.png" />
                                    <Image src="/assets/images/brands/halls.png" />
                                    <Image src="/assets/images/brands/huawei.png" />
                                    <Image src="/assets/images/brands/hutchisonports.png" />
                                    <Image src="/assets/images/brands/infin_it.png" />
                                    <Image src="/assets/images/brands/sabre_pacific.png" />
                                    <Image src="/assets/images/brands/straintz.png" />
                                    <Image src="/assets/images/brands/veeam.png" /> 
                                </div>
                            </div>
                        </div>
              </div>
                
            <div className="row bg-light landing-benefits justify-content-center">
                <img src="/assets/images/dividers/divider_red_border.svg" className="w-100 divider-img" alt=""/>
                    <div className="col-12 p-0">
                    <div className="container p-0">
                        <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                            Features
                            </div>
                        <div className="col-12 my-2 text-center text-dark display5">
                            Why Choose Us?
                            </div>
                        <div className="col-lg-10 offset-lg-1 col-12 mb-3 ">
                            <div className="row">
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        24X7X365 support service, ensures you to provide a positive customer experience. Consulting, support and operational services tailored to your needs.
                                    </FeatureCard>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="Diversified Services" icon="/assets/images/icons/color/stack.svg">
                                        Organisation’s core business systems infrastructure; reaching from desktop to the data centre, hosted data centres, carriage services.
                                    </FeatureCard>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="Value for money" icon="/assets/images/icons/color/secure.svg">
                                        Transparent methodology, no hidden costs, Pricing negotiations at the beginning of the project only. Low and affordable prices.
                                    </FeatureCard>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="Transaction Security" icon="/assets/images/icons/color/price_tag.svg">
                                        Information kept completely confidential, under a Non-Disclosure Agreement. Ensures secure monetary transactions by our trusted payment gateways.
                                    </FeatureCard>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="Monitoring Freedom" icon="/assets/images/icons/color/analytics.svg">
                                        Monitor the progress, data servers, data centres, network connectivity, security, cloud logging, storage and even backup or faults, in real-time
                                    </FeatureCard>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <FeatureCard title="Enhanced Performance" icon="/assets/images/icons/color/speedometer.svg">
                                        We focus on providing the best a client can get, under the same cost, with maximum efficiency, maintenance and Disaster Management.
                                    </FeatureCard>
                                </div>
                                <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                                        <span className="display6 text-dark">Not Convinced?</span>
                                        <Link href="/features"><a className="text-primary d-flex my-2" href="">Learn More <Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a></Link>
                                   </div>
                                
                            </div>
                        </div>
                    </div>                        
                    </div>
                    
                </div>
                <div className="container-fluid p-0">
                    <img src="/assets/images/dividers/divider_border_invert.svg" className="w-100 position-absolute divider-img layer-4" style={{marginTop:"-24px"}} alt=""/>
                    <div className="container">
                    <div className="row layer-1">
                        <div className="col-lg-6 globe-container">
                            <canvas className ="ml-auto mr-auto d-block" id='globe' width="800" height="800"></canvas>
                        </div>
                        <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                                 <div className="mt-5 text-primary NunitoSans-Bold h6 text-uppercase">
                                    Reach
                                </div>
                                <p className="mb-2 display5">Our Data Center Locations</p>
                                <h6 className="NunitoSans-SemiBold text-lead text-secondary text-justify">BG Unified Solution is a specialist in Hosted Solutions and Services that helps clients plan, build, support and manage their IT infrastructure. Currently, we have 6 DC locations including Equinix SY3, SY4, ME1, LD3, IBM DC Auckland and GOVDC and planned to increase to 10 POPs by end of the year 2019.
                                                                        BG Unified Solutions has deep technology skills and proven methodologies to help you leverage leading data center solutions from legacy production systems support to a wide technology lens and multi-vendor solutions. Through our dedicated Data Center Practice, we can help you to choose the best path to embrace transformation from your base infrastructure to achieve your strategic goals. We bring a broad perspective based on demonstrated experience working with many customers in varied environments.</h6>
                        </div>
                    </div>
                    </div>
                </div>
            
              <div className="section pb-0">
                    <div className="my-lg-4 py-lg-3">
                        <CaseStudy casestudyDetails={CASESTUDY} link="read" />
                    </div>
                </div>
                
               <div className="section">
               <div className="container-fluid p-0">
                    <div className="row">
                        <div className="slider-offset"></div>
                        <div className="col p-4">
                            <div className="text-primary h6 text-uppercase">
                                Testimonials
                            </div>
                            <p className="mt-2 display5">What people say about us</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TestimonialCard testimonialDetails={TESTIMONIALS} />
                        </div>
                    </div>
                    
                </div>
               </div>
            </div>
        )
    }
}

export default Landing;
