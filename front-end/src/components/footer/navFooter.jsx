import React from 'react';

function NavFooter()
{
return <div className="row nav-footer">
    <div className="col">
        <div className="heading">Company</div>
        <div className="d-flex flex-column justify-content-around">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Blogs</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
    <div className="col">
        <div className="heading">Services</div>
        <div className="row">
            <div className="d-flex col flex-column justify-content-around">
                <a href="#">Infrastructure</a>
                <a href="#">Platform</a>
                <a href="#">UC</a>
                <a href="#">Platform</a>
                <a href="#">Development</a>
                <a href="#">Backup</a>
            </div>
            <div className="d-flex col flex-column justify-content-around">
                <a href="#">Web Hosting</a>
                <a href="#">Wireless</a>
                <a href="#">Logging CC</a>
                <a href="#">SIP</a>
                <a href="#">Cloud EC</a>
                <a href="#">Storage</a>
            </div>
            <div className="d-flex col flex-column justify-content-around">
                <a href="#">Architecture CS</a>
                <a href="#">Contact Centers</a>
                <a href="#">DR</a>
                <a href="#">Proxy</a>
                <a href="#">SD WAN</a>
                <a href="#">DNS</a>
            </div>
        </div>
    </div>

    <div className="col">
        <div className="heading">Others</div>
        <div className="d-flex flex-column">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Blogs</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
</div>;
}

export default NavFooter;