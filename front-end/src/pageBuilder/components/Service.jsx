import CardWithIcon from "./CardWithIcon"
import {services} from "../../../public/assets/data/searchDatabase.json"
import React, {useEffect} from 'react';


function Service(props) {
    
    const [service, setService] = React.useState({})
    
    useEffect(() => {
        var obj = services.filter(s => s.name === props.service)[0]
        setService(obj)
    })

    return (
        <div>
            <CardWithIcon title={service.name} iconBg="#000" link={service.link} icon={service.icon}>{service.description}</CardWithIcon>
        </div>
    );
}

export default Service;