import CardWithIcon from "./CardWithIcon"
import services from "../../database/services"
import React, { useEffect } from 'react';


function Service(props) {

    var service = Object.entries(services).filter(s => s[1].title === props.service)[0]

    return (
        <div>
            {service && <CardWithIcon title={service[1].title} iconBg={service.color} link={"/solution/" + service[0]} icon={service[1].icon}>{service[1].description}</CardWithIcon>}
        </div>
    );
}

export default Service;