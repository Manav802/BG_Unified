import InfraPricing from "../../pricing/InfraPricing";
import DNSPricing from "../../pricing/DNSPricing";

export default [
    {
        pb: 0,
        body: [   
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "xl",
                text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use when you use it but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is very quick, adding or removing capacity is even faster and without any downtime."
            }]
        }]
    },
    {   
        title : "Our Pricing Plans",
        my: 0,
        containerWidth: "100%",
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <DNSPricing/>
        }]
    },
    {
        my: 0,
        py: "48px",
        bgImage: "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        blend: "overlay",
        bg: "dark.500",
        color: "white",
        rowDistance: 2,
        gap: 2,
        body: [
            {
                width: [1/2],
                type: "content",
                data: [{
                    title: "DNSS",
                    textAlign: "left",
                    fontSize: "xl",
                    text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use when you use it but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is very quick, adding or removing capacity is even faster and without any downtime."
                }]
            },
            {
                width : [1/2],
                type: "container",
                containerData : [{
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Pay Per Use"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Rapid Elasticity"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg",mt: 4, title: "Ubiquitous Access"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "High Asset Utilization"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Dynamic Resources"}
                },
                {
                    width: [1,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", image:"/assets/images/icons/color/ui.svg", mt: 4, title: "Total Interoperibility"}
                }],
            },
        ]   
    },
    
    {
        pb: 0,
        title : "Why BGUS",
        body: [
       
        {
            width: "100%",
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "xl",
                text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use when you use it but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is very quick, adding or removing capacity is even faster and without any downtime."
            }]
        }]
    },

]