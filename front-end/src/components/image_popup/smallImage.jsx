import React from 'react'
import LargeImage from './largeImage'
function smallImage() {
    return <div className='smallImg'><img src="https://picsum.photos/300/200" alt="random-pic from lorem picsum" />
    <LargeImage/></div>
}
export default smallImage;