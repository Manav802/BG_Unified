import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const MyCount = ({ endPoint, startPoint = 0, duration = 1.7, ...props }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <>
            <CountUp end={endPoint} start={viewPortEntered ? null : startPoint} useEasing={true} duration={duration} {...props}>
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
                            <span ref={countUpRef} className="mb-0 text-primary" {...props} />
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