import React from 'react';
import {Button} from "@chakra-ui/core"

function LoginButton(props) {
    return (
        <Button className="bg-white shadow-sm m-1" size="lg">
            <img src={props.src} className="mr-2" height="20px" width="20px" alt=""/>
            {props.name}
        </Button>
    );
}

export default LoginButton;