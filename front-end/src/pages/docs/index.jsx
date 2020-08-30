import React from 'react';
import { Box, Grid, Heading, Icon, Text, List,Button, ListItem } from '@chakra-ui/core';
import Container from '../../pageBuilder/Container';
import Title from '../../pageBuilder/Title';
import Section from '../../pageBuilder/Section';
import Row from '../../pageBuilder/Row';
import { MdNewReleases, MdWork, MdDateRange } from 'react-icons/md';
import { FaArrowUp, FaAsterisk, FaGratipay } from 'react-icons/fa';
import Head from 'next/head';

const categories = [
    {
        title: "What's New",
        icon: MdNewReleases,
        link: "/newsroom",
    },
    {
        title: "Solutions",
        icon: MdWork,
        link: "/newsroom",
    },
    {
        title: "Release Notes",
        icon: MdDateRange,
        link: "/newsroom",
    },
    {
        title: "Terms",
        icon: FaAsterisk,
        link: "/newsroom",
    },
]

function index(props) {
    return (
        <>
            <Section bgImage="url('/assets/images/backgrounds/docs.png')" color="white" py={40} my="0px">
                <Title fontSize="lg" opacity={.7}>BG Unified Solutions</Title>
                <Title mt={4} fontSize={48}>Documentation</Title>
            </Section>
            <Box mt="-64px">
                <Container>
                   <Row>
                        {categories.map((type, index) => (
                            <Box width={[1/2,1/3,1/4]} px="8px">
                            <Button flexDirection="column" h="100%" width="100%" textAlign="center" bg="white" boxShadow="lg" p={6} borderRadius={8}>
                                <Box my={4} size="48px" as={type.icon} color="primary.500" mx="auto"></Box>
                                <Heading mb={4} fontSize="lg">{type.title}</Heading>
                            </Button>
                            </Box>
                        ))}
                   </Row>
                </Container>
            </Box>
            <Section>
                <Container>
                    <Heading py="16px">Getting Started</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dignissimos exercitationem soluta aut dolores et esse harum aspernatur sit quidem pariatur neque sunt nesciunt, velit laudantium! Autem animi ipsam eos.</Text>
                    <Box mt="16px" borderRadius={8} py={6} px={8} borderWidth={1} borderColor="gray.200" shadow="md">
                        <Text color="primary.500" fontSize="xl" fontWeight="700">About Us</Text>
                        <Text mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum delectus accusamus commodi modi nisi, eaque porro. Numquam commodi architecto natus quas similique sunt nostrum dolores quae cupiditate illo? Enim!</Text>
                    </Box>
                    <Box mt="16px" borderRadius={8} py={6} px={8} borderWidth={1} borderColor="gray.200" shadow="md">
                        <Text color="primary.500" fontSize="xl" fontWeight="700">Getting a Subscription</Text>
                        <Text mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum delectus accusamus commodi modi nisi, eaque porro. Numquam commodi architecto natus quas similique sunt nostrum dolores quae cupiditate illo? Enim!</Text>
                    </Box>
                </Container>
            </Section>
            <Section mt={0} pt={0}>
                <Container>
                    <Heading py="16px">Upcoming</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dignissimos exercitationem soluta aut dolores et esse harum aspernatur sit quidem pariatur neque sunt nesciunt, velit laudantium! Autem animi ipsam eos.</Text>
                    <List as="ol" fontSize="lg" fontWeight="600" spacing={3} mt="16px" px={5} stylePos="outside" styleType="disc">
                        <ListItem>We are gonna release SOCaaS Aa A Service in the upcoming month. Stay Tuned.</ListItem>
                        <ListItem>Unassigned floating IP charges will now appear on invoices. The first charge will appear on July 2020 invoices for all floating IPs that were not assigned to Droplets during the month of June</ListItem>
                    </List>
                </Container>
            </Section>
            <Section mt={0} pt={0} mb={20}>
                <Container>
                    <Heading py="16px">What's New</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dignissimos exercitationem soluta aut dolores et esse harum aspernatur sit quidem pariatur neque sunt nesciunt, velit laudantium! Autem animi ipsam eos.</Text>
                    <Heading mt="12px" fontSize="2xl">23rd July 2020</Heading>
                    <List as="ol" fontSize="lg" fontWeight="600" spacing={3} mt="16px" px={5} stylePos="outside" styleType="disc">
                        <ListItem>We are gonna release SOCaaS Aa A Service in the upcoming month. Stay Tuned.</ListItem>
                        <ListItem>Unassigned floating IP charges will now appear on invoices. The first charge will appear on July 2020 invoices for all floating IPs that were not assigned to Droplets during the month of June</ListItem>
                    </List>
                </Container>
            </Section>
        </>
    );
}

export default index;