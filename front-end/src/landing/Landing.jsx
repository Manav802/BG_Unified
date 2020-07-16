import React, { Component } from 'react'
import { Image,Button,ButtonGroup, Icon, Box } from "@chakra-ui/core";
import CardWithIcon from '../components/cards/CardWithIcon'
import CaseStudy from '../components/case_study/CaseStudy'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import ContactForm from '../components/contactForm/main'
import FooterComponent from '../components/footer/main'
import Asset from './Asset.png';
import Map from './Map.png';
import Icon18 from './Icons/Mask Group 18.svg';
import Icon19 from './Icons/Mask Group 19.svg';
import Icon20 from './Icons/Mask Group 20.svg';
import Icon21 from './Icons/Mask Group 21.svg';
import Icon22 from './Icons/Mask Group 22.svg';
import Icon23 from './Icons/Mask Group 23.svg';

import Icon9 from './Icons 2/Mask Group 9.svg'
import Icon10 from './Icons 2/Mask Group 10.svg'
import Icon11 from './Icons 2/Mask Group 11.svg'
import Icon12 from './Icons 2/Mask Group 12.svg'
import Icon13 from './Icons 2/Mask Group 13.svg'
import Icon14 from './Icons 2/Mask Group 14.svg'

import * as brands from './BrandIcons/index';

function MyCard(props){
    return (
        <div className="mycard rounded-lg p-3 my-3 shadow " style={{backgroundColor:"white"}}>
                <div className="row mx-3 mt-3 mb-2"> 
                        <Box size="48px" color="white" >{props.icon}</Box>
                </div>
                <div className="row display6 mx-3">
                        {props.title}
                </div>
                <div className="row cardContent mx-3 mb-4">
                    {props.children}
                </div>
        </div>
    )
}

export class Landing extends Component {
    render() {
        const testimonialDetails = [
            {   
                id:1,
                imageUrl:brands.Img8,
                paragraph:"BG Unified Solutions worked together with our in-house engineers, whom we engaged to redesign our network. Saurabh was the engineer in-charge, who designed the whole solution to reduce the overall complexity and remove bottlenecks. He worked cohesively with our in-house team and brought great technical skills &amp; expertise on Cisco switches, routers, firewalls, content switches, IPS etc. Throughout the project, his dedication was remarkable.",
                author:"Garrett Hudson",
                CompanyName: "Alejandro"
            },
            {   
                id:2,
                imageUrl:brands.Img9,
                paragraph:"BG Unified Solutions worked together with our in-house engineers, whom we engaged to redesign our network. Saurabh was the engineer in-charge, who designed the whole solution to reduce the overall complexity and remove bottlenecks. He worked cohesively with our in-house team and brought great technical skills &amp; expertise on Cisco switches, routers, firewalls, content switches, IPS etc. Throughout the project, his dedication was remarkable.",
                author:"Garrett Hudson",
                CompanyName: "Alejandro"
            },
            {   
                id:3,
                imageUrl:brands.Img10,
                paragraph:"BG Unified Solutions worked together with our in-house engineers, whom we engaged to redesign our network. Saurabh was the engineer in-charge, who designed the whole solution to reduce the overall complexity and remove bottlenecks. He worked cohesively with our in-house team and brought great technical skills &amp; expertise on Cisco switches, routers, firewalls, content switches, IPS etc. Throughout the project, his dedication was remarkable.",
                author:"Garrett Hudson",
                CompanyName: "Alejandro"
            }
        ];
        return (
            <div className="landing">
                <div className="container">

                    <div className="row first my-5">
                        <div className="col-12 col-lg-6 py-5">
                            <div className="welcome">
                                Welcome
                            </div>
                            <p className="my-2 display4">Enhancing experience with enhanced technology</p>
                            <p className="my-2 content">Your go-to partner for all hossting business solutions and services that deliver value and enable solid corporate growth.</p>
                            <ButtonGroup spacing={4}>
                                <Button className="my-3 py-2 px-4 explore" variantColor="primary" variant="solid">
                                    Explore now
                                </Button>
                                <Button className="get-btn" border="2px" borderColor="#051133" variantColor="black" variant="outline">
                                    Get a quote <Icon className="mx-1" size="16px" name="arrow-forward"/>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <Image src={Asset}/>
                        </div>
                    </div>

                    <div className="row second my-5 py-lg-5">
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <div className="row display4">
                                We’re a dynamic team of creative people, innovators & Technology Expert.
                            </div>
                            <div className="row my-2 px-4 content">
                            We understand that every business is different. Our flexible IT services portfolio can easily be aligned with your specific requirements, situation, and objectives.
                            </div>
                        </div>
                    </div>

                    <div className="row third my-5">
                        <div className="col-lg-3 col-md-4 col-12 p-3 pt-5">
                                <div className="our-services my-2">
                                    OUR Services
                                </div>
                                <div className="display6">
                                Build the future of your business with the latest tech and infrastructure.
                                </div>
                                <div className="mt-3">
                                    <Button className="view-btn" variantColor="black" color="black" >
                                    View all <Icon className="mx-1" size="16px" name="arrow-forward"/>
                                        </Button>
                                </div>
                        </div>
                        <div className="col">
                            <div className="no-gutters row">
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon9}/>} title={<div>Infrastructure <br/> as a service </div>} children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon10}/>} title={<div>Storage <br/> as a service </div>} iconBg="#F3A622" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon12}/>} title={<div>DNS <br/> as a service </div>} iconBg="#5F1CE6" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon13}/>} title={<div>Backup <br/> as a service </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon14}/>} title={<div>Proxy <br/> as a service </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <CardWithIcon icon={<Image src={Icon11}/>} title={<div>Platform <br/> as a service </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row forth mt-5 py-lg-5 ">
                        <div className="col-12 features text-center">
                            Features
                        </div>
                        <div className="col-12 my-2 text-center display5">
                            Why Choose Us?
                        </div>
                        <div className="col-lg-10 offset-lg-1 col-12 mb-3 ">
                            <div className="row no-gutters">
                                <div className="col-xl-4 px-2 col-sm-6 col-12 ">
                                    <MyCard icon={<Image src={Icon18}/>} title="24/7 Industry Support" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon19}/>} title="Dashboard Reporting" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon20}/>} title="Wide range of services" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon21}/>} title="Secure Transactions" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon22}/>} title="Enhanced Performance" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                                <div className="col-xl-4 px-2 col-sm-6 col-12">
                                    <MyCard icon={<Image src={Icon23}/>} title="Simple Pricing" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." iconBg="Green"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid brands my-5 py-2">
                    <div className="marquee">
                    <div className="justify-content-center text-center d-flex abc mx-xl-5 mx-0 scroll">
                        <Image src={brands.Img1}/>
                        <Image src={brands.Img2}/>
                        <Image src={brands.Img4}/>
                        <Image src={brands.Img5}/>
                        <Image src={brands.Img6}/>
                        <Image src={brands.Img8}/>
                        <Image src={brands.Img9}/>
                        <Image src={brands.Img10}/>
                        <Image src={brands.Img14}/>
                        <Image src={brands.Img15}/>
                        <Image src={brands.Img16}/>
                        <Image src={brands.Img17}/>
                        <Image src={brands.Img18}/>
                        <Image src={brands.Img19}/>
                        <Image src={brands.Img20}/>
                        <Image src={brands.Img21}/>
                    </div>
                    </div>
                </div>

                <div className="container my-lg-4 py-lg-3">
                    <CaseStudy/>
                </div>

                <div className="container my-4 ">
                    <div className="row mt-3">
                        <div className="col-12 py-lg-5 py-4 first">
                            <div className="welcome">
                                Reach
                            </div>
                            <p className="my-2 display5">Our Data Center Locations</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                            <Image src={Map}/>
                    </div>

                    <div className="row mt-lg-5 mt-2 mt-lg-5">
                        <div className="col-12 pt-3 pt-md-4 first">
                            <div className="welcome">
                                Testimonials
                            </div>
                            <p className="mt-2 display5">What people say about us</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-2">
                    <div className="row">
                        <div className="col-12">
                            <TestimonialCard testimonialDetails={testimonialDetails}/>
                        </div>
                    </div>
                </div>
                <div className="container"> 
                    <div className="row my-5">
                        <div className="col-md-4 col-12 pt-md-5 third mycard ">
                                <div className="our-services my-2">
                                Contact Us
                                </div>
                                <div className="display6" style={{fontSize:"35px"}}>
                                    Let's make IT done
                                </div>
                                <div className="cardContent py-3">
                                    Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr.
                                </div>
                        </div>
                        <div className="offset-lg-2 offset-md-1 py-5 col">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
