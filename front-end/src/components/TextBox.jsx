import React from 'react';
import { Input, Stack } from "@chakra-ui/core";

function Text(){
  return(
    <div className="container">
      <div className="row row-header">
        <form>
          <Stack spacing="3">
          <Input placeholder="Username"/>
          <Input pr="4.5rem" type="password" placeholder="Enter password"/>
          <Input isInvalid errorBorderColor="red.300" placeholder="Wrong Password entered" />
          <Input focusBorderColor="lime" placeholder="textbox-success" />
          <Input focusBorderColor="pink.400" placeholder="textbox-danger UNAGI!" />
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default Text;