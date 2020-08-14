import React from 'react';
import {Button,Image, Icon, Box, Tabs, TabList, Tab, TabPanel, TabPanels, Collapse, Slider, SliderThumb, SliderTrack, SliderFilledTrack, FormLabel, Switch, Flex} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import CardWithIcon from "../../components/cards/CardWithIcon"
import {PricingCard, PricingQuote} from "../../components/cards/PricingCard"
import Head from 'next/head'
import Link from 'next/link'

function DNS(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    return (
        <div>
            <Head>
                <title>DNS As A Service</title>
            </Head>
        <div className="position-absolute w-100 overflow-hidden background-svg-dns">
            <div className="w-100 image">
                <img className="w-100 dns" src="/assets/images/backgrounds/domainhosting.jpg" />
            </div>
            <div className="w-100 divider"/>
        </div>
        <div className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
                    <h1 className="display3 text-white">DNS As A Service</h1>
                    <p className="h6 mt-3 text-white" style={{opacity:".7"}}>Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service with assured low latency and high availability.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                    <Tabs align="center">
                        <TabList style={{borderBottomColor:"#ffffff22"}}>
                            <Tab className="py-4 px-5 display6 text-white">Windows</Tab>
                            <Tab className="py-4 px-5 display6 text-white">BIND</Tab>
                        </TabList>

                        <TabPanels>
                        
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"} bottom >
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                                        <PricingCard icon="/assets/images/icons/theme/stack.svg" title="Standard DNS (BlackBox)" featureList={["Includes 5 Zones","Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"]}>
                                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>Get a quote</Button>
                                        </PricingCard>
                                    </div>
                                    <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                                    <PricingCard icon="/assets/images/icons/theme/stack.svg" title="Premium DNS (BlackBox)" featureList={["Includes 5 Zones","Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"]}>
                                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>Get a quote</Button>
                                        </PricingCard>
                                    </div>
                                </div>
                                </Fade>
                            </TabPanel>
                            
                            <TabPanel className="py-2">
                            <Fade duration={500} distance={"30%"}  bottom >
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-sm-6 col-md-6 my-3">
                                        <PricingCard icon="/assets/images/icons/theme/stack.svg" title="Standard DNS (BlackBox)" featureList={["Includes 5 Zones","Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"]}>
                                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>Get a quote</Button>
                                        </PricingCard>
                                    </div>
                                    <div className="col-lg-5 col-sm-6 col-md-6  my-3">
                                    <PricingCard icon="/assets/images/icons/theme/stack.svg" title="Premium DNS (BlackBox)" featureList={["Includes 5 Zones","Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"]}>
                                            <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={openControls}>Get a quote</Button>
                                        </PricingCard>
                                    </div>
                                </div>
                                </Fade>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <div>
                    <Collapse className="px-lg-5 px-3" mt={6} isOpen={show}>
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">Standard DNS</div>
                            <div className="row px-3">
                                
                                <div className="col-lg-12 mt-4">
                                    <div className="h6">Extra Zones</div>
                                    <Slider color="primary" my="24px" max={30} defaultValue={1} value={0}>
                                        <SliderTrack h="16px" borderRadius="8px" />
                                        <SliderFilledTrack h="16px" borderRadius="8px" />
                                        <SliderThumb
                                                    className="shadow-md" 
                                                    fontSize="md"
                                                    fontWeight="800"
                                                    width="auto"
                                                    padding="8px"
                                                    height="32px"
                                                    children={23} />
                                    </Slider>
                                </div>
                                <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                                    <Flex py="12px" justify="center" align="center">
                                        <Switch onChange={(e)=>{setFailOverNode(e.target.checked)}} color="primary" mb={0} id="failOverNode" />
                                        <FormLabel mb={0} ml="12px" htmlFor="fail-over node">Include Redundant DNS</FormLabel>
                                    </Flex>
                                </div>
                                <div className="my-1 col-lg-6 mt-3 d-flex justify-content-between">
                                    <Flex py="12px" justify="center" align="center">
                                        <Switch onChange={(e)=>{setFailOverNode(e.target.checked)}} color="primary" mb={0} id="failOverNode" />
                                        <FormLabel mb={0} ml="12px" htmlFor="fail-over node">Add Daily Backup</FormLabel>
                                    </Flex>
                                </div>
                                <div className="col-lg-12 mt-5 d-flex justify-content-center">
                                <PricingQuote serviceName="DNS As A Service" serviceDescription="Hello" button ></PricingQuote>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <section className="fdb-block section">
            <div className="container">
                <div className="row text-center">
                <div className="col-12">
                    <h1 className="display4">Technologies</h1>
                </div>
                </div>
                <div className="row text-center justify-content-center mt-5">
                <div className="col-12 col-sm-6 col-lg-3">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/analytics.svg" />
                    <h3><strong>Feature One</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/price_tag.svg" />
                    <h3><strong>Feature Two</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/secure.svg" />
                    <h3><strong>Feature Three</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="svg" className="fdb-icon" src="/assets/images/icons/color/stack.svg" />
                    <h3><strong>Feature Four</strong></h3>
                    <p>Duden flows by their place far far away, behind the word mountains.</p>
                </div>
                </div>
            </div>
            </section> */}
        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 text-center offset-lg-1">
                        <div className="h4 NunitoSans-ExtraBold">To prevent a drastic fall, install a Firewall
                        </div>
                        <div className="h6 mt-4 text-secondary text-justify text-dark">
                            In this digital era, when technology has proved to be a boon, small, medium and large-sized businesses are majorly dependent upon networking,connections and interactions. To help these operations get performed smoothly and efficiently, with full security, to eradicate security breach in your network. Firewalls block malicious connections being established inside a network and keeps data and information safe within a network.
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
                                Platform Diversity
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    On-premise or cloud-based, that helps secure your IT environment quickly.
                                    The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.
                                </div>
                                <Image  height="300px" src="/assets/images/illustrations/diversity.svg"></Image>
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
                                Rapid evolvement, easily deployable with tremendous speed. 
                                Proven deployment methodology that integrates and extends your existing security infrastructure without capex.
                                </div>
                                <Image  height="300px" src="/assets/images/illustrations/data_center.svg"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 px-1">
                    <Fade duration={500} distance={"30%"} bottom >
                        <div className="card h-100 rounded-8">
                            <div className="card-body d-flex flex-column align-items-center">
                                
                                <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                                Advance Technology Stack
                                </div>
                                <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                    Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, 
                                    User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network’s included
                                </div>
                                <Image src="/assets/images/illustrations/assets.svg" className="mt-auto" height="250px"></Image>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <section className="fdb-block section">
        <div className="container">
            <div className="row">
            <div className="col text-center">
                <h1 className="display4">Why Us</h1>

                <div className="row text-left pt-4">
                <div className="col-12 col-md-6">
                    <p className="lead text-justify">We, at BG Unified Solutions, tend to offer the best in class Security for your business around the globe. With our team of experts, the experience we’ve gained, ensure you to provide customizable security to your network, prevent any security breach, secure data flowing through your network. We offer you solutions that especially suits your business model, whether small, medium or large, 
                        we’ve got it covered. We provide Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure. BG Unified solutions provide you firewalls for a single location system, or a multi-homed network, as per your needs and requirements.
                        We have On-premise or cloud-based, that helps secure your IT environment quickly. </p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="lead">The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance. Customer satisfaction and quality is our motto. Maintaining our service is our duty. Any customer support, regarding installation, usage or fault management, consultancy services for your business, we provide extremely satisfying service, and that’s the word for us. We promise you to provide affordable, transparent and cost-efficient service fulfilling your needs. Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC. Cloud-Based or on-premise, 
                        URL filtering, SSL VPN’s inclusion.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-4 mb-4">
                        <h4 className="display5 py-3 text-center">Related Services</h4>
                    </div>
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/infra">
                            <CardWithIcon icon="/assets/images/icons/monotone/server.svg" title={<div>Infrastructure <br /> as a service </div>} children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM" />
                        </Link>
                    </div>
                    
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/storage">
                            <CardWithIcon icon="/assets/images/icons/monotone/cloud.svg" title={<div>Storage <br /> as a service </div>} iconBg="#F3A622" children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage." />
                        </Link>
                    </div>
                    <div className="col-xl-4 col-sm-6 my-2">
                        <Link href="/services/dns">
                            <CardWithIcon icon="/assets/images/icons/monotone/earth_ouline.svg" title={<div>DNS <br /> as a service </div>} iconBg="#5F1CE6" children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching." />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default DNS;
