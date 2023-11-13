import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 100,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 900,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 pb-5">
      <h1 className="text-4xl p-4 mt-4">Best deal of the town</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOption.map((option) => (
          <PricingOption option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};
export default Pricing;
