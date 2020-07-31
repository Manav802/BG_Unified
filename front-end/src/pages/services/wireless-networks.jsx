import React from 'react';
import {Button} from '@chakra-ui/core'
import Head from 'next/head'

function Wireless(props) {
    return (
        
        <div>
            <Head>
                <title>Wireless Networks</title>
            </Head>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                Wireless Networks
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

                        <div className="h4 NunitoSans-ExtraBold">Cisco Wi-Fi and Aruba Wi-Fi. </div>
                         <div className="h6 mt-4 text-secondary text-dark">
                        The hosted wireless solution includes multiple clusters as well as isolated Data centers of Cisco WLC 5508, 2504 and Aruba controllers.
                        </div> 

                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5 illustration">
                        <img src="/assets/images/Illustrations/Services/Firewall/deployment.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Clustering of Devices
                        </div>
                        <p className="text-secondary mt-3">
                        Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, so as to support Wireless Phones in any environment.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5 illustration">
                        <img src="/assets/images/Illustrations/Services/Firewall/deployment.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Unified and Efficient                        </div>
                        <p className="text-secondary mt-3">
                        Improved operational efficiencies, Reduced communication-related delays and enhanced collaboration.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 p-5 illustration">
                        <img src="/assets/images/Illustrations/Services/Firewall/deployment.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Network Security
                        </div>
                        <p className="text-secondary mt-3">
                        Ensuring completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.
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
                        Ready to try out our <br className="d-none d-md-block" />Wireless Network Services?
                    </div>
                    <div className="h6 col-12 mt-2 text-secondary text-center">
                        BGUS Wireless Network Services are affordable and dynamically priced.
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

export default Wireless;