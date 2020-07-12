import React from 'react'
import image23 from './Image 23.png'
import sdwan from './sdwan_s.png';
import sdwan_s from './sdwan_s-1.png';
import repeat_grid from './Repeat Grid 12.png'

function CaseStudy(props) {
    var content = props.content || "Software-defined wide-area networking (SD-WAN) is rapidly replacing the traditional WAN for remote office and branch deployments. SD-WAN was designed to provide a wide range of benefits to support digital innovation. However, far too many SD-WAN solutions lack critical networking and security features, requiring organizations to add complex and costly overlay solutions to manage and protect their SD-WAN deployments.";
    var feature = props.feature || "Featured CASE STUDY"
    var title = props.title || "Simplifying SD-WAN with Centralized Management and Orchestration";
    var iconImg = props.iconImg||image23;
    var imgsm = props.imgsm || sdwan;
    var imglg = props.imglg || sdwan_s;
    return (
        <div className="container py-2 case-study">
           
            <div className="row mt-2 m-0">
                <div className="col-xl-5 col-lg-6 d-flex pt-md-5 pl-lg-4 pt-lg-0">
                    <div className="fluid-1">
                        <div className="img-container">
                            <img src={iconImg} className="" alt=""/>
                        </div>
                    </div>
                    <img className="flex-fill rounded shadow-lg" style={{objectFit:'cover'}} src={imglg} alt="sdwan_s"/>
                    <div className="fluid-2"></div>
                </div>
                <div className="col-xl-6 col-lg-5 offset-lg-1">
                    <div className='row mx-1 mx-md-0 feature my-3'>{feature}</div>
                    <div className="row mx-1 mx-md-0 display5 my-1">{title}</div>
                    <div className="row mx-1 mx-md-0 ">
                        <p className="content py-2"> {content}
                        </p>
                    </div>
                    <button className="btn btn-light rounded readmore mt-2" style={{border: '2px solid #051133',borderRadius:'4px'}}>Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                
            </div>
        </div>
    )
}

export default CaseStudy;


