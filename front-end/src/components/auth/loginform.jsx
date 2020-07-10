import React from 'react';
import PasswordInput from '../inputs/password';
import {Input, Checkbox, Button} from "@chakra-ui/core"

function LoginForm(props) {
    return (
        <div className="auth-modal shadow-sm col-lg-6 col-md-8 offset-lg-3 offset-md-2 rounded-top">
            <span className="display4 mt-4">Log In</span>
            <div>Don't have an account? <a>Sign Up</a></div>
            <div className="mt-4 px-5 col">
                <Input className="my-2" placeholder="Enter email" size="lg" />
                <PasswordInput placeholder="Enter password" className="my-2"></PasswordInput>
                <div className="d-flex my-2 justify-content-between">
                    <Checkbox variantColor="primary" defaultIsChecked>Remember Me</Checkbox>
                    <a href="#">Forgot Password?</a>
                </div>
                <Button className="btn-block mt-4 shadow" variantColor="primary" size="lg" >Log In</Button>
            </div>
        </div>
    );
}

export default LoginForm;