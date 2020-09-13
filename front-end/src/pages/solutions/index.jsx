import React, { Component } from "react";
import Slider from "react-flickity-component";
import solutions from "../../database/services";
import Head from "next/head";
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, InputGroup, InputLeftElement, Button, Image, Flex,  Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Service from "../../components/cards/Service";
import Row from "../../pageBuilder/Row";
import SVG from "../../components/svg/svg";

function OurSolutions(){
    return (
      <>
          <Head>
            <title>Our Solutions</title>
          </Head>
          <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
            <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">What we deliver</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>Our Solutions</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>We cover 90% of the technology domains.</Text>
        </Section>
        <Section mt={0} pt={0}>
          <Tabs align="center" variantColor="red.500">
            <TabList fontFamily="Nexa Bold">
              <Tab p={6}>IT & Infrastructure</Tab>
              <Tab p={6}>Network</Tab>
              <Tab p={6}>Cyber Security</Tab>
              <Tab p={6}>Collaborative</Tab>
              <Tab p={6}>Development</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
              <Row>
                {Object.entries(solutions).filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                    <Box width="50%" p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" rounded={8} overflow="hidden">
                        <Flex minW="160px" justify="center" align="center" bg={service[1].color}>
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
              <TabPanel>
              <Row>
                {Object.entries(solutions).filter(service => service[1].category === "Network Services").map(service => (
                    <Box width="50%" p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" rounded={8} overflow="hidden">
                        <Flex minW="160px" justify="center" align="center" bg={service[1].color}>
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
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Cyber Security Services").map(service => (
                    <Box width="50%" p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" rounded={8} overflow="hidden">
                        <Flex minW="160px" justify="center" align="center" bg={service[1].color}>
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
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Collaborative Services").map(service => (
                    <Box width="50%" p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" rounded={8} overflow="hidden">
                        <Flex minW="160px" justify="center" align="center" bg={service[1].color}>
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
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Development Services").map(service => (
                    <Box width="50%" p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" rounded={8} overflow="hidden">
                        <Flex minW="160px" justify="center" align="center" bg={service[1].color}>
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
