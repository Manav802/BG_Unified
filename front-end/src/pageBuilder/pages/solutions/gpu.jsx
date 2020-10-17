import GPUPricing from "../../pricing/GPUPricing";

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
                    images: ["/assets/images/services/gpuBody.jpg"],
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
                    text: <span>You get direct access to one of the most flexible server-selection processes 
                        in the industry and seamless integration. GPU delivers extreme performance and 
                        industry-leading hybrid cloud data management capabilities. To provide customer 
                        enablement (if required), we can provide tools to detect GPUs and make them available 
                        automatically. To maximize this powerful resource's utilization, IT administrators can 
                        configure, scale, and allow fine-grained access control of GPU resources to end-users.
                     </span>
                }]
            }]
    },
    {
        py: 0,
        gap: 0,
        containerWidth:"100%",
        body: [{
            width: "100%",
            type: "pricing",
            data: <GPUPricing/>
        }],
    },
  
    {
        my: 0,
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
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
                    text: "With GPUaaS, you also get access to our AI expertise, extensive training, and technical capabilities that can jump-start your projects. Our dedicated team can assist with prescriptive guidance and design expertise. Our technical team ensures your AI applications are fully supported."
                    
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
    {
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,4,4],
                width: ["70%","60%","60%", 1/3],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/illustrations/network.svg"],
                    px: 4,
                }
            },
            {
                width: ["100%","100%","100%", 2/3],
                type: "content",
                data: [{
                    title: "GPU: Diversified Applications",
                    fontSize: ["lg","xl"],
                    titleSize: [32,36,40,48],
                    my:[2,4,8],
                    text:   <>
                            <span>Graphical Processing Unit does not cater to a single domain.
                                 In the present-day scenario, where technology proves to be the backbone of every industry, the importance of 
                                 GPUs has grown exponentially.
                                </span><br/><br/>
                            <span> From refining and mining data to analyzing it. From Scientific Researches to Health Sector.
                                 From finance to educational institutions. Graphical Processing Unit has become an essential resource for every industry.
                                </span>,
                            </>    
                },
                {   
                    list: [
                        "Healthcare Services",
                        "Big Data Analytics",
                        "Scientific Research Operations",
                        "Deep Learning and Machine Learning"
                    ],
                    spacing: 2,
                    styleType: "none",
                    icon: "check",
                    iconColor: "green.500"
                }    
            ]
            },
        ]   
    },
    
]