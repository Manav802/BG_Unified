import React, { Component } from "react";
import Head from "next/head";
import CardWithImage from "../components/cards/CardWithImage";

import Link from "next/link";

class Newsroom extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="newsroom">
        <Head>
          <title>Newsroom - BG Unified</title>

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
                <h1 className="display3">Newsroom</h1>
                <p className="">
                  Your go-to partner for all hosting business solutions and
                  services that deliver value and enable solid business growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CardWithImage have weird width, bad component, pls fix */}

        <div className="section pt-0">
          <div className="container">
            <div clasname="row">
              <div className="col display5 py-2 mt-2">Latest</div>
            </div>
            <div className="row my-2">
              <Link href="/blogs/1-bg-unified-solutions-have-added-7-cisco-blade-chassis">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog3.png"
                    title="Added 7 Cisco Blade Chassis"
                    children="BG Unified Solutions have added 7 Cisco Blade Chassis with fully populated B230 Blades with 40 Cores CPU ..."
                  />
                </div>
              </Link>
              <Link href="/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg"
                    title="Successfull upgradation Mega Cisco Call Manager"
                    children="BG Unified Solutions team have successfully upgraded its mega Cisco Call Manager cluster from version..."
                  />
                </div>
              </Link>
              <Link href="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg"
                    title="BG Unified Solutions got nominated for two awards"
                    children="BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW in the..."
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="container my-4">
            <div clasname="row my-2">
              <div className="col display5">Popular</div>
            </div>
            <div className="row my-2 ">
              <Link href="/blogs/8-bgus-service-portfolio-update">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="/assets/images/newsroom/8. Portfolio Update.png"
                    title="BGUS Service Portfolio Update"
                    children="We have added few more services in our portfolio recently. 3CXaaS - **3cx.bgunifiedsolutions.net** : Another UCaaS platform in addition to Cisco and Avaya - which offers all..."
                  />
                </div>
              </Link>
              <Link href="/blogs/9-business-operations-during-covid-19">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="/assets/images/newsroom/coronavirus.jpg"
                    title="Business Operations during COVID-19 "
                    children="The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and..."
                  />
                </div>
              </Link>
              <Link href="/blogs/11-complete-vdi-rds-as-a-service">
                <div className="col-lg-4 my-2">
                  <CardWithImage
                    src="/assets/images/newsroom/11. Complete VDI.png"
                    title="Complete VDI/RDS As A Service"
                    children="We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using VMWARE, Parallels and Acronis Cyber... "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsroom;
