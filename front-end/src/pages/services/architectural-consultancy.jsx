import React from 'react';
import {Button} from '@chakra-ui/core'

import Head from 'next/head'

function Arch(props) {
    return (
        <div>
            <Head>
                <title>Architectural Consultancy</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                Architectural Consultancy
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
                        <div className="h5 NunitoSans-ExtraBold"> BG Unified Solution has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings, define future state architecture.</div>
                        <div className="px-5 h6 mt-4 text-secondary text-dark">
                        Whatever be the technology stack(s) that your enterprise has adopted, we can help you future-proof it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Performance Optimized
                        </div>
                        <p className="text-secondary mt-3">
                        Monitors and measures various aspects of network environment so that overall performance can be maintained and optimised
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5">
                        <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Configuration Management
                        </div>
                        <p className="text-secondary mt-3">
                        Configures network devices, performs inventory management and software management. Local end-market support services and Local language capabilities.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Wide Expert Range
                        </div>
                        <p className="text-secondary mt-3">
                        Weather System Architecture, Technology Roadmap, or optimization solutions for your business, we’ve got it all covered. Customized and tailor solutions to meet client needs
                        </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="h3 NunitoSans-ExtraBold col-12 text-center">
                        Ready to try out our <br className="d-none d-md-block" />Architectural Consultancy Services?
                    </div>
                    <div className="h6 col-12 mt-2 text-secondary text-center">
                        BGUS Services are affordable and dynamically priced.
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

export default Arch;