import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, Radio, RadioGroup, FormHelperText, useDisclosure, Link, ModalBody
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import axios from "axios";
function FeedbackForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [rating, setRating] = useState('4');
    const [screenWidth, setScreenWidth] = useState(1000);
    let form = {
        name: name,
        email: email,
        description: description,
        contactNumber: phone,
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
        axios.post('/api/feedback/submit', form)
            .then((response) => refreshForm(response), (error) => refreshForm(error))
    }

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
            <Link mx={["6px", "10px", "16px"]} fontSize={["10px", "12px", "14px"]} textTransform="uppercase" onClick={onOpen}>Send A Feedback</Link>
            <Modal isOpen={isOpen} onClose={formClose} isCentered={screenWidth > 420 ? true : false} scrollBehavior={screenWidth > 420 ? "inside" : "outside"}>
                <ModalOverlay />
                <ModalContent py="2" maxWidth={["430px", "400px", "600px"]} minHeight={screenWidth > 420 ? "" : "100vh"} mb={screenWidth <= 420 ? 0 : ""} mt={screenWidth <= 420 ? 0 : ""}>
                    <ModalBody>
                        <ModalHeader style={{ zIndex: "3", position: "sticky", top: 0, backgroundColor: "white" }}>
                            <Button verticalAlign="middle" leftIcon="arrow-back" color="primary.500" variant="link" onClick={formClose}></Button>
                            <span className="display5 mx-2">Send your feedback!</span></ModalHeader>
                        <div className="container">
                            <form className="feedback-form px-4" onSubmit={onSubmit}>
                                <input
                                    type="hidden"
                                    name="_redirect"
                                    value="false"
                                />
                                <FormControl as="fieldset" isRequired>
                                    <FormLabel>Rate your experience!</FormLabel>
                                    <RadioGroup onChange={onChange} name="rating" isInline defaultValue={form.rating} spacing={4}>
                                        <Radio size="lg" value="1">🙁</Radio>
                                        <Radio size="lg" value="2">😐</Radio>
                                        <Radio size="lg" value="3">🙂</Radio>
                                        <Radio size="lg" value="4">😊</Radio>
                                    </RadioGroup>
                                    <FormHelperText>
                                        We value your feedback
                            </FormHelperText>
                                </FormControl>
                                <FormControl mt={"6%"} isRequired>
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
                                <FormControl mt={"10%"}  >
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
                                <div>
                                    <Button
                                        mt={10}
                                        mb={8}
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
                                    />}
                                    </Button>
                                </div>
                            </form>
                        </div>
                        {formResponse && <Toast response={formResponse} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default FeedbackForm;