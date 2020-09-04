import UcaasPricing from "../../pricing/UcaasPricing";

export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Capture", "Live Stream", "Repurpose"],
            after: " Your Application on the Cloud"
        },
        description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business. Expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint",
        descriptionStyle: {
            textAlign: "justify"
        },
        gap: 10,
        py: 16
    },
    {
        my: 0,
        py: 0,
        gap: 10,
        body: [
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Voice Integration",
                    align: "left",
                    description: "Extended capability of your telephony solutions, for a better output with the same resource."
                }
            },
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/agile.svg",
                    title: "Unified Messaging",
                    align: "left",
                    description: "Different forms of media (E-Mail, SMS, video, voicemail), integrated into a single system."
                }
            },
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/globe.svg",
                    title: "Collaboration Experts",
                    align: "left",
                    description: "We offer business and technology assessments to help identify any barriers in order for your collaborative Goals to succeed."
                }
            },
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/headphones.svg",
                    title: "Backup over Cloud",
                    align: "left",
                    description: "The business keeps on running smoothly, with everything backed up on cloud, while taking measures for potential threats."
                }
            },
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/api.svg",
                    title: "Excellent Customer Support",
                    align: "left",
                    description: "BGUS's friendly and skilled customer support service is available 24X7X365 with very less response time. Our policies ensure rapid and satisfactory resolution of issues."
                }
            },
            {
                py: 4,
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/fix.svg",
                    title: "Hot Desking",
                    align: "left",
                    description: "Log onto any device on your personal system, and have your user profile, populate on that particular system."
                }
            },
        ]
    },
    {
        my: 0,
        pt: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <UcaasPricing />
        }]
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: 8,
        py: 16,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Load Balancing",
                    description: "Meet the needs of your business—today and as you grow—with innovative, flexible and scalable load balancing solutions.Platform-oriented cloud platforms.",
                    image: "/assets/images/Illustrations/Varied_Web_Hosting_Solutions.svg"
                },
                {
                    title: "Easy execution",
                    description: "Enabling clients to develop, run and manage business applications without the need to build authentic software infrastructure. Platform-oriented cloud platforms obtain a higher level of abstraction.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Cost-effective scalability",
                    description: " Scale up your project on demand by purchasing just the amount of hardware or storage you require at affordable prices. Platform as a service cloud providing you with limitless resources of computing.",
                    image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                },]
            }
        }]
    }
]