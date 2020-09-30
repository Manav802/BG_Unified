import React, {useState} from 'react';
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
            <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
                <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">People who trust us!</Heading>
                <Title zIndex="100" fontSize={["44px","64px"]}>Our Partners</Title>
            </Section>
            
            {partners.map(info => <Section mt={0} pt={0}>
                <Row justify="center">
                    <Box textAlign="justify" fontSize="xl" width={12/12, 12/12, 10/12}>
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