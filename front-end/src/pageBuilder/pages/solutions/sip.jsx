import SipPricing from "../../pricing/SipPricing";
export default [
    {
        title: 'Expertise to address challenges by designing and delivering complete collaboration solutions',
        titleStyle:{fontSize:["3xl","32px","4xl"],px:"10px"},
        rowDistance: 10,
        body: [
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature", px: 4,
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/theme/cloud-computing.svg",
                    title: "1600+ SIP channels",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature", px: 4,
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/library/devices/cpu-1.svg",
                    title: "Multiple Data centers",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature", px: 4,
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/color/encryption.svg",
                    title: "100% Data Security",
                    align: "center",
                }
            },
        ]
    },
    {
        my: 0,
        py: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <SipPricing />
        }],
        bg: 'light.400',
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: 8,
        py: 16,
        body: [
            {
                type: "image&text",
                data: {
                    spacing: 0,
                    image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
                    title: "Mobile access",
                    flexDirection: ["column", "column", "row"],
                    description: "Multiple data center locations allow access to your website anytime, anywhere. Improved operational efficiencies, Reduced communication-related delays and enhanced collaboration."
                }
            },
            {
                type: "image&text",
                data: {
                    spacing: 0,
                    image: "/assets/images/illustrations/PlatformDiversity_Firewall.svg",
                    title: "Our collaborative tools",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint), Interactive and transactional applications such as VMware VDI, and SQL."
                }
            },
            {
                type: "image&text",
                data: {
                    spacing: 0,
                    image: "/assets/images/illustrations/DataProtection_Wireless.svg",
                    title: "Secure Channels",
                    flexDirection: ["column", "column", "row"],
                    description: "Ensuring a completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto /Checkpoint / Fortinet Firewall, DDOS Protection."
                }
            },
        ]
    }
]