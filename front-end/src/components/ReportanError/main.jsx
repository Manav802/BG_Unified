import React, { useState } from 'react';
import {
    FormControl, FormLabel, Link, Input, Button, ModalContent, ModalHeader, ModalCloseButton, Spinner, Modal, ModalOverlay, Textarea, Tabs, TabPanels, TabList, TabPanel, Tab, Select, Box, Radio, RadioButtonGroup, RadioGroup, Collapse
} from "@chakra-ui/core";
import keys from '../../apiKeys';
import operatingsystems from '../../deviceDetect.js';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/core";
import { deviceType, browserName, osName } from "react-device-detect";
import SVG from '../svg/SVG';
const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? "red" : "gray"}
            aria-checked={isChecked}
            role="radio"
            width={["25%", "30%", "30%"]}
            height="120px"
            {...rest}
        />
    );
});
const deviceInfo = {
    browser: browserName,
    os: osName,
    device: deviceType
}
console.log(deviceInfo);
function ErrorForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [browser, setBrowser] = useState(deviceInfo.browser);
    const [device, setDevice] = useState(deviceInfo.device);
    const [operatingsystem, setOs] = useState(deviceInfo.os);
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
        }, 0);
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
        setDevice(deviceInfo.device);
        setBrowser(deviceInfo.browser);
        setOs(deviceInfo.os);
        setError('');
        setOtherInput('');
        setShow(false);
        if (res.status == 200) {
            onClose();
        }
        setTabIndex(0);
    }
    const handleTabsChange = index => {
        setTabIndex(index);
    };
    const formClose = () => {
        setResponse('');
        setName('');
        setEmail('');
        setDescription('');
        setPhone('');
        setDevice(deviceInfo.device);
        setBrowser(deviceInfo.browser);
        setOs(deviceInfo.os);
        setError('');
        setOtherInput('');
        setShow(false);
        onClose();
        setTabIndex(0);
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
            <Link mx={["6px","10px","16px"]} fontSize={["10px","12px","14px"]} textTransform="uppercase" onClick={onOpen}>Report An Issue</Link>
            <Modal isOpen={isOpen} onClose={formClose} isCentered>
                <ModalOverlay />
                <ModalContent className="p-4" maxWidth={["400px", "400px", "600px", "700px"]} style={{ minHeight: "750px" }}>
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
                                        <FormControl mt={10} isRequired>
                                            <FormLabel htmlFor="name">Type of error:</FormLabel>
                                            <RadioGroup name="errortype" onChange={onChange} defaultValue={form.error}>
                                                <Radio size="lg" value="Page not responsive" onClick={() => handleToggle(false)}>Page not responsive</Radio>
                                                <Radio size="lg" value="Component not working" onClick={() => handleToggle(false)}>Component not working</Radio>
                                                <Radio size="lg" value="Site not loading properly" onClick={() => handleToggle(false)}>Site not loading properly</Radio>
                                                <Radio size="lg" value="Some Other Error" onClick={() => handleToggle(true)}>Other</Radio>
                                            </RadioGroup>
                                        </FormControl>
                                        {rend && <Collapse isOpen={show}>
                                            <FormControl mt={3} isRequired>
                                                <Input value={form.othererror} variant="flushed" name="othererror" placeholder="Please specify if any other error" onChange={onChange}>
                                                </Input>
                                            </FormControl>
                                        </Collapse>}
                                        <Button size="lg" variantColor="primary" className="primary-btn" mt={8} onClick={() => setTabIndex(1)}>Next</Button>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={10} isRequired>
                                            <FormLabel>Device you were using:</FormLabel>
                                            <RadioButtonGroup name="devicetype" className="d-flex justify-content-center" isInline value={form.device} spacing={4} onChange={value => setDevice(value)}>
                                                <CustomRadio value="Smartphone"><SVG src="/assets/images/icons/library/devices/iphone-x.svg" /></CustomRadio>
                                                <CustomRadio value="Tablet"><SVG src="/assets/images/icons/library/devices/tablet.svg" /></CustomRadio>
                                                <CustomRadio value="browser"><SVG src="/assets/images/icons/library/devices/imac.svg" /></CustomRadio>
                                            </RadioButtonGroup>
                                        </FormControl>
                                        <FormControl mt={10} isRequired>
                                            <FormLabel>Browser you were using:</FormLabel>
                                            <Select name="browser" value={form.browser} onChange={onChange} variant="flushed">
                                                <option value="Chrome">Google Chrome</option>
                                                <option value="Firefox">Mozilla Firefox</option>
                                                <option value="Opera">Opera</option>
                                                <option value="Other">Other</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mt={10} isRequired>
                                            <FormLabel>Operating system you were using:</FormLabel>
                                            <Select name="operatingsystem" value={form.operatingsystem} onChange={onChange} variant="flushed">
                                                {operatingsystems.map(item => <option value={item}>{item}</option>)}
                                            </Select>
                                        </FormControl>
                                        <Button size="lg" variantColor="primary" className="primary-btn" mt={8} onClick={() => setTabIndex(2)}>Next</Button>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl mt={10} >
                                            <FormLabel htmlFor="name">Name:</FormLabel>
                                            <Input
                                                variant="flushed"
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={onChange}
                                            />
                                        </FormControl>
                                        <Box className="row" mt={10}>
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
                                        <FormControl mt={10} isRequired>
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