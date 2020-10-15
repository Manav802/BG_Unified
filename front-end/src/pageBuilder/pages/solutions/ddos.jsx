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
                    images: ["/assets/images/services/firewall-2.jpg"],
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
                title: "Your Security Needs Meet our Expertise",
                titleSize: [28,28,28,32],
                text: <span>Distributed Denial of Service Attacks has become more hazardous and more 
                    frequent in recent times. This situation has triggered the need for DDoS protection 
                    at a tremendous rate. With the growing availability of attack tools and global 
                    botnets, BGUS tackles all your worries from a 
                    security perspective and practice to provide the best-in-class security service to 
                    your business.

                </span>
            }]
        }]
    },
    {
        title : "Get your Business Secured with our DDoS Protection",
        
        description: "BG Unified Solutions provides optimal DDoS protection as a  service with the most accurate detection and feasible solution.",

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
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/stack.svg", mt: 4, title: "Multi-Layered Protection"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/bucket.svg", mt: 4, title: "Comprehensive"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/headphones.svg",mt: 4, title: "Competent and Responsive Team"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/general/shield-check.svg", mt: 4, title: "Extremely Reliable"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/git-4.svg", mt: 4, title: "Variety of domains"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Fast mitigation"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/shopping/chart-line-1.svg", mt: 4, title: "Geographically Distributed"}
        }
    ]
},
{
    body: [{
        type: "content",
        data: [{
            text: <span>Our global DDoS mitigation network comprises centers located strategically 
                worldwide to protect Internet-facing infrastructures against all known types of 
                DDoS attacks at the network, transport, and application layers. Our DDoS filtering 
                techniques, advanced routing, and anti-DoS hardware devices remove DDoS traffic 
                close to the botnet activity source.
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