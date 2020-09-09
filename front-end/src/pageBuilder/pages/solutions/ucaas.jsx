import UcaasPricing from "../../pricing/UcaasPricing";

export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Capture", "Live Stream", "Repurpose"],
            after: " Your Application on the Cloud"
        },
        titleStyle:{fontSize:["3xl","4xl"],px:"5px"},
        description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business. Expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint",
        descriptionStyle: {
            textAlign: "left"
        },
        rowDistance: 8,
        gap: 10,
        body: [
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
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
                width: ["95%", 1 / 2, 1 / 3],
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
                width: ["95%", 1 / 2, 1 / 3],
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
                width: ["95%", 1 / 2, 1 / 3],
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
                width: ["95%", 1 / 2, 1 / 3],
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
                width: ["95%", 1 / 2, 1 / 3],
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
        bg: "light.400",
        py: 16,
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
        py: [8,16],
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Flexibility / Scalability",
                    description: "For any of your organization departments, our UCaaS offering provides a simplified IT management and a highly scalable platform. Irrespective of the end-user, everyone gets access to the latest and the greatest collaboration tools.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Cost-Effectiveness",
                    description: "For your business, we are offering and providing a flat billing structure. It's designed for pay as you go model that shifts your costs from capex to opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off expenses into your monthly payment.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Wide range of services",
                    description: "Employees get access to voice and video, voicemail and integrated messaging, instant messaging and presence, web conferencing and desktop collaboration, mobility service.",
                    image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                },]
            }
        }]
    }
]