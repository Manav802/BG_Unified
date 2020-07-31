import React from 'react';
import {Button} from '@chakra-ui/core'

import Head from 'next/head'

function SDWAN(props) {
    return (
        <div>
            <Head>
                <title>WAN Optimization</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                WAN Optimization
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/images/dividers/divider_red_bottom.svg" style={{height:"239px", objectFit:"cover"}} className="w-100 image-flip" alt="" />
        </div>

        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 text-center offset-lg-1">
                        <div className="h4 NunitoSans-ExtraBold"> Next-generation WAN connectivity services.
                        </div>
                        <div className="h6 mt-4 text-secondary text-dark">
                        We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img className="illustration" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Virtual Flexibility
                        </div>
                        <p className="text-secondary mt-3">
                        Industry’s only multi-gigabit virtual WAN optimization solution and the only products that support every major hypervisor. Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint)
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5">
                        <img className="illustration" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Diversifying Applications
                        </div>
                        <p className="text-secondary mt-3">
                        Silver Peak/ Riverbed’s WAN optimization solution works on all applications, regardless of transport protocol or version. Interactive and transactional applications such as VMware VDI, and SQL.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img className="illustration" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Storage Centralization
                        </div>
                        <p className="text-secondary mt-3">
                        Fast, Reliable and Increasingly efficient centralizing servers and storage offers significant cost, management, security and compliance benefits. Detects, isolates, notifies and corrects faults encountered in the network.
                        </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="h2 NunitoSans-ExtraBold col-12 text-center">
                        Ready to try out our <br className="d-none d-md-block" /> WAN Services?
                    </div>
                    <div className="h6 col-12 mt-2 text-secondary text-center">
                        BGUS WAN Services are affordable and dynamically priced.
                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-center">
                        <Button variantColor="primary" size="md">Get a Quote</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="section"></div>
        </div>
    );
}

export default SDWAN;