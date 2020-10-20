
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
                    images: ["/assets/images/services/cdr-2.svg"],
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
                    title: "Connecting the World for Better Solving ",
                    titleSize: [28, 28, 28, 32],
                    text: <span>A call detail record (CDR) provides information about 
                        calls made over phone service. A CDR report can offer businesses 
                        exact answers about where, when, and how markets are made for
                         reporting and billing purposes. Get the insight you need into 
                         key call quality metrics, including network jitter, packet loss, 
                         and latency. Sort and filter CDRs based on-call status, call time, 
                         termination reason, phone IP, phone number, and more.

                         </span>
                }]
            }]
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
                    title: "BGUS CDR-As-A-Service",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [25,25,32],
                    my:[2,4,8],
                    text: "BG Unified Solutions' CDR As A Service extensively covers every aspect and parameter of call detail records. We bring you a comprehensive and thorough call data records that are customizable according to your needs, lets you filter logs and data as per your requirements."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/clock.svg", mt: 4, title: "Call Time"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/active-call.svg", mt: 4, title: "Call Status"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/iphone-x.svg",mt: 4, title: "Phone IP"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/spam.svg", mt: 4, title: "Termination Reason"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/clipboard-check.svg", mt: 4, title: "Featured QoS"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/clipboard-list.svg", mt: 4, title: "Customized Reports"}
                }],
            },
        ]   
    },
    {
        rowDistance: 8,
        gap: 6,
        body: [
            {
                width: ["100%","100%","100%", 2/3],
                type: "content",
                data: [{
                    title: "CDR: Diversified Applications",
                    fontSize: ["lg","xl"],
                    titleSize: [32,36,40,48],
                    my:[2,4,8],
                    text:   <>
                            <span>Call Detail Records does not cater to a single domain.
                                 In the present-day scenario, where technology and telephony prove to be the backbone of every industry, the importance of 
                                 CDRs has grown exponentially.
                                </span><br/><br/>
                            <span> Call detail records serve a valuable purpose of revenue generation for 
                                telephone service providers and are critical for law enforcement, 
                                whenever required. CDR is also used for VOIP and is a file containing 
                                all usage details such as the source of origin and destination point of the call, 
                                usage period of the IP, and the total amount charged during the billing period.
                                </span>
                            </>    
                },
                {   
                    list: [
                        "Call Metadata",
                        "Analyze calling patterns",
                        "Billable communications transmission",
                        "Identify calling trends"
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