import React from 'react';
import {Button} from '@chakra-ui/core'

import Head from 'next/head'

function UCaaS(props) {
    return (
        <div>
            <Head>
                <title>UCaaS</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                UCaaS (Unified Communications)
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
                        <div className="h5 NunitoSans-ExtraBold"> Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring.
                        </div>
                        <div className="h6 mt-4 text-secondary text-dark">
                        N+N Redundant components fulfilling all Unified Collaboration requirements of your business.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img className="max-height2" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Flexibility / Scalability
                        </div>
                        <p className="text-secondary mt-3">
                        For any of your organization department, our UCaaS offering provides a simplified IT management and a highly scalable platform. Irrespective of the end user, everyone get to access to the latest and the greatest collaboration tools.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5">
                        <img className="max-height2" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Cost Effectiveness
                        </div>
                        <p className="text-secondary mt-3">
                        For your business, we are offering and providing a flat billing structure. It's designed for pay as you go model that shifts your costs from capex to opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one off expenses into your monthly payment.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img className="max-height2" src="/assets/images/Illustrations/Services/StorageBlocks/RealTimeMonitoring.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Wide range of services
                        </div>
                        <p className="text-secondary mt-3">
                        Employees get access to voice and video, voicemail and integrated messaging, instant messaging and presence, web conferencing and desktop collaboration, mobility service. </p>
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
                        BGUS UCaaS Services are affordable and dynamically priced.
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

export default UCaaS;