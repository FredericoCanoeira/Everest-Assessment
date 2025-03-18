import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({ email, isAdmin: res.data.isAdmin }));
      axios.defaults.headers.common["Authorization"] = res.data.token;
      setUser({ email, isAdmin: res.data.isAdmin });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
