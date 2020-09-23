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
    Stack, Link, Heading, Grid, Divider, useDisclosure
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
            <CookieNotice></CookieNotice>
            <Box className="headerBox" top="0px" bg="white" boxShadow="lg" zIndex={1000}>
                <div className="container">
                    <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <div className="d-flex align-items-center">
                            <Menu></Menu>
                            <Hyperlink href="/"><a>
                                <Image alt="" src="/assets/logo.png" height="45px" className="d-none d-sm-block mr-3"></Image>
                            </a></Hyperlink>

                            <Popover onClose={onClose2} onOpen={onOpen2} isOpen={isOpen2} trigger="hover" placement="bottom-start">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Solutions</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" borderWidth={0} boxShadow="none" zIndex={4} width="100%" right={0} left={0} pt={6}>
                                    <Container>
                                        <Fade duration={300} distance={"5%"} top>
                                        <Box rounded={4} boxShadow="xl" bg="white" p={10}>
                                            <Flex wrap="wrap" px={6}>
                                                <Box my={4} width={["100%", "100%", "50%", 1/3]}>
                                                    <Text my={"12px"} fontSize="md" fontWeight="700">IT & Infrastructure Services</Text>
                                                    <Stack spacing="4px" direction="column">
                                                    {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link onClick={onClose2} my={1} fontSize="md" fontWeight="400"  color="primary" className="link-highlight" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                                    ))}
                                                    </Stack>
                                                </Box>
                                                <Box my={4} width={["100%", "100%", "50%", 1/3]}>
                                                <Text my={"12px"} fontSize="md" fontWeight="700">Network Services</Text>
                                                    <Stack spacing="4px" direction="column">
                                                    {servicesArray.filter(service => service[1].category === "Network Services").map(service => (
                                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link onClick={onClose2} my={1} fontSize="md"  fontWeight="400" color="primary" className="link-highlight" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                                    ))}
                                                    </Stack>
                                                    <Text my={"12px"} fontSize="md" fontWeight="700">Cyber Security Services</Text>
                                                    <Stack spacing="4px" direction="column">
                                                    {servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => (
                                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link onClick={onClose2} my={1} fontSize="md" fontWeight="400"  color="primary" className="link-highlight" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                                    ))}
                                                    </Stack>
                                                </Box>
                                                <Box my={4}  width={["100%", "100%", "50%", 1/3]}>
                                                    <Text my={"12px"} fontSize="md" fontWeight="700">Collaborative Services</Text>
                                                    <Stack spacing="4px" direction="column">
                                                    {servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => (
                                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link onClick={onClose2} my={1} fontSize="md" fontWeight="400"  color="primary" className="link-highlight" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                                    ))}
                                                    </Stack>
                                                    <Text my={"12px"} fontSize="md" fontWeight="700">Professional Services</Text>
                                                    <Stack spacing="4px" direction="column">
                                                    {servicesArray.filter(service => service[1].category === "Professional Services").map(service => (
                                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link onClick={onClose2} my={1} fontSize="md" fontWeight="400"  color="primary" className="link-highlight" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                                    ))}
                                                    </Stack>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen} trigger="hover" placement="bottom-start">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Company</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" borderWidth={0} boxShadow="none" zIndex={4} width="100%" right={0} left={0}  pt={6} >
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
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Our Mission & Core values</Text>
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
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Keep an eye on us</Text>
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
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">What we deliver</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/team">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/communication/group.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Team</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">See our faces</Text>
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
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">We are here to help</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/newsroom"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Case Studies</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">How we work</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/testimonials"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Customer Stories</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">People say a lot</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/partners"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Our Partners</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">Companies who trust us</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                </Flex>
                                                </Box>
                                                <Flex flexDirection="column" width="50%" p={12} bg="light.400">
                                                    <Heading mb={4} size="md" fontFamily="Nexa Bold">What's New</Heading>
                                                    <WhatsNew
                                                        image={newsroom[0].image}
                                                        heading={newsroom[0].title}
                                                        link={"/newsroom/"+newsroom[0].link}
                                                    />
                                                    <WhatsNew
                                                        image={newsroom[1].image}
                                                        heading={newsroom[1].title}
                                                        link={"/newsroom/"+newsroom[1].link}
                                                    />
                                                    <WhatsNew
                                                        image={newsroom[2].image}
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
                            <Popover trigger="hover">
                                <PopoverTrigger>
                                    <Button variant="unstyled" leftIcon={IoIosCall} className="NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex"> <a href="tel:1300002487" className="link">1300 00 BGUS</a> </Button>
                                </PopoverTrigger>
                                <PopoverContent zIndex={4} p={6}>
                                    <Image alt="" src="/assets/images/animations/phone-dial.gif" style={{filter:"brightness(1.1) hue-rotate(200deg)"}}></Image>
                                </PopoverContent>
                            </Popover>
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



                {/* Menu */}
                <Collapse display={["none", "none", "none", "block"]} isOpen={show === 1}>
                    <Fade duration={800} distance={"30%"} bottom>
                        <Container>
                            <Flex pb={12} wrap="wrap" px={6}>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                    <Text my={"12px"} fontSize="md" fontWeight="700">IT & Infrastructure Services</Text>
                                    <Stack spacing="4px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link my={1} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                    ))}
                                    </Stack>
                                </Box>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                <Text my={"12px"} fontSize="md" fontWeight="700">Network Services</Text>
                                    <Stack spacing="4px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Network Services").map(service => (
                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link my={1} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                    ))}
                                    </Stack>
                                    <Text my={"12px"} fontSize="md" fontWeight="700">Cyber Security Services</Text>
                                    <Stack spacing="4px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => (
                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link my={1} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                    ))}
                                    </Stack>
                                </Box>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                    <Text my={"12px"} fontSize="md" fontWeight="700">Collaborative Services</Text>
                                    <Stack spacing="4px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => (
                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link my={1} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                    ))}
                                    </Stack>
                                    <Text my={"12px"} fontSize="md" fontWeight="700">Development Services</Text>
                                    <Stack spacing="4px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Development Services").map(service => (
                                        <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}><Link my={1} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>{service[1].title}</Link></Hyperlink>
                                    ))}
                                    </Stack>
                                </Box>
                            </Flex>
                        </Container>
                    </Fade>
                </Collapse>
                <Collapse isOpen={show === 2}>
                    <Fade duration={800} distance={"30%"} bottom>
                        <Box>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                                        <div className="display6 mt-2 text-primary text-uppercase">
                                            Company
                                    </div>
                                        <div className="NunitoSans-ExtraBold text-secondary mt-2">
                                            Get the latest resources and updates
                                            from our company here.
                                    </div>
                                    </div>
                                    <div className="col-lg-3 py-4 d-flex flex-column header-list">
                                        <Hyperlink href="/about">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaInfoCircle}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            About Us
                                        </a>
                                        </Hyperlink>
                                        <Hyperlink href="/newsroom">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaNewspaper}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Newsroom
                                        </a>
                                        </Hyperlink>
                                        <Hyperlink href="/solutions">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaBriefcase}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Our Solutions
                                        </a>
                                        </Hyperlink>
                                        <Hyperlink href="/contact">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaCommentAlt}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Contact Us
                                        </a>
                                        </Hyperlink>
                                    </div>
                                    <div className="col-lg-6 py-4 d-flex flex-column header-list">
                                        <h5 className="display6">
                                            What's New
                                    </h5>
                                        <WhatsNew
                                            image={newsroom[0].image}
                                            heading={newsroom[0].title}
                                            link={"/newsroom/"+newsroom[0].link}
                                        />
                                        <WhatsNew
                                            image={newsroom[1].image}
                                            heading={newsroom[1].title}
                                            link={"/newsroom/"+newsroom[1].link}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Fade>
                </Collapse>
            </Box>
            {show ? <div className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
