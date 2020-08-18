import React, { Component } from "react";
import Header from "./Header";
import { ButtonGroup } from "@chakra-ui/core";
import "../scss/_componentsheet.scss";
import { FaDelicious } from "react-icons/fa";
import { TESTIMONIALS } from "../shared/testimonials";

//Components
import Login from "../components/auth/main";
import CardWithAction from "../components/cards/CardWithAction";
import CardWithImage from "../components/cards/CardWithImage";
import CardWithIcon from "../components/cards/CardWithIcon";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Testimonials from "../components/TestimonialCard/TestimonialCard";
import CaseStudy from "../components/case_study/CaseStudy";
//import ContactForm from '../components/contactForm/main';

// eslint-disableY

class Componentsheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "Components",
      testimonialDetails: TESTIMONIALS,
    };
  }

  renderTab = (tabName) => {
    if (tabName === "Components") {
      return (
        <div>
          <span className="diplay3">Components</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="diplay3">Image Viewer</span>
        </div>
      );
    }
  };
  setTab = (tabName) => {
    this.setState({
      tab: tabName,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="row m-0">
          <div className="component-sidebar-container">
            <div id="sideNav" className="d-flex flex-column">
              <a className="py-2 active">Image Viewer</a>
              <a className="py-2" href="#">
                Card
              </a>
              <a className="py-2" href="#">
                Image Slider
              </a>
              <a className="py-2" href="#">
                Testimonial Card
              </a>
              <a className="py-2" href="#">
                Input
              </a>
            </div>
          </div>
          <div className="col">
            <div className="container d-flex justify-content-center">
              <div className="row p-4 flex-fill m-0">
                <span className="display3 mb-3 col-12">Components</span>
                <div className="my-3 col-lg-12">
                  <span className="display6">Authenticate</span>
                  <div className="mt-2">
                    <ButtonGroup spacing={4}>
                      <Login signup={false} />
                      <span> </span>
                      <Login signup={true} />
                    </ButtonGroup>
                  </div>
                </div>
                <span className="display6 my-3 col-12">Cards</span>
                <div className="my-2 col-lg-6">
                  <CardWithIcon
                    title="Title Here"
                    icon={FaDelicious}
                    color="Blue"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste consequuntur animi dolorum eum asperiores ullam ab,
                    earum veritatis qui velit, nemo possimus hic illum eligendi
                    nisi illo expedita eius itaque.
                  </CardWithIcon>
                </div>
                <div className="my-2 col-lg-6">
                  <CardWithAction
                    title="Title Here"
                    icon={FaDelicious}
                    iconColor="Red"
                    action1="Action"
                    action2="Action"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime ea, id perferendis maiores voluptates suscipit porro,
                    omnis ipsam sunt necessitatibus culpa quas illum, distinctio
                    asperiores aspernatur. Nisi, quibusdam? Dicta, atque.
                  </CardWithAction>
                </div>
                <div className="my-2 col-lg-12">
                  <CardWithImage
                    title="Title Here"
                    src="https://images.saatchiart.com/saatchi/290681/art/341516/175820-VQKPHYVD-7.jpg"
                    action1="Action"
                    action2="Action"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Pariatur blanditiis autem minus quisquam recusandae
                    molestias, repellendus consequuntur dolorum delectus! Vel
                    officia magnam quis, inventore odio eos repellendus.
                    Ratione, dolorum dignissimos.
                  </CardWithImage>
                </div>
                <div className="my-2 py-5 col-lg-12">
                  <CaseStudy></CaseStudy>
                </div>
                <span className="display6 my-3 col-12">Image Slider</span>
                <div className="col-lg-12">
                  <ImageSlider></ImageSlider>
                </div>
                <span className="display6 my-3 mt-5 col-12">Testimonials</span>
                <div className="col-lg-12">
                  <Testimonials
                    testimonialDetails={this.state.testimonialDetails}
                  />
                </div>
                {/* <span className="display6 my-3 mt-5 col-12">Contact Form</span>
                                <div className="col-lg-12">
                                    <ContactForm/>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Componentsheet;
