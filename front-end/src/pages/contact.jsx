import React, { Component } from 'react'
import ContactForm from '../components/contactForm/main'
class Contact extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }
    
    render(){
        return (
            <>
            <div className="contact-bg">
                <div className="position-absolute w-100 overflow-hidden background-svg">
                    <img className="w-100" src="/assets/images/backgrounds/top_red_polygon.svg" />
                </div>
            </div>
            <div className="contact">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1 className=" page-heading">Contact Us</h1>
                            <p className="heading-content">Your goto partner for all hosting business solutions and services that deliver value and enable solid business growth.</p>
                        </div>
                        <div className="message-graphics col-lg-6 offset-lg-1 d-none d-lg-inline-block">
                            <img src="/assets/images/vectors/messages.png" alt="messaging" width="95%"/>
                            <img className="small-shadow" src="/assets/images/vectors/shadow.png" alt="shadow"/>
                            <img className="large-shadow" src="/assets/images/vectors/shadow.png" alt="shadow" />
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="row centered-content">
                        <div className="col-lg-5 contact-info">
                            <div className="row">
                                <div className="col-2 phone-em"><img src="/assets/images/vectors/phone.png" alt="phone" /></div>
                                <div className="col-10">
                                    <div>Phone no.</div>
                                    <div className="display6">1300 00 BGUS</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 mail-em"><img src="/assets/images/vectors/mail.png" alt="mail" /></div>
                                <div className="col-10">
                                    <div>Email us</div>
                                    <div className="display6">info@bgunifiedsolutions.net</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1"><ContactForm/></div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Contact
    