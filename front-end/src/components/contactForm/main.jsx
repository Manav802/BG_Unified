import React from 'react';
import {
    FormControl,
    FormLabel,Input,Stack,Button
} from "@chakra-ui/core";
function ContactForm() {
    return <div className="contact-form">
        <form>
            <Stack spacing={12}>
                <FormControl isRequired>
                    <Input id="fname" placeholder="First name" />
                </FormControl>
                <Stack isInline spacing={200} className="flex-fill">
                    <FormControl isRequired>
                        <Input type="email" id="email" placeholder="Email adress " aria-describedby="email-helper-text" />

                    </FormControl>
                    <FormControl isRequired>
                        <Input type="phone" placeholder="Contact number" />
                    </FormControl>
                </Stack>
                <FormControl isRequired>
                    <Input placeholder="Message" size="lg" />
                </FormControl>
                <Button
                    mt={34}
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