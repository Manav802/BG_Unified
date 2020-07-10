import React from 'react';
import SideNav from './elements/SideNav'
import Header from  './elements/Header'
import ContentArea from './elements/ContentArea'
import Home from './ImageSlider';
import '../css/styles.css'

function App()
{
	return <div><Header /> 
	<div className="container-fluid">
	{/* <SideNav/>
	<ContentArea/> */}
	<Home />
	</div>
	</div>
}
export default App;