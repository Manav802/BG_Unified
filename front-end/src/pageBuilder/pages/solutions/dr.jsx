import CloudExchangePricing from "../../pricing/CloudExchangePricing";
import DRPricing from "../../pricing/DRPricing";
export default [
    {
        mt: "-96px",
        mb: 0,
        py: 0,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <DRPricing />
        }],
    },
    {
        gap: 10,
        py: 8,
        body: [
            {
                width: ["100%", "100%", 1 / 2],
                type: "imageGroup",
                data: {
                    images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
                    borderRadius: 8,
                    width: '90%',
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: "lg",
                    title: "Always stay aware and prepared",
                    titleSize: 32,
                    text: <span>Disaster Recovery Management as a Service is basically preparing your organization for a failure or situation that you are unable to predict. The situations may be a catastrophic failure, a natural calamity, data being lost, server not functioning properly, data centres being compromised and so on. Predicting the most unlikely events that may cause data loss, data breach and hinder the functioning of an organization, finding and installing solutions.
                    </span>
                }]
            }]
    },
    {
        title: "Assist in DR strategy, evaluate threat models and much more...",
        titleStyle: {
            mt: 8,
        },
        my: 0,
        py: 16,
        bg: "light.400",
        color: "dark.500",
        rowDistance: 8,
        gap: 8,
        body: [
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/weather/cloudy.svg", mt: 4, title: "Multisite or Multi-Cloud"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/tools/swiss-knife.svg", mt: 4, title: "Robust" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/devices/display-1.svg", mt: 4, title: "Regular Monitoring" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/navigation/check.svg", mt: 4, title: "Quality Ensured"
                }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/general/scale.svg", mt: 4, title: "Scalable" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/home/key.svg", mt: 4, title: "Reliable" }
            },
            {
                width: [1 / 2, 1 / 3, 1 / 4],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Low Redundant Time" }
            }
        ]
    },
    {
        title: "Why BG Unified Solutions?",
        py: 12,
        body: [
            {
                type: "image&text",
                data: {
                    image: "/assets/images/Illustrations/productivity.svg",
                    title: "Simplified Deployment",
                    flexDirection: ["column", "column", "row"],
                    description: "An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data centre, SRST will still be able to provide basic inbound and outbound calling facilities"
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/Illustrations/Sound_and_Efficient_Planning.svg",
                    title: "Non - Disruptive Testing",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "We’ve got it covered under all circumstances, whether natural calamities, forecasted events, unforecasted events. The time taken to restore normal conditions becomes very less, thanks to our team of experts, who take precautionary measures from the starting."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/Illustrations/Completeness_CloudLogging.svg",
                    title: "Flexible Solutions",
                    flexDirection: ["column", "column", "row"],
                    description: "In-place upgrades reduce downtime and maximize operational efficiencies. And you can customize how you intercept, inspect, transform, and direct inbound or outbound application traffic with powerful, flexible iRules."
                }
            },
        ]
    }
]