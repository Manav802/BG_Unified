import React, { Component } from 'react';
import Header from './Header'
import { ButtonGroup } from "@chakra-ui/core";
import '../scss/_componentsheet.scss'

//Components 
import Login from '../components/auth/main';
import CardWithIcon from '../components/cards/CardWithIcon'
import CardWithAction from '../components/cards/CardWithAction'
import CardWithImage from '../components/cards/CardWithImage'
import CaseStudy from '../components/case_study/CaseStudy'
import { FaBeer } from 'react-icons/fa';

// eslint-disableY

class Componentsheet extends Component {

    constructor(props){
        super(props)
        this.state = {
            tab: 'Components'
        }
    }
    
    renderTab = (tabName) => {
        if(tabName === 'Components'){
            return <div>
                <span className="diplay3">Components</span>
            </div>
        }
        else{
            return <div>
                <span className="diplay3">Image Viewer</span>
            </div>
        }
    }
    setTab = (tabName) => {
        this.setState({
            tab: tabName
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="row m-0">
                    <div className="component-sidebar-container" >
                        <div id="sideNav" className="d-flex flex-column">
                            <a className="py-2 active">Image Viewer</a>
                            <a className="py-2" href="#">Card</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container d-flex justify-content-center">
                            <div className="row flex-fill m-0">
                                <div className="col p-4 flex-column d-flex">
                                    <span className="display3 mb-3">Components</span>
                                    <div className="my-3">
                                        <span className="display6">Authenticate</span>
                                        <div className="mt-2">
                                            <ButtonGroup spacing={4}>
                                                <Login signup={false} />
                                                <span> </span>
                                                <Login signup={true}/>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <div className="my-3 row">
                                        <span className="display6 col-12">Cards</span>
                                        <div className="mt-2 col-lg-6">
                                            <CardWithIcon className="col-lg-6" icon={FaBeer} title="Title Here">
                                                Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr.
                                            </CardWithIcon>
                                        </div>
                                        <div className="mt-2 col-lg-6">
                                            <CardWithAction className="col-lg-6" icon={FaBeer} iconColor="Red" title="Title Here" action1="Action" action2="Action">
                                                Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr.
                                            </CardWithAction>
                                        </div>
                                        <div className="mt-2 col-12">
                                            <CardWithImage className="col-lg-6" src="https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148467625.jpg" title="Title Here" action1="Action" action2="Action">
                                                Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr.
                                            </CardWithImage>
                                        </div>
                                        <div className="mt-2 col-12">
                                            <CaseStudy></CaseStudy>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Componentsheet;
