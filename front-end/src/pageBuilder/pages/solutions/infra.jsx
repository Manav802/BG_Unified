import InfraPricing from "../../pricing/InfraPricing";

export default [
    {
        title: "Store your data with our security and reliability",
        description: "Optimizing infrastructural resources is essential to controlling the cost of data growth. The Enterprise Infrastructure Assessment provides in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings are linked to your specific risks and benefits—so you can scale your infra systems to successfully serve the growing needs of your business. We can address your heterogeneous data centre environment and provide data and recommendations across all assets.",
        descriptionStyle: {
            fontSize: "xl",
            px: 0
        },
        rowDistance: 8,
        gap: 10,
        body: [
            {
            width: ["100%", 1/2, 1/3],
            type: "feature",
            data: {
                image: "/assets/images/icons/color/ui.svg",
                title: "Scale Up On Demand",
                align: "left",
                description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },
            {
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Stay Agile",
                    align: "left",
                    description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },
            {
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Select from Global Locations",
                    align: "left",
                    description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },
            {
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Rely On Excellent Support",
                    align: "left",
                    description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },    
            {
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Run Your Apps Unmodified",
                    align: "left",
                    description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },
            {
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    image: "/assets/images/icons/color/ui.svg",
                    title: "Experience No Vendor Lock-In",
                    align: "left",
                    description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required"
                }
            },
        ]
    },
    {
        my: 0,
        containerWidth: "100%",
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <InfraPricing/>
        }]
    },
    {
        title: "Supported Operating System",
        pb: 16,
        pt: 0,
        my: 0,
        titleStyle: {
            fontSize: "2xl",
            opacity: .7
        },
        bg: "light.400",
        rowDistance: 8,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/os/redhat.png", "/assets/images/os/windows10.png", "/assets/images/os/windowsServer.png"],
                height: "96px",
                width: "128px",
                objectFit: "contain"
            }
        }]
    },
    {
        pb: 0,
        body: [
        {
            width: 1/3,
            type: "numberCount",
            data:{
                title: "Core CPUs",
                count: 10000,
                suffix: "+"
            }
        },
        {
            width: 1/3,
            type: "numberCount",
            data:{
                title: "Core CPUs",
                count: 10000,
                suffix: "+"
            }
        },
        {
            width: 1/3,
            type: "numberCount",
            data:{
                title: "Core CPUs",
                count: 10000,
                suffix: "+"
            }
        },    
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "xl",
                text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use when you use it but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is very quick, adding or removing capacity is even faster and without any downtime."
            }]
        }]
    },
    {
        py: 0,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Pay per Use",
                    description: "Pay only for the storage you actually require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                },
                {
                    title: "Efficient and Agile",
                    description: "Boost up your operational efficiency and improve your organization’s agility. Also, Real-time monitoring of your storage resources.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                },
                {
                    title: "Highly available infrastructure",
                    description: "Cutting edge SAN array which intelligently uses caching, Solid State Disks(SSDs), and traditional hard disk spindles. Scaling up or down your storage capacity as and when required.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                },]
            }
        }]
    },
]