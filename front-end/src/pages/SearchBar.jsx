import React from 'react';
import { Stack, Box,Input } from "@chakra-ui/core";

import data from './searchdata.json';

function Results({results}){
  if(results==null){
    return(<></>)
  }
  else{
    return (
      <>
        <Stack spacing={0}>
          {results.pages.map(page =>  <Box key={page.name} p={4} borderWidth="1px">{page.name} -- Page</Box> )} {/*Display Pages First*/}
          {results.services.map(service =>  <Box key={service.name} p={4} borderWidth="1px">{service.name} -- Service</Box> )} {/*Display Services*/}
        </Stack>
      </>
    )
  }    
}

const Matcher = (name,searchTerm) =>{
  for(const tag of name.tags){
    let l = Math.min(tag.length, searchTerm.length);
    for(var i=0; i<l; i++) {
      if( tag.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && tag.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    }
  }
  return(false);
}

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
      if(this.state.searchTerm == '') return(null) 
      else return( //Return object of resultant arrays.
        { 
          pages: data.pages.filter( page => Matcher(page,this.state.searchTerm)) , //filter pages
          services: data.services.filter( service => Matcher(service,this.state.searchTerm)) //filter services
        }
      ); 
  }

  render(){
    return (
      <div className="container" style = {{paddingTop: '30vh'}}>
        <Input type= 'text' value = {this.state.searchTerm} onChange = {(e)=>{this.editSearchTerm(e);}} variant="outline" placeholder="Search" />
        <Results results = {this.dynamicSearch()}/>
      </div>
    );
  }

}

export default SearchBar;
//Removing padding