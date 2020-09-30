import React from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import team from "../database/team";
import Team from "../components/cards/team";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { FaBehance, FaBlogger, FaGithub, FaLinkedin } from 'react-icons/fa';

const teamCard = (member, height) => (<Box className="ps-team-card" height={height} overflow="hidden" my={2}  bg="dark.500"  pos="relative" rounded={8}>
<Image opacity=".5" className=" team-image bg-image" src={`/assets/images/team/${member.username}.jpg`}></Image>

    <Flex height="100%" justify="flex-end" flexDirection="column" color="white" p={8}>
        <Fade>
            <Heading className="heading" size="lg" fontFamily="Nexa Bold">{member.name}</Heading>
            <Heading className="heading" size="sm" mt={2}>{member.designation}</Heading>
            <Text className="description" mt={2}>{member.description}</Text>
            <Flex className="links" mt={3} mx="-8px">
                {member.links.github && <Box as="a" p={2} href={member.links.github} ><FaGithub color="white" size="24px"></FaGithub></Box>}
                {member.links.behance && <Box as="a" p={2} href={member.links.behance} ><FaBehance color="white" size="24px"></FaBehance></Box>}
                {member.links.linkedin && <Box as="a" p={2} href={member.links.linkedin} ><FaLinkedin color="white" size="24px"></FaLinkedin></Box>}
                {member.links.blogger && <Box as="a" p={2} href={member.links.blogger} ><FaBlogger color="white" size="24px"></FaBlogger></Box>}
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
            <Box  zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{mixBlendMode:"overlay"}}  opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
                <Fade distance="5%" duration={500} top>
                <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Behind the Web</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Website IT Team</Title>
                </Section>
                </Fade>
            </Box>
            <Section>
                <Flex wrap="wrap" justify="center">
                    <Box width={["100%","100%","100%","66%","56%"]} px={2}>
                        {teamCard(team[0], "560px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","44%"]} px={2}>
                        {teamCard(team[3], "274px")}
                        {teamCard(team[4], "274px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","50%"]} px={2}>
                        {teamCard(team[2], "560px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","50%"]} px={2}>
                        {teamCard(team[1], "560px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","33.33%"]} px={2}>
                        {teamCard(team[5], "560px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","33.33%"]} px={2}>
                        {teamCard(team[6], "560px")}
                    </Box>
                    <Box width={["100%","100%","100%","66%","33.33%"]} px={2}>
                        {teamCard(team[7], "560px")}
                    </Box>
                </Flex> 
            </Section>
        </>
    );
}

export default webteam;