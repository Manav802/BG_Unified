export default [
    {
        title:"Supported data platforms",
        py: 16,
       rowDistance: 8,
        body: [
            {
                width: [1 / 3],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/custom/mongodb.svg", mt: 4, title: "MongoDB" }
            },
            {
                width: [1 / 3],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/custom/mysql.svg", mt: 4, title: "MySQL" }
            },
            {
                width: [1 / 3],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/custom/sql-database.svg", mt: 4, title: "AzureSQL" }
            }
        ]
    },
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%", 1 / 2],
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
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: "lg",
                    title: "Managed databases for your Businesses -",
                    titleSize: 32,
                    text: <span>Database-as-a-Service (DBaaS) refers to software that enables users to set up, operate and scale databases using a common set of abstractions (primitives), without having to either know or care about the exact implementations of those abstractions for the specific database. </span>
                }]
            }]
    },
    {
        title: "BG Unified Solutions providing Databases for your Enterprise Needs :-",
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
        py: 16,
        description:"We offer 24 x 7 managed database services. We’ll monitor database infrastructure, handle incidents, response to events/alarms, follow change management processes, improve overall performance and reduce vulnerabilities.",
        descriptionStyle:{
            fontSize:["lg","lg","xl"],
            opacity:0.7,
            textAlign:"left"
        }
    }
]