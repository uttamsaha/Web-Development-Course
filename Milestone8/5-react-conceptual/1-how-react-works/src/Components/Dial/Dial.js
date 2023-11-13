import React from "react";
const Dial = (props) => {
    // sate er value props hisebe sent kore dile state change hole sob jaigai props er value te giye change hoie jabe..
    return (
        <div style={{border:'2px solid green', margin: '15px'}}>
            <h2>This is dial</h2>
             {/* sate er value props hisebe sent kore dile state change hole sob jaigai props er value te giye change hoie jabe.. */}
            <p>Steps: {props.steps}</p>
        </div>
    )
}
export default Dial;