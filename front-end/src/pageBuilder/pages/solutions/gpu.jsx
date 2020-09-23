export default [
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%", 1 / 2],
                py: [2, 6, 6, 6, 2],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/services/backup-2.webp"],
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
                    fontSize: ["md", "md", "md", "lg"],
                    title: "Harness the power of GPU",
                    titleSize: [28, 28, 28, 32],
                    text: <span>You get direct access to one of the most flexible 
                    server-selection processes in the industry, and seamless integration. 
                    This delivers extreme performance and industry-leading hybrid cloud 
                    data management capabilities. To provide customer enablement (if required) 
                    we can provide tools to automatically detect GPUs and make them available. 
                    In order to maximize utilization of this powerful resource IT administrators
                     can configure, scale and allow fine-grained access control of GPU resources 
                     to end users.                    
                     </span>
                }]
            }]
    },
    {
        title : "GPU - Diversifying Applications",
        titleStyle: {
            fontSize: ["32px","40px"],
            fontWeight: "800"
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
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/general/search.svg", mt: 4, title: "Scientific Research"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Big Data Analytics"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/dollar.svg",mt: 4, title: "Financial Services"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/git-3.svg", mt: 4, title: "Machine Learning"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/cmd.svg", mt: 4, title: "Deep Learning"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "Healthcare Services"}
        },
    ]
    },
    {
        my: 0,
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.webp')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        containerWidth: ["100%", "100%", "88%", "72%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,6,4],
                width: ["100%","100%","100%",1/2, 5/12],
                type: "content",
                data: [{
                    title: "BGUS GPU-As-A-Service",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [25,25,32],
                    my:[2,4,8],
                    text: "With GPUaaS, you also get access to our AI expertise, extensive training and technical capabilities that can jump-start your projects. Our dedicated team can assist with prescriptive guidance and design expertise. Our technical team ensures your AI applications are fully supported."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/sending.svg", mt: 4, title: "Rapid Workspeed"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/clock.svg", mt: 4, title: "High Availability"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/flower-2.svg",mt: 4, title: "Varied Usage"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/air-ballon.svg", mt: 4, title: "Seamless"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/duplicate.svg", mt: 4, title: "Hybrid Management"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Maximum Utilization"}
                }],
            },
        ]   
    },
]