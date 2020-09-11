import VdiPricing from "../../pricing/VdiPricing";

export default [
    {
        gap: 10,
        pb: 0,
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
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
                fontSize: ["md","md","md","lg"],
                title: "Workstation for your Business",
                titleSize: [28,28,28,32],
                text: <span>Virtual Desktop Infrastructure is when virtual 
                desktops are served through on-site technology solutions. 
                A hardware stack is maintained by IT administrators and 
                usually located on-site. This is how virtual desktops have 
                traditionally been deployed. This allows IT 
                resources to be reallocated for managing virtual desktops, 
                clients, and applications.
                </span>
            }]
        }]
    },

    {
        my: 0,
        pt:0,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <VdiPricing />
        }],
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
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/sending.svg", mt: 4, title: "Secure"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/group.svg", mt: 4, title: "Virtualized"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/files/upload.svg",mt: 4, title: "Pay per Use"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/shield-user.svg", mt: 4, title: "Platform Independent"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/chat-5.svg", mt: 4, title: "Flexible"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/shopping/credit-card.svg", mt: 4, title: "Scalable"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Easy Deployment"}
        }
    ]
},
{
    description: <span>With BG Unified Solutions’ Workstation 
    As A Service, we give an organization the freedom to
     deploy virtual desktops from its own on-premises data 
     centres. In-house IT teams are responsible for deploying 
     the virtual desktops as well as purchasing, managing, 
     and upgrading the infrastructure.</span>,
    py: 12,
    rowDistance: 8,
    gap: 12,
    body: [
        {
            width: ["100%"],
            px: [6, 8, "20%"],
            type: "feature2",
            data: {
                align: "left",
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/agile.svg",
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
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/user-engagement.svg",
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
                size: "96px",
                imageWidth: "128px",
                image: "/assets/images/icons/color/stack.svg",
                title: "Virtualize both Desktops and Apps",
                description: "Flexibility and adaptability according to your requirements, if you need to get your desktop infrastructure virtualized or virtualization of applications."
            }
        },
    ]
}
]