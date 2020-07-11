import React from 'react'
import './main.css'


function imgPopUp(props)
{
    return (
      <div id={props.id}>
        <a className="thumbnail" href="#img1">
          <img src="https://picsum.photos/200" alt=" did not load correctly"/>
        </a>
        <div className="lightbox animate" id="img1">
          <a className="lightboxClose" href="#!">       
          CLOSE</a>
          <a className="closeIcon"href="!#">Close</a>
          <img className="animate" src="https://picsum.photos/200" 
          width="40%"
          height="40%"
            alt="did not load correctly"/>
        </div>
      </div>
    );
    }
    
    export default imgPopUp;