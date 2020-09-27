import React from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Team from "../components/cards/team";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";

const team = [
    { name: "Yuvraj Midha", username: "yuvraj", designation: "Project Manager"},
    { name: "Shubh Bhardwaj", username: "shubh", designation: "Content Curator/ Frontend Developer"},
    { name: "Anuj Bansal", username: "anuj", designation: "Senior Developer"},
    { name: "Manav Chhabra", username: "manav", designation: "Front-End Developer"},
    { name: "Vineet Yadav", username: "vineet", designation: "Front-End Developer"},
    { name: "Vishu Chhabra", username: "vishu", designation: "Product Engineer"},
    { name: "Keysang Yonthan", username: "keysang", designation: "Web Designer"},
    { name: "Sparsh Gupta", username: "sparsh", designation: "Graphic Designer & Illustrator"},
]

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
                <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.webp"></Image>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">BEHIND THE WEB</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Website IT Team</Title>
            </Section>
            <Section>
                <Flex wrap="wrap" justify="center">
                {team.map(member => (
                    <Box width={["100%","100%","100%","66%","50%"]} px={3}>
                    <Team
                    title={member.designation}
                    name={member.name}
                    img={"/assets/images/team/" + member.username +".jpg"}
                    >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eaque aut pariatur doloremque non. Porro doloribus, animi dolores fugit repudiandae quisquam quibusdam, quidem non amet at, molestiae saepe temporibus nemo.
                  </Team>
                  </Box>
                    
                ))}
                </Flex> 
            </Section>
        </>
    );
}

export default webteam;