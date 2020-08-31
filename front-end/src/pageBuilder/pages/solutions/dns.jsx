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
        rowDistance: 2,
        gap: 2,
        body: [
            {
                width: [1/2],
                type: "content",
                data: [{
                    title: "For a stronger Web Identity",
                    textAlign: "left",
                    fontSize: "xl",
                    
                    text: "BG Unified Solutions give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners—while also mitigating the risk of security breaches."
                    
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

]