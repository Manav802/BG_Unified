import React from 'react';
import { Input, Stack } from "@chakra-ui/core";

function TextBox(){
  return(
    <div className="container mt-5">
      <div className="row row-header justify-content-center">
        <div className="col-md-5">
        <form>
          <Stack spacing="3">
          <Input placeholder="Username"/>
          <Input pr="4.5rem" type="password" placeholder="Enter password"/>
          <Input isInvalid type="password" errorBorderColor="red.300" placeholder="Wrong Password entered" />
          <Input focusBorderColor="lime" placeholder="textbox-success" />
          <Input focusBorderColor="pink.400" placeholder="textbox-danger" />
          </Stack>
        </form>
        </div>
      </div>
    </div>
  )
}

export default TextBox;