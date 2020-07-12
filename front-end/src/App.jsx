import React, { Component } from 'react';
import ComponentSheet from './componentsheet/Componentsheet'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './static/js/theme.js'
import ImageSlider from './components/ImageSlider/ImageSliderComponent';
import TextBox from './components/Textboxes/TextBoxComponent'
import Testimonial from './components/TestimonialCard/TestimonialCardComponent'
import {TESTIMONIALS} from './shared/testimonials';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			testimonialDetails: TESTIMONIALS
		 }
	}
	render() { 
		return ( 
			<div>
		<ThemeProvider theme={customTheme}>
		<div className="container-fluid">
		{/* <CSSReset />
		<ComponentSheet /> */}
		<ImageSlider />
		<Testimonial testimonialDetails={this.state.testimonialDetails}/>
		<TextBox/>
		
		</div>
		</ThemeProvider>
		</div>
		 );
	}
}
 
export default App;