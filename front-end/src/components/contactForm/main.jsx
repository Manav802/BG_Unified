import React from 'react';
import {
    FormControl,
    FormLabel,Input,Stack,Button
} from "@chakra-ui/core";
function ContactForm() {
    return <div className="contact-form">
        <form>
            <Stack shouldWrapChildren spacing={8}>
                <FormControl isRequired>
                    <FormLabel>Your name</FormLabel>
                    <Input id="name" variant="flushed"/>
                </FormControl>
                <Stack isInline spacing={200}>
                    <FormControl isRequired>
                        <FormLabel>Email Adress</FormLabel>
                        <Input type="email" id="email" aria-describedby="email-helper-text" variant="flushed" />

                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Contact No.</FormLabel>
                        <Input type="phone" variant="flushed"/>
                    </FormControl>
                </Stack>
                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Input variant="flushed" size="lg" />
                </FormControl>
                <Button
                    mt={2}
                    type="submit"
                    size="md"
                    height="48px"
                    width="115px"
                    backgroundColor="#F32222"
                    color="white"
                >
                    Submit
          </Button>

            </Stack>
        </form>
    </div>
} 

export default ContactForm;