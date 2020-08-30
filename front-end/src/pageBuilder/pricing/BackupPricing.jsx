import React from "react";
import {
    Button,
    Collapse,
    Select,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Flex,
    FormLabel,
    Switch,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";


function BackupPricing(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(1);
    const handleChange = (value) => setValue(value);
    const [restorePoints, setRestorePoints] = React.useState("");
    const [geoLocations, setGeoLocations] = React.useState("");
    const [hourlyBackups, setHourlyBackups] = React.useState(false);
    const handleHourlyBackups = (hourlyBackups) =>
        hourlyBackups ? ",Enabled Hourly Backups" : "";
        
    return (
            <div className="container">
                <Fade duration={500} bottom>
                    <div className="row px-lg-5 px-3">
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="Standard"
                                icon="/assets/images/icons/theme/stack.svg"
                                featureList={[
                                    "Single Copy",
                                    "Single Location",
                                    "Reliable & Secure",
                                    "Cost Effective",
                                ]}
                            >
                                <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Backup As A Service"
                                    serviceDescription="Standard, Single Copy, Single Location"
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="Corporate"
                                icon="/assets/images/icons/theme/work.svg"
                                featureList={[
                                    "Multiple Copies",
                                    "Single Location",
                                    "Reliable & Secure",
                                    "Cost Effective",
                                ]}
                            >
                                <PricingQuote
                                    buttonStyle="mt-3"
                                    button
                                    serviceName="Backup As A Service"
                                    serviceDescription="Corporate, Multiple Copies, Single Location"
                                ></PricingQuote>
                            </PricingCard>
                        </div>
                        <div className="col-lg-4 my-3">
                            <PricingCard
                                title="Enterprise"
                                icon="/assets/images/icons/theme/town.svg"
                                featureList={[
                                    "Multiple Copies",
                                    "Multiple Location",
                                    "Reliable & Secure",
                                    "Cost Effective",
                                ]}
                            >
                                <a href="#collapse-1" className="no-red">
                                    <Button
                                        className="mt-3"
                                        variantColor="primary"
                                        variant="outline"
                                        size="lg"
                                        onClick={openControls}
                                    >
                                        View Options
                                    </Button>
                                </a>
                            </PricingCard>
                        </div>
                    </div>
                </Fade>
                <div id="collapse-1" className="collapse-target">
                    <Collapse
                        className="px-lg-5 px-3"
                        mt={12}
                        isOpen={show}
                    >
                        <div className="px-4 py-5 border">
                            <div className="display5 text-center">
                                Customize Your Enterprise Plan
                            </div>
                            <div className="row px-3">
                                <div className="col-lg-12 mt-4">
                                    <div className="h6">Number of Copies</div>
                                    <Slider
                                        color="primary"
                                        my="24px"
                                        min={1}
                                        max={4}
                                        defaultValue={1}
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <SliderTrack
                                            h="16px"
                                            borderRadius="8px"
                                        />
                                        <SliderFilledTrack
                                            h="16px"
                                            borderRadius="8px"
                                        />
                                        <SliderThumb
                                            className="shadow-md"
                                            fontSize="md"
                                            fontWeight="800"
                                            width="auto"
                                            padding="8px"
                                            height="32px"
                                            children={value}
                                        />
                                    </Slider>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">
                                    Number of
                                        Restore Points
                                    </div>
                                    <Select
                                        onChange={(e) =>
                                            setRestorePoints(e.target.value)
                                        }
                                        my="24px"
                                        placeholder="Select option"
                                        size="lg"
                                    >
                                        <option value=",5 Restore Points">
                                            5
                                        </option>
                                        <option value=",10 Restore Points">
                                            10
                                        </option>
                                        <option value=",15 Restore Points">
                                            15
                                        </option>
                                        <option value=",20 Restore Points">
                                            20
                                        </option>
                                        <option value=",25 Restore Points">
                                            25
                                        </option>
                                        <option value=",30 Restore Points">
                                            30
                                        </option>
                                    </Select>
                                </div>
                                <div className="col-lg-5 offset-lg-1 mt-4">
                                    <div className="h6">
                                        Number of Geo-Locations
                                    </div>
                                    <Select
                                        onChange={(e) =>
                                            setGeoLocations(e.target.value)
                                        }
                                        my="24px"
                                        placeholder="Select option"
                                        size="lg"
                                    >
                                        <option value=",1 Geo Location">
                                            1
                                        </option>
                                        <option value=",2 Geo Location">
                                            2
                                        </option>
                                    </Select>
                                </div>
                                <div className="col-lg-12 mt-3 d-flex justify-content-between">
                                    <Flex
                                        py="12px"
                                        justify="center"
                                        align="center"
                                    >
                                        <Switch
                                            onChange={(e) => {
                                                setHourlyBackups(
                                                    e.target.checked
                                                );
                                            }}
                                            color="primary"
                                            mb={0}
                                            id="hourly-backup"
                                        />
                                        <FormLabel
                                            mb={0}
                                            ml="12px"
                                            htmlFor="hourly-backup"
                                        >
                                            Hourly Backups
                                        </FormLabel>
                                    </Flex>
                                    <PricingQuote
                                        serviceName="Backup As A Service"
                                        serviceDescription={`${value} Copy${restorePoints}${geoLocations}${handleHourlyBackups(
                                            hourlyBackups
                                        )}`}
                                        button
                                    ></PricingQuote>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }

export default BackupPricing;
