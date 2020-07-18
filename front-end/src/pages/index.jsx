import React, { Component } from 'react'
import { Image, Button, ButtonGroup, Icon, Box } from "@chakra-ui/core";
import CardWithIcon from '../components/cards/CardWithIcon'
import CaseStudy from '../components/case_study/CaseStudy'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ContactForm from '../components/contactForm/main'
import FooterComponent from '../components/footer/main'

import dividerWhite from '../static/images/backgrouds/divider_white.svg'
import dividerWhiteBottom from '../static/images/backgrouds/divider_white_bottom.svg'
import dividerRedBottom from '../static/images/backgrouds/divider_red_bottom.svg'
import dividerWhitePlain from '../static/images/backgrouds/divider_white_plain.svg'
import dividerYellowBottom from '../static/images/backgrouds/divider_yellow_bottom.svg'
import topRedTriangle from '../static/images/backgrouds/top_red_triangle.svg'
import Asset from '../static/images/landing/Asset.png';
import Map from '../static/images/landing/Map.png';
import Icon18 from '../static/images/landing/Icons/Mask Group 18.svg';
import Icon19 from '../static/images/landing/Icons/Mask Group 19.svg';
import Icon20 from '../static/images/landing/Icons/Mask Group 20.svg';
import Icon21 from '../static/images/landing/Icons/Mask Group 21.svg';
import Icon22 from '../static/images/landing/Icons/Mask Group 22.svg';
import Icon23 from '../static/images/landing/Icons/Mask Group 23.svg';

import Icon9 from '../static/images/landing/Icons 2/Mask Group 9.svg'
import Icon10 from '../static/images/landing/Icons 2/Mask Group 10.svg'
import Icon11 from '../static/images/landing/Icons 2/Mask Group 11.svg'
import Icon12 from '../static/images/landing/Icons 2/Mask Group 12.svg'
import Icon13 from '../static/images/landing/Icons 2/Mask Group 13.svg'
import Icon14 from '../static/images/landing/Icons 2/Mask Group 14.svg';

import contactImage from '../static/images/vectors/contact.png'
import icNeon from '../static/images/landing/backgrouds/ic_chip_neon.png';

import {TESTIMONIALS} from '../shared/testimonials.jsx';
import * as brands from '../static/images/landing/BrandIcons/index';


function MyCard(props) {
    return (
        <div className="mycard rounded-lg p-3 my-3 shadow " style={{ backgroundColor: "white" }}>
            <div className="row mx-3 mt-3 mb-2">
                <Box size="48px" color="white" >{props.icon}</Box>
            </div>
            <div className="row display6 mx-3">
                {props.title}
            </div>
            <div className="row cardContent NunitoSans-Regular mx-3 mb-4">
                {props.children}
            </div>
        </div>
    )
}

class Landing extends Component {
    render() {
        return (
            <div className="landing overflow-hidden">
                <div className="container-fluid p-0 overflow-hidden position-absolute">
                    <img src={topRedTriangle} className="divider-topred-with-margin w-100 layer-2" alt=""/>
                </div>
                <div className="container">
                    <div className="row first my-5">
                        <div className="col-12 col-lg-6 py-5">
                            <div className="welcome NunitoSans-ExtraBold">
                                Welcome
                            </div>
                            <p className="my-2 display4">Enhancing experience with enhanced technology</p>
                            <p className="my-2 content NunitoSans-SemiBold">Your go-to partner for all hossting business solutions and services that deliver value and enable solid corporate growth.</p>
                            <ButtonGroup spacing={4}>
                                <Button className="my-3 py-2 px-4 explore NunitoSans-SemiBold" variantColor="primary" variant="solid">
                                    Explore now
                                </Button>
                                <Button className="get-btn NunitoSans-ExtraBold" border="2px" borderColor="#051133" variantColor="black" variant="outline">
                                    Get a quote <Icon className="mx-1" size="16px" name="arrow-forward" />
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <Image src={Asset} />
                        </div>
                    </div>

                    <div className="row second my-5 py-lg-5">
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <div className="row display4">
                                We’re a dynamic team of creative people, innovators & Technology Expert.
                            </div>
                            <div className="row my-2 px-4 content NunitoSans-Regular">
                                We understand that every business is different. Our flexible IT services portfolio can easily be aligned with your specific requirements, situation, and objectives.
                            </div>
                        </div>
                    </div>

                    <div className="row third my-5">
                        <div className="col-lg-3 col-md-4 col-12 p-3 pt-5">
                            <div className="our-services NunitoSans-ExtraBold my-2">
                                OUR Services
                                </div>
                            <div className="display6">
                                Build the future of your business with the latest tech and infrastructure.
                                </div>
                            <div className="mt-3">
                                <Button className="view-btn NunitoSans-ExtraBold" variantColor="black" color="black" >
                                    View all <Icon className="mx-1" size="16px" name="arrow-forward" />
                                </Button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="no-gutters row">
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon9} />} title={<div>Infrastructure <br /> as a service </div>} children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon10} />} title={<div>Storage <br /> as a service </div>} iconBg="#F3A622" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon12} />} title={<div>DNS <br /> as a service </div>} iconBg="#5F1CE6" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon13} />} title={<div>Backup <br /> as a service </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon14} />} title={<div>Proxy <br /> as a service </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon11} />} title={<div>Platform <br /> as a service </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex forth landing-benefits justify-content-center">
                    
                    <div className="col-12 p-0 bg-dark">
                        <img src={dividerWhitePlain} className="w-100" alt=""/>
                    </div>
                    <div className="col-12 p-0 bg-dark overflow-hidden">
                            <div style={{height:"440px"}} className="d-flex justify-content-end">
                                <img src={icNeon} className="vector" alt=""/>
                            </div>
                        <div className="layer-1">
                        <img src={dividerRedBottom} className="w-100 divider-img" alt=""/>
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
                            <div className="row no-gutters">
                                <div className="col-xl-4 px-2 col-sm-6 col-12 ">
                                    <MyCard icon={<Image src={Icon18} />} title="24/7 Industry Support" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon19} />} title="Dashboard Reporting" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon20} />} title="Wide range of services" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon21} />} title="Secure Transactions" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon22} />} title="Enhanced Performance" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon23} />} title="Simple Pricing" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green" />
                                </div>
                            </div>
                        </div>
                    </div>                        
                    </div>
                   
                </div>


                <div className="container-fluid brands my-5 py-2">
                    <div className="marquee">
                        <div className="justify-content-center text-center d-flex flex-wrap mx-xl-5 mx-0 scroll">
                            <Image src={brands.Img1} />
                            <Image src={brands.Img2} />
                            <Image src={brands.Img4} />
                            <Image src={brands.Img5} />
                            <Image src={brands.Img6} />
                            <Image src={brands.Img8} />
                            <Image src={brands.Img9} />
                            <Image src={brands.Img10} />
                            <Image src={brands.Img14} />
                            <Image src={brands.Img15} />
                            <Image src={brands.Img16} />
                            <Image src={brands.Img17} />
                            <Image src={brands.Img18} />
                            <Image src={brands.Img19} />
                            <Image src={brands.Img20} />
                            <Image src={brands.Img21} />
                        </div>
                    </div>
                </div>

                

                <div className="my-5 row overflow-hidden globe-section">
                    <img src={dividerWhite} className="col-12 p-0" alt="" />
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
                                <canvas class="ml-auto mr-auto d-block" id='globe' width="1200" height="1200"></canvas>
                            </div>
                        </div>
                    
                    </div>
                   <img src={dividerWhiteBottom} className="col-12 p-0 divider-bottom" alt="" />
                </div>
                <div className="section">
                    <div className="container my-lg-4 py-lg-3">
                        <CaseStudy />
                    </div>
                </div>
                <div className="container-fluid bg-dark mt-5 p-0">
                <img src={dividerWhitePlain} class="position-absolute w-100 image-flip" alt=""/>
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
                        <img src={contactImage} className="contact-image" alt=""/>
                    </div>
                    <img src={dividerYellowBottom} className="divider-yellow-with-margin w-100 layer-2" alt=""/>
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
