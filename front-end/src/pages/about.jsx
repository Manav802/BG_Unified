import React, { Component } from 'react';
import Slider from 'react-flickity-component'
import CardWithAction from '../components/cards/CardWithAction' 
import Team from '../components/cards/team'
import { FaArrowRight } from "react-icons/fa";
import { Box } from '@chakra-ui/core';

class about extends Component {
    constructor(props){
        super(props);
        this.state={
            activeYearCard:1
        }
    }
    goToIndex = (index) => {
        //using Flickity API
        this.flkty.select( index );
        this.setState({activeYearCard:index})
      }
    render() {
        return (
            <>
            <div className="position-absolute w-100 overflow-hidden back-cover">
                <img className="w-100" src="/assets/images/backgrounds/top_red_triangle.svg"/>
            </div>
            <div className="about">
               <div className="section mt-5">
                    <div className="container p-0">
                        <div className="py-5">
                            <span className="display2">About Us</span>
                        </div>
                    </div>
                    <div className="container-fluid p-0 py-5">
                        <div className="row m-0">
                            <div className="slider-offset p-3"></div>
                            <div className="col">
                                <a onClick={()=>this.goToIndex(1)} className={ "p-4" + (this.state.activeYearCard==1 ? " text-primary border-bottom": "")}>2020</a>
                                <a onClick={()=>this.goToIndex(2)} className={ "p-4" + (this.state.activeYearCard==2 ? " text-primary border-bottom": "")}>2019</a>
                                <a onClick={()=>this.goToIndex(3)} className={ "p-4" + (this.state.activeYearCard==3 ? " text-primary border-bottom": "")}>2018</a>
                                <a onClick={()=>this.goToIndex(4)} className={ "p-4" + (this.state.activeYearCard==4 ? " text-primary border-bottom": "")}>2017</a>
                                <a onClick={()=>this.goToIndex(5)} className={ "p-4" + (this.state.activeYearCard==5 ? " text-primary border-bottom": "")}>2016</a>
                                <a onClick={()=>this.goToIndex(6)} className={ "p-4" + (this.state.activeYearCard==6 ? " text-primary border-bottom": "")}>2015</a>
                                <a onClick={()=>this.goToIndex(7)} className={ "p-4" + (this.state.activeYearCard==7 ? " text-primary border-bottom": "")}>2014</a>
                            </div>
                            
                        </div>
                        
                       <Slider flickityRef={c => this.flkty = c}
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
               <div className="section pt-0">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-10 offset-1">
                            <div className="row my-4">
                                <div className="col-sm-3 col-4">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Data Locations</h5>
                                </div>
                                <div className="col-sm-3 col-4">
                                    <span className="display4 mb-0 text-primary">20+</span>
                                    <h5>Data Locations</h5>
                                </div>
                                <div className="col-sm-3 col-4">
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
               <div className="section pt-0">
                    <div className="col-12 p-0 bg-dark overflow-hidden">
                        <img src="/assets/images/dividers/divider_white_plain.svg" className="w-100 image-flip" alt=""/>
                    </div>
                   <div className="row m-0">
                       <div className="position-absolute w-100">
                            <div className="bg-dark w-100 overflow-hidden">
                                    <img src="/assets/images/vectors/team.png" className="team-image" alt=""/>
                            </div>
                            <div className="p-0 w-100 layer-1 bg-dark">
                                    <img src="/assets/images/dividers/divider_yellow_bottom.svg" className="divider-yellow-with-margin" alt=""/>
                            </div>
                       </div>
                       <div className="layer-4 w-100">
                           <div className="container">
                               <div className="p-3 text-center d-flex flex-column">
                                   <span className="h6 text-primary">TEAM</span>
                                   <span className="display5 text-white">Meet the Visionary People</span>
                               </div>
                               <div className="row py-2">
                                   <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Founder & Owner" name="Jingyi Li" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                    </div>
                                    <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Co-Founder and Managing Director" name="Saurabh Sareen" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                   </div>
                                   <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Founder & Owner" name="Jingyi Li" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                    </div>
                                    <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                                        <Team title="Co-Founder and Managing Director" name="Saurabh Sareen" img="https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. 
                                            Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!
                                        </Team>
                                   </div>
                                   <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                                        <span className="display6 text-dark">Interested in joining our team?</span>
                                        <a className="text-primary d-flex my-2" href="">View Career Opportunities <Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="section">
                   
               </div>
            </div>
            </>
        );
    }
}

export default about;