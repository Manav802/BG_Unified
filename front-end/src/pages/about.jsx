import React, { Component } from 'react';
import Slider from 'react-flickity-component'
import CardWithAction from '../components/cards/CardWithAction' 
import Team from '../components/cards/team'
import { FaArrowRight } from "react-icons/fa";
import { Box } from '@chakra-ui/core';
import Head from 'next/head';


class about extends Component {
    constructor(props){
        super(props);
        this.state={
            activeYearCard:1
        }
    }
    goToIndex = (index) => {
        //using Flickity API
        this.flkty.select( index );
        this.setState({activeYearCard:index})
      }
    render() {
        return (
            <>
            
            <div className="about">
                <Head>
                    <title>
                        More About Us - BG Unified
                    </title>

                        <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
                </Head>
                <div className="position-absolute w-100 overflow-hidden background-svg">
                    <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
                </div>
                <div className="page-header">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 text-center justify-content-center">
                            <h1 className="display3">About Us</h1>
                        </div>
                    </div>
                    </div>
                </div>
               <div className="section pt-0">
                    <div className="container-fluid p-0 py-5">
                        <div className="row m-0">
                            <div className="slider-offset p-3"></div>
                            {/* <div className="col">
                                <a onClick={()=>this.goToIndex(1)} className={ "p-4" + (this.state.activeYearCard==1 ? " text-primary border-bottom": "")}>2020</a>
                                <a onClick={()=>this.goToIndex(2)} className={ "p-4" + (this.state.activeYearCard==2 ? " text-primary border-bottom": "")}>2019</a>
                                <a onClick={()=>this.goToIndex(3)} className={ "p-4" + (this.state.activeYearCard==3 ? " text-primary border-bottom": "")}>2018</a>
                                <a onClick={()=>this.goToIndex(4)} className={ "p-4" + (this.state.activeYearCard==4 ? " text-primary border-bottom": "")}>2017</a>
                                <a onClick={()=>this.goToIndex(5)} className={ "p-4" + (this.state.activeYearCard==5 ? " text-primary border-bottom": "")}>2016</a>
                                <a onClick={()=>this.goToIndex(6)} className={ "p-4" + (this.state.activeYearCard==6 ? " text-primary border-bottom": "")}>2015</a>
                                <a onClick={()=>this.goToIndex(7)} className={ "p-4" + (this.state.activeYearCard==7 ? " text-primary border-bottom": "")}>2014</a>                              
                                <a onClick={()=>this.goToIndex(7)} className={ "p-4" + (this.state.activeYearCard==8 ? " text-primary border-bottom": "")}>2014</a>
                            </div> */}
                            {/* <div className="display4">BG-Unified a story of 8 years of excellence</div> */}
                        </div>
                        
                       <Slider className="timeline" flickityRef={c => this.flkty = c}
                            options={{
                            freeScroll: true,
                            pageDots: false,
                            contain: true,
                            draggable: true,
                            adaptiveHeight: false
                            }}>
                            <div className="slider-offset"></div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                            <CardWithAction title="2020">DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                            <CardWithAction title="2019">Built our own Logging Cloud Connect Product, Newly deployed RDS/VDIaaS Solution into its portfolio as Workstation Service.
                            </CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2018">Received BTS Excellence Award in recognition of Excellent Service by the NSW Government.</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2017">Presence in London, offering all the services in our portfolio including, UCaaS, SaaS, IaaS, WiaaS and FaaS</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2016">Technology migration to Next-Generation Firewalls, UCaaS, Wireless, Telepresence and Storage.</CardWithAction>

                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2015">Nimble Storage Partners, NetAPP Partner, GENESYS Collaboration</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2014">F5 Authorized Partners, CISCO Premier Partner, CISCO Advanced Collaboration, Architecture Specialized Partner, Palo Alto Authorized Partners. </CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                    <CardWithAction title="2013">Founded and BG Unified Solutions Pty Ltd as a team providing IT solutions to the clients focusing on customer satisfaction and deliverability. </CardWithAction>
                            </div>
                        </Slider>
                    </div>
               </div>
               <div className="section pt-0">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-10 offset-1">
                            <div className="row my-4">
                                <div className="col-sm-3 col-4">
                                    <span className="display4 mb-0 text-primary">250+</span>
                                    <h5>Clients</h5>
                                </div>
                                <div className="col-sm-3 col-4">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Locations</h5>
                                </div>
                                <div className="col-sm-3 col-4">
                                    <span className="display4 mb-0 text-primary">300+</span>
                                    <h5>Projects</h5>
                                </div>
                            </div>
                            <div className="display6 py-3">
                                Our Mission
                            </div>
                            <p className="">
                                BG Unified Solutions Pty Ltd Team consists of experts in different technologies like Security, Voice and a broad range of additional skills including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients.

                            </p>
                            <p> 
                                We majorly deal with Cisco Voice / Video Projects, WAN Implementations, DC Design and Implementation. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, effective cost containment and lower risk. BG Unified Solutions, founded in 2013, provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.

                            </p>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="section">
                           <div className="container">
                               <div className="p-3 text-center d-flex flex-column">
                                   <span className="h6 text-primary">TEAM</span>
                                   <span className="display5">Meet the Visionary People</span>
                               </div>
                               <div className="row py-2">
                                   <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Founder & Owner" name="Jingyi Li" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                    </div>
                                    <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Co-Founder and Managing Director" name="Saurabh Sareen" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                   </div>
                                   <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                                        {/* <span className="display6 text-dark">Interested in joining our team?</span> */}
                                        {/* <a className="text-primary d-flex my-2" href="">View Career Opportunities <Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a> */}
                                   </div>
                                   <div className="py-5" style={{paddingTop:"100px"}}></div>
                               </div>
                           </div>
                
               </div>
        
            </div>
            </>
        );
    }
}

export default about;