import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Update with your backend URL
});

// Attach Token to Requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

// Auth API
export const login = (data) => API.post("/login", data);
export const registerSuperAdmin = (data) => API.post("/register-super-admin", data);

// Admin APIs
export const getAdmins = () => API.get("/admins");
export const addAdmin = (data) => API.post("/add-admin", data);
export const deleteAdmin = (id) => API.delete(`/delete-admin/${id}`);

export default API;
