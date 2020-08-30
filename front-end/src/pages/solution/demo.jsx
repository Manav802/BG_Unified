import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import Section from '../../pageBuilder/Section';
import Title from '../../pageBuilder/Title';
import Description from '../../pageBuilder/Description';
import Row from '../../pageBuilder/Row';
import Body from '../../pageBuilder/Body';
import BackupPricing from '../../pageBuilder/pricing/BackupPricing';
import StoragePricing from '../../pageBuilder/pricing/StoragePricing';
import RenderSection from '../../pageBuilder/RenderSection';
import Feature from '../../pageBuilder/components/Feature';

function demo(props) {
    return (
        <div>
            <Box mt={80} py="64px">
                    <Section bg="gray.50">
                        <Title>Title of the section</Title>
                        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit modi quam, eligendi sit magni facilis consequuntur hic. Dolore fugiat explicabo incidunt suscipit quasi reprehenderit rerum ullam minus, voluptate necessitatibus vero!</Description>
                        <Row mt="48px">
                            <Body width={1/4} type="feature" data={{
                                    image: "/assets/images/icons/theme/airplane.svg",
                                    title: "Hello",
                                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                                }}>
                            </Body>
                        </Row>
                    </Section>
                    <RenderSection 
                        title="Title of the section" 
                        titleStyle= {{fontSize:"xl", opacity:.7}}
                        justifyContent="center"
                        rowDistance="12px"
                        body= {[
                            {
                                width: "80%",
                                type: "imageGroup",
                                data: {
                                    images: ["/assets/images/os/redhat.png", "/assets/images/os/windows10.png", "/assets/images/os/windowsServer.png" ],
                                    height: "128px",
                                    width: "200px",
                                    objectFit: "contain"
                                }
                            },
                        ]}
                    ></RenderSection>
            </Box>
        </div>
    );
}

export default demo;