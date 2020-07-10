import React, { Component } from 'react';
import { 
    Input,
    Button,
    InputGroup,
    InputRightElement
 } from "@chakra-ui/core";

function PasswordInput() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  
    return (
      <InputGroup className="col p-0" size="lg">
        <Input
          pr="4rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement className="mr-2" width="4rem">
          <Button h="1.75rem" background="white" size="md" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }

  export default PasswordInput