import {Image} from "@chakra-ui/core"

export default [
    {
        type: "content",
        fontSize: "xl",
        data: [
            {
                text: "OVERVIEW",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "The primary purpose of the project was to redesign the network to achieve the following design criteria: ",
                textAlign: "justify"
            },
            {
                text: <span><b>Reduced Network Complexity</b> – Reducing network complexity and management overhead was one of the primary goals of this project.</span>,
                textAlign: "justify"
            },
            {
                text: <span><b>Security</b> – Network security and compliance were to be addressed as a key outcome.</span>,
                textAlign: "justify"
            },
            {
                text: <span><b>Reliability</b> – Providing redundancy/failover for key networking equipment.</span> ,
                textAlign: "justify"
            },
            {
                text: <span><b>Flexibility & Scalability</b> – Network architecture which lays the foundation for growth and expansion.</span>,
                textAlign: "justify"
            },
           
            {
                text: <span><b>Visibility</b> – Ease of monitoring for performance, audit and troubleshooting purposes.</span>,
                textAlign: "justify"
            },
            {
                text: <span><b>Performance</b> – Optimising network performance throughput.</span>,
                textAlign: "justify"
            },
            {
                image:<Image justifySelf="center" src="/assets/images/services/database.jpg"/>,
                imageJustify: "center"
            },
            {
                text: "SOLUTION",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "From legacy production systems support a wide technology lens and multi-vendor solutions, we did help them implement a flexible, agile architecture designed specifically to meet their unique needs.",
                textAlign: "justify"
            
            },
            {
                text: <span><b>Technologies involved</b> - Cisco ASA 5585 + ASA 5510 with AIP-SSM-10 Cisco IPS 4260 Big IP F5 3900 Cisco L3 Switches</span> ,
                textAlign: "justify"
            
            },
            {
                text: <span><b>Project Deliverables</b> were: High Availability Reduced Network Complexity Optimized Performance-Optimised Routing PCI Compliance</span>,
                textAlign: "justify"
            
            },
            {
                text: "CONCLUSION",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "Designed the whole solution to reduce the overall complexity and remove bottlenecks. We worked cohesively with our in-house team and brought great technical skills & expertise on Cisco switches, routers, firewalls, content switches, IPS etc. We ensured that the project is completed with minimum end-user impact.",
                textAlign: "justify"
            
            },
        ]
    }
]