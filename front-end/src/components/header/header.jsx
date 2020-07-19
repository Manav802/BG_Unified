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
                                <div className="container">
                                    <div className="row">
                                    <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                            <div className="display6 mt-2 text-primary text-uppercase">Solutions</div>
                                            <div className="NunitoSans-ExtraBold text-secondary mt-2">We cover almost 90% technology domain required by your business.</div>
                                        </div>
                                        <div className="col-lg-3 py-4 d-flex flex-column header-list">
                                            <span className="py-2">Cloud Services</span>
                                            <a href="">Infrastructure</a>
                                            <a href="">Backup & Restore Points</a>
                                            <a href="">Web Hosting</a>
                                            <a href="">Proxy</a>
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
                                            <a href="">Careers</a>
                                            <a href="">Newsroom</a>
                                            <a href="">Blogs</a>
                                            <a href="">Partners</a>
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