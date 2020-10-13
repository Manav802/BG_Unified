import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import Stories from "../components/TestimonialCard/CustomerStories";
import TESTIMONIALS from "../database/testimonials";
function main() {
    return <>
        <Head><title>Customer Stories | BG Unified Solutions</title></Head>
        <Box zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{ mixBlendMode: "overlay" }} opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
            <Fade distance="5%" duration={500} top>
                <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
                    <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">What they say!</Heading>
                    <Title zIndex="100" fontSize={["44px", "64px"]}>Customer Stories</Title>
                </Section>
            </Fade>
        </Box>
        <Section><Stories testimonials={TESTIMONIALS} /></Section>
        <Section>
            <Flex className="comment-box" width="100%" my={6} bg="white" rounded={8} pos="sticky" height="480px" top="128px" boxShadow="xl">
                <Flex justify="center" p={12} align="center" flexDirection="column" width={"100%"}>
                    <Image maxW="160px" objectFit="contain" height="128px" src="/assets/images/icons/color/monitor.svg"></Image>
                    <Heading textAlign="center" mt={6} fontFamily="Nexa Bold" size="xl">Let's get IT done.</Heading>
                    <Text textAlign="center" mx={6} mt={3} maxW="448px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum rem dolores nisi voluptas, ipsa modi dolor minima.</Text>
                    <Button variant="ghost" variantColor="red" mt={3} rightIcon="chevron-right">Explore Now</Button>
                </Flex>
            </Flex>
        </Section>
    </>
}
export default main;
