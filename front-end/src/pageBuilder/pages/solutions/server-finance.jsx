import { Box, Flex, Text } from "@chakra-ui/core"
import services from "../../../database/services"

const set = [
    "Data Management",
    "Cluster Management",
    "File Transfer Management",
    "Configuration and Change Management",
    "Asset and Inventory Management",
    "Backup and Archiving",
    "Batch Processing",
    "Disaster Recovery",
    "Security Management",
    "Storage Management",
    "Performance Testing",
    "Web Systems Management",
]
const OperationSet = (props) => 
        <Flex justify="center" wrap="wrap" width="100%">
            {set.map((feature) => <Box px={1} my={1} width={["100%",6/12,4/12]} >
                <Box className="hover-effect" textAlign="center" bg="white" boxShadow="xl" rounded={8} p={4}><b>{feature}</b></Box>
            </Box>)}
        </Flex>

 
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
                    images: ["/assets/images/illustrations/data_center.svg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                mt:[0,3],
            width: ["100%", "100%", 1/2],
            type: "content",
            data: [{
                textAlign: "justify",
                fontSize: ["md","md","md","lg"],
                title: "What is Server Infrastructure?",
                titleSize: [28,28,28,32],
                text: <span>The server infrastructure of an association can be recognized as the foundation that holds the system together. 
                    It includes physical and virtual resources, including a comprehensive set of hardware, software, network resources, 
                    and services. These resources can help in supporting the storage, flow, processing, and data analysis. 
                </span>
            }]
        }]
    },
    {
        title:"Why BGUS as your Server Infrastructure provider?",
        description:"BG Unified Solutions provide a complete set of operations through its Server Infrastructure.",
        rowDistance: 8,
        my: 0,
        pt: 5,
        pb: 10,
        gap: 10,
        body: [{
            type:"pricing",
            data: <OperationSet></OperationSet>
        }]
    },
    {
        title: "OUR TRUSTED SYSTEM INFRASTRUCTURE SUPPORTED VENDORS",
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
                images: ["/assets/images/brands/cisco-1.png", "/assets/images/brands/huawei-1.png","/assets/images/brands/nutanix.png", "/assets/images/brands/hp.png", "/assets/images/brands/dell.png", ],
                height: "128px",
                mx:"32px",
                width:"160px",
                objectFit: "contain"
            }
        }]
    },
]