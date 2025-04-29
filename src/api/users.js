import axios from "axios";
import { API_BASE_URL } from "../config";

// export const fetchUsers = () => axios.get(`${API_BASE_URL}/user/get/all`);
// src/apis/userApi.js
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/get/all`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/create`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/user/login`, credentials);
  if (response.data === "error") {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/profile/${userId}`);
  return response.data;
};

export const updateUserProfile = async ({ userId, name, email }) => {
  const response = await axios.put(`${API_BASE_URL}/user/update/${userId}`, {
    name,
    email,
  });
  return response.data;
};

export const deleteUserProfile = async (userId) => {
  const response = await axios.delete(`${API_BASE_URL}/user/delete/${userId}`);
  return response.data;
};
