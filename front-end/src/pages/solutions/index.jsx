import React, { Component } from "react";
import Slider from "react-flickity-component";
import solutions from "../../database/services";
import Head from "next/head";
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,useDisclosure, InputGroup, InputLeftElement, Button, Image, Flex,  Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Service from "../../components/cards/Service";
import Row from "../../pageBuilder/Row";
import SVG from "../../components/svg/SVG";

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

function OurSolutions(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  
    return (
      <>
          <Head>
            <title>Our Solutions</title>
          </Head>
          <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
            <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">What we deliver</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>Our Solutions</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Choose your requirments. We provide you with the solution, needed for your Enterprise</Text>
        </Section>
        <Section mt={0} pt={0}>
        <div className="d-flex mt-3 justify-content-center">
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
    </div>
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
                {Object.entries(solutions).filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                    <Box width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href="/solutions/[name]" as={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon="arrow-forward">Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
                {Object.entries(solutions).filter(service => service[1].category === "Network Services").map(service => (
                    <Box width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href="/solutions/[name]" as={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon="arrow-forward">Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Cyber Security Services").map(service => (
                    <Box width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href="/solutions/[name]" as={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon="arrow-forward">Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Collaborative Services").map(service => (
                    <Box width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href="/solutions/[name]" as={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon="arrow-forward">Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Development Services").map(service => (
                    <Box width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].conclusion}</Text>
                            <Link href="/solutions/[name]" as={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon="arrow-forward">Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
            </TabPanels>
          </Tabs>
          
        </Section>
      </>
    );
}

export default OurSolutions;
