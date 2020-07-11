import React from 'react';
import { Input, Stack } from "@chakra-ui/core";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

function Text(){
  return(
    <form>
      <Stack spacing="3">
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />

      <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
      </Stack>
    </form>
  )
}

}

export default Text;