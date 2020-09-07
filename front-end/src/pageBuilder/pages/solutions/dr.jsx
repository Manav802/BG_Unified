export default [
    {
        gap: 10,
        py: 16,
        body: [
            {
                width: ["100%", "100%", 1 / 2],
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
                width: ["100%", "100%", 1 / 2],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: "lg",
                    title: "Always stay aware and prepared",
                    titleSize: 32,
                    text: <span>Disaster Recovery Management as a Service is basically preparing your organization for a failure or situation that you are unable to predict. The situations may be a catastrophic failure, a natural calamity, data being lost, server not functioning properly, data centres being compromised and so on. Predicting the most unlikely events that may cause data loss, data breach and hinder the functioning of an organization, finding and installing solutions to these disasters beforehand is what Disaster Recovery Management is all about.
                    </span>
                }]
            }]
    },
]