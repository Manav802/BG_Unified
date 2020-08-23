import React from "react";
import {
    Button,
    Collapse,
    Image,
    Select,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Flex,
    FormLabel,
    Switch,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import CardWithIcon from "../../components/cards/CardWithIcon";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Head from "next/head";
import Link from "next/link";
function main(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(1);
    const handleChange = (value) => setValue(value);
    const [restorePoints, setRestorePoints] = React.useState("");
    const [geoLocations, setGeoLocations] = React.useState("");
    const [hourlyBackups, setHourlyBackups] = React.useState(false);
    const handleHourlyBackups = (hourlyBackups) =>
        hourlyBackups ? ",Enabled Hourly Backups" : "";
    return (
        <div>
            <div className="position-absolute w-100 overflow-hidden background-svg-dns">
                <div className="w-100 image">
                    <img
                        className="w-100 dns"
                        src="/assets/images/backgrounds/domainhosting.jpg"
                    />
                </div>
            </div>
            <Head>
                <title>
                    Backup for your Digital system | Backup As A Service - BG
                    Unified Solutions
                </title>
            </Head>

            {/* <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 justify-content-center"></div>
            <Fade duration={700} delay={300} bottom>
              <h1 className="display3 text-white text-center">Backup As A Service (BaaS)</h1>
            </Fade>
            <Fade duration={700} delay={500} bottom>
              <p className="h6 mt-3 text-white text-center" style={{ opacity: ".7" }}>
                BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data.
                </p>
            </Fade>
          </div>
        </div>
      </div> */}

            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center justify-content-center">
                            <Fade duration={700} delay={300} bottom>
                                <h1 className="display3 text-white">
                                    Backup As A Service
                                </h1>
                                <h1 className="display3 text-white">(BaaS)</h1>
                            </Fade>
                            <Fade duration={700} delay={500} bottom>
                                <p
                                    className="h6 mt-3 text-white"
                                    style={{ opacity: ".7" }}
                                >
                                    BG Unified Solution provides reliable,
                                    secure & cost-effective managed service for
                                    backup and recovery of all types of data.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <Fade duration={500} bottom>
                        <div className="row px-lg-5 px-3">
                            <div className="col-lg-4 my-3">
                                <PricingCard
                                    title="Standard"
                                    icon="/assets/images/icons/theme/stack.svg"
                                    featureList={[
                                        "Single Copy",
                                        "Single Location",
                                        "Reliable & Secure",
                                        "Cost Effective",
                                    ]}
                                >
                                    <PricingQuote
                                        buttonStyle="mt-3"
                                        button
                                        serviceName="Backup As A Service"
                                        serviceDescription="Standard, Single Copy, Single Location"
                                    ></PricingQuote>
                                </PricingCard>
                            </div>
                            <div className="col-lg-4 my-3">
                                <PricingCard
                                    title="Corporate"
                                    icon="/assets/images/icons/theme/work.svg"
                                    featureList={[
                                        "Multiple Copies",
                                        "Single Location",
                                        "Reliable & Secure",
                                        "Cost Effective",
                                    ]}
                                >
                                    <PricingQuote
                                        buttonStyle="mt-3"
                                        button
                                        serviceName="Backup As A Service"
                                        serviceDescription="Corporate, Multiple Copies, Single Location"
                                    ></PricingQuote>
                                </PricingCard>
                            </div>
                            <div className="col-lg-4 my-3">
                                <PricingCard
                                    title="Enterprise"
                                    icon="/assets/images/icons/theme/town.svg"
                                    featureList={[
                                        "Multiple Copies",
                                        "Multiple Location",
                                        "Reliable & Secure",
                                        "Cost Effective",
                                    ]}
                                >
                                    <a href="#collapse-1" className="no-red">
                                        <Button
                                            className="mt-3"
                                            variantColor="primary"
                                            variant="outline"
                                            size="lg"
                                            onClick={openControls}
                                        >
                                            View Options
                                        </Button>
                                    </a>
                                </PricingCard>
                            </div>
                        </div>
                    </Fade>
                    <div id="collapse-1" className="collapse-target">
                        <Collapse
                            className="px-lg-5 px-3"
                            mt={12}
                            isOpen={show}
                        >
                            <div className="px-4 py-5 border">
                                <div className="display5 text-center">
                                    Customize Your Enterprise Plan
                                </div>
                                <div className="row px-3">
                                    <div className="col-lg-12 mt-4">
                                        <div className="h6">Number of Copies</div>
                                        <Slider
                                            color="primary"
                                            my="24px"
                                            min={1}
                                            max={4}
                                            defaultValue={1}
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <SliderTrack
                                                h="16px"
                                                borderRadius="8px"
                                            />
                                            <SliderFilledTrack
                                                h="16px"
                                                borderRadius="8px"
                                            />
                                            <SliderThumb
                                                className="shadow-md"
                                                fontSize="md"
                                                fontWeight="800"
                                                width="auto"
                                                padding="8px"
                                                height="32px"
                                                children={value}
                                            />
                                        </Slider>
                                    </div>
                                    <div className="col-lg-5 mt-4">
                                        <div className="h6">
                                      Number of
                                            Restore Points
                                        </div>
                                        <Select
                                            onChange={(e) =>
                                                setRestorePoints(e.target.value)
                                            }
                                            my="24px"
                                            placeholder="Select option"
                                            size="lg"
                                        >
                                            <option value=",5 Restore Points">
                                                5
                                            </option>
                                            <option value=",10 Restore Points">
                                                10
                                            </option>
                                            <option value=",15 Restore Points">
                                                15
                                            </option>
                                            <option value=",20 Restore Points">
                                                20
                                            </option>
                                            <option value=",25 Restore Points">
                                                25
                                            </option>
                                            <option value=",30 Restore Points">
                                                30
                                            </option>
                                        </Select>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 mt-4">
                                        <div className="h6">
                                            Number of Geo-Locations
                                        </div>
                                        <Select
                                            onChange={(e) =>
                                                setGeoLocations(e.target.value)
                                            }
                                            my="24px"
                                            placeholder="Select option"
                                            size="lg"
                                        >
                                            <option value=",1 Geo Location">
                                                1
                                            </option>
                                            <option value=",2 Geo Location">
                                                2
                                            </option>
                                        </Select>
                                    </div>
                                    <div className="col-lg-12 mt-3 d-flex justify-content-between">
                                        <Flex
                                            py="12px"
                                            justify="center"
                                            align="center"
                                        >
                                            <Switch
                                                onChange={(e) => {
                                                    setHourlyBackups(
                                                        e.target.checked
                                                    );
                                                }}
                                                color="primary"
                                                mb={0}
                                                id="hourly-backup"
                                            />
                                            <FormLabel
                                                mb={0}
                                                ml="12px"
                                                htmlFor="hourly-backup"
                                            >
                                                Hourly Backups
                                            </FormLabel>
                                        </Flex>
                                        <PricingQuote
                                            serviceName="Backup As A Service"
                                            serviceDescription={`${value} Copy${restorePoints}${geoLocations}${handleHourlyBackups(
                                                hourlyBackups
                                            )}`}
                                            button
                                        ></PricingQuote>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <div className="section py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-center offset-lg-1">
                            <div className="h4 NunitoSans-ExtraBold">
                                Backup for your Digital system
                            </div>
                            <div className="h6 mt-4 text-secondary text-justify text-dark">
                                In today’s dynamic and complex landscape, no one
                                can afford to be idle. Whether we like it or
                                not, data centre change is upon us. Migrating us
                                to store confidential and information data
                                somewhere else, for the worst-case scenarios.
                                And with this change comes steep challenges—to
                                migrate your legacy production application
                                environments to next-general data centres and
                                enable your journey to the cloud.
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
                                        <div className="h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark">
                                            Platform Diversity
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            On-premise or cloud-based, that
                                            helps secure your IT environment
                                            quickly. The mainstay of Enterprise
                                            Security. Blocks malicious traffic
                                            and allows legitimate traffic to
                                            flow without any hindrance.
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
                                            Fast and easy Deployment
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            Rapid evolvement, easily deployable
                                            with tremendous speed. Proven
                                            deployment methodology that
                                            integrates and extends your existing
                                            security infrastructure without
                                            capex.
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
                                            Advance Technology Stack
                                        </div>
                                        <div className="text-secondary px-4 text-justify NunitoSans-Regular">
                                            Advanced Malware Protection,
                                            Anti-Virus Detection, Uniform
                                            resource Locator Filtering,
                                            User-Based Policy and Advanced
                                            Logging facilities, SSL Virtual
                                            Private Network’s included
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
                <div className="section py-0 fdb-block section">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="display4">
                                    Why BG Unified Solutions?
                                </h1>
                                <div className="row text-left">
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">
                                            Through our dedicated Data Center
                                            Practice, we can help you choose the
                                            best path to embrace this
                                            transformation at all levels—from
                                            your base infrastructure to achieve
                                            your strategic vision and goals.
                                            We’ll create a realistic roadmap and
                                            provide continual service so you can
                                            capture the promise of tomorrow’s
                                            data centre, cloud and backup—today.
                                            BG Unified Solution provides
                                            reliable, secure & cost-effective
                                            managed service for backup and
                                            recovery of all types of data.
                                            We handle protection and management
                                            for all of your structured and
                                            unstructured data while enabling
                                            self-service restoration capability
                                            to your teams. 
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="lead text-justify">
                                            BG Unified Solutions
                                            has the deep technology skills and
                                            proven methodologies to help you
                                            leverage leading data center
                                            solutions. From legacy production
                                            systems support to a wide technology
                                            lens and multi-vendor solutions, we
                                            can help you implement a flexible,
                                            agile architecture designed
                                            specifically to meet your unique
                                            needs. We bring a broad perspective
                                            based on demonstrated experience
                                            working with many customers in
                                            varied environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade duration={400} distance={"30%"} bottom>
                <div className="section pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-4 mb-4">
                                <h4 className="display5 py-3 text-center">
                                    Related Services
                                </h4>
                            </div>
                            <div className="col-xl-4 col-sm-6 my-2">
                                <Link href="/services/infra">
                                    <a className="no-red">
                                        <CardWithIcon
                                            icon="/assets/images/icons/monotone/server.svg"
                                            title={
                                                <div>
                                                    Infrastructure <br /> as a
                                                    service{" "}
                                                </div>
                                            }
                                            children="Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-sm-6 my-2">
                                <Link href="/services/contact-center">
                                    <a className="no-red">
                                        <CardWithIcon
                                            icon="/assets/images/icons/monotone/server.svg"
                                            title={
                                                <div>
                                                    Contact Center <br /> as a
                                                    service{" "}
                                                </div>
                                            }
                                            iconBg="#0D5EA5"
                                            children="BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus."
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-sm-6 my-2">
                                <Link href="/services/ucaas">
                                    <a className="no-red">
                                        <CardWithIcon
                                            icon="/assets/images/icons/monotone/server.svg"
                                            title={
                                                <div>
                                                    UCaaS (Unified <br />{" "}
                                                    Communications)
                                                </div>
                                            }
                                            iconBg="#0D5EA5"
                                            children="Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business."
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default main;
