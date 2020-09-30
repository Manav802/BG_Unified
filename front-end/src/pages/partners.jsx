import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/core";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import partners from "../database/partners"
import Row from '../pageBuilder/Row';



function main(props) {
    return (
        <>
            <Head>
                <title>The team behind the web - BG Unified</title>
            </Head>
            <Box zIndex="10" pos="relative" bg="dark.500">
                <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{ mixBlendMode: "overlay" }} opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
                <Fade distance="5%" duration={500} top>
                    <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
                        <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">People who trust us</Heading>
                        <Title zIndex="100" fontSize={["44px", "64px"]}>Our Partners</Title>
                    </Section>
                </Fade>
            </Box>

            {partners.map(info => <Section>
                <Row justify="center">
                    <Box textAlign="justify" fontSize="xl" width={12 / 12, 12 / 12, 10 / 12}>
                        <Image src={info.logo} objectFit="contain" maxW="160px" mb={8} height="64px"></Image>
                        <Heading size="lg">{info.name}</Heading>
                        {info.description}
                    </Box>
                </Row>
            </Section>)}
        </>
    );
}

export default main;