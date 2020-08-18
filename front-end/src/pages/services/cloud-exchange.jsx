import React from "react";
import { Button } from "@chakra-ui/core";
import Head from "next/head";
function main(props) {
  return (
    <div>
      <Head>
        <title>Cloud Exchange Connectivity As A Service(CXaaS)</title>

        <link
          rel="shortcut icon"
          href="/assets/images/icons/favicon/bg.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="section pb-0 bg-dark">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt-5 text-center py-5">
                <div className="display2 text-white">
                  Cloud Exchange Connectivity As A Service(CXaaS)
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/dividers/divider_red_bottom.svg"
          style={{ height: "239px", objectFit: "cover" }}
          className="w-100 image-flip"
          alt=""
        />
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center offset-lg-1">
              <div className="h4 NunitoSans-ExtraBold">
                Express Routes to office 365, AWS, Azure{" "}
              </div>
            </div>
            <div className="h6 mt-4 text-secondary text-dark">
              Advanced Solution providing private seamless, and on-demand
              connections to many clouds as well as networks.
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 p-5">
              <img
                src="/assets/images/Illustrations/Services/Firewall/diversity.svg"
                alt=""
                className="max-height2"
              />
            </div>
            <div className="col-lg-7 d-flex align-items-center px-5">
              <div>
                <div className="h5 NunitoSans-Bold text-dark">
                  Reliable and Secure
                </div>
                <p className="text-secondary mt-3">
                  Complete security on our end, while connecting to these cloud
                  platforms. Improve the experience of users throughout the
                  extended enterprise providing significant benefits and
                  reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-lg-row-reverse row mt-5 mt-lg-0">
            <div className="col-lg-5 p-5">
              <img
                src="/assets/images/Illustrations/Services/Firewall/diversity.svg"
                alt=""
                className="max-height2"
              />
            </div>
            <div className="col-lg-7 d-flex align-items-center px-5">
              <div>
                <div className="h5 NunitoSans-Bold text-dark">Scalable</div>
                <p className="text-secondary mt-3">
                  Traffic increased or decreased is handled with no difficulty
                  at all. Avoiding vendor lock-in and meeting data-sovereignty
                  requirements. Geo-redundant for improved performance.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 mt-lg-0">
            <div className="col-lg-5 p-5">
              <img
                src="/assets/images/Illustrations/Services/Firewall/diversity.svg"
                alt=""
                className="max-height2"
              />
            </div>
            <div className="col-lg-7 d-flex align-items-center px-5">
              <div>
                <div className="h5 NunitoSans-Bold text-dark">Integration</div>
                <p className="text-secondary mt-3">
                  {" "}
                  Simplified usage and integration of new technology services.
                  On-demand communication and connectivity. Multi-cloud
                  operations with a complex structure handled easily.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="h2 NunitoSans-ExtraBold col-12 text-center">
              Ready to try out our <br className="d-none d-md-block" /> Cloud
              Exchange Services?
            </div>
            <div className="h6 col-12 mt-2 text-secondary text-center">
              BGUS Cloud exchanging Services are affordable and dynamically
              priced.
            </div>
            <div className="col-12 mt-4 d-flex justify-content-center">
              <Button variantColor="primary" size="md">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section"></div>
    </div>
  );
}

export default main;
