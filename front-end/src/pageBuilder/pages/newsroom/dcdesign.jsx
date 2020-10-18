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
                text: "A client had a requirement to consolidate a distributed environment into a single highly available data center. Analysis into the current-state highlighted over 50 geographically dispersed sites hosting 250+ separate pieces of infrastructure.",
                textAlign: "justify"
            },
            {
                text: "METHODOLOGY",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "A dual-site, dual-core Data center model was developed to provide a highly available central repository for this infrastructure with security overlay providing defined zones for controlled and internet-facing services.",
                textAlign: "justify"
            },
            
            {
                text: "Some 24x7 workloads were protected by the deployment of self-healing network topologies and highly available virtualized infrastructure.",
                textAlign: "justify"
            },

            {
                text: "Optimizing storage resources was essential to controlling the cost of data growth. The Enterprise Storage Assessment provided in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings were linked to their specific risks and benefits—so that they can scale their storage systems to successfully serve the growing needs of their business. " ,
                textAlign: "justify"
            },
            {
                image:<Image justifySelf="center"  src="/assets/images/services/storage.jpg"/>,
                imageJustify: "center",
                
            },
            {
                text: "And while there are commonalities that allow for pre-packaged solutions, every data center is different.",
                textAlign: "justify",
                mt:"32px"
            },
            {
                text: "CONCLUSION",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "Our experienced, certified storage professionals and data center practice team are adept and helped customers manage change and transform their data center's to enable next-generation computing models.",
                textAlign: "justify"
            },
            {
                text: "RESOURCES USED",
                textAlign: "justify",
                fontWeight:"800",
                fontSize: "2xl",
                mt: "32px"
            },
            {
                text: "Major technologies used :",
                textAlign: "justify"
            },
            {
                text: <span><b> PaloAlto 5060</b> in multiple layers</span>,
                textAlign: "justify"
            
            },
            {
                text: <span><b>Huawei 10G</b> switches </span>,
                textAlign: "justify"
            
            },
            {
                text: <span><b>Cisco 5508 WLC</b></span>,
                textAlign: "justify"
            
            },
            {
                text: <span><b>F5 Viprion LTM(s)</b></span>,
                textAlign: "justify"
            
            },
        ]
    }
]