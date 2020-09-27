import ProxyPricing from "../../pricing/ProxyPricing";

export default [
    {
        title: "Connect with Proxy",
        gap: 0,
        body: [{
            type: "content",
            data: [{
                text: <span>
                Proxy as a Service refers to proxy servers that act as intermediate nodes or connecting points between an end-user and the internet.
                Proxy as a Service allows you to connect to a different server and provides you with access to web pages, files, etc. 
                Proxy servers facilitate administrative, authoritative, security issues in the enterprise world.
                </span>,
                fontSize: ["lg","lg","xl"],
                textAlign:"center",
                opacity: .7,
                }]
            },
            {
                width: "100%",
                type: "pricing",
                data: <ProxyPricing/>
            },
        ]
    },
    {
        my: 0,
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        gap: 6,
        body: [
            {
                width: "100%",
                type: "container",
                containerData: [{
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Secure" }
                },
                {
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Low Latency" }
                },
                {
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/home/key.svg", mt: 4, title: "Authoritative" }
                },
                {
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "Administrative" }
                },
                {
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/code/stack.svg", mt: 4, title: "Multi-Layered" }
                },
                {
                    width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
                    type: "feature",
                    data: { align: "center", titleSize: "md", iconColor: "primary.500", svg: "/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Remote Connectivity" }
                }],
            },
        ]
    },
    {
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Firewall ",
                    description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC",
                    image: "/assets/images/illustrations/firewall.svg"
                },
                {
                    title: "Network Filtering",
                    description: "Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.",
                    image: "/assets/images/illustrations/security_lock_firewall.svg"
                },
                {
                    title: "Fast speed with minimum bandwidth usage",
                    description: "Use proxy servers at a faster speed and limiting the bandwidth utilization, by filtering traffic, caching files and web pages accessed. Highly advanced, available and multiple data center locations.",
                    image: "/assets/images/illustrations/sip.svg"
                },]
            }
        }]
    },
]