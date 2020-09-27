import React, { Component,useEffect } from "react";
import Head from "next/head";
import CardWithImage from "../../components/cards/CardWithImage";
import newsroom from "../../database/newsroom"
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, InputGroup, InputLeftElement, Button, Icon, Input, Image, Avatar, Badge, Flex, Grid, MenuList, Menu, MenuButton } from "@chakra-ui/core";
import {dynamicSearch} from "../../../public/assets/js/searchFunctions"
import { Divider } from "@chakra-ui/core";

function Newsroom(){
    const [category, setCategory] = React.useState("All")
    const [search, setSearch] = React.useState("")
    const [data, setData] = React.useState({
      pages: [],
      services: [],
      articles: []
    })
    const handleValue = (e) => {
      setSearch(e.target.value)
      setData(dynamicSearch(e.target.value))
    }
    return (
      <div className="newsroom">
        <Head>
          <title>Newsroom - BG Unified Solutions</title>
        </Head>
        <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 24]} my={0}>
            <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.webp"></Image>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">News from us</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>Our Newsroom</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Get the latest updates from us.</Text>
            <Box display={["none", "block"]}pos="relative">
              <InputGroup mx="auto" mt={8} width={["100%","100%","520px"]}>
                <InputLeftElement m="6px"><Icon name="search" size="14px" color="dark.500"></Icon></InputLeftElement>
                <Input boxShadow="xl" py={6} focusBorderColor="primary.500" pl={12} onChange={handleValue} value={search}  color="dark.500" fontSize="xl" placeholder="Search here..."></Input>
              </InputGroup>
              {search && <Flex pos="absolute" zIndex="600"  mt={4} justifyContent="center" width="100%">
                  <Box bg="white" width={["100%","100%","520px"]} boxShadow="lg">
                    {data.articles.length > 0 && data.articles.map(blog => (  <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}>
                    <Heading size="md" textAlign="left" className="hover-effect" p={3}>{blog.title}</Heading>
                    </Link> ) )}
                  </Box>
              </Flex>}
            </Box>
        </Section>
        {/* CardWithImage have weird width, bad component, pls fix */}

        <Section pt={0} mt={0}>
              <Flex borderBottomWidth={2} m={3} p={4} justify="center">
                <Button bg="light.500" color={category === "All" ? "primary.500" : "dark.500"} justifyContent="start" onClick={() => setCategory("All")}>All</Button>
                <Button bg="light.500" color={category === "Updates" ? "primary.500" : "dark.500"} justifyContent="start" onClick={() => setCategory("Updates")}>Updates</Button>
                <Button bg="light.500" color={category === "Case Study" ? "primary.500" : "dark.500"} justifyContent="start" onClick={() => setCategory("Case Study")}>Case Studies</Button>
              </Flex>
              <Flex wrap="wrap">
                {newsroom.map(blog =>{if(blog.category === category || category === "All") return(<>
                <Box width={["100%","100%","50%","50%","33%"]} px={3} my={3} fontWeight="500">
                <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}><a>
                  <CardWithImage
                  src={blog.image}
                  title={blog.title}
                  columns={["128px auto", "auto"]}
                  height={["96px", "216px"]}
                >
                  <Text mt={1} opacity={.7} fontSize={["sm","md"]} overflow="hidden" height={["40px", "auto"]}>{blog.description}</Text>
                  <Flex display={["none","flex"]} mt={4}>
                  <Avatar src={blog.avatar} />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {"by " + blog.by || "Team"}
                    </Text>
                    <Text fontSize="sm">Posted On {blog.date}</Text>
                  </Box>
                </Flex>
                </CardWithImage>
                </a>
                </Link>
                </Box>
                </>

                )})}
              </Flex>
        </Section>
      </div>
    );
}
export default Newsroom;
