import React from "react";
import {
  Button,
  Collapse,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  FormLabel,
  Switch,
  Flex,
  RadioButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Popover,PopoverBody,PopoverArrow,PopoverContent,PopoverTrigger,PopoverHeader
} from "@chakra-ui/core";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import { Icon } from "@chakra-ui/core";

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      className="my-1"
      fontSize={["13px","14px","16px"]}
      ref={ref}
      variant={isChecked ? "solid" : "outline"}
      variantColor={isChecked ? "primary" : "gray.300"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

function ContactCenterPricing(props) {
  const features = [
    "Includes 5 CSQ",
    "Connectivity to end customer is not included in the costs",
    "All Call Recording",
    "On Demand Call Recording",
    "Fully Managed Service",
  ];
  const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

  const [planIndex, setPlanIndex] = React.useState(1);
  const [planName, setPlanName] = React.useState("");
  const [RDSType, setRDSType] = React.useState("");
  const [wfm, setWfm] = React.useState(0);
  const [complianceQM, setComplianceQM] = React.useState(0);
  const [advancedQM, setAdvancedQM] = React.useState(0);
  const [failOverNode, setFailOverNode] = React.useState(false);
  const handleFailOverNode = (failOverNode) =>
    failOverNode ? ",Add Fail-Over Node" : "";
  const [value, setValue] = React.useState(1);
  const handleChange = (value) => setValue(value);
  const [tbSpace, setTbSpace] = React.useState(1);
  const handleTbSpace = (tbSpace) => setTbSpace(tbSpace);

  const [show, setShow] = React.useState(false);
  const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);}

  return (
        <div id="pricing" className="container">
          <div className="row no-gutters px-lg-5">
            <div className="col-lg-4 my-3">
              <PricingCard
                title="Basic"
                icon="/assets/images/icons/theme/origami.svg"
                featureList={features}
              >
                <Button
                  className="mt-3"
                  variantColor="primary"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    openControls();
                    setPlanName("CAGENT Basic Plan");
                    setPlanIndex(1);
                    setWfm(0);
                    setAdvancedQM(0);
                    setComplianceQM(0);
                  }}
                >
                  View Options
                </Button>
              </PricingCard>
            </div>
            <div className="col-lg-4 my-3">
              <PricingCard
                title="Standard"
                icon="/assets/images/icons/theme/paper-plane.svg"
                featureList={features}
              >
                <Button
                  className="mt-3"
                  variantColor="primary"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    openControls();
                    setPlanName("CAGENT Standard Plan");
                    setPlanIndex(2);
                    setRDSType("");
                    setValue(0);
                    setTbSpace(0);
                    setFailOverNode(false);
                  }}
                >
                  View Options
                </Button>
              </PricingCard>
            </div>
            <div className="col-lg-4 my-3">
              <PricingCard
                title="Premium"
                icon="/assets/images/icons/theme/airplane.svg"
                featureList={features}
              >
                <Button
                  className="mt-3"
                  variantColor="primary"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    openControls();
                    setPlanName("CAGENT Premium Plan");
                    setPlanIndex(3);
                    setRDSType("");
                    setValue(0);
                    setTbSpace(0);
                    setFailOverNode(false);
                  }}
                >
                  View Options
                </Button>
              </PricingCard>
            </div>
          </div>
          <div>
            <div id="collapse-1">
            <Collapse className="px-lg-5" mt={6} isOpen={show}>
              <div className="px-4 py-5 border">
                <div className="display5 text-center">{planName}</div>
                <div className="row justify-content-between px-3">
                  {planIndex === 1 && (
                    <>
                      <div className="col-lg-10 offset-lg-1 mt-4">
                        <div className="h6">Additional CSQ</div>
                        <Slider
                          color="primary"
                          my="24px"
                          max={30}
                          defaultValue={1}
                          value={value}
                          onChange={handleChange}
                        >
                          <SliderTrack h="16px" borderRadius="8px" />
                          <SliderFilledTrack h="16px" borderRadius="8px" />
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
                      <div className="col-lg-10 offset-lg-1 mt-2">
                        <div className="h6">Choose a type</div>
                        <RadioButtonGroup
                          onChange={(value) => setRDSType(value)}
                          mt={4}
                          isInline
                        >
                          <CustomRadio value=",RDS SERVER WITH CAD">
                            RDS SERVER WITH CAD
                          </CustomRadio>
                          <CustomRadio value=",RDS SERVER WITH TOOLS">
                            RDS SERVER WITH TOOLS
                          </CustomRadio>
                          <CustomRadio value=",RDS SERVER CALL RECORDING">
                            RDS SERVER CALL RECORDING
                          </CustomRadio>
                        </RadioButtonGroup>
                      </div>
                      <div className="col-lg-10 offset-lg-1 mt-4">
                        <div className="h6">TB Space</div>
                        <Slider
                          color="primary"
                          my="24px"
                          max={30}
                          defaultValue={1}
                          value={tbSpace}
                          onChange={handleTbSpace}
                        >
                          <SliderTrack h="16px" borderRadius="8px" />
                          <SliderFilledTrack h="16px" borderRadius="8px" />
                          <SliderThumb
                            className="shadow-md"
                            fontSize="md"
                            fontWeight="800"
                            width="auto"
                            padding="8px"
                            height="32px"
                            children={tbSpace}
                          />
                        </Slider>
                      </div>
                      <div className="my-1 col-lg-10 offset-lg-1 mt-3 d-flex justify-content-between">
                        <Flex py="12px" justify="center" align="center">
                          <Switch
                            onChange={(e) => {
                              setFailOverNode(e.target.checked);
                            }}
                            color="primary"
                            mb={0}
                            id="failOverNode"
                          />
                          <FormLabel mb={0} ml="12px" htmlFor="fail-over node">
                            Add Fail-Over Node
                          </FormLabel>
                        </Flex>
                      </div>
                    </>
                  )}

                  {(planIndex === 2 || planIndex === 3) && (
                    <>
                      <div className="my-1 col-lg-10 offset-lg-1 mt-4">
                        <div className="h6">WFM</div>
                        <Slider
                          color="primary"
                          my="24px"
                          defaultValue={0}
                          max="64"
                          value={wfm}
                          onChange={setWfm}
                        >
                          <SliderTrack h="16px" borderRadius="8px" />
                          <SliderFilledTrack h="16px" borderRadius="8px" />
                          <SliderThumb
                            className="shadow-md"
                            fontSize="md"
                            fontWeight="800"
                            width="auto"
                            padding="8px"
                            height="32px"
                            children={wfm}
                          />
                        </Slider>
                      </div>
                      <div className="col-lg-12 text-center justify-content-center text-secondary">
                          (The sum value of Advance QM and Compliance QM cannot be greater than WFM)
                      </div>
                      <div className="my-1 col-lg-4 offset-lg-1 mt-4 pl-lg-4">
                        <div className="d-flex"> <div className="h6">ADVANCED QM</div> <Popover usePortal trigger="hover">
                        <PopoverTrigger>
                        <Icon className="ml-2 pb-1 mb-2" name="question" size="28px" color="primary.500" />
                        </PopoverTrigger>
                          <PopoverContent zIndex={4}>
                            <PopoverArrow />
                            <PopoverHeader className="h6">Advanced QM</PopoverHeader>
                            <PopoverBody>Advanced Quality Management solution gives you the tools to continuously measure and monitor agent performance, assess the quality and depth of your customer interactions, and drive constant improvement. In essence, an effective contact centre quality management program is directly connected to the success of your business.</PopoverBody>
                          </PopoverContent>
                        </Popover> </div>
                        <NumberInput
                          maxWidth="200px"
                          min={0}
                          max={wfm-complianceQM}
                          value={advancedQM}
                          onChange={(value)=>{value<=wfm-complianceQM?setAdvancedQM(value):setAdvancedQM(wfm-complianceQM)}}
                        >
                          <NumberInputField className="bg-light" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </div>
                      <div className="my-1 col-lg-4 mt-4 pr-lg-5">
                      <div className="d-flex"> <div className="h6">Compliance QM</div> <Popover usePortal trigger="hover">
                        <PopoverTrigger>
                        <Icon className="ml-2 pb-1 mb-2" name="question" size="28px" color="primary.500" />
                        </PopoverTrigger>
                          <PopoverContent zIndex={4}>
                            <PopoverArrow />
                            <PopoverHeader className="h6">Compliance QM</PopoverHeader>
                            <PopoverBody>Quality Management or Monitoring combined automatically scored calls via speech analytics; reconfigured QM evaluation; agent self-evaluation; and direct customer feedback. Customers don’t want a “managed” experience—they want a genuine experience and to speak to real people with real personalities. Call quality monitoring is all about refining agent behaviour and aligning it with business goals.</PopoverBody>
                          </PopoverContent>
                        </Popover> </div>
                        <NumberInput
                          maxWidth="200px"
                          min={0}
                          max={wfm-advancedQM}
                          value={complianceQM}
                          onChange={(value)=>{value<=wfm-advancedQM?setComplianceQM(value):setComplianceQM(wfm-advancedQM)}}
                        >
                          <NumberInputField className="bg-light" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </div>
                    </>
                  )}

                  <div className="col-lg-12 mt-5 d-flex justify-content-center">
                    <PricingQuote
                      serviceName="Contact Center As A Service"
                      serviceDescription={`${planName}${verifyNotEmpty(
                        value,
                        "Additional CSQ"
                      )}${RDSType}${verifyNotEmpty(
                        tbSpace,
                        "TB Space"
                      )}${verifyNotEmpty(wfm, "WFM")}${verifyNotEmpty(
                        advancedQM,
                        "Advanced QM"
                      )}${verifyNotEmpty(
                        complianceQM,
                        "Compliance QM"
                      )}${handleFailOverNode(failOverNode)}`}
                      button
                    ></PricingQuote>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        </div>
    )
}

export default ContactCenterPricing;