import React from "react";
import PlanCard from "../components/PlanCard";
import { usePlans,useUpdatePlan } from "../hooks/usePlans";
import LoadingSpinner from "../LoadingSpinner";
import { useUserProfile } from "../hooks/useUsers";


function PlansPage() {
  const { data: plans, isLoading, error } = usePlans();
  const {  mutateAsync,  } = useUpdatePlan();

  // console.log(plans)
  function handleSubscribe(plan) {
    const userId = localStorage.getItem("userId")
      console.log(plan)
      const data = {userId:userId, planId:plan._id}
      mutateAsync(data)
    alert(`Subscribe to ${plan.name} plan! .Complete Payment?`);
  }
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Failed to load plans</div>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Choose a Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans?.plans?.map((plan) => (
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
