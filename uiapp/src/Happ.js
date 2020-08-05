// 2020, 8/05, am 10:30
// use Spring
// count down 

import React, {Fragment} from 'react';
import {useSpring, animated} from 'react-spring'; // fetch import

const Happ = ()=>{

    const props = useSpring({ number: 1000000000000000000000000, from: { number: 0 }})

    return (
            <Fragment>

                <h1> 
                <animated.span>{props.number}</animated.span>
                </h1>


            </Fragment>
        
    )
}

export default Happ;