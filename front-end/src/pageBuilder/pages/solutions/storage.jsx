import StoragePricing from "../../pricing/StoragePricing"

export default [
    {
        mb:0,
        title: "Get your quote now!",
        description: "Our storage infrastructure includes more than 900TB of Tier1/Tier2/Tier3 storage",
        rowDistance: 4,
        gap:0,
        containerWidth: "100%",
        body: [{
            width: "100%",
            type: "pricing",
            data: <StoragePricing/>
        }]
    },
    {
        title: "The Storage Challenge",
        py: 12,
        rowDistance: 8,
        body: [
        {
            width:["100%", "100%","100%", 1/2],
            type: "imageGroup",
            data: {
                images: ["/assets/images/services/storage_challenge.jpg"],
                borderRadius: 8,
                width : ["100%","100%",'90%'],
                height: ["300px","300px","400px"],
                objectFit: "cover"
            }
        },
        {
            width: ["100%", "100%","100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","lg"],
                text: <span>Today’s dynamic data center’s present some unique storage challenges. How do you best manage explosive storage capacity requirements and 
                    multiple storage silos—as well as consolidation into internal clouds to provide storage as a service? Add complex backup and recovery plans, 
                    and their integration into your disaster recovery plans and storage becomes even more complex. And while there are commonalities that allow for 
                    pre-packaged solutions, every data center is different. 
                    <br/><br/>
                    Each one requires knowledgeable professionals to help define the correct solution, often across multiple manufacturers, to combine and collaborate to create the optimal solution for your organization.</span>
            }]
        }]
    },
 
    {
        title : "STaaS for your Business",
        titleStyle: {
            fontSize: ["32px","40px"],
            fontWeight: "800"
        },
        description: "Secure, scalable, cost-effective, platform adaptive storage options customized as per your needs.",
        descriptionStyle:{
            px: ["5%","10%","15%","24%"],
            fontSize: ["lg","xl"],
            opacity: 1,
            mt: 2
        },
        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: [4,8,12],
        gap: 8,
        body: [
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Pay Per Use"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Rapid Elasticity"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/keyboard.svg",mt: 4, title: "Ubiquitous Access"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "High Asset Utilization"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/files/folder-cloud.svg", mt: 4, title: "Dynamic Resources"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Total Interoperibility"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/devices/sd-card.svg", mt: 4, title: "Multi-protocol Storage"}
        },
    ]
    },
    {   
        pt: 16,
        pb: 0,
        title: "Meeting your Storage needs at Affordable Prices",
        titleStyle:{fontSize:["3xl","4xl"],px:"10px"},
        body: [{
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["lg","xl"],
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
                    description: "Pay only for the storage you require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
                    image: "/assets/images/illustrations/low_pricing.svg"
                },
                {
                    title: "Efficient and Agile",
                    description: "Boost up your operational efficiency and improve your organization’s agility. Also, Real-time monitoring of your storage resources.",
                    image: "/assets/images/illustrations/EfficientAndAgile_Stass.svg"
                },
                {
                    title: "Highly available infrastructure",
                    description: "Cutting edge SAN array which intelligently uses caching, Solid State Disks(SSDs), and traditional hard disk spindles. Scaling up or down your storage capacity as and when required.",
                    image: "/assets/images/illustrations/HighlyAvailaibleInfra_Stass.svg"
                },]
            }
        }]
    },
    
 
]