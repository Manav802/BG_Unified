import CloudLoggingPricing from "../../pricing/CloudLoggingPricing";
export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Collect", "Store", "Report"],
            after: "the various data and underlying threats."
        },
        description: "Cloud Logging allows the ingestion of system log data and applications from numerous VMs and analyzes the data in real-time. The analysis of data is done through logs, which are managed and simplified over the cloud, with BG Unified Solutions Cloud Logging as a Service, Log central services over the internet. Add the shield to protect your business reputation—application and system log ingestions.",
        descriptionStyle: {
            textAlign: "left"
        },
        body: [{
            width: "100%",
            type: "pricing",
            data: <CloudLoggingPricing />
        }],
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: 8,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Completeness",
                    description: "Completely integrated service performing at scale can ingest system log data from multiple VMs. Reduction in need for on-site storage. Download archives on-demand.",
                    image: "/assets/images/illustrations/Completeness_CloudLogging.svg"
                },
                {
                    title: "Simplified log management",
                    description: "Collecting and managing logs from numerous endpoints, servers, and cloud-based resources with ease. Management and monitoring your logs and queries live.",
                    image: "/assets/images/illustrations/SimplifiedLogManagment_CloudLogging.svg"
                },
                {
                    title: "Proactive Troubleshooting",
                    description: "  Dynamic field explorer enhancing your troubleshooting experience. Easy troubleshooting in advanced and modern environments, with appropriate tools and resources.",
                    image: "/assets/images/illustrations/ProactiveTroubleShooting_CloudLogging.svg"
                },]
            }
        }]
    }
]