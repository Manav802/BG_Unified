import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import Section from '../../pageBuilder/Section';
import Title from '../../pageBuilder/Title';
import Description from '../../pageBuilder/Description';
import Row from '../../pageBuilder/Row';
import Body from '../../pageBuilder/Body';

function demo(props) {
    return (
        <div>
            <Box mt={80} py="64px">
                    <Section bg="dark.500" color="white">
                        <Title>Title of the section</Title>
                        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit modi quam, eligendi sit magni facilis consequuntur hic. Dolore fugiat explicabo incidunt suscipit quasi reprehenderit rerum ullam minus, voluptate necessitatibus vero!</Description>
                        <Row>
                            <Body type="video" data= {
                                {
                                    url : "https://www.youtube.com/embed/dO368WjwyFs" ,
                                    description : "Hello I am Not What I am ",
                                    height: "400px"
                                }
                            }></Body>
                            
                        </Row>
                        <Row>
                            <Body type="list" data= {
                                {
                                    title : "Lorem Ipsum Dolor",
                                    items: ["Hollll" , "Offff ", "Fame"],
                                }}/>
                        </Row>
                    </Section>
            </Box>
        </div>
    );
}

export default demo;