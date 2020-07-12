import React, { Component } from 'react';
import ComponentSheet from './componentsheet/Componentsheet'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './static/js/theme.js'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			
		 }
	}
	render() { 
		return ( 
			<div>
		<ThemeProvider theme={customTheme}>
		<div className="container-fluid">
		<CSSReset />
		<ComponentSheet />
		</div>
		</ThemeProvider>
		</div>
		 );
	}
}
 
export default App;