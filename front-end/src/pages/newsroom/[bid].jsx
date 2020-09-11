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
        <title>{blog.title || ""}</title>
        <link
          rel="shortcut icon"
          href="../assets/images/icons/favicon/bg.ico"
          type="image/x-icon"
        />
      </Head>

      
     <Section mb={6} pb={0} mt={32}>
      <Title mb={8} fontSize="48px" textAlign="left">{blog.title}</Title>
      <Image
          src={blog.image}
          objectFit="cover"
          rounded={8}
          boxShadow="xl"
          width="100%"
          height="320px"
        ></Image>
        <Flex mt={6}>
        <Avatar src={blog.avatar} />
          <Box ml="3">
            <Text fontWeight="bold">
              {"by " + blog.by || "Team"}
            </Text>
            <Text fontSize="sm">Posted On {blog.date}</Text>
          </Box>
        </Flex>
     </Section>
     <Section  my={6} pt={0} pb={6}>
        <Box width={["100%","100%","72%"]}>
        {blog.content && blog.content.map((body, index) => (
            <Body {...body}></Body>
        ))}
        </Box>  
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
