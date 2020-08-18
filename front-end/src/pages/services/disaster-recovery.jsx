import React from 'react';
import {
  Button, Collapse, Image,
  Slider, SliderThumb, SliderTrack, SliderFilledTrack,NumberInput,NumberInputField,
  NumberInputStepper,NumberDecrementStepper,NumberIncrementStepper
} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import { PricingCard, PricingQuote } from '../../components/cards/PricingCard'
import Head from 'next/head'
import Link from 'next/link'

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

function main(props) {
  const [show, setShow] = React.useState(false);
  const [plan, setPlan] = React.useState("");
  const openControls = (name) => {setShow(true); setPlan(name)};
  const [value, setValue] = React.useState(1);
  const handleChange = value => setValue(value);
  const [veeam, setVeeam] = React.useState(0);
  const [IP,setIP] = React.useState(0);
  return (
    <div>
      <Head>
        <title>Always stay aware and prepared | DR as a Service - BG Unified Solutions</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg">
        <img className="w-100" src="/assets/images/backgrounds/dots_circle.jpg" />
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <Fade duration={700} delay={300} bottom>
              <div className="col-lg-6 offset-lg-3 text-center justify-content-center">
                <h1 className="display3">DR as a Service</h1>
                <h1 className="display3">DRaaS</h1>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Fade duration={500} bottom>
            <div className="row justify-content-center px-lg-5 px-3">
              <div className="col-lg-4 my-3">
                <PricingCard title="Two Geo Locations" icon="/assets/images/icons/theme/stack.svg" featureList={["Includes One Yearly Drill"]}>
                  <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls("Two Geo Locations")}}>View Options</Button>
                </PricingCard>
              </div>
              <div className="col-lg-4 my-3">
                <PricingCard title="Three Geo Locations" icon="/assets/images/icons/theme/stack.svg" featureList={["Includes One Yearly Drill"]}>
                  <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls("Three Geo Locations")}}>View Options</Button>
                </PricingCard>
              </div>
            </div>
          </Fade>
          <div>
          <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
              <div className="px-4 py-5 border">
                <div className="display5 text-center">{plan}</div>
                <div className="row justify-content-center px-3">
                  <div className="col-lg-11 mt-4">
                    <div className="h6">No. of VMs</div>
                    <Slider color="primary" my="24px" max={20} defaultValue={1} value={value} onChange={handleChange}>
                      <SliderTrack h="16px" borderRadius="8px" />
                      <SliderFilledTrack h="16px" borderRadius="8px" />
                      <SliderThumb
                        className="shadow-md"
                        fontSize="md"
                        fontWeight="800"
                        width="auto"
                        padding="8px"
                        height="32px"
                        children={value} />
                    </Slider>
                  </div>
                  <div className="col-lg-5 mt-2 mb-4">
                      <div className="h6">VEEAMs</div>
                      <NumberInput
                      onChange={(value) => setVeeam(value)}
                      defaultValue={0}
                      min={0}
                      max={20}
                      >
                      <NumberInputField className="bg-light" />
                      <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                      </NumberInputStepper>
                      </NumberInput>
                  </div>
                  <div className="col-lg-5 mt-2 mb-4">
                      <div className="h6">Public IPs</div>
                      <NumberInput
                      onChange={(value) => setIP(value)}
                      defaultValue={0}
                      min={0}
                      max={20}
                      >
                      <NumberInputField className="bg-light" />
                      <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                      </NumberInputStepper>
                      </NumberInput>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center mt-3">
                    <PricingQuote serviceName="DR As A Service" serviceDescription={`${plan} ${verifyNotEmpty(value,"VMs")} ${verifyNotEmpty(veeam,"VEEAM")} ${verifyNotEmpty(IP,"Public IPs")} `} button ></PricingQuote>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">Always stay aware and prepared
                        </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Disaster Recovery Management as a Service is basically preparing your organization for a failure or situation that you are unable to predict. The situations may be a catastrophic failure, a natural calamity, data being lost, server not functioning properly, data centres being compromised and so on. Predicting the most unlikely events that may cause data loss, data breach and hinder the functioning of an organization, finding and installing solutions to these disasters beforehand is what Disaster Recovery Management is all about.
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
                      Simplified Deployment
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data centre, SRST will still be able to provide basic inbound and outbound calling facilities.</div>
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
                      Fast and easy Deployment
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      We’ve got it covered under all circumstances, whether natural calamities, forecasted events, unforecasted events. The time taken to restore normal conditions becomes very less, thanks to our team of experts, who take precautionary measures from the starting.</div>
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
                      Flexible Solutions
                                </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      In-place upgrades reduce downtime and maximize operational efficiencies. And you can customize how you intercept, inspect, transform, and direct inbound or outbound application traffic with powerful, flexible iRules.
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
                  As experts in a wide range of technologies, our focus is to provide competitive and affordable end-to-end solutions to our clients. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, cost containment and lower risk.
                  Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms and measure robustness using failure driven tests.
                  Monitors and measures various aspects of the network environment so that overall performance can be maintained and optimised.
              </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="lead text-justify">
                  Configures network devices, performs inventory management and software management. Determines the quality of service level delivered against service level agreements and proactively manages service components to adhere to quality standards as per
                  customer service contracts. Our flexible IT services portfolio can easily be aligned with your specific requirements, situation and objectives. Our clients trust BG Unified Solutions as a long-term IT partner to provide a one-stop-shop for all their core infrastructure needs across data, voice and carrier services.
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
