import React, {useState} from "react";
import { useRouter } from "next/router";
import services from "../../database/services"
import Head from "next/head";
import Link from "next/link";
import Conclusion from "../../components/footer/conclusion"
import RenderSection from "../../pageBuilder/RenderSection";
import { Box, Button, ButtonGroup, Image, Heading, Flex } from "@chakra-ui/core"
import Fade from "react-reveal/Fade"
import SVG from "../../components/svg/SVG";


function Solutions(props) {
    const service = services[props.name];
    const [pricing, setPricing] = React.useState(false)

    React.useEffect(() => {
        if(document){
            setPricing(document.getElementById('pricing'))
        }
    })

    return (
        <>
            <Box py={["6rem","8rem","10rem"]} color="white" className="bg-dark position-relative">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = {service.description}>
                </meta>
                <meta property="og:title" content={`${service.slogan} - ${service.title} | BG Unified Solutions`} key="title" />
                <meta property="og:description" content={service.description}></meta>
                <title>{service.slogan} - {service.title} | BG Unified Solutions</title>

                </Head>
                
                     <img
                    className="bg-image"
                    src={service.bgImage}
                    alt={service.title}
                    style={{opacity:"0.3"}}
                    />
                
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Fade duration={700} delay={1000} bottom>
                                <Flex textAlign={["center","center","left"]} alignContent={["center","center","left"]} justifyContent={["center","center","left"]}  align="center" py={4}>
                                    <SVG src={service.icon} color="light.400" size="24px"></SVG>
                                    <Heading mx={6} fontSize={["18px","24px"]}>{service.title}</Heading>
                                </Flex>
                            </Fade>
                            <Fade duration={700} delay={100} bottom>
                            <Flex textAlign={["center","center","left"]} justifyContent={["center","center","left"]}>
                                <Heading fontSize={["40px", "48px","56px","64px"]} className="display2 text-white">{service.slogan}</Heading>
                            </Flex>
                            </Fade>

                            {/* <Fade duration={700} delay={300} bottom>
                                <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                                    Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                                </p>
                            </Fade> */}
                            <Fade duration={700} delay={1000} top>
                                <Flex justifyContent={["center","center","left"]}>
                                <ButtonGroup mt={10} spacing="16px">
                                    {pricing && <Button onClick={() => {
                                        window.scrollTo(0, document.getElementById("pricing").offsetTop - 80)
                                    }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Explore Now</Button>}
                                    <Link href="/contact"><Button variant="outline" color="white" _hover={{ color: "black", bg: "white" }} size="lg">Contact Sales</Button></Link>
                                </ButtonGroup>
                                </Flex>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Box>
            {service.sections && service.sections.map((section, index) => (
                <RenderSection {...section}></RenderSection>
            ))}
            <Box bg="light.400" mt="128px" px="16px" py={6}>
            {service.conclusion && <Conclusion mt="-128px" align="center" title="Get Started Now" description={service.conclusion} explore={false} contact></Conclusion>}
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

// export async function getStaticPaths() {
//     const ServiceNames = Object.keys(services)
//     return {
//         paths: ServiceNames.map((x)=>({params:{name:x}})),
//         fallback: false // See the "fallback" section below
//     };
// }
export async function getServerSideProps({query}) {
    const { name } = query;

    return {
        props: {
            name
        },
    }
}

export default Solutions;
