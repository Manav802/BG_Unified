import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, Tabs, TabPanels, TabList, TabPanel, Tab, Select, Box, Radio, RadioGroup
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/core";
function ErrorForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [browser, setBrowser] = useState('');
    const [device, setDevice] = useState('');
    const [operatingsystem, setOs] = useState('');
    const [otherinput, setOtherInput] = useState('');
    const [isOther, setOther] = useState(false);
    let form = {
        name: name,
        email: email,
        description: description,
        phone: phone,
        error: error,
        browser: browser,
        device: device,
        operatingsystem: operatingsystem
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

            case 'errortype':
                setError(value);
                break;

            case 'operatingsystem':
                setOs(value);
                break;

            case 'browser':
                setBrowser(value);
                break;

            case 'devicetype':
                setDevice(value);
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
        setDevice('');
        setBrowser('');
        setOs('');
        setError('');
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
        setPhone('');
        setDevice('');
        setBrowser('');
        setOs('');
        setError('');
        onClose();
    }
    const handleOtherInput = event => {
        const target = event.target
        const value = target.value
        setOtherInput(value);
    }
    const onSubmit = (event) => {
        event.preventDefault()
        loadingState(true);
        fetch(' https://submit-form.com/' + keys.ErrorReport, {
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
                <ModalContent className="p-4" style={{ maxWidth: "700px", minHeight: "650px" }}>
                    <ModalHeader><span className="display5">Report an Error</span></ModalHeader>
                    <ModalCloseButton />
                    <div className="container">
                        <form className="reporterror-form px-3" onSubmit={onSubmit}>
                            <input
                                type="hidden"
                                name="_redirect">
                            </input>
                            <Tabs isFitted>
                                <TabList mb="1rem" style={{ borderColor: "#000000" }}>
                                    <Tab>Type of error</Tab>
                                    <Tab>Describe the error</Tab>
                                    <Tab>Personal details</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <FormControl mt={"9%"} isRequired>
                                            <FormLabel htmlFor="name">Type of error:</FormLabel>
                                            <RadioGroup name="errortype" onChange={onChange} defaultValue={form.error}>
                                                <Radio size="lg" value="Page not responsive">Page not responsive</Radio>
                                                <Radio size="lg" value="Component not working">Component not working</Radio>
                                                <Radio size="lg" value="Site not loading properly">Site not loading properly</Radio>
                                                <Radio size="lg" onClick={() => { setOther(true) }} value={otherinput}>Other</Radio>
                                            </RadioGroup>
                                        </FormControl>
                                        {isOther && <Input variant="flushed" placeholder="Please specify the error" onChange={handleOtherInput}></Input>}
                                        <FormControl mt={"13%"} isRequired>
                                            <FormLabel>Describe the error in detail:</FormLabel>
                                            <Textarea
                                                resize={"vertical"}
                                                variant="flushed"
                                                size="lg"
                                                name="description"
                                                value={form.description}
                                                onChange={onChange}
                                            />
                                        </FormControl>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={"9%"} isRequired>
                                            <FormLabel htmlFor="phone">Device you were using:</FormLabel>
                                            <Select name="devicetype" onChange={onChange} variant="flushed" placeholder="Select option">
                                                <option value="Smartphone">Smartphone</option>
                                                <option value="Android tablet">Android tablet</option>
                                                <option value="PC">PC</option>
                                            </Select>
                                        </FormControl>


                                        <FormControl mt={"14%"} isRequired>
                                            <FormLabel htmlFor="name">Browser you were using:</FormLabel>
                                            <Select name="browser" onChange={onChange} variant="flushed" placeholder="Select option">
                                                <option value="Google Chrome">Google Chrome</option>
                                                <option value="Mozilla Firefox">Mozilla Firefox</option>
                                                <option value="Opera">Opera</option>
                                                <option value="Other">Other</option>
                                            </Select>
                                        </FormControl>

                                        <FormControl mt={"14%"} isRequired>
                                            <FormLabel htmlFor="phone">Operating system you were using:</FormLabel>
                                            <Select name="operatingsystem" onChange={onChange} variant="flushed" placeholder="Select option">
                                                <option value="Windows">Windows</option>
                                                <option value="iOS">iOS</option>
                                                <option value="MacOS">MacOS</option>
                                                <option value="GNU/Linux">GNU/Linux</option>
                                                <option value="Android">Android</option>
                                            </Select>
                                        </FormControl>


                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={"9%"} >
                                            <FormLabel htmlFor="name">Name:</FormLabel>
                                            <Input
                                                variant="flushed"
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={onChange}
                                            />
                                        </FormControl>
                                        <Box className="row" mt={"14%"}>
                                            <div className="col-md-6">
                                                <FormControl isRequired>
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
                                                <FormControl  >
                                                    <FormLabel htmlFor="phone">Contact No.</FormLabel>
                                                    <Input
                                                        type="tel"
                                                        pattern="[0-9]{10}"
                                                        variant="flushed"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={onChange}
                                                    />
                                                </FormControl>
                                            </div>
                                        </Box>
                                        <div>
                                            <Button
                                                mt={"14%"}
                                                className="hover-color shadow-md"
                                                type="submit"
                                                size="md"
                                                height="48px"
                                                width="115px"
                                                backgroundColor="#F32222"
                                                color="white"
                                            >Submit{isLoading && <Spinner
                                                thickness="4px"
                                                speed="1s"
                                                emptyColor="gray.200"
                                                color="blue.500"
                                                size="sm"
                                            />}
                                            </Button>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </form>
                    </div>
                    {formResponse && <Toast response={formResponse} />}
                </ModalContent>
            </Modal>
        </>
    )
}
export default ErrorForm;