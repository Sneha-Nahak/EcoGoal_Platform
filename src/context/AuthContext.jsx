import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isAuthenticated = !!token;

  const login = ({ user, token }) => {
    localStorage.setItem("token", token);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token && !user) {
          const res = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const data = await res.json();

          if(res.ok){
            setUser(data);
          } else{
            logout();
          }
        }
      } catch (error) {
        logout();
      }
    };

    fetchUser();
  },[token]);

  return (
    <AuthContext.Provider value={{user,token, isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
};
