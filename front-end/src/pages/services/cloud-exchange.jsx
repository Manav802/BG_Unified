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
      <div className="position-absolute w-100 overflow-hidden background-svg-dns">
        <div className="w-100 image">
          <img
            className="w-100 dns"
            src="/assets/images/backgrounds/domainhosting.jpg"
          />
        </div>
        <div className="w-100 divider" />
      </div>
      <div className="page-header mt-3">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
            <Fade duration={700} delay={300} bottom>
                <h1 className="display3 text-white">Cloud Exchange Connectivity as a Service</h1>
                <h1 className="display3 text-white">CXaaS</h1>
              
            </Fade>
            <Fade duration={700} delay={500} bottom>
            <p className="display5 text-white">Express Routes to office 365, AWS, Azure</p> 
            </Fade>
            </div> 
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
                <Link href="/services/contact-center">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Contact Center <br /> As A Service{" "}
                        </div>
                      }
                      iconBg="#0D5EA5"
                      children="BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus."
                    />
                  </a>
                </Link>
              </div>

              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/cloud-logging">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Cloud <br /> Logging As A Service{" "}
                        </div>
                      }
                      iconBg="#19C741"
                      children="Log central services over the internet. Collect, Store, and report the various data and underlying threats. Add the shield to protect your business reputation."
                    />
                  </a>                
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/platform">
                  <a className="no-red"><CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Cloud Platform <br /> service{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network."
                  /></a>
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
