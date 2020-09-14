import React from 'react';
import Container from '../../pageBuilder/Container';
import { Flex, Box, Text, Button, Collapse } from '@chakra-ui/core';
import Fade from "react-reveal/Fade"
import cookie from 'react-cookies'
import Link from 'next/link';

function CookieNotice(props) {
    const [notice, setNotice] = React.useState("0")
    React.useEffect(() => {
        setNotice(cookie.load('notice') || "0")
    }, [notice])
    return (
        <>
        {notice === "0" && <Collapse isOpen={notice === "0"}>
            <Box width="100%" borderBottomWidth={1} borderBottomColor="gray.200" bg="white" zIndex="1000" p={3}>
            <Container>
                <Text>We use cookies to personalize your experience. By continuing to visit the website you agree to our use of cookies. <Link href="/policies"><a className="text-primary">Read our Privacy Policy</a></Link></Text>
                <Button pos="absolute" top="4px" right="16px" onClick={() => {
                    cookie.save('notice', '1')
                    setNotice("1")
                }} variant="unstyled" leftIcon="close"></Button>
            </Container>
            </Box>
        </Collapse>}
        </>
    );
}

export default CookieNotice;