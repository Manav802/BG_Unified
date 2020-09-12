import ContactCenterPricing from "../../pricing/ContactCenterPricing";
export default [
    {
        pb:0,
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
            type: "imageGroup",
            data: {
                images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
                borderRadius: 8,
                width: ['100%',"100%","90%"],
                height: "300px",
                objectFit: "cover"
            }
        },
        {
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "lg",
                title: "Why Contact Centre for your Business?",
                titleSize: 32,
                text: <span>Collaboration or Customer Service involves
                 so much more than voice. With a full range of video 
                 and web conferencing solutions, Unified Communications,
                  and workspace applications, the adoption of Customer 
                  Service Technology is widespread across organizations
                   and affects multiple lines of business. Positive 
                   customer experience through a suite of advanced 
                   Contact Centre Tools.</span>
            }]
        }]
    },

    {           
        width: "100%",
        containerWidth: ["100%", "540px", "720px", "960px", "1140px"],
        my: 0,
        py:[0,8,12],
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <ContactCenterPricing/>
        }]
    },

    {
        my: 0,
        py: ["24px","30px","48px"],
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
                    title: "Customers above anything - OUR MOTTO",
                    textAlign: "left",
                    fontSize: "lg",
                    titleSize: 36,
                    
                    text: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact centre tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus. We help organisations reduce their risks by offering solutions for creating, sharing and storing the information, to protect, detect and respond to external and internal incidents and threats. "
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Affordable"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Speed Efficient"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/thunder-move.svg",mt: 4, title: "Consistent"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Enhanced Productivity"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/flag.svg", mt: 4, title: "Competitive"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/settings-4.svg", mt: 4, title: "Optimized Agent Functions"}
                }],
            },
        ]   
    },

    {
        title:"Why BG Unified Solutions?",
        body: [
            {
                type: "image&text",
                data: {
                    title: "Profitable Customer Experience",
                    description: "We help organisations to develop and improve communication channels and deliver lasting customer relationships at a lower cost. Our objective is to maximize the value of information within an organization whilst minimizing the cost.",
                    image: "/assets/images/Illustrations/analytics.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Employee Productivity",
                    description: "We assist organisations in improving employee and partner collaboration to deliver greater employee productivity, improved information sharing and knowledge management",
                    image: "/assets/images/Illustrations/productivity.svg",
                    flexDirection: ["column", "column", "row-reverse"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Securing Data",
                    description: "We help organisations reduce their risks by offering solutions for creating, sharing and storing the information, to protect, detect and respond to external and internal incidents and threats.",
                    image: "/assets/images/Illustrations/security_lock_firewall.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
        ]
    }
]