import DbaaSPricing from "../../pricing/DbaasPricing"

export default [
    {
        mt:0,
        py: 0,
        containerWidth: "100%",
        body: [
            {
                type: "pricing",
                data: <DbaaSPricing></DbaaSPricing>
            },
            {
                width: ["100%"],
                mt: 8,
                type: "imageGroup",
                data: {
                    images: ["/assets/images/icons/brands/mongodb.svg", "/assets/images/icons/brands/MySQL-Logo.png", "/assets/images/icons/brands/azure_sql_server_posted.svg"],
                    px: 3,
                    height: "80px",
                    objectFit: "contain",
                    maxW:["135.5px", "175px", "231px", "283px"]
                },
            },
        ]
    },
    {
        gap: 10,
        body: [
            {
                width: ["100%", "100%", 1 / 2],
                type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/dbaas.webp"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                mt:[0,3],
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: ["md","md","md","lg"],
                    title: "Managed databases for your Businesses -",
                    titleSize: [28,28,28,32],
                    text: <span>Database-as-a-Service (DBaaS) refers to software that enables users to set up, operate and scale databases using a common set of abstractions (primitives), without having to either know or care about the exact implementations of those abstractions for the specific database. </span>
                }]
            }]
    },
    {
        title: "BG Unified Solutions providing Databases for your Enterprise Needs:-",
        titleStyle: {
            mt: 8,
        },
        description:"BG Unified Solutions Remote DBA service will manage your database infrastructure, no matter how big or small it may be. You’ll be able to focus more on your business while our experts manage your database platform 24 x 7.",
        my: 0,
        py: 16,
        bg: "light.400",
        color: "dark.500",
        rowDistance: 8,
        gap: 8,
        descriptionStyle:{
            fontSize:["lg","lg","xl"]
        },
        body: [
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/devices/headphones.svg", mt: 4, title: "Expert Consultation"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/devices/display-1.svg", mt: 4, title: "Daily Monitoring Assured" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/files/downloaded-file.svg", mt: 4, title: "Backup and Install" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/devices/server.svg", mt: 4, title: "Server Patching"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/tools/tools.svg", mt: 4, title: "Performance Tuning" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/shift.svg", mt: 4, title: "Upgrade and Migration" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/files/downloads-folder.svg", mt: 4, title: "Server Installation" }
            }
        ]
    },
    {
        py: [8,12],
        description:"We offer 24 x 7 managed database services. We’ll monitor database infrastructure, handle incidents, respond to events/alarms, follow change management processes, improve overall performance and reduce vulnerabilities.",
        descriptionStyle:{
            fontSize:["lg","lg","xl"],
            opacity:0.7,
            textAlign:"left"
        }
    }
]