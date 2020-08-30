import sections from '../pageBuilder/pages/index'

const services = {
    "infra": {
        title: "Infrastructure As A Service",
        slogan: "Store your data with our security and reliability.",
        bgImage: "",
        icon: "",
        color: "",
        tags: "",
        description: "",
        illustration: "",
        relatedService: ["Storage As A Service", "DNS As A Service", "DR As A Service"],
        conclusions: "Ready to get started?",
        sections: sections.infra
    },
    "storage": {
        title: "Storage As A Service",
        slogan: "Storage Made Simple.",
        bgImage: "",
        icon: "",
        color: "",
        tags: "",
        description: "",
        illustration: "",
        relatedService: ["Infrastructure As A Service", "Infrastructure As A Service", "Infrastructure As A Service"],
        conclusions: "Ready to get Storage?",
        sections: sections.storage
    }
}

export default services