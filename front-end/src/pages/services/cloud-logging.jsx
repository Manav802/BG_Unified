import React from 'react';
import {
  Image,
  Slider, SliderThumb, SliderTrack, SliderFilledTrack
} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import { PricingCard, PricingQuote } from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + text : "");

function main(props) {
  const [logs1,setLogs1] = React.useState(0);
  const [logs2,setLogs2] = React.useState(0);
  const [logs3,setLogs3] = React.useState(0);
  return (
    <div>
      <Head>
        <title>Cloud computing is the future | 
        Cloud Logging as a Service
 - BG Unified Solutions</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg">
        <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <Fade duration={700} delay={300} bottom>
              <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                <h1 className="display3">Cloud Logging as a Service</h1>
                <h1 className="display3">CLaaS</h1>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Fade duration={500} bottom>
            <div className="row px-lg-5 px-3">
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center">Single Node<br/>Single DC</div>} icon="/assets/images/icons/theme/stack.svg" featureList={["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"]}>
                <div className=" my-2 NunitoSans-Bold">Extra Logs</div>
                <div className="col-12">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs1}
                                        max={20}
                                        onChange={(value) => {
                                        setLogs1(value);
                                        }}
                                    >
                                        <SliderTrack h="10px" borderRadius="5px" />
                                        <SliderFilledTrack h="10px" borderRadius="5px" />
                                        <SliderThumb
                                        className="shadow"
                                        fontSize="sm"
                                        fontWeight="500"
                                        width="auto"
                                        padding="7px"
                                        height="28px"
                                        children={`${logs1}G`}
                                        />
                                    </Slider>
                                    </div>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Logging As A Service" serviceDescription={`Single Node Single DC ${verifyNotEmpty(logs1,"G Extra Logs")}`} ></PricingQuote>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center">Multiple Nodes<br/>Single DC</div>} icon="/assets/images/icons/theme/stack.svg" featureList={["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"]}>
                <div className=" my-2 NunitoSans-Bold">Extra Logs</div>
                <div className="col-12">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs2}
                                        max={20}
                                        onChange={(value) => {
                                        setLogs2(value);
                                        }}
                                    >
                                        <SliderTrack h="10px" borderRadius="5px" />
                                        <SliderFilledTrack h="10px" borderRadius="5px" />
                                        <SliderThumb
                                        className="shadow"
                                        fontSize="sm"
                                        fontWeight="500"
                                        width="auto"
                                        padding="7px"
                                        height="28px"
                                        children={`${logs2}G`}
                                        />
                                    </Slider>
                                    </div>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Cloud Logging As A Service" serviceDescription={`Multiple Nodes Single DC ${verifyNotEmpty(logs2,"G Extra Logs")}`} ></PricingQuote>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title={<div className="text-center">Multiple Nodes<br/>Multiple DC</div>} icon="/assets/images/icons/theme/stack.svg" featureList={["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"]}>
                <div className=" my-2 NunitoSans-Bold">Extra Logs</div>
                <div className="col-12">
                                    <Slider
                                        color="primary"
                                        defaultValue={0}
                                        value={logs3}
                                        max={20}
                                        onChange={(value) => {
                                        setLogs3(value);
                                        }}
                                    >
                                        <SliderTrack h="10px" borderRadius="5px" />
                                        <SliderFilledTrack h="10px" borderRadius="5px" />
                                        <SliderThumb
                                        className="shadow"
                                        fontSize="sm"
                                        fontWeight="500"
                                        width="auto"
                                        padding="7px"
                                        height="28px"
                                        children={`${logs3}G`}
                                        />
                                    </Slider>
                                    </div>
                  <PricingQuote buttonStyle="mt-3" button serviceName="Cloud Logging As A Service" serviceDescription={`Multiple Nodes Multiple DC ${verifyNotEmpty(logs3,"G Extra Logs")}`} ></PricingQuote>
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
              <div className="h4 NunitoSans-ExtraBold">Cloud computing is the next future
                        </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">Cloud Logging as a Service is a fully managed service that is performed at scale. CLoud Logging allows ingestion of system log data and applications from numerous VMs, and analyze the data in real-time. The analysis of data is done through logs, which are managed and simplified over the cloud.  
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
                      Completeness 
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Fully integrated service performing at scale, can ingest system log data from multiple VMs. Reduction in need for on-site storage. Download archives on-demand.
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
                      Simplified log management 
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Collecting and managing logs from numerous endpoints, servers and cloud-based resources with ease. Management and monitoring your logs and queries live.
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
                      Proactive Troubleshooting
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">Dynamic field explorer enhancing your troubleshooting experience. Easy troubleshooting in advanced and modern environments, with appropriate tools and resources.
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
                <p className="lead text-justify">With BG Unified Solutions Cloud Logging as a Service, Log central services over the internet. Collect, Store, and report the various data and underlying threats. Add the shield to protect your business reputation. Application and system logs ingestions. With BG Unified Solutions, manage your log in a simplified manner from a thousand of endpoints including servers and cloud-based resources.
                BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.
We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches.
A little buffer would also help with urgent requirements. Boost up your operational efficiency. Improve your organization’s agility. Guaranteed access to a team of experts in different technologies. 
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
