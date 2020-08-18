import React, { Component } from "react";
import ContactForm from "../components/contactForm/main";
import Head from "next/head";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="contact">
          <Head>
            <title>Contact us - BG Unified</title>

            <link
              rel="shortcut icon"
              href="/assets/images/icons/favicon/bg.ico"
              type="image/x-icon"
            />
          </Head>
          <div className="position-absolute w-100 overflow-hidden background-svg">
            <img
              className="w-100"
              src="/assets/images/backgrounds/dots_circle.jpg"
            />
          </div>
          <div className="page-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 offset-lg-4 text-center justify-content-center">
                  <h1 className="display3">Contact Us</h1>
                  <p className="">
                    Your go-to partner for all hosting business solutions and
                    services that deliver value and enable solid business
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row centered-content">
                <div className="col-lg-5 mb-5 contact-info">
                  <div className="row p-3">
                    <div className="col-2 p-0 phone-em">
                      <img src="/assets/images/vectors/phone.png" alt="phone" />
                    </div>
                    <div className="col-10">
                      <div>Phone no.</div>
                      <div className="display6">1300 00 BGUS</div>
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-2 p-0 mail-em">
                      <img src="/assets/images/vectors/mail.png" alt="mail" />
                    </div>
                    <div className="col-10">
                      <div>Email us</div>
                      <div className="display6">
                        info@bgunifiedsolutions.net
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
