import React, { Component } from 'react'
import CardWithImage from '../components/cards/CardWithImage'

    class Newsroom extends Component {
        constructor(props) {
        super(props)

        this.state = {

        }
        }

        render() {
            return (
                <div className="newsroom">
                    <div className="position-absolute w-100 overflow-hidden background-svg">
                        <img className="w-100" src="/assets/images/backgrounds/top_red_polygon.svg" />
                    </div>
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1 className=" page-heading">Newsroom</h1>
                                <p className="heading-content">Your go-to partner for all hosting business solutions and services
                                    that deliver value and enable solid business growth.</p>
                            </div>
                            <div className="phone-graphic col-lg-6 offset-lg-1 d-none d-lg-inline-block">
                                <img className="phone-news" src="/assets/images/vectors/phone-news.png" alt="phone-news" />
                                <div> <img src="/assets/images/vectors/shadow.png" alt="shadow" /></div>
                            </div>
                        </div>
                    </div>
               
                
                {/* CardWithImage have weird width, bad component, pls fix */}

               <div className="section">
               <div className="container">
                    <div clasname="row">
                        <div className="col display5 py-2 mt-2">
                            Latest
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-4">
                            <CardWithImage src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog3.png" title="Added 7 Cisco Blade Chassis" children="BG Unified Solutions have added 7 Cisco Blade Chassis with fully populated B230 Blades with 40 Cores CPU ..." />
                        </div>
                        <div className="col-lg-4">
                            <CardWithImage src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg" title="Successfull up gradation Mega Cisco Call Manager" children="BG Unified Solutions team have successfully upgraded its mega Cisco Call Manager cluster from version..."/>
                        </div>
                        <div className="col-lg-4">
                            <CardWithImage src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg" title="BG Unified Solutions got nominated for two awards" children="BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW in the..."/>
                        </div>
                    </div>
                </div>
               </div>
                <div className="container my-4">
                    <div clasname="row my-2">
                        <div className="col display6">
                            Popular
                        </div>
                    </div>
                    <div className="row my-2 ">
                        <div classname="col-lg-4 col-sm-2 col-12">
                            <CardWithImage action1="Action" action2="Action" title="BGUS Service Portfolio Update" children="We have added few more services in our portfolio recently. 3CXaaS - **3cx.bgunifiedsolutions.net** : Another UCaaS platform in addition to ..."/>
                        </div>
                        <div classname="col-lg-4 col-sm-2 col-12">
                            <CardWithImage action1="Action" action2="Action" title="Business Operations during COVID-19 " children="The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and..."/>
                        </div>
                        <div classname="col-lg-4 col-sm-2 col-12">
                            <CardWithImage action1="Action" action2="Action" title="Complete VDI/RDS As A Service" children="We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using... "/>
                        </div>
                    </div>
                </div> 
                </div>
            )
        }
    }
export default Newsroom