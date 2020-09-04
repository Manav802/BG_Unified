import BackupPricing from "../../pricing/BackupPricing";
export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Deploy","Run","Manage","Maintain"],
            after: " your application on the cloud platform"
        },
        description: "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network.",
        titleStyle: {
            textAlign: "justify"
        },
        descriptionStyle: {
            textAlign: "justify"
        }
    },
    {
        gap: 10,
        py: 16,
        body: [
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/theme/cloud-computing.svg",
                    title: "Platform Oriented Cloud Platforms",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/library/devices/cpu-1.svg",
                    title: "Infinite Computing Resources",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/analytics.svg",
                    title: "Monitor on-the-go.",
                    align: "center",
                }
            },
        ]
    },
    {
        title: "Why BG Unified Solutions?",
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