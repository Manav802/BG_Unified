import React from 'react';
import Section from '../../../pageBuilder/Section';
import terms from "../../../database/terms";
import { useRouter } from "next/router";
import { Grid, Box,Icon, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    List,
    ListItem,
    Flex,
    Text,
    Button, } from '@chakra-ui/core';
import Container from '../../../pageBuilder/Container';
import Head from 'next/head';
import Link from 'next/link';
import RenderSection from '../../../pageBuilder/RenderSection';
import Body from '../../../pageBuilder/Body';

function main(props) {
    const router = useRouter();
    const { url } = router.query;
    const [section, setSection] = React.useState({})
    const [index, setIndex] = React.useState(0)
    

    React.useEffect(() => {
        if (url && terms) {
            setSection(terms.filter(t => t.url === url)[0])
            setIndex(terms.findIndex(t => t.url === url))
        }
    }, [url])
    
    return (
        <>
            <Container>
            <Grid templateColumns={["auto", "auto", "auto", "280px auto"]}>
                <Box py={8} px={3} my={20} borderRightWidth={1} borderRightColor="gray.200">
                    <Heading mt={4} fontSize="lg" textTransform="uppercase" opacity={.7}>Sections</Heading>

                    <List mt={6} px={4} as="ol" styleType="decimal" fontSize="md" fontWeight="600" spacing={3} stylePos="outside">
                        <ListItem>Home</ListItem>
                        {terms.map((t, i) => (
                            <ListItem color={section.title === t.title ? "primary.500" : "dark.500"}>{t.title}</ListItem>
                        ))}
                        
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
                        <Heading my="16px" fontSize="48px" fontFamily="Nexa Bold">{section.title}</Heading>
                    {section.body && <Body
                        type="content"
                        width="100%"
                        mt="32px"
                        gap={0}
                        data={section.body}
                    />}
                </Section> 
            </Grid> 
            <Flex width="100%" mb="64px" justify="space-between">
                {/* {index !== 0 ? <Box>
                    <Text fontWeight="700">Prev</Text>
                    <Heading fontSize="lg" fontFamily="Nexa Light">{terms[index - 1].title}</Heading>
                </Box> : <div></div>}
                {index < 17 ? <Button bg="light.500" py={8} px={6}>
                    <Box textAlign="right">
                        <Text fontWeight="700">Next</Text>
                        <Heading fontSize="lg" fontFamily="Nexa Light">{terms[index + 1].title}</Heading>
                    </Box>
                    <Icon ml={4} size="24px" name="arrow-forward"></Icon>
                </Button> : <div></div>} */}
            </Flex>
            </Container>
        </>
    );
}

export default main;