import React from 'react';
import Section from '../../pageBuilder/Section';
import { Grid, Box,Icon, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    List,
    ListItem, } from '@chakra-ui/core';
import Container from '../../pageBuilder/Container';
import Head from 'next/head';
import Link from 'next/link';
import RenderSection from '../../pageBuilder/RenderSection';
import Body from '../../pageBuilder/Body';

function terms(props) {
    return (
        <>
            <Container>
            <Grid templateColumns={["auto", "auto", "auto", "280px auto"]}>
                <Box py={8} px={3} my={20} borderRightWidth={1} borderRightColor="gray.200">
                    <Heading mt={4} fontSize="lg" textTransform="uppercase" opacity={.7}>Sections</Heading>

                    <List mt={6} px={4} as="ol" fontSize="md" fontWeight="600" styleType="decimal" spacing={3} stylePos="outside">
                        <ListItem>Defination & Interpretation</ListItem>
                        <ListItem>Defination & Interpretation</ListItem>
                        <ListItem>Defination & Interpretation</ListItem>
                        <ListItem>Defination & Interpretation</ListItem>
                        
                    </List>
                </Box>
                <Section p={8} containerWidth="100%">
                    <Breadcrumb
                    spacing="8px"
                    
                    separator={<Icon color="gray.300" name="chevron-right" />}
                    >
                        <BreadcrumbItem color="primary.500">
                           <Link href="/docs"><BreadcrumbLink>Docs</BreadcrumbLink></Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Terms</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Heading my="16px" fontSize="48px" fontFamily="Nexa Bold">Defination & Interpretation</Heading>
                    <Body
                        type="content"
                        width="100%"
                        mt="32px"
                        gap={0}
                        data={[
                            {
                                text: "Lorem Ipsum"
                            }
                        ]}
                    />
                </Section> 
                
            </Grid> 
            </Container>
        </>
    );
}

export default terms;