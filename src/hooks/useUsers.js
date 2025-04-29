import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchUsers,
  createUser,
  loginUser,
  fetchUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../api/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // console.log({data})
      if (data?.data === "error") {
        toast.error("Invalid Credentials");
      } else {
        localStorage.setItem("token", data?.token);
        localStorage.setItem("name", data?.user?.name);
        localStorage.setItem("email", data?.user?.email);
        localStorage.setItem("userId", data?.user?._id);
        toast.success("Login successful!");
        navigate("/home/dashboard");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Login failed.");
    },
  });
};

export const useUserProfile = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !!userId, // Only run query if userId exists
    onError: (error) => {
      console.error("Failed to fetch profile:", error);
      toast.error("Error fetching Profile details");
      navigate("/");

      // Optional: Add toast notification
      // toast.error(error?.response?.data?.message || "Failed to load profile");
    },
  });
};

export const useUPdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("Profile Udated")
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      console.error("Update Failed:", error);
    },
  });
};

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUserProfile,
    onSuccess: () => {
      toast.success("User Deleted Successfully")
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("delete Failed:", error);
    },
  });
};
