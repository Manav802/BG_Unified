import React, { Component } from 'react'
    class Newsroom extends Component {
        constructor(props) {
        super(props)

        this.state = {

        }
        }

        render() {
            return (
            <>
                <div className="newsroom-bg">
                    <div className="position-absolute w-100 overflow-hidden background-svg">
                        <img className="w-100" src="/assets/images/backgrounds/top_red_polygon.svg" />
                    </div>
                </div>
                <div className="newsroom">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1 className=" page-heading">Newsroom</h1>
                                <p className="heading-content">Your goto partner for all hosting business solutions and services
                                    that deliver value and enable solid business growth.</p>
                            </div>
                            <div className="phone-graphic col-lg-6 offset-lg-1 d-none d-lg-inline-block">
                                <img className="phone-news" src="/assets/images/vectors/phone-news.png" alt="phone-news" />
                                <div> <img src="/assets/images/vectors/shadow.png" alt="shadow" /></div>
                            </div>
                        </div>
                        <div className="page-content">
                            <div className="row centered-content">
                                {/* add cards here use card with image for content ask shubh */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
        }
    }
export default Newsroom