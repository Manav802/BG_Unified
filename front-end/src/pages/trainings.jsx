import { Box, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import trainings from "../database/trainings";
function Training(props) {
    return <>
        <Section>
            <Row align="center" justify="space-between">
                <Box my={[3, 3]} width={["70%", "60%", "60%", 1 / 3.5]} >
                    <Image objectFit="contain" src={"assets/images/brands/Icons/" + props.image}>
                    </Image>
                </Box>
                <Box width={["100%", "100%", "100%", 2.4 / 3.5]}>
                    <Text
                        fontSize={[32, 36, 40, 48]}>
                        {props.title}
                    </Text>
                    <Text
                        textAlign="justify"
                        fontSize={["lg", "xl"]}>
                        {props.content}
                    </Text>
                </Box>
            </Row>
        </Section>
    </>
}


function main() {
    return <>
        <Head><title>Trainings and Certifications | BG Unified Solutions</title></Head>
        <Box zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{ mixBlendMode: "overlay" }} opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
            <Fade distance="5%" duration={500} top>
                <Section position="relative" color="white" py={[24, 32]} my={0}>
                    <Title zIndex="100" textAlign="left" px={0} fontSize={["44px", "64px"]}>Trainings and Certifications</Title>
                    <Heading zIndex="100" size="xs" letterSpacing={1.8} mb={4} textTransform="uppercase"> Be trained for world-class technologies!</Heading>
                </Section>
            </Fade>
        </Box>
        {trainings.map(Training)}
    </>
}
export default main;
