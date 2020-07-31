import React from 'react';
import {Button} from '@chakra-ui/core'
import Head from 'next/head'

function Customer(props) {
    return (
        <Head>
            <title>Customer Support</title>
        </Head>
        <div>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                            Customer Support as a Service                            
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
                        <div className="h5 NunitoSans-ExtraBold">
                            BG Unified Solution’s CSaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus.
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
                        Profitable Customer Experience 
                        </div>
                        <p className="text-secondary mt-3">
                        We help organisations to develop and improve communication channels and deliver lasting customer relationships at lower cost. Our objective is to maximize the value of information within an organization whilst minimizing the cost.                        </p>
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
                        Employee Productivity                        
                        </div>
                        <p className="text-secondary mt-3">
                        We assist organisations in improving employee and partner collaboration to deliver greater employee productivity, improved information sharing and knowledge management
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
                        Securing Data
                        </div>
                        <p className="text-secondary mt-3">
                        We help organisations reduce their risks by offering solutions that of creating, sharing and storing the information,  protect, detect and respond to external and internal incidents and threats.
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
                        Ready to try out our <br className="d-none d-md-block" />Customer Support Services?
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

export default Customer;