import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";


const PricingOption = (props) => {
  const { name, price,benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl">{name}</h2>
      <span className="text-4xl font-bold">{price}</span>
      <span>/mo</span>
      <div>
        <h3 className="text-2xl text-left">Benefits</h3>
        {
            benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
        }
      </div>
      <button className="bg-green-500 flex w-full justify-center py-2 rounded mt-4 text-white">Buy Now <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon></button>
    </div>
  );
};
export default PricingOption;
