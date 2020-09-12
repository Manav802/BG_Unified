import WebDevPricing from "../../pricing/WebDevPricing";

export default [
    {
        py: 0,
        body: [{
            type: "pricing",
            data: <WebDevPricing></WebDevPricing>
        }]
    },
    {
        title: "Establish your Brand Online",
        description: "We have the right team, with expertise in thier respective domains to develop and turn any kind of business into an online giant.",
        rowDistance: 4,
        gap: 4,
        body: [
            {   
                width: [1/2,1/3,1/4],
                type: "feature",
                data: {image: "/assets/images/icons/color/monitor.svg", size:"96px", title: "E-Commerce", boxShadow: "lg",p:8, rounded:8,},                
            },
            {   
                width: [1/2,1/3,1/4],
                type: "feature",
                data: {image: "/assets/images/icons/color/speaker.svg", size:"96px", title: "Advertising", boxShadow: "lg",p:8, rounded:8,},                
            },
            {   
                width: [1/2,1/3,1/4],
                type: "feature",
                data: {image: "/assets/images/icons/color/technology-products.svg", size:"96px", title: "Products", boxShadow: "lg",p:8, rounded:8,},                
            },
            {   
                width: [1/2,1/3,1/4],
                type: "feature",
                data: {image: "/assets/images/icons/color/software.svg", size:"96px", title: "SaaS", boxShadow: "lg",p:8, rounded:8,},                
            },
        ]

    },
    {
        title: "Our Development Process",
        description: "We follow the popular UX Design Process for designing and developing interfaces.",
        rowDistance: 8,
        body: [
            {
                width: [1/2, 1/3],
                type: "feature",
                data: {svg: "/assets/images/icons/library/communication/group.svg", iconColor:"primary.500" , title: "Meet to Discover"}
            },
            {
                type: "feature",
                width: [1/2, 1/3],
                data: {svg: "/assets/images/icons/library/communication/clipboard-list.svg", iconColor:"primary.500" , title: "Plan & Sketch"}
            },
            {
                type: "feature",
                width: [1/2, 1/3],
                data: {svg: "/assets/images/icons/library/design/bezier-curve.svg", iconColor:"primary.500" , title: "Design Mockups"}
            },
            {
                type: "feature",
                width: [1/2, 1/3],
                data: {svg: "/assets/images/icons/library/code/code.svg", iconColor:"primary.500" , title: "Coding & Development"}
            },
            {
                type: "feature",
                width: [1/2, 1/3],
                data: {svg: "/assets/images/icons/library/code/done-circle.svg", iconColor:"primary.500" , title: "Quality Assurance"}
            },
            {
                type: "feature",
                width: [1/2, 1/3],
                data: {svg: "/assets/images/icons/library/general/thunder-move.svg", iconColor:"primary.500" , title: "Launch & Optimization"}
            },
        ]

    },
    {
        my: 16,
        py: "48px",
        bg: "light.400",
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,4,4],
                width: ["70%","60%","60%", 1/3],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/icons/color/user-engagement.svg"],
                    mx: "16%",
                }
            },
            {
                my:[0,0,4,4],
                width: ["100%","100%","100%", 2/3],
                type: "content",
                data: [{
                    title: "We build great experiences.",
                    fontSize: ["lg","xl"],
                    titleSize: [32,36,40,48],
                    my:[2,4,8],
                    text:   <>
                            <span>We not only build great websites, but focus on user interactivity as well. This is where new business comes. If your website is old-fashioned,or outdated, you tend to loose your customers within 5 seconds.</span><br/><br/>
                            <span> We are the solution to this problem:- A completely customized website designed strategically, regularly updated and maintained. This is how you can convert your website into a valuable asset for your business.</span>,
                            </>    
                },
                {   
                    list: [
                        "Built for fast loading speeds.",
                        "Platform Independence is a necessity.",
                        "Easy to Update, Manage and Maintain.",
                        "Highly Optimized Content."
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
    {
        title: "Some add-ons we offer...",
        rowDistance: 4,
        body: [
            {
                width: ["80%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/tools/tools.svg", size:"80px", title: "Regular Website Maintainence Plans", titleSize: "md" }
            },
            {
                width: ["80%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/design/pen-tool-vector.svg", size:"80px", title: "Logo Creation & Branding Design", titleSize: "md" }
            },
            {
                width: ["80%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/general/shield-protected.svg", size:"80px", title: "Website Security & Protection Plans", titleSize: "md" }
            },
            {
                width: ["80%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/home/picture.svg", size:"80px", title: "Ads, Brochures, Posters and much more...", titleSize: "md" }
            },
        ],
    }
    
]