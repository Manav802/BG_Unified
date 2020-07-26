import React, { Component } from 'react';
import CardWithIcon from '../components/cards/CardWithIcon';

import {Image} from '@chakra-ui/core'

class OurSolutions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className="position-absolute w-100 overflow-hidden back-cover">
                    <img className="w-100" src="/assets/images/backgrounds/top_red_triangle.svg" />
                </div>
                <div className="our-solutions">
                    <div className="section mt-5">
                        <div className="container p-0">
                            <div className="py-5 page-heading">
                                <span className="display3 ">Explore our solutions</span>
                            </div>
                            <div className="no-gutters row"> 
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Computing <br /> Infrastructure </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Storage <br /> Units </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>DNS <br /> as a service </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="offset-lg-2"></div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Backup <br /> Units </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Proxy <br /> Servers</div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Cloud Platform <br /> service </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Firewall <br /> Services </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>UCaaaS (Unified <br /> Communications)</div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Disaster Recovery <br /> Management </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Wireless <br /> Networks </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Customer Support <br /> as a service </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>SIP<br /> Connectivity </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>SD-WAN <br /> Optimization </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Architectural <br /> Consultancy </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Application Development <br /> and Scalability </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Cloud Exchange <br /> Connectivity </div>} iconBg="#F33022" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Web Hosting <br /> Solutions </div>} iconBg="#0D5EA5" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <CardWithIcon icon={<Image src="/assets/images/icons/monotone/server.svg" />} title={<div>Cloud <br /> Logging </div>} iconBg="#19C741" children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr." />
                                </div>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>
           </>
        );
    }
}

export default OurSolutions;