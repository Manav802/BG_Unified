import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, Tabs, TabPanels, TabList, TabPanel, Tab, Select, Box, Radio, RadioGroup, Collapse
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
    const [error, setError] = useState('Page not responsive');
    const [browser, setBrowser] = useState('');
    const [device, setDevice] = useState('');
    const [operatingsystem, setOs] = useState('');
    const [othererror, setOtherInput] = useState('');
    const [rend, setRend] = useState(false);
    const [show, setShow] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    let form = {
        name: name,
        email: email,
        description: description,
        phone: phone,
        error: error,
        othererror: othererror,
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

            case 'othererror':
                setOtherInput(value);
                break;

            default:
                break;
        }
    }
    const handleToggle = (param) => {
        setRend(param);
        setTimeout(() => {
            setShow(param);
        }, 500);
    }
    const refreshForm = (res) => {
        loadingState(false)
        console.log(res);
        setResponse(res);
        setResponse('');
        setTabIndex(0);
        setName('');
        setEmail('');
        setDescription('');
        setPhone('');
        setDevice('');
        setBrowser('');
        setOs('');
        setError('Page not responsive');
        setOtherInput('');
        setShow(false);
        if (res.status == 200) {
            setTimeout(() => {
                onClose();
            }, 1000);
        }
    }
    const handleTabsChange = index => {
        setTabIndex(index);
    };
    const formClose = () => {
        setResponse('');
        setTabIndex(0);
        setName('');
        setEmail('');
        setDescription('');
        setPhone('');
        setPhone('');
        setDevice('');
        setBrowser('');
        setOs('');
        setError('Page not responsive');
        setOtherInput('');
        setShow(false);
        onClose();
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
                <ModalContent className="p-4" style={{ maxWidth: "700px", minHeight: "736px" }}>
                    <ModalHeader><span className="display5">Report an Error</span></ModalHeader>
                    <ModalCloseButton />
                    <div className="container">
                        <form className="reporterror-form px-3" onSubmit={onSubmit}>
                            <input
                                type="hidden"
                                name="_redirect">
                            </input>
                            <Tabs index={tabIndex} onChange={handleTabsChange} isFitted>
                                <TabList>
                                    <Tab className="display6 tab-selected">Type of error</Tab>
                                    <Tab className="display6 tab-selected">Device Details</Tab>
                                    <Tab className="display6 tab-selected">Description</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <FormControl mt={"14%"} isRequired>
                                            <FormLabel htmlFor="name">Type of error:</FormLabel>
                                            <RadioGroup name="errortype" onChange={onChange} defaultValue={form.error}>
                                                <Radio size="lg" value="Page not responsive" onClick={() => handleToggle(false)}>Page not responsive</Radio>
                                                <Radio size="lg" value="Component not working" onClick={() => handleToggle(false)}>Component not working</Radio>
                                                <Radio size="lg" value="Site not loading properly" onClick={() => handleToggle(false)}>Site not loading properly</Radio>
                                                <Radio size="lg" value="Some Other Error" onClick={() => handleToggle(true)}>Other</Radio>
                                            </RadioGroup>
                                        </FormControl>
                                        {rend && <Collapse isOpen={show}>
                                            <FormControl mt={"3%"} isRequired>
                                                <Input value={form.othererror} variant="flushed" name="othererror" placeholder="Please specify if any other error" onChange={onChange}>
                                                </Input>
                                            </FormControl>
                                        </Collapse>}
                                        <Button className="next" onClick={() => setTabIndex(1)}>Next</Button>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={"14%"} isRequired>
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
                                        <Button className="prev" onClick={() => { setTabIndex(0); }}>Prev</Button>
                                        <Button className="next" onClick={() => setTabIndex(2)}>Next</Button>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={"7%"} >
                                            <FormLabel htmlFor="name">Name:</FormLabel>
                                            <Input
                                                variant="flushed"
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={onChange}
                                            />
                                        </FormControl>
                                        <Box className="row" mt={"7%"}>
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
                                        <FormControl mt={"7%"} isRequired>
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
                                        <div>
                                            <Button
                                                mt={"7%"}
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
                                        <Button className="prev" onClick={() => { setTabIndex(1); }}>Prev</Button>
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