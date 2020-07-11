import React from 'react'


function ImgPopUp(props)
{
    return (
      <div id={props.id}>
          <a href="#img1" className="thumbnail">
            <img src="https://picsum.photos/200" alt=" did not load correctly" />
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
    
    export default ImgPopUp;