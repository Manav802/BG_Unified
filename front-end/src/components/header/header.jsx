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
    Stack,
} from '@chakra-ui/core'
import services from "../../database/services"
import { FaInfoCircle, FaNewspaper, FaCommentAlt, FaBriefcase } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Router from 'next/router';
import Container from '../../pageBuilder/Container';
import SVG from '../svg/svg';

function header(props) {
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const servicesArray = Object.entries(services)
    return (
        <>
            <Box position="sticky" top="0px" bg="white" boxShadow="lg" zIndex={1000}>
                <div className="container">
                    <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <div className="d-flex align-items-center">
                            <Menu></Menu>
                            <Link href="/"><a>
                                <Image src="/assets/logo.png" height="45px" className="d-none d-sm-block mr-3"></Image>
                            </a></Link>

                            <Button className="text-dark hover-effect d-none d-lg-block" variantColor="white" rightIcon="chevron-down" onClick={() => show === 1 ? setShow(0) : setShow(1)} >Solutions</Button>
                            <Button className="d-none d-lg-block text-dark hover-effect" onClick={() => show === 2 ? setShow(0) : setShow(2)} variantColor="white" rightIcon="chevron-down">Company</Button>
                            <Link href="/features">
                                <Button className="d-none d-lg-block text-dark hover-effect" variantColor="white">Our Features</Button>
                            </Link>
                        </div>
                        <Link href="/"><a>
                            <Image src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Link>
                        <div className="d-flex">
                            <Popover trigger="hover">
                                <PopoverTrigger>
                                    <Button variant="unstyled" leftIcon={IoIosCall} className="NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex"> <a href="tel:1300002487" className="link">1300 00 BGUS</a> </Button>
                                </PopoverTrigger>
                                <PopoverContent zIndex={4} p={6}>
                                    <Image src="/assets/images/animations/phone-dial.gif" className="phone-dial"></Image>
                                </PopoverContent>
                            </Popover>
                            {/* <Search toggle ={() => setSearch(!search)} searching={search}></Search> */}
                            {/*propper syntax to use link with dynamic routing*/}
                            <Link href={`/search?search=`}>
                                <a className="p-2 rounded-8 hover-effect">
                                    <Icon name="search" onClick={props.toggle} size="18px"></Icon>
                                </a>
                            </Link>
                            <Link href="/contact">
                                <Button className="mx-3 d-none d-sm-block" variant="solid" variantColor="primary">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>



                {/* Menu */}
                <Collapse display={["none", "none", "none", "block"]} isOpen={show === 1}>
                    <Fade duration={800} distance={"30%"} bottom>
                        <Container>
                            <Flex pb={12} wrap="wrap" px={6}>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                    <Text my={"16px"} fontSize="lg" fontWeight="700">IT Infrastructural Services</Text>
                                    <Stack spacing="8px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                                        <Link href="/solution/[name]" as={"/solution/" + service[0]}><Button as="a" variant="unstyled">{service[1].title}</Button></Link>
                                    ))}
                                    </Stack>
                                </Box>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                    <Text my={"16px"} fontSize="lg" fontWeight="700">Network Services</Text>
                                    <Stack spacing="8px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Network Services").map(service => (
                                        <Link href="/solution/[name]" as={"/solution/" + service[0]}><Button as="a" variant="unstyled">{service[1].title}</Button></Link>
                                    ))}
                                    </Stack>
                                </Box>
                                <Box mb={4} mt={12} width={["100%", "100%", "50%", 1/3]}>
                                    <Text my={"16px"} fontSize="lg" fontWeight="700">Collaborative Services</Text>
                                    <Stack spacing="8px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => (
                                        <Link href="/solution/[name]" as={"/solution/" + service[0]}><Button as="a" variant="unstyled">{service[1].title}</Button></Link>
                                    ))}
                                    </Stack>
                                    <Text my={"16px"} fontSize="lg" fontWeight="700">Development Services</Text>
                                    <Stack spacing="8px" direction="column">
                                    {servicesArray.filter(service => service[1].category === "Development Services").map(service => (
                                        <Link href="/solution/[name]" as={"/solution/" + service[0]}><Button as="a" variant="unstyled">{service[1].title}</Button></Link>
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
                                        <Link href="/about">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaInfoCircle}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            About Us
                                        </a>
                                        </Link>
                                        <Link href="/newsroom">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaNewspaper}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Newsroom
                                        </a>
                                        </Link>
                                        <Link href="/solutions">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaBriefcase}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Our Solutions
                                        </a>
                                        </Link>
                                        <Link href="/contact">
                                            <a className="d-flex link">
                                                <Box
                                                    as={FaCommentAlt}
                                                    size="20px"
                                                    mr="12px"
                                                ></Box>
                                            Contact Us
                                        </a>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 py-4 d-flex flex-column header-list">
                                        <h5 className="display6">
                                            What's New
                                    </h5>
                                        <WhatsNew
                                            image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg"
                                            heading="BG Unified Solutions got nominated for two awards"
                                            text="BG Unified Solutions got nomination ..."
                                            link="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw"
                                        />
                                        <WhatsNew
                                            image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg"
                                            heading="Successfull upgradation Mega Cisco Call Manager"
                                            text="BG Unified Solutions team have successfully upgraded its  ..."
                                            link="/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1"
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
