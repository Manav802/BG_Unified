import React from "react";
import {
    Button,
    Collapse,
    Select,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Flex,
    FormLabel,
    Switch,
    Box,List,ListIcon,ListItem,Heading
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import {PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import Flickity from 'react-flickity-component'

  

const GPUS=[
    {
        name:"V100",
        featureList:["1 GPUs/Board (Volta)","5120 CUDA Cores", "640 Tensor Cores", "32GB/16GB HBM2 Memory","(1,2,4,8,16,32) GB vGPU Profiles","PCIe 3.0 Dual Slot & SXM2 (rack servers)", "250W/300W", "Passive Thermal","GRID vPC/vApps, Quadro vDWS Software",]
    },
    {
        name:"RTX 8000",
        featureList:["1 GPUs/Board (Turing)","4608 CUDA Cores", "576 Tensor Cores","72 RT Cores", "48GB GDDR6 Memory","(1,2,3,4,6,8,12,16,24,48) GB vGPU Profiles","PCIe 3.0 Dual Slot ", "295W", "Active Thermal","Quadro vDWS Software",]
    },
    {
        name:"RTX 6000",
        featureList:["1 GPUs/Board (Turing)","4608 CUDA Cores", "576 Tensor Cores","72 RT Cores", "24GB GDDR6 Memory","(1,2,3,4,6,8,12,24) GB vGPU Profiles","PCIe 3.0 Dual Slot", "295W", "Active Thermal","Quadro vDWS Software",]
    },
    {
        name:"P40",
        featureList:["1 GPUs/Board (Pascal)","3840 CUDA Cores", "24GB GDDR5 Memory","(1,2,3,4,6,8,12,24) GB vGPU Profiles","PCIe 3.0 Dual Slot (rack servers)", "250W", "Passive Thermal","GRID vPC/vApps, Quadro vDWS Software",]
    },
    {
        name:"T4",
        featureList:["1 GPUs/Board (Turing)","2560 CUDA Cores", "320 Tensor Cores","40 RT Cores", "16GB GDDR6 Memory","(1,2,4,8,16) GB vGPU Profiles","PCIe 3.0 Single Slot (rack servers)", "70W", "Passive Thermal","GRID vPC/vApps, Quadro vDWS Software",]
    },
    {
        name:"M10",
        featureList:["1 GPUs/Board (Maxwell)","2560 Total CUDA Cores", "32GB GDDR5 Total Memory","(0.5,1,2,4,8) GB vGPU Profiles","PCIe 3.0 Dual Slot (rack servers)", "225W", "Passive Thermal","GRID vPC/vApps, Quadro vDWS Software",]
    },
    {
        name:"P6",
        featureList:["1 GPUs/Board (Pascal)","2048 CUDA Cores", "16GB GDDR5 Memory","(1,2,4,8,16) GB vGPU Profiles","MXM (blade servers)", "90W", "Bare Board Thermal","GRID vPC/vApps, Quadro vDWS Software",]
    }    
]

function Carousel(){
    return(
    <Flickity className="gpu-slider" options={{ initialIndex:3, cellAlign:"center",contain:true,pageDots: false,
        }
    }
    >
        {GPUS.map((x)=>(
            <Box transform="scale(0.8)" transition="0.3s" maxW="350px" w="100%">
      <PricingCard
            title={x.name}
            icon="/assets/images/icons/theme/work.svg"
            featureList={x.featureList}
        >
            <PricingQuote
                buttonStyle="mt-3"
                
                button
                serviceName="GPU As A Service"
                serviceDescription={`GPU : NVIDIA ${x.name}`}
            ></PricingQuote>
        </PricingCard>
        </Box>
        ))}
        
        
   

        
    </Flickity>
    )
}

function GPUPricing(props) {
    const [show, setShow] = React.useState(false);
    const openControls = () => setShow(true);
    const [value, setValue] = React.useState(1);
    const handleChange = (value) => setValue(value);
    const [restorePoints, setRestorePoints] = React.useState("");
    const [geoLocations, setGeoLocations] = React.useState("");
    const [hourlyBackups, setHourlyBackups] = React.useState(false);
    const handleHourlyBackups = (hourlyBackups) =>
        hourlyBackups ? ",Enabled Hourly Backups" : "";
        
    return (
            <div id="pricing" className="container-fluid">
                <Carousel/>
            </div>
        )
    }

export default GPUPricing;
