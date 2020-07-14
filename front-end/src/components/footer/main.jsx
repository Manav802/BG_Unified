import React from 'react';
import LowerFooter from './footerLower';
import LogoArea from './logoArea';
import NavFooter from './navFooter';

function Footer() {
    return <div className="footer-container fixed-bottom">
        <div className="container-fluid upper">
            <div className="row">
                <div className="col-lg-4">
                    <LogoArea></LogoArea>
                </div>
                <div className="col-lg-8">
                    <NavFooter></NavFooter>
                </div>
            </div>
        </div>
        <div className="container-fluid lower">
                <LowerFooter></LowerFooter>
        </div>
    </div>;

}

export default Footer;