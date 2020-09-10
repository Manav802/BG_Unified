import React, { Component } from "react";
import Head from "next/head";
import CardWithImage from "../../components/cards/CardWithImage";
import newsroom from "../../database/newsroom"
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, InputGroup, InputLeftElement, Button, Icon, Input, Image, Avatar, Badge, Flex, Grid, MenuList, Menu, MenuButton } from "@chakra-ui/core";

function Newsroom(){
    const [category, setCategory] = React.useState("All")
    const [search, setSearch] = React.useState("")
    return (
      <div className="newsroom">
        <Head>
          <title>Newsroom - BG Unified</title>

          <link
            rel="shortcut icon"
            href="/assets/images/icons/favicon/bg.ico"
            type="image/x-icon"
          />
        </Head>
        <Section position="relative" textAlign="center" py={32} my={0}>
            <Image zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.jpg"></Image>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">News from us</Heading>
            <Title zIndex="100" fontSize="64px">Our Newsroom</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Get the latest updates from us.</Text>
            <Box pos="relative">
              <InputGroup mx="auto" mt={8} width={["100%","100%","520px"]}>
                <InputLeftElement m="6px"><Icon name="search" size="14px" color="dark.500"></Icon></InputLeftElement>
                <Input boxShadow="xl" py={6} focusBorderColor="primary.500" pl={12} value={search} onChange={(e) => setSearch(e.target.value)} color="dark.500" fontSize="xl" placeholder="Search here..."></Input>
              </InputGroup>
              {search && <Flex pos="absolute" mt={4} justifyContent="center" width="100%">
                  <Box bg="white" width={["100%","100%","520px"]} boxShadow="lg">
                    {newsroom.filter(blog => blog.tags.includes(search)).map(blog => <Link href={"/newsroom" + blog.link}>
                    <Heading size="md" textAlign="left" className="hover-effect" p={3}>{blog.title}</Heading>
                    </Link>)}
                  </Box>
              </Flex>}
            </Box>
        </Section>
        {/* CardWithImage have weird width, bad component, pls fix */}

        <Section mt={0}>
              <Grid templateColumns="280px auto">
              <Box p={4}>
                <Button width="100%" bg="light.500" color={category === "All" ? "primary.500" : "dark.500"} justifyContent="start" onClick={() => setCategory("All")}>All</Button>
                <Button width="100%" bg="light.500" color={category === "Random" ? "primary.500" : "dark.500"} justifyContent="start" onClick={() => setCategory("Random")}>Random</Button>
              </Box>
              <Box width="100%" px={3}>
                {newsroom.map(blog =>{if(blog.category === category || category === "All") return(
                <Link href={"/newsroom/" + blog.link}><Box as="a" fontWeight="500">
                  <CardWithImage
                  src={blog.image}
                  title={blog.title}
                >
                  <Text mt={1} opacity={.7} fontSize="lg">{blog.description}</Text>
                  <Flex mt={4}>
                  <Avatar src="https://bit.ly/sage-adebayo" />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      Segun Adebayo
                    </Text>
                    <Text fontSize="sm">UI Engineer</Text>
                  </Box>
                </Flex>
                </CardWithImage>
                </Box>
                </Link>
                )})}
              </Box>
              </Grid>
        </Section>
      </div>
    );
}
export default Newsroom;
