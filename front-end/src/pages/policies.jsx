import React from 'react';
import Section from '../pageBuilder/Section';
import { Grid, Box,Icon, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Image
     } from '@chakra-ui/core';

import Fade from "react-reveal/Fade";
import Head from 'next/head';
import Link from 'next/link';
import Body from '../pageBuilder/Body';
import policy from "../pageBuilder/pages/privacypolicy/levels"
import Title from '../pageBuilder/Title';

function policies(props) {
    return (
        <div>
            <Head>
                <title>Privacy Policy - BG Unified Solutions</title>
            </Head>
            
            <Box  zIndex="10" pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{mixBlendMode:"overlay"}}  opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
                <Fade distance="5%" duration={500} top>
                <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
                <Title zIndex="100" fontSize={["44px","64px"]}>Privacy Policy</Title>
                </Section>
                </Fade>
            </Box>
             <Section>

                    <Body
                        type="content"
                        width="100%"
                        mt="32px"
                        gap={0}
                        data={policy}
                    />
                </Section> 
        </div>
    );
}

export default policies;