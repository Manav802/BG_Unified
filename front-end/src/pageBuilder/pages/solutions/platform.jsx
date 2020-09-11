export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Deploy", "Run", "Manage"],
            after: " your Application on the Cloud Platform"
        },
        titleStyle:{fontSize:["3xl","4xl"],px:"10px"},
        rowDistance: 8,
        gap: 10,
        py: [8,16],
        body: [
            {
                width: ["100%", "100%", 1 / 2],
                type: "imageGroup",
                data: {
                    images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
                    borderRadius: 8,
                    width: '90%',
                    height: "400px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "left",
                    fontSize: "xl",
                    opacity: .7,
                    text: <>
                    <span>
                        End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions.
                        Huawei 10G core switching offering a high-speed spine and leaf network.
                    </span>
                    <br/><br/>
                    <span>
                        With BG Unified Solutions Platform as a Service, we provide you with End-to-End DC network
                        infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions.
                        Huawei 10G core switching offering a high-speed spine and leaf network.
                        Scaling up your project has never been this easy. BGUS,
                        PaaS  provides you with limitless resources of computing.
                    </span>
                    </>
                }]
            }]
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
                    title: "User Oriented Cloud Platforms",
                    description: "Solutions for  diverse range of platforms, as and what suits you the most!",
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
                    title: "Infinite Computing Resources",
                    description: "Delivering all the necessary resources required at minimal time and cost!",
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
                    image: "/assets/images/icons/color/analytics.svg",
                    title: "Monitor on-the-go",
                    description: "Maintain, monitor and manage your application, anytime, anywhere!",
                    align: "center",
                }
            },
        ]
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: [4,8],
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Load Balancing",
                    description: "Meet the needs of your business—today and as you grow—with innovative, flexible and scalable load balancing solutions.Platform-oriented cloud platforms.",
                    image: "/assets/images/Illustrations/data_points.svg"
                },
                {
                    title: "Easy execution",
                    description: "Enabling clients to develop, run and manage business applications without the need to build authentic software infrastructure. Platform-oriented cloud platforms obtain a higher level of abstraction.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Cost-effective scalability",
                    description: " Scale up your project on demand by purchasing just the amount of hardware or storage you require at affordable prices. Platform as a service cloud providing you with limitless resources of computing.",
                    image: "/assets/images/Illustrations/productivity.svg"
                },]
            }
        }]
    }
]