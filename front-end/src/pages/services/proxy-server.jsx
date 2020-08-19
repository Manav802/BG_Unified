import React from 'react';
import {
  Button, Collapse, Image, Select,
  Slider, SliderThumb, SliderTrack, SliderFilledTrack, Flex, FormLabel, Switch
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
        <title>Proxy,Your Way | Proxy as a Service - BG Unified Solutions</title>
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
      <div className="page-header">
        <div className="container">
          <div className="row">
            <Fade duration={700} delay={300} bottom>
              <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                <h1 className="display3 text-white">Proxy as a Service</h1>
                <h1 className="display3 text-white">PRaaS</h1>
              </div>
            </Fade>
                          <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  Just redirect your traffic to our Proxy Service either by DNS or other custom solution to our public Proxy Service and then create a record to reroute your traffic to your application behind the firewall.
                </p>
              </Fade>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Fade duration={500} bottom>
            <div className="row justify-content-center px-lg-5 px-3">
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Single Shared Proxy <br/> <small> (Per Mbps) </small> </div>} icon="/assets/images/icons/theme/stack.svg" featureList={["Single Copy", "Single Location", "Reliable & Secure", "Cost Effective"]}>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Proxy As A Service" serviceDescription="Single Shared Proxy" ></PricingQuote>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center"> Cluster Shared Proxy <br/> <small> (Per Mbps) </small> </div>} icon="/assets/images/icons/theme/work.svg" featureList={["Multiple Copies", "Single Location", "Reliable & Secure", "Cost Effective"]}>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Proxy As A Service" serviceDescription="Cluster Shared Proxy" ></PricingQuote>
                </PricingCard>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">Proxy, Your Way!
                        </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">Proxy as a Service refers to proxy servers that act as intermediate nodes or connecting points between an end-user and the internet. The main functionality of a Proxy Server is to guide the traffic in a particular network. Proxy as a Service allows you to connect to a different server and provides you with access to web pages, files etc. Proxy servers facilitate administrative, authoritative, security issues in the enterprise world.
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
Firewall
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC</div>
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
                      Network Filtering
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.
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
                      Fast speed with minimum bandwidth usage 
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">Use proxy servers at a faster speed and limiting the bandwidth utilization, by filtering traffic, caching files and web pages accessed. Highly advanced, available and multiple data centre locations.
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
              <div className="col-12 col-md-6">
                <p className="lead text-justify">
                  We ensure complete security for your proxy servers. Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC. We offer varied Proxy Solutions. Network filtering is our main feature, achieved by Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.
                  BG Solutions has gained an excellent reputation in design and implementation of IP technology and significant experience in Proxy services design and implementation for a number of clients and in distributed environments and locations.
              </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="lead text-justify">
                  BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.
                  We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches.
                 We have a ‘can-do’ attitude with an ‘easy to work with’ culture. Our values are based around fresh thinking, delivering on our promises, showing customer respect and making a 100% commitment.
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
                <Link href="/services/dns">
                  <a  className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          DNS <br /> as a service{" "}
                        </div>
                      }
                      iconBg="#F33022"
                      children="Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users."
                    />
                  </a>
                </Link>
              </div>

              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/wireless">
                  <a className="no-red">                  
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Wireless <br /> Networks{" "}
                      </div>
                    }
                    iconBg="#F33022"
                    children="Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508, 2504 and Aruba controllers."
                  /></a>
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/web-hosting">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/earth_ouline.svg"
                      title={
                        <div>
                          Web Hosting <br /> Solutions{" "}
                        </div>
                      }
                      iconBg="#0D5EA5"
                      children="Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required."
                    />
                  </a>
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
