import React from 'react';
import { Button } from '@chakra-ui/core'
import Head from 'next/head'
function main(props) {
    return (
        <div>
            <Head>
                <title>Web Hosting - BG Unified</title>

                <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">
                    Web Hosting                            </div>
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
                            <div className="h4 NunitoSans-ExtraBold"> Dedicated Web Server running APACHE with full redundancy and daily backups
                        </div>
                            <div className="h6 mt-4 text-secondary text-dark">A complete website monitoring is included in the package. Load balancing can also be added as an option if required.
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
                                <div className="h5 NunitoSans-Bold text-dark"> Varied Web Hosting Solutions </div>
                                <p className="text-secondary mt-3"> Wordpress hosting, cloud hosting, dedicated server, AWS cloud, digital ocean cloud, all under one roof. Multiple data centre locations, allows access to your website anytime, anywhere.
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
                                    Sound and Efficient Planning 
                        </div>
                                <p className="text-secondary mt-3">We can help you choose the best path to embrace this transformation at all levels—from your base infrastructure to achieve your strategic vision and goals. Migratory process of your website onto our platform is super easy with fast, secure and reliable hosting.
                        </p>
                            </div>
                        </div>

                    </div>

                    <div className=" row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">Value for money
                        </div>
                                <p className="text-secondary mt-3">
Reduced costs, pay for what you want, no hidden costs and completely transparent process.
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
                            Ready to try out our <br className="d-none d-md-block" />Web hosting Services?
                    </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS Web hosting Services are affordable and dynamically priced.
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