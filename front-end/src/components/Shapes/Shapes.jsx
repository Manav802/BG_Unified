import React, { Component } from 'react';
import { Box, Image, Avatar, AvatarBadge } from "@chakra-ui/core";
import { ICONSBACKGROUND } from './iconsbackground';
import { ICONS } from './icons';

class Shapes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            icon: ICONS,
            iconbg: ICONSBACKGROUND
         }
    }

    render() {
        //import the shapes in your component like "import Shapes from '../components/Shapes/Shapes'"
        //iconnumber is to be passed as props - it defines what icon and background to put. 
        // here's an example "<Shapes iconnumber = {1} backgroundnumber = {1}/>"
        const Icon = this.state.icon.filter(ico => ico.id === this.props.iconnumber).map((iconVar) => {
            return(
                <div key={iconVar.id} className="icon responsive">
                    <img src={iconVar.image} alt="icon image" />
                    {console.log(iconVar)}
                </div>
            );
        });

        const IconBG = this.state.iconbg.filter(icobg => icobg.id === this.props.backgroundnumber).map((iconBgVar) => {
            return(
                <div key={iconBgVar.id} className="icon-bg responsive">
                    <img src={iconBgVar.image} alt="icon background image" />
                    {console.log(iconBgVar)}
                </div>
            );
        });

        return ( 
            <div className="shape-component container-fluid">
                <div className="row col-1">
                    {IconBG}
                    {Icon}
                </div>
            </div>
         );
    }
}
 
export default Shapes;