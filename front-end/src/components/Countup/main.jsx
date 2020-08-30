import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const MyCount = ({endPoint, startPoint = 0, duration=1.7, ...props}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <>
<<<<<<< HEAD
            <CountUp end={props.endpoint || 100} start={viewPortEntered ? null : props.startingpoint || 0} delay={props.delay || 0.4} useEasing={false} duration={1.7} suffix={props.suffix || ""} prefix={props.prefix || ''}>
=======
            <CountUp end={endPoint} start={viewPortEntered ? null : startPoint} useEasing={true} duration={duration} {...props}>
>>>>>>> 2a798f46b6fd2a5532dc1926c511170dfe516551
                {({ countUpRef }) => {
                    return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                                if (isVisible) {
                                    setViewPortEntered(true);
                                }
                            }}
                        >
                            <span ref={countUpRef} className="display4 mb-0 text-primary" {...props} />
                        </VisibilitySensor>
                    );
                }}
            </CountUp>
            <h2 className="display6">{props.subtext || ""}</h2>
            <p className="text-secondary">{props.description || ""}</p>
        </>
    );
}

export default MyCount;