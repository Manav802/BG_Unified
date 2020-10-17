import InfraPricing from "../../pricing/InfraPricing";

export default [
  
    {   
        my: 0,
        pt: 0,
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
        my: 0,
        py: 16,
        bg: "light.400",
        titleStyle: {
            fontSize: "2xl",
            opacity: .7
        },
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
        body: [{
            type: "content",
            data: [{
                text: <span>Optimizing infrastructural resources is essential to 
                    controlling the cost of data growth. The Enterprise Infrastructure 
                    Assessment provides in-depth reports and recommendations for improving 
                    storage efficiency, performance, and availability. Findings linked to your 
                    specific risks and benefits—so you can scale your infra systems to serve 
                    the growing needs of your business successfully. We can address your 
                    heterogeneous data center environment and provide data and recommendations across all assets.
                </span>,
                fontSize: ["lg","xl"],
                textAlign: "center",
            }]
        }],
        pt: 0,
        pb: 0,
        mb: 0
    },
    {
        
        rowDistance: 8,
        my: 0,
        pt: 5,
        pb: 10,
        gap: 10,
        body: [
            {
            py:4,
            width: ["100%", 1/2, 1/3],
            type: "feature",
            data: {
                titleSize:"md",
                titleFont: "Nexa Bold",
                textOpacity:"0.7",
                image: "/assets/images/icons/color/ui.svg",
                title: "Scale Up On-Demand",
                align: "left",
                description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth, and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required."
                }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/agile.svg",
                    title: "Stay Agile",
                    align: "left",
                    description: "Resources are not bundled together, and there is undoubtedly no standard server size. Combine long-term subscriptions for predictable workloads and on-time delivery with regular updates."
                    }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/globe.svg",
                    title: "Enjoy Superior performance",
                    align: "left",
                    description: "Choose the most appropriate and most suitable framework to run your cloud infrastructure. Give your customers the pleasure to enjoy low latency and faster loading speeds."
                    }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/headphones.svg",
                    title: "Excellent Customer Support",
                    align: "left",
                    description: "BGUS's friendly and skilled customer support service is available24X7X365 with significantly less response time. Our policies ensure rapid and satisfactory resolution of issues."
                    }
            },    
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/api.svg",
                    title: "Migration made easy",
                    align: "left",
                    description: "Use our seamless live migration tool to get you up and running in the cloud without any modifications to your existing infrastructure."
                    }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/fix.svg",
                    title: "No Vendor lock-in",
                    align: "left",
                    description: "At BGUS's infrastructure, you can develop or deploy your application in the cloud without being forced to use any vendor-specific tools."
                    }
            },
        ]
    },
    {
        py: 16,
        bg:"light.400",
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
                title: "TBs of Memory",
                count: 900,
                suffix: "+"
            }
        },
        {
            width: 1/3,
            type: "numberCount",
            data:{
                title: "Infrastructural Components",
                count: 250,
                suffix: "+"
            }
        },    
        ]
    },
    {
        py: 0,
        body: [
            {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["lg","xl"],
                text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use, but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is rapid, adding or removing capacity is even faster and without any downtime."
            }]
        },
        {
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "The Choice between On-Premises & Cloud",
                    description: "On-premise or cloud-based, that helps secure your IT environment quickly. The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.",
                    image: "/assets/images/illustrations/Varied_Web_Hosting_Solutions.svg"
                },
                {
                    title: "Fast and easy Deployment",
                    description: "Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without Capex.",
                    image: "/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Advanced Technology Stack",
                    description: "Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy, and Advanced Logging facilities, SSL Virtual Private Network’s included.",
                    image: "/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                },]
            }
        }]
    },
]