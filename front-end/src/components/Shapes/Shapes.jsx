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
        const Icon = this.state.icon.filter(ico => ico.id === this.props.iconnumber).map((iconVar) => {
            return(
                <div key={iconVar.id} className="icon">
                    <img src={iconVar.image} alt="bruh" />
                    {console.log(iconVar)}
                </div>
            );
        });

        const IconBG = this.state.iconbg.filter(icobg => icobg.id === this.props.backgroundnumber).map((iconBgVar) => {
            return(
                <div key={iconBgVar.id} className="icon-bg">
                    <img src={iconBgVar.image} alt="bruh" />
                    {console.log(iconBgVar)}
                </div>
            );
        });

        return ( 
            <div className="shape-component">
                {console.log(this.state.icon)}
                {console.log(this.state.iconbg)}
                
                {IconBG}
                {Icon}
            </div>
         );
    }
}
 
export default Shapes;