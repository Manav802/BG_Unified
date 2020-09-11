export default [
    {
        title:"Web Application Firewall:How it works?",
       rowDistance: 8,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/vectors/wafaas.jpg"],
                objectFit: "contain",
                className: "wafaas-image"
            }
        }]
    },
 {
        my: 0,
        py: "48px",
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
                    title: "Why choose Us?",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text: "Benefit your business from the expert knowledge of our experts who offer effective solutions. Our modular SLAs are tailored to your individual needs – so support is always flexible and transparent in terms of cost."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Dedicated Firewall"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Flexible"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/key.svg",mt: 4, title: "Robust"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "Consistent"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/shield-check.svg", mt: 4, title: "Minimized Liability Risk"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Modular SLAs"}
                }],
            },
        ]   
    },
]