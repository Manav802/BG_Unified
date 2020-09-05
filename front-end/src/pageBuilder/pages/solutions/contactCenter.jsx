import FirewallPricing from "../../pricing/FirewallPricing";
export default [
    {
        gap: 10,
        py: 16,
        body: [
        {
            width:["100%", "100%", 1/2],
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
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: "lg",
                title: "Protecting your Data is the New Normal!!",
                titleSize: 32,
                text: <span>BG Unified Solution provides reliable, secure & cost-effective managed service for backup 
                    and recovery of all types of data. We handle protection and management for all of your structured 
                    and unstructured data while enabling self-service restoration capability to your teams. 
                    We’ll create a realistic roadmap and provide continual service so you can capture the 
                    promise of tomorrow’s data centre, cloud and backup—today. </span>
            }]
        }]
    },
] 