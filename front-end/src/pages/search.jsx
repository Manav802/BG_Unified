import React, { Component, useEffect } from "react";
import Head from "next/head";
import {Box, Input, InputGroup, Text, Heading, InputLeftElement, Icon} from "@chakra-ui/core"
import Fade from "react-reveal/Fade";
import {dynamicSearch} from "../../public/assets/js/searchFunctions"
import services from "../database/services";
import Link from "next/link";
import {useRouter} from "next/router";

const servicesArray = Object.entries(services);

function search(props) {
    const router = useRouter();
    var {search} = router.query;
    const [text, setText] = React.useState("");
    const handleValue = (e) => {
        setText(e.target.value)
        setData(dynamicSearch(e.target.value))
    }
    const [data, setData] = React.useState({
        pages: [],
        services: [],
        articles: []
    })


    
    
    //Set text and data
    useEffect(() => {if(search){setText(search);setData(dynamicSearch(search))}}, [search]) 

    return (
      <div className="newsroom">
        <Head>
          <title>Search | BG Unified Solutions</title>
        </Head>
        <Fade duration={500} distance="10%"  top>
         <Box mt={30} mb={2} pb="10px" pt={["30px","50px","72px"]}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <InputGroup>
                            <InputLeftElement p={[8,12]}  children={<Icon name="search" color="gray.300" size={["20px","24px"]} />} />
                            <Input type="text" py={[8,12]}  onChange={handleValue} value={text}  variant="flushed" focusBorderColor="primary.500" color="primary.500" fontWeight="700" fontSize={["2xl","32px"]} pl={[16,24]} placeholder="Search" />
                        </InputGroup>
                    </div>
                </div>
            </div>
         </Box>
         </Fade>
       <div className="container">
           <div className="row">
               <div className="col-xl-10 offset-xl-1">
               <Fade duration={400} delay={300} top>
                    {text === "" && <Heading size="sm" mt={6} zIndex={100} className="text-primary" textTransform="uppercase" mb={2}>Most Popular</Heading>}
                </Fade>
                {text === "" && servicesArray.map(service => {
                    if(service[1].popular === true) return (
                        <Fade duration={300} distance="4%" delay={300} left>
                            <Box mt={3} p={8} className="rounded-8 border">
                                <Heading size="lg" mb={2}>{service[1].title}</Heading>
                                <Text fontSize="md" className="truncate-ellipsis">
                                {service[1].description}
                                </Text>
                                <Link href="/solutions/[name]" as={`/solutions/${service[0]}`}><a onClick={props.toggle} className="link text-secondary">Learn More</a></Link>
                            </Box>
                        </Fade>
                    )
                })}
                {text != "" && <div>
                {data.services.length > 0 && <Heading size="sm" mt={6} className="text-primary" textTransform="uppercase" mb={2}>Services</Heading>}
                {data.services && data.services.map((service, index) => (
                    <Fade duration={200} key={index} distance="4%" left>
                    <Box mt={3} p={8} className="rounded-8 border">
                        <Heading size="lg" mb={2}>{service[1].title}</Heading>
                        <Text fontSize="md" className="truncate-ellipsis">
                            {service[1].description}
                        </Text>
                        <Link href="/solutions/[name]" as={`/solutions/${service[0]}`}><a onClick={props.toggle} className="link text-secondary">Learn More</a></Link>
                    </Box>
                    </Fade>
                ))}
                {data.articles.length > 0 && <Heading size="sm" mt={6} className="text-primary" textTransform="uppercase" mb={2}>Articles</Heading>}
                {data.articles.length > 0 && data.articles.map(blog => ( 
                <Box mt={3}>
                    <Heading size="md" mb={2}>{blog.title}</Heading>
                    <Text fontSize="md" overflow="hidden">
                        {blog.description}
                    </Text>
                    <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}><a onClick={props.toggle} className="link text-secondary">Read More</a></Link>
                </Box>
                ))}
                {(data.articles.length === 0 && data.services.length === 0 && text != "") && 
                <div className="w-100 d-flex justify-content-center">
                    <Heading mt={3} opacity={.5}>No Result Found</Heading>
                </div>}
                </div>}
                <Box h="160px"></Box>
               </div>
           </div>
       </div>
      </div>
    );
  }
export default search;
