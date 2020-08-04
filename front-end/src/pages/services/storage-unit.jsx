import React from 'react';
import { Button } from '@chakra-ui/core'
import Head from 'next/head'
function main(props) {
    return (
        <div>
            <Head>
                <title>DNS - BG Unified</title>

                <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">
Storage Blocks                            </div>
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
                        <div className="h4 NunitoSans-ExtraBold"> Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management
                        </div>
                        <div className="h6 mt-4 text-secondary text-dark">The storage infrastructure includes more than 900TB of Teir1/Teir2/Teir3 storage.
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
                                <div className="h5 NunitoSans-Bold text-dark">Low pricing
                        </div>
                                <p className="text-secondary mt-3"> Pay only for the storage you actually require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.
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
                                    Efficient and Agile

                        </div>
                                <p className="text-secondary mt-3">Boost up your operational efficiency and improve your organization’s agility. Also, Real-time monitoring of your storage resources
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
                                <div className="h5 NunitoSans-Bold text-dark">Highly available infrastructure 
                        </div>
                                <p className="text-secondary mt-3"> 

                                     Cutting edge SAN array which intelligently uses caching, Solid State DIsks(SSDs), and traditional hard disk spindles. Scaling up or down your storage capability as and when required
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
                            Ready to try out our <br className="d-none d-md-block" />Storage Services?
                    </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS Storage Services are affordable and dynamically priced.
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
