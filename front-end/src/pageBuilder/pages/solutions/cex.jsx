import CloudExchangePricing from "../../pricing/CloudExchangePricing";
export default [
    {
        title: "Express Routes to office 365, AWS, Azure. Advanced Solution provides private, seamless, and on-demand connections to many clouds as well as networks.",
        description: "We ensure reliability, integrity, security as well as scalability for our cloud exchange connectivity solutions. The traffic is not sent over the internet only, rather the exchange provider connects the exchange’s network directly to the cloud provider’s network. We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners while also mitigating the risk of security breaches.",
        titleStyle: {
            textAlign: 'justify',
            fontSize: ['2xl', '2xl', '36px'],
            px: 4,
            mb: 4
        },
        descriptionStyle: {
            textAlign: 'left'
        }
    },
    {
        my: 0,
        py: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <CloudExchangePricing />
        }],
        bg: 'light.400',
    },
    {
        title: "Why BG Unified Solutions?",
        rowDistance: 8,
        py: 16,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Reliable and Secure",
                    description: "Complete security on our end, while connecting to these cloud platforms. Improve the experience of users throughout the extended enterprise providing significant benefits and reliability.",
                    image: "/assets/images/Illustrations/Varied_Web_Hosting_Solutions.svg"
                },
                {
                    title: "Scalable",
                    description: "Traffic increased or decreased is handled with no difficulty at all. Avoiding vendor lock-in and meeting data-sovereignty requirements. Geo-redundant for improved performance.",
                    image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
                },
                {
                    title: "Integration",
                    description: "Simplified usage and integration of new technology services. On-demand communication and connectivity. Multi-cloud operations with a complex structure handled easily.",
                    image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
                }]
            }
        }]
    }
]