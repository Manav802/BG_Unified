import sections from '../pageBuilder/pages/solutions/index'

const services = {
    "appdev": {
        title: "Application Development As A Service",
        slogan: "Developing Your Needs",
        bgImage: "/assets/images/services/appdev.jpg",
        category: "Professional Services",
        icon: "/assets/images/icons/monotone/AppDev.svg",
        color: "#ED1C24",
        tags: ["application", "app", "dev", "development", "scalability", "platform", "independence", "client", "flexibility"],
        description: "BG Unified Solutions provides services in the area of Web, Mobile, and Enterprise Application Development. Our team....",
        illustration: "",
        relatedService: ["Web Development As A Service", "Contact Center As A Service", "Architectural Consultancy As A Service"],
        conclusion: "User-interactivity, responsiveness, user-friendly interfaces kept into consideration.",
        sections: sections.appdev
    },

    "architectural-consultancy": {
        title: "Architectural Consultancy As A Service",
        slogan: "Spirit of Expertise",
        bgImage: "/assets/images/services/arch.webp",
        category: "Professional Services",
        icon: "/assets/images/icons/monotone/architectural.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solutions has a team of practicing multi-disciplinary architects to baseline current architecture and its.... ",
        illustration: "",
        relatedService: ["Contact Center As A Service", "Application Development As A Service", "Service Desk As A Service"],
        conclusion: "Achieve Higher Business Efficiency through increased agility, cost containment, and lowered risk.",
        sections: sections.architecture
    },
    "backup": {
        title: "Backup As A Service",
        slogan: "Backup for your Digital System",
        category: "IT Infrastructural Services",
        bgImage: "/assets/images/services/backup.webp",
        icon: "/assets/images/icons/monotone/BackupAsAService.svg",
        color: "#0267C1",
        tags: ["backup"],
        description: "BG Unified Solutions provides reliable, secure & cost-effective managed service for backup and recovery of all types of data....",
        illustration: "",
        relatedService: ["Database As A Service", "Storage As A Service", "DR As A Service"],
        conclusion: "Customizable Data Protection for your Business",
        sections: sections.backup
    },
    "cex": {
        title: "CEX As A Service",
        slogan: "The Cloud Service at its Best",
        bgImage: "/assets/images/services/cex.jpg",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/CEX.svg",
        color: "#F1D302",
        tags: ["cloud exchange connectivity", "exchange", "connectivity", "express routes", "office 365", "AWS", "azure"],
        description: "Express Routes to office 365, AWS, Azure. Advanced Solution provides private, seamless, and on-demand connections....",
        illustration: "",
        relatedService: ["Logging Cloud Connect", "Proxy As A Service", "SIP As A Service"],
        conclusion: "Proactively manages your service components to adhere to quality standards",
        sections: sections.cex
    },
    "logging": {
        title: "Logging Cloud Connect",
        slogan: "Cloud Computing is the new future",
        bgImage: "/assets/images/services/logging.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/CloudLogging.svg",
        color: "#020100",
        tags: ["cloud", "logging", "log", "threats", "log management", "troubleshooting"],
        description: "Log central services over the internet. Collect, Store, and report the various data and underlying threats....",
        illustration: "",
        relatedService: ["Platform As A Service", "Backup As A Service", "CEX As A Service"],
        conclusion: "Add the shield to protect your business reputation",
        sections: sections.logging
    },
    "contact-center": {
        title: "Contact Center As A Service",
        slogan: "Service Truly Different.",
        bgImage: "/assets/images/services/support.webp",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/ContactCenterAsAService.svg",
        color: "#6A041D",
        tags: ["customer", "Support", "CSaaS", "Customer Experience", "Productivity", "Securing", "Data"],
        description: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools....",
        illustration: "",
        relatedService: ["Architectural Consultancy As A Service", "Application Development As A Service", "Service Desk As A Service"],
        conclusion: "We help organizations who are looking for an IT Partner known for quality and consistency of service.",
        sections: sections.callcenter
    },
    "dbaas": {
        title: "Database As A Service",
        slogan: "Professional Remote Database Solutions",
        bgImage: "/assets/images/services/database.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/dbaas.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility....",
        illustration: "",
        relatedService: ["Backup As A Service", "Storage As A Service", "DR As A Service"],
        conclusion: "Professional, Flexible and Reliable Database Services for your Business.",
        sections: sections.dbaas,
        popular: true
    },
    "dns": {
        title: "DNS As A Service",
        slogan: "For a stronger Web Identity",
        category: "Network Services",
        bgImage: "/assets/images/services/dns.webp",
        icon: "/assets/images/icons/monotone/DNSasAService.svg",
        color: "#06BCC1",
        popluar : true,
        tags: ["dns", "DNS", "domain", "name", "cost", "effective", "Concurrency", "Scalability", "TLD servers"],
        description: "Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability....",
        illustration: "",
        relatedService: ["Web Hosting As A Service", "Logging Cloud Connect", "Infrastructure As A Service"],
        conclusion: "Try our Concurrent DNS Service with superior IP Technology.",
        sections: sections.dns
    },
    "dr": {
        title: "DR As A Service",
        slogan: "Tackle stagnancy better",
        bgImage: "/assets/images/services/backup.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/DRAsAService.svg",
        color: "#3B3561",
        tags: ["Disaster", "Recovery", "Management", "Deployment", "Flexible", "Non-Disruptive"],
        description: "Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms....",
        illustration: "",
        relatedService: ["Backup As A Service", "Storage As A Service", "Infrastructure As A Service"],
        conclusion: "Detects, isolates, notifies, and corrects faults encountered in the network",
        sections: sections.dr
    },
    "firewall": {
        title: "Firewall As A Service",
        slogan: "Redefining Security Needs",
        bgImage: "/assets/images/services/firewall-2.webp",
        category: "Cyber Security Services",
        icon: "/assets/images/icons/monotone/Firewall.svg",
        color: "#6A0136",
        tags: ["Firewall", "Security", "protection"],
        description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA....",
        illustration: "",
        relatedService: ["Proxy As A Service", "SOC As A Service", "WAF As A Service"],
        conclusion: "Multi-Layered Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA.",
        sections: sections.firewall
    },
    "infra": {
        title: "Infrastructure As A Service",
        slogan: "Store your data with our Security and Reliability.",
        bgImage: "/assets/images/services/infra.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/InfrastructureIcon.svg",
        color: "#51CB20",
        tags: ["computing", "infrastructure", "asset", "utilization", "server", "consolidation", "virtualization", "Geographical Redundant Storage"],
        description: "Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management....",
        illustration: "",
        relatedService: ["Storage As A Service", "Platform As A Service", "Workstation As A Service"],
        conclusion: "We can help if you have questions regarding Infrastructure As A Service",
        sections: sections.infra,
        popular: true,
    },
    "load-balancer":{
        title: "Load Balancer As A Service",
        slogan: "Simplified Load Balancing",
        bgImage: "/assets/images/services/loadbalancer.jpg",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/balancer.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solutions has a team of practicing multi-disciplinary architects to baseline current architecture and its shortcomings....",
        illustration: "",
        relatedService: ["Backup As A Service", "Database As A Service", "DR As A Service"],
        conclusion: "Load Balancing is the solution you’ve been looking for.",
        sections: sections.loadBalancer,
        popular: true
    },
    "workstation":{
        title: "Workstation As A Service",
        slogan: "Digitalize your Workspace",
        bgImage: "/assets/images/services/workstation.jpg",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/workstation.svg",
        color: "#235789",
        tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
        description: "BG Unified Solutions delivers architects for the technology stack(s) that your enterprise has adopted....",
        illustration: "",
        relatedService: ["GPU As A Service", "Infrastructure As A Service", "Platform As A Service"],
        conclusion: "An ideal solution for highly sensitive computing environments.",
        sections: sections.workstation,
        popular:true,
    },
    "platform": {
        title: "Platform As A Service",
        slogan: "Diversified Expertise",
        bgImage: "/assets/images/services/platform.jpg",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
        color: "#F76F8E",
        tags: ["cloud", "platform", "service", "infrastructure", "DC Interconnect"],
        description: "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. 10G/40G core switching....",
        illustration: "",
        relatedService: ["Workstation As A Service", "Infrastructure As A Service", "GPU As A Service"],
        conclusion: "We give you the power to easily deploy, efficiently monitor, and scale the applications.",
        sections: sections.platform
    },
    "proxy": {
        title: "Proxy As A Service",
        slogan: "Our Proxy, Your Way!!",
        bgImage: "/assets/images/services/proxy.webp",
        popular: true,
        category: "Cyber Security Services",
        icon: "/assets/images/icons/monotone/proxy.svg",
        color: "#451F55",
        tags: ["proxy", "servers", "low-latency", "services"],
        description: "Just redirect your traffic to our Proxy Service either by DNS or other custom solutions to our public Proxy....",
        illustration: "",
        relatedService: ["Firewall As A Service", "WAF As A Service", "SOC As A Service"],
        conclusion: "Enhanced proxy service by isolating the private network from the web",
        sections: sections.proxy
    },
    "sd-wan": {
        title: "SD-WAN As A Service",
        slogan: "Simple Solutions for Complex Connections!!",
        documentHeading: "Best SD-WAN Optimization",
        bgImage: "/assets/images/services/sdwan.webp",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SD-Wan.svg",
        color: "#3B0086",
        tags: ["SD-WAN", "sd wan", "Optimization", " VMware VDI"],
        description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Cloud Exchange....",
        illustration: "",
        relatedService: ["Wireless As A Service", "DNS As A Service", "SIP As A Service"],
        conclusion: "SD-WAN transforms the way a network supports and interacts with enterprise applications.",
        sections: sections.sdwan
    },
    "sip": {
        title: "SIP As A Service",
        slogan: "High Performance Delivered",
        bgImage: "/assets/images/services/sip.jpg",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/SIP.svg",
        color: "#290628",
        tags: ["SIP", "Connectivity", "Service Infrastructure", "cisco unified"],
        description: "SIP As A Service Infrastructure includes more than 15 Cisco Unified Border Elements with 1600 SIP channels....",
        illustration: "",
        relatedService: ["SD-WAN As A Service", "DNS As A Service", "Wireless As A Service"],
        conclusion: "Our Infrastructure includes more than 15 Cisco Unified border Elements with 1600 SIP channels.",
        sections: sections.sip
    },
    "storage": {
        title: "Storage As A Service",
        slogan: "Storage Made Simple.",
        bgImage: "/assets/images/services/storage.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/StorageAsAServiceIcon.svg",
        color: "#0091AD",
        tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
        description: "Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. The storage....",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Database As A Service", "Backup As A Service"],
        conclusion: "Ready to get Storage?",
        sections: sections.storage
    },
    "socaas": {
        title: "SOC As A Service",
        slogan: "Cyber Security Experts",
        bgImage: "/assets/images/services/soc.webp",
        category: "Cyber Security Services",
        icon: "/assets/images/icons/monotone/security.svg",
        color: "#0091AD",
        tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
        description: "BG Unified Solutions' Security Operations Center As A Service tends to provide you with reliable and flexible cybersecurity....",
        illustration: "",
        relatedService: ["Proxy As A Service", "Firewall As A Service", "WAF As A Service"],
        conclusion: "Win the battle against Cyber Threats with our SOCaaS",
        sections: sections.socaas,
        popular: true
    },
    "ucaas": {
        title: "Unified Communications As A Service",
        slogan: "Professional Communication at your fingertips",
        bgImage: "/assets/images/services/ucaas_cover.webp",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/UCAsAService.svg",
        color: "#B2ABF2",
        tags: ["UCaaS", "unified", "communications", "cisco", "avaya", "unity", "collaboration", "telepresence", "workforce", "optimisation"],
        description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring....",
        illustration: "",
        relatedService: ["Contact Center As A Service", "Infrastructure As A Service", "SIP As A Service"],
        conclusion: "We tailor a solution with the best products and technologies from top firms with expert service.",
        sections: sections.ucaas
    },
    "hosting": {
        title: "Web Hosting As A Service",
        slogan: "Trendsetting Web Hosting Solutions",
        bgImage: "/assets/images/services/webhosting.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/WebHosting.svg",
        color: "#06D6A0",
        tags: ["web", "hosting", "host", "web server", "APACHE", "website"],
        description: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included....",
        illustration: "",
        relatedService: ["DNS As A Service", "Logging Cloud Connect", "Backup As A Service"],
        conclusion: "Web Hosting services design and implementation in distributed environments.",
        sections: sections.hosting
    },
    "wafaas": {
        title: "WAF As A Service",
        slogan: "Robust Security with a Dedicated Web App Firewall",
        bgImage: "/assets/images/services/wafaas.webp",
        category: "Cyber Security Services",
        icon: "/assets/images/icons/monotone/app.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " Protect your Web Application with our Web Application Firewall Services, protecting your enterprise online with full durability....",
        illustration: "",
        relatedService: ["SOC As A Service", "Firewall As A Service", "DR As A Service"],
        conclusion: "Protect your web applications with our web application firewall.",
        sections: sections.wafaas
    },
    "sdaas": {
        title: "Service Desk As A Service",
        slogan: "The Perfect Customer Service",
        bgImage: "/assets/images/services/wafaas.webp",
        category: "Collaborative Services",
        icon: "/assets/images/icons/monotone/serviceDesk.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " Protect your Web Application with our Web Application Firewall Services, protecting your enterprise online with full durability....",
        illustration: "",
        relatedService: ["Contact Center As A Service", "Unified Communications As A Service", "CEX As A Service"],
        conclusion: " Customer-centric Solutions, delivered by experts, to enhance your business.",
        sections: sections.sdaas
    },
    "gpu": {
        title: "GPU As A Service",
        slogan: "Powerful Yet Simple",
        bgImage: "/assets/images/services/wafaas.webp",
        category: "IT Infrastructural Services",
        icon: "/assets/images/icons/monotone/gpu.svg",
        color: "#E4572E",
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: " Protect your Web Application with our Web Application Firewall Services, protecting your enterprise online with full durability....",
        illustration: "",
        relatedService: ["Backup As A Service", "Platform As A Service", "Infrastructure As A Service"],
        conclusion: "Maximized Utilization, a highly scalable powerful resource for high-end workloads!!",
        sections: sections.gpu
    },
    "webdev": {
        title: "Web Development As A Service",
        slogan: "Design that speeds up performance",
        bgImage: "/assets/images/services/webdev.webp",
        category: "Professional Services",
        icon: "/assets/images/icons/monotone/webdev.svg",
        color: "#E4572E",
        tags: ["webdev", "web", "design", "development", "reactjs"],
        description: "Get your website ready with high speed performance, and attractive motion + visual design....",
        illustration: "",
        relatedService: ["Application Development As A Service", "Web Hosting As A Service", "DNS As A Service"],
        conclusion: "Ready to discuss your project?",
        sections: sections.webdev,
        popular: true
    },
    "wireless": {
        title: "Wireless As A Service",
        slogan: "Wireless Technology Made Simple",
        bgImage: "/assets/images/services/wireless.webp",
        category: "Network Services",
        icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
        color: "#E4572E",
        popular: true,
        tags: ["wireless", "wifi", "clusters", "networks"],
        description: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508....",
        illustration: "",
        relatedService: ["SIP As A Service", "DNS As A Service", "SD-WAN As A Service"],
        conclusion: "Let us make your campus wireless for you!!",
        sections: sections.wireless
    },
 
  
}

export default services