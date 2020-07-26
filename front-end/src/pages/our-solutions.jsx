import React, { Component } from 'react';
import CardWithIcon from '../components/cards/CardWithAction';

class OurSolutions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className="position-absolute w-100 overflow-hidden back-cover">
                    <img className="w-100" src="/assets/images/backgrounds/top_red_triangle.svg" />
                </div>
                <div className="our-solutions">
                    <div className="section mt-5">
                        <div className="container p-0">
                            <div className="py-5 page-heading">
                                <span className="display3 ">Explore our solutions</span>
                            </div>
                            <div className="row">
                                <CardWithIcon/>
                                {/*Add cards here and use lorem for text for headings refer design and for icons use /assets/vectors/phone.png or contact keysang*/}
                            </div>
                        </div>
                    </div>
                </div>
           </>
        );
    }
}

export default OurSolutions;