import React from "react";
import { Image, Flex, Avatar, Box, Text, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import Fade from 'react-reveal/Fade';
import blogs from "../../database/newsroom";
import Head from "next/head";
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import Body from "../../pageBuilder/Body";

//  Gets id of blog (bid) from url and use that bid to get blog content from BLOGS array.
//  url basic : /blogs/bid
//  example   : /blogs/covid-19


function Blogs() {
  const router = useRouter();
  const { bid } = router.query; //get blog id from url

  var blog = blogs.filter((blog) => {
    if (blog.link == bid) {
      return blog;
    }
  })[0] || { content: "" }; //Filter and get the current blog object

  const imgalt=blog.imgalt;


  return (
    <div className="article">
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = {blog.description}>
                </meta>
                <meta property="og:title" content={blog.title} key="title" />
                <meta property="og:description" content={blog.description} key ="description"></meta>
                <meta name="keywords" content={blog.tags.map((x)=>(x))}></meta>
        <title>{blog.title || ""}</title>
        <link
          rel="shortcut icon"
          href="../assets/images/icons/favicon/bg.ico"
          type="image/x-icon"
        />
      </Head>

      
  
     <Box  zIndex="10" pos="relative" bg="dark.500">
          <Image position="absolute" height="100%" zIndex="0" top={0} left={0}  opacity=".3" objectFit="cover" width="100%" src={blog.image}></Image>
            <Fade distance="5%" duration={500} top>
            <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
            <Heading width="fit-content" rounded={8} zIndex="100" size="xs" textAlign="center" color="white" bg="primary.500" py={1} px={2} mb={4}>{blog.category}</Heading>
            <Title textAlign="left" zIndex="100" fontSize={["24px","48px"]}>{blog.title}</Title>
            </Section>
            </Fade>
          </Box>
     <Section mt={6} py={0} >
        <Box fontWeight={["400","500"]} lineHeight={1.6} color="gray.500" width={["100%","100%","72%"]}>
        {blog.content && blog.content.map((body, index) => (
            <Body {...body}></Body>
        ))}
        </Box>  
      </Section>         
      <Section pt={0} pb={6}>
        <Flex width={["100%","100%","72%"]}>
          <Flex >
            <Avatar src={blog.avatar} />
            <Box ml="3">
              <Text fontWeight="bold">
                by <br></br> {blog.by || "Team"}
              </Text>
              
            </Box>
          </Flex>
          <Text ml="auto"  fontSize="md">Posted On <br></br> <b>{blog.date}</b></Text>
          </Flex>
      </Section>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogs.map((x)=>({params:{bid:x.link}})),
    fallback: false // See the "fallback" section below
  };
}
export async function getStaticProps() {
  return {
    props: {
    },
  }
}

export default Blogs;
