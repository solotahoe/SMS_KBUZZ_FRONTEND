import axios from "axios";
import { API_BASE_URL } from "../config";

export const fetchPlans = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/plan/get/all`);
    return response.data; 
  } catch (error) {
    console.log(error)
  }
   
  };