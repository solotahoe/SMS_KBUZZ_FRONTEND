import { useQuery } from "@tanstack/react-query";
import { fetchPlans } from "../api/plan";

export const usePlans = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
};
