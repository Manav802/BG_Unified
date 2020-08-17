import React from 'react';
import {dynamicSearch, searchData} from "../../../public/assets/js/searchFunctions"
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {Icon,
    Modal,
    ModalOverlay,
    Heading,
    Text,
    Box,
    ModalContent,
    ModalBody,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
    ModalCloseButton,
    Button} from "@chakra-ui/core"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import services from '../Services/services';


function search(props) {
    const [text, setText] = React.useState("")
    const handleValue = (e) => {
       setText(e.target.value)
       setData(dynamicSearch(e.target.value))
    }
    const [data, setData] = React.useState({
        pages: [],
        services: [],
        articles: []
    })
    return (
        <div className="d-flex transition-3 align-items-center">
             <a className="p-2 rounded-8 hover-effect">
                <Icon name="search" onClick={props.toggle} size="18px"></Icon>
            </a> 
            <Modal blockScrollOnMount={true} size="xl" isOpen={props.searching} onClose={props.toggle}>
                <ModalOverlay bg="#FAFAFCFC"></ModalOverlay>
                
                    <ModalContent bg="none" top="128px" className="shadow-none">
                    
                        
                    
                        <ModalBody>
                            <Fade duration={500} top>
                            <div className="position-sticky py-3 bg-white" style={{zIndex:"1000", top: "0"}}>
                                <InputGroup>
                                    <InputLeftElement mt="12px" children={<Icon name="search" color="gray.300" />} />
                                    <Input pl="48px" py="32px" onChange={handleValue} value={text}  fontSize="24px" variant="flushed" focusBorderColor="black.500" className="w-100" type="text" placeholder="Search" />
                                    <InputRightElement mt="12px"><ModalCloseButton /></InputRightElement>
                                </InputGroup>
                            </div>
                            </Fade>
                            <Fade duration={400} delay={300} top>
                                {text === "" && <Heading size="sm" mt={6} zIndex={100} className="text-primary" textTransform="uppercase" mb={2}>Most Popular</Heading>}
                            </Fade>
                            {text === "" && searchData.services.map(service => {
                                if(service.popular === true) return (
                                    <Fade duration={300} distance="4%" delay={300} left>
                                        <Box mt={3} p={3} className="rounded-8 border">
                                            <Heading size="md" mb={2}>{service.name}</Heading>
                                            <Text fontSize="md">
                                            {service.description}
                                            </Text>
                                            <Link href={service.link}><a onClick={props.toggle} className="link text-secondary">Learn More</a></Link>
                                        </Box>
                                    </Fade>
                                )
                            })}
                            {text != "" && <div>
                            {data.services.length > 0 && <Heading size="sm" mt={6} className="text-primary" textTransform="uppercase" mb={2}>Services</Heading>}
                            {data.services && data.services.map((service, index) => (
                                <Fade duration={200} key={index} distance="4%" left>
                                <Box mt={3} p={3} className="rounded-8 border">
                                    <Heading size="md" mb={2}>{service.name}</Heading>
                                    <Text fontSize="md">
                                       {service.description}
                                    </Text>
                                    <Link href={service.link}><a onClick={props.toggle} className="link text-secondary">Learn More</a></Link>
                                </Box>
                                </Fade>
                            ))}
                            {data.articles.length > 0 && <Heading size="sm" mt={6} className="text-primary" textTransform="uppercase" mb={2}>Articles</Heading>}
                            {data.articles.length > 0 && data.articles.map(blog => ( 
                            <Box mt={3}>
                                <Heading size="md" mb={2}>{blog.name}</Heading>
                                <Text fontSize="md">
                                    {blog.description}
                                </Text>
                                <Link href="/"><a onClick={props.toggle} className="link text-secondary">Read More</a></Link>
                            </Box>
                            ))}
                            {(data.articles.length === 0 && data.services.length === 0 && text != "") && 
                            <div className="w-100 d-flex justify-content-center">
                                <Heading mt={3} opacity={.5}>No Result Found</Heading>
                            </div>}
                            </div>}
                            <Box h="160px"></Box>
                        </ModalBody>
                    
                    </ModalContent>
            </Modal>
        </div>
        
    );
}

export default search;