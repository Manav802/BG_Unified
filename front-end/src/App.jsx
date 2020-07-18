import React, { Component } from 'react';
import ComponentSheet from './componentsheet/Componentsheet'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './static/js/theme.js'
import Landing from './pages'
import About from './views/about'

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
			<Landing />
			</ThemeProvider>
		);
	}
}
 
export default App;