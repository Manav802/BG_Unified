import InfraPricing from "../../pricing/BackupPricing";

export default [
    {
        title: "Backup for your Digital Enterprise!!",
        description: " BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data. We handle protection and management for all of your structured and unstructured data while enabling self-service restoration capability to your teams. We’ll create a realistic roadmap and provide continual service so you can capture the promise of tomorrow’s data centre, cloud and backup—today.",
        descriptionStyle: {
            fontSize: "xl",
            px: 0,
        },
        rowDistance: 8,
        gap: 10,
    },
    {
        title: "Single, Reliable Backup and Recovery solution",
        pb: 4,
        pt: 4,
        my: 0,
        titleStyle: {
            fontSize: "2xl",
            opacity: .9
        },
        bg: "light.400",
        rowDistance: 8,
        containerWidth: "100%",
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/os/redhat.png", "/assets/images/os/windows10.png", "/assets/images/os/windowsServer.png"],
            
                height: "96px",
                width: ["128px"],
                objectFit: "contain",
                spacing: ["5%", "6%", "12%"]
                  
            }
            
        }]
    },
    {
        title: "Why BG Unified Solutions?",
    },
    {
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Flexible and Scalable Service",
                    description: "For any of your organization department, our BaaS offering provides a simplified IT management and a highly scalable platform. Irrespective of the end-user, everyone gets to access to the latest and the greatest backup technology stack. Customized and tailor solutions to meet client needs with Local end-market support services and Local language capabilities",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                }]
            }
        }]
    },
    {
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Cost-Effective Solution",
                    description: "For your business, we are offering and providing a flat billing structure. It's designed for pay as you go model that shifts your costs from capex to opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off expenses into your monthly payment.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                }]
            }
        }]
    },
    {
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Back it Up ",
                    description: "Geographically sound, redundant, quick and efficient increasing your backup by 60%. Highly advanced, available and multiple data centre locations offering multiple IP types globally, in a clustered or isolated environment.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                }]
            }
        }]
    },
    {
        title: "Customizable Data Protection for your Business",
        description: "Migrate your legacy production Application Environments to Next-Gen Data Centres and enable your journey to the cloud.",
        bgImage: "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        endingButton: true,
        endingButtontitle: "Lets get IT Done!"
    }
]