import React from 'react';
import ComponentSheet from './componentsheet/Componentsheet'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './static/js/theme.js'

function App()
{
	return <div>
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<ComponentSheet />
		</ThemeProvider>
		
	</div>
}
export default App;