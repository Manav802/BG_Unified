import React, { Component } from 'react'
import Head from 'next/head'
import { Image, Button, ButtonGroup, Icon, Box } from "@chakra-ui/core";
import CardWithIcon from '../components/cards/CardWithIcon'
import CardWithAction from '../components/cards/CardWithAction'
import CaseStudy from '../components/case_study/CaseStudy'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ContactForm from '../components/contactForm/main'
import {TESTIMONIALS} from '../../public/assets/data/testimonials';


class Landing extends Component {
    componentDidMount(){
        
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
                <div className="section pb-0 bg-landing">
                    <div className="container" style={{zIndex:1100}}>
                        <div className="row">
                            <div className="col-lg-10 offset-1 mt-5">
                                <div className="h3 NunitoSans-ExtraBold text-white text-center">Deploy, scale, monitor your business online with our security and reliability.</div>
                                <div className="h6 NunitoSans-SemiBold text-white-50 px-5 text-center mt-3">Computing Infrastructure, Proxy Servers, Firewalls, Web Hosting, Cloud Logging, UCaaS and much more….</div>
                                <div className="p-4 justify-content-center d-flex">
                                    <ButtonGroup spacing="4">
                                        <Button variant="solid" variantColor="primary" size="lg">Explore Now</Button>
                                        <Button variant="outline" variantColor="white" className="btn btn-outline-light" size="lg">Get a quote</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="p-4">
                                    <Image src="/assets/images/vectors/data_servers.svg"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-bottom-with-margin">
                        <Image src="/assets/images/dividers/divider_white_bottom.svg"></Image>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row third my-5">
                        <div className="col-lg-3 col-md-4 col-12 p-3 pt-5">
                            <div className="our-services NunitoSans-ExtraBold my-2">
                                OuR Services
                                </div>
                            <div className="display6">
                                Build the future of your business with the latest tech and infrastructure.
                                </div>
                            <div className="mt-3">
                                <Button className="view-btn NunitoSans-ExtraBold px-0" variantColor="black" color="black" >
                                    View all <Icon className="mx-1" size="16px" name="arrow-forward" />
                                </Button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="no-gutters row">
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Infrastructure <br /> as a service </div>} children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Storage <br /> as a service </div>} iconBg="#F3A622" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>DNS <br /> as a service </div>} iconBg="#5F1CE6" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Backup <br /> as a service </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Proxy <br /> as a service </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Platform <br /> as a service </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex forth landing-benefits justify-content-center">
                    
                    <div className="col-12 p-0 bg-dark">
                        <img src="/assets/images/dividers/divider_white_plain.svg" className="w-100" alt=""/>
                    </div>
                    <div className="col-12 p-0 bg-dark overflow-hidden">
                            <div style={{height:"440px"}} className="d-flex justify-content-end">
                                <img src="/assets/images/vectors/ic_chip_neon.png" className="vector" alt=""/>
                            </div>
                        <div className="layer-1">
                        <img src="/assets/images/dividers/divider_red_bottom.svg" className="w-100 divider-img" alt=""/>
                        </div>
                    </div>
                    <div className="col-12 p-0 special-div-content">
                    <div className="container p-0">
                        <div className="col-12 text-center NunitoSans-ExtraBold text-primary text-uppercase">
                            Features
                            </div>
                        <div className="col-12 my-2 text-center text-white display5">
                            Why Choose Us?
                            </div>
                        <div className="col-lg-10 offset-lg-1 col-12 mb-3 ">
                            <div className="row">
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                                    <CardWithAction title="24/7 Active Support" icon="/assets/images/icons/color/headphones.svg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio fugit repudiandae, aspernatur molestias fugiat praesentium odio.
                                    </CardWithAction>
                                </div>
                                
                            </div>
                        </div>
                    </div>                        
                    </div>
                   
                </div>

                <div className="container-fluid brands my-5 py-2">
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

                

                <div className="my-5 row overflow-hidden globe-section">
                    <img src="/assets/images/dividers/divider_white.svg" className="col-12 p-0" alt="" />
                    <div className="row">
                        <div className="slider-offset"></div>
                        <div className="row col mt-3 d-flex align-items-center">
                            <div className="col-xl-4 col-lg-5 col-md-6 col-8 p-5 text-white">
                                <div className="text-primary">
                                    Reach
                                </div>
                                <p className="my-2 display5 text-white">Our Data Center Locations</p>
                                <h6 className="text-justify text-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos porro ducimus reprehenderit obcaecati rem ut harum voluptas corporis necessitatibus, doloremque eum commodi repellendus animi qui, unde numquam. Reprehenderit, consectetur nobis?</h6>
                                <div className="row w-100 mt-4">
                                    <div className="col-6 p-3">
                                        <span className="display4 mb-0 text-white">20+</span>
                                        <h5>Data Locations</h5>
                                    </div>
                                    <div className="col-6 p-3">
                                        <span className="display4 mb-0 text-white">20+</span>
                                        <h5>Data Locations</h5>
                                    </div>
                                    <div className="col-6 p-3">
                                        <span className="display4 mb-0 text-white">20+</span>
                                        <h5>Data Locations</h5>
                                    </div>
                                    <div className="col-6 p-3">
                                        <span className="display4 mb-0 text-white">20+</span>
                                        <h5>Data Locations</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-6 globe-container">
                                <canvas className ="ml-auto mr-auto d-block" id='globe' width="1200" height="1200"></canvas>
                            </div>
                        </div>
                    
                    </div>
                    <img src="/assets/images/dividers/divider_white_2.svg" className="w-100 image-flip" alt="" />
                </div>
                <div className="">
                    <div className="container my-lg-4 py-lg-3">
                        <CaseStudy />
                    </div>
                </div>
                <div className="container-fluid bg-dark mt-5 p-0">
                <div className="position-absolute w-100 d-flex align-items-start">
                    <img src="/assets/images/dividers/divider_white_plain.svg" className ="image-flip w-100" alt=""/>

                </div>
                    <div className="row my-5 ">
                        <div className="slider-offset"></div>
                        <div className="col py-4">
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
                <div className="container-fluid p-0 bg-dark overflow-hidden">
                    <div className="bg-contact">
                        <img src="/assets/images/vectors/contact.png" className="contact-image" alt=""/>
                    </div>
                    <img src="/assets/images/dividers/divider_yellow_bottom.svg" className="divider-yellow-with-margin w-100 layer-2" alt=""/>
                </div>
                <div className="container landing-contact-form py-5">
                    <div className="row my-5">
                        <div className="col-md-4 col-12 pt-md-5 third mycard text-white">
                            <div className="our-services my-2">
                                Contact Us
                                </div>
                            <div className="display6 text-white" style={{ fontSize: "35px" }}>
                                Let's make IT done
                                </div>
                            <div className="cardContent py-3">
                                Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr.
                                </div>
                        </div>
                        <div className="offset-lg-2 offset-md-1 py-5 col">
                          <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
