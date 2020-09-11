import content from "../pageBuilder/pages/newsroom/index"

const blogs = [
    {
        index: 1,
        title: "How we are helping people during COVID-19 Pandemic",
        description: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just enjoying the comfort of staying at home.",
        date: "23rd August 2020",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/coronavirus.jpg",
        category: "Updates",
        tags: ["cisco", "socaas"],
        link: "1-random-title-for-a-blog-article",
        content: content.covid19,
    },
    {
        index: 2,
        title: "Collaboration with DataCom and Huawei",
        description: "It was a great morning to have a company of friends from Datacom and Huawei in one of the BG Unified Solutions DC locations.",
        date: "23rd August 2019",
        by: "Saurabh Sareen",
        avatar: "/assets/images/team/saurabh.jpg",
        image: "/assets/images/newsroom/meet_with_datacom.jpg",
        category: "Updates",
        tags: ["infrastructure", "iaas"],
        link: "2-collaboration-with-datacom-and-huawei",
        content: [{
            type: "content",
            data: [{
                text: "Hello"
            }]
        }],
    },
    
    
]

export default blogs