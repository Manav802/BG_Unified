import SdwanPricing from "../../pricing/SdwanPricing";

export default [
    {
        px: 2,
        title: "Secure Connectivity with SD-WAN",
        description: "As distributed enterprises and small and midsize businesses (SMBs) embrace digital innovation (DI), legacy networking and security infrastructures often fail to deliver sufficient performance and protection. Software-defined wide-area networking (SD-WAN) and SD-Branch solutions can help organizations consolidate traditional infrastructure and facilitate adoption of the latest business-enabling technologies.",
        descriptionStyle: {
            fontSize: ["xl", "lg"],
            opacity: 0.7
        }
    },
    {
        py: [0, 4],
        gap: 0, mt: 0,
        bg: "light.400",
        body: [{
            width: "100%",
            type: "pricing",
            data: <SdwanPricing />
        },
        ]
    },
    {
        px: 2,
        title: "Find out How Fortinet SD-WAN will improve your network:",
        description: "Managed SD-WAN services that are powered by a fully featured, integrated solution lay the groundwork for adding SD-Branch capabilities. This gives service providers the ability to grow revenue with customers while significantly reducing additional infrastructure complexity, cost, and overall onboarding churn.",
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
                    title: "Application Awareness",
                    align: "left",
                    size: "50px",
                    description: "With applications, users, and devices varying in their level of priority. in addition to reliable connectivity. Increasing WAN bandwidth demands can carry high costs while also failing to meet the designated SLA. Intelligent application awareness capabilities with link resiliency can address this issue."
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
                    title: "Multitenant by Design",
                    align: "left",
                    size: "50px",
                    description: "Fortinet solutions are designed to be multitenant. Multiple customers managed from the same console. Offering shared, isolated SD-WAN infrastructure increases average revenue per user."
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
                    image: "/assets/images/icons/color/team.svg",
                    title: "Professional Development",
                    align: "left",
                    size: "50px",
                    description: "Fortinet offers multiple training formats for MSPs and MSSPs. This enables MSPs and MSSPs to quickly ramp and deploy SD-WAN and other value-added services like SD-Branch."
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
                    title: "Improved security",
                    align: "left",
                    size: "50px",
                    description: "A solution that integrates advanced SD-WAN networking capabilities within a next-generation firewall (NGFW) provides a foundational element for a managed SD-WAN service. This consolidation reduces risk along with CapEx and OpEx costs."
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