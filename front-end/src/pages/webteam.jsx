import React from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import team from "../database/team";
import Team from "../components/cards/team";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { FaBehance, FaBlogger, FaGithub, FaLinkedin } from 'react-icons/fa';

const teamCard = (member) => (<Box className="ps-team-card" height="448px" overflow="hidden" my={3}  bg="dark.500"  pos="relative" rounded={8}>
<Image opacity=".5" className=" team-image bg-image" src="/assets/images/team/yuvraj.jpg"></Image>

    <Flex height="100%" justify="flex-end" flexDirection="column" color="white" p={8}>
        <Fade>
            <Heading size="xl" fontFamily="Nexa Bold">Yuvraj Midha</Heading>
            <Heading size="md" mt={2} fontFamily="Nexa Bold">Project Manager & Development Lead</Heading>
            <Text className="description" mt={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptates officia qui temporibus molestiae expedita quaerat, eaque amet dolore eligendi quasi nulla aliquid architecto vero, porro est fugit neque ipsa!</Text>
            <Flex mt={3} mx="-8px">
                <Box as="a" p={2} ><FaGithub color="white"  size="24px"></FaGithub></Box>
                <Box as="a" p={2} ><FaBehance color="white"  size="24px"></FaBehance></Box>
                <Box as="a" p={2} ><FaLinkedin color="white"  size="24px"></FaLinkedin></Box>
                <Box as="a" p={2} ><FaBlogger color="white"  size="24px"></FaBlogger></Box>
            </Flex>
        </Fade>
    </Flex>

</Box>)

function webteam(props) {
    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>The team behind the Web - BG Unified Solutions</title>
                <meta name ="description" content = "The team behind building this website">
                </meta>
                <meta property="og:title" content="The team behind the Web - BG Unified Solutions" key="title" />
                <meta property="og:description" content="The team behind building this website" key ="description"></meta>
                
            </Head>
            <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
                <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">BEHIND THE WEB</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Website IT Team</Title>
            </Section>
            <Section>
                <Flex wrap="wrap" justify="center">
                {team.map(member => (
                    <Box width={["100%","100%","100%","66%","50%"]} px={3}>
                        {teamCard()}
                  </Box>
                ))}
                </Flex> 
            </Section>
        </>
    );
}

export default webteam;