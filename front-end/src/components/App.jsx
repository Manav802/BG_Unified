import React from 'react';
import SideNav from './elements/SideNav'
import Header from  './elements/Header'
import ContentArea from './elements/ContentArea'

function App()
{
	return <div><Header /> 
	<div className="container-fluid">
	<SideNav/>
	<ContentArea/>
	</div>
	</div>
}
export default App;