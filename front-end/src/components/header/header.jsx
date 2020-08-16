<<<<<<< HEAD
import React from "react";
import WhatsNew from "./whatsnew";
import Menu from "./menu";
import {
  Image,
  Box,
  Button,
  SlideIn,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Collapse,
} from "@chakra-ui/core";

import {
  FaInfoCircle,
  FaNewspaper,
  FaCommentAlt,
  FaBriefcase,
} from "react-icons/fa";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function header(props) {
  const initRef = React.useRef();
  const [show, setShow] = React.useState(0);

  return (
    <div className="header bg-white shadow-sm">
      <div className="container">
        <div className="p-3 d-flex justify-content-between align-items-center layer-4">
          <div className="d-flex align-items-center">
            <Menu></Menu>
            <Link href="/">
              <Image
                src="/assets/logo.png"
                height="48px"
                className="d-none d-sm-block mr-3"
              ></Image>
            </Link>

            <Button
              className="text-dark hover-effect d-none d-lg-block"
              variantColor="white"
              rightIcon="chevron-down"
              onClick={() => (show === 1 ? setShow(0) : setShow(1))}
            >
              Solutions
            </Button>

            <Button
              className="d-none d-lg-block text-dark hover-effect"
              onClick={() => (show === 2 ? setShow(0) : setShow(2))}
              variantColor="white"
              rightIcon="chevron-down"
            >
              Company
            </Button>

            <Link href="/features">
              <Button
                className="d-none d-lg-block text-dark hover-effect"
                variantColor="white"
              >
                Our Features
              </Button>
            </Link>
          </div>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              height="48px"
              className="mr-3 d-sm-none"
            ></Image>
          </Link>
          <div className="d-flex">
            <span className="NunitoSans-SemiBold p-2 d-none d-lg-block">
              Call Us <b>1300 00 BGUS</b>
            </span>
            <span className="p-2 rounded-8 hover-effect">
              <Icon name="search" size="16px"></Icon>
            </span>
            <Link href="/contact">
              <Button
                className="mx-3 d-none primary-btn hover-color d-sm-block"
                variant="solid"
                variantColor="primary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Collapse isOpen={show === 1}>
        <Fade duration={800} distance={"30%"} bottom>
          <Box>
            <div className="container pb-5 pt-3">
              <div className="row">
                <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                  <div className="display6 mt-2 text-primary text-uppercase">
                    Solutions
                  </div>
                  <div className="NunitoSans-ExtraBold text-secondary mt-2">
                    We cover almost 90% technology domain required by your
                    business.
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 d-flex flex-column footer-content">
                  <span className="mt-4 mb-1">IT Infrastructural Services</span>
                  <Link href="/services/infra">
                    <a>Infrastructure As A Service</a>
                  </Link>
                  <Link href="/services/storage-unit">
                    <a>Storage As A Service</a>
                  </Link>
                  <Link href="/services/cloud-logging">
                    <a>Cloud Logging As A Service</a>
                  </Link>
                  <Link href="/services/platform">
                    <a>Cloud Platform As A Service</a>
                  </Link>
                  <Link href="/services/firewall">
                    <a>Firewalls As A Service</a>
                  </Link>
                  <Link href="/services/application-dev">
                    <a>Application Development As A Service</a>
                  </Link>
                  <Link href="/services/web-hosting">
                    <a>Web Hosting As A Service</a>
                  </Link>
                  <Link href="/services/backup">
                    <a>Backup As A Service</a>
                  </Link>
                </div>
                <div className="col-lg-3 col-sm-6 d-flex flex-column footer-content">
                  <span className="mt-4 mb-1">Network Services</span>

                  <Link href="/services/sd-wan">
                    <a>SD-WAN As A Service</a>
                  </Link>
                  <Link href="/services/proxy-server">
                    <a>Proxy As A Service</a>
                  </Link>
                  <Link href="/services/dns">
                    <a>DNS As A Service</a>
                  </Link>
                  <Link href="/services/wireless-networks">
                    <a>Wireless As A Service</a>
                  </Link>
                  <Link href="/services/cloud-exchange">
                    <a>Cloud Exchange Connectivity As A Service</a>
                  </Link>
                  <Link href="/services/sip-connectivity">
                    <a>SIP As A Service</a>
                  </Link>

                  <span className="mt-4 mb-1">Disaster Recovery Services</span>
                  <Link href="/services/disaster-recovery">
                    <a>DR As A Service</a>
                  </Link>
                </div>
                <div className="col-lg-3 d-flex flex-column footer-content">
                  <span className="mt-4 mb-1">Collaborative Services</span>
                  <Link href="/services/ucaas">
                    <a>Unified Communications As A Service</a>
                  </Link>
                  <Link href="/services/contact-center-services">
                    <a>Customer Support As A Service</a>
                  </Link>
                  <Link href="/services/architectural-consultancy">
                    <a>Architectural Consultancy As A Service</a>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
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
                    Get the latest resources and updates from our company here.
                  </div>
                </div>
                <div className="col-lg-3 py-4 d-flex flex-column header-list">
                  <Link href="/about">
                    <a className="d-flex">
                      <Box as={FaInfoCircle} size="20px" mr="12px"></Box>
                      About Us
                    </a>
                  </Link>
                  <Link href="/newsroom">
                    <a className="d-flex">
                      <Box as={FaNewspaper} size="20px" mr="12px"></Box>
                      Newsroom
                    </a>
                  </Link>
                  <Link href="/solutions">
                    <a className="d-flex">
                      <Box as={FaBriefcase} size="20px" mr="12px"></Box>
                      Our Solutions
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="d-flex">
                      <Box as={FaCommentAlt} size="20px" mr="12px"></Box>
                      Contact Us
                    </a>
                  </Link>
                </div>
                <div className="col-lg-6 py-4 d-flex flex-column header-list">
                  <h5 className="text-primary display6">What's New</h5>
                  <Link href="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw">
                    <WhatsNew
                      image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg"
                      heading="BG Unified Solutions got nominated for two awards"
                      text="BG Unified Solutions got nomination ..."
                    ></WhatsNew>
                  </Link>
                  <Link href="/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1">
                    <WhatsNew
                      image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg"
                      heading="Successfull upgradation Mega Cisco Call Manager"
                      text="BG Unified Solutions team have successfully upgraded its  ..."
                    ></WhatsNew>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Collapse>
    </div>
  );
}

export default header;
=======
import React from 'react';
import WhatsNew from './whatsnew'
import Search from './search'
import Menu from './menu'
import {Image,
Box,
Button,
Collapse
} from '@chakra-ui/core'

import {FaInfoCircle, FaNewspaper, FaCommentAlt, FaBriefcase} from "react-icons/fa"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

function header(props) {
const initRef = React.useRef();
const [show, setShow] = React.useState(0);
const [search, setSearch] = React.useState(false)

return (
<div className="header bg-white shadow-sm">
        <div className="container">
            <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                <div className="d-flex align-items-center">
                    <Menu></Menu>
                    <Link href="/">
                        <Image src="/assets/logo.png" height="48px" className="d-none d-sm-block mr-3"></Image>
                    </Link>               

                    <Button className="text-dark hover-effect d-none d-lg-block" variantColor="white" rightIcon="chevron-down" onClick={() => show === 1 ? setShow(0) : setShow(1)} >Solutions</Button>
                    <Button className="d-none d-lg-block text-dark hover-effect" onClick={() => show === 2 ? setShow(0) : setShow(2)} variantColor="white" rightIcon="chevron-down">Company</Button>
                    <Link href="/features">
                        <Button className="d-none d-lg-block text-dark hover-effect" variantColor="white">Our Features</Button>
                    </Link>
                </div>
               <Link href="/">
                    <Image src="/assets/logo.png" height="48px" className="mr-3 d-sm-none"></Image>
                </Link>
                <div className="d-flex">
                    <span className="NunitoSans-SemiBold p-2 d-none d-lg-block">Call Us <b>1300 00 BGUS</b></span>
                    <Search toggle ={() => setSearch(!search)} searching={search}></Search>
                    <Link href="/contact">
                        <Button className="mx-3 d-none d-sm-block" variant="solid" variantColor="primary">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>



        {/* Menu */}
        <Collapse isOpen={show === 1}>
        <Fade duration={800} distance={"30%"} bottom >
         <Box>
            <div className="container pb-5 pt-3">
                <div className="row">
                    <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                        <div className="display6 mt-2 text-primary text-uppercase">Solutions</div>
                        <div className="NunitoSans-ExtraBold text-secondary mt-2">We cover almost
                            90% technology domain required by your business.</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                            IT Infrastructural Services
                        </span>
                        <Link href="/services/infra">
                        <a>Computing Infrastructure</a>
                        </Link>
                        <Link href="/services/storage-unit">
                        <a>Storage Unit</a>
                        </Link>
                        <Link href="/services/cloud-logging">
                        <a>Cloud Logging</a>
                        </Link>
                        <Link href="/services/platform">
                        <a>Cloud Platform Service</a>
                        </Link>
                        <Link href="/services/firewall"><a>Firewalls</a></Link>
                        <Link href="/services/application-dev"><a>Application Development</a></Link>
                        <Link href="/services/web-hosting"><a>Web Hosting Solutions</a></Link>
                        <Link href="/services/backup"><a>Backup Services</a></Link>


                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                            Network Services
                        </span>

                        <Link href="/services/sd-wan"><a>SD-WAN Optimization</a></Link>
                        <Link href="/services/proxy-server"><a>Proxy Severs</a></Link>
                        <Link href="/services/dns"><a>DNS</a></Link>
                        <Link href="/services/wireless-networks"><a>Wireless Networks</a></Link>
                        <Link href="/services/cloud-exchange"><a>Cloud Exchange Connectivity</a></Link>
                        <Link href="/services/sip-connectivity"><a>SIP Connectivity</a>
                        </Link>
                        <span className="mt-4 mb-1">
                            Disaster Recovery Services
                        </span>
                        <Link href="/services/disaster-recovery"><a>Disaster Recovery Management</a></Link>

                    </div>
                    <div className="col-lg-3 d-flex flex-column footer-content">
                        <span className="mt-4 mb-1">
                            Collaborative Services
                        </span>
                        <Link href="/services/ucaas"><a>Unified Communications</a></Link>
                        <Link href="/services/contact-center-services"><a>Contact Center As A Service</a>
                        </Link>
                        <Link href="/services/architectural-consultancy"><a>Architectutral
                            Consultancy</a></Link>
                    </div>
                </div>
            </div>
        </Box>
        </Fade>
        </Collapse>
        <Collapse isOpen={show === 2}>
        <Fade duration={800} distance={"30%"} bottom >
        <Box>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 py-4 pr-5 d-flex flex-column header-list">
                        <div className="display6 mt-2 text-primary text-uppercase">Company</div>
                        <div className="NunitoSans-ExtraBold text-secondary mt-2">Get the latest
                            resources and updates from our company here.</div>
                    </div>
                    <div className="col-lg-3 py-4 d-flex flex-column header-list">
                        <Link href="/about"><a className="d-flex"><Box as={FaInfoCircle} size="20px" mr="12px"></Box>About Us</a></Link>
                        <Link href="/newsroom"><a className="d-flex"><Box as={FaNewspaper} size="20px" mr="12px"></Box>Newsroom</a></Link>
                        <Link href="/solutions"><a className="d-flex"><Box as={FaBriefcase} size="20px" mr="12px"></Box>Our Solutions</a></Link>
                        <Link href="/contact"><a className="d-flex"><Box as={FaCommentAlt} size="20px" mr="12px"></Box>Contact Us</a></Link>
                    </div>
                    <div className="col-lg-6 py-4 d-flex flex-column header-list">
                        <h5 className="text-primary display6">What's New</h5>
                        <Link
                            href="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw">
                            <WhatsNew
                                image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg"
                                heading="BG Unified Solutions got nominated for two awards"
                                text="BG Unified Solutions got nomination ...">
                            </WhatsNew>
                        </Link>
                        <Link
                                    href="/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1">
                            <WhatsNew
                                        image="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg"
                                        heading="Successfull upgradation Mega Cisco Call Manager"
                                        text="BG Unified Solutions team have successfully upgraded its  ...">
                            </WhatsNew>
                        </Link>
                    </div>
                </div>
            </div>
        </Box>
        </Fade>
        </Collapse>
</div>
);
}

export default header;
>>>>>>> search option done
