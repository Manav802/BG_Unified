import React from 'react';
import Fade from 'react-reveal/Fade';
import { PricingCard, PricingQuote } from '../../components/cards/PricingCard'

function ProxyPricing(props) {
  return (
        <div id="pricing" className="container">
          <Fade duration={500} bottom>
            <div className="row no-gutters justify-content-center px-lg-2">
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Single Shared Proxy <br/> <small> (Per Mbps) </small> </div>} icon="/assets/images/icons/theme/security.svg" featureList={["Single Copy", "Single Location", "Reliable & Secure", "Cost-Effective"]}>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Proxy As A Service" serviceDescription="Single Shared Proxy" ></PricingQuote>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Cluster Shared Proxy <br/> <small> (Per Mbps) </small> </div>} icon="/assets/images/icons/theme/security.svg" featureList={["Multiple Copies", "Single Location", "Reliable & Secure", "Cost-Effective"]}>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Proxy As A Service" serviceDescription="Cluster Shared Proxy" ></PricingQuote>
                </PricingCard>
              </div>
            </div>
          </Fade>
        </div>
  )
}

export default ProxyPricing;