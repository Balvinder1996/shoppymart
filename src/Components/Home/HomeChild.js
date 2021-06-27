import React, { useState } from 'react';
import CountUp  from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const HomeChild=(props)=>

{
    const [start,setstart]=useState(props)
    return(
        <>
          <h1 className={'Countnumber'}>
                    <CountUp start={0} end={props.sending} delay={0}>
                        {({ countUpRef,start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
            </h1>
        </>
    )
}
export default HomeChild