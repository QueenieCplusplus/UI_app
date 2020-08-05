// 2020, 8/05, am 11:00
// use react-spring
// scroll bar
// Not Work!!!

import React from 'react';
// import {useState} from 'react';
import {useSpring, animated, interpolate} from 'react-spring';

const Iapp = ()=>{

    //const state = useState({c: 0})

    /*const props = useSpring(
        {opacity: 1, from:{ opacity:0}},
        {scroll: 100000, from:{ opacity:0} }
    ) // 比 useState() 多了 from：{} k/v 屬性
    */

    /*const {o, xyz, color} = useSpring({
        from: {o: 0, xyz: [0, 0, 0], color: 'black'},
        o: 1,
        xyz: [10, 20, 5],
        color: 'red'
      })*/

      const {opacity, color} = useSpring({

        from:{opacity: 0, color: 'orange'},
        opacity: 1,
        color: 'green',

      })
      
    return (

        <div>
            <h1>
                <animated.div
                style={{
                    color: color,
                    opacity:opacity,
                    
                }}
                >
                {opacity.interpolate(n => n.toFixed(100)) }
                </animated.div>
            </h1>

       </div>
        
    )

}

export default Iapp;