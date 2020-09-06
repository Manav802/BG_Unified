import React from "react";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


function CloudExchangePricing(props) {
    return (    
                <div id="pricing" className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Fade duration={500} distance={"30%"} bottom>
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <PricingCard
                                            icon="/assets/images/icons/theme/cloud_exchange.svg"
                                            title="VC Bandwidth 100M"
                                        >
                                            <PricingQuote
                                                title="1G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 100M, 1G Port"
                                            ></PricingQuote>
                                            <PricingQuote
                                                title="10G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 100M, 10G Port"
                                            ></PricingQuote>
                                        </PricingCard>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <PricingCard
                                            icon="/assets/images/icons/theme/cloud_exchange.svg"
                                            title="VC Bandwidth 200M"
                                        >
                                            <PricingQuote
                                                title="1G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 200M, 1G Port"
                                            ></PricingQuote>
                                            <PricingQuote
                                                title="10G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 200M, 10G Port"
                                            ></PricingQuote>
                                        </PricingCard>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 my-3">
                                        <PricingCard
                                            icon="/assets/images/icons/theme/cloud_exchange.svg"
                                            title="VC Bandwidth 500M"
                                        >
                                            <PricingQuote
                                                title="1G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 500M, 1G Port"
                                            ></PricingQuote>
                                            <PricingQuote
                                                title="10G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 500M, 10G Port"
                                            ></PricingQuote>
                                        </PricingCard>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <PricingCard
                                            icon="/assets/images/icons/theme/cloud_exchange.svg"
                                            title="VC Bandwidth 1G"
                                        >
                                            <PricingQuote
                                                title="1G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 1G, 1G Port"
                                            ></PricingQuote>
                                            <PricingQuote
                                                title="10G Port"
                                                serviceName="CEX As A Service"
                                                serviceDescription="VC Bandwidth 1G, 10G Port"
                                            ></PricingQuote>
                                        </PricingCard>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
    )
}

export default CloudExchangePricing;