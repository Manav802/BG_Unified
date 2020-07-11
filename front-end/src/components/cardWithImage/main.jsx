import React from 'react'
import Content from './contents'
function cardWithImage(props)
{
    return(
        <div className="backgroundImage" id={props.id}>
            <div className="mask-element">
                <Content/>
            </div>
        </div>);
}

export default cardWithImage; 