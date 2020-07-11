import React from 'react'
import Content from './contents'
import Links from './ActionLinks'
function cardWithImage(props)
{
    return(
        <div className="backgroundImage"style={{backgroundImage:"url("+props.image+")"}}>
            <div className="mask-element">
                <Content/>
                <Links/>
            </div>
        </div>);
}

export default cardWithImage; 