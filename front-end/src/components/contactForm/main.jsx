import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Button, Textarea, Spinner
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/core";
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
    <>
      <div className="container">
        <form className="contact-form shadow-lg" onSubmit={onSubmit}>
          <input type="hidden" name="_redirect" value="false" />
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input
              variant="flushed"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
            />
          </FormControl>
          <div className="row">
            <div className="col-md-6">
              <FormControl mt={"14%"} isRequired>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  variant="flushed"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </FormControl>
            </div>
            <div className="col-md-6">
              <FormControl mt={"14%"} isRequired>
                <FormLabel htmlFor="phone">Contact No.</FormLabel>
                <Input
                  type="phone"
                  variant="flushed"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </FormControl>
            </div>
          </div>
          <FormControl mt={"9%"}>
            <FormLabel>Subject:</FormLabel>
            <Input
              variant="flushed"
              name="subject"
              value={subject}
              onChange={onChange}
            />
          </FormControl>
          <FormControl mt={"9%"} isRequired>
            <FormLabel>Message:</FormLabel>
            <Textarea
              variant="flushed"
              size="lg"
              name="message"
              value={message}
              onChange={onChange}
              resize={"vertical"}
            />
          </FormControl>
          <div>
            <Button
              mt={"12%"}
              className="hover-color shadow-md"
              type="submit"
              size="md"
              height="48px"
              width="115px"
              backgroundColor="#F32222"
              color="white"
            >Submit {isLoading && <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              color="blue.500"
              size="sm"
            />}</Button>
          </div>
        </form>
      </div>
      {formResponse && <Toast response={formResponse} />}
    </>
  )
}
export default ContactForm;