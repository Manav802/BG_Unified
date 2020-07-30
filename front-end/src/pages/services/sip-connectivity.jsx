import React from 'react';
import {Button} from '@chakra-ui/core'

function Wireless(props) {
    return (
        <div>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                SIP Connectivity 
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
                        <div className="h4 NunitoSans-ExtraBold">
                        SIP As A Service Infrastructure includes more than 15 Cisco Unified border Elements with 1600 SIP channels spanned across multiple DC locations with DUAL Exchange Homing.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img src="/assets/images/vectors/SVG/firewall.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Mobile access
                        </div>
                        <p className="text-secondary mt-3">
                            Multiple data centre locations, allows access to your website anytime, anywhere. Improved operational efficiencies, Reduced communication-related delays and enhanced collaboration.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5">
                        <img src="/assets/images/vectors/SVG/firewall.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                            Other collaborative tools                
                        </div>
                        <p className="text-secondary mt-3">
                            Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint), Interactive and transactional applications such as VMware VDI, and SQL.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img src="/assets/images/vectors/SVG/firewall.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Secure Channels 
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
                        Ready to try out our <br className="d-none d-md-block" /> Service?
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

export default Wireless;