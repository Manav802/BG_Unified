import React from 'react';
import {Image} from '@chakra-ui/core'
import RecentPost from '../../components/header/whatsnew'
function template(props) {
    return (
        <div className="article">
            <div className="container-fluid p-0 overflow-hidden position-absolute">
                    <img src="/assets/images/backgrounds/top_red_triangle.svg" className="divider-topred-with-margin w-100 layer-2" alt=""/>
                 </div>
                <div className="layer-2">
                    <div className="section">
                        <div className="container p-0">
                            <div className="py-5 mt-5 row">
                                <div className="col-12">
                                    <div className="rounded-8 cover-image shadow-lg">
                                        <Image className="w-100" src="/assets/images/newsroom/coronavirus.jpg"></Image>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 pb-3 border-bottom">
                                    <div className="display4">Business Operations during COVID-19</div>
                                    <div className="NunitoSans-Regular text-secondary">Last Updated <b>21st March 2020</b></div>
                                </div>
                                <div className="col-lg-8 mt-3">
                                    <div className="content-lead">
                                        The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.
                                        <br/><br/>We are here to help in this tough time. Please do not hesitate to ask for help, whether you need VDI, UC, Storage, Managed Firewall or anything that will help you to keep carrying on your work remotely and keep you & your family safe in this time! ! !
                                    </div>
                                </div>
                                <div className="col-lg-4 px-4 mt-3">
                                    <div className="h6 mb-2 text-secondary">Recent Posts</div>
                                    <div className="py-2">
                                        <a href="" className="">Complete VDI/RDS As A Service</a>
                                    </div>
                                    <div className="py-2">
                                        <a href="" className="">Complete VDI/RDS As A Service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default template;