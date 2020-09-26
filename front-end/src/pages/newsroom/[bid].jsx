import React from "react";
import { Image, Flex, Avatar, Box, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";

import blogs from "../../database/newsroom";
import Head from "next/head";
import Link from "next/link";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import Body from "../../pageBuilder/Body";

//  Gets id of blog (bid) from url and use that bid to get blog content from BLOGS array.
//  url basic : /blogs/bid
//  example   : /blogs/covid-19

//Using random images for now

function Blogs() {
  const router = useRouter();
  const { bid } = router.query; //get blog id from url

  var blog = blogs.filter((blog) => {
    if (blog.link == bid) {
      return blog;
    }
  })[0] || { content: "" }; //Filter and get the current blog object

  return (
    <div className="article">
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = {blog.description}>
                </meta>
                <meta property="og:title" content={blog.title} key="title" />
                <meta property="og:description" content={blog.description}></meta>
                <meta name="keywords" content={blog.tags.toString() || "Newsroom, BGUS"} />
                <meta name="author" content={blog.by || "BGUS"}></meta>
        <title>{blog.title || ""}</title>
        <link
          rel="shortcut icon"
          href="../assets/images/icons/favicon/bg.ico"
          type="image/x-icon"
        />
      </Head>

      
     <Section mb={6} pb={0} mt={4}>
      <Title mb={8} fontSize={["4xl","4xl","5xl"]} textAlign="left">{blog.title}</Title>
      <Image alt=""          src={blog.image}
          objectFit="cover"
          rounded={8}
          boxShadow="xl"
          width="100%"
          height="320px"
        ></Image>
        
     </Section>
     <Section  mt={6} py={0} >
        <Box width={["100%","100%","72%"]}>
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
