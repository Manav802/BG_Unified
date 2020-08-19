import React from 'react';
import {
  Image 
} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import { PricingCard, PricingQuote } from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'

function main(props) {

  return (
    <div>
      <Head>
        <title>The cloud service at its best | Cloud Exchange Connectivity as a Service - BG Unified Solutions</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg">
        <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <Fade duration={700} delay={300} bottom>
              <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                <h1 className="display3">Cloud Exchange Connectivity as a Service</h1>
                <h1 className="display3">CXaaS</h1>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="section mt-4">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
                    <Fade duration={500} distance={"30%"} bottom>
                      <div className="row justify-content-center">
                        <div className="col-lg-5 my-3">
                          <PricingCard
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
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
                            icon="/assets/images/icons/theme/firewall_virtual.svg"
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
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
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
                            icon="/assets/images/icons/theme/virtual_cluster.svg"
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
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">The cloud service at its best
                        </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">Cloud Exchange Connectivity as a Service is a fully managed service that allows organizations or firms to set up a secure connection to cloud platforms and services or cloud providers without depending upon internet connectivity. The traffic is not sent over the internet only, rather than the exchange provider connects the exchange’s network directly to the cloud provider’s network.
                        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section py-5">
        <div className="container">
          <div className="row service-benefits">
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom >
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                      Reliable and Secure
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">

                      Complete security on our end, while connecting to these cloud platforms. Improve the experience of users throughout the extended enterprise providing significant benefits and reliability.

                                </div>
                    <Image height="300px" src="/assets/images/illustrations/diversity.svg"></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom >
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">

                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Scalable
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Traffic increased or decreased is handled with no difficulty at all. Avoiding vendor lock-in and meeting data-sovereignty requirements. Geo-redundant for improved performance.
                                </div>
                    <Image height="300px" src="/assets/images/illustrations/data_center.svg"></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom >
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">

                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Integration
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">Simplified usage and integration of new technology services. On-demand communication and connectivity. Multi-cloud operations with a complex structure handled easily.
                                </div>
                    <Image src="/assets/images/illustrations/assets.svg" className="mt-auto" height="250px"></Image>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Fade duration={500} distance={"30%"} bottom>
        <div className="section py-0">
          <div className="container">
            <h1 className="display4 text-center">Why BG Unified Solutions?</h1>
            <div className="row">
              <div className="col-12">
                <p className="lead text-justify">
                  With BG Unified Solutions Cloud Exchange Connectivity as a Service, you get Express Routes to office 365, AWS, Azure. Advanced Solution provides private, seamless, and on-demand connections to many clouds as well as networks. We ensure reliability, integrity, security as well as scalability for our cloud exchange connectivity solutions. Have  DC locations including Equinix SY3, SY4.
                  Determines quality of service level delivered against service level agreements and proactively manages service components to adhere to quality standards as per customer service contracts.We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={400} distance={"30%"} bottom>
        <div className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 p-4 mb-4">
                <h4 className="display5 py-3 text-center">Related Services</h4>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/infra">
                  <a className="no-red">
                    <CardWithIcon icon="/assets/images/icons/monotone/server.svg" title={<div>Infrastructure <br /> as a service </div>} children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM" />
                  </a>
                </Link>
              </div>

              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/storage">
                  <a className="no-red">
                    <CardWithIcon icon="/assets/images/icons/monotone/cloud.svg" title={<div>Storage <br /> as a service </div>} iconBg="#F3A622" children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage." /></a>
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/dns">
                  <a className="no-red">
                    <CardWithIcon icon="/assets/images/icons/monotone/earth_ouline.svg" title={<div>DNS <br /> as a service </div>} iconBg="#5F1CE6" children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching." /></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default main;
