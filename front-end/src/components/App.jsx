import React from 'react';
import '../css/styles.css'
import SideNav from './elements/SideNav'
import Header from  './elements/Header'
import ContentArea from './elements/ContentArea'
import Home from './ImageSlider';
import Text from './TextBox'
import AirbnbExample from './TestimonialCardComponent'
import { ThemeProvider } from "@chakra-ui/core";


function App()
{
	return( 
	<ThemeProvider>
		<div>
		{/* <Header />  */}
		<div className="container-fluid">
		{/* <SideNav/>
		<ContentArea/> */}
		{/* <Home /> */}
		{/* <Text/> */}
		<AirbnbExample/>
		</div>
		</div>
	</ThemeProvider>

	
	)
}
export default App;