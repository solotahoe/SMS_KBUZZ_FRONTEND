import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import { fetchPlans , subcribeUser} from "../api/plan";
import { toast } from "react-toastify";


export const usePlans = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
};


export const useUpdatePlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: subcribeUser,
    onSuccess: () => {
      toast.success("Your Subription Plan has been updated")
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
    onError: (error) => {
      console.error("Update Failed:", error);
    },
  });
};
