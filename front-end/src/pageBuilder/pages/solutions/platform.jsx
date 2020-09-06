import BackupPricing from "../../pricing/BackupPricing";
export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Deploy","Run","Manage"],
            after: " your Application on the Cloud Platform"
        },
     description: "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network." ,
        descriptionStyle: {
            textAlign: "center"
        },
        rowDistance: 8,
        gap: 10,
        py: 16,
        body: [
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/theme/cloud-computing.svg",
                    title: "User Oriented Cloud Platforms",
                    description: "Solutions for  diverse range of platforms, as and what suits you the most!",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/library/devices/cpu-1.svg",
                    title: "Infinite Computing Resources",
                    description: "Delivering all the necessary resources required at minimal time and cost!",
                    align: "center",
                }
            },
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/color/analytics.svg",
                    title: "Monitor on-the-go",
                    description: "Maintain, monitor and manage your application, anytime, anywhere!",
                    align: "center",
                }
            },
        ]
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: 8,
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