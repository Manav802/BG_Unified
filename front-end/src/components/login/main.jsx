import React, { Component } from 'react';
import PasswordInput from '../inputs/password';
import dividerWhite from '../../static/images/dividers/slant-shadow-white.svg'
import dividerDark from '../../static/images/dividers/slant-red-dark.svg'
import {
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    Input,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Checkbox

  } from "@chakra-ui/core";

  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
         <Button onClick={onOpen}>Open Drawer</Button>
        <Drawer placement="bottom" onClose={onClose} isOpen="true">
            <DrawerOverlay />
            <DrawerContent className="auth-fullscreen">
            <div className="container">
                <DrawerHeader>
                    <a href="#">Go Back</a>
                </DrawerHeader>
            </div>
            <DrawerBody className="d-flex justify-content-center p-0 align-items-center">
                <div className="auth-modal-container row">
                    <div className="auth-modal shadow col-lg-4 offset-4">
                            <span className="display4 mt-4">Log In</span>
                            <div>Don't have an account? <a>Sign Up</a></div>
                            <div className="my-4 px-5 col">
                                <Input className="my-2" placeholder="Enter email" size="lg" />
                                <PasswordInput className="my-2"></PasswordInput>
                                <div className="d-flex my-2 justify-content-between">
                                    <Checkbox variantColor="primary" defaultIsChecked>Remember Me</Checkbox>
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <Button className="btn-block mt-4 shadow" variantColor="primary" size="lg" >Log In</Button>
                            </div>
                    </div>
                    <div className="auth-modal-footer">
                        {/* <img src={dividerDark} height="164px" alt=""/> */}
                    </div>
                </div>
            </DrawerBody>
            </DrawerContent>
        </Drawer>  
      </>
    );
  }

  export default Login