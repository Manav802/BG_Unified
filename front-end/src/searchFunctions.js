import { Stack, Box } from "@chakra-ui/core";
import Link from 'next/link';
import data from '../public/assets/data/searchDatabase.json';

//dynamicSearch(searchTerm) will return filtered results object of this format : {pages: [{name:"",link:""}], services: [], articles: []} (same format as in searchDatabase.json)
//Results is a functional React Component used to show how this data is mapped.

const Matcher = (name,searchTerm) =>{
  for(const tag of name.tags){
    let l = Math.min(tag.length, searchTerm.length);
    for(var i=0; i<l; i++) {
      if( tag.toLowerCase().charAt(i) == searchTerm.toLowerCase().charAt(i) && tag.toLowerCase().includes(searchTerm.toLowerCase())) return(true);
    }
  }
  return(false);
}

export const dynamicSearch = (searchTerm) => {
  if(searchTerm == '') return({pages:[],services:[],articles:[]}) 
  else return( //Return object of resultant arrays.
    { 
      pages: data.pages.filter( page => Matcher(page,searchTerm)) , //filter pages
      services: data.services.filter( service => Matcher(service,searchTerm)), //filter services
      articles: data.articles.filter( article => Matcher(article,searchTerm)) //filter services
    }
  ); 
}

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


