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
                enterprise-grade Kubernetes-based portfolio for modern applications.</span>
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
                    description: "Troubleshooting the container applications outside Kubernetes clusters ( ports, nodeports, service ports, external load balancers). Managing and creating POC  (single master cluster) for demonstration and High-availability cluster with 3 / 5 node master and variable worker nodes with kubeadm."
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
                    description: "Troubleshooting creating a private /global registry and deploying stateful and stateless applications in Kubernetes container like (Jupyter notebook, Drupal, Prometheus, Mongodb, httpd, nginx, JBoss and other web server related applications)."
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
                    description: "Managing containers using different container tools like dockers, cri-o other than orchestrating containers with Kubernetes. Troubleshooting the container applications outside Kubernetes clusters ( ports, nodeports, service ports, external load balancers)."
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
                    description: "Sufficient knowledge and troubleshooting skills on using different api-plugins used by users or developers. Managing services in Kubernetes by using operators. Configuring, managing Demon set, and Init containers."
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
                    description: "Adding users and setting permission for application users inside containers using Pod security standards. Managing TLS and CA certificate for Kubernetes. creating and configuring CNI using SDN (software designed network) for a cluster (like Weave net and Calico)."
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
                    description: "Get required CPU and VM's along with different flavors of Linux like Redhat, CentOS, Ubuntu as well as with installing and configuring Kubernetes. Managing containers using different container tools like dockers, cri-o other than orchestrating containers with Kubernetes."
                }
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