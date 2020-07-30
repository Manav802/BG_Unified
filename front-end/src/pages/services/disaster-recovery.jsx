import React from 'react';
import {Button} from '@chakra-ui/core'

function Disaster(props) {
    return (
        <div>
            <div className="section pb-0 bg-dark">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center py-5">
                            <div className="display2 text-white">
                                Disaster Recovery Management
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
                        Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies.
                    </div>
                        <div className="h6 mt-4 text-secondary text-dark">
                        Test rollback mechanisms and measure robustness using failure driven tests.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5">
                        <img src="/assets/images/Illustrations/Firewall/deploymentArtboard1.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Simplified Deployment
                        </div>
                        <p className="text-secondary mt-3">
                        An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data centre, SRST will still be able to provide basic inbound and outbound calling facilities.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                    <div className="col-lg-5 p-5">
                        <img src="/assets/images/Illustrations/Firewall/deploymentArtboard1.svg" alt=""/>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center px-5">
                        <div>
                        <div className="h5 NunitoSans-Bold text-dark">
                        Non - Disruptive Testing
                        </div>
                        <p className="text-secondary mt-3">
                        We’ve got it covered under all circumstances, whether natural calamities, forecasted events, unforecasted events. The time taken to restore normal conditions becomes very less, thanks to our team of experts, who take precautionary measures from the starting.
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
                        Flexible Solutions
                        </div>
                        <p className="text-secondary mt-3">
                        In-place upgrades reduce downtime and maximize operational efficiencies. And you can customize how you intercept, inspect, transform, and direct inbound or outbound application traffic with powerful, flexible iRules.
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

export default Disaster;