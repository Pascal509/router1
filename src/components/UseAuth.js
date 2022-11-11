import React from "react";
import { createContext, useState, useContext} from "react";




const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const LogIn = (user, password) => {
    setUser(user);
    setPassword(password);
  };
  const SignIn = (user) => {
    setUser(user);
  };

  const LogOut = () => {
    setUser(null);
    setPassword(null);
  }

  
  return (
    <AuthContext.Provider value={{ user, password, LogIn, LogOut, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}