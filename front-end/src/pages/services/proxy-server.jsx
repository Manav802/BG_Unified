import React from 'react';
import { Button } from '@chakra-ui/core'
import Head from 'next/head'
function main(props) {
    return (
        <div>
            <Head>
                <title>Proxy Server - BG Unified</title>

                <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">Proxy Servers
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
                        <div className="h4 NunitoSans-ExtraBold"> With assured low latency and high availability.
                        </div><div className="h6 mt-4 text-secondary text-dark">It is a cost-effective way to make your applications and services available to your users.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">Firewall 
                        </div>
                                <p className="text-secondary mt-3">Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC
</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">Network Filtering  
                        </div>
                                <p className="text-secondary mt-3">Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.

                        </p>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Fast speed with minimum bandwidth usage
                        </div>
                                <p className="text-secondary mt-3">Use proxy servers at a faster speed and limiting the bandwidth utilization, by filtering traffic, caching files and web pages accessed. Highly advanced, available and multiple data centre locations.
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
                            Ready to try out our <br className="d-none d-md-block" /> Proxy Server Services?
                    </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS Proxy Server Services are affordable and dynamically priced.
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

export default main;