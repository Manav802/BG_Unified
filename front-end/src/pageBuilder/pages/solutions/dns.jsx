import InfraPricing from "../../pricing/InfraPricing";
import DNSPricing from "../../pricing/DNSPricing";

export default [
    {   
        title : "Hosting with Freedom Built-In",
        
        description: <span>Delivering a scalable, reliable and managed authoritative Domain Name System (DNS) As A Service. With our assured low latency and high availability, 
            it is a cost-effective way to make your applications and services available to your users. <br/><br/>The main functionality of DNS is to convert domain names into IP addresses, 
            for the web browsers to identify a website, 
            for them to load the required resources. Domain Name System Service allows you to host the website over the web, maintain and monitor in real-time.</span>,
        descriptionStyle: {
            fontSize: "lg",
            px: 6,
        },
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <DNSPricing/>
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
                    title: "For a stronger Web Identity",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text: "BG Unified Solutions give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches. "
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Scalable Solutions"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Low Latency"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/key.svg",mt: 4, title: "Authorotative"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "High Asset Utilization"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/shield-check.svg", mt: 4, title: "Security Ensured"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Total Interoperibility"}
                }],
            },
        ]   
    },
    
    {
        pb: 0,
        title : "Why BG Unified Solutions?",
        body: [
       
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "center",
                fontSize: "xl",
                text: "BG Solutions has gained an excellent reputation in design and implementation of IP technology and significant experience in Domain Name System services design and implementation for a number of clients and in distributed environments and locations. BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use Information Technology to improve their business results."
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
                    title: "Scalability",
                    description: "Hierarchical nature of  DNS, making it scalable. Allows every organization to manage its authoritative and operational data effectively, even with increased resources. Maintaining compatibility as DNS servers clients run on different hardware, different operating systems.",
                    image: "/assets/images/Illustrations/Varied_Web_Hosting_Solutions.svg"
                },
                {
                    title: "Reliability",
                    description: "The user or the end host need not dive into the technicality about root or TLD servers. Only need to know the basics of the functioning. Eliminating vulnerabilities like cache poisoning, to reach a satisfactory level of security, making our DNS service extremely reliable",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Concurrency",
                    description: "Allows and handles multiple requests simultaneously and manages data by distributing over a large number of hosts. Detects, isolates notifies and corrects faults encountered in the network.",
                    image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                },]
            }
        }]
    },
]