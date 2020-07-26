import React from 'react';
import { Image } from "@chakra-ui/core";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";
function footer(props) {
    return (
        <div className="my-3 footer">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-lg-3 my-3">
                        <Image src="/assets/logo.png" w="128px"></Image>

                    </div>
                    <div className="col-lg-3 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                        IT Infrastructural Services
                        </span>
                        <a href="">Computing Infrastructure</a>
                        <a href="">Storage Unit</a>
                        <a href="">Cloud Logging</a>
                        <a href="">Cloud Platform Service</a>
                        <a href="">Data backup</a>
                        <a href="">Firewalls</a>
                        <a href="">Application Development</a>
                        <a href="">Web Hosting Solutions</a>

                        <span className="mt-4 mb-1">
                            Disaster Recovery Services
                        </span>
                        <a href="">Disaster Recovery Management</a>
                    </div>
                    <div className="col-lg-3 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                            Network Services
                        </span>
                        <a href="">SD-WAN Optimazation</a>
                        <a href="">Proxy Severs</a>
                        <a href="">DNS</a>
                        <a href="">Cloud Platform Services</a>
                        <a href="">Wireless Networks</a>
                        <a href="">Cloud Exchange Connectivity</a>
                        <span className="mt-4 mb-1">
                        Collaborative Services 
                        </span>
                        <a href="">Unified Communications</a>
                        <a href="">Customer Support as a Service</a>
                        <a href="">Architectutral Consultancy</a>
                    </div>
                    <div className="col-lg-3 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                           Company
                        </span>
                        <a href="">Home</a>
                        <a href="">Solutions</a>
                        <a href="">About</a>
                        <a href="">Newsroom</a>
                        <a href="">Our Features</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
                <div className="w-100 my-4 text-center">
                    <div className="my-2">Terms  |  Privacy Policies | Report an error | Feedback</div>
                    <Image as={GrFacebookOption} w="24" h="24" p="12"></Image>
                    <div className="my-2">All Rights Reserved © BG Unified Solutions 2020</div>
                </div>
            </div>
        </div>
    );
}

export default footer;