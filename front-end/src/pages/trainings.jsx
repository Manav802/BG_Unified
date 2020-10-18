import { Box, Heading, Text, Image, Flex } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import trainings from "../database/trainings";
import Description from "../pageBuilder/Description";
import { PricingQuote } from "../components/cards/PricingCard";
import Conclusion from "../components/footer/conclusion";
function Training(props) {
    return <>
    <Fade bottom distance="10%" duration={300}>
        <Flex width="100%" height="100%" pos="relative" overflow="hidden" boxShadow="xl" bg="white" rounded={8}>
            <Box width="25%" p={12}>
                <Image objectFit="contain" width="100%" maxW="256px" height="128px" src={"assets/images/brands/Icons/" + props.image}></Image>
            </Box>
            <Box width="75%" p={12}>
                {/* <Title textAlign="left">
                    {props.title}
                </Title> */}
                <Text mb={3} textAlign="justify">
                    {props.content}
                </Text>
                <PricingQuote button serviceName="Trainings & Certifications" serviceDescription={props.title}>Get a Quote</PricingQuote>
            </Box>
            
        </Flex>
    </Fade>
    </>
}


function main() {
    return <>
        <Head><title>Trainings and Certifications | BG Unified Solutions</title></Head>
        <Section color="white" py={["6rem","8rem","10rem"]} my={0} bg="dark.500" pos="relative">
    <img
        className="bg-image"
        src="/assets/images/backgrounds/tranings.jpg"
        style={{opacity:"0.3"}}
        />
                <Fade duration={700} delay={1000} bottom>
                    <Flex textAlign={["center","center","left"]} alignContent={["center","center","left"]} justifyContent={["center","center","left"]}  align="center" py={4}>
                        <Heading fontSize={["18px","24px"]}>Trainings and Certifications</Heading>
                    </Flex>
                </Fade>
                <Fade duration={700} delay={100} bottom>
                <Flex textAlign={["center","center","left"]} justifyContent={["center","center","left"]}>
                    <Heading fontSize={["40px", "48px","56px","64px"]} className="display2 text-white">
                        Be Trained for World-Class Technologies
                    </Heading>
                </Flex>
                </Fade>
        </Section>
        <Section mb={0}>
            <Heading opacity=".9" lineHeight={1.5} fontSize="32px" fontFamily="Nexa Bold" textAlign="center">
                BG Unified Solutions brings to you a completely reliable infrastructure for your training labs. 
            </Heading>
            <Description>
            Get industry-ready, be proficient in leading world technologies offered by Global Tech Giants in their respective domains.
            </Description>
            <Row rowDistance={8}>
                {trainings.map((company, index) => <Box width="100%" my={3} px={3}>
                    {Training(company)}
                </Box>)}
            </Row>
        </Section>
        <Section my={0}>
            <Description>BGUS provides a highly secure and available infrastructure for all the virtual labs included in the course curriculum. We aim to deliver a wholly nurturing and informative training environment that comprises Labs, Lectures, Discussion Forums, Tests, and much more for being technically sound and having a broad understanding of the technological concepts…</Description>
        </Section>
        <Section mt={0} py={0}>
            <Conclusion align="center" description="Aspire to be a certified IT Professional??" explore={false} contact></Conclusion>
        </Section>
    </>
}
export default main;
