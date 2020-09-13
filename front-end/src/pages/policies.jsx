import React from 'react';
import Section from '../pageBuilder/Section';
import { Grid, Box,Icon, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
     } from '@chakra-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import Body from '../pageBuilder/Body';
import policy from "../pageBuilder/pages/privacypolicy/levels"

function policies(props) {
    return (
        <div>
            <Head>
                <title>Privacy Policy - BG Unified Solutions</title>
            </Head>
             <Section mt={[6,12,32]} p={8}>

                    <Heading my="16px" fontSize="48px" fontFamily="Nexa Bold">Privacy Policy</Heading>
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