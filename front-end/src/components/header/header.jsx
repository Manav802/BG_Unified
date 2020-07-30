import React from 'react';
import WhatsNew from './whatsnew'
import {Image,
Box,
Button,
Icon,
Popover,
PopoverTrigger,
PopoverContent,
} from '@chakra-ui/core'

import Link from 'next/link';

function header(props) {
const initRef = React.useRef();
return (
<div className="header bg-white shadow-sm">
    <div className="container">
        <div className="p-3 d-flex justify-content-between align-items-center layer-4">
            <div className="d-flex align-items-center">
                <a href="/">
                <Image src="/assets/logo.png" className="mr-3"></Image>
                </a>
                <Popover closeOnBlur={true} placement="bottom" usePortal initialFocusRef={initRef}>
                    {({ isOpen, onClose }) => (
                    <>
                        <PopoverTrigger>
                            <Button className="text-dark hover-effect" variantColor="white"
                                rightIcon="chevron-down">Solutions</Button>
                        </PopoverTrigger>
                        <PopoverContent className="header-popover">
                            <Box>
                                <div className="container pb-5 pt-3">
                                    <div className="row">
                                        <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                            <div className="display6 mt-2 text-primary text-uppercase">Solutions</div>
                                            <div className="NunitoSans-ExtraBold text-secondary mt-2">We cover almost
                                                90% technology domain required by your business.</div>
                                        </div>
                                        <div className="col-lg-3 d-flex flex-column footer-content">
                                            <span className="mt-4 mb-1">
                                                IT Infrastructural Services
                                            </span>
                                            <Link href="/services/infra">
                                            <a>Computing Infrastructure</a>
                                            </Link>
                                            <Link href="/services/storage">
                                            <a>Storage Unit</a>
                                            </Link>
                                            <Link href="/services/cloud-logging">
                                            <a>Cloud Logging</a>
                                            </Link>
                                            <Link href="/services/platform">
                                            <a>Cloud Platform Service</a>
                                            </Link>
                                            <Link href="/services/backup">
                                            <a>Data backup</a>
                                            </Link>
                                            <Link href="/services/firewall"><a>Firewalls</a></Link>
                                            <Link href="/services/application-dev"><a>Application Development</a></Link>
                                            <Link href="/services/hosting"><a>Web Hosting Solutions</a></Link>


                                        </div>
                                        <div className="col-lg-3 d-flex flex-column footer-content">
                                            <span className="mt-4 mb-1">
                                                Network Services
                                            </span>

                                            <Link href="/services/sd-wan"><a>SD-WAN Optimazation</a></Link>
                                            <Link href="/services/proxy"><a>Proxy Severs</a></Link>
                                            <Link href="/services/dns"><a>DNS</a></Link>
                                            <Link href="/services/platform"><a>Cloud Platform Services</a></Link>
                                            <Link href="/services/wireless-networks"><a>Wireless Networks</a></Link>
                                            <Link href="/services/cloud-exchange"><a>Cloud Exchange Connectivity</a></Link>
                                            <Link href="/services/sip-connectivity"><a>SIP Connectivity</a>
                                            </Link>
                                            <span className="mt-4 mb-1">
                                                Disaster Recovery Services
                                            </span>
                                            <Link href="/services/disaster-recovery"><a>Disaster Recovery Management</a></Link>

                                        </div>
                                        <div className="col-lg-3 d-flex flex-column footer-content">
                                            <span className="mt-4 mb-1">
                                                Collaborative Services
                                            </span>
                                            <Link href="/services/ucaas"><a>Unified Communications</a></Link>
                                            <Link href="/services/customer-support"><a>Customer Support as a Service</a>
                                            </Link>
                                            <Link href="/services/architectural-consultancy"><a>Architectutral
                                                Consultancy</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </PopoverContent>
                    </>
                    )}
                </Popover>
                <Popover closeOnBlur={true} placement="bottom" usePortal initialFocusRef={initRef}>
                    {({ isOpen, onClose }) => (
                    <>
                        <PopoverTrigger>
                            <Button className="text-dark hover-effect" variantColor="white"
                                rightIcon="chevron-down">Company</Button>
                        </PopoverTrigger>
                        <PopoverContent className="header-popover">
                            <Box>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                            <div className="display6 mt-2 text-primary text-uppercase">Company</div>
                                            <div className="NunitoSans-ExtraBold text-secondary mt-2">Get the latest
                                                resources and updates from our company here.</div>
                                        </div>
                                        <div className="col-lg-3 py-4 d-flex flex-column header-list">
                                            <Link href="/about"><a>About Us</a></Link>
                                            <Link href="/newsroom"><a>Newsroom</a></Link>
                                            <Link href="/solutions"><a> Solutions</a></Link>
                                            <Link href="/contact"><a>Contact Us</a></Link>
                                        </div>
                                        <div className="col-lg-6 py-4 pr-5 d-flex flex-column header-list">
                                            <h5 className="text-primary display6">What's New</h5>
                                            <a target="_blank"
                                                href="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw">
                                                <WhatsNew
                                                    image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg"
                                                    heading="BG Unified Solutions got nominated for two awards"
                                                    text="BG Unified Solutions got nomination ...">
                                                </WhatsNew>
                                            </a>
                                            <a target="_blank"
                                                        href="/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1">
                                                <WhatsNew
                                                            image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg"
                                                            heading="Successfull upgradation Mega Cisco Call Manager"
                                                            text="BG Unified Solutions team have successfully upgraded its  ...">
                                                </WhatsNew>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </PopoverContent>
                    </>
                    )}
                </Popover>
                <Link href="/features">
                <Button className="text-dark hover-effect" variantColor="white">Our Features</Button>
                </Link>
            </div>
            <div>
                <span className="NunitoSans-SemiBold p-2">Call Us <b>1300 00 BGUS</b></span>
                <span className="p-2 rounded-8 hover-effect">
                    <Icon name="search" size="16px"></Icon>
                </span>
                <Link href="/contact">
                <Button className="mx-3" variant="solid" variantColor="primary">Contact Us</Button>
                </Link>
            </div>
        </div>
    </div>
</div>
);
}

export default header;