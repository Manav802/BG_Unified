export const CASESTUDY = [
    {
        id: 1,
        title: "Network Infrastructure Redesign",
        content: "The primary purpose of the project is to redesign the network to achieve the following design criteria: ",
        list_item_1: "Reduced Network Complexity – Reducing network complexity and management overhead is one of the primary goals of this project.",
        list_item_2: "Security – Network security and compliance will be addressed as a key outcome. ",
        list_item_3: "Reliability – Provide redundancy/failover for key networking equipment.",
        list_item_4: "Flexibility & Scalability – Network architecture which lays the foundation for growth and expansion.",
        list_item_5: "Visibility – Ease of monitoring for performance, audit and troubleshooting purposes.",
        list_item_6: "Performance – Optimising network performance throughput.",
        content: "From legacy production systems support to a wide technology lens and multi-vendor solutions, we did help them implement a flexible, agile architecture designed specifically to meet their unique needs. Technologies involved - Cisco ASA 5585 + ASA 5510 with AIP-SSM-10 Cisco IPS 4260 Big IP F5 3900 Cisco L3 Switches Project Deliverables were: High Availability Reduced Network Complexity Optimized Performance-Optimised Routing PCI Compliance Designed the whole solution to reduce the overall complexity and remove bottlenecks. We worked cohesively with our in-house team and brought great technical skills & expertise on Cisco switches, routers, firewalls, content switches, IPS etc.",
        iconImg: "",
        imglg: ""
    },
    {
        id: 2,
        title: "Data Centre Design and Implementation",
        content: "A client had a requirement to consolidate a distributed environment into a single highly available data centre. Analysis into the current-state highlighted over 50 geographically dispersed sites hosting 250+ separate pieces of infrastructure. A dual-site, dual-core Data Centre model was developed to provide a highly available central repository for this infrastructure with security overlay providing defined zones for controlled and internet-facing services. Some 24x7 workloads were protected by the deployment of self-healing network topologies and highly available virtualized infrastructure.",
        content_p6: "Optimizing storage resources was essential to controlling the cost of data growth. The Enterprise Storage Assessment provided in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings were linked to their specific risks and benefits—so that they can scale their storage systems to successfully serve the growing needs of their business. And while there are commonalities that allow for pre-packaged solutions, every data centre is different.",
        content_p7: "Our experienced, certified storage professionals and data centre practice team are adept and helped customers manage change and transform their data centre's to enable next-generation computing models.",
        content_p8: "Major technologies used:",
        list_item_1: "PaloAlto 5060 in multiple layers",
        list_item_2: "Huawei 10G switches",
        list_item_3: "Cisco 5508 WLC",
        list_item_4: "F5 Viprion LTM(s)",
        iconImg: "",
        imglg: ""
    },
    {
        id: 3,
        title: "BG Unified Solutions hosted UC Solution :",
        content: "Currently hosted in NEXTDC and EQUINIX, consisting of 18 UCS Server, C Series & B Series in the farm. Each UCS Server is running ESX version 5.5 with updated VMWARE tools. The solution is protected by three layers of firewalls and any traffic coming in & out of the DC being scanned by a different firewall and IPS technologies including Cisco ASA with SourceFire, Palo Alto and Cisco ASA with IPS. The core of the network exists on a pair of Nexus 93128TX Switches with a high speed Nimble or NetApp Storage. In addition, BGUS hosted solution is offering a hosted Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, so as to support Wireless Phones in any of the client’s environments.",
        content_p4: "The WAN Edge Devices are running in Active/Standby mode and are usually Cisco 2921 Routers. The primary internet-facing device is a Cisco ASA with SourceFire and is configured to provide connectivity to remote workers. All traffic destined for any part of the UC Solution has to traverse through three different layers of firewalls and all traffic activity is being logged using SPLUNK.",
        content_p5: "An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data centre, SRST will still be able to provide basic inbound and outbound calling facilities. This option is not included in the proposal costs but can be quoted if required.",
        content_p6: "Any of the networking infrastructure currently deployed in production, have a cold standby in stock with BG Unified Solutions and its supplier.",
        iconImg: "",
        imglg: ""
    },
    {
        id: 4,
        title: "F5 Topology Redesign",
        content: "F5 Configuration was redesigned and implemented in a recommended way. A lot of IRULES/POOLS defined to achieve the desired configuration requirements. Health Monitors were rewritten to provide the best monitor for the servers in different pools. The project involved the integration of Big IPs to the newly implemented DC. Design a Load Balancing topology for web servers running multiple instances of TOMCAT. A couple of applications are SSL based and others are Non-SSL based. Implementation of advanced features of F5 including Application Monitoring, Intrusion Prevention, Application Inspection and dynamically powering on the VMs based on the load or other criteria’s. F5 load balancing solutions employ F5 iApps that helped them deploy 10x to 100x faster with 95 per cent fewer configuration mistakes. The F5 application-centric view allowed to set up customized network services with ease. And by managing application services rather than the individual networking components and configurations, we could dramatically speed deployment, lower operational expenses, and streamline IT operations. F5 application-centric load balancing solutions ensured that our customers and partners have access to the applications they need—whenever they need them—by monitoring the health and performance of individual servers in real-time. Implementation of PCI Compliance and configuration of ASM to protect applications from different attacks.",
        content: "F5 Configuration was redesigned and implemented in a recommended way. A lot of IRULES/POOLS defined to achieve the desired configuration requirements. Health Monitors were rewritten to provide the best monitor for the servers in different pools. The project involved the integration of Big IPs to the newly implemented DC. Design a Load Balancing topology for web servers running multiple instances of TOMCAT. A couple of applications are SSL based and others are Non-SSL based. Implementation of advanced features of F5 including Application Monitoring, Intrusion Prevention, Application Inspection and dynamically powering on the VMs based on the load or other criteria.",
        content_p4: "F5 load balancing solutions employ F5 iApps that help them deploy 10x to 100x faster with 95 per cent fewer configuration mistakes.",
        content_p5: "The F5 application-centric view allowed us to set up customized network services with ease. And by managing application services rather than the individual networking components and configurations, we could dramatically speed deployment, lower operational expenses, and streamline IT operations.",
        content_p6: "F5 application-centric load balancing solutions ensured that our customers and partners have access to the applications they need—whenever they need them—by monitoring the health and performance of individual servers in real-time.",
        content_p7: "Implementation of PCI Compliance and configuration of ASM to protect applications from different attacks.",
        iconImg: "",
        imglg: ""
    }
]