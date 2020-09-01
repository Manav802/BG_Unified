import InfraPricing from "../../pricing/InfraPricing";
import DNSPricing from "../../pricing/DNSPricing";

export default [
    {
        pb: 0,
        body: [   
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "xl",
                text: "Delivering a scalable, reliable and managed authoritative Domain Name System (DNS) As A Service. With our assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users. The main functionality of DNS is to convert domain names into IP addresses, for the web browsers to identify a website, for them to load the required resources. Domain Name System Service allows you to host the website over the web, maintain and monitor in real-time."                
            }]
        }]
    },
    {   
        title : "Our Pricing Plans",
        my: 0,
        containerWidth: "100%",
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
        bgImage: "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        blend: "overlay",
        bg: "dark.500",
        color: "white",
        rowDistance: 8,
        gap: 6,
        body: [
            {
                py:2,
                my:6,
                width: [1/2],
                type: "content",
                data: [{
                    title: "For a stronger Web Identity",
                    textAlign: "left",
                    fontSize: "xl",
                    titleSize:"32px",
                    
                    text: "BG Unified Solutions give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches. BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use Information Technology to improve their business results."
                    
                }]
            },
            {
                width : [1/2],
                type: "container",
                containerData : [{
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Scalable Solutions"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Low Latency"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg",mt: 4, title: "Authorotative"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "High Asset Utilization"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Security Ensured"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Total Interoperibility"}
                }],
            },
        ]   
    },
    
    {
        pb: 0,
        title : "Hosting with Freedom Built-In",
        body: [
       
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "center",
                fontSize: "xl",
                text: "BG Solutions has gained an excellent reputation in design and implementation of IP technology and significant experience in Domain Name System services design and implementation for a number of clients and in distributed environments and locations."
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
    {
        my:2,
        title: "Concurrent DNS Service with superior IP Technology",
        description: "Deploy easily, efficiently monitor, and transparently scale the applications tailored as per your business requirements!!",
        bgImage: "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        endingButton: {color: "dark.500"},
        endingButtontitle: "Let's get Started!",
        color: "light.500",
    }

]