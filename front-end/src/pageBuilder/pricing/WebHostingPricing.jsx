import React from 'react';
import {Button, Collapse, NumberInput,Select,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
Slider, SliderThumb, SliderTrack, SliderFilledTrack,Switch,FormLabel} from '@chakra-ui/core'
import Fade from 'react-reveal/Fade';
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'


const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

function WebHostingPricing(props) {
  const [show, setShow] = React.useState(false);
    const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);}
    const [plan,setPlan] = React.useState("");
    const types = [{name:"Non resilient (APACHE)",icon:""},
    {name:"Non resilient (APACHE) with MYSQL DB",icon:""},
    {name:"Non resilient WINDOWS 2016 STD",icon:""},
    {name:"Non resilient WINDOWS 2016 STD WITH DB ATTACHED",icon:""},
    {name:"Resilient (APACHE)",icon:""},
    {name:"Resilient (APACHE) with MYSQL DB",icon:""},
    {name:"Resilient WINDOWS 2016 STD",icon:""},
    {name:"Resilient WINDOWS 2016 STD WITH DB ATTACHED",icon:""},
    {name:"Dedicated DB Server (Windows 2016 Standard with SQL Server) with daily backups.",icon:""},
    {name:"Dedicated DB Server (Windows 2016 Standard with SQL Server) with hourly snapshots.",icon:""}]
    const [type,setType] = React.useState(`,${types[0].name}`);
    const [dailyBackups, setDailyBackups] = React.useState(false);
    const handledailyBackups = (dailyBackups) => (dailyBackups) ? (",Enabled Daily Backups") : ("")
    const [UTMSwitch,setUTMSwitch] = React.useState(false);
    const handleUTMSwitch = (UTMSwitch) => (UTMSwitch) ? (",Enabled UTM Firewall Protection") : ("")
    const [UTM,setUTM] = React.useState(0);
    const [showUTMSlider, setShowUTMSlider] = React.useState(false);
    const [IP,setIP] = React.useState(0);
    const resetOnCardChange = () =>{
      setIP(0);
      setDailyBackups(false);
      setUTM(0);
      setType(`,${types[0].name}`);
      setShowUTMSlider(false);
      setUTMSwitch(false);
  }
  return (
    <div id="pricing" className="container">
    <Fade duration={500} bottom>
    <div className="row no-gutters px-lg-5 px-3">
        <div className="col-lg-4 my-3">
            <PricingCard  title="Standard" icon="/assets/images/icons/theme/paper-plane.svg" featureList={["Include 2vCPU", "Includes 4 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]}>
                <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Standard"); resetOnCardChange();}}>View More</Button>
           </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard title="Premium" icon="/assets/images/icons/theme/airplane.svg" featureList={["Include 4vCPU", "Includes 6 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]}>
                <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Premium"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard className="hover-effect" title="Gold" icon="/assets/images/icons/theme/rocket.svg" featureList={["Include 6vCPU", "Includes 8 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]}>
                <Button className="mt-3" variantColor="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Gold"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
    </div>
    </Fade>
    <div id="collapse-1">
        <Collapse className="px-lg-5" mt={6} isOpen={show}>
            <div className="px-4 py-5 border">
                <div className="display5 text-center">{plan}</div>
                <div className="row px-3">
                    <div className="col-lg-10 offset-lg-1 my-3">
                        <div className="h6">Choose a type : </div>
                        <Select value={type} onChange={(e)=>{setType(e.target.value)}} variant="outline"  > 
                        {types.map((x)=> <option key={x.name} value={`,${x.name}`}>{x.name}</option>)}
                        </Select>
                    </div>
                    <div className="col-lg-12 offset-lg-1 my-3">
                        
                        <Switch isChecked={dailyBackups} onChange={(e) => { setDailyBackups(e.target.checked) }} color="primary" mb={0} id="daily-backups" />
                        <FormLabel mb={0} ml="12px" htmlFor="hourly-backup">Daily Backups</FormLabel>
                       
                    </div>
                    <div className="col-lg-11 offset-lg-1 mt-2">
                        
                        <Switch isChecked={UTMSwitch} onChange={(e) => { setUTMSwitch(e.target.checked);
                        if(e.target.checked==false){setShowUTMSlider(false); setUTM(0);}  }} color="primary" mb={0} id="UTM-switch" />
                        <FormLabel mb={0} ml="12px" htmlFor="UTM-Firewall"> UTM Enabled Firewall Protection</FormLabel>

                        
                       
                    </div>
                    {UTMSwitch &&
                    <div className="col-lg-11 offset-lg-1 mt-2">
                    <p className=" NunitoSans-Bold ">
                            {" "}
                            This type includes maximum 2 web servers for UTM Firewall Protection.
                            <a
                            className="text-primary"
                            onClick={() => {
                                setShowUTMSlider(!showUTMSlider); setUTM(0);
                            }}
                            >
                            {"  "}
                            Add Additional Web Servers{" "}
                            </a>{" "}
                        </p>
                       
                    </div>
                    }
                    <div className="col-lg-10 offset-lg-1">
                        <Collapse className="mt-3" isOpen={showUTMSlider}>
                        <FormLabel htmlFor="UTM-Firewall">Additional Web Servers for UTM Firewall Protection :</FormLabel>
                        <Slider
                            color="primary"
                            defaultValue={0}
                            value={UTM}
                            max={20}
                            onChange={(value) => {
                            setUTM(value);
                            }}
                        >
                            <SliderTrack h="14px" borderRadius="7px" />
                            <SliderFilledTrack h="14px" borderRadius="7px" />
                            <SliderThumb
                            className="shadow-md"
                            fontSize="md"
                            fontWeight="800"
                            width="auto"
                            padding="8px"
                            height="28px"
                            children={UTM}
                            />
                        </Slider>
                        </Collapse>
                    </div>

                    <div className="col-lg-4 offset-lg-1 mt-4 mb-2">
                        <div className="h6">Public IPs</div>
                        <NumberInput
                        value={IP}
                        onChange={(value) => {value<=20?setIP(value):setIP(20)}}
                        defaultValue={0}
                        min={0}
                        max={20}
                        >
                        <NumberInputField className="bg-light" />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                        </NumberInput>
                    </div>
                    
                    <div className="col-lg-6 mt-4 py-2 d-flex justify-content-end align-items-end">
                        <PricingQuote serviceName="Web Hosting As A Service" serviceDescription={`${plan} ${type} ${handledailyBackups(dailyBackups)} ${handleUTMSwitch(UTMSwitch)} ${verifyNotEmpty(UTM,"Additional UTM Firewall Web Servers")} ${verifyNotEmpty(IP,"Public IPs")}`} button ></PricingQuote>
                    </div>
                </div>
            </div>
        </Collapse>
    </div>
</div>
  )
}

export default WebHostingPricing;