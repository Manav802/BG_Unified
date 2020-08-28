import React from 'react';
import Head from "next/head"
import Link from "next/link"
import FeatureCard from "../../components/cards/FeatureCard"
import CardWithIcon from "../../components/cards/CardWithIcon"
import Typewriter from "typewriter-effect"
import {Image, Button, ButtonGroup, Box, Text, Heading, Collapse, Flex, Icon} from "@chakra-ui/core"
import Fade from "react-reveal/Fade"

function main(props) {
    
    const [feature, setFeature] = React.useState(1);

    return (
        <div>
            <Head>
                <title>Storage As A Service | BG Unified Solutions</title>
            </Head>
            
            <Box py="5rem" className="bg-dark page-header position-relative">
                    <Image
                    opacity=".3"
                    className="bg-image"
                    src="/assets/images/backgrounds/domainhosting.jpg"
                    />
                <div className="container">
                <div className="row">
                    <div className="col-12 text-center justify-content-center">
                    <Fade duration={700} delay={100} bottom>
                    <Box fontSize={["40px", "48px", "64px"]} className="display2 text-white">Storage As A Service (StaaS)</Box>
                    </Fade>

                    <Fade duration={700} delay={300} bottom>
                        <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                            Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                        </p>
                    </Fade>
                    <Fade duration={700} delay={500} bottom>
                        <ButtonGroup className="mt-3" spacing="16px">
                        <Button onClick={() => {
                            window.scrollTo(0, document.getElementById("pricing").offsetTop - 80)
                        }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Explore Now</Button>
                        <Link href="/contact"><Button variant="outline" _hover={{color:"black", bg:"white"}} size="lg">Contact Sales</Button></Link>
                        </ButtonGroup>
                    </Fade>
                    </div>
                </div>
                </div>
            </Box>
            <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <Box fontSize={["34px","38px"]} justifyContent="center" className="d-flex flex-lg-row flex-column text-center h5 NunitoSans-ExtraBold">
                <Typewriter
                  options={{
                    strings: ['Deploy', 'Store', 'Maintain'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                 your data with our security and reliability
              </Box>
              
              <Text textAlign={[ 'left','left', 'center' ]} fontSize="xl" className="mb-4">
              Optimizing infrastructural resources is essential to controlling the cost of data growth. The Enterprise Infrastructure Assessment provides in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings are linked to your specific risks and benefits—so you can scale your infra systems to successfully serve the growing needs of your business. We can address your heterogeneous data centre environment and provide data and recommendations across all assets.
              </Text>

              <Fade duration={500} cascade distance={"30%"} bottom>
                  <div className="row">
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Scale Up on Demand"
                        icon="/assets/images/icons/color/ui.svg"
                      >
                        With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements.
                        Enjoy the freedom to scale up your infrastructure as and when required.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Stay Agile"
                        icon="/assets/images/icons/color/agile.svg"
                      >
                        Resources are not bundled together and there is surely no standard server size.
                        Combine long-term subscriptions for predictible workloads and on-time delivery with regular updates.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Select from Global Locations"
                        icon="/assets/images/icons/color/globe.svg"
                      >
                        Choose the most appropriate and most suitable framework to run your cloud infrastructure. Give your customers the pleasure to enjoy low latency and faster loading speeds.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Rely on Excellent Support"
                        icon="/assets/images/icons/color/headphones.svg"
                      >
                        BGUS's friendly and skilled customer support service is available24X7X365
                      with very less response time. Our policies ensure rapid and satisfactory resolution of issues.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Run Your Apps Unmodified"
                        icon="/assets/images/icons/color/api.svg"
                      >
                        Use our seamless live migration tool to get you up and running in the cloud without any modifications to your existing infrastructure.
                    </FeatureCard>
                    </div>
                    <div className="col-xl-4 p-2 col-sm-6 col-12 ">
                      <FeatureCard left
                        title="Experience No Vendor Lock-In"
                        icon="/assets/images/icons/color/fix.svg"
                      >
                        At BGUS you are able to develop or deploy your application in the cloud without being forced to use any vendor-specific tools.
                    </FeatureCard>
                    </div>
                  </div>
                </Fade>
            </div>
          </div>
      </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">10,000+</Heading>
                <Heading size="md">Core CPUs</Heading>
            </div>
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">9+</Heading>
                <Heading size="md">TBs of Memory</Heading>
            </div>
            <div className="col-md-4 text-center my-3">
                <Heading size="xl" color="primary.500" fontFamily="Nexa Bold">250+</Heading>
                <Heading size="md">Running Websites</Heading>
            </div>
            <div className="col-12 my-3">
              <Text fontSize="xl" className="text-justify">
                With BG Unified Solutions Infrastructure as a Service, not only
                do you pay only for the data storage you use when you use it but
                we provide you with a geographical redundant storage
                infrastructure and ready access to experts in Infrastructure
                Technologies who will be eager to understand your storage
                requirements. Initial setup is very quick, adding or removing
                capacity is even faster and without any downtime.
              </Text>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center my-4">
                <Flex justify="space-between" onClick={()=> {setFeature(1)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Choice between On-Premises & Cloud</Heading>
                    {feature !==1 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                    
                </Flex>
                <Collapse p={2} isOpen={feature === 1}>
                  On-premise or cloud-based, that helps secure your IT
                  environment quickly. The mainstay of Enterprise Security.
                  Blocks malicious traffic and allows legitimate traffic to
                  flow without any hindrance.
                </Collapse>
                <Flex justify="space-between" onClick={()=> {setFeature(2)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Fast and easy Deployment</Heading>
                    {feature !==2 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                </Flex>
                <Collapse p={2} isOpen={feature === 2}>
                  Rapid evolvement, easily deployable with tremendous speed.
                  Proven deployment methodology that integrates and extends
                  your existing security infrastructure without capex.  
                </Collapse>
                <Flex justify="space-between" onClick={()=> {setFeature(3)}} className="hover-effect rounded-8" mt={3} p={2} w="100%">
                    <Heading size="md">Advanced Technology Stack</Heading>
                    {feature !==3 ? <Icon name="add" my="8px" mr="4px"></Icon> : "" }
                </Flex>
                <Collapse p={2} isOpen={feature === 3}>
                    Advanced Malware Protection, Anti-Virus Detection, Uniform
                    resource Locator Filtering, User-Based Policy and Advanced
                    Logging facilities, SSL Virtual Private Network’s included. 
                </Collapse>
                
            </div>
            <div className="col-lg-6 my-4 d-none d-lg-block">
                {feature === 1 && <Image src="/assets/images/illustrations/Varied_Web_Hosting_Solutions.svg" className="m-auto" height="350px"></Image>} 
                {feature === 2 && <Image src="/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg" className="m-auto" height="350px"></Image>} 
                {feature === 3 && <Image src="/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg" className="m-auto" height="350px"></Image>} 
            </div>
          </div>
        </div>
      </div>
      <div className="section pt-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 p-3">
              <h4 className="display5 py-3 text-center">Related Services</h4>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
              <Link href="/services/storage">
                <CardWithIcon
                  icon="/assets/images/icons/monotone/cloud.svg"
                  title={
                    <div>
                      Storage <br /> As A service{" "}
                    </div>
                  }
                  iconBg="#F3A622"
                  children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage."
                />
              </Link>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
              <Link href="/services/dns">
                <CardWithIcon
                  icon="/assets/images/icons/monotone/earth_ouline.svg"
                  title={
                    <div>
                      DNS <br /> As A service{" "}
                    </div>
                  }
                  iconBg="#5F1CE6"
                  children="Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability."
                />
              </Link>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
            <Link href="/services/platform">
                <a className="no-red">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/dashboard.svg"
                    title={
                      <div>
                        Platform <br /> As A service{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions."
                  />
                </a>
              </Link>
              </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default main;