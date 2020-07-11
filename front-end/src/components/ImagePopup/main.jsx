import React from 'react'


function ImgPopUp(props)
{
    return (
      <div>
          <a href="#img1" className="thumbnail">
            <img src={props.image}alt=" did not load correctly" />
          </a>
        <div className="lightbox animate" id="img1">
          <a className="lightboxClose" href="#!">       
          CLOSE</a>
          <a className="closeIcon"href="!#">Close</a>
          <img className="animate" src={props.image}
          width="40%"
          height="40%"
            alt="did not load correctly"/>
        </div>
      </div>
    );
    }
    
    export default ImgPopUp;