import StoragePricing from "../../pricing/StoragePricing"

export default [
    {
        my:0,
        pb: 0,
        body: [{
            type: "content",
            data: [{
                textAlign: "center",
                fontSize: "22px",
                text: "Today’s dynamic data centre’s present some unique storage challenges. How do you best manage explosive storage capacity requirements and multiple storage silos—as well as consolidation into internal clouds to provide storage as a service? Add complex backup and recovery plans, and their integration into your disaster recovery plans and storage becomes even more complex. And while there are commonalities that allow for pre-packaged solutions, every data centre is different. Each one requires knowledgeable professionals to help define the correct solution, often across multiple manufacturers, to combine and collaborate in order to create the optimal solution for your organization."
            }]
        }]
    },
    {
        mt:0,
        body: [{
            type: "pricing",
            data: <StoragePricing/>
        }]
    },
    {
        title : "STaaS for your Business",
        description: "Secure, scalable, cost-effective, platform adaptive storage options customized as per your needs.",
        descriptionStyle:{
            px: 0,
            fontSize: "xl",
            opacity: 1,
            mt: 2
        },
        my: 0,
        py: 20,
        bg: "gray.200",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", box:"/assets/images/icons/library/shopping/credit-card.svg", mt: 4, title: "Pay Per Use"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", image:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Rapid Elasticity"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", image:"/assets/images/icons/library/devices/keyboard.svg",mt: 4, title: "Ubiquitous Access"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", image:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "High Asset Utilization"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", image:"/assets/images/icons/library/files/folder-cloud.svg", mt: 4, title: "Dynamic Resources"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", image:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Total Interoperibility"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", image:"/assets/images/icons/library/devices/sd-card.svg", mt: 4, title: "Multi-protocol Storage"}
        },
    ]
    },
    {
        pb: 0,
        title: "Meeting your Storage needs at Affordable Prices",
        body: [{
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