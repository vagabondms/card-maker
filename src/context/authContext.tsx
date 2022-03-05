import React, { createContext, ReactElement, ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext({
  user: "",
  signIn: (userId: string) => {},
  signOut: () => {},
});

type AuthProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState("");
  const signIn = (userId: string) => {
    setUser(userId);
  };

  const signOut = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

type RequireAuthProps = {
  children: ReactElement;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user === "") {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
  return children;
};

export { AuthContext, AuthProvider, RequireAuth };
