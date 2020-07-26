import React from 'react'
import {Image} from '@chakra-ui/core'

function features() {
    return (
        <div className="features overflow-hidden">
            <div className="container-fluid p-0 overflow-hidden position-absolute">
                    <img src="/assets/images/backgrounds/top_red_triangle.svg" className="divider-topred-with-margin w-100 layer-2" alt=""/>
            </div>
           <div className="section mt-5">
           <div className="container mt-md-5 pt-md-5 pt-3 mt-3">
                <div className="row p-3">
                    <div className="col-md-5">
                        <div className="display3">
                            Our Features
                        </div>
                        <p className="NunitoSans-SemiBold mr-1 pr-5" style={{fontsize:'20px'},{opacity:0.8}}>
                            Your go-to partner for all hosting business solutions and services that deliver value and enable solid corporate growth.
                        </p>
                        <div className="display5 mt-lg-5" style={{paddingTop:120}}>
                        <span className="badge badge-pill my-2 badge-danger">1</span> <br/>
                            Efficient Infrastructure
                        </div>
                        <p className="NunitoSans-SemiBold mt-1 pr-lg-5" style={{fontsize:'20px'},{opacity:0.8}}>
                            Infrastructure includes more than 10000 Cores CPU, 10TB RAM. The storage infrastructure includes more than 900TB of storage. Desktop virtualization, and server management.  Geographically sound, redundant, quick and efficient increasing your backup by 60%.F5 load balancing solutions ensures scaling your critical applications. Scaling up or down your storage capability as and when required.
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-6 offset-lg-1 mt-lg-5 pt-lg-0 mt-5 pt-5 d-none d-md-block">
                        <Image src="/assets/images/features/vectors/network_design.png"/>
                    </div>
                </div>
            </div> 
           </div>

            <div className="container mt-lg-5 mt-lg-5 mt-md-4 pt-md-4 pt-2 mt-2">
                <div className="row p-3 p-md-0">
                    <div className="col-md-7 pl-0 position-relative d-none d-md-block" >
                        <Image minWidth="750px" transform="translateX(-30%)" src="/assets/images/features/vectors/data_protection.png"/>
                    </div>
                    <div className="col-md-5 mt-lg-5 align-self-center">
                        <div className="display5" >
                        <span className="badge badge-pill my-2 badge-danger">2</span> <br/>
                        Secure Enterprise Connectivity
                        </div>
                        <p className="NunitoSans-SemiBold mt-1  pr-lg-5" style={{fontsize:'20px'},{opacity:0.8}}>
                            Connectivity to the highly secured infrastructure using multiple telco vendors.Improved operational efficiencies, Reduced communication related delays and enhanced collaboration. high levels of availability (HA) as well as flexibility and scalability for core business tasks.Improved clustering scenarios along with remote locations. 
                        </p>
                    </div>

                </div>
            </div> 

            <div className="container my-lg-5 py-lg-5 my-md-4 py-md-4 pt-2 mt-2">
                <div className="row no-gutters p-3">
                    <div className="col-md-5 align-self-end">
                        <div className="display5 ">
                            <span className="badge badge-pill my-2 badge-danger">3</span> <br/>
                            Multiple Data Center Locations
                        </div>
                        <p className="NunitoSans-SemiBold mt-1 pr-lg-5" style={{fontsize:'20px'},{opacity:0.8}}>
                            7 to be precise including Equinix SY3, SY4, ME1, LD3, Solarix, Auckland, Airtrunk SYD/ME and GovDC.End-to-End DC network infrastructure encompassing server switching. Server consolidation and virtualization, high availability & clustering.
                        </p>
                    </div>
                    <div className="col mt-lg-5 pt-lg-0 mt-5 pt-5 d-none d-md-block">
                        <Image minWidth="900px" transform="translateX()" src="/assets/images/features/vectors/map.svg"/>
                    </div>
                </div>
            </div> 

            <Image src="/assets/images/backgrounds/left_navy_triangle.svg" className="position-absolute left-navy-triangle d-none d-md-block" width="40%" alt="" />
            <div className="container my-lg-5 py-lg-5 my-md-4 py-md-4 pt-2 mt-2">
                <div className="row p-3 p-md-0">
                    <div className="col-md-7 pl-0 position-relative d-none d-md-block" >
                        <Image transform="translateX(-15%)" src="/assets/images/features/vectors/sip.svg"/>
                    </div>
                    <div className="col-md-5 mt-lg-5 align-self-center">
                        <div className="display5 ">
                        <span className="badge badge-pill my-2 badge-danger">4</span> <br/>
                            Upto 1600 SIP channels
                        </div>
                        <p className="NunitoSans-SemiBold mt-1  pr-lg-5" style={{fontsize:'20px'},{opacity:0.8}}>
                            15 Cisco Unified Border Elements with 1600 SIP channels spanned across multiple DC locations with DUAL Exchange Homing. Improved operational efficiencies, Reduced communication related delays and enhanced collaboration. Ensuring completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.
                        </p>
                    </div>
                </div>
            </div> 
            
            <div className="container my-lg-5 py-lg-5 my-md-4 py-md-4 pt-2 mt-2">
                <div className="row no-gutters p-3">
                    <div className="col-md-5 align-self-center">
                        <div className="display5" >
                            <span className="badge badge-pill my-2 badge-danger">5</span> <br/>
                            Data Centre Networking
                        </div>
                        <p className="NunitoSans-SemiBold mt-1 pr-lg-3" style={{fontsize:'20px'},{opacity:0.8}}>
                            End-to-End DC network infrastructure encompassing server switching, storage switching and DC Interconnect Solutions. Huawei 10G core switching offering a high speed spine and leaf network. we can help you implement a flexible, agile architecture designed specifically to meet your unique needs.next-general data centers and enable your journey to the cloud.
                        </p>
                    </div>
                    <div className="col mt-lg-5 pt-lg-0 mt-5 pt-5 d-none d-md-block">
                        <Image minWidth="700px" transform="translateX(20%)" src="/assets/images/features/vectors/end_to_end.svg"/>
                    </div>
                </div>
            </div> 

            <div className="container-fluid brands my-5 py-2">
                <div className="marquee">
                    <div className="justify-content-center text-center d-flex abc  mx-xl-5 mx-0 scroll">
                        <Image src="/assets/images/brands/aapt.png" />
                        <Image src="/assets/images/brands/advanced_life.png" />
                        <Image src="/assets/images/brands/agc_plus.png" />
                        <Image src="/assets/images/brands/blueglue.png" />
                        <Image src="/assets/images/brands/cumulus.png" />
                        <Image src="/assets/images/brands/equinix.png" />
                        <Image src="/assets/images/brands/fdba.png" />
                        <Image src="/assets/images/brands/fortinet.png" />
                        <Image src="/assets/images/brands/fujitsu.png" />
                        <Image src="/assets/images/brands/halls.png" />
                        <Image src="/assets/images/brands/huawei.png" />
                        <Image src="/assets/images/brands/hutchisonports.png" />
                        <Image src="/assets/images/brands/infin_it.png" />
                        <Image src="/assets/images/brands/sabre_pacific.png" />
                        <Image src="/assets/images/brands/straintz.png" />
                        <Image src="/assets/images/brands/veeam.png" /> 
                    </div>
                </div>
            </div>



        </div>
    )
}

export default features
