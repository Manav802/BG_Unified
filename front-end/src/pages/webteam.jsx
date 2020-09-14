import React from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";

const team = [
    { name: "Yuvraj Midha", username: "yuvraj", designation: "Project Manager"},
    { name: "Shubh Bhardwaj", username: "shubh", designation: "Content Curator & Front-end Developer"},
    { name: "Anuj Bansal", username: "anuj", designation: "Senior Developer"},
    { name: "Manav Chhabra", username: "manav", designation: "Front-end Developer"},
    { name: "Vineet Yadav", username: "vineet", designation: "Product Engineer"},
    { name: "Vishu Chhabra", username: "vishu", designation: "Product Engineer"},
    { name: "Keysang Yonthan", username: "keysang", designation: "Web Designer"},
    { name: "Sparsh Gupta", username: "yuvraj", designation: "Graphic Designer & Illustrator"},
]

function webteam(props) {
    return (
        <>
            <Head>
                <title>The team behind the web - BG Unified</title>
            </Head>
            <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
                <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">BEHIND THE WEB</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Website IT Team</Title>
            </Section>
            <Section>
                <Flex wrap="wrap">
                {team.map(member => (
                    <Flex direction="column" px={3} my={3} width={["100%", "100%","50%", 1/3]}>
                        <Image src="/assets/images/team/profile.jpg" rounded={12} height="360px" objectFit="cover"></Image>
                        <Title size="lg" textAlign="left" mt={4}>{member.name}</Title>
                        <Text fontSize="md" mx={2} opacity=".7" fontWeight="600">{member.designation}</Text>
                    </Flex>
                ))}
                </Flex> 
            </Section>
        </>
    );
}

export default webteam;