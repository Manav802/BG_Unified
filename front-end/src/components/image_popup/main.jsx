import React from 'react'
import SmallImage from './smallImage'
import './main.css'


function imgPopUp(props)
{
    return(
        <div className="image-popup" id={props.id}>
            <SmallImage >
            </SmallImage>
        </div>);
}

export default imgPopUp;