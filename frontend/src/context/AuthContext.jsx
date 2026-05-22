import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  axios.defaults.withCredentials = true;

  const login = async (email, password) => {
    const { data } = await axios.post("http://localhost:5000/api/login", { email, password });
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = data.user.role === "admin" ? "/dashboard" : "/";
  };

  const signup = async (name, email, password, role) => {
    await axios.post("http://localhost:5000/api/signup", { name, email, password, role });
    window.location.href = "/login";
  };

  const logout = async () => {
    await axios.post("http://localhost:5000/api/logout");
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>

  );
};