import { LightMode } from "@chakra-ui/core";
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
        title: "Build your brand online",
        description: "We have the right team to develop to turn any kind of business into an online tycoon.",
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
        title: "Our Process",
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
                my:[0,0,6,4],
                width: ["100%","100%","100%", 1/3],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/icons/color/user-engagement.svg"],
                    mx: "16%",
                }
            },
            {
                my:[0,0,6,4],
                width: ["100%","100%","100%", 2/3],
                type: "content",
                data: [{
                    title: "We build great experiences.",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text:   <>
                            <span>We not only build great websites, but we focus on how the user interacts too. And that is where new business comes. If your website is old-fashioned, or out-to-date that will throw out your customers in less than 5 seconds.</span><br/><br/>
                            <span> But we have solution to that:- A completely customized website designed strategically, regularly updated and maintained. That just converts you website into a valuable asset for your business.</span>,
                            </>    
                },
                {   
                    list: [
                        "Built for fast load times.",
                        "Functional on every device.",
                        "Easy to Update and Maitain.",
                        "Highly Optimised Content."
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
                width: ["100%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/tools/tools.svg", size:"80px", title: "Regular Website Maintainence Plans", titleSize: "md" }
            },
            {
                width: ["100%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/design/pen-tool-vector.svg", size:"80px", title: "Logo Creation & Branding Design", titleSize: "md" }
            },
            {
                width: ["100%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/general/shield-protected.svg", size:"80px", title: "Website Security & Protection Plans", titleSize: "md" }
            },
            {
                width: ["100%", 1/2, 1/3, 1/4],
                type: "feature",
                data: {svg: "/assets/images/icons/library/home/picture.svg", size:"80px", title: "Ads, Brochure, Posters and many more...", titleSize: "md" }
            },
        ],
    }
    
]