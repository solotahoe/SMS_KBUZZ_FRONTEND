import axios from "axios";
import { API_BASE_URL } from "../config";

// export const fetchUsers = () => axios.get(`${API_BASE_URL}/user/get/all`);
// src/apis/userApi.js
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/user/get/all`);
  return response.data;
};

// export const createUser = (userData) => axios.post(`${API_BASE_URL}/users`, userData);
// export const updateUser = (id, userData) => axios.put(`${API_BASE_URL}/users/${id}`, userData);
// export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);
