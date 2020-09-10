export default [
    {
        
        body: [
        {
            width:["100%", "100%", 1/2],
            type: "imageGroup",
            data: {
                images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
                borderRadius: 8,
                width: '90%',
                height: "300px",
                objectFit: "cover"
            }
        },
        {
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "lg",
                title: "Achieve Higher Business Efficiency with BG Unified Solutions",
                titleSize: 32,
                text: <span>Architectural Consultancy Services, as the name suggests, 
                is accessing the needs of the users, about their organization, and 
                providing them with the best solutions tailored according to their requirements. 
                Monitoring and measuring various aspects of the network environment 
                so that overall performance can be maintained and optimised.
                Knowing what’s best for you is the primary criteria for you to optimize 
                your resources and use them to the fullest.
                </span>
            }]
        }]
    },

    {
        my: 0,
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        containerWidth: ["100%", "100%", "88%", "72%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,4],
                width: ["100%","100%","100%",1/2, 5/12],
                type: "content",
                data: [{
                    title: "Architectural Consultancy Service - Quality Assured",
                    textAlign: "left",
                    fontSize: "lg",
                    titleSize: 36,
                    text: "The team we’ve built at BG Unified Solutions Pty Ltd has been carefully selected from subject matter experts in multiple technology domains such as Infrastructure, Security, Networking, and Voice. Augmenting these domains, our staff are specialised in infrastructure architecture, network optimisation, high availability implementation, disaster recovery planning, and unified communications"
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/tools/tools.svg", mt: 4, title: "Increase Agility"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "High Resource Utilization"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/chat-smile.svg",mt: 4, title: "Customer Centric"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Advanced Technologies"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/flag.svg", mt: 4, title: "Competitive"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/sending.svg", mt: 4, title: "Increased Business Efficiency"}
                }],
            },
        ]   
    },

    {
        title:"Why BG Unified Solutions for your Business?",
        body: [
            {
                type: "image&text",
                data: {
                    title: "Performance Optimized",
                    description: "Monitors and measures various aspects of the network environment so that overall performance can be maintained and optimised.",
                    image: "/assets/images/Illustrations/PlatformDiversity_Firewall.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Configuration Management",
                    description: "Configures network devices, performs inventory management and software management. Local end-market support services and Local language capabilities.",
                    image: "/assets/images/Illustrations/FastAndEasyDevelopment_Firewall.svg",
                    flexDirection: ["column", "column", "row-reverse"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Wide Expert Range",
                    description: "Weather System Architecture, Technology Roadmap, or optimization solutions for your business, we’ve got it all covered. Customized and tailor solutions to meet client needs",
                    image: "/assets/images/Illustrations/low_pricing.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
        ]
    }
]