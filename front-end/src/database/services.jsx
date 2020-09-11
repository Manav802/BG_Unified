import sections from '../pageBuilder/pages/solutions/index'

const services = {
    "appdev": {
        title: "Application Development As A Service",
        slogan: "Developing Your Needs",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Development Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#ED1C24",
        tags: ["application", "app", "dev", "development", "scalability", "platform", "independence", "client", "flexibility"],
        description: "BG Unified Solutions provides services in the area of Web, Mobile and Enterprise Application Development. Our team of technical and functional experts can help you in new Application Development, Modernizing and Supporting existing applications.",
        illustration: "",
        relatedService: ["Cloud Logging As A Service", "Storage As A Service", "Infrastructure As A Service"],
        conclusion: "User-interactivity, responsiveness, user-friendly interfaces kept into consideration.",
        sections: sections.appdev
    },

    "architectural-consultancy": {
        title: "Architectural Consultancy As A Service",
        slogan: "Spirit of Expertise",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solution has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings, define future state architecture. Whatever be the technology stack(s) that your enterprise has adopted, we can help you future-proof it.",
        illustration: "",
        relatedService: ["Contact Center As A Service", "SIP As A Service", "DR As A Service"],
        conclusion: "Achieve Higher Business Efficiency through increased agility, cost containment and lowered risk.",
        sections: sections.architecture
    },
    "backup": {
        title: "Backup As A Service",
        slogan: "Backup for your Digital System",
        category: "IT Infrastructural Services",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        icon: "/assets/images/icons/monotone/BackupAsAService.svg",
        color: "#0267C1",
        tags: ["backup"],
        description: "BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data. We handle protection and management for all of your structured and unstructured data, while enabling self-service restoration capability to your teams.",
        illustration: "",
        relatedService: ["Firewall As A Service", "Infrastructure As A Service", "Web Hosting As A Service"],
        conclusion: "Customizable Data Protection for your Business",
        sections: sections.backup
    },
    "cex": {
        title: "CEX As A Service",
        slogan: "The Cloud Service at its Best",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#F1D302",
        tags: ["cloud", "exchange", "connectivity", "express routes", "office 365", "AWS", "azure"],
        description: "Express Routes to office 365, AWS, Azure. Advanced Solution provides private, seamless, and on-demand connections to many clouds as well as networks. ",
        illustration: "",
        relatedService: ["Cloud Logging As A Service", "Proxy As A Service", "SIP As A Service"],
        conclusion: "Proactively manages your service components to adhere to quality standards",
        sections: sections.cex
    },
    "logging": {
        title: "Cloud Logging As A Service",
        slogan: "Cloud Computing is the new future",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#020100",
        tags: ["cloud", "logging", "log", "threats", "log management", "troubleshooting"],
        description: "Log central services over the internet. Collect, Store, and report the various data and underlying threats. Add the shield to protect your business reputation.",
        illustration: "",
        relatedService: ["Backup As A Service", "Firewall As A Service", "Infrastructure As A Service"],
        conclusion: "Add the shield to protect your business reputation",
        sections: sections.logging
    },
    "contact-center": {
        title: "Contact Center As A Service",
        slogan: "Service Truly Different.",
        bgImage: "",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#6A041D",
        tags: ["customer", "Support", "CSaaS", "Customer Experience", "Productivity", "Securing", "Data"],
        description: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus",
        illustration: "",
        relatedService: ["Architectural Consultancy As A Service", "Application Development As A Service", "Unified Communications As A Service"],
        conclusion: "We help organizations who are looking for an IT Partner who is known for speed, quality and consistency of service for distributed and complex environments.",
        sections: sections.callcenter
    },
    "dbaas": {
        title: "Database As A Service",
        slogan: "Professional Remote Database Solutions",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility and control with a single pane of glass.",
        illustration: "",
        relatedService: ["SIP As A Service", "DNS As A Service", "DR As A Service"],
        conclusion: "Professional, FLexible and Reliable Database Services for your Business.",
        sections: sections.dbaas
    },
    "dns": {
        title: "DNS As A Service",
        slogan: "For a stronger web identity",
        category: "Network Services",
        bgImage: "",
        icon: "/assets/images/icons/monotone/DNSasAService.svg",
        color: "#06BCC1",
        tags: ["dns", "DNS", "domain", "name", "cost", "effective", "Concurrency", "Scalability", "TLD servers"],
        description: "Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users.",
        illustration: "",
        relatedService: ["Web Hosting As A Service", "Cloud Logging As A Service", "Infrastructure As A Service"],
        conclusion: "Try our Concurrent DNS Service with superior IP Technology.",
        sections: sections.dns
    },
    "dr": {
        title: "DR As A Service",
        slogan: "Tackle stagnancy better",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#3B3561",
        tags: ["Disaster", "Recovery", "Management", "Deployment", "Flexible", "Non-Disruptive"],
        description: "Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms and measure robustness using failure driven tests.",
        illustration: "",
        relatedService: ["Cloud Logging As A Service", "Platform As A Service", "Infrastructure As A Service"],
        conclusion: "Detects, isolates, notifies and corrects faults encountered in the network",
        sections: sections.dr
    },
    "firewall": {
        title: "Firewall As A Service",
        slogan: "Redefining Security Needs",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#6A0136",
        tags: ["Firewall", "Security", "protection"],
        description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Contact Center As A Service", "Backup As A Service"],
        conclusion: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA.",
        sections: sections.firewall
    },
    "infra": {
        title: "Infrastructure As A Service",
        slogan: "Store your data with our Security and Reliability.",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/InfrastructureIcon.svg",
        color: "#51CB20",
        tags: ["computing", "infrastructure", "asset", "utilization", "server", "consolidation", "virtualization", "Geographical Redundant Storage"],
        description: "Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management. Infrastructure includes more than 10000 Cores CPU, 10TB RAM.",
        illustration: "",
        relatedService: ["Storage As A Service", "DNS As A Service", "DR As A Service"],
        conclusion: "We can help if you have questions regarding Infrastructure As A Service",
        sections: sections.infra
    },
    "loadBalancer":{
        title: "Load Balancer As A Service",
        slogan: "Simplified Load Balancing",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solution has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings, define future state architecture. Whatever be the technology stack(s) that your enterprise has adopted, we can help you future-proof it.",
        illustration: "",
        relatedService: ["Cloud Logging As A Service", "SIP As A Service", "DR As A Service"],
        conclusion: "Load Balancing is the solution you’ve been looking for.",
        sections: sections.loadBalancer
    },
    "workstation":{
        title: "Workstation As A Service",
        slogan: "Digitize your Workspace",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solution has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings, define future state architecture. Whatever be the technology stack(s) that your enterprise has adopted, we can help you future-proof it.",
        illustration: "",
        relatedService: ["Cloud Logging As A Service", "SIP As A Service", "DR As A Service"],
        conclusion: "An ideal solution for highly sensitive computing environments.",
        sections: sections.workstation
    },
    "platform": {
        title: "Platform As A Service",
        slogan: "Diversified Expertise",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#F76F8E",
        tags: ["cloud", "platform", "service", "infrastructure", "DC Interconnect"],
        description: "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network.",
        illustration: "",
        relatedService: ["Backup As A Service", "Infrastructure As A Service", "Storage As A Service"],
        conclusion: "We give you the power to easily deploy, efficiently monitor, and scale the applications.",
        sections: sections.platform
    },
    "proxy": {
        title: "Proxy As A Service",
        slogan: "Our Proxy, Your Way!!",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/Proxy.svg",
        color: "#451F55",
        tags: ["proxy", "servers", "low-latency", "services"],
        description: "Just redirect your traffic to our Proxy Service either by DNS or other custom solution to our public Proxy Service and then create a record to reroute your traffic to your application behind the firewall.",
        illustration: "",
        relatedService: ["Firewall As A Service", "DNS As A Service", "SD-WAN As A Service"],
        conclusion: "Enhanced proxy service by isolating the private network from the web",
        sections: sections.proxy
    },
    "sd-wan": {
        title: "SD-WAN As A Service",
        slogan: "Simple Solutions for Complex Connections!!",
        documentHeading: "Best SD-WAN Optimization",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SD-Wan.svg",
        color: "#3B0086",
        tags: ["SD-WAN", "sd wan", "Optimization", " VMware VDI"],
        description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.",
        illustration: "",
        relatedService: ["Proxy As A Service", "DNS As A Service", "SIP As A Service"],
        conclusion: "SD-WAN transforms the way a network supports and interacts with enterprise applications.",
        sections: sections.sdwan
    },
    "sip": {
        title: "SIP As A Service",
        slogan: "High Performance Delivered",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SIP.svg",
        color: "#290628",
        tags: ["SIP", "Connectivity", "Service Infrastructure", "cisco unified"],
        description: "SIP As A Service Infrastructure includes more than 15 Cisco Unified Border Elements with 1600 SIP channels spanned across multiple DC locations with DUAL Exchange Homing.",
        illustration: "",
        relatedService: ["SD-WAN As A Service", "DNS As A Service", "Firewall As A Service"],
        conclusion: "Our Infrastructure includes more than 15 Cisco Unified border Elements with 1600 SIP channels.",
        sections: sections.sip
    },
    "storage": {
        title: "Storage As A Service",
        slogan: "Storage Made Simple.",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/StorageAsAServiceIcon.svg",
        color: "#0091AD",
        tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
        description: "Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. The storage infrastructure includes more than 900TB of Teir1/Teir2/Teir3 storage.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "DNS As A Service", "Backup As A Service"],
        conclusion: "Ready to get Storage?",
        sections: sections.storage
    },
    "socaas": {
        title: "Security Operations Centre As A Service",
        slogan: "Cyber Security Experts",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/StorageAsAServiceIcon.svg",
        color: "#0091AD",
        tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
        description: "Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. The storage infrastructure includes more than 900TB of Teir1/Teir2/Teir3 storage.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "DNS As A Service", "Backup As A Service"],
        conclusion: "Win the battle against Cyber Threats with our SOCaaS",
        sections: sections.socaas
    },
    "ucaas": {
        title: "Unified Communications As A Service",
        slogan: "Professional Communication at your fingertips",
        bgImage: "",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/UCAsAService.svg",
        color: "#B2ABF2",
        tags: ["UCaaS", "unified", "communications", "cisco", "avaya", "unity", "collaboration", "telepresence", "workforce", "optimisation"],
        description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business.",
        illustration: "",
        relatedService: ["Contact Center As A Service", "Infrastructure As A Service", "SIP As A Service"],
        conclusion: "Once we determine your key business drivers and needs, we tailor a solution with best-in-class products and technologies from top manufacturers with expert service and support.",
        sections: sections.ucaas
    },
    "hosting": {
        title: "Web Hosting As A Service",
        slogan: "Trendsetting Web Hosting Solutions",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/WebHosting.svg",
        color: "#06D6A0",
        tags: ["web", "hosting", "host", "web server", "APACHE", "website"],
        description: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required.",
        illustration: "",
        relatedService: ["Storage As A Service", "Cloud Logging As A Service", "Backup As A Service"],
        conclusion: "Web Hosting services design and implementation in distributed environments.",
        sections: sections.hosting
    },
    "wafaas": {
        title: "Web Application Firewall As A Service",
        slogan: "Robust Security with a Dedicated Web App Firewall",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility and control with a single pane of glass.",
        illustration: "",
        relatedService: ["SIP As A Service", "DNS As A Service", "DR As A Service"],
        conclusion: "Protect your web applications and use a web application firewall. Contact us and let our experts help you!",
        sections: sections.wafaas
    },
    "webdev": {
        title: "Web Development As A Service",
        slogan: "Design that speeds up performance",
        bgImage: "",
        category: "Development Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        tags: ["webdev", "web", "design", "development", "reactjs"],
        description: "Get your website ready with high speed performance, and attractive motion + visual design.",
        illustration: "",
        relatedService: ["Application Development As A Service", "Storage As A Service", "DNS As A Service"],
        conclusion: "Ready to discuss your project?",
        sections: sections.webdev
    },
    "wireless": {
        title: "Wireless As A Service",
        slogan: "Wireless Technology Made Simple",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508, 2504 and Aruba controllers.",
        illustration: "",
        relatedService: ["SIP As A Service", "DNS As A Service", "DR As A Service"],
        conclusion: "Let us make your campus wireless for you!!",
        sections: sections.wireless
    },
 
  
}

export default services