import React from 'react';
import Head from "next/head"
import Link from "next/link"
import FeatureCard from "../../components/cards/FeatureCard"
import {PricingQuote} from "../../components/cards/PricingCard"
import {Image, Button, ButtonGroup, Box, Text, Heading, Collapse, Flex, Icon, Slider, Select, SliderFilledTrack, SliderTrack, SliderThumb} from "@chakra-ui/core"
import Fade from "react-reveal/Fade"
import Service from '../../components/cards/Service';

const verifyNotEmpty = (x, text) => (x > 0 ? x + " " + text : "");

function main(props) {
    
    const [feature, setFeature] = React.useState(1);
    const [tier, setTier] = React.useState(",Storage Tier One SSD Per TB");
    const [type, setType] = React.useState(",Single Copy");
    const [value, setValue] = React.useState(10);
    const handleChange = value => setValue(value);
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
            <div className="container mt-4">
                <div>
                    <Fade className="px-lg-5 px-3" duration={500} bottom>
                        <div className="px-4 py-5 border shadow">
                            <div className="display5 text-center">Storage Options</div>
                            <div className="row px-3 justify-content-center px-lg-4">

                                <div className="col-lg-10 mt-4">
                                    <Slider color="primary" defaultValue={10} min={1} max={200} value={value} onChange={handleChange}>
                                        <SliderTrack h="16px" borderRadius="8px" />
                                        <SliderFilledTrack h="16px" borderRadius="8px" />
                                        <SliderThumb
                                                    className="shadow-md" 
                                                    fontSize="md"
                                                    fontWeight="800"
                                                    width="auto"
                                                    padding="8px"
                                                    height="32px"
                                                    children={value + "TB"} />
                                    </Slider>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Select Tier </div>
                                    <Select onChange={(e)=>{setTier(e.target.value)}} variant="outline"  > 
                                    <option value=",Storage Tier One SSD Per TB">Storage Tier One SSD Per TB</option>
                                    <option value=",Storage Tier Two Per TB">Storage Tier Two Per TB</option>
                                    <option value=",Storage Archive Only Per TB">Storage Archive Only Per TB</option>
                                    </Select>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Select Type </div>
                                    <Select onChange={(e)=>{setType(e.target.value)}} variant="outline"  > 
                                    <option value=",Single Copy">Single Copy</option>
                                    <option value=",Redundant - Two Copies - Single Geo Location">Redundant - Two Copies - Single Geo Location</option>
                                    <option value=",Redundant - Three Copies - Two Geo Locations">Redundant - Three Copies - Two Geo Locations</option>
                                    </Select>
                                </div>

                                <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                    <PricingQuote serviceName="Storage As A Service" serviceDescription={`${verifyNotEmpty(value,"TB Storage")} ${tier} ${type}`} button ></PricingQuote>
                                </div>
                            </div>
                        </div>
                    </Fade>
              <Text mt={12} textAlign={[ 'left','left', 'center' ]} fontSize="xl" className="mb-4">
              Optimizing infrastructural resources is essential to controlling the cost of data growth. The Enterprise Infrastructure Assessment provides in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings are linked to your specific risks and benefits—so you can scale your infra systems to successfully serve the growing needs of your business. We can address your heterogeneous data centre environment and provide data and recommendations across all assets.
              </Text>
          </div>
      </div>
      </div>
      <div className="section bg-dark">
        <Heading size="lg" color="white">Why BGUS Storage Infrastructure?</Heading>
        <Fade duration={500} cascade distance={"30%"} bottom>
        </Fade>
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
                  <Service name="Infrastructure As A Service"></Service>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
                  <Service name="DR As A Service"></Service>
            </div>
            <div className="col-xl-4 col-sm-6 my-2">
                  <Service name="DNS As A Service"></Service>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default main;