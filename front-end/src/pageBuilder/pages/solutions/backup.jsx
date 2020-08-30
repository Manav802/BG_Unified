import InfraPricing from "../../pricing/BackupPricing";

export default [
    {
        title: "Backup for your Digital system",
        description: "In today’s dynamic and complex landscape, no one can afford to be idle. Whether we like it or not, data centre change is upon us. Migrating us to store confidential and information data somewhere else, for the worst-case scenarios. And with this change comes steep challenges—to migrate your legacy production application environments to next-general data centres and enable your journey to the cloud.",
        descriptionStyle: {
            fontSize: "xl",
            px: 0,
        },
        rowDistance: 8,
        gap: 10,
    },
    {
        title: "Image Group",
        pb: 4,
        pt: 4,
        my: 0,
        titleStyle: {
            fontSize: "2xl",
            opacity: .7
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
                    title: "Pay per Use",
                    description: "Pay only for the storage you actually require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
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
                    title: "Pay per Use",
                    description: "Pay only for the storage you actually require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
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
                    title: "Pay per Use",
                    description: "Pay only for the storage you actually require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
                    image: "/assets/images/Illustrations/low_pricing.svg"
                }]
            }
        }]
    },
    {
        title: "Conclusion",
        description: "BG Unified Solution provides reliable, secure & cost-effective managed service for backup and recovery of all types of data.",
        bgImage: "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        endingButton: true,
        endingButtontitle: "Lets get It Done!"
    }
]