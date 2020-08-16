import React from 'react';
import { Image, Box } from "@chakra-ui/core";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import Link from 'next/link';

function footer(props) {
    return (
        <div className="my-3 footer">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-lg-3 my-3">
                        <Image src="/assets/logo.png" className="mb-4" h="64px"></Image>
                        <p className="footer-content">Dynamic Team of Creative People, Innovators and Technical Experts. Your partner for all hosting business solutions and services.</p>
                    </div>
                    <div className="col-lg-9 row">
                        
                    <div className="col-sm-4 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                        IT Infrastructural Services
                        </span>
                        <Link href="/services/infra">
                            <a>Computing Infrastructure</a>
                        </Link>
                        <Link href="/services/storage-unit">
                            <a>Storage Unit</a>
                        </Link>
                        <Link href="/services/cloud-logging">
                            <a>Cloud Logging</a>
                        </Link>
                        <Link href="/services/platform">
                            <a>Cloud Platform Service</a>
                        </Link>
                        <Link href="/services/firewall"><a>Firewalls</a></Link>
                        <Link href="/services/application-dev"><a>Application Development</a></Link>
                        <Link href="/services/web-hosting"><a>Web Hosting Solutions</a></Link>
                        <Link href="/services/backup"><a>Backup Services</a></Link>

                        <span className="mt-4 mb-1">
                            Disaster Recovery Services
                        </span>
                        <Link href="/services/disaster-recovery"><a>Disaster Recovery Management</a></Link>
                    </div>
                    <div className="col-sm-4 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                            Network Services
                        </span>
                        <Link href="/services/sd-wan"><a>SD-WAN Optimization</a></Link>
                        <Link href="/services/proxy-server"><a>Proxy Severs</a></Link>
                        <Link href="/services/dns"><a>DNS</a></Link>
                        <Link href="/services/wireless-networks"><a>Wireless Networks</a></Link>
                        <Link href="/services/cloud-exchange"><a>Cloud Exchange Connectivity</a></Link>
                        <Link href="/services/sip-connectivity"><a>SIP Connectivity</a></Link>
                        <span className="mt-4 mb-1">
                        Collaborative Services 
                        </span>
                        <Link href="/services/ucaas"><a>Unified Communications</a></Link>
                        <Link href="/services/customer-support"><a>Customer Support as a Service</a></Link>
                        <Link href="/services/architectural-consultancy"><a>Architectutral Consultancy</a></Link>
                    </div>
                    <div className="col-sm-4 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                           Company
                        </span>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/solutions"><a>Solutions</a></Link>
                        <Link href="/about"><a>About Us</a></Link>
                        <Link href="/newsroom"><a>Newsroom</a></Link>
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </div>
                    </div>
                </div>
                <div className="w-100 my-4 text-center">
                    <div className="my-2">Terms  |  Privacy Policies | Report an error | Feedback</div>
                    <div className="d-flex justify-content-center">
                        <Box as={GrFacebookOption} className="p-2" size="48px" color="grey.400" />
                        <Box as={GrLinkedinOption} className="p-2" size="48px" color="grey.400" />
                        <Box as={GrTwitter} className="p-2" size="48px" color="grey.400" />
                    </div>
                    <div className="my-2">All Rights Reserved © BG Unified Solutions 2020</div>
                </div>
            </div>
        </div>
    );
}

export default footer;