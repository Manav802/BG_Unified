export default [
    {
        gap: 10,
        py: [8,16],
        body: [
        {
            width:["100%", "100%", 1/2],
            py:[2,6,6,6,2],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/illustrations/network.svg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "contain"
                }
            },
            {
                mt:[0,3],
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","md","md","lg"],
                title: "What is Network Infrastructure?",
                titleSize: [28,28,28,32],
                text: <span>Network infrastructure relates to all network resources that make network or internet connectivity, management, business operations, 
                    and communication possible. Anything incorporated in the network, from servers to wireless routers, comes together to make up a system’s 
                    network infrastructure. Network infrastructure allows for efficient communication and services between applications, users, devices, services.
                </span>
            }]
        }]
    },
    {
        title:"Why BGUS as your Network Infrastructure provider?",
        description: "In this digital generation, an organization’s dexterity and potency depend on more than plainly superior tools and hardworking craftsmen. Administering a smooth transaction also demands a robust, reliable, and secure network infrastructure.",
        rowDistance: 8,
        my: 0,
        pt: 5,
        pb: 10,
        gap: 10,
        body: [
            {
            py:4,
            width: ["100%", 1/2, 1/3],
            type: "feature",
            data: {
                titleSize:"md",
                titleFont: "Nexa Bold",
                textOpacity:"0.7",
                image: "/assets/images/icons/color/desktop.svg",
                title: "Device Monitoring",
                align: "left",
                description: "Monitor your devices to identify potential issues and system bottlenecks proactively."
                }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/lock.svg",
                    title: "Network Security",
                    align: "left",
                    description: "Network Security is ensured by using several different cybersecurity tools and providers."
                    }
            },
            {
                py:4,
                width: ["100%", 1/2, 1/3],
                type: "feature",
                data: {
                    titleSize:"md",
                    titleFont: "Nexa Bold",
                    textOpacity:"0.7",
                    image: "/assets/images/icons/color/stack.svg",
                    title: "Documentation",
                    align: "left",
                    description: "Complete list of instruments included from routers, switches, and wireless devices, etc."
                    }
            },
        ]
    },
    {
        title: "OUR TRUSTED NETWORK INFRASTRUCTURE SUPPORTED VENDORS",
        my: 0,
        py: 16,
        titleStyle: {
            fontSize: "2xl",
            opacity: .7
        },
        rowDistance: 8,
        body: [{
            width: "100%",
            type: "imageGroup",
            data: {
                images: ["/assets/images/brands/cisco-1.png", "/assets/images/brands/huawei-1.png", "/assets/images/brands/radware.png","/assets/images/brands/fortinet.png","/assets/images/brands/paloalto.png", "/assets/images/brands/f5.png", "/assets/images/brands/hp.png", "/assets/images/brands/juniper.png", ],
                height: "128px",
                mx:"32px",
                width:"160px",
                objectFit: "contain"
            }
        }]
    },
]