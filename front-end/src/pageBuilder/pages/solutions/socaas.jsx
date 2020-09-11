export default [
    {
        gap: 10,
        py: [8,16],
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
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
                fontSize: ["md","md","md","lg"],
                title: "Security Operations Centre As A Service",
                titleSize: [28,28,28,32],
                text: <span>As data theft became evident and safeguarding 
                sensitive data became a necessity for businesses everywhere, 
                we developed a portfolio of leading cybersecurity solutions 
                and built on the facility and internal processes we already 
                had in place for our NOC to create a top-notch SOC staffed 
                with certified security analysts ready to provide proactive, 
                exceptional support to our clients. We also created new 
                workflows, processes and automation specific to cybersecurity/SOC services.
                </span>
            }]
        }]
    },
    {
        title : "Ensure Cyber Security with Advanced Intelligence",
        description: "The service architecture for our Security Operations Center as a Service (SOCaaS) program integrates best-of-breed products with proven processes and highly-skilled staff, increasing visibility into the network, speeding up alert response and resolution times, and providing proactive risk modeling and risk mitigation.",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
        {
            width: [1/1, 1/2, 1/3],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/sending.svg", mt: 4, title: "In-depth risk visibility"}
        },
        {
            width: [1/1, 1/2, 1/3],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/group.svg", mt: 4, title: "Compliance Demonstrated"}
        },
        {
            width: [1/1, 1/2, 1/3],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/files/upload.svg",mt: 4, title: "Prioritizing issues resolution"}
        },
        {
            width: [1/1, 1/2, 1/3],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/shield-user.svg", mt: 4, title: "Rapid Response"}
        },
        {
            width: [1/1, 1/2, 1/3],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/chat-5.svg", mt: 4, title: "Next-gen Managed Firewall"}
        },
    ]
},
{
    py: 16,
    bgImage: "url(https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    bg: "#333",
    blend: "multiply",
    color: "white",
    title : "Why Choose our SOCaaS?",
    description: "Our SOC solution goes beyond simply installing a SIEM product and sending your team members an overwhelming number of alerts to review. Our Security Engineers use analytic software to conduct the deep analysis required to provide you with actionable remediation recommendations.",
},
]