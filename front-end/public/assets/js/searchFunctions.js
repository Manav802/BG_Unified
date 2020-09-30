import { Stack, Box } from "@chakra-ui/core";
import Link from 'next/link';
import data from '../data/searchDatabase.json';
import services from '../../../src/database/services';
import blogs from '../../../src/database/newsroom';

//dynamicSearch(searchTerm) will return filtered results object of this format : {pages: [{name:"",link:""}], services: [], articles: []} (same format as in searchDatabase.json)
//Results is a functional React Component used to show how this data is mapped.
const servicesArray = Object.entries(services);

const Matcher = (name,searchTerm) =>{
  //Searching in title
  const title = name.title
  if(title.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    

  //Searching in tags array
  for(const tag of name.tags){
    let l = Math.min(tag.length, searchTerm.length);
    for(var i=0; i<l; i++) {
      if( tag.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && tag.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    }
  }

  //Not found then
  return(false);
}

const ServiceMatcher = (name,searchTerm) =>{

  // Searching whole term in title
  const title = name[1].title
  let k = Math.min(title.length, searchTerm.length);
    for(var i=0; i<k; i++) {
      if( title.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && title.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    }

  // Searching whole term in tags
  for(const tag of name[1].tags){
    let l = Math.min(tag.length, searchTerm.length);
    for(var i=0; i<l; i++) {
      if( tag.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && tag.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    }
  }

  //Breaking search term and searching in tags array
  const searchArray = searchTerm.split(" ")
  var flag =false;
  var flagArray = []
  for(const searchTerm of searchArray){
    flag = false;
    
    //Searching in tags array
    for(const tag of name[1].tags){
      let l = Math.min(tag.length, searchTerm.length);
      for(var i=0; i<l; i++) {
        if( tag.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && tag.toLowerCase().includes(searchTerm.toLowerCase())) {flag= true;}
      }
    }

    flagArray.push(flag);
  }

  if(flagArray.every((x)=>x==true)){return(true)}
  //Not found then
  return(false);
}

export const dynamicSearch = (searchTerm) => {
  searchTerm = searchTerm.trim();
  if(searchTerm == '') return({pages:[],services:[],articles:[]}) 
  else return( //Return object of resultant arrays.
    { 
      // pages: data.pages.filter( page => Matcher(page,searchTerm)) , //filter pages
      services: servicesArray.filter( service => ServiceMatcher(service,searchTerm)), //filter services
      articles: blogs.filter( article => Matcher(article,searchTerm)) //filter services
    }
  ); 
}

export const searchData = data
//Example Results Component, Not a Function!
//Example Usage:  <Results results = {this.dynamicSearch(searchTerm)}/>
export function Results({results}){
    return (
      <>
        <Stack spacing={0}>
          {results.pages.map(page => <Link href={page.link}><a> <Box key={page.name} p={4} borderWidth="1px">{page.name} <small> -- Page </small></Box> </a></Link> )} {/*Display Pages First*/}
          {results.services.map(service => <Link href={service.link}><a> <Box key={service.name} p={4} borderWidth="1px">{service.name} <small>  -- Service </small> </Box> </a></Link> )} {/*Display Services*/}
          {results.articles.map(article => <Link href={article.link}><a> <Box key={article.name} p={4} borderWidth="1px">{article.name} <small> -- Article </small></Box> </a></Link> )} {/*Display Services*/}
        </Stack>
      </>
    )    
}


