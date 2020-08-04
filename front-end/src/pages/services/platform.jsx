import React from 'react';
import {Button} from '@chakra-ui/core'

import Head from 'next/head'

function Platform(props) {
    return (
        <div>
            <Head>
                <title>Cloud Platform Service</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                Cloud Platform Service
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
                        <div className="h5 NunitoSans-ExtraBold">End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions.</div>
                        <div className="h6 mt-4 text-secondary text-dark">
                        Huawei 10G core switching offering a high-speed spine and leaf network.
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
                        Load Balancing
                        </div>
                        <p className="text-secondary mt-3">
                        Meet the needs of your business—today and as you grow—with innovative, flexible load balancing. Platform-oriented cloud platforms.

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
                        Easy execution
                        </div>
                        <p className="text-secondary mt-3">
                        Enabling clients to develop run and manage business applications without the need to build authentic software infrastructure.
                        Platform-oriented cloud platforms obtains a higher level of abstraction. 

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
                        Cost-effective scalability
                        </div>
                        <p className="text-secondary mt-3">
                            Scale up your project on demand by purchasing just the amount of hardware or storage you require at affordable prices. Platform as a service cloud providing you with limitless resources of computing.
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
                        Ready to try out our <br className="d-none d-md-block" /> Cloud Platform Services?
                    </div>
                    <div className="h6 col-12 mt-2 text-secondary text-center">
                        BGUS Cloud Services are affordable and dynamically priced.
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

export default Platform;