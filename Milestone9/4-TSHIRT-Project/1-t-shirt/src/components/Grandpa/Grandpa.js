import React, { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const RingContext = createContext('Ring');
const ornament = 'Diamond Ring';

const Grandpa = () => {
    const house = 7;
    return (
      <RingContext.Provider value={ornament}>
        <div className="grandpa">
          <Father></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </div>
      </RingContext.Provider>
    );
}
export default Grandpa;