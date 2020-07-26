import React from 'react';
import WhatsNew from './whatsnew'
import {Image,
    Box,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,} from '@chakra-ui/core'

function header(props) {
    const initRef = React.useRef();
    return (
        <div className="header bg-white shadow-sm">
            <div className="container">
                <div className="p-3 d-flex justify-content-between align-items-center layer-4">
                    <div className="d-flex align-items-center">
                        <Image src="/assets/logo.png" className="mr-3"></Image>
                        <Popover
                    closeOnBlur={true}
                    placement="bottom"
                    usePortal
                    initialFocusRef={initRef}
                    >
                    {({ isOpen, onClose }) => (
                        <>
                        <PopoverTrigger>
                            <Button className="text-dark hover-effect" variantColor="white" rightIcon="chevron-down">Solutions</Button>
                        </PopoverTrigger>
                        <PopoverContent className="header-popover">
                            <Box>
                                <div className="container pb-5 pt-3">
                                    <div className="row">
                                    <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                            <div className="display6 mt-2 text-primary text-uppercase">Solutions</div>
                                            <div className="NunitoSans-ExtraBold text-secondary mt-2">We cover almost 90% technology domain required by your business.</div>
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
                                                Disaster Recovery Services
                                            </span>
                                            <a href="">Disaster Recovery Management</a>
                                            
                                        </div>
                                        <div className="col-lg-3 d-flex flex-column footer-content">
                                        <span className="mt-4 mb-1">
                                            Collaborative Services 
                                            </span>
                                            <a href="">Unified Communications</a>
                                            <a href="">Customer Support as a Service</a>
                                            <a href="">Architectutral Consultancy</a>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </PopoverContent>
                        </>
                    )}
                    </Popover>
                    <Popover
                    closeOnBlur={true}
                    placement="bottom"
                    usePortal
                    initialFocusRef={initRef}
                    >
                    {({ isOpen, onClose }) => (
                        <>
                        <PopoverTrigger>
                            <Button className="text-dark hover-effect" variantColor="white" rightIcon="chevron-down">Company</Button>
                        </PopoverTrigger>
                        <PopoverContent className="header-popover">
                            <Box>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                            <div className="display6 mt-2 text-primary text-uppercase">Company</div>
                                            <div className="NunitoSans-ExtraBold text-secondary mt-2">Get the latest resources and updates from our company here.</div>
                                        </div>
                                        <div className="col-lg-3 py-4 d-flex flex-column header-list">
                                            <a href="">About Us</a>
                                            <a href="">Newsroom</a>
                                            <a href="">Blogs</a>
                                            <a href="">Contact Us</a>
                                        </div>
                                        <div className="col-lg-6 py-4 pr-5 d-flex flex-column header-list">
                                            <h5 className="text-primary display6">What's New</h5>
                                                <WhatsNew></WhatsNew>
                                                <WhatsNew></WhatsNew>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </PopoverContent>
                        </>
                    )}
                    </Popover>
                    <Button className="text-dark hover-effect" variantColor="white">Our Features</Button>
                    </div>
                    <div>
                    
                    <Button className="mx-3" variant="solid" variantColor="primary">Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;