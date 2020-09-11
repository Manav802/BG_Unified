import React from 'react';
import {
    Button,
    RadioButtonGroup,
    Box,
    Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
    Select
} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import { PricingQuote } from '../../components/cards/PricingCard'
import { FaMobileAlt,FaGlobe,FaRobot,FaPencilRuler,FaDrawPolygon,FaCode } from "react-icons/fa";

import { Text } from '@chakra-ui/core';

function Description({mt = 4, opacity=.7, fontSize=["lg","xl"],px= ["6.17%","8.17%"], textAlign="center", children="", ...props}) {
    return (
        <Text style={{textAlignLast: textAlign}} fontSize={fontSize} px={px} mt={mt} textAlign="justify" opacity={opacity} {...props}>
            {children}
        </Text>
    );
}

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            flexDirection="column"
            padding={10}
            fontSize={["13px", "14px", "16px"]}
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



function WebDevPricing(props) {
    
    const [page, setPage] = React.useState(1);
    const [phase, setPhase] = React.useState(null);
    const [mobile,setMobile] = React.useState(false);
    const [web,setWeb] = React.useState(false);
    const [ai,setAi] = React.useState(false);
    const [functionalities,setFunctionalities] = React.useState([""]);
    const handleFunctionalities = (fun) => {if(fun.length==1){return("Choose functionalities");} else{return(fun.slice(1,).toString())}}
    const [industry,setIndustry] = React.useState(",Industry : IVS & Product Companies");

    
    return (
        <div id="pricing" className="container">

            {page == 1 &&    
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} bottom>
                    <div className="display5 text-center">Choose Your Phase</div>
                    <div className="row px-3 justify-content-center px-lg-4">
                        <div className="col-lg-10 my-3">
                            <RadioButtonGroup
                                onChange={(value) => {
                                    setPhase(value);
                                }}
                                value={phase}
                                className="row"
                                justifyContent="center"
                                mt={4}
                                isInline
                            >
                                <CustomRadio value="Planning">
                                    <span className="d-flex pb-2 justify-content-center text-center">
                                <FaPencilRuler size="24px"/>
                                </span>
                                Planning
                                    </CustomRadio>
                                <CustomRadio value={"Design"}>
                                    <span className="d-flex pb-2 justify-content-center text-center">
                                <FaDrawPolygon size="24px"/>
                                </span>
                                Design
                                    </CustomRadio>
                                <CustomRadio value={"Development"}>
                                    <span className="d-flex pb-2 justify-content-center text-center">
                                <FaCode size="24px"/>
                                </span>
                                Development
                                    </CustomRadio>
                            </RadioButtonGroup>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center my-3">
                            <Button rightIcon="chevron-right"
                            isDisabled={(phase==null)?true:false} onClick={() => {
                                setPage(2);
                            }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Next</Button>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

{page == 2 &&
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="display5 text-center">Choose Your Domains</div>
                    <div className="row px-3 justify-content-center px-lg-4">
                        <div className="col-lg-10 my-3">
                            <div className="row justify-content-center">
                        <Button
                            className="my-1 p-5 mx-2"
                            flexDirection="column"
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setMobile(!mobile)}}
                            variant={mobile ? "solid" : "outline"}
                            variantColor={mobile ? "primary" : "gray.300"}
                            aria-checked={mobile}
                        >
                            
                                <span className="d-flex pb-2 justify-content-center text-center">
                                <FaMobileAlt size="24px"/>
                                </span>
                                Mobile
                            </Button>
                            <Button
                            className="my-1 p-5 mx-2"
                            flexDirection="column"
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setWeb(!web)}}
                            variant={web ? "solid" : "outline"}
                            variantColor={web ? "primary" : "gray.300"}
                            aria-checked={web}
                        >
                            <span className="d-flex pb-2 justify-content-center text-center">
                                <FaGlobe size="24px"/>
                                </span>
                                Web
                            </Button>
                            <Button
                            className="my-1 p-5 mx-2"
                            flexDirection="column"
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setAi(!ai)}}
                            variant={ai ? "solid" : "outline"}
                            variantColor={ai ? "primary" : "gray.300"}
                            aria-checked={ai}
                        >
                            <span className="d-flex pb-2 justify-content-center text-center">
                                <FaRobot size="24px"/>
                                </span>
                                AI/ML
                            </Button>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center my-3">
                            
                            <Button rightIcon="chevron-right"
                            isDisabled={(mobile==false && web==false && ai==false)?true:false} onClick={() => {
                                setPage(3);
                            }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Next</Button>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

{page == 3 &&
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="row text-center px-3 px-lg-5 justify-content-center">
                        <Box w={["90%","80%","72%"]}>
                            <div className="h6 mt-4 d-flex justify-content-start">Functionalities </div>
                            <Menu closeOnSelect={false}>
                                <div>
                            <MenuButton marginY={3} w={["100%"]} fontWeight="normal" overflow="hidden" justifyContent="space-between" bg="white" borderWidth={1} padding={4} as={Button} rightIcon="chevron-down">
                                {handleFunctionalities(functionalities)}
                            </MenuButton>
                            <MenuList w={["50%"]} zIndex={100} placement="bottom">
                                <MenuOptionGroup value={functionalities} onChange={setFunctionalities} type="checkbox">
                                <MenuItemOption value=" CMS">CMS</MenuItemOption>
                                <MenuItemOption value=" Frontend">Frontend</MenuItemOption>
                                <MenuItemOption value=" Server-Side">Server-Side</MenuItemOption>
                                <MenuItemOption value=" Responsiveness">Responsiveness</MenuItemOption>
                                <MenuItemOption value=" E-Commerce">E-Commerce</MenuItemOption>
                                <MenuItemOption value=" Digital-Marketing">Digital-Marketing</MenuItemOption>
                                <MenuItemOption value=" SEO">SEO</MenuItemOption>
                                <MenuItemOption value=" Chatbot">Chatbot</MenuItemOption>
                                </MenuOptionGroup>
                            </MenuList>
                            </div>
                            </Menu>
                        
                            <div className="h6 mt-4 d-flex justify-content-start">Industry </div>
                            
                                <Select value={industry} marginY={3} variant="filled" bg="white" borderWidth={1} borderColor="#E2E8F0" fontSize="16px" fontWeight="semi-bold" onChange={(e)=>{setIndustry(e.target.value)}} type="checkbox">
                                <option value=",Industry : IVS & Product Companies">IVS & Product Companies</option>
                                <option value=",Industry : Digital & Marketing Agencies">Digital & Marketing Agencies</option>
                                <option value=",Industry : Banking & Finance">Banking & Finance</option>
                                <option value=",Industry : Retailt & E-Commerce">Retailt & E-Commerce</option>
                                <option value=",Industry : Healthcare">Healthcare</option>
                                <option value=",Industry : Education and E-Learning">Education and E-Learning</option>
                                <option value=",Industry : Logistics & Transportation">Logistics & Transportation</option>
                                <option value=",Industry : Media & Entertainment">Media & Entertainment</option>
                                <option value=",Industry : Automotive">Automotive</option>
                                <option value=",Industry : Travel & Tourism">Travel & Tourism</option>
                                <option value=",Industry : Technology">Technology</option>
                                <option value=",Industry : Publishing & Advertising">Publishing & Advertising</option>
                                </Select>
                            
                            
                            <div className="d-flex justify-content-center mt-5">
                                <Button rightIcon="chevron-right" onClick={() => {
                                    setPage(4);
                                }} variant="solid" className="primary-btn" variantColor="primary" size="lg" >Next</Button>
                                
                            </div>
                        </Box>
                    </div>
                </Fade>  
                </div>
            }

{page == 4 &&
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="display5 mt-3 text-center">Title</div>
                        <div className="row px-3 justify-content-center px-lg-4">
                           
                            <Description my={5} children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat repellat deleniti tenetur hic cumque, pariatur ab eum. Cum eligendi est facere enim a illo voluptatibus perspiciatis nesciunt dolor libero!"/>
                            
                        <div className="col-lg-12 d-flex justify-content-center mb-3 mt-4">
                            <PricingQuote serviceName="Web Development As A Service" serviceDescription={`${phase}, ${mobile?" Mobile":""} ${web?" Web":""} ${ai?" AI&ML":""} ${(functionalities.length>1)?",Functionalities : "+functionalities.slice(1,).join(";"):""} ${industry} `} button ></PricingQuote>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

        </div>
    )
}

//<PricingQuote serviceName="Web Hosting As A Service" serviceDescription={`${phase}, ${mobile?"Mobile /":""} ${web?"Web /":""} ${ai?"AI & ML ":""} `} button ></PricingQuote>

export default WebDevPricing;