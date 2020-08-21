import React from "react";
import {
  Button,
  Collapse,
  Image,
  Select,
  Radio,
  RadioButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";

const verifyNotEmpty = (x, text) => (x > 0 ? x + " " + text : "");


function main(props) {
  const [tier, setTier] = React.useState(",Storage Tier One SSD Per TB");
    const [type, setType] = React.useState(",Single Copy");
    const [value, setValue] = React.useState(10);
    const handleChange = value => setValue(value);
  return (
    <div>
      <Head>
        <title>Storage As A Service(STaaS)</title>
      </Head>
      <div className="position-absolute w-100 overflow-hidden background-svg-dns">
        <div className="w-100 image">
          <img
            className="w-100 dns"
            src="/assets/images/backgrounds/domainhosting.jpg"
          />
        </div>
        
      </div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
              <Fade duration={700} delay={300} bottom>
                <h1 className="display3 text-white">Storage As A Service</h1>
                <h1 className="display3 text-white">(STaaS)</h1>
              </Fade>
              <Fade duration={700} delay={500} bottom>
                <p className="h6 mt-3 text-white" style={{ opacity: ".7" }}>
                  Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="section mid-margin-2">
            <div className="container mt-4">
                <div>
                    <Fade className="px-lg-5 px-3" duration={500} bottom>
                        <div className="px-4 py-5 border shadow">
                            <div className="display5 text-center">Storage Options</div>
                            <div className="row px-3 justify-content-center px-lg-4">

                                <div className="col-lg-11 mt-4">
                                    <Slider color="primary" defaultValue={10} min={1} max={200} value={value} onChange={handleChange}>
                                        <SliderTrack h="16px" borderRadius="8px" />
                                        <SliderFilledTrack h="16px" borderRadius="8px" />
                                        <SliderThumb
                                                    className="shadow-md" 
                                                    fontSize="md"
                                                    fontWeight="800"
                                                    width="auto"
                                                    padding="8px"
                                                    height="32px"
                                                    children={value} />
                                    </Slider>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Select Tier </div>
                                    <Select onChange={(e)=>{setTier(e.target.value)}} variant="outline"  > 
                                    <option value=",Storage Tier One SSD Per TB">Storage Tier One SSD Per TB</option>
                                    <option value=",Storage Tier Two Per TB">Storage Tier Two Per TB</option>
                                    <option value=",Storage Archive Only Per TB">Storage Archive Only Per TB</option>
                                    </Select>
                                </div>
                                <div className="col-lg-5 mt-4">
                                    <div className="h6">Select Type </div>
                                    <Select onChange={(e)=>{setType(e.target.value)}} variant="outline"  > 
                                    <option value=",Single Copy">Single Copy</option>
                                    <option value=",Redundant - Two Copies - Single Geo Location">Redundant - Two Copies - Single Geo Location</option>
                                    <option value=",Redundant - Three Copies - Two Geo Locations">Redundant - Three Copies - Two Geo Locations</option>
                                    </Select>
                                </div>

                                <div className="col-lg-12 mt-4 d-flex justify-content-center">
                                    <PricingQuote serviceName="Storage As A Service" serviceDescription={`${verifyNotEmpty(value,"TB Storage")} ${tier} ${type}`} button ></PricingQuote>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>

      <div className="section py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">
                Storage Made Simple.
              </div>
              <div className="h6 mt-4 text-secondary text-justify text-dark">
                Today’s dynamic data canter’s present some unique storage
                challenges. How do you best manage explosive storage capacity
                requirements and multiple storage silos—as well as consolidation
                into internal clouds to provide storage as a service? Add
                complex backup and recovery plans, and their integration into
                your disaster recovery plans, and storage becomes even more
                complex. And while there are commonalities that allow for
                pre-packaged solutions, every data centre is different. Each one
                requires knowledgeable professionals to help define the correct
                solution, often across multiple manufacturers, to combine and
                collaborate in order to create the optimal solution for your
                organization.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section py-5">
        <div className="container">
          <div className="row service-benefits">
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Low pricing
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Pay only for the storage you actually require and use,
                      bundling it up with Data Link. Transparent pricing and
                      costing schedule. Dynamic as per your needs.
                    </div>
                    <Image
                      height="300px"
                      src="/assets/images/illustrations/diversity.svg"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Efficient and Agile
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Boost up your operational efficiency and improve your
                      organization’s agility. Also, Real-time monitoring of your
                      storage resources.
                    </div>
                    <Image
                      height="300px"
                      src="/assets/images/illustrations/data_center.svg"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 px-1">
              <Fade duration={500} distance={"30%"} bottom>
                <div className="card h-100 rounded-8">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="h5 px-4 pt-4 NunitoSans-Bold text-dark">
                      Highly available infrastructure
                    </div>
                    <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                      Cutting edge SAN array which intelligently uses caching,
                      Solid State Disks(SSDs), and traditional hard disk
                      spindles. Scaling up or down your storage capacity as and
                      when required.
                    </div>
                    <Image
                      src="/assets/images/illustrations/assets.svg"
                      className="mt-auto"
                      height="250px"
                    ></Image>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Fade duration={500} distance={"30%"} bottom>
        <div className="section py-0">
            <div className="container">
                <div className="row">
                            <div className="col text-center">
                                <h1 className="display4">Why BG Unified Solutions?</h1>

                                <div className="row text-left pt-4">
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">
                                            You can rely on us to help you navigate the storage landscape. Our experienced, certified storage professionals and data centre practice team are adept at helping customers manage change and transform their data centre's to enable next-generation computing models. From assessments to design, architecture, and implementation, we can help you transform your legacy application environments to “cloud-based” data centres, which provide:
                                            Easy provisioning of computing resources to support your diverse requirements
                                            Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. 
                    </p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">The storage infrastructure includes more than 900TB of Tier1/Tier2/Tier3 storage.
                                            Our staff are trained and experienced across top storage manufacturer offerings, enabling us to design complex, multi-vendor solutions. We’ll show you how to tame explosive storage capacity growth and put management products in place to support your specific virtualized computing and storage environments.
                    </p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            </div>
            </Fade>
      <div className="section pt-0">
        <div className="container">
          <Fade duration={400} distance={"30%"} bottom>
            <div className="row">
              <div className="col-12 p-4 mb-4">
                <h4 className="display5 py-3 text-center">Related Services</h4>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/infra">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/server.svg"
                      title={
                        <div>
                          Infrastructure <br /> as a service{" "}
                        </div>
                      }
                      children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"
                    />
                  </a>
                </Link>
              </div>

              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/storage">
                  <a className="no-red">
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/cloud.svg"
                      title={
                        <div>
                          Storage <br /> as a service{" "}
                        </div>
                      }
                      iconBg="#F3A622"
                      children=" Storage Virtualization, Cutting edge SAN array, Solid State Disks(SSDs), real-time visibility, More than 900TB of Tier 1/Tier 2/Tier 3 storage."
                    />
                  </a>
                </Link>
              </div>
              <div className="col-xl-4 col-sm-6 my-2">
                <Link href="/services/dns">
                  <a className="no-red">
                    {" "}
                    <CardWithIcon
                      icon="/assets/images/icons/monotone/earth_ouline.svg"
                      title={
                        <div>
                          DNS <br /> as a service{" "}
                        </div>
                      }
                      iconBg="#5F1CE6"
                      children="Global availability with multiple data centre locations, Secure management of multi-cloud locations, Huawei 10G core switching."
                    />
                  </a>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default main;
