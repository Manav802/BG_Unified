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
    const b = "data:image/jpeg;base64,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"
    const c = "data:image/jpeg;base64,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"
    const a = "data:image/png;base64,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"
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const servicesArray = Object.entries(services)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpen2, setIsOpen2] = React.useState(false);
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
                                    <Link display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Solutions</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{ outline: "none" }} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6}>
                                    <Container>
                                        <Fade duration={300} distance={"5%"} top>
                                            <Box rounded={4} boxShadow="xl" bg="white">
                                                <Tabs align="center">
                                                    <TabList>
                                                        <Tab p={6} _selected={{ color: "blue.500", borderBottomColor: "blue.500" }}>IT & Infrastructure Services</Tab>
                                                        <Tab p={6} _selected={{ color: "green.400", borderBottomColor: "green.400" }}>Network Services</Tab>
                                                        <Tab p={6} _selected={{ color: "purple.500", borderBottomColor: "purple.500" }}>Cyber Security Services</Tab>
                                                        <Tab p={6} _selected={{ color: "orange.400", borderBottomColor: "orange.400" }}>Collaborative Services</Tab>
                                                        <Tab p={6} _selected={{ color: "primary.500", borderBottomColor: "primary.500" }}>Professional Services</Tab>
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
                                    <Link display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Company</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{ outline: "none" }} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6} >
                                    <Container>
                                        <Fade duration={300} distance="5%" top>
                                            <Box rounded={4} boxShadow="xl" bg="white" overflow="hidden">

                                                <Row>
                                                    <Box p={12} w="50%">
                                                        <Grid templateColumns="auto auto" templateRows="72px" wrap="wrap">
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
                                                                <Hyperlink href="/trainings"><a className="link">
                                                                    <Heading size="sm" fontFamily="Nexa Bold">Trainings and Certifications</Heading>
                                                                    <Text fontSize="sm" fontWeight="500" opacity=".7">Learn and Grow!!</Text>
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
                                                            image={newsroom[0].headerIcon}
                                                            heading={newsroom[0].headertitle}
                                                            link={"/newsroom/" + newsroom[0].link}
                                                        />
                                                        <WhatsNew
                                                            onClick={onClose}
                                                            image={newsroom[1].headerIcon}
                                                            heading={newsroom[1].headertitle}
                                                            link={"/newsroom/" + newsroom[1].link}
                                                        />
                                                        <WhatsNew
                                                            onClick={onClose}
                                                            image={newsroom[2].headerIcon}
                                                            heading={newsroom[2].headertitle}
                                                            link={"/newsroom/" + newsroom[2].link}
                                                        />
                                                    </Flex>
                                                </Row>
                                            </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Hyperlink href="/features">
                                <Link display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Our Features</Link>
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
                                <Button className="mx-3 d-none d-sm-block primary-btn" variant="solid" variantColor="primary">Contact Us</Button>
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
