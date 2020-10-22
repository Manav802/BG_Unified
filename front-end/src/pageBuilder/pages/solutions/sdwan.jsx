import SdwanPricing from "../../pricing/SdwanPricing";

export default [
    {
        px: 2,
        title: "Secure Connectivity with SD-WAN",
        description: "A virtual WAN architecture, allowing firms or companies to leverage any combination of services, including LTE, VoLTE, Broadband services, Wi-Fi Services, etc. to connect users to applications securely. SD-WAN transforms the way a particular network supports and interacts with enterprise applications.",
        descriptionStyle: {
            fontSize: ["xl", "lg"],
            opacity: 0.7
        }
    },
    {
        py:0,
        gap: 0, my: 0,
        bg: "light.400",
        body: [{
            width: "100%",
            type: "pricing",
            data: <SdwanPricing />
        },
        ]
    },
    {
        gap: 0, mt: "-32px",
        bg: "light.400",
        pt: 0,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/sponsors/fortinet.png"],
                height: "64px",
                objectFit: "contain",
            }
        },
        ]
    },
    {
        px: 2,
        title: "Find out How BGUS SD-WAN will improve your network:",
        description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange, and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure, and AWS.",
        descriptionStyle: {
            px: "10px",
        },
        gap: 10,
        rowDistance: 8,
        body: [
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/mobile.svg",
                    title: "Virtual Flexibility",
                    align: "left",
                    size: "50px",
                    description: "Industry’s only multi-gigabit virtual WAN optimization solution and the superior products that support every primary hypervisor. Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint)."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/tags.svg",
                    title: "Diversifying Applications",
                    align: "left",
                    size: "50px",
                    description: "Silver Peak/ Riverbed’s WAN optimization solution works on all applications, regardless of transport protocol or version. Interactive and transactional applications such as VMware VDI, and SQL."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/data-server.svg",
                    title: "Storage Centralization",
                    align: "left",
                    size: "50px",
                    description: "Fast, Reliable and Increasingly efficient centralizing servers and storage offer high cost, management, security, and compliance benefits. Detects, isolates notifies and corrects faults encountered in the network."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/lock.svg",
                    title: "Endpoint Security",
                    align: "left",
                    size: "50px",
                    description: "All without risk of corrupting data or altering behaviour. No plug-ins are required, which expedites deployment and saves both time and money. Fast, Reliable, and Increasingly Efficient."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/agile.svg",
                    title: "Flexible Consumption Models",
                    align: "left",
                    size: "50px",
                    description: "Managed SD-WAN services are available with multiple pricing and product consumption options. SD-WAN deployments and value-added services can be scoped to a customer’s needs."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/software.svg",
                    title: "Comprehensive Visibility",
                    align: "left",
                    size: "50px",
                    description: "Integrated application visibility enables threat prevention, detection, and response. Automated monitoring and reporting decreases overhead associated with regulatory compliance."
                }
            },
        ]
    },

]