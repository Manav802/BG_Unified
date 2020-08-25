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
function ErrorForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const form = {
        name: name,
        email: email,
        message: message,
        phone: phone
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
    return (
        <>
            <a className="" onClick={onOpen}>Report an Error</a>
            <Modal isOpen={isOpen} onClose={formClose} isCentered>
                <ModalOverlay />
                <ModalContent className="p-4" style={{ maxWidth: "700px", width: "700px" }}>
                    <ModalHeader><span className="display5">Report an Error</span></ModalHeader>
                    <ModalCloseButton />
                    <form className="getaquote-form px-4" onSubmit={onSubmit}>
                        <input
                            type="hidden"
                            name="_redirect"
                            value="false"
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
export default ErrorForm;