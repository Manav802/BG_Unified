import React from 'react';
import WhatsNew from './whatsnew'
import Search from './search'
import Menu from './menu'
import {
    Image,
    Box,
    Button,
    Collapse,
    Icon,
    Flex,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Stack, Link, Heading, Grid, Divider, useDisclosure, Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/core'
import services from "../../database/services"
import { FaInfoCircle, FaNewspaper, FaCommentAlt, FaBriefcase } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import newsroom from "../../database/newsroom"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Hyperlink from 'next/link';
import Router from 'next/router';
import Container from '../../pageBuilder/Container';
import CookieNotice from './CookieNotice';
import Row from '../../pageBuilder/Row';
import SVG from '../svg/SVG';

function header(props) {
    const b="data:image/jpeg;base64,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"
    const c= "data:image/jpeg;base64,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"
    const a="data:image/png;base64,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"
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const servicesArray = Object.entries(services)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpen2,setIsOpen2] = React.useState(false);
    const onOpen2 = () => setIsOpen2(true);
    const onClose2 = () => setIsOpen2(false);
    return (
        <>
            
            <Box className="headerBox" top="0px" bg="white" boxShadow="lg" zIndex={1000}>
                <div className="container">
                    <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <div className="d-flex align-items-center">
                            <Menu></Menu>
                            <Hyperlink href="/"><a>
                                <Image alt="" src="/assets/logo.png" height="40px" className="d-none d-sm-block mr-3"></Image>
                            </a></Hyperlink>

                            <Popover onClose={onClose2} onOpen={onOpen2} isOpen={isOpen2} trigger="hover" placement="bottom">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Solutions</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6}>
                                    <Container>
                                        <Fade duration={300} distance={"5%"} top>
                                        <Box rounded={4} boxShadow="xl" bg="white">
                                            <Tabs align="center">
                                                <TabList>
                                                    <Tab p={6} _selected={{color:"blue.500", borderBottomColor:"blue.500"}}>IT & Infrastructure Services</Tab>
                                                    <Tab p={6} _selected={{color:"green.400", borderBottomColor:"green.400"}}>Network Services</Tab>
                                                    <Tab p={6} _selected={{color:"purple.500", borderBottomColor:"purple.500"}}>Cyber Security Services</Tab>
                                                    <Tab p={6} _selected={{color:"orange.400", borderBottomColor:"orange.400"}}>Collaborative Services</Tab>
                                                    <Tab p={6} _selected={{color:"primary.500", borderBottomColor:"primary.500"}}>Professional Services</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Network Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Professional Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                </TabPanels>
                                            </Tabs>
                                        </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen} trigger="hover" placement="bottom-start">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Company</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6} >
                                    <Container>
                                    <Fade duration={300} distance="5%" top>
                                        <Box rounded={4} boxShadow="xl" bg="white" overflow="hidden">
                                        
                                        <Row>
                                            <Box p={12} w="50%">
                                                <Grid  templateColumns="auto auto" templateRows="72px" wrap="wrap">
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/about">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/home/building.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">About us</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Our Vision & Core values</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/newsroom">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/layout/layout-top-panel-5.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Newsroom</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">What we are up to!</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/solutions">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/general/folder.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Our Solutions</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">What do we deliver</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/about#team">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/communication/group.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Team</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Meet Us!!</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                </Grid>
                                                <Divider borderWidth={2} my={6}></Divider>
                                                <Flex wrap="wrap">
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/contact"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Contact Us</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">We are here to help!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/newsroom?tab=Case Study"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Case Studies</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">Our Projects!!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/stories"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Customer Stories</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">The word out there!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/partners"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Our Partners</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">Companies who trust us!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                </Flex>
                                                </Box>
                                                <Flex flexDirection="column" width="50%" p={12} bg="light.400">
                                                    <Heading mb={4} size="md" fontFamily="Nexa Bold">What's New</Heading>
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={a}
                                                        heading={newsroom[0].title}
                                                        link={"/newsroom/"+newsroom[0].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={b}
                                                        heading={newsroom[1].title}
                                                        link={"/newsroom/"+newsroom[1].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={c}
                                                        heading={newsroom[2].title}
                                                        link={"/newsroom/"+newsroom[2].link}
                                                    />
                                                </Flex>
                                            </Row>
                                        </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Hyperlink href="/features">
                                <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Our Features</Link>
                            </Hyperlink>
                        </div>
                        <Hyperlink href="/"><a>
                            <Image alt="" src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Hyperlink>
                        <div className="d-flex">
                            
                                    <Button variant="unstyled" leftIcon={IoIosCall} className="NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex"> <a href="tel:1300002487" className="link">1300 00 BGUS</a> </Button>
                                
                            {/* <Search toggle ={() => setSearch(!search)} searching={search}></Search> */}
                            {/*propper syntax to use link with dynamic routing*/}
                            <Hyperlink href={`/search?search=`}>
                                <Button p={2} rounded={4} bg="white" onClick={props.toggle}>
                                    <Icon name="search" size="18px"></Icon>
                                </Button>
                            </Hyperlink>
                            <Hyperlink href="/contact">
                                <Button className="mx-3 d-none d-sm-block primary-btn"  variant="solid" variantColor="primary">Contact Us</Button>
                            </Hyperlink>
                        </div>
                    </div>
                </div>

                <CookieNotice></CookieNotice>
            </Box>
            
            {show ? <div className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
