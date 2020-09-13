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
                    images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
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
                title: "Load Balancing Solutions for your Application Servers",
                titleSize: [28,28,28,32],
                text: <span>Load balancing is the most scalable 
                methodology for handling the multitude of requests
                 from modern multi-application, multi-device workflows.
                  When traffic is running at normal levels, global 
                  (geographic) load balancers direct traffic to 
                  dedicated optimized application servers.Rapidly 
                  redirect traffic from a data centre suffering from 
                  an outage to an available server. </span>
            }]
        }]
    },
    {
        title : "Manage your Traffic with Our Load Balancers",
        
        description: "BG Unified Solutions provide F5 topology for your Load Balancing needs, in order to manage traffic asserted on your servers and applications. ",

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
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/chart-line-1.svg", mt: 4, title: "High Availability"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Flexibility Assured"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/git-4.svg",mt: 4, title: "Multiple Features"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/headphones.svg", mt: 4, title: "Personalized Support"}
        },
        {
            width: [1/2, 1/3, 1/4],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/home/clock.svg", mt: 4, title: "Designed for Uptime"}
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
            text: <span>High traffic sites need the resources to 
            serve large amounts of unique visitors in a fast and 
            efficient way. In order to scale to meet those needs,
             a number of web servers, commonly known as a farm, 
             need to be implemented and a method to route traffic
              across them in a balanced way.</span>,
            fontSize: ["lg","lg","xl"],
            textAlign: "center",
        }]
    }],
    pt: 0,
    pb: 0,
    mb: 0
},
]