import WebHostingPricing from "../../pricing/WebHostingPricing";

export default [
    {   
        title : "Hosting that you want to choose",
        description: <span>Web Hosting as a Service includes 
        deploying, maintaining, managing and securing your 
        website over the world wide web with a unique domain
         name for your website. The main functionality of 
         Hosting is to make your website live to be accessed
          or viewed by users all around the globe, for them 
          to load the required resources. <br/><br/> Web Hosting as a 
          Service allows you to host the website over the web, 
          and maintain and monitor in real-time. The current 
          age is what you witness over the web, because of 
          which Web Hosting Services have gained tremendous
           fame over the past few years.</span>,
        descriptionStyle: {
            fontSize: "lg",
            px: 6,
        },
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <WebHostingPricing/>
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
                my:[0,4],
                width: ["100%","100%","100%",1/2, 5/12],
                type: "content",
                data: [{
                    title: "Delivering a scalable, reliable and well-managed authoritative Web Hosting Service.",
                    textAlign: "left",
                    fontSize: "lg",
                    titleSize: 32,
                    
                    text: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users."
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Redundant"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/thunder-circle.svg", mt: 4, title: "Low Latency"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/display-1.svg",mt: 4, title: "Monitor On-the-Go"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/user.svg", mt: 4, title: "Authoritative"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/shield-check.svg", mt: 4, title: "Daily Backups"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/shopping/chart-pie.svg", mt: 4, title: "Load Balancing"}
                }],
            },
        ]   
    },
    
    {
        pb: 0,
        title : "Why BG Unified Solutions as your Hosting Partners?",
        body: [
       
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "center",
                fontSize: "xl",
                text: "We have a ‘can-do’ attitude with an ‘easy to work with’ culture. Our values are based around fresh thinking, delivering on our promises, showing customer respect and making a 100% commitment."
            }]
        }]
    },
    {
        py: 0,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Varied Web Hosting Solutions",
                    description: "WordPress hosting, cloud hosting, dedicated server, AWS cloud, digital ocean cloud, all under one roof. Multiple data centre locations allow access to your website anytime, anywhere.",
                    image: "/assets/images/Illustrations/Varied_Web_Hosting_Solutions.svg"
                },
                {
                    title: "Sound and Efficient Planning",
                    description: "We can help you choose the best path to embrace this transformation at all levels—from your base infrastructure to achieve your strategic vision and goals. Migratory process of your website onto our platform is super easy with fast, secure and reliable hosting.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Value for Money",
                    description: "Reduced costs, pay for what you want, no hidden costs and completely transparent process. Costing and pricing discussed and negotiated at the starting of the job only.",
                    image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                },]
            }
        }]
    },
]