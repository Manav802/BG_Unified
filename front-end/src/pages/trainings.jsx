import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
function main() {
    return <>
        <Head><title>Trainings | BG Unified Solutions</title></Head>
        <Box zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{ mixBlendMode: "overlay" }} opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
            <Fade distance="5%" duration={500} top>
                <Section position="relative" color="white" py={[24, 32]} my={0}>
                    <Title zIndex="100" textAlign="left" fontSize={["44px", "64px"]}>Trainings</Title>
                    <Heading zIndex="100" size="xs" letterSpacing={1.8} mb={4} textTransform="uppercase">Learn and Grow!</Heading>
                </Section>
            </Fade>
        </Box>

    </>
}
export default main;
