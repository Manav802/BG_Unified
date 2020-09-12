import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Button, Textarea, Spinner, Box, Flex
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  let form = {
    name: name,
    email: email,
    message: message,
    phone: phone,
    subject: subject
  }
  const [isLoading, loadingState] = useState(false);
  const [formResponse, setResponse] = useState('');
  const onChange = (event) => {
    const target = event.target
    const fieldname = target.name
    const value = target.value
    switch (fieldname) {
      case 'name':
        setName(value);
        break;

      case 'message':
        setMessage(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'subject':
        setSubject(value);
        break;

      default:
        break;
    }
  }
  const refreshForm = (res) => {
    loadingState(false)
    console.log(res);
    setResponse(res);
    setResponse('');
    if (res.status == 200) {
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        setSubject('');
      }, 1000);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault()
    loadingState(true);
    fetch(' https://submit-form.com/' + keys.ContactUs, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => refreshForm(response), (error) => refreshForm(error))
  }
  return (
    <Box p={5}>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="_redirect" value="false" />
        <Flex wrap="wrap">
          <FormControl px={2} width={"100%"} isRequired>
            <Input
              placeholder="Name"
              type="text"
              p={6}
              name="name"
              value={name}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={["100%", "100%", "50%"]} mt={4} isRequired>
            <Input
              p={6}
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={["100%", "100%", "50%"]} mt={4} isRequired>
            <Input
              p={6}
              placeholder="Phone Number"
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={"100%"} mt={4}>
            <Input
              p={6}
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={onChange}
            />
          </FormControl>
          <FormControl px={2} width={"100%"} mt={4} isRequired>
            <Textarea
              p={6}
              placeholder="Message"
              size="lg"
              name="message"
              value={message}
              onChange={onChange}
              resize={"vertical"}
            />
          </FormControl>

          <Button
            mt={10}
            type="submit"
            size="lg"
            variantColor="primary"
            className="primary-btn"
            width="100%"
          >Submit{isLoading && <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="blue.500"
            size="sm"
          />}
          </Button>
        </Flex>
      </form>
      {formResponse && <Toast response={formResponse} />}
    </Box>
  )
}
export default ContactForm;