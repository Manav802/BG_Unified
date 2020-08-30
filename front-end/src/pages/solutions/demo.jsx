import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import Section from '../../pageBuilder/Section';
import Title from '../../pageBuilder/Title';
import Description from '../../pageBuilder/Description';
import Row from '../../pageBuilder/Row';
import Body from '../../pageBuilder/Body';
import MyCount from '../../components/Countup/main';

function demo(props) {
    return (
        <div>
            <Box mt={80} py="64px">
                <Section bg="dark.500" color="white">
                    <Title>Title of the section</Title>
                    <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit modi quam, eligendi sit magni facilis consequuntur hic. Dolore fugiat explicabo incidunt suscipit quasi reprehenderit rerum ullam minus, voluptate necessitatibus vero!</Description>
                    <Row>
                        <Body width="10 0 %" type="imageGroup" data= 
                            {
                                images: ["/assets/images/brands/aapt.png", "/assets/images/brands/fortinet.png"],
                                spacing: "16px",
                                height: "100px",
                                objectFit: "contain"
                            }
                            }></Body>
                        </Row>
                    </Section>
            </Box>

    );
}

export default demo;