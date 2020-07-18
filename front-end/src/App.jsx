import React, { Component } from 'react';
import ComponentSheet from './componentsheet/Componentsheet'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './static/js/theme.js'
import Landing from './landing/Landing'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			
		 }
	}
	render() { 
		return ( 
			<ThemeProvider theme={customTheme}>		
			<CSSReset />
			<ComponentSheet />
			</ThemeProvider>
		);
	}
}
 
export default App;