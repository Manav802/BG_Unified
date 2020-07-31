import React from 'react';
import { Button } from '@chakra-ui/core'
import Head from 'next/head'
function main(props) {
    return (
        <div>
            <Head>
                <title>Cloud Logging - BG Unified</title>

                <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">Cloud Logging</div>
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
                            <div className="h4 NunitoSans-ExtraBold">Log central services over the internet                      </div>
                            <div className="h6 mt-4 text-secondary text-dark">Collect, Store, and report the various data and underlying threats. Add the shield to protect your business reputation.
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
                                <div className="h5 NunitoSans-Bold text-dark">Completeness  
                        </div>
                                <p className="text-secondary mt-3"> Fully integrated service performing at scale, can ingest system log data from multiple VMs.
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
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Simplified log management 
                        </div>
                                <p className="text-secondary mt-3">Collecting and managing logs from numerous endpoints, servers and cloud-based resources with ease.Management and monitoring your logs and queries live.
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
                                <div className="h5 NunitoSans-Bold text-dark">Proactive Troubleshooting
                        </div>
                                <p className="text-secondary mt-3">Dynamic field explorer enhancing your troubleshooting experience.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="h2 NunitoSans-ExtraBold col-12 text-center">
                            Ready to try out our <br className="d-none d-md-block" />Cloud logging Services?
                    </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS Cloud logging Services are affordable and dynamically priced.
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