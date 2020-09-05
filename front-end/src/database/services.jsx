import sections from '../pageBuilder/pages/solutions/index'

const services = {
    "appdev":{
        title: "Application Development As A Service",
        slogan: "Slogan Goes Here",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Development Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#ED1C24",
        tags: ["application", "app", "dev", "development", "scalability", "platform", "independence", "client", "flexibility"],
        description: "BG Unified Solutions provides services in the area of Web, Mobile and Enterprise Application Development. Our team of technical and functional experts can help you in new Application Development, Modernizing and Supporting existing applications.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.appdev
    },
    "architectural-consultancy": {
        title: "Architectural Consultancy As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solution has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings, define future state architecture. Whatever be the technology stack(s) that your enterprise has adopted, we can help you future-proof it.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.architecture
    },
    "backup": {
        title: "Backup As A Service",
        slogan: "Backup for your Digital system",
        category: "IT Infrastructural Services",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        icon: "/assets/images/icons/monotone/BackupAsAService.svg",
        color: "#0267C1",
        tags: ["backup"],
        description: "BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data. We handle protection and management for all of your structured and unstructured data, while enabling self-service restoration capability to your teams.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "Customizable Data Protection for your Business",
        sections: sections.backup
    },
    "cex": {
        title: "CEX As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "/assets/images/backgrounds/network_abstract.jpg",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#F1D302",
        tags: ["cloud", "exchange", "connectivity", "express routes", "office 365", "AWS", "azure"],
        description: "Express Routes to office 365, AWS, Azure",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.cex
    },
    "cloud-logging": {
        title: "Cloud Logging As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#020100",
        tags: ["cloud", "logging", "log", "threats", "log management", "troubleshooting"],
        description: "Log central services over the internet. Collect, Store, and report the various data and underlying threats. Add the shield to protect your business reputation.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.logging
    },
    "contact-center": {
        title: "Contact Center As A Service",
<<<<<<< Updated upstream
        slogan: "Network Marketing Newly Marketed",
=======
        slogan: "Service Truly Different.",
>>>>>>> Stashed changes
        bgImage: "",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#6A041D",
        tags: ["customer", "Support", "CSaaS", "Customer Experience", "Productivity", "Securing", "Data"],
        description: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.callcenter
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
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "Try our Concurrent DNS Service with superior IP Technology.",
        sections: sections.dns
    },
    "dr": {
        title: "DR As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#3B3561",
        tags: ["Disaster", "Recovery", "Management", "Deployment", "Flexible", "Non-Disruptive"],
        description: "Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms and measure robustness using failure driven tests.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
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
        slogan: "Store your data with our security and reliability.",
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
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "We give you the power to easily deploy, efficiently monitor, and transparently scale the applications. Boost up your operational efficiency. Improve your organization’s agility.",
        sections: sections.platform
    },
    "proxy": {
        title: "Proxy As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/Proxy.svg",
        color: "#451F55",
        tags: ["proxy", "servers", "low-latency", "services"],
        description: "Just redirect your traffic to our Proxy Service either by DNS or other custom solution to our public Proxy Service and then create a record to reroute your traffic to your application behind the firewall.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.proxy
    },
    "sd-wan": {
        title: "SD-WAN As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SD-Wan.svg",
        color: "#3B0086",
        tags: ["SD-WAN", "sd wan", "Optimization", " VMware VDI"],
        description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.sdwan
    },
    "sip": {
        title: "SIP As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SIP.svg",
        color: "#290628",
        tags: ["SIP", "Connectivity", "Service Infrastructure", "cisco unified"],
        description: "SIP As A Service Infrastructure includes more than 15 Cisco Unified Border Elements with 1600 SIP channels spanned across multiple DC locations with DUAL Exchange Homing.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
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
    "ucaas": {
        title: "Unified Communications As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/UCAsAService.svg",
        color: "#B2ABF2",
        tags: ["UCaaS", "unified", "communications", "cisco", "avaya", "unity", "collaboration", "telepresence", "workforce", "optimisation"],
        description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.ucaas
    },
    "hosting": {
        title: "Web Hosting As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/WebHosting.svg",
        color: "#06D6A0",
        tags: ["web", "hosting", "host", "web server", "APACHE", "website"],
        description: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.hosting
    },
    "wireless": {
        title: "Wireless As A Service",
        slogan: "Network Marketing Newly Marketed",
        bgImage: "",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508, 2504 and Aruba controllers.",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusion: "",
        sections: sections.wireless
    }
}

export default services