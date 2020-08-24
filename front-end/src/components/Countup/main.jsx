import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const MyCount = (props) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <>
            <CountUp end={props.endPoint} start={viewPortEntered ? null : 0} delay={0.7} useEasing={false} duration={1.7} suffix={"+"}>
                {({ countUpRef }) => {
                    return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                                if (isVisible) {
                                    setViewPortEntered(true);
                                }
                            }}
                            delayedCall
                        >
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    );
                }}
            </CountUp>
        </>
    );
}

export default MyCount;