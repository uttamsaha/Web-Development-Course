import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../Display/Display';

const Watch = () => {
    const [setps, setSetps] = useState(0)
    const IncreaseSetps = () => setSetps(setps + 1)

    useEffect(()=>{
        console.log(setps); // to get updated steps value 
    },[setps]) //useEffect noramally ekabr call hoi dependncey list thakar karone dependcney update hole function call hobe 
    return (
        <div style={{border:'2px solid red'}}>
            <h2>This is smart watch</h2>
            <h3>My current steps: {setps}</h3>
            <button onClick={IncreaseSetps}>De Dour ........</button>
             {/* sate er value props hisebe sent kore dile state change hole sob jaigai props er value te giye change hoie jabe.. */}
            <Display name={'garmin'} steps={setps}></Display>
            
        </div>
    )
}
export default Watch;