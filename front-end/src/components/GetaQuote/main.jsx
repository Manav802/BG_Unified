import React, { useState } from 'react';
import {
  useDisclosure, FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, ModalBody, Box, Alert, AlertIcon, Tooltip, Icon
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import axios from "axios";
import Description from '../../pageBuilder/Description';
function GetaQuoteForm(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [screenWidth, setScreenWidth] = useState(1000);
  let form = {
    name: name,
    email: email,
    description: message,
    contactNumber: phone,
    serviceName: props.serviceName,
    serviceString: props.serviceDescription
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
    axios.post('/api/service/submit', form)
      .then((response) => refreshForm(response), (error) => refreshForm(error))
  }
  var description = props.serviceDescription.split(',');
  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  React.useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <>
      {!props.button && (
        <div className="mt-3 w-100 px-3 d-flex justify-content-between">
          {props.title && <p>{props.title}</p>}
          <a className="link" onClick={onOpen}>
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
      <Modal isOpen={isOpen} onClose={formClose} isCentered={screenWidth > 420 ? true : false} scrollBehavior={screenWidth > 420 ? "inside" : "outside"}>
        <ModalOverlay />
        <ModalContent maxWidth={["400px", "400px", "600px"]} maxHeight={screenWidth > 420 ? "800px" : ""} minHeight={screenWidth > 420 ? "" : "100vh"} mb={screenWidth <= 420 ? 0 : ""} mt={screenWidth <= 420 ? 0 : ""}>
          <ModalBody>
            <ModalHeader style={{ zIndex: "3", position: "sticky", top: 0, backgroundColor: "white" }}> <Button verticalAlign="middle" leftIcon="arrow-back" color="primary.500" variant="link" onClick={formClose}></Button><span className="display5">{props.serviceName}
            </span></ModalHeader>
            <div className="d-flex flex-wrap px-3">{description.map((service, index) => {
              return (
                <div className="rounded-8 hover-effect bg-light m-2 py-2 px-3" key={index}>{service}</div>
              )
            })}</div>
            
            <Box mb={4} className="container contact-form">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button variant="link" variantColor="primary" mb={6} mt={2}>Whats this?</Button>
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                  <PopoverBody>We're working on automating our sign-up process to make it easier for you to buy and use our services. In the meantime, please fill out and submit the form. We will have one of our qualified account managers contact you about system availability for the configuration you desire. We look forward to speaking with you.</PopoverBody>
                </PopoverContent>
              </Popover>
              <form onSubmit={onSubmit}>
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
                  value={form.serviceString}
                />
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    variant="flushed"
                    type="text"
                    name="name"
                    value={form.name}
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
                        value={form.email}
                        onChange={onChange}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6">
                    <FormControl mt={"14%"} isRequired>
                      <FormLabel htmlFor="phone">Contact No.</FormLabel>
                      <Input
                        type="tel"
                        pattern="[0-9]{10}"
                        variant="flushed"
                        name="phone"
                        value={form.contactNumber}
                        onChange={onChange}
                      />
                    </FormControl>
                  </div>
                </div>
                <FormControl mt={"9%"} isRequired>
                  <FormLabel>Details:</FormLabel>
                  <Textarea
                    resize={"vertical"}
                    variant="flushed"
                    size="lg"
                    name="message"
                    value={form.description}
                    onChange={onChange}
                  />
                </FormControl>
                <div >
                  <Button
                    mt={10}
                    type="submit"
                    size="lg"
                    variantColor="primary"
                    className="primary-btn"
                  >Submit{isLoading && <Spinner
                    thickness="4px"
                    speed="1s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="sm"
                  />}</Button>
                </div>
              </form>
            </Box>
            {formResponse && <Toast response={formResponse} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default GetaQuoteForm;