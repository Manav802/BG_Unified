import React from 'react';
import '../css/styles.css'
import SideNav from './elements/SideNav'
import Header from  './elements/Header'
import ContentArea from './elements/ContentArea'
import ImageSlider from './ImageSliderComponent';
import TextBox from './TextBoxComponent'
import Testimonial from './TestimonialCardComponent'
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
		<ImageSlider />
		<Testimonial/>
		<TextBox/>
		
		</div>
		</div>
	</ThemeProvider>

	
	)
}
export default App;