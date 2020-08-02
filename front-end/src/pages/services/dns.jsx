import React from 'react';
import { Button } from '@chakra-ui/core'
import Head from 'next/head'
import { useDisclosure } from "@chakra-ui/core";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/core";
import ContactForm from '../../components/contactForm/main';
function main(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Head>
                <title>DNS - BG Unified</title>

                <link rel="shortcut icon" href="/assets/images/icons/favicon/bg.ico" type="image/x-icon" />
            </Head>
            <div className="section pb-0 bg-dark">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5 text-center py-5">
                                <div className="display2 text-white">
                                    DNS Services
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/dividers/divider_red_bottom.svg" style={{ height: "239px", objectFit: "cover" }} className="w-100 image-flip" alt="" />
            </div>

            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-center offset-lg-1">
                            <div className="h4 NunitoSans-ExtraBold">Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. </div>
                            <div className="h6 mt-4 text-secondary text-dark">With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 p-5 ">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">
                                    Scalability
                        </div>
                                <p className="text-secondary mt-3">Hierarchical nature of  DNS, making it scalable. Allows every organization to manage its authoritative and operational data effectively, even with increased resources. Maintaining compatibility as DNS servers clients run on different hardware, different operating systems.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">Concurrency
                        </div>
                                <p className="text-secondary mt-3">Allows and handles multiple requests simultaneously and manages data by distributing over a large number of hosts. Detects, isolates, notifies and corrects faults encountered in the network.
                        </p>
                            </div>
                        </div>

                    </div>

                    <div className=" row mt-5 mt-lg-0">
                        <div className="col-lg-5 p-5">
                            <img src="/assets/images/Illustrations/Services/Firewall/diversity.svg" alt="" className="max-height2"/>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center px-5">
                            <div>
                                <div className="h5 NunitoSans-Bold text-dark">Reliability
                        </div>
                                <p className="text-secondary mt-3">The user or the end host need not dive into the technicality about root or TLD servers. Only need to know the basics of the functioning. Eliminating vulnerabilities like cache poisoning, to reach a satisfactory level of security, making our DNS service extremely reliable.
                        </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="h2 NunitoSans-ExtraBold col-12 text-center">
                            Ready to try out our <br className="d-none d-md-block" />DNS services?
                    </div>
                        <div className="h6 col-12 mt-2 text-secondary text-center">
                            BGUS DNS services are affordable and dynamically priced.
                    </div>
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            <Button onClick={onOpen} variantColor="primary" size="md">Get a Quote</Button>
                            <Modal isOpen={isOpen} onClose={onClose} isCentered size={['lg','xl']}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader><span className="display5">Get a quote</span></ModalHeader>
                                    <ModalCloseButton/>
                                    <ModalBody>
                                        <ContactForm/>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section"></div>
        </div>
    );
}

export default main;