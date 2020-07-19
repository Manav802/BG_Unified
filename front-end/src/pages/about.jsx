import React, { Component } from 'react';
import Slider from '../components/ImageSlider/Slider'
import CardWithAction from '../components/cards/CardWithAction' 
import dividerWhite from '../static/images/backgrouds/divider_white_plain.svg'
import dividerYellow from '../static/images/backgrouds/divider_yellow_bottom.svg'
import teamDiscussion from '../static/images/vectors/team.png'

class about extends Component {
    render() {
        return (
            <div className="about">
               <div className="section mt-5">
                    <div className="container">
                        <div className="py-5">
                            <span className="display2">About Us</span>
                        </div>
                    </div>
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="slider-offset p-3"></div>
                            <div className="col">
                                <a href="#" className="text-primary border-bottom p-4">2020</a>
                                <a href="#" className="p-4">2019</a>
                                <a href="#" className="p-4">2018</a>
                                <a href="#" className="p-4">2017</a>
                                <a href="#" className="p-4">2016</a>
                                <a href="#" className="p-4">2015</a>
                                <a href="#" className="p-4">2014</a>
                            </div>
                        </div>
                       <Slider
                            options={{
                            freeScroll: true,
                            pageDots: false,
                            contain: true,
                            draggable: true,
                            }}>
                            <div className="slider-offset"></div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                <CardWithAction title="Title Here">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos culpa consectetur itaque nesciunt error esse voluptatibus, veniam commodi ab hic eligendi officia ratione quaerat? Quasi quidem alias sint rerum commodi.</CardWithAction>

                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                <CardWithAction title="Title Here">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos culpa consectetur itaque nesciunt error esse voluptatibus, veniam commodi ab hic eligendi officia ratione quaerat? Quasi quidem alias sint rerum commodi.</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                <CardWithAction title="Title Here">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos culpa consectetur itaque nesciunt error esse voluptatibus, veniam commodi ab hic eligendi officia ratione quaerat? Quasi quidem alias sint rerum commodi.</CardWithAction>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-7 p-3 my-3">
                                <CardWithAction title="Title Here">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos culpa consectetur itaque nesciunt error esse voluptatibus, veniam commodi ab hic eligendi officia ratione quaerat? Quasi quidem alias sint rerum commodi.</CardWithAction>
                            </div>
                        </Slider>
                    </div>
               </div>
               <div className="section pb-0">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-10 offset-2">
                            <div className="row my-4">
                                <div className="col-md-3">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Data Locations</h5>
                                </div>
                                <div className="col-md-3">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Data Locations</h5>
                                </div>
                                <div className="col-md-3">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Data Locations</h5>
                                </div>
                            </div>
                            <div className="display6 py-3">
                                Our Mission
                            </div>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit voluptas harum nesciunt tenetur. Repudiandae omnis neque laboriosam sint harum fuga exercitationem nisi, quo ea quos voluptatem nemo odit enim
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit voluptas harum nesciunt tenetur. Repudiandae omnis neque laboriosam sint harum fuga exercitationem nisi, quo ea quos voluptatem nemo odit enim
                            </p>
                            <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit voluptas harum nesciunt tenetur. Repudiandae omnis neque laboriosam sint harum fuga exercitationem nisi, quo ea quos voluptatem nemo odit enim
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit voluptas harum nesciunt tenetur.
                            </p>
                           </div>
                       </div>
                   </div>
               </div>
               <div>
                   <div className="row">
                       <div className="col-12 p-0 bg-dark overflow-hidden">
                            <img src={dividerWhite} className="w-100 image-flip" alt=""/>
                       </div>
                       <div className="bg-dark w-100 overflow-hidden">
                            <img src={teamDiscussion} className="team-image" alt=""/>
                       </div>
                       <div className="p-0 layer-1 bg-dark">
                            <img src={dividerYellow} className="divider-yellow-with-margin" alt=""/>
                       </div>
                       <div className="divider-plain-white-offset position-absolute w-100">
                           <div className="p-5 w-100 bg-light"></div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default about;