import SdwanPricing from "../../pricing/SdwanPricing";

export default [
    {
        title: "Find out Why?",
        description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.",
        descriptionStyle: {
            textAlign: "left"
        },
        gap: 10,
        py: 16
    },
    {
        title: "Find out How BGUS SD-WAN will improve your network:",
        gap: 10,
        py: 0,
        my: 0,
        mt: 8,
        body: [
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/globe.svg",
                    title: "Virtual Flexibility",
                    align: "left",
                    size: "50px",
                    description: "Industry’s only multi-gigabit virtual WAN optimization solution and the only products that support every major hypervisor. Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint)."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/headphones.svg",
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
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/api.svg",
                    title: "Storage Centralization",
                    align: "left",
                    size: "50px",
                    description: " Fast, Reliable and Increasingly efficient centralizing servers and storage offers significant cost, management, security and compliance benefits. Detects, isolates notifies and corrects faults encountered in the network."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/fix.svg",
                    title: "Security Guaranteed",
                    align: "left",
                    size: "50px",
                    description: "All without risk of corrupting data or altering behaviour. No plug-ins are required, which expedites deployment and saves both time and money. Fast, Reliable and Increasingly Efficient."
                }
            },
        ]
    },
    {
        containerWidth: "100%",
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <SdwanPricing />
        }]
    }
]