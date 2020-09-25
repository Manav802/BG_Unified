import React from "react";
import Head from "next/head";
import { Heading, Image, Text, Box } from "@chakra-ui/core";
import RenderSection from "../pageBuilder/RenderSection";
import Conclusion from "../components/footer/conclusion";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
function features() {
  return (
    <div className="features overflow-hidden">
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = "Features like redundant solutions, connectivity with highly secured infrastructure with multiple telco vendors. Fast, friendly and delivery oriented web services, driven by our commitment of customer satisfaction.">
                </meta>
                <meta property="og:title" content="Our Features - BG Unified" key="title" />
                <meta property="og:description" content="Features like redundant solutions, connectivity with highly secured infrastructure with multiple telco vendors. Fast, friendly and delivery oriented web services, driven by our commitment of customer satisfaction."></meta>
        <title>Our Features - BG Unified</title>
      </Head>
      <Section position="relative" textAlign="center" bg={["gray.200", "#ffffff00"]} py={[16, 32]} my={0}>
          <Image alt="" zIndex="-100" mt="-128px" style={{mixBlendMode:"darken"}} minH="448px" width="100%" objectFit="cover" left={0} position="absolute" top={0} src="/assets/images/backgrounds/dots_circle.webp"></Image>
          <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" my={4} textTransform="uppercase">Why Choose Us</Heading>
          <Title zIndex="100" fontSize={["44px","64px"]}>Our Features</Title>
      </Section>
      <RenderSection
        py={0}
        my={0}
        body={[
          {
            width: ["100%", 1/3],
            type: "numberCount",
            data: {
              count: 1600,
              suffix: "+",
              title: "SIP Channels"
            }            
          },
          {
            width: ["100%", 1/3],
            type: "numberCount",
            data: {
              count: 10000,
              title: "Cores of CPU"
            }            
          },
          {
            width: ["100%", 1/3],
            type: "numberCount",
            data: {
              count: 900,
              suffix: "TB",
              title: "Storage"
            }            
          },
        ]}
      />
      <RenderSection
        body={[
            
            {
              type: "image&text",
              data: {
                title: "Efficient Infrastructure",
                titleStyle: {
                  size: "2xl"
                },
                descriptionStyle: {
                  fontSize: "lg",
                  fontWeight: "600",
                  opacity: .7,
                  textAlign: "left"
                },
                image: "/assets/images/features/vectors/network_design.webp",
                maxH: "400px",
                imageProps:{
                  objectFit: "contain"
                },
                description: <span>
                  Infrastructure includes more than 10000 Cores CPU, 10TB RAM. The
                  storage infrastructure includes more than 900TB of storage.
                  Desktop virtualization, and server management. Geographically
                  sound, redundant, quick and efficient increasing your backup by
                  60%.F5 load balancing solutions ensures scaling your critical
                  applications. Scaling up or down your storage capability as and
                  when required.
                </span>,
                  flexDirection: ["column", "column", "row-reverse"],
              }
          },
            {
              type: "image&text",
              data: {
                title: "Secure Enterprise Connectivity",
                titleStyle: {
                  size: "2xl"
                },
                descriptionStyle: {
                  fontSize: "lg",
                  fontWeight: "600",
                  opacity: .7,
                  textAlign: "left"
                },
                image: "/assets/images/features/vectors/data_protection.webp",
                maxH: "400px",
                description: <span>
                  Connectivity to the highly secured infrastructure using multiple
                  telco vendors.Improved operational efficiencies, Reduced
                  communication related delays and enhanced collaboration. high
                  levels of availability (HA) as well as flexibility and scalability
                  for core business tasks.Improved clustering scenarios along with
                  remote locations.
                </span>,
                  flexDirection: ["column", "column", "row"],
              }
          },
          {
            type: "image&text",
            data: {
              title: "Data center Networking",
              titleStyle: {
                size: "2xl"
              },
              descriptionStyle: {
                fontSize: "lg",
                fontWeight: "600",
                opacity: .7,
                textAlign: "left"
              },
              image: "/assets/images/features/vectors/end_to_end.svg",
              maxH: "400px",
              description: <span>
                End-to-End DC network infrastructure encompassing server
                switching, storage switching and DC Interconnect Solutions. Huawei
                10G core switching offering a high speed spine and leaf network.
                we can help you implement a flexible, agile architecture designed
                specifically to meet your unique needs.next-general data centers
                and enable your journey to the cloud.
              </span>,
                flexDirection: ["column", "column", "row-reverse"],
            }
        },
          
        ]}
      ></RenderSection>

      <Image alt=""        src="/assets/images/backgrounds/left_navy_triangle.svg"
        className="position-absolute left-navy-triangle d-none d-md-block"
        width="40%"
        alt=""
      />
      <Section my={0}>
        <div className="row px-3 p-md-0">
          <div className="col-md-7 pl-0 position-relative d-md-none">
            <Image alt=""            my={2}
            paddingX={10}
              src="/assets/images/features/vectors/sip.svg"
            />
          </div>
          <div className="col-md-7 pl-0 position-relative d-none d-md-block">
            <Image alt=""              transform="translateX(-15%)"
              src="/assets/images/features/vectors/sip.svg"
            />
          </div>
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mb={4}>
              Upto 1600 SIP Channels
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
              15 Cisco Unified Border Elements with 1600 SIP channels spanned
              across multiple DC locations with DUAL Exchange Homing. Improved
              operational efficiencies, Reduced communication related delays and
              enhanced collaboration. Ensuring completely secure network by
              technologies such as NAC(Network Access Control) using ISE,
              SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall,
              DDOS Protection.
              </Text>
          </div>
        </div>
        </Section>

        <Section my={0}>
        <div className="row p-3 p-md-0">
          <div className="col-md-7 pl-0 position-relative d-md-none">
            <Image alt=""            my={2}
            paddingX={10}
            src="/assets/images/features/vectors/map.svg"
            />
          </div>
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mt={6} mb={4}>
              Multiple Data Center Locations
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
              7 to be precise including Solarix,
              Auckland, Airtrunk SYD/ME and GovDC.End-to-End DC network
              infrastructure encompassing server switching. Server consolidation
              and virtualization, high availability & clustering.
              </Text>
          </div>
          <div className="col-md-7 pl-0 position-relative d-none d-md-block">
            <Image alt=""              px={8}
              minWidth="900px"
              transform="translateX()"
              src="/assets/images/features/vectors/map.svg"
            />
          </div>
        </div>
        </Section>

      <Conclusion></Conclusion>
    </div>
  );
}

export default features;
