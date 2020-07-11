import React from 'react'
import image23 from './Image 23.png'
import sdwan from './sdwan_s.png';
import sdwan_s from './sdwan_s-1.png';
import repeat_grid from './Repeat Grid 12.png'

function CaseStudy() {
    return (
        <div className="container py-2 case-study">
           
            <div className="row mt-2">
                <div className="col-4 d-none d-md-block">
                    <img className="img-fluid repeatGrid" src={repeat_grid} alt="repeatgird"/>
                    <div className="imagediv align-items-center text-center shadow">
                    <img className="img-fluid image23" src={image23} alt="image23"/>
                    </div>
                    <img className="img-fluid img-lg" src={sdwan_s} alt="sdwan_s"/>
                </div>
                <div className="col-12 d-sm-none">
                    <img className="img-fluid" src={sdwan}/>
                    <div className="imagediv-sm ">
                        <img className="img-fluid image23" src={image23}/>
                    </div>
                </div>
                <div className="col offset-md-1">
                    <div className='row mx-1 mx-md-0 feature my-3'>Featured CASE STUDY</div>
                    <div className="row mx-1 mx-md-0 display5"><h2>Simplifying SD-WAN with Centralized Management and Orchestration</h2></div>
                    <div className="row mx-1 mx-md-0"><p className="content">Software-defined wide-area networking (SD-WAN) is rapidly replacing the traditional WAN for remote office and branch deployments. SD-WAN was designed to provide a wide range of benefits to support digital innovation. However, far too many SD-WAN solutions lack critical networking and security features, requiring organizations to add complex and costly overlay solutions to manage and protect their SD-WAN deployments.
                    </p></div>
                    <button className="btn btn-light rounded readmore" style={{border: '2px solid #051133',borderRadius:'4px'}}>Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                
            </div>
        </div>
    )
}

export default CaseStudy;
