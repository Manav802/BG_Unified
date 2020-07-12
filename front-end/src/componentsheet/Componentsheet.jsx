import React, { Component } from 'react';
import Header from './Header'
import { ButtonGroup } from "@chakra-ui/core";
import '../scss/_componentsheet.scss'

//Components 
import Login from '../components/auth/main';

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
                            <a className="py-2" href="#">Image Slider</a>
                            <a className="py-2" href="#">Testimonial Card</a>
                            <a className="py-2" href="#">Input</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container d-flex justify-content-center">
                            <div className="row flex-fill m-0">
                                <div className="col-lg-8 offset-2 p-4 flex-column d-flex">
                                    <span className="display3 mb-3">Components</span>
                                    <div className="my-3">
                                        <span className="display6">Authenticate</span>
                                        <div className="mt-2">
                                            <ButtonGroup spacing={4}>
                                                <Login signup={false} />
                                                <Login signup={true}/>
                                            </ButtonGroup>
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
