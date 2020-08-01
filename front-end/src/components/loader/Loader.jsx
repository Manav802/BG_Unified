import React from 'react'

import {Spinner} from '@chakra-ui/core'

const Loader = ()=>{
    return (<div style={{minHeight:"100vh", backgroundColor:"white"}} className="d-flex justify-content-center align-items-center"><Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="Red"
    size="xl"
  /></div>)
}

export default Loader