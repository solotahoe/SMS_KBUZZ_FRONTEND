import axios from "axios";
import { API_BASE_URL } from "../config";

export const fetchPlans = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/plan/get/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const subcribeUser = async (subData) => {
  console.log(subData)
  try {
    const response = await axios.post(`${API_BASE_URL}/sub/create`, subData);
    if (response.data === "error") {
      throw new Error("Error creating subscription");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};