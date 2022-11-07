import React from "react";
import { createContext, useState, useContext} from "react";




const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const LogIn = (user) => {
    setUser(user);
    setEmail(email);
    setPassword(password);
  };
  const LogOut = () => {
    setUser(null);
    setEmail(null);
    setPassword(null);
    
  }

  
  return (
    <AuthContext.Provider value={{ user, email, password, LogIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}