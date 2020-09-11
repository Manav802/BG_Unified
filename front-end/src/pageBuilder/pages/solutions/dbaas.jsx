export default [
    {
        title:"Supported data platforms",
        py: 16,
       rowDistance: 8,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/vectors/wafaas.jpg"],
                height: "96px",
                width: "128px",
                objectFit: "contain"
            }
        }]
    },
    {
        title:"BG Unified Solutions providing Databases for your Enterprise Needs :-",
        description:"BG Unified Solutions Remote DBA service will manage your database infrastructure, no matter how big or small it may be. You’ll be able to focus more on your business while our experts manage your database platform 24 x 7."
    },
    {
        title: "We focus on providing you with the best with :-",
        titleStyle: {
            mt: 8,
        },
        my: 0,
        py: 16,
        bg: "light.400",
        color: "dark.500",
        rowDistance: 8,
        gap: 8,
        body: [
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Expert Consultation"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/group.svg", mt: 4, title: "Daily Monitoring Assured" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/files/upload.svg", mt: 4, title: "Backup and Install" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/shield-user.svg", mt: 4, title: "Server Patching"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/chat-5.svg", mt: 4, title: "Performance Tuning" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/shopping/credit-card.svg", mt: 4, title: "Upgrade and Migration" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Server Installation" }
            }
        ]
    },
    {
        py: 16,
        description:"We offer 24 x 7 managed database services. We’ll monitor database infrastructure, handle incidents, response to events/alarms, follow change management processes, improve overall performance and reduce vulnerabilities.",
        descriptionStyle:{
            fontSize:"lg",
            opacity:0.7
        }
    }
]