import React from 'react';
import ImgPopUp from '../Design System/image_popup/main';
import CardWithImage from '../Design System/cardWithImage/main';

function ContentArea() {
    return <div className=" col-sm-9 col content align float-right" data-spy="scroll" data-target="#sideNav" data-offset="0">
    <ImgPopUp id="1"/>
    <CardWithImage id="2"/>
    </div>
}

export default ContentArea;