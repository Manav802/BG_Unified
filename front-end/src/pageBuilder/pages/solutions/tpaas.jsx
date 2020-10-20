import TpaasPricing from "../../pricing/TpaasPricing";

export default [
    {
        gap: 10,
        py: [8,16],
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/sdaasBG.jpg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                mt:[0,3],
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","md","md","lg"],
                title: "Experience Telepresence Solutions like never before",
                titleSize: [28,28,28,32],
                text: <span>BGUS' TelePresence Services provide comprehensive
                service offerings to help enterprises prepare, plan, and
                design their networks. These services combine
                extensive engineering expertise in converged networks,
                proven networking methodologies and tools, and support to help enterprises
                realize the full benefits of the solution. 
                </span>
            }]
        }]
    },
    {
        py: [0, 4],
        gap: 0, mt: 0,
        mb:0,
        bg: "light.400",
        body: [{
            width: "100%",
            type: "pricing",
            data: <TpaasPricing/>
        },
        ]
    },
    {
        title : "Fully Managed Video Conferencing Solutions by BGUS",
        
        description: "Realize the full business value of your technology investments with smart, personalized services from BGUS and our partners. Backed by deep networking expertise and a broad ecosystem of partners, BGUS Services enable you to successfully plan, build, and run your network as a powerful business platform",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/chart-line-1.svg", mt: 4, title: "Improved Business Agility"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Flexibility Assured"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/git-4.svg",mt: 4, title: "In-Person Experience"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/headphones.svg", mt: 4, title: "Personalized Support"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/home/clock.svg", mt: 4, title: "Optimized Results"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/general/size.svg", mt: 4, title: "Scalability Guaranteed"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/home/chair-1.svg", mt: 4, title: "Easy Deployment"}
        }
    ]
},
{
    body: [{
        type: "content",
        data: [{
            text: <span>Whether you are looking
            to quickly seize new opportunities to meet rising customer
            expectations, improve operational efficiency to lower
            costs, mitigate risk, or accelerate growth, we have a service that can help you.
            </span>,
            fontSize: ["lg","lg","xl"],
            textAlign: "center",
        }]
    }],
    pt: 0,
    pb: 0,
    mb: 0
},
]