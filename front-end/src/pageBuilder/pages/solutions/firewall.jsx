import FirewallPricing from "../../pricing/FirewallPricing";
export default [
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%", 1 / 2],
                type: "imageGroup",
                data: {
                    images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
                    borderRadius: 8,
                    width: ['100%', "100%", "90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: "lg",
                    title: "Your Security Needs Meet Our Expertise",
                    titleSize: 32,
                    text: <span>We, at BG Unified Solutions, tend to offer the best in
                    class Security for your business around the globe. With our team of
                    experts, the experience we’ve gained, ensures you to provide customizable
                    security to your network, prevent any security breach, secure data
                    flowing through your network. We offer you solutions that especially
                    suit your business model, whether small, medium or large, we’ve got it covered.
                </span>
                }]
            }]
    },
    {
        title: "Firewall Technologies",
        mt: 0,
        py: 0,
        containerWidth: "100%",
        body: [
            {
                width: ["100%"],
                mt: 8,
                type: "imageGroup",
                data: {
                    images: ["/assets/images/icons/brands/mongodb.svg", "/assets/images/icons/brands/firewall.svg", "/assets/images/icons/brands/firewall__1_.svg"],
                    px: 3,
                    height: "90px",
                    objectFit: "contain",
                    maxW: ["175px", "231px", "283px"]
                },
            },
        ]
    },
    {
        title: "Protect Your Network With BG Unified Solutions",

        description: "BG Unified solutions provide you firewalls for a single location system, or a multi-homed network, as per your needs and requirements. We have On-premise or cloud-based, that helps secure your IT environment quickly.",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Smooth and Efficient Performance" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/group.svg", mt: 4, title: "Experienced Team of Experts" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/files/upload.svg", mt: 4, title: "Proven Deployment Methodology" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/shield-user.svg", mt: 4, title: "Extended Security Infrastructure" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/chat-5.svg", mt: 4, title: "Consultation and Customer Support" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Cost-Efficient Service" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Secure Data Flow" }
            }
        ]
    },
    {
        title: "Our Pricing Plans",

        width: "100%",
        containerWidth: ["100%", "540px", "720px", "960px", "1140px"],
        my: 0,
        pt: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <FirewallPricing />
        }]
    },
    {
        title: <div className="d-block d-sm-none">We Offer</div>,
        pt: 0,
        pb: 10,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Platform Diversity",
                    description: "On-premise or cloud-based, that helps secure your IT environment quickly.The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.",
                    image: "/assets/images/Illustrations/diversity.svg"
                },
                {
                    title: "Fast and Easy Deployment",
                    description: "Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without capex.",
                    image: "/assets/images/Illustrations/FastAndEasyDevelopment_Firewall.svg"
                },
                {
                    title: "Advanced Technology Stack",
                    description: "Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network included.",
                    image: "/assets/images/Illustrations/data_protection.svg"
                },]
            }
        }]
    }
]
