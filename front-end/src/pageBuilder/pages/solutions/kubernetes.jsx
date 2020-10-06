export default [
    {
        typeWriter_title: {
            before: "",
            typed: ["Integration", "Interaction", "Innovation"],
            after: "achieved with Kubernetes"
        },
        py: 12,
        rowDistance: 8,
        body: [
        {
            width:["100%", "100%","100%", 1/2],
            type: "imageGroup",
            data: {
                images: ["/assets/images/services/storage_challenge.jpg"],
                borderRadius: 8,
                width : ["100%","100%",'90%'],
                height: ["300px","300px","400px"],
                objectFit: "cover"
            }
        },
        {
            width: ["100%", "100%","100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","lg"],
                text: <span>Groups containers that make up an application into 
                logical units for easy management and discovery. Kubernetes 
                builds upon 15 years of experience of running production workloads
                at Google, combined with best-of-breed ideas and practices from the
                community. Positioned VMs to deliver the most comprehensive, 
                enterprise-grade Kubernetes-based portfolio for modern applications.
                Responsibly troubleshooting and managing high computing storage, 
                persistent / non-persistent volume, volume claims, and volume claim 
                policies related to Kubernetes. Configuring, managing Demon set, and 
                Init containers. Open Source software that allows you to deploy and 
                manage containerized applications at scale. Kubernetes Administrator As A Service helps 
                you to conquer this task efficiently and effectively. </span>
            }]
        },
    ]
    },
    {
        body: [
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/microphone.svg",
                    title: "Clustering",
                    align: "left",
                    description: "Troubleshooting the container applications outside Kubernetes clusters ( ports, nodeports, service ports, external load balancers). Managing and creating POC."
                }
            },
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/chat.svg",
                    title: "Application Multiplicity",
                    align: "left",
                    description: "Troubleshooting creating a private /global registry and deploying stateful and stateless applications in Kubernetes container like Jupyter notebook, Drupal etc."
                }
            },
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/learn.svg",
                    title: "Container Management",
                    align: "left",
                    description: "Managing containers using different container tools like dockers, cri-o other than orchestrating containers with Kubernetes. Troubleshooting the container applications outside Kubernetes clusters."
                }
            },
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/cloud.svg",
                    title: "Skilled Experts",
                    align: "left",
                    description: "Sufficient knowledge and troubleshooting skills on using different api-plugins used by users or developers. Managing services in Kubernetes by using operators."
                }
            },
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/headphones.svg",
                    title: "Completely Secure",
                    align: "left",
                    description: "Adding users and setting permission for application users inside containers using Pod security standards. Managing TLS and CA certificate for Kubernetes."
                }
            },
            {
                py: 4,
                width: ["95%", 1 / 2, 1 / 3],
                type: "feature",
                data: {
                    titleSize: "md",
                    titleFont: "Nexa Bold",
                    textOpacity: "0.7",
                    image: "/assets/images/icons/color/user.svg",
                    title: "On-Demand Hardware",
                    align: "left",
                    description: "Get required CPU and VM's along with different flavors of Linux like Redhat, CentOS, Ubuntu as well as with installing and configuring Kubernetes."
                }
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
        containerWidth: ["100%", "100%", "88%", "72%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,6,4],
                width: ["100%","100%","100%",1/2, 5/12],
                type: "content",
                data: [{
                    title: "Comprehensive Kubernetes Administrator",
                    textAlign: "justify",
                    fontSize: ["lg","xl"],
                    titleSize: [40,40,48],
                    my:[2,4,8],
                    text: "We assist customers to go serverless and operate code in more granular, scalable and cost-effective way. Managing containers using different container tools like dockers,cri-o. Managing cluster applications along with configuring CNI. "
                    
                }]
            },
            {
                width : ["100%","100%","100%",1/2, 7/12],
                type: "container",
                containerData : [{
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Scalable Service"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Persistent Storage"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/home/key.svg",mt: 4, title: "Containerised"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/diagnostics.svg", mt: 4, title: "Micromanaged"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/shield-check.svg", mt: 4, title: "Remote Access"}
                },
                {
                    width: [1/2,1/3,1/3,1/2,1/3],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/navigation/arrows-h.svg", mt: 4, title: "Traffic Routing"}
                }],
            },
        ]   
    },
    
    {
        title: "Why BG Unified Solutions?",
        py: 12,
        body: [
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/deploy.svg",
                    title: "Rigorous Troubleshooting",
                    flexDirection: ["column", "column", "row"],
                    description: "Troubleshooting the container applications outside Kubernetes clusters ( ports, nodeports, service ports, external load balancers). troubleshooting and managing high computing storage, persistent / non-persistent volume, volume claims, and volume claim policies related to Kubernetes.  troubleshooting skills on using different api-plugins used by users or developers."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/Completeness_CloudLogging.svg",
                    title: "Efficient Resources",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "Kubernetes knows the compute, memory, and storage resources each application needs and schedules instances across the cluster to maximize resource efficiency. Rapid development and iteration with the ease of application deployment and apps and service management."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
                    title: "Scalability",
                    flexDirection: ["column", "column", "row"],
                    description: "Adding users and setting permission for application users inside containers using Pod security standards (like security contexts). Customizable and requirement based VMs and CPUs. Add on-demand instances to your application to meet the predictive and desired outcomes."
                }
            },
        ]
    }
]