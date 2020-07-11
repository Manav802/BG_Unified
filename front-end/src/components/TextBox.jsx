import React from 'react';
import { Input, Stack } from "@chakra-ui/core";

function Text(){
  return(
    <form>
      <Stack spacing="3">
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input pr="4.5rem" type="password" placeholder="Enter password"
      />
      </Stack>
    </form>
  )
}

export default Text;