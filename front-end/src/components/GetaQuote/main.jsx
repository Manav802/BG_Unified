import React, { useState } from 'react';
import {
  FormControl,
  FormLabel, Input, Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/core";
function GetaQuoteForm(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const form = {
    name: name,
    email: email,
    message: message,
    phone: phone,
    serviceName: props.serviceName,
    serviceDescription: props.serviceDescription
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

      default:
        break;
    }
  }
  const refreshForm = (res) => {
    loadingState(false)
    console.log(res);
    setResponse(res);
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    if (res.status == 200) {
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  }
  const formClose = () => {
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    onClose();
  }
  const onSubmit = (event) => {
    event.preventDefault()
    loadingState(true);
    fetch(' https://submit-form.com/' + keys.GetaQuote, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => refreshForm(response), (error) => refreshForm(error))
  }
  var description = props.serviceDescription.split(',');
  return (
    <>
      {!props.button && (
        <div className="mt-3 w-100 px-3 d-flex justify-content-between">
          {props.title && <p>{props.title}</p>}
          <a className="" onClick={onOpen}>
            Get a quote
          </a>
        </div>
      )}
      {props.button && (
        <Button
          size="lg"
          className={props.buttonStyle}
          variant="outline"
          variantColor="primary"
          onClick={onOpen}
        >
          Get a quote
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={formClose} isCentered>
        <ModalOverlay />
        <ModalContent className="p-4" style={{ maxWidth: "600px", width: "600px" }}>
          <ModalHeader><span className="display5">{props.serviceName}</span></ModalHeader>
          <div className="d-flex flex-wrap px-3">{description.map((service, index) => {
            return (
              <div className="rounded-8 hover-effect bg-light m-2 py-2 px-3" key={index}>{service}</div>
            )
          })}</div>
          <ModalCloseButton />
          <form className="getaquote-form px-4" onSubmit={onSubmit}>
            <input
              type="hidden"
              name="_redirect"
              value="false"
            />
            <input
              type="hidden"
              name="serviceName"
              value={form.serviceName}
            />
            <input
              type="hidden"
              name="serviceDescription"
              value={form.serviceDescription}
            />
            <FormControl className="container" isRequired>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                variant="flushed"
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
              />
            </FormControl>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <FormControl mt={"14%"} isRequired>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input
                      variant="flushed"
                      type="email"
                      name="email"
                      value={form.email}
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
                      value={form.phone}
                      onChange={onChange}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <FormControl mt={"9%"} className="container" isRequired>
              <FormLabel>Details:</FormLabel>
              <Textarea
                resize={"vertical"}
                variant="flushed"
                size="lg"
                name="message"
                value={form.message}
                onChange={onChange}
              />
            </FormControl>
            <div className="container">
              <Button
                mt={"15%"}
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
          {formResponse && <Toast response={formResponse} />}
        </ModalContent>
      </Modal>
    </>
  )
}
export default GetaQuoteForm;