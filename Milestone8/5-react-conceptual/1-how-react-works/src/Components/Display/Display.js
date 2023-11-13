import React from "react";
import Dial from "../Dial/Dial";
const Display = (props) => {
    return (
        <div style={{border: '2px solid blue', margin:'15px'}}>
            <h2>Name: {props.name}</h2>
            <p>Steps: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    )
}
export default Display;