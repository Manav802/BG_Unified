import React, { Component } from "react";
import Head from "next/head";
import CardWithIcon from "../components/cards/CardWithIcon";
import { Image, Link } from "@chakra-ui/core";

class OurSolutions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="our-solutions layer-2">
          <Head>
            <title>Our Solutions - BG Unified</title>

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
                  <h1 className="display3">Explore our solutions</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4  py-2">
                  <Link href="/services/infra">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Computing <br /> Infrastructure{" "}
                        </div>
                      }
                      iconBg="#0D5EA5"
                      children="Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management. Infrastructure includes more than 10000 Cores CPU, 10TB RAM."
                    />
                  </a>
                  </Link>
                </div>
                <div className="col-lg-4  py-2">
                  <Link href="/services/storage-unit">
                  <a  className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Storage <br /> Units{" "}
                        </div>
                      }
                      iconBg="#19C741"
                      children="Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. The storage infrastructure includes more than 900TB of Teir1/Teir2/Teir3 storage."
                    />
                  </a>
                  </Link>
                </div>
                <div className="col-lg-4  py-2">
                  <Link href="/services/dns">
                  <a  className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          DNS <br /> as a service{" "}
                        </div>
                      }
                      iconBg="#F33022"
                      children="Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users."
                    />
                  </a>
                  </Link>
                </div>
                <div className="col-lg-4  py-2">
                  <a href="/services/storage-units" className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Backup <br /> Units{" "}
                        </div>
                      }
                      iconBg="#F33022"
                      children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."
                    />
                  </a>
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Proxy <br /> Servers
                      </div>
                    }
                    iconBg="#0D5EA5"
                    children="Just redirect your traffic to our Proxy Service either by DNS or other custom solution to our public Proxy Service and then create a record to reroute your traffic to your application behind the firewall."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Cloud Platform <br /> service{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Firewall <br /> Services{" "}
                      </div>
                    }
                    iconBg="#F33022"
                    children="Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        UCaaS (Unified <br /> Communications)
                      </div>
                    }
                    iconBg="#0D5EA5"
                    children="Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Disaster Recovery <br /> Management{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms and measure robustness using failure driven tests."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Wireless <br /> Networks{" "}
                      </div>
                    }
                    iconBg="#F33022"
                    children="Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508, 2504 and Aruba controllers."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Contact Center <br /> as a service{" "}
                      </div>
                    }
                    iconBg="#0D5EA5"
                    children="BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        SIP
                        <br /> Connectivity{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="SIP As A Service Infrastructure includes more than 15 Cisco Unified Border Elements with 1600 SIP channels spanned across multiple DC locations with DUAL Exchange Homing."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        SD-WAN <br /> Optimization{" "}
                      </div>
                    }
                    iconBg="#F33022"
                    children="Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Architectural <br /> Consultancy{" "}
                      </div>
                    }
                    iconBg="#0D5EA5"
                    children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Application Development <br /> and Scalability{" "}
                      </div>
                    }
                    iconBg="#19C741"
                    children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <CardWithIcon
                    icon="/assets/images/icons/monotone/server.svg"
                    title={
                      <div>
                        Cloud Exchange <br /> Connectivity{" "}
                      </div>
                    }
                    iconBg="#F33022"
                    children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."
                  />
                </div>
                <div className="col-lg-4  py-2">
                  <a href="/services/web-hosting" className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Web Hosting <br /> Solutions{" "}
                        </div>
                      }
                      iconBg="#0D5EA5"
                      children="Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required."
                    />
                  </a>
                </div>
                <div className="col-lg-4  py-2">
                  <a href="/services/cloud-logging" className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Cloud <br /> Logging{" "}
                        </div>
                      }
                      iconBg="#19C741"
                      children="Lorem ipsum kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet dolor sit amet, consetetur sadipscing elitr."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurSolutions;
