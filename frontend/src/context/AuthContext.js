import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const SUPER_ADMIN = {
    email: "admin@everest40.com",
    password: "everest40",
    isAdmin: true,
  };

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Função de login
  const login = (email, password) => {
    if (email === SUPER_ADMIN.email && password === SUPER_ADMIN.password) {
      const adminUser = { email, isAdmin: true };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
