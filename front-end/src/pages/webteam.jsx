import React from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import team from "../database/team";
import Team from "../components/cards/team";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { FaBehance, FaBlogger, FaGithub, FaLinkedin } from 'react-icons/fa';

const teamCard = (member, height) => (<Flex height="100%" overflow="hidden" bg="white" pos="relative" rounded={8} boxShadow="xl" p={"32px"} direction="column" justify="center">
    <Box top={"-32px"} left={0} width="100%" transform="skewy(-6deg)" objectFit="contain" pos="absolute" zIndex="0" width="100%" bg="dark.500" height="160px"></Box>
    <Fade>
    <Image rounded="80px" height="160px" mx="auto" width="160px" objectFit="cover" src={`/assets/images/team/${member.username}.jpg`}></Image>
    <Box textAlign="center">
        <Heading mt={4} fontFamily="Nexa Bold" size="lg">{member.name}</Heading>
        <Heading mt={2} size="xs" fontFamily="Nexa Light">{member.designation}</Heading>
    </Box>
    </Fade>
</Flex>)

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
            <Box  zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{mixBlendMode:"overlay"}}  opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
                <Fade distance="5%" duration={500} top>
                <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Development Team</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Meet the Team</Title>
                </Section>
                </Fade>
            </Box>
            <Section>
                <Flex wrap="wrap" justify="center">
                    {team.map(member => <Box width="33%" px={3} my={3}>
                        {teamCard(member)}
                    </Box>)}
                </Flex> 
            </Section>
        </>
    );
}

export default webteam;