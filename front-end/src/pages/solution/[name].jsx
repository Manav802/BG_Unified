import React from "react";
import { useRouter } from "next/router";
import services from "../../database/services"
import Head from "next/head";
import Link from "next/link";
import RenderSection from "../../pageBuilder/RenderSection";
import { Box, Button, ButtonGroup, Image, Heading, Flex } from "@chakra-ui/core"
import Fade from "react-reveal/Fade"


function Solutions() {
    const router = useRouter();
    const { name } = router.query;
    const [service, setService] = React.useState({})

    React.useEffect(() => {
        if (name && services) {
            setService(services[name])
        }
    }, [name])

    return (
        <>
            <Box py={["6rem","8rem","10rem"]} color="white" className="bg-dark position-relative">
                <Image
                    opacity=".3"
                    className="bg-image"
                    src="/assets/images/backgrounds/network_abstract.jpg"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Fade duration={700} delay={1000} bottom>
                                <Flex align="center" py={4}>
                                    <Image src={service.icon} size="24px"></Image>
                                    <Heading mx={6} size="lg">{service.title}</Heading>
                                </Flex>
                            </Fade>
                            <Fade duration={700} delay={100} bottom>
                                <Heading fontSize={["40px", "48px","56px","64px"]} className="display2 text-white">{service.slogan}</Heading>
                            </Fade>

                            {/* <Fade duration={700} delay={300} bottom>
                                <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                                    Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                                </p>
                            </Fade> */}
                            <Fade duration={700} delay={1000} top>
                                <ButtonGroup mt={10} spacing="16px">
                                    <Button onClick={() => {
                                        window.scrollTo(0, document.getElementById("pricing").offsetTop - 80)
                                    }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Explore Now</Button>
                                    <Link href="/contact"><Button variant="outline" color="white" _hover={{ color: "black", bg: "white" }} size="lg">Contact Sales</Button></Link>
                                </ButtonGroup>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Box>
            {service.sections && service.sections.map((section, index) => (
                <RenderSection {...section}></RenderSection>
            ))}
            <Box bg="light.400" mt="128px" px="16px" py={6}>
            {service.conclusion && <RenderSection 
                title = "Get Started Now"
                titleStyle={{fontSize:["36px","40px","48px"]}}
                descriptionStyle={{mt: 4, opacity: 1, fontSize: ["lg","xl","2xl"]}}
                color="white"
                bg="primary.500"
                description= {service.conclusion}
                py={[6,8,8,10]}
                mt="-128px"
                mx="auto"
                width = {["100%", "100%", "720px", "960px", "1140px"]}
                borderRadius={12}
                endingButton = {{
                    variant: "outline",
                    variantColor: "white",
                    size: "lg"
                }}
                bgImage= 'url("/assets/images/backgrounds/network_abstract.jpg")'
                blend="soft-light"
                endingButtonTitle= "Contact Sales"
                endingButtonLink = "contact"
            />}
            </Box>
            {service.relatedService && <RenderSection
                title="Related Services"
                bg="light.400"
                my={0}
                pt={6}
                pb={12}
                titleStyle={{ mb: 6 }}
                body={[
                    {
                        width: ["100%", "100%", 1/2, 1/3],
                        type: "service",
                        data: service.relatedService[0],
                    },
                    {
                        width: ["100%", "100%", 1/2, 1/3],
                        type: "service",
                        data: service.relatedService[1],
                    },
                    {
                        width: ["100%", "100%", 1/2, 1/3],
                        type: "service",
                        data: service.relatedService[2],
                    },
                ]}
            />}
        </>
    );
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { name: 'appdev' } },
        { params: { name: 'architectural-consultancy' } },
        { params: { name: 'backup' } },
        { params: { name: 'cex' } },
        { params: { name: 'cloud-logging' } },
        { params: { name: 'contact-center' } },
        { params: { name: 'dr' } },
        { params: { name: 'dns' } },
        { params: { name: 'firewall' } },
        { params: { name: 'infra' } },
        { params: { name: 'platform' } },
        { params: { name: 'proxy' } },
        { params: { name: 'sd-wan' } },
        { params: { name: 'sip' } },
        { params: { name: 'storage' } },
        { params: { name: 'ucaas' } },
        { params: { name: 'hosting' } },
        { params: { name: 'wireless' } },
      ],
      fallback: false // See the "fallback" section below
    };
}
export async function getStaticProps() {
    return {
        props: {
        },
    }
}

export default Solutions;
