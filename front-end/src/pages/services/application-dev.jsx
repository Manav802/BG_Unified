import React from 'react';
import {Button} from '@chakra-ui/core'

import Head from 'next/head'

function ApplicationDev(props) {
    return (
        <div>
            <Head>
                <title>Application Development and Scalability</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                Application Development and Scalability
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
                        <div className="h4 NunitoSans-ExtraBold">BG Unified Solutions provides services in the area of Web, Mobile and Enterprise Application Development.
                        </div>
                        <div className="h6 mt-4 text-secondary text-dark">
                        Our team of technical and functional experts can help you in new Application Development, Modernizing and Supporting existing applications.
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
                        Platform Independence
                        </div>
                        <p className="text-secondary mt-3">
                        Build applications for a range of digital platforms like mobile, desktop, smartwatch, AR etc.
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
                        Client - specific
                        </div>
                        <p className="text-secondary mt-3">
                        Highly talented team of professionals and technology experts, to build customized solutions as per the client’s needs.
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
                        Flexibility and Scalability
                        </div>
                        <p className="text-secondary mt-3">
                        Digital transformation, App modernization and upgradation, and Application Integration Services. Agile software development model followed to provide better results.
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
                        Ready to try out our <br className="d-none d-md-block" /> App Development Services?
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

export default ApplicationDev;