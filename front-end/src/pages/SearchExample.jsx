//This file is to be deleted, only created to show the usage of search functions.import React from 'react';

import {Input } from "@chakra-ui/core";
import {dynamicSearch,Results} from '../searchFunctions';

//dynamicSearch(searchTerm) will return filtered results object of this format : {pages: [{name:"",link:""}], services: [], articles: []} (same format as in searchDatabase.json)
//Results is a functional React Component used to show how this data is mapped. (not important)

import React from 'react'

function SearchExample() {
  
  const [searchTerm,setSearchTerm] = React.useState("");

  return (
    <div className="container" style = {{paddingTop: '20vh'}}>
      <Input type= 'text' value = {searchTerm} onChange = {(e)=>{setSearchTerm(e.target.value)}} variant="outline" placeholder="Search" />
      <Results results = {dynamicSearch(searchTerm)}/>
    </div>
  )
}

export default SearchExample

