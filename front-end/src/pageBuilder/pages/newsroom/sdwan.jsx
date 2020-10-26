import {Image} from "@chakra-ui/core"

export default [
    {
        type: "content",
        fontSize: "xl",
        data: [
            {
                text: <span> <b>BG Unified Solutions</b> and <b>Fortinet</b> working collaboratively on offering highly secured <b>SDWANaaS</b> services in addition to WAFaaS, BOTaaS and DDOSaaS to the end customer.
                </span>,
                textAlign: "justify"
            },
            {
                text: <span>Give us an opportunity to provide you with a HIGHLY SECURED SDWANaaS, Internet Bandwidth with a fully Managed Firewall (Redundant/Dedicated VDOM/VSYS) in addition to the three fully UTM enabled layers of Firewall complimentary for the first 6 months. Not a bad deal ! ! ! !
                </span>,
                textAlign: "justify",
                mt:"32px",
            },
            {
                image:<Image justifySelf="center" src="/assets/images/services/sdwan.jpg"/>,
                imageJustify: "center",
                
            },
            {
                text:<span>One point to connect to all other public clouds including AWS/AZURE/GOOGLE. We will provide you with a high speed backbone! ! !
                </span>,
                mt:"32px"
            },
            
            {
                text:<span>We will be doing a POC for one of the upcoming customer and demonstrate the benefits of Fortinet SDWAN offerings bundled with Fortinet Next Generation Firewall, Web Application Firewall and BOTaaS.
                </span> ,
                textAlign: "justify"
            },
            
                   ]
    }
]