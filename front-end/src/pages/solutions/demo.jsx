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
                    <Section>
                        <Title>Title of the section</Title>
                        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit modi quam, eligendi sit magni facilis consequuntur hic. Dolore fugiat explicabo incidunt suscipit quasi reprehenderit rerum ullam minus, voluptate necessitatibus vero!</Description>
                        <Row columns={1} justifyContent="center">
                            <Body width="100%" type="content" data={[
                                {
                                    text: "kdshbjlakr,he lkafdjerjlrghkn"
                                },
                                {
                                    text: "skd,jgewhil, djghrkljl;"
                                }
                            ]}></Body>
                        </Row>
                    </Section>
            </Box>
        </div>
    );
}

export default demo;