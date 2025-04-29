import React from "react";
import PlanCard from "../components/PlanCard"; // import it!

const plans = [
  { id: 1, name: "Free Plan", price: 0, duration: "7 days" },
  { id: 2, name: "Silver Plan", price: 10, duration: "30 days" },
  { id: 3, name: "Gold Plan", price: 20, duration: "90 days" },
  { id: 4, name: "Platinum Plan", price: 40, duration: "180 days" },
];

function PlansPage() {
  function handleSubscribe(plan) {
    alert(`You selected the ${plan.name}!`);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Choose a Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            duration={plan.duration}
            onSubscribe={() => handleSubscribe(plan)}
          />
        ))}
      </div>
    </div>
  );
}

export default PlansPage;
