import React from 'react';
import { Button } from '@chakra-ui/core'

import Head from 'next/head'

function infra(props) {
    return (
        <div>
            <Head>
                <title>Computing Infrastructure</title>
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">
                                    Computing Infrastructure
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/dividers/divider_red_bottom.svg" style={{ height: "239px", objectFit: "cover" }} className="w-100 image-flip" alt="" />
            </div>

            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-center offset-lg-1">
                            <div className="h4 NunitoSans-ExtraBold">Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management.
                        </div>
                            <div className="h6 mt-4 text-secondary text-dark">
                                Infrastructure includes more than 10000 Cores CPU, 10TB RAM.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 p-5">
                            <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt="" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Geographical Redundant Storage
                        </div>
                                <p className="text-secondary mt-3">
                                    over 50 geographically dispersed sites hosting 250+ separate pieces of infrastructure. Geographically sound, redundant, quick and efficient increasing your backup by 60%.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt="" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Scalability and Management
                                </div>
                                <p className="text-secondary mt-3">
                                    Easily adjust parameters based on deploying your application, physically, virtually or in the cloud. Security and Network Management, Data Centre, Management, IT Service Management, Cloud Computing.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-5 p-5">
                            <img style={{maxHeight:"320px"}} src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt="" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Higher Asset Utilization with Simplicity
                                </div>
                                <p className="text-secondary mt-3">
                                    Implement a flexible architecture designed specifically to meet your unique needs. F5 load balancing solutions ensure scaling your critical applications.
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
                            Ready to try out our <br className="d-none d-md-block" /> UCaaS Services?
                        </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS Servers are affordable and dynamically priced.
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

export default infra;