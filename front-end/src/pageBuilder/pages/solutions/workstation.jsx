import VdiPricing from "../../pricing/VdiPricing";

export default [
    {
        title: "Workstation for your Business",
        description: <span>Virtual Desktop Infrastructure is when virtual 
                desktops are served through on-site technology solutions. 
                A hardware stack is maintained by IT administrators and 
                usually located on-site. This is how virtual desktops have 
                traditionally been deployed. This allows IT 
                resources to be reallocated for managing virtual desktops, 
                clients, and applications.
                </span>,
        gap: 10,
        py: [8,16],
        body: [
        {
            width: "100%",
            type: "pricing",
            data: <VdiPricing />
        }]
    },

    {
        title : "BG Unified Solution’s Workstations",
        
        description: "With full control over hardware, software, and data, this is an ideal solution for highly sensitive computing environments. This greater degree of control also lends itself well to customization ",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Secure"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/compiling.svg", mt: 4, title: "Virtualized"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/dollar.svg",mt: 4, title: "Pay per Use"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/display-2.svg", mt: 4, title: "Platform Independent"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Flexible"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/general/size.svg", mt: 4, title: "Scalable"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/home/chair-1.svg", mt: 4, title: "Easy Deployment"}
        }
    ]
},
{
    body: [{
        type: "content",
        data: [{
            text: <span>With BG Unified Solutions’ Workstation 
            As A Service, we give an organization the freedom to
             deploy virtual desktops from its own on-premises data 
             centres. In-house IT teams are responsible for deploying 
             the virtual desktops as well as purchasing, managing, 
             and upgrading the infrastructure.</span>,
            fontSize: ["lg","lg","xl"],
            textAlign: "center",
        }]
    }],
    pt: 0,
    pb: 0,
    mb: 0
},
{
    py: 5,
    body: [
        {
            width: ["100%"],
            px: [6, 8, "20%"],
            type: "feature2",
            data: {
                align: "left",
                titleFontSize:["18px","18px","20px","24px"],
                textSize:["14px","14px","16px"],
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/agile.svg",
                maxH: 200,
                spacing: 12,
                title: "Flexible migration to the cloud for Remote Desktop Services",
                description: "Optimize your experience with affordable costs for your server desktop and apps. Get all the resources, tools and infrastructure, you need to migrate your apps.",
            },
        },
        {
            width: ["100%"],
            px: [6, 8, "20%"],
            type: "feature2",
            data: {
                align: "left",
                titleFontSize:["18px","18px","20px","24px"],
                textSize:["14px","14px","16px"],
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/user-engagement.svg",
                maxH: 200,
                spacing: 12,
                title: "Estimate end-user experience quality",
                description: "Estimator used to experience or predict the quality of your end-user experience by the Virtual Desktop Infrastructure Service provided by you. Determine your bandwidth requirement and constant health checker."
            }
        },
        {
            width: ["100%"],
            px: [6, 8, "20%"],
            type: "feature2",
            data: {
                align: "left",
                titleFontSize:["18px","18px","20px","24px"],
                textSize:["14px","14px","16px"],
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/desktop.svg",
                maxH: 200,
                spacing: 12,
                title: "Virtualize both Desktops and Apps",
                description: "Flexibility and adaptability according to your requirements, if you need to get your desktop infrastructure virtualized or virtualization of applications."
            }
        },
    ]
}
]