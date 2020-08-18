import React from "react";
import PasswordInput from "../inputs/password";
import { Input, Button } from "@chakra-ui/core";

function SignupForm(props) {
  return (
    <div className="auth-modal shadow-sm col-lg-6 col-md-8 offset-lg-3 offset-md-2 rounded-top">
      <span className="display4 mt-4">Sign Up</span>
      <div>
        Already have an account? <a>Log In</a>
      </div>
      <div className="mt-4 px-5 col">
        <Input className="my-2" placeholder="Enter email" size="lg" />
        <PasswordInput
          placeholder="Enter password"
          className="my-2"
        ></PasswordInput>
        <PasswordInput
          placeholder="Confirm password"
          className="my-2"
        ></PasswordInput>
        <Button
          className="btn-block mt-4 shadow"
          variantColor="primary"
          size="lg"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignupForm;
