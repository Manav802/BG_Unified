import React from 'react';
import {
FormControl,Stack,
FormLabel,Input,Flex,Button
} from "@chakra-ui/core";
function ContactForm() {
return <div className="contact-form p-5 bg-white rounded">
    <form>
        
        <Stack spacing={8}>
            <FormControl isRequired>
                <FormLabel>Your name</FormLabel>
                <Input id="name" variant="flushed" />
            </FormControl>
            <Flex className="row" flexDirection={["column","column","row","row"]}>
                <FormControl className="col-lg-6 btm-margin" isRequired>
                    <FormLabel>Email Adress</FormLabel>
                    <Input type="email" id="email" aria-describedby="email-helper-text" variant="flushed" />
                </FormControl>
                <FormControl className="col-lg-6 btm-margin" isRequired>
                    <FormLabel>Contact No.</FormLabel>
                    <Input type="phone" variant="flushed" />
                </FormControl>
            </Flex>
            <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Input variant="flushed" size="lg" />
            </FormControl>
            <Button mt={"20px"} className="hover-color" type="submit" size="md" height="48px" width="115px" backgroundColor="#F32222"
                color="white">
                Submit
            </Button>
        </Stack>
    </form>
</div>
}

export default ContactForm;