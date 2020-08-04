import React, { Component } from 'react';
import LoginForm from './loginform'
import LoginButton from './loginbutton'
import SignupForm from './signupform';
import {
    Button,
    ButtonGroup,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    SlideIn,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/core";


  function Login(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
         <Button onClick={onOpen} variantColor="primary" size="md">{props.signup ? "Sign Up" : "Log In"}</Button>
         <SlideIn in={isOpen}>
        {styles => (
          <Modal onClose={onClose} size="full" isOpen={true} isCentered>
            <ModalContent className="auth-fullscreen">
              <ModalCloseButton />
              <ModalBody className="d-flex auth-fullscreen justify-content-center p-0 mt-5">
                <div className="auth-modal-container">
                    <div className="container p-0">
                      {props.signup ? <SignupForm /> : <LoginForm />}
                    </div>
                    <div className="auth-modal-footer overflow-hidden row m-0">
                        <div className="container p-0">
                            <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2 px-0 pb-4 bg-light rounded-bottom">
                                <div className="col bg-white shadow-sm divider"></div>
                                <div className="p-4 col d-flex justify-content-center">
                                    
                                <ButtonGroup spacing={4} className="d-flex justify-content-center">
                                    <LoginButton src="https://image.flaticon.com/icons/svg/2702/2702602.svg" name="Google"></LoginButton>
                                    <LoginButton src="https://image.flaticon.com/icons/svg/1384/1384053.svg" name="Facebook"></LoginButton>
                                    <LoginButton src="https://image.flaticon.com/icons/svg/124/124011.svg" name="LinkedIn"></LoginButton>
                                </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="auth-footer-after text-light opacity-70 p-3">
                    All Rights Reserved © BG Unified Solutions 2020
                    </div>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </SlideIn>
      </>
    );
  }

  export default Login