import WafPricing from "../../pricing/WafPricing";

export default [
    {
        mb:0,
        gap:0,
        containerWidth: "100%",
        body: [{
            width: "100%",
            type: "pricing",
            data: <WafPricing/>
        }]
    },
    {
        title:"Web Application Firewall: How it works?",
       rowDistance: 8,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/vectors/waf.svg"],
                objectFit: "contain",
                px: "15%"
            }
        }],
    },
 {
        my: 0,
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        containerWidth: ["100%", "100%", "88%", "80%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,6,4],
                width: ["100%","100%","100%",1/2, 5/12],
                type: "content",
                data: [{
                    title: "Why Choose Us?",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text: "Benefit your business from the expert knowledge of our experts who offer practical solutions. Our modular SLAs are tailored to your individual needs – so support is always flexible and transparent in terms of cost."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Dedicated Firewall"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Flexible"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/tools/swiss-knife.svg",mt: 4, title: "Robust"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Consistent"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "Minimized Liability Risk"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Modular SLAs"}
                }],
            },
        ]   
    },
    
        {
            px: 2,
            title: "BGUS' Managed Web Application Firewall",
            description: "Our Dedicated Web App Firewall uses a single code base, for you can consistently apply and enforce security policies across any environment. It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility and control with a single pane of glass.",
            descriptionStyle: {
                               fontSize:["lg","lg","xl"],
                               opacity:0.7,
                               px:"10px"     
        },
        gap: 10,
        rowDistance: 8,
        body: [
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/tags.svg",
                    title: "Breadth of offerings",
                    align: "left",
                    size: "50px",
                    description: "Offering a broad suite of security services to customers enables an MSSP to meet the needs of more current and potential customers. This potentially increases ARPU through the opportunity to upsell in specific accounts. It also enables the organization to compete for business from potential new customers that are looking for a comprehensive set of services under one umbrella."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/mobile.svg",
                    title: "Visibility",
                    align: "left",
                    size: "50px",
                    description: "Providing end-to-end visibility is an essential capability for MSSPs seeking to meet the service expectations of their target customers. In the absence of visibility, fast-moving intrusions may cause harm before a response can occur, negating all efforts to maintain an effective security posture. To deliver a value add to customers, MSSPs need to achieve end-to-end visibility across each customer’s environment and provide that visibility to them via a customer portal."
                }
            },
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/lock.svg",
                    title: "Threat intelligence and analytics",
                    align: "left",
                    size: "50px",
                    description: "In today’s advanced threat landscape, customers need real-time access to robust threat intelligence to counter attacks that move at machine speed. In addition to a customer’s own security logs, many subscribe to threat-intelligence feeds pulled from large networks of firewalls around the world, but it is a challenge to aggregate this data across a fragmented security architecture in time to deliver adequate speed of response."
                }
            },
            
            {
                py: 4,
                width: ["100%", "100%", 1 / 2],
                type: "feature2",
                data: {
                    titleFontSize: ["lg","xl"],
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/agile.svg",
                    title: "Operational efficiency",
                    align: "left",
                    size: "50px",
                    description: "Lack of integration across different security elements and architectural fragmentation increase operational inefficiencies. Without integration and automation, many security workflows must be managed manually. End-to-end integration, on the other hand, enables the MSSP to deliver broad services while optimizing staff time and budgetary resources, maximizing margins and potentially increasing ARPU."
                }
            },
            
            
        ]
    },

]
    
