import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, FormHelperText
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/core";
import { Radio, RadioGroup } from "@chakra-ui/core";
function FeedbackForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [rating, setRating] = useState('4');
    const form = {
        name: name,
        email: email,
        description: description,
        phone: phone,
        rating: rating
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

            case 'description':
                setDescription(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'rating':
                setRating(value);
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
        setDescription('');
        setPhone('');
        setRating('4');
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
        setDescription('');
        setPhone('');
        setRating('4');
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
            <a className="" onClick={onOpen}>Feedback</a>
            <Modal isOpen={isOpen} onClose={formClose} isCentered>
                <ModalOverlay />
                <ModalContent className="p-4" style={{ maxWidth: "600px", width: "600px" }}>
                    <ModalHeader><span className="display5">Send us your feedback!</span></ModalHeader>
                    <ModalCloseButton />
                    <form className="feedback-form px-4" onSubmit={onSubmit}>
                        <input
                            type="hidden"
                            name="_redirect"
                            value="false"
                        />
                        <FormControl as="fieldset" isRequired className="container">
                            <FormLabel as="legend">Rate your experience!</FormLabel>
                            <RadioGroup onChange={onChange} name="rating" isInline defaultValue={form.rating} spacing={4}>
                                <Radio size="lg" value="1">☹</Radio>
                                <Radio size="lg" value="2">😐</Radio>
                                <Radio size="lg" value="3">🙂</Radio>
                                <Radio size="lg" value="4">😊</Radio>
                            </RadioGroup>
                            <FormHelperText>
                                We value your feedback
                            </FormHelperText>
                        </FormControl>
                        <FormControl mt={"6%"} className="container" isRequired>
                            <FormLabel>Describe your experience:</FormLabel>
                            <Textarea
                                resize={"vertical"}
                                variant="flushed"
                                size="lg"
                                name="description"
                                value={form.description}
                                onChange={onChange}
                            />
                        </FormControl>
                        <FormControl mt={"10%"} className="container" >
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
                                    <FormControl mt={"14%"} >
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
                                    <FormControl mt={"14%"} >
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
                        <div className="container">
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
                    {formResponse && <Toast response={formResponse} />}
                </ModalContent>
            </Modal>
        </>
    )
}
export default FeedbackForm;