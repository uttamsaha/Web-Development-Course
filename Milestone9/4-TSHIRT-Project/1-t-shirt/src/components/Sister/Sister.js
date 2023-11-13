import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const ring = useContext(RingContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>{ring}</p>
    </div>
  );
};
export default Sister;
