import React from "react";
import { useRouter } from "next/router";
import services from "../../database/services"
import Head from "next/head";
import Link from "next/link";
import RenderSection from "../../pageBuilder/RenderSection";
import { Box, Button, ButtonGroup, Image, } from "@chakra-ui/core"
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
            <Box py="5rem" className="bg-dark position-relative">
                <Image
                    opacity=".3"
                    className="bg-image"
                    src="/assets/images/backgrounds/domainhosting.jpg"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center justify-content-center">
                            <Fade duration={700} delay={100} bottom>
                                <Box fontSize={["40px", "48px", "64px"]} className="display2 text-white">Storage As A Service (StaaS)</Box>
                            </Fade>

                            <Fade duration={700} delay={300} bottom>
                                <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                                    Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                    </p>
                            </Fade>
                            <Fade duration={700} delay={500} bottom>
                                <ButtonGroup className="mt-3" spacing="16px">
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
            {service.relatedService && <RenderSection
                title="Related Services"
                bg="light.400"
                my={0}
                py={[8,16]}
                titleStyle={{ mb: 6 }}
                body={[
                    {
                        width: ["100%","100%",1/2,1 / 3],
                        type: "service",
                        data: service.relatedService[0],
                    },
                    {
                        width: ["100%","100%",1/2,1 / 3],
                        type: "service",
                        data: service.relatedService[1],
                    },
                    {
                        width: ["100%","100%",1/2,1 / 3],
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
            { params: { name: 'application-dev' } },
            { params: { name: 'architectural-consultancy' } },
            { params: { name: 'backup' } },
            { params: { name: 'cloud-exchange' } },
            { params: { name: 'cloud-logging' } },
            { params: { name: 'contact-center' } },
            { params: { name: 'disaster-recovery' } },
            { params: { name: 'dns' } },
            { params: { name: 'firewall' } },
            { params: { name: 'infra' } },
            { params: { name: 'platform' } },
            { params: { name: 'proxy-server' } },
            { params: { name: 'sd-wan' } },
            { params: { name: 'sip-connectivity' } },
            { params: { name: 'storage-unit' } },
            { params: { name: 'ucaas' } },
            { params: { name: 'web-hosting' } },
            { params: { name: 'wireless-networks' } },
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
