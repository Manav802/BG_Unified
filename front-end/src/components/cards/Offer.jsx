import React from 'react';
import Container from '../../pageBuilder/Container';
import { Flex, Box, Text, Button } from '@chakra-ui/core';
import {FaPercent} from "react-icons/fa"
import Fade from "react-reveal/Fade"
import cookie from 'react-cookies'
import Title from '../../pageBuilder/Title';

function Offer(props) {
    const [offer, setOffer] = React.useState("0")
    React.useEffect(() => {
        setOffer(cookie.load('offer') || "0")
    }, [offer])
    return (
        <>
            {offer === "0" && <Box pos="fixed" width="100vw" zIndex="1000" bottom={[0,0, 4]} p={[0,0,8]}>
            <Container width="100%" maxW="1366px">
            <Fade duration={300} delay={3000} bottom distance="5%">

                <Flex direction={["column", "column", "row"]} pos="relative" align="center" bg="white" rounded={8} boxShadow="xl" py={16} px={[8, 8, 16]}>
                <Box rounded="50%" my={4} bg="light.400" p={12} >
                    <Box as={FaPercent} color="primary.500" size="48px"></Box>
                </Box>
                <Box ml={[0,0,8]}>
                    <Title fontSize={["lg", "lg","2xl"]} textAlign={["center", "center", "left"]}>We are delighted to offer free services* for the next 3 months to any business(s) related to the Health and Safety of Australians.</Title>
                    <Text m={2} fontSize={["md", "md","lg"]} textAlign={["center", "center", "left"]} opacity=".7">No charges at all for the next three months. Let us help you if you have limited budgets and because of COVID your current infrastructure can't handle the load. Dial our direct line <a href="tel:+61290950000" className="link text-primary">+61 2 9095 0000</a>. We will get things in motion very quickly.</Text>
                </Box>
                <Button pos="absolute" top="16px" right="16px" onClick={() => {
                    cookie.save('offer', '1')
                    setOffer("1")
                }} variant="unstyled" leftIcon="close"></Button>
                </Flex>
                </Fade>
            </Container>
            </Box>}
        </>
    );
}

export default Offer;