import React, { Component } from 'react';
import Container from '../../pageBuilder/Container';
import { Flex, Box, Text, Button, Collapse } from '@chakra-ui/core';
import Fade from "react-reveal/Fade"
import cookie from 'react-cookies'
import Link from 'next/link';
import { render } from 'react-dom';


class CookieNotice extends Component {
    constructor(props) {
        super(props);
        this.state = { notice: "1" };
      }
    componentDidMount(){
        this.setState({notice: cookie.load('notice') || "0"})
        setTimeout(() => {
            this.setState({
                notice: "1"
            })
        }, 10000)
    }    
    render(){
        return (
            <>
            <Collapse isOpen={this.state.notice === "0"}>
                <Box zIndex="-1" pos="relative" width="100%" borderBottomWidth={1} borderBottomColor="gray.200" bg="light.400" zIndex="1000" p={3}>
                <Container>
                    <Text fontSize={["xs","sm","md"]} pr={3}>We use cookies to personalize your experience. By continuing to visit the website you agree to our use of cookies. <Link href="/policies"><a className="text-primary">Read our Privacy Policy</a></Link></Text>
                    <Button pos="absolute" top="4px" right="10px" onClick={() => {
                        cookie.save('notice', '1')
                        this.setState({
                            notice: "1"
                        })
                    }} variant="unstyled" rightIcon="close"></Button>
                </Container>
                </Box>
            </Collapse>
            </>
        )
    }
}

export default CookieNotice;