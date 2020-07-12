import React from 'react'
import Content from './contents'
import Links from './ActionLinks'
function cardWithImage(props)
{
    return(
        <div className="backgroundImage"style={{backgroundImage:"url("+props.image+")"}}>
            <div className="mask-element">
                <Content title={props.title} text={props.text}/>
                <Links blackLink={props.blackLink} redLink={props.redLink}/>
            </div>
        </div>);
}

export default cardWithImage; 