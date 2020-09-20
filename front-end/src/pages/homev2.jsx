import { Box, Button, Flex, Grid, Heading, Icon, Image,Text, Drawer,  DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,useDisclosure, InputGroup, InputLeftElement,  Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from "@chakra-ui/core";
import Head from 'next/head';
import Slider from "react-flickity-component"
import services from "../database/services"
import React from 'react';
import SVG from "../components/svg/SVG";
import Section from '../pageBuilder/Section';
import Title from '../pageBuilder/Title';
import Row from "../pageBuilder/Row";
import Link from "next/link";
import Feature3 from "../pageBuilder/components/Feature3";
import RenderSection from "../pageBuilder/RenderSection";
import Body from "../pageBuilder/Body";

import { TESTIMONIALS } from "../database/testimonials";

var array = [0,0,0,0,0,0,0,0,0,0,0,0];

const tabs = [
    {
      index: 0,
      title: "IT & Infrastructure",
    },
    {
      index: 1,
      title: "Network",
    },
    {
      index: 2,
      title: "Cyber Security",
    },
    {
      index: 3,
      title: "Collaborative",
  
    },
    {
      index: 4,
      title: "Development",
  
    },
  ];

const ServiceTile = ({name}) => <>
    <Flex my={5}>
        <Box p={6} bg="gray.200" rounded={3} boxShadow="lg">
            <SVG size="24px" hex={services[name].color} src={services[name].icon}></SVG>
        </Box>
        <Flex px={4} direction="column" justify="center">
            <Heading size="md">{services[name].title}</Heading>
            <Text fontWeight="600" fontSize="lg" mt={1} opacity=".7">{services[name].slogan}</Text>
        </Flex>
    </Flex>
</>

function main(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
    return (
        <>
        <Head>
          <title>BG Unified Solutions</title>
        </Head>
        <Box zIndex="-1" pos="absolute" left={0} top={0} width="100%" overflow="hidden">
        <Image alt="" src="/assets/images/backgrounds/hero-shot.webp" height="1200px" objectFit="cover" width="100vw" ></Image>
        </Box>
        <Section pos="relative" color="white" m={0} py={40}>
            <Box zIndex={100} px={100/6 + "%"} textAlign="center">
                <Title fontSize="64px">Serving Technology for an Effortless Business</Title>
                <Heading textAlign="center" mt={4} fontFamily="Nexa Light" size="md">Partner for IT solutions, delivering values and ensuring corporate growth.</Heading>
                <Link href={"/contact"}><Button zIndex={100} p={8} className="btn btn-outline primary-btn" variantColor="primary" fontSize="20px" mt={8}>Request a Quote</Button></Link>
            </Box>
        </Section>  
        <Section>
            <Grid templateColumns="256px auto" p={12} rounded={12} bg="white" boxShadow="xl">
                <Image alt="" src="/assets/images/vectors/covid.svg" width={["100%","40%","256px"]}></Image>
                <Flex direction="column" justify="center" px={12}>
                    <a className="link"><Heading size="lg" fontFamily="Nexa Bold">Free Services* for 3 months for Healthy and Safety related Businesses. <Icon name="chevron-right"></Icon></Heading></a>
                    <Text mt={3} opacity={.7}>Let us help you if you have limited budgets and because of COVID your current infrastructure can't handle the load. Dial our direct line +61 2 9095 0000. We will get things in motion very quickly.</Text>
                </Flex>
            </Grid>
        </Section>
        <Section my="6rem">
            <Title fontSize="40px" mb={8} opacity={.7}>Fast. friendly and delivery oriented IT services driven by
            our commitment to customer satisfaction
            </Title>
            <Button
                onClick={onOpen}
                className="tab-dropdown"
                size="lg"
                py="32px"
                mb="12px"
                px="48px"
                rightIcon="chevron-down"
                >
                <Box as={tabs[tabIndex].icon} size="32px" mr="12px"></Box>
                {tabs[tabIndex].title}
            </Button>
            <Drawer
                placement="bottom"
                size="lg"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                    Choose an Operating System
                </DrawerHeader>
                <DrawerBody>
                    {tabs.map((tab) => {
                    return (
                        <>
                        <Button
                            key={tab.index}
                            onClick={() => {
                            setTabIndex(tab.index);
                            onClose();
                            }}
                            variantColor="white"
                            py="32px"
                            className="box-none text-dark justify-content-start hover-effect w-100 display6"
                        >
                            <Box as={tab.icon} size="32px" mr="12px"></Box>{" "}
                            {tab.title}
                        </Button>
                        </>
                    );
                    })}
                </DrawerBody>
                </DrawerContent>
            </Drawer>
                <Tabs index={tabIndex} align="center" onChange={handleTabsChange} variantColor="red.500">
                    <TabList fontFamily="Nexa Bold">
                    <Tab className="box-none tab" p={6}>IT & Infrastructure</Tab>
                    <Tab className="box-none tab" p={6}>Network</Tab>
                    <Tab className="box-none tab" p={6}>Cyber Security</Tab>
                    <Tab className="box-none tab" p={6}>Collaborative</Tab>
                    <Tab className="box-none tab" p={6}>Development</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Row>
                                <Box mt={12} width={["100%","100%",1/2]}>
                                    <ServiceTile name="infra"></ServiceTile>
                                    <ServiceTile name="dbaas"></ServiceTile>
                                    <ServiceTile name="workstation"></ServiceTile>
                                    <ServiceTile name="backup"></ServiceTile>
                                    <Link href="/solutions">
                                    <a className="link">
                                    <Heading color="primary.500" py={3} size="md">
                                    View All Services{" "}
                                    <Icon name="arrow-forward"></Icon>
                                    </Heading>
                                    
                                    </a>
                                </Link>
                                </Box>
                                <Box width={["100%","100%",1/2]}>
                                    <Image alt="" src="/assets/images/illustrations/itandinfra.svg"></Image>
                                </Box>
                            </Row>
                        </TabPanel>
                        <TabPanel>
                        <Row>
                            <Box mt={12} width={["100%","100%",1/2]}>
                                <ServiceTile name="dns"></ServiceTile>
                                <ServiceTile name="cex"></ServiceTile>
                                <ServiceTile name="sd-wan"></ServiceTile>
                                <ServiceTile name="wireless"></ServiceTile>
                                <Link href="/solutions">
                                <a className="link">
                                <Heading color="primary.500" py={3} size="md">
                                View All Services{" "}
                                <Icon name="arrow-forward"></Icon>
                                </Heading>
                                
                                </a>
                            </Link>
                            </Box>
                            <Box width={["100%","100%",1/2]}>
                                <Image alt="" mt={12} src="/assets/images/illustrations/network.svg"></Image>
                            </Box>
                        </Row>
                        </TabPanel>
                        <TabPanel>
                        <Row>
                            <Box mt={12} width={["100%","100%",1/2]}>
                                <ServiceTile name="firewall"></ServiceTile>
                                <ServiceTile name="proxy"></ServiceTile>
                                <ServiceTile name="wafaas"></ServiceTile>
                                <Link href="/solutions">
                                <a className="link">
                                <Heading color="primary.500" py={3} size="md">
                                View All Services{" "}
                                <Icon name="arrow-forward"></Icon>
                                </Heading>
                                
                                </a>
                            </Link>
                            </Box>
                            <Box width={["100%","100%",1/2]}>
                                <Image alt="" my={12} ml={12} maxH="460px" src="/assets/images/illustrations/security-blue.svg"></Image>
                            </Box>
                        </Row>
                        </TabPanel>
                        <TabPanel>
                        <Row>
                            <Box mt={12} width={["100%","100%",1/2]}>
                                <ServiceTile name="ucaas"></ServiceTile>
                                <ServiceTile name="contact-center"></ServiceTile>
                                <Link href="/solutions">
                                <a className="link">
                                <Heading color="primary.500" py={3} size="md">
                                View All Services{" "}
                                <Icon name="arrow-forward"></Icon>
                                </Heading>
                                
                                </a>
                            </Link>
                            </Box>
                            <Box width={["100%","100%",1/2]}>
                                <Image alt="" mt={6} src="/assets/images/illustrations/collaborative.svg"></Image>
                            </Box>
                        </Row>
                        </TabPanel>
                        <TabPanel>
                        <Row>
                            <Box mt={12} width={["100%","100%",1/2]}>
                                <ServiceTile name="appdev"></ServiceTile>
                                <ServiceTile name="webdev"></ServiceTile>
                                <Link href="/solutions">
                                    <a className="link">
                                    <Heading color="primary.500" py={3} size="md">
                                    View All Services{" "}
                                    <Icon name="arrow-forward"></Icon>
                                    </Heading>
                                    </a>
                                </Link>
                            </Box>
                            <Box width={["100%","100%",1/2]}>
                                <Image alt="" mt={6} src="/assets/images/illustrations/development.svg"></Image>
                            </Box>
                        </Row>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
        </Section>
        <Section bg="dark.500" mb={0} py={24} color="white">
            <Row>
                <Flex direction="column" justify="center" width={["100%","100%",1/2]}>
                    <Title textAlign="left" fontSize="56px">Highly <span className="text-primary">Redundant Solutions</span>. 
                    Highly expert team
                    </Title>
                    <Text mt={4} fontSize="20px" opacity={.7}>
                        Our values are based around fresh ideas, delivering as promised, shoeing our customer’s respect, and being 100% committed.
                    </Text>
                    <Link href="/features">
                        <a className="link">
                        <Heading color="white" py={3} size="md">
                        Learn More{" "}
                        <Icon name="arrow-forward"></Icon>
                        </Heading>
                        </a>
                    </Link>
                </Flex>
                <Flex px={"3%"} wrap="wrap" width={["100%","100%",1/2]}>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Feature3 bg="red.500" icon="/assets/images/icons/color/transaction.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold">Guaranteed Transactional Security</Heading>
                        </Feature3>
                        <Feature3 bg="purple.600" icon="/assets/images/icons/color/graph.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold"><Title textAlign="left" fontSize="40px">100%</Title>Success<br/>Ratio</Heading>
                        </Feature3>
                    </Box>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Feature3 mt={24} bg="light.500" color="dark.500" icon="/assets/images/icons/color/team.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold"><Title textAlign="left" fontSize="40px" color="yellow.400">40+</Title>Trusted<br/>Partners</Heading>
                        </Feature3>
                        <Feature3 bg="blue.800" icon="/assets/images/icons/color/rocket.svg">
                            <Heading px={8} pt={8} size="md" fontFamily="Nexa Bold">Completely Scalable Solutions</Heading>
                        </Feature3>
                    </Box>
                </Flex>
            </Row>       
        </Section>
        <Image alt="" width="100%" src="/assets/images/dividers/divider_circle.svg"></Image>
        
        <Section overflow="hidden" mt={0}>
        <div className="row p-3 p-md-0">
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mt={6} mb={4}>
              Multiple Data Center Locations
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
              7 to be precise including Solarix,
              Auckland, Airtrunk SYD/ME and GovDC.End-to-End DC network
              infrastructure encompassing server switching. Server consolidation
              and virtualization, high availability & clustering.
              </Text>
              <Row rowDistance={8}>
                  <Body  width={1/3} type="numberCount" data={{
                    count: 1600,
                    align:"left",
                    suffix: "+",
                    title: "SIP Channels",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
                    <Body width={1/3} type="numberCount" data={{
                    count: 1600,
                    align:"left",
                    suffix: "+",
                    title: "SIP Channels",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
                    <Body width={1/3} type="numberCount" data={{
                    count: 1600,
                    align:"left",
                    suffix: "+",
                    title: "SIP Channels",
                    fontSize: "30px",
                    titleSize:"18px"
                    }} />
              </Row>
         
          </div>
          <div className="col-md-7 pl-0 position-relative d-none d-md-block">
            <Image alt=""            
              px={8}
              minWidth="900px"
              transform="translateX()"
              src="/assets/images/features/vectors/map.svg"
            />
          </div>
        </div>
        </Section>
        <Section bg="light.400" pt={24} pb={16}>
            <Box mb={16} width={["100%","100%",7/12]}>
            <Title textAlign="left">Protecting Online Presence of Your 
                Business from the past 7 years</Title>
            </Box>
            <Slider options={{
                pageDots: false,
                prevNextButtons: false,
                cellAlign: "left",
                autoPlay: 3000,
            }}>
                {array.map((n, index) => <Box width="auto" pr={16}>
                    <Image alt="" src={`/assets/images/partners/partners (${index}).png`} maxW="256px" objectFit="contain" height="64px"></Image>
                </Box>)}
            </Slider>
            <Divider mb={8} mt={16} borderWidth={2}></Divider>
            <Slider options={{prevNextButtons: false}}>
            {TESTIMONIALS.map((x)=>(
                <Box w="100%">
                <Heading fontSize="26px" lineHeight={1.7} opacity={.7} fontWeight="500">
                    {x.paragraph}
                </Heading>
            <Heading size="lg" color="primary.500" mt={3}>{x.author}</Heading>
                <Heading size="md" opacity={.7} mt={3}>{x.CompanyName}</Heading>
                </Box>
            ))}
            

            

            </Slider>
            <Divider mb={8} mt={16} borderWidth={2}></Divider>
            <Link href="/testimonials">
                <a className="link">
                <Heading color="primary.500" mt={16} size="md">
                Read More Customer Stories{" "}
                <Icon name="arrow-forward"></Icon>
                </Heading>
                </a>
            </Link>
        </Section>
        <Section>
            <Row>
                <Box px={2} width={["100%","100%",1/2]}>
                    <Title mt={4} textAlign="left" fontSize="40px">Our Goals + Our Approach + Our Results  = Our Success Story</Title>
                    <Text mt={4} fontSize="20px" opacity={.7}>
                        Our values are based around fresh ideas, delivering as promised, shoeing our customer’s respect, and being 100% committed.
                    </Text>
                    <Link href="/features">
                        <a className="link">
                        <Heading color="primary.500" py={3} size="md">
                        Learn More{" "}
                        <Icon name="arrow-forward"></Icon>
                        </Heading>
                        </a>
                    </Link>
                </Box>
                <Flex px={8} wrap="wrap" width={["100%","100%",1/2]}>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Box bgImage="url('/assets/images/newsroom/infra.webp')" mb={6} height="220px" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" rounded={8}>
                        <Heading px={8} pt={8} size="lg" color="white" fontFamily="Nexa Bold">Network Infrastructure Redesign</Heading>
                        </Box>
                        <Box bgImage="url('/assets/images/newsroom/f5_redesign.webp')" mt={6} height="220px" backgroundSize="cover" backgroundRepeat="no-repeat" rounded={8}>
                            <Heading px={8} pt={8} size="lg" color="white" fontFamily="Nexa Bold">F5 Topology Redesign</Heading>
                        </Box>
                    </Box>
                    <Box width={["100%","100%", 1/2]} px={3}>
                        <Flex align="flex-end" bgImage="url('/assets/images/newsroom/complete_vdi.webp')" height="100%" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" rounded={8}>
                            <Heading p={8} size="lg" color="white" fontFamily="Nexa Bold">BG Unified Solutions hosted UC Solutions</Heading>
                        </Flex>
                    </Box>
                </Flex>
            </Row>       
        </Section>
        <Section>
            <Title>
                Let's make IT Done
            </Title>
            <Flex>
                <Box cursor="pointer" px={3} width="20%">
                <Link href="/contact"><a className="link">
                <Feature3 boxShadow="0px 6px 25px #ff000066" height="140px" icon="/assets/images/icons/color/speak.svg" bg="primary.500">
                    <Heading color="white" px={8} pt={8} fontFamily="Nexa Bold" fontSize="20px">
                    Consult{" "}
                    <Icon name="arrow-forward"></Icon>
                    </Heading>
                </Feature3>
                </a>
                </Link>
                </Box>
                <Box px={3} width="20%">
                    <Box height="140px" overflow="hidden" pos="relative" boxShadow="xl" my={6} borderWidth={1} rounded={8}>
                        <Heading zIndex="-1" pos="absolute" right="-24px" top="-16px" textAlign="right" fontFamily="Nexa Bold" fontSize="180px" color="blue.100">2</Heading>
                        <Heading px={8} pt={8} fontFamily="Nexa Bold" fontSize="20px">Design</Heading>
                    </Box>
                </Box>
                <Box px={3} width="20%">
                    <Box height="140px" overflow="hidden" pos="relative" boxShadow="xl" my={6} borderWidth={1} rounded={8}>
                        <Heading zIndex="-1" pos="absolute" right="-24px" top="-16px" textAlign="right" fontFamily="Nexa Bold" fontSize="180px" color="green.100">3</Heading>
                        <Heading px={8} pt={8} fontFamily="Nexa Bold" fontSize="20px">Build</Heading>
                    </Box>
                </Box>
                <Box px={3} width="20%">
                    <Box height="140px" overflow="hidden" pos="relative" boxShadow="xl" my={6} borderWidth={1} rounded={8}>
                        <Heading zIndex="-1" pos="absolute" right="-24px" top="-16px" textAlign="right" fontFamily="Nexa Bold" fontSize="180px" color="purple.100">4</Heading>
                        <Heading px={8} pt={8} fontFamily="Nexa Bold" fontSize="20px">Manage</Heading>
                    </Box>
                </Box>
                <Box px={3} width="20%">
                    <Box height="140px" overflow="hidden" pos="relative" boxShadow="xl" my={6} borderWidth={1} rounded={8}>
                        <Heading zIndex="-1" pos="absolute" right="-24px" top="-16px" textAlign="right" fontFamily="Nexa Bold" fontSize="180px" color="yellow.100">5</Heading>
                        <Heading px={8} pt={8} fontFamily="Nexa Bold" fontSize="20px">Deploy</Heading>
                    </Box>
                </Box>
            </Flex>
        </Section>
        </>
    );
}

export default main;