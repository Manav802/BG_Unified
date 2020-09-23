export default [
{
    
    typeWriter_title: {
            before: "",
            typed: ["Collaborative", "Automated", "Affordable"],
            after: "Help Desk Services."
        },
        gap: 10,
        py: [8,16],
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/socaas.jpg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                mt:[0,3],
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","md","md","lg"],
                text: <span>We believe that Service / Help Desk should be more than just a resource for solving problems – it should be a hotbed of innovation and discoveries. So when you outsource to BGUS, you aren’t just getting a partner who’ll provide round the clock support to users all over the world, but one who’ll strive tirelessly to improve the way they work. We provide completely customer-centric solutions, always upgrading and updating…
                </span>
            }]
        }]
    },
 {
        my: 0,
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.webp')",
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
                    title: "Aim to strengthen and enhance internal resources",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text: "Through our Sense and Respond methodology, we empower our experts to develop preventative solutions to recurring problems and, in turn, they empower users to self-serve wherever possible."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/commit.svg", mt: 4, title: "Single Point of Contact"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/clipboard-check.svg", mt: 4, title: "Expert Management"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/tools/swiss-knife.svg",mt: 4, title: "Standalone Service"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/group.svg", mt: 4, title: "Responsive, Reliable team"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Priced Per Ticket"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Rapid Service Delivery"}
                }],
            },
        ]   
    },
    {
        gap: 10,
        py: 12,
        my: 0,
        bg: "light.400",
        body: [
            {
                width: ["100%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    textOpacity: "0.8",
                    size: "96px",
                    image: "/assets/images/icons/theme/cloud-computing.svg",
                    title: "Complete Australian Support and Helpdesk Staff",
                    description: "",
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
                    title: "Location Independent Help Desk Solutions",
                    description: "",
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
                    image: "/assets/images/icons/color/pie-chart.svg",
                    title: "24X7 Highly Available Help-Desk Staff",
                    description: "",
                    align: "center",
                }
            },       
         ]
    },
{
       mt:0,
        pt:4,
        pb: 12,
        body: [
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/diversity.svg",
                    title: "BG Unified Solutions as your HelpDesk Partner",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "Your time is valuable. Consequently, qualified support crew answering the call, helps us to identify the issue at a faster rate. Responsive and reliable support services are delivered by a highly trained, Australia based team. For infrastructure, networking, security, cloud-based service, end-user or any other facet of IT support, BGUS has the capability to deliver a world-class technical support solution.Get back on track fast. You can count on our responsive, reliable team to provide cost-effective expertise on-demand !!!"
                }
            },
        ]
    }
]